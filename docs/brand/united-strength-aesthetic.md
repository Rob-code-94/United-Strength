# United Strength Aesthetic

**Living brand kit** for United Strength. This is the source of truth for look, feel, voice, features, and approved assets.

**How to extend:** When the client approves a font, color, logo, or copy direction, add it to the relevant table below and log the change in [Changelog](#changelog). Do not remove Sukha-first defaults without noting a client override in the changelog.

**Cursor rule:** [.cursor/rules/united-strength-aesthetic.mdc](../../.cursor/rules/united-strength-aesthetic.mdc) points here on every session.

**Agent skills** (`.cursor/skills/`):

| Skill | Use for |
|-------|---------|
| [high-end-minimalist-ui](../../.cursor/skills/high-end-minimalist-ui/SKILL.md) | Dark editorial mood, flow, geometry |
| [light-performance-bold](../../.cursor/skills/light-performance-bold/SKILL.md) | **Active v2** — light canvas, bold type, monochrome, IronX rhythm |
| [high-octane-industrial-sanctuary](../../.cursor/skills/high-octane-industrial-sanctuary/SKILL.md) | **Archived v1** — dark industrial (frozen) |
| [luxury-motion-micro-interactions](../../.cursor/skills/luxury-motion-micro-interactions/SKILL.md) | Animation, hovers, scroll reveals |
| [production-ready-components](../../.cursor/skills/production-ready-components/SKILL.md) | TypeScript components, handoff quality |
| [high-performance-media](../../.cursor/skills/high-performance-media/SKILL.md) | Images, video heroes, performance |
| [premium-mobile-touch-ux](../../.cursor/skills/premium-mobile-touch-ux/SKILL.md) | Touch UX, drawer nav |

**Rules:** [united-strength-aesthetic.mdc](../../.cursor/rules/united-strength-aesthetic.mdc) · [mobile-first.mdc](../../.cursor/rules/mobile-first.mdc) · [plan-mode-ticketing.mdc](../../.cursor/rules/plan-mode-ticketing.mdc)

---

## Prototype surfaces (beta)

| Surface | URL |
|---------|-----|
| AI Studio | https://aistudio.google.com/apps/f0b0ce5b-993b-4c03-9e60-d6063c477bd2 |
| Preview | https://ais-pre-fewk45ctma7odjkgzbjqcl-20545025737.us-east1.run.app |
| Studio code | https://github.com/Rob-code-94/US-google-Studio |
| Production dev | http://localhost:3000 (this repo) |

Bridge workflow: [ai-studio-cursor-bridge.md](../toolkit/ai-studio-cursor-bridge.md) · Prompts: [ai-studio-brief.md](../client/ai-studio-brief.md)

---

## Aesthetic versions

**Index:** [versions/README.md](versions/README.md) — numbered previews with frozen tokens and restore steps.

| Version | Status |
|---------|--------|
| v1 High-Octane Industrial Sanctuary | Frozen — dark + volt |
| v2 Light Performance Bold | Frozen — light + Barlow (superseded 2026-06-24) |
| v3 Editorial Private Club (Kit D) | **Superseded** 2026-06-24 — see ALD-primary foundation |
| v4 The Culture Club (ALD-primary) | **Frozen** 2026-06-24 — see [versions/v4-culture-club.md](versions/v4-culture-club.md) |
| **v5 Culture Club Editorial** | **Active** — canvas-driven pattern library; see [versions/v5-culture-club.md](versions/v5-culture-club.md) |

## Design north star

| Principle | Guidance |
|-----------|----------|
| Client brief | [client-direction-brief-2026-06-24.md](../client/client-direction-brief-2026-06-24.md) — **approved** editorial private club, not traditional gym |
| Reference index | [inspiration-index.md](../reference/inspiration-index.md) — Tier 1: Aimé Leon Dore, Buck Mason, Soho House, Aman, NeueHouse |
| IA reference | [Sukha Club](https://www.sukhaclub.com) — journey copy, application flow, hidden pricing (Tier 2) |
| Avoid | [Ethos](https://ethosathleticclub.com) visual density — borrow features only per inspiration index |
| Mood | **Editorial Private Club** — sophisticated, minimal, cinematic, warm not corporate, exclusive but approachable |
| Active preview | **v2** still in `globals.css` until v3 ships — **direction is v3** per client approval 2026-06-24 |
| Layout | Minimal chrome, full-bleed cinematic media, generous whitespace (`py-24`–`py-32` between sections) |
| Geometry | Hard edges (`rounded-none` / `rounded-sm`), hairline dividers on dark canvas |
| Motion | Weighted, cinematic — see `luxury-motion-micro-interactions` skill |
| Scrapes | [docs/reference/scrapes/](../reference/scrapes/) |

---

## Voice and copy

| Item | Value | Status |
|------|-------|--------|
| Tone | Editorial / journey / club — sophisticated, warm, cinematic; not hard-sales gym | **Approved** 2026-06-24 |
| Primary CTA | “Start here” → `/new-here` | **Approved** |
| Journey phrase | STRONGER UNITED (tagline); club-not-gym language throughout | **Approved** |
| Pillar labels (homepage) | Foundation · Reflection · Longevity · Move the City — brand ideas, not nav mirrors | **Approved** Todd Aug 2026 |
| Pillar labels (legacy v4) | Train · Recover · Community | Superseded on homepage by Four Pillars |
| Club vs gym | Prefer “club” language | **Approved** |
| Feel adjectives | Sophisticated · Minimal · Intentional · Editorial · Cinematic · Premium · Timeless · Warm, not corporate · Exclusive, but approachable | **Approved** 2026-06-24 |

---

## Color palette (active v2)

| Token | Hex | Usage | Status |
|-------|-----|-------|--------|
| `background` | `#FAFAFA` | Page canvas | **Preview v2** — not client-approved |
| `surface` | `#FFFFFF` | Header, panels, cards | **Preview v2** |
| `foreground` | `#0A0A0A` | Primary text | **Preview v2** |
| `primary` | `#0A0A0A` | CTA fill | **Preview v2** |
| `primary-foreground` | `#FFFFFF` | Text on CTAs | **Preview v2** |
| `muted` | `#525252` | Secondary text | **Preview v2** |
| `border` | `#E5E5E5` | Dividers | **Preview v2** |
| `surface-subtle` | `rgb(0 0 0 / 0.04)` | Muted bands | **Preview v2** |

v1 tokens (including `accent-volt`): frozen in [`src/styles/versions/v1-industrial-sanctuary.css`](../src/styles/versions/v1-industrial-sanctuary.css). See [versions/v1-industrial-sanctuary.md](versions/v1-industrial-sanctuary.md).

Preview values are mirrored in `src/app/globals.css`. Replace when client approves final palette.

---

## Typography (active v4 — The Culture Club)

| Role | Family | Weights | Source | Status |
|------|--------|---------|--------|--------|
| Brand + display + UI + body | **Satoshi Bold** | 700 (+ Italic) | Fontshare, self-hosted `public/fonts/satoshi/` via `next/font/local` | **Active v4** |
| Editorial (manifesto) | **Instrument Serif** | 400 | `next/font/google` | **Active v4** — long-form only |
| Caption / metadata | **IBM Plex Mono** | 400 | `next/font/google` | **Active v4** |

**Notes:** ALD uses Sohne; United Strength implements **Satoshi Bold** for wordmark, nav labels, block titles, and buttons. Work Sans (v4 build interim) superseded 2026-06-24.

### Typography (archived v2)

| Role | Family | Weights | Source | Status |
|------|--------|---------|--------|--------|
| Display + UI + body | **Barlow Condensed** | 500, 600, 700, 800 | `next/font/google` | **Frozen v2** |

---

## Logo and marks

| Asset | Path | Usage | Status |
|-------|------|-------|--------|
| US monogram (black) | `public/brand/logo-monogram-black.png` | Header, footer, light backgrounds | **Approved** 2026-06-24 |
| US monogram (stealth) | `public/brand/logo-monogram-stealth.png` | Cinematic heroes, watermarks | **Approved** 2026-06-24 |
| Primary logo (SVG) | `public/brand/logo.svg` | Legacy wordmark placeholder | **Superseded** — use monogram PNG |
| Logo reversed | `public/brand/logo-light.svg` | Legacy reversed placeholder | **Superseded** — CSS invert on monogram |
| US monogram (SVG) | `public/brand/logo-monogram-black.svg` | Archive / future vector cleanup | **Received** 2026-07-01 |
| Favicon | `public/brand/favicon-current-site.ico` | Browser tab | **From current site** — replace with monogram export |
| App icon | TBD | Only if custom app (usually vendor) | N/A v1 |

---

## Imagery

| Item | Guidance | Status |
|------|----------|--------|
| Hero | Full-bleed video (Vimeo/embed) or cinematic still | **Wired** — `public/media/hero/` (still + poster; video pending client export) |
| Mood | Dark, intentional, real members/coaches — not generic stock | **From current site** |
| Offering pages | One strong hero per service | **Wired** — `public/media/offerings/` |
| Team | Consistent crop/aspect for headshots | **Wired** — Todd, Jenna, Jason, Kara; Brian/Benn pending |
| Facility | Real gym photography | **Wired** — `public/media/facility/` |
| Registry | Paths, alt text, focal points | `src/data/media.ts`, `docs/media/manifest.json` |

---

## Homepage (Direction D — approved Aug 2026)

**Client direction:** [todd-homepage-direction-aug-2026.md](../client/todd-homepage-direction-aug-2026.md)  
**Wireframe:** [home-direction-d.md](../wireframes/home-direction-d.md)  
**Notion:** [Locked IA + Homepage](https://app.notion.com/p/3b2275066c17813eb1a9c4f8c8aa4bbc)

Two-act ritual progression (Odd Ritual–inspired):

| Act | Sections |
|-----|----------|
| **Act 1 — Intro teasers** | 01 United Strength Club → 02 What We Believe → 03 Four Pillars → 04 Experience United |
| **Act 2 — Content** | Believe · Pillars (editorial panels) · Experience (5 Classes / 14 Days / $75) · Space · Membership · Start Here |

Design principles: immersive photography · subtle cinematic video · minimal type · white space · slow pacing · next-chapter preview UI · vintage editorial mood.

---

## Mobile first

| Principle | Guidance |
|-----------|----------|
| Priority | **Mobile is primary** — best-looking and most polished on phone; desktop enhances |
| CSS approach | Base styles = mobile; `md:` / `lg:` add desktop layout only |
| Touch | 44px min tap targets; no hover-only UI |
| Nav | Hamburger left; ALD full-viewport overlay; reserved public nav — member ops via Triib embed only (no Buy/Reserve in chrome) |
| Forms | Single column, full-width fields, large submit on mobile |
| Embeds | Buy / schedule / account full-width; test on iOS Safari |
| Review | Sign off UI at 375px width before desktop polish |

**Rule:** [.cursor/rules/mobile-first.mdc](../../.cursor/rules/mobile-first.mdc)

---

## Layout and components

Aligned with [wireframes](../wireframes/).

### Header (sticky) — Todd Jul 2026 target

**ALD crest transition:** Scroll up → **UNITED STRENGTH CLUB** wordmark centered; scroll down → US monogram only.

**Top bar (when scrolled):** `Columbus, OH | {weekday}, {date}` — ALD `top-bar` pattern.

**Menu:** Hamburger **left**; full-viewport dark overlay; left-aligned links; stealth monogram watermark (~5–8% opacity).

**Public marketing nav:** Info ▾ · Offerings ▾ · Memberships · New here — **no Buy, Reserve, Member**.

**Member routes:** `/buy`, `/schedule`, `/account` — direct-link / post-login only; not in public nav.

**Current build (pre-beta):** NeueHouse segmented bar with Member + right hamburger — superseded by ALD nav above.

### Home sections (reserved — 3 blocks for beta)

1. **Brand intro** — Satoshi Bold lockup (tighter tracking); place line; scroll cue; no CTAs  
2. Apply for membership band  
3. Footer

### Templates

| Template | Route | Notes |
|----------|-------|-------|
| New here | `/new-here` | Intro pack, prepare, membership path |
| Offering detail | `/offerings/[slug]` | Hero, body, bullets, schedule CTA |
| Memberships | `/memberships` | Tiers, application, tour, FAQ accordion |
| FAQ | `/faq` | Anchors: general, offerings, memberships, amenities |
| Embed shell | `/buy`, `/schedule`, `/account` | Minimal wrapper |

### Footer

Address · general / membership / training emails · FAQ · Contact · Terms · Privacy · newsletter · social

---

## Feature and UX defaults

From [feature-matrix](../reference/feature-matrix.md). Override only via changelog + client sign-off.

| Feature | United Strength default |
|---------|-------------------------|
| Visual style | Sukha minimal |
| Public monthly pricing | Hidden; application flow |
| Intro offer | Credit / 3-pack (TBD with client) |
| Class booking | Gym software embed |
| Member account | Gym software embed |
| Shop / apparel | None v1 |
| Events on site | Optional |
| Membership application | On-site form or Typeform |
| FAQ | Sukha-style sections |
| New visitor page | `/new-here` |

---

## Integrations (look and feel)

| Page | Treatment |
|------|-----------|
| `/buy`, `/schedule`, `/account` | United Strength header + footer; full-width embed; do not restyle vendor UI |
| Forms | Match site typography and spacing; Cloudflare Turnstile if needed |
| Calendly / tours | Branded button link or embed matching neutral palette |

---

## Reference sites

**Full index:** [inspiration-index.md](../reference/inspiration-index.md) (31 client-approved URLs, tiered).

| Site | Use |
|------|-----|
| [Aimé Leon Dore](https://www.aimeleondore.com) | Tier 1 — culture, editorial pacing, sophistication |
| [Buck Mason](https://www.buckmason.com) | Tier 1 — masculinity, warm neutrals, minimal nav |
| [Soho House](https://www.sohohouse.com) | Tier 1 — membership application, exclusivity without coldness |
| [Aman](https://www.aman.com) | Tier 1 — cinematic hospitality, standards as brand |
| [NeueHouse](https://www.neuehouse.com) | Tier 1 — creative community membership |
| [Sukha Club](https://www.sukhaclub.com) | Tier 2 — IA, journey copy, application flow, hidden pricing |
| [Switchyards](https://www.switchyards.com) | Tier 5 — radical simplicity |
| [ONE LDN](https://www.oneldn.com) | Archived Kit B reference only — not client direction |
| [Ethos Athletic Club](https://ethosathleticclub.com) | Additional — features only; not visual template |

---

## Approved assets

_Add subsections here as items are approved (do not delete defaults above)._

### Approved colors

_None yet._

### Approved fonts

| Role | Family | Source | Status |
|------|--------|--------|--------|
| Display | **Anton** | [Google Fonts](https://fonts.googleapis.com/css2?family=Anton) | **From current site** — not client-approved for new build |
| Body | **Inter** (400, 700) | [Google Fonts](https://fonts.googleapis.com/css2?family=Inter) | **From current site** — not client-approved for new build |

### Approved logos

| Asset | Path | Usage | Status |
|-------|------|-------|--------|
| US monogram (black) | `public/brand/logo-monogram-black.png` | Primary mark on light backgrounds | **Approved** 2026-06-24 |
| US monogram (stealth) | `public/brand/logo-monogram-stealth.png` | Tonal hero / watermark | **Approved** 2026-06-24 |
| SVG + reversed variants | — | Web + print lockups | **Still needed** |

---

## Changelog

| Date | Change | Author |
|------|--------|--------|
| 2026-05-27 | Initial United Strength Aesthetic from planning phase (Sukha-first defaults) | Planning |
| 2026-05-27 | Added mobile-first principles; see mobile-first.mdc rule | Planning |
| 2026-05-27 | Added high-end-minimalist-ui skill (vibe, flow, geometry, motion) | Planning |
| 2026-05-28 | Preview palette + placeholder logos for Next.js template (`src/app/globals.css`, `public/brand/`) — not client-approved | Template build |
| 2026-05-28 | High-end minimalist preview palette applied site-wide (skill: high-end-minimalist-ui); not client-approved | Template build |
| 2026-05-28 | Added skills: luxury-motion, production-ready-components, high-performance-media, premium-mobile-touch-ux | Planning |
| 2026-05-28 | Added plan-mode-ticketing.mdc rule | Planning |
| 2026-05-28 | Current site favicon exported to `public/brand/favicon-current-site.ico` | Site audit |
| 2026-05-28 | Current site audit: Anton + Inter documented from unitedstrengthgym.com (informational; not new-site approval) | Site audit |
| 2026-05-28 | Preview variant B: High-Octane Industrial Sanctuary (Sukha + ONE LDN hybrid); obsidian/surface/volt tokens; panel nav — **not client-approved** | Template build |
| 2026-05-29 | Migrated current-site media to `public/media/` (hero, offerings, facility, team); registry `src/data/media.ts`; components `HeroMedia`, `OptimizedImage`; CDN max 2500px; see `docs/media/README.md` | Media migration |
| 2026-05-29 | NRC-inspired editorial overlay cards: `EditorialMediaCard`, `CoachEditorialCard` on home classes, `/offerings`, `/team` (compact overlay + expandable bio) | UI pattern |
| 2026-05-28 | Aesthetic versioning: v1 frozen (Industrial Sanctuary), **v2 active** (Light Performance Bold); see [versions/](versions/) | Template build |
| 2026-05-28 | v2: light monochrome tokens, Barlow Condensed, IronX-weighted type; dev aesthetic switcher v1/v2 | Template build |
| 2026-05-29 | Client presentation: [client-brand-direction-kits.md](client-brand-direction-kits.md) — four brand/logo directions (A–D) with hex, fonts, logo briefs | Client discovery |
| 2026-06-24 | Client-approved direction brief: editorial private-club positioning; Kit D selected; inspiration index; hidden pricing + application-first | Client brief |
| 2026-06-24 | US monogram PNGs received (`logo-monogram-black.png`, `logo-monogram-stealth.png`) | Client assets |
| 2026-06-24 | v3 Editorial Private Club approved — v2 superseded pending implementation; see [versions/v3-editorial-private-club.md](versions/v3-editorial-private-club.md) | Client brief |
| 2026-06-24 | **ALD-primary foundation refresh:** The Culture Club hybrid supersedes Kit D/v3 and The Quiet Club; browser CDP extraction from ALD + Tier 1; draft brand skill + moodboard + canvas | Brand foundation |
| 2026-06-24 | **The Culture Club approved** — v4 tokens shipped to `globals.css`; Work Sans + Instrument Serif + IBM Plex Mono; homepage narrative arc (ALD hero, pillars, ecosystem, apply) | Build phase |
| 2026-06-24 | **ALD brand-first homepage** — Block 1: 100dvh Satoshi wordmark + place line + scroll cue; nav deferred until scroll; Satoshi Bold self-hosted from Fontshare | Build phase |
| 2026-06-24 | **Master inspiration research** — All 31 client URLs deep-extracted (Tiers 1–5 + Additional); unified pattern library + 5-goal mapping; canvas `united-strength-inspiration-research.canvas.tsx` | Research |
| 2026-06-24 | **v4 frozen** — snapshot + tag `aesthetic-v4-culture-club` before v5 canvas-driven editorial rebuild | Aesthetic pivot |
| 2026-06-24 | **v5 Culture Club Editorial active** — pattern library, Monocle broadsheet tokens, full marketing route rebuild per inspiration canvas | Build phase |
| 2026-06-24 | **Visual synthesis doc** — Soho · NeueHouse · Kinfolk · Nowness combined recipe; interim Unsplash placeholders (`public/media/placeholders/`, `NEXT_PUBLIC_PLACEHOLDER_MEDIA`) | Research + media |
| 2026-07-01 | Client monogram wired to header/footer (`logo-monogram-black.png`); NeueHouse segmented chrome; homepage conversion funnel (2 blocks); HD hero placeholders (health/club social) | Build phase |
| 2026-07-01 | **Todd foundation review:** ALD overlay nav (full-viewport, left hamburger, left-aligned links, stealth watermark); crest header (scroll up = UNITED STRENGTH CLUB wordmark, scroll down = monogram); top bar (Columbus, OH + date); tighter Satoshi hero type; artistic home-club feel | Client review |
| 2026-07-01 | **Public brand name:** United Strength Club (header wordmark) | Client review |
| 2026-07-01 | **Reserved public nav:** Remove Buy, Reserve, Member from marketing chrome; Triib embeds member-internal only | Client review |
| 2026-07-01 | **Membership model confirmed:** Selective application — reviewed by Todd/team; not open enrollment | Client review |
| 2026-07-06 | AI Studio app + Cloud Run preview + GitHub `Rob-code-94/US-google-Studio` registered as beta UX/UI exploration surface; Cursor bridge workflow documented | Bridge docs |
| 2026-08-25 | **Todd homepage editorial direction:** Direction D two-act structure (4 intro chapters + 6 content sections); Odd Ritual next-preview UI; Experience United 5/14/$75; Four Pillars editorial panels (Foundation · Reflection · Longevity · Move the City); photo-led Space section | Client direction |
| 2026-08-26 | **Direction E About interiors:** Philosophy · Founder · Team · The Space · FAQ under Odd Ritual shell; D hidden in simulator; rule `direction-e-odd-ritual` + skill `odd-ritual` | Build phase |

---

## Client presentation

- [client-brand-direction-kits.md](client-brand-direction-kits.md) — four comparable directions (Heritage, Industrial, Light Performance, Editorial Club) for client sign-off

## Related docs

- [information-architecture.md](../information-architecture.md)
- [integrations.md](../integrations.md)
- [client-discovery.md](../client-discovery.md)
- [united-strength-visual-synthesis.md](../reference/united-strength-visual-synthesis.md)
