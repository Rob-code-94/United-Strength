import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { list, put } from "@vercel/blob";
import {
  seedStore,
  type BrandKitStore,
  type MediaSlot,
} from "../../src/hub/brand-kit";

const FILE = path.join(process.cwd(), ".data", "brand-kit.json");
const MEDIA_DIR = path.join(process.cwd(), ".data", "media");
const BLOB_PATH = "hub/brand-kit.json";

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
  if (existing?.draft && existing.published) return existing;
  const seeded = seedStore();
  if (token) await writeBlobStore(token, seeded);
  else if (!process.env.VERCEL) await writeFileStore(seeded);
  return seeded;
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

export async function saveMedia(
  slot: MediaSlot,
  bytes: Buffer,
  contentType: string,
): Promise<string> {
  const ext =
    contentType === "image/png"
      ? "png"
      : contentType === "image/webp"
        ? "webp"
        : contentType === "image/gif"
          ? "gif"
          : "jpg";
  const token = blobToken();
  if (token) {
    const blob = await put(`hub/media/${slot}-${Date.now()}.${ext}`, bytes, {
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
  const filename = `${slot}-${Date.now()}.${ext}`;
  await writeFile(path.join(MEDIA_DIR, filename), bytes);
  return `/hub-media/${filename}`;
}

export function localMediaPath(filename: string): string | null {
  if (!/^[a-z0-9-]+\.(jpg|png|webp|gif)$/i.test(filename)) return null;
  return path.join(MEDIA_DIR, filename);
}
