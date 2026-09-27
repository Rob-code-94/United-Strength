import type { IncomingMessage, ServerResponse } from "node:http";
import { runNodeHub } from "./_lib/node";

export default function handler(req: IncomingMessage, res: ServerResponse) {
  return runNodeHub(req, res, "/api/hub-session");
}
