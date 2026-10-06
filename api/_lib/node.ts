import type { IncomingMessage, ServerResponse } from "node:http";
import { dispatchHub } from "./dispatch.js";

async function readBody(req: IncomingMessage): Promise<string | null> {
  if (req.method === "GET" || req.method === "HEAD" || req.method === "DELETE") return null;
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  if (chunks.length === 0) return null;
  return Buffer.concat(chunks).toString("utf8");
}

export async function runNodeHub(
  req: IncomingMessage,
  res: ServerResponse,
  urlOverride?: string,
): Promise<void> {
  const host = req.headers.host ?? "localhost";
  const url = urlOverride ?? req.url ?? "/";
  const proto = process.env.VERCEL ? "https" : "http";
  const result = await dispatchHub({
    method: req.method ?? "GET",
    url: url.startsWith("http") ? new URL(url).pathname + new URL(url).search : url,
    cookie: req.headers.cookie,
    bodyText: await readBody(req),
    origin: `${proto}://${host}`,
  });
  res.statusCode = result.status;
  for (const [key, value] of Object.entries(result.headers)) {
    res.setHeader(key, value);
  }
  if (typeof result.body === "string") res.end(result.body);
  else res.end(result.body);
}
