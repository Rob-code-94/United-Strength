import { readFile } from "node:fs/promises";
import {
  MEDIA_SLOTS,
  mergeLibrary,
  slotsUsingLibraryUrl,
  validateFields,
  type BrandKitStore,
  type MediaLibraryItem,
  type MediaSlot,
} from "../../src/hub/brand-kit.js";
import { randomBytes } from "node:crypto";
import {
  clearSessionCookie,
  digestsMatch,
  hubPassword,
  passwordDigest,
  passwordsMatch,
  readSession,
  sessionCookie,
} from "./session.js";
import { sendApplication, sendHubReset } from "./apply-mail.js";
import { sendRunClubSignup } from "./run-club-mail.js";
import { loadHubAuth, loadStore, localMediaPath, saveHubAuth, saveMedia, saveStore } from "./store.js";

export interface HubResult {
  status: number;
  headers: Record<string, string>;
  body: string | Buffer;
}

const JSON_HEADERS = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" };

function json(status: number, payload: unknown, extra: Record<string, string> = {}): HubResult {
  return {
    status,
    headers: { ...JSON_HEADERS, ...extra },
    body: JSON.stringify(payload),
  };
}

function pathnameOf(url: string): string {
  const path = url.split("?")[0] ?? url;
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

function publicView(store: BrandKitStore) {
  return { published: store.published };
}

function editorView(store: BrandKitStore) {
  return {
    draft: store.draft,
    published: store.published,
    draftUpdatedAt: store.draftUpdatedAt,
    publishedUpdatedAt: store.publishedUpdatedAt,
    library: mergeLibrary(store.library),
  };
}

const IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const MAX_BYTES_STILL = 3_000_000;
const MAX_BYTES_GIF = 5_000_000;

function isSlot(value: string): value is MediaSlot {
  return MEDIA_SLOTS.some((slot) => slot.key === value);
}

const RESET_WINDOW_MS = 30 * 60 * 1000;
const RESET_COOLDOWN_MS = 60 * 1000;

async function passwordAccepted(given: string): Promise<"ok" | "bad" | "unconfigured"> {
  const auth = await loadHubAuth();
  if (auth.passwordDigest) {
    return digestsMatch(passwordDigest(given), auth.passwordDigest) ? "ok" : "bad";
  }
  const password = hubPassword();
  if (!password) return "unconfigured";
  return given && passwordsMatch(given, password) ? "ok" : "bad";
}

export async function dispatchHub(input: {
  method: string;
  url: string;
  cookie: string | undefined;
  bodyText: string | null;
  origin?: string;
}): Promise<HubResult> {
  const method = input.method.toUpperCase();
  const pathname = pathnameOf(input.url);
  const authed = readSession(input.cookie);

  if (pathname.startsWith("/hub-media/")) {
    const filename = pathname.slice("/hub-media/".length);
    const filePath = localMediaPath(filename);
    if (!filePath) return json(404, { error: "Media was not found." });
    try {
      const bytes = await readFile(filePath);
      const ext = filename.split(".").pop()?.toLowerCase();
      const type =
        ext === "png" ? "image/png" : ext === "webp" ? "image/webp" : ext === "gif" ? "image/gif" : "image/jpeg";
      return {
        status: 200,
        headers: { "content-type": type, "cache-control": "public, max-age=3600" },
        body: bytes,
      };
    } catch {
      return json(404, { error: "Media was not found." });
    }
  }

  if (pathname === "/api/apply") {
    if (method !== "POST") return json(405, { error: "Method not allowed." });
    let payload: { name?: unknown; email?: unknown; phone?: unknown; training?: unknown } = {};
    try {
      payload = input.bodyText ? (JSON.parse(input.bodyText) as typeof payload) : {};
    } catch {
      return json(400, { error: "Application could not be read." });
    }
    const result = await sendApplication({
      name: typeof payload.name === "string" ? payload.name : "",
      email: typeof payload.email === "string" ? payload.email : "",
      phone: typeof payload.phone === "string" ? payload.phone : "",
      training: typeof payload.training === "string" ? payload.training : "",
    });
    if (result.ok === false) {
      return json(result.status, { error: "Application could not be sent." });
    }
    return json(200, { ok: true });
  }

  if (pathname === "/api/run-club") {
    if (method !== "POST") return json(405, { error: "Method not allowed." });
    let payload: { name?: unknown; email?: unknown; mobile?: unknown } = {};
    try {
      payload = input.bodyText ? (JSON.parse(input.bodyText) as typeof payload) : {};
    } catch {
      return json(400, { error: "Signup could not be read." });
    }
    const result = await sendRunClubSignup({
      name: typeof payload.name === "string" ? payload.name : "",
      email: typeof payload.email === "string" ? payload.email : "",
      mobile: typeof payload.mobile === "string" ? payload.mobile : "",
    });
    if (result.ok === false) {
      const message =
        result.status === 503
          ? "Email is not connected yet. Try again later."
          : result.status === 400
            ? "Enter your name, email, and mobile number."
            : "Signup could not be sent. Try again.";
      return json(result.status, { error: message });
    }
    return json(200, { ok: true });
  }

  if (pathname === "/api/hub-session") {
    if (method === "GET") {
      // Quiet probe: 200 + ok:false avoids a red console 401 on cold /hub.
      // POST still returns 401 for a bad password; kit writes stay auth-gated.
      return authed ? json(200, { ok: true }) : json(200, { ok: false });
    }
    if (method === "DELETE") {
      return json(200, { ok: true }, { "set-cookie": clearSessionCookie() });
    }
    if (method !== "POST") return json(405, { error: "Method not allowed." });
    let payload: { password?: string; remember?: boolean } = {};
    try {
      payload = input.bodyText ? (JSON.parse(input.bodyText) as { password?: string; remember?: boolean }) : {};
    } catch {
      return json(400, { error: "Password is required." });
    }
    const given = typeof payload.password === "string" ? payload.password : "";
    const accepted = await passwordAccepted(given);
    if (accepted === "unconfigured") return json(503, { error: "Hub password is not configured." });
    if (accepted === "bad") return json(401, { error: "That password is not correct." });
    const cookie = sessionCookie(Boolean(payload.remember));
    if (!cookie) return json(503, { error: "Hub session is not configured." });
    return json(200, { ok: true }, { "set-cookie": cookie });
  }

  if (pathname === "/api/hub-reset") {
    if (method !== "POST") return json(405, { error: "Method not allowed." });
    let payload: { action?: string; token?: string; password?: string } = {};
    try {
      payload = input.bodyText ? (JSON.parse(input.bodyText) as typeof payload) : {};
    } catch {
      return json(400, { error: "Reset could not be read." });
    }

    if (payload.action === "complete") {
      const token = typeof payload.token === "string" ? payload.token : "";
      const nextPassword = typeof payload.password === "string" ? payload.password : "";
      if (nextPassword.length < 10 || nextPassword.length > 200) {
        return json(400, { error: "Use at least 10 characters." });
      }
      const auth = await loadHubAuth();
      const reset = auth.reset;
      if (!token || !reset || reset.exp < Date.now() || !digestsMatch(passwordDigest(token), reset.digest)) {
        return json(400, { error: "This reset link is invalid or expired." });
      }
      try {
        await saveHubAuth({
          passwordDigest: passwordDigest(nextPassword),
          reset: null,
          resetRequestedAt: auth.resetRequestedAt,
        });
      } catch {
        return json(503, { error: "The new password could not be saved." });
      }
      const cookie = sessionCookie(true);
      if (!cookie) return json(503, { error: "Hub session is not configured." });
      return json(200, { ok: true }, { "set-cookie": cookie });
    }

    const auth = await loadHubAuth();
    if (auth.resetRequestedAt && Date.now() - auth.resetRequestedAt < RESET_COOLDOWN_MS) {
      return json(200, { ok: true });
    }
    const token = randomBytes(32).toString("base64url");
    const origin = (input.origin ?? "http://localhost:5173").replace(/\/$/, "");
    const mailed = await sendHubReset({
      resetUrl: `${origin}/hub?reset=${encodeURIComponent(token)}`,
    });
    if (mailed.ok === false) {
      return json(mailed.status, {
        error:
          mailed.status === 503
            ? "Password reset email is not connected yet."
            : "The reset email could not be sent.",
      });
    }
    try {
      await saveHubAuth({
        ...auth,
        reset: { digest: passwordDigest(token), exp: Date.now() + RESET_WINDOW_MS },
        resetRequestedAt: Date.now(),
      });
    } catch {
      return json(503, { error: "The reset link could not be saved." });
    }
    return json(200, { ok: true });
  }

  if (pathname === "/api/brand-kit" && method === "GET") {
    try {
      const store = await loadStore();
      return json(200, authed ? editorView(store) : publicView(store));
    } catch {
      return json(503, { error: "Brand kit is unavailable. Try again." });
    }
  }

  if (pathname === "/api/brand-kit" && method === "PUT") {
    if (!authed) return json(401, { error: "Sign in required." });
    let payload: { kit?: unknown; expectedUpdatedAt?: string } = {};
    try {
      payload = input.bodyText ? (JSON.parse(input.bodyText) as typeof payload) : {};
    } catch {
      return json(400, { error: "Brand kit could not be read." });
    }
    const checked = validateFields(payload.kit);
    if (checked.ok === false) return json(400, { error: checked.error });
    try {
      const store = await loadStore();
      if (payload.expectedUpdatedAt && payload.expectedUpdatedAt !== store.draftUpdatedAt) {
        return json(409, { error: "This kit was updated elsewhere. Reload and try again.", ...editorView(store) });
      }
      const next: BrandKitStore = {
        ...store,
        draft: checked.value,
        draftUpdatedAt: new Date().toISOString(),
      };
      await saveStore(next);
      return json(200, editorView(next));
    } catch {
      return json(503, { error: "Brand kit could not be saved. Try again." });
    }
  }

  if (pathname === "/api/brand-kit" && method === "POST") {
    if (!authed) return json(401, { error: "Sign in required." });
    let payload: { action?: string; slot?: string; libraryId?: string } = {};
    try {
      payload = input.bodyText ? (JSON.parse(input.bodyText) as typeof payload) : {};
    } catch {
      return json(400, { error: "Request could not be read." });
    }
    try {
      const store = await loadStore();
      if (payload.action === "publish") {
        const next: BrandKitStore = {
          ...store,
          published: structuredClone(store.draft),
          publishedUpdatedAt: new Date().toISOString(),
        };
        await saveStore(next);
        return json(200, editorView(next));
      }
      if (payload.action === "revert") {
        const next: BrandKitStore = {
          ...store,
          draft: structuredClone(store.published),
          draftUpdatedAt: new Date().toISOString(),
        };
        await saveStore(next);
        return json(200, editorView(next));
      }
      if (payload.action === "assignMedia") {
        const slot = payload.slot ?? "";
        const libraryId = payload.libraryId ?? "";
        if (!isSlot(slot) || !libraryId) {
          return json(400, { error: "Pick a library image and a media slot." });
        }
        const item = mergeLibrary(store.library).find((row) => row.id === libraryId);
        if (!item) return json(404, { error: "That library image was not found." });
        const next: BrandKitStore = {
          ...store,
          library: mergeLibrary(store.library),
          draft: {
            ...store.draft,
            media: { ...store.draft.media, [slot]: item.url },
          },
          draftUpdatedAt: new Date().toISOString(),
        };
        await saveStore(next);
        return json(200, editorView(next));
      }
      return json(400, { error: "Unknown action." });
    } catch {
      return json(503, { error: "Brand kit could not be updated. Try again." });
    }
  }

  if (pathname === "/api/brand-kit/media" && method === "POST") {
    if (!authed) return json(401, { error: "Sign in required." });
    let payload: { slot?: string; contentType?: string; dataBase64?: string; name?: string } = {};
    try {
      payload = input.bodyText ? (JSON.parse(input.bodyText) as typeof payload) : {};
    } catch {
      return json(400, { error: "Upload could not be read." });
    }
    const slot = payload.slot ?? "";
    const contentType = payload.contentType ?? "";
    if (!isSlot(slot) || !IMAGE_TYPES.has(contentType) || typeof payload.dataBase64 !== "string") {
      return json(400, { error: "Use a JPEG, PNG, WebP, or GIF image." });
    }
    let bytes: Buffer;
    try {
      bytes = Buffer.from(payload.dataBase64, "base64");
    } catch {
      return json(400, { error: "Use a JPEG, PNG, WebP, or GIF image." });
    }
    const maxBytes = contentType === "image/gif" ? MAX_BYTES_GIF : MAX_BYTES_STILL;
    if (bytes.length === 0 || bytes.length > maxBytes) {
      return json(400, {
        error: contentType === "image/gif" ? "GIF must be under 5 MB." : "Image must be under 3 MB.",
      });
    }
    try {
      const id = randomBytes(8).toString("hex");
      const url = await saveMedia(slot, bytes, contentType);
      const name =
        typeof payload.name === "string" && payload.name.trim()
          ? payload.name.trim().slice(0, 120)
          : `${slot}-${id}`;
      const item: MediaLibraryItem = {
        id,
        url,
        name,
        contentType,
        bytes: bytes.length,
        createdAt: new Date().toISOString(),
      };
      const store = await loadStore();
      const library = [item, ...mergeLibrary(store.library)];
      const next: BrandKitStore = {
        ...store,
        library,
        draft: {
          ...store.draft,
          media: { ...store.draft.media, [slot]: url },
        },
        draftUpdatedAt: new Date().toISOString(),
      };
      await saveStore(next);
      return json(200, { url, item, ...editorView(next) });
    } catch {
      return json(503, { error: "Upload failed. Try again." });
    }
  }

  if (pathname === "/api/brand-kit/library" && method === "POST") {
    if (!authed) return json(401, { error: "Sign in required." });
    let payload: { contentType?: string; dataBase64?: string; name?: string } = {};
    try {
      payload = input.bodyText ? (JSON.parse(input.bodyText) as typeof payload) : {};
    } catch {
      return json(400, { error: "Upload could not be read." });
    }
    const contentType = payload.contentType ?? "";
    if (!IMAGE_TYPES.has(contentType) || typeof payload.dataBase64 !== "string") {
      return json(400, { error: "Use a JPEG, PNG, WebP, or GIF image." });
    }
    let bytes: Buffer;
    try {
      bytes = Buffer.from(payload.dataBase64, "base64");
    } catch {
      return json(400, { error: "Use a JPEG, PNG, WebP, or GIF image." });
    }
    const maxBytes = contentType === "image/gif" ? MAX_BYTES_GIF : MAX_BYTES_STILL;
    if (bytes.length === 0 || bytes.length > maxBytes) {
      return json(400, {
        error: contentType === "image/gif" ? "GIF must be under 5 MB." : "Image must be under 3 MB.",
      });
    }
    try {
      const id = randomBytes(8).toString("hex");
      const url = await saveMedia("library", bytes, contentType, id);
      const name =
        typeof payload.name === "string" && payload.name.trim()
          ? payload.name.trim().slice(0, 120)
          : `upload-${id}`;
      const item: MediaLibraryItem = {
        id,
        url,
        name,
        contentType,
        bytes: bytes.length,
        createdAt: new Date().toISOString(),
      };
      const store = await loadStore();
      const next: BrandKitStore = {
        ...store,
        library: [item, ...mergeLibrary(store.library)],
      };
      await saveStore(next);
      return json(200, { item, ...editorView(next) });
    } catch {
      return json(503, { error: "Upload failed. Try again." });
    }
  }

  if (pathname === "/api/brand-kit/library" && method === "DELETE") {
    if (!authed) return json(401, { error: "Sign in required." });
    let payload: { id?: string } = {};
    try {
      payload = input.bodyText ? (JSON.parse(input.bodyText) as typeof payload) : {};
    } catch {
      return json(400, { error: "Request could not be read." });
    }
    const id = typeof payload.id === "string" ? payload.id.trim() : "";
    if (!id) return json(400, { error: "Library item id is required." });
    try {
      const store = await loadStore();
      const library = mergeLibrary(store.library);
      const item = library.find((row) => row.id === id);
      if (!item) return json(404, { error: "That library image was not found." });
      const used = slotsUsingLibraryUrl(store, item.url);
      if (used.length > 0) {
        return json(400, {
          error: `Remove this image from ${used.join(", ")} before deleting.`,
          slots: used,
        });
      }
      const next: BrandKitStore = {
        ...store,
        library: library.filter((row) => row.id !== id),
      };
      await saveStore(next);
      return json(200, editorView(next));
    } catch {
      return json(503, { error: "Library item could not be deleted." });
    }
  }

  return json(404, { error: "Not found." });
}
