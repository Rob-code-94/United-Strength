# United Strength

Canonical repo for United Strength Club — Culture Club beta frontend, brand docs, and Vercel deployment.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Preview at **375px** for mobile-first review.

## Deploy

- **Vercel project:** `united-strength-beta` (linked via `.vercel/`)
- **GitHub:** https://github.com/Rob-code-94/United-Strength

### Studio chrome (agents)

Studio / brand-mocks chrome (BETA pill, E+F tab, Archive A&C / Aesthetic Specs tabs, workspace footer, mock-route toasts) is gated by `showDevChrome` (`import.meta.env.DEV` in [`src/lib/dev-chrome.ts`](src/lib/dev-chrome.ts)). It appears only on local `npm run dev`. Vercel preview and production never mount it — Todd sees the EF club site only.

Unfinished overlay leaves use `comingSoon: true` in `LOCKED_NAV` (muted “(Coming Soon)”, non-navigable) — same pattern as Balance / Foundation / Longevity / **Shop**. Do not reintroduce clickable draft Training leaves (Small Group, Private Group) or a live Shop link without removing the flag. Home pillar taps to unfinished IA show a client-facing **Coming Soon** notice via `COMING_SOON_ROUTES` in `App.tsx` (works on Vercel — never silent no-op).

Act 2 photo deck (`Act2LookbookStack`): mobile uses longer scroll runway + per-print dwell and Safari-safe sticky height (`100dvh` + safe-area); free-scroll engages before snap handoff so the stack should not need a reload after Experience.

### Vercel share links (agents)

`?_vercel_share=…` URLs are **Deployment Protection bypasses**, not app chrome. Hiding BETA/E+F or shipping a new deploy does **not** revoke them. To kill a leaked share: Vercel → project → deployment **Share** → **Only people with access**, and/or **Deployment Protection → Access → Shareable Links** → revoke. Then mint a fresh share for Todd out-of-band — never commit the secret.

### Gym software embeds (after UI approval)

Do **not** wire Mariana Tek / Xplor Triib embeds (`/buy`, `/schedule`, `/account`) until Todd approves this marketing UI. After approval, follow [docs/integrations/mariana-tek-checklist.md](docs/integrations/mariana-tek-checklist.md) (Sep 3 privacy/terms SMS fields → Sep 17 sandbox embeds → Oct 1 prod).
## Surfaces

| Surface | URL |
|---------|-----|
| AI Studio | https://aistudio.google.com/apps/f0b0ce5b-993b-4c03-9e60-d6063c477bd2 |
| Cloud Run preview | https://ais-pre-fewk45ctma7odjkgzbjqcl-20545025737.us-east1.run.app |
| Local dev | http://localhost:5173 |

## Documentation

| Document | Purpose |
|----------|---------|
| [docs/brand/united-strength-aesthetic.md](docs/brand/united-strength-aesthetic.md) | Living brand kit |
| [docs/client/ai-studio-brief.md](docs/client/ai-studio-brief.md) | AI Studio prompts + bridge workflow |
| [docs/toolkit/ai-studio-cursor-bridge.md](docs/toolkit/ai-studio-cursor-bridge.md) | AI Studio ↔ Cursor bridge |
| [docs/information-architecture.md](docs/information-architecture.md) | Sitemap and page specs |
| [docs/integrations/mariana-tek-onboarding.md](docs/integrations/mariana-tek-onboarding.md) | Mariana Tek launch — Nick’s onboarding email |
| [docs/integrations/mariana-tek-checklist.md](docs/integrations/mariana-tek-checklist.md) | Due dates and action checklist |

## Archive

Next.js planning codebase (not git-linked) preserved locally at:

`/Users/iwc/Development Apps/United Strength-nextjs-archive/`

Use for reference when porting routes/components into this repo.

## Agent rules

See [.cursor/rules/](.cursor/rules/) and [.cursor/skills/](.cursor/skills/).
