# United Strength — handoff notes

Short ops guide for ownership transfer. Secrets stay in Vercel env — never paste passwords or API keys into this file.

## Pre-transfer gate (do this first)

1. **Commit and push** the current working tree to `main` on GitHub **before** transferring the repo. Local Oct work (Apply mailto/Typeform, hub Escape, Archive fail-closed, Voices controls, membership `$70`, brand-assets pack) must be on `main` or the client receives an older build.
2. Sanitize / document env via [`.env.example`](.env.example) — no real values in git.
3. Confirm receiving accounts: GitHub **`UnitedStrength`** · Vercel team **United Strength** (`info@unitedstrengthgym.com`).

**Do not transfer** until Todd has signed off go-live timing and you have pushed.

## Transfer order (last)

1. Transfer **GitHub** repo → `UnitedStrength` (keep developer write access through walkthrough).
2. Transfer **Vercel** project (or re-import if personal-team transfer is blocked).
3. On **his** Vercel, set at least:
   - `HUB_PASSWORD`, `HUB_SESSION_SECRET`, `BLOB_READ_WRITE_TOKEN`
   - `RESEND_API_KEY`, `APPLY_FROM_EMAIL=United Strength <membership@unitedstrengthgym.com>`
   - Leave `APPLY_TO_EMAIL` empty (defaults to membership@)
   - Optional: `VITE_TYPEFORM_APPLY_URL` when Todd has the form
4. DNS: point `unitedstrengthgym.com` / `www` A/CNAME to Vercel only — **leave Google Workspace MX/TXT alone**.
5. Walkthrough (~30 min): open Vercel, one deploy, hub login, Save draft / Publish, live domain.
6. Revoke developer access (no retainer unless Todd asks).

Tracking checklist: [`.cursor/fix-backlog.md`](.cursor/fix-backlog.md) · Ownership + QA 10/06 section.

## Brand kit for Todd

- Hub: `/hub` — after login, two tiles (**Brand kit** · **Edit website**). Brand kit = colors, fonts (size/color/family), Media library. Website = page preview + copy/footer/FAQ/media pencils. Draft auto-save → Publish (manual). Revert keeps the library.
- Matrix: [`docs/client/hub-editable-matrix.md`](docs/client/hub-editable-matrix.md).
- Final asset pack (survives Git transfer): [`docs/client/brand-assets/`](docs/client/brand-assets/) — use PNG for crest / Stronger United; see README for slot map and limits.
- Header crest still needs Dev if Todd wants the hub `crest` mark in the scrolled header.

## Still Todd / Nick (not Dev UI)

| Item | Owner |
|---|---|
| Typeform apply URL | Todd |
| Founder collage, run maps, coach GIFs, Cultivated type art | Todd |
| Go-live date | Todd |
| Mariana production IDs + framing | Nick · Oct cutover |
| Resend on client Vercel | Ops after transfer |

## Deploy notes

- Push to `main` deploys on Vercel.
- Roll back from Vercel → Deployments.
- Local hub password (dev only, when `HUB_PASSWORD` unset): see `.env.example` note — never use that default in production.
