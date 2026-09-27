import type { IncomingMessage, ServerResponse } from "node:http";
import { runNodeHub } from "./_lib/node";

/** Vercel file for POST /api/brand-kit/media via rewrite. */
export default function handler(req: IncomingMessage, res: ServerResponse) {
  return runNodeHub(req, res, "/api/brand-kit/media");
}
