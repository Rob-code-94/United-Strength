import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { list, put } from "@vercel/blob";
import {
  mergeFaq,
  mergeLibrary,
  mergePages,
  seedFields,
  seedStore,
  type BrandKitFields,
  type BrandKitStore,
  type MediaSlot,
} from "../../src/hub/brand-kit";

function normalizeFields(fields: BrandKitFields): BrandKitFields {
  const seed = seedFields();
  return {
    ...seed,
    ...fields,
    footer: {
      ...seed.footer,
      ...fields.footer,
      phone: fields.footer?.phone?.trim() || seed.footer.phone,
    },
    media: { ...seed.media, ...fields.media },
    faq: mergeFaq(fields.faq),
    pages: mergePages(fields.pages),
  };
}

function normalizeStore(store: BrandKitStore): BrandKitStore {
  return {
    ...store,
    draft: normalizeFields(store.draft),
    published: normalizeFields(store.published),
    library: mergeLibrary(store.library),
  };
}

const FILE = path.join(process.cwd(), ".data", "brand-kit.json");
const AUTH_FILE = path.join(process.cwd(), ".data", "hub-auth.json");
const MEDIA_DIR = path.join(process.cwd(), ".data", "media");
const BLOB_PATH = "hub/brand-kit.json";
const AUTH_BLOB_PATH = "hub/auth.json";

export interface HubAuthRecord {
  passwordDigest: string | null;
  reset: { digest: string; exp: number } | null;
  resetRequestedAt: number | null;
}

function emptyAuth(): HubAuthRecord {
  return { passwordDigest: null, reset: null, resetRequestedAt: null };
}

function blobToken(): string | null {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  return token && token.length > 0 ? token : null;
}

async function readFileStore(): Promise<BrandKitStore | null> {
  try {
    const raw = await readFile(FILE, "utf8");
    return JSON.parse(raw) as BrandKitStore;
  } catch {
    return null;
  }
}

async function writeFileStore(store: BrandKitStore): Promise<void> {
  await mkdir(path.dirname(FILE), { recursive: true });
  await writeFile(FILE, JSON.stringify(store), "utf8");
}

async function readBlobStore(token: string): Promise<BrandKitStore | null> {
  const listed = await list({ prefix: BLOB_PATH, token, limit: 10 });
  const found = listed.blobs.find((blob) => blob.pathname === BLOB_PATH);
  if (!found) return null;
  const response = await fetch(found.url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) return null;
  return (await response.json()) as BrandKitStore;
}

async function writeBlobStore(token: string, store: BrandKitStore): Promise<void> {
  await put(BLOB_PATH, JSON.stringify(store), {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    token,
  });
}

export async function loadStore(): Promise<BrandKitStore> {
  const token = blobToken();
  const existing = token ? await readBlobStore(token) : await readFileStore();
  if (existing?.draft && existing.published) return normalizeStore(existing);
  const seeded = seedStore();
  if (token) await writeBlobStore(token, seeded);
  else if (!process.env.VERCEL) await writeFileStore(seeded);
  return seeded;
}

export async function loadHubAuth(): Promise<HubAuthRecord> {
  const token = blobToken();
  try {
    if (token) {
      const listed = await list({ prefix: AUTH_BLOB_PATH, token, limit: 10 });
      const found = listed.blobs.find((blob) => blob.pathname === AUTH_BLOB_PATH);
      if (!found) return emptyAuth();
      const response = await fetch(found.url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) return emptyAuth();
      return { ...emptyAuth(), ...(await response.json()) } as HubAuthRecord;
    }
    const raw = await readFile(AUTH_FILE, "utf8");
    return { ...emptyAuth(), ...(JSON.parse(raw) as HubAuthRecord) };
  } catch {
    return emptyAuth();
  }
}

export async function saveHubAuth(record: HubAuthRecord): Promise<void> {
  const token = blobToken();
  const body = JSON.stringify(record);
  if (token) {
    await put(AUTH_BLOB_PATH, body, {
      access: "private",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
      token,
    });
    return;
  }
  if (process.env.VERCEL) {
    throw new Error("Blob storage is not configured.");
  }
  await mkdir(path.dirname(AUTH_FILE), { recursive: true });
  await writeFile(AUTH_FILE, body, "utf8");
}

export async function saveStore(store: BrandKitStore): Promise<void> {
  const token = blobToken();
  if (token) {
    await writeBlobStore(token, store);
    return;
  }
  if (process.env.VERCEL) {
    throw new Error("Blob storage is not configured.");
  }
  await writeFileStore(store);
}

function extForContentType(contentType: string): string {
  if (contentType === "image/png") return "png";
  if (contentType === "image/webp") return "webp";
  if (contentType === "image/gif") return "gif";
  return "jpg";
}

export async function saveMedia(
  slot: MediaSlot | "library",
  bytes: Buffer,
  contentType: string,
  libraryId?: string,
): Promise<string> {
  const ext = extForContentType(contentType);
  const stem = slot === "library" ? `lib-${libraryId ?? Date.now()}` : `${slot}-${Date.now()}`;
  const token = blobToken();
  if (token) {
    const blob = await put(`hub/media/${stem}.${ext}`, bytes, {
      access: "public",
      addRandomSuffix: true,
      contentType,
      token,
    });
    return blob.url;
  }
  if (process.env.VERCEL) {
    throw new Error("Blob storage is not configured.");
  }
  await mkdir(MEDIA_DIR, { recursive: true });
  const filename = `${stem}.${ext}`;
  await writeFile(path.join(MEDIA_DIR, filename), bytes);
  return `/hub-media/${filename}`;
}

export function localMediaPath(filename: string): string | null {
  if (!/^[a-z0-9-]+\.(jpg|png|webp|gif)$/i.test(filename)) return null;
  return path.join(MEDIA_DIR, filename);
}
