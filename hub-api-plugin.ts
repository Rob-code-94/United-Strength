import type { Connect, Plugin, ViteDevServer } from "vite";

/** Local stand-in for the Vercel /api routes. */
export function hubApiPlugin(): Plugin {
  return {
    name: "hub-api",
    configureServer(server) {
      server.middlewares.use(createHubApiMiddleware(server));
    },
  };
}

function createHubApiMiddleware(server: ViteDevServer): Connect.NextHandleFunction {
  return async (req, res, next) => {
    const url = req.url ?? "";
    const path = url.split("?")[0] ?? "";
    if (!path.startsWith("/api/") && !path.startsWith("/hub-media/")) {
      next();
      return;
    }
    try {
      // Lazy SSR load so `@/` aliases in brand-kit / page-copy resolve via Vite,
      // instead of Node treating `@/data` as an npm package during config import.
      const mod = await server.ssrLoadModule("/api/_lib/dispatch.ts");
      const dispatchHub = mod.dispatchHub as typeof import("./api/_lib/dispatch").dispatchHub;
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
    } catch (error) {
      next(error);
    }
  };
}
