# Oct 1, 2026 — Mariana migration cutover runbook

**Timezone:** America/New_York (EST on Oct 1).  
**Coordinate copy with Todd before enabling maintenance.**

---

## Pre-flight (week of Sep 29)

- [ ] Staging `/buy` `/schedule` `/account` smoke-tested on iPhone Safari + Android Chrome
- [ ] Production Mariana tenant / location / region IDs received from Nick
- [ ] Maintenance copy approved by Todd
- [ ] Vercel (or host) env access confirmed for evening swap
- [ ] DNS / Xplor Growth email auth status known (not a blocker for cutover if delayed)

---

## 8:00 AM EST — maintenance on

1. Set host env: `VITE_MAINTENANCE_MODE=true`
2. Redeploy production build (`npm run build` via Vercel)
3. Verify root URL shows maintenance page only (no home, no embeds)
4. Notify Todd + Nick that marketing site is gated

Maintenance UI: [`MaintenancePage.tsx`](../../src/components/MaintenancePage.tsx)

---

## Evening — go-live

1. Set Mariana env to **production** values:
   - `VITE_MARIANA_TENANT`
   - `VITE_MARIANA_LOCATION_ID`
   - `VITE_MARIANA_REGION_ID` (if required)
2. Set `VITE_MAINTENANCE_MODE=false`
3. Redeploy
4. Smoke test (phone first):
   - [ ] `/` — V1 homepage loads
   - [ ] `/buy` — iframe on white canvas
   - [ ] `/schedule` — classes visible
   - [ ] `/account` — login / account shell
   - [ ] `/privacy` · `/terms` — legal pages
5. Optional: temporary homepage banner — password reset + update card on file (Mariana paths)

---

## Rollback

1. Re-enable `VITE_MAINTENANCE_MODE=true` and redeploy, **or**
2. Revert Vercel deployment to last known-good production build
3. Alert Todd + Nick

---

## Post-launch

- Monitor member login issues first 48h
- Confirm no Buy/Reserve links appeared in marketing nav
- Check off items in [`.cursor/fix-backlog.md`](../../.cursor/fix-backlog.md) · Mariana Tek · Oct 1
