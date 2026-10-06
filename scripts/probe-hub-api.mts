import { dispatchHub } from "../api/_lib/dispatch.js";

const r = await dispatchHub({
  method: "POST",
  url: "/api/hub-session",
  cookie: undefined,
  bodyText: JSON.stringify({ password: "x" }),
  origin: "http://localhost",
});
console.log("status", r.status, String(r.body).slice(0, 300));
