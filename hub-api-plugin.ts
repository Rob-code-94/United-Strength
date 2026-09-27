import type { Plugin } from "vite";
import { dispatchHub } from "./api/_lib/dispatch";

/** Local stand-in for the Vercel /api routes. */
export function hubApiPlugin(): Plugin {
  return {
    name: "hub-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url ?? "";
        const path = url.split("?")[0] ?? "";
        if (!path.startsWith("/api/") && !path.startsWith("/hub-media/")) {
          next();
          return;
        }
        const chunks: Buffer[] = [];
        for await (const chunk of req) {
          chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
        }
        const host = req.headers.host ?? "localhost";
        const result = await dispatchHub({
          method: req.method ?? "GET",
          url,
          cookie: req.headers.cookie,
          bodyText: chunks.length ? Buffer.concat(chunks).toString("utf8") : null,
          origin: `http://${host}`,
        });
        res.statusCode = result.status;
        for (const [key, value] of Object.entries(result.headers)) {
          res.setHeader(key, value);
        }
        res.end(result.body);
      });
    },
  };
}
