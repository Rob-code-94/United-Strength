import type { IncomingMessage, ServerResponse } from "node:http";
import { runNodeHub } from "./_lib/node";

/** Vercel file for POST|DELETE /api/brand-kit/library via rewrite. */
export default function handler(req: IncomingMessage, res: ServerResponse) {
  return runNodeHub(req, res, "/api/brand-kit/library");
}
