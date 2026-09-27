import { readFile } from "node:fs/promises";
import {
  MEDIA_SLOTS,
  validateFields,
  type BrandKitStore,
  type MediaSlot,
} from "../../src/hub/brand-kit";
import {
  clearSessionCookie,
  hubPassword,
  passwordsMatch,
  readSession,
  sessionCookie,
} from "./session";
import { sendApplication } from "./apply-mail";
import { loadStore, localMediaPath, saveMedia, saveStore } from "./store";

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
  };
}

const IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const MAX_BYTES = 3_000_000;

function isSlot(value: string): value is MediaSlot {
  return MEDIA_SLOTS.some((slot) => slot.key === value);
}

export async function dispatchHub(input: {
  method: string;
  url: string;
  cookie: string | undefined;
  bodyText: string | null;
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

  if (pathname === "/api/hub-session") {
    if (method === "GET") {
      return authed ? json(200, { ok: true }) : json(401, { error: "Sign in required." });
    }
    if (method === "DELETE") {
      return json(200, { ok: true }, { "set-cookie": clearSessionCookie() });
    }
    if (method !== "POST") return json(405, { error: "Method not allowed." });
    const password = hubPassword();
    if (!password) return json(503, { error: "Hub password is not configured." });
    let payload: { password?: string; remember?: boolean } = {};
    try {
      payload = input.bodyText ? (JSON.parse(input.bodyText) as { password?: string; remember?: boolean }) : {};
    } catch {
      return json(400, { error: "Password is required." });
    }
    const given = typeof payload.password === "string" ? payload.password : "";
    if (!given || !passwordsMatch(given, password)) {
      return json(401, { error: "That password is not correct." });
    }
    const cookie = sessionCookie(Boolean(payload.remember));
    if (!cookie) return json(503, { error: "Hub session is not configured." });
    return json(200, { ok: true }, { "set-cookie": cookie });
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
    let payload: { action?: string } = {};
    try {
      payload = input.bodyText ? (JSON.parse(input.bodyText) as { action?: string }) : {};
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
      return json(400, { error: "Unknown action." });
    } catch {
      return json(503, { error: "Brand kit could not be updated. Try again." });
    }
  }

  if (pathname === "/api/brand-kit/media" && method === "POST") {
    if (!authed) return json(401, { error: "Sign in required." });
    let payload: { slot?: string; contentType?: string; dataBase64?: string } = {};
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
    if (bytes.length === 0 || bytes.length > MAX_BYTES) {
      return json(400, { error: "Image must be under 3 MB." });
    }
    try {
      const url = await saveMedia(slot, bytes, contentType);
      const store = await loadStore();
      const next: BrandKitStore = {
        ...store,
        draft: {
          ...store.draft,
          media: { ...store.draft.media, [slot]: url },
        },
        draftUpdatedAt: new Date().toISOString(),
      };
      await saveStore(next);
      return json(200, { url, ...editorView(next) });
    } catch {
      return json(503, { error: "Upload failed. Try again." });
    }
  }

  return json(404, { error: "Not found." });
}
