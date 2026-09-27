import { createHash, createHmac, timingSafeEqual } from "node:crypto";

const COOKIE = "hub_session";
const MAX_AGE_SEC = 60 * 60 * 24 * 7;

function devOnly(name: string, fallback: string): string | null {
  const value = process.env[name];
  if (value && value.length > 0) return value;
  if (process.env.VERCEL) return null;
  return fallback;
}

export function hubPassword(): string | null {
  return devOnly("HUB_PASSWORD", "united-strength-hub");
}

function sessionSecret(): string | null {
  return devOnly("HUB_SESSION_SECRET", "dev-hub-session");
}

function digest(value: string): Buffer {
  return createHash("sha256").update(value).digest();
}

export function passwordsMatch(given: string, expected: string): boolean {
  return timingSafeEqual(digest(given), digest(expected));
}

export function readSession(cookieHeader: string | undefined): boolean {
  const secret = sessionSecret();
  if (!secret || !cookieHeader) return false;
  const parts = cookieHeader.split(";").map((part) => part.trim());
  const raw = parts.find((part) => part.startsWith(`${COOKIE}=`));
  if (!raw) return false;
  const token = decodeURIComponent(raw.slice(COOKIE.length + 1));
  const dot = token.lastIndexOf(".");
  if (dot < 1) return false;
  const body = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = createHmac("sha256", secret).update(body).digest("base64url");
  const sigBuf = Buffer.from(sig);
  const expBuf = Buffer.from(expected);
  if (sigBuf.length !== expBuf.length || !timingSafeEqual(sigBuf, expBuf)) return false;
  try {
    const parsed = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as { exp?: number };
    return typeof parsed.exp === "number" && parsed.exp > Date.now();
  } catch {
    return false;
  }
}

export function sessionCookie(remember: boolean): string | null {
  const secret = sessionSecret();
  if (!secret) return null;
  const exp = Date.now() + (remember ? MAX_AGE_SEC * 1000 : 1000 * 60 * 60 * 12);
  const body = Buffer.from(JSON.stringify({ exp })).toString("base64url");
  const sig = createHmac("sha256", secret).update(body).digest("base64url");
  const secure = process.env.VERCEL ? "; Secure" : "";
  const maxAge = remember ? `; Max-Age=${MAX_AGE_SEC}` : "";
  return `${COOKIE}=${body}.${sig}; HttpOnly; Path=/; SameSite=Lax${maxAge}${secure}`;
}

export function clearSessionCookie(): string {
  const secure = process.env.VERCEL ? "; Secure" : "";
  return `${COOKIE}=; HttpOnly; Path=/; SameSite=Lax; Max-Age=0${secure}`;
}
