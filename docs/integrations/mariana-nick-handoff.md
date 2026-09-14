# Mariana Tek — Nick handoff packet (draft)

**Status:** Draft for Sep 3 send — confirm 2nd font + colors with Todd first.  
**Sources:** [mariana-tek-onboarding.md](./mariana-tek-onboarding.md) · [mariana-tek-checklist.md](./mariana-tek-checklist.md)

---

## Fonts (max 2)

| Role | Family | CSS link |
|------|--------|----------|
| Primary | Satoshi | `https://api.fontshare.com/v2/css?f[]=satoshi@300,301,400,401,500,501,700,701,900,901&display=swap` |
| Secondary (recommended) | IBM Plex Mono | `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap` |

**Alt secondary:** Instrument Serif (editorial) — only if Todd prefers embeds to feel more lookbook than functional UI.

---

## Colors (Culture Club — confirm with Todd)

| Role | Hex |
|------|-----|
| Primary text / UI | `#181818` |
| Page background under iframes | `#FFFFFF` (required — no dark under embeds) |
| Secondary surface | `#F3EEE7` |
| Accent (Apply / membership) | `#0A3C2E` |

---

## Legal URLs (fill after deploy)

| Page | URL |
|------|-----|
| Privacy | `https://<production-host>/privacy` |
| Terms | `https://<production-host>/terms` |

Twilio mobile paragraph and SMS program sections 1–5 are in-app (`src/data/journey-copy.ts`). Todd still owes: support phone, SMS frequency cap.

---

## Staging embed URLs (Sep 17)

| Route | Purpose |
|-------|---------|
| `https://<staging-host>/buy` | Buy / packs |
| `https://<staging-host>/schedule` | Class schedule |
| `https://<staging-host>/account` | My Account |

**Location navigation:** Disabled preference — single Columbus studio. Confirm with Nick.

**Sandbox tenant (until Oct 1 evening):** `unitedstrength.sandbox` · location `48730` · region `48547`
