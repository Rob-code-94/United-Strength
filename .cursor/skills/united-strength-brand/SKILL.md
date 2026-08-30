---
name: united-strength-brand
description: >-
  Brand foundation for United Strength. ALD-primary direction (The Culture Club).
  Palette, typography, voice, photography, Sukha-first sitemap, and anti-patterns.
  Read before any frontend work. Updated by website-brand-foundation skill.
---

# United Strength — Brand Foundation

> Status: **approved**
> Last updated: 2026-08-25 (Todd homepage editorial direction — Direction D two-act structure)
> Approved direction: **The Culture Club** (ALD-primary hybrid)
> Supersedes: Kit D / v3 Editorial Private Club · The Quiet Club
> North star: [Aimé Leon Dore](https://www.aimeleondore.com) — as close as possible

**Repo note:** Active implementation in `src/app/globals.css` (v4 Culture Club). Dev switcher can preview frozen v1/v2.

## Positioning

United Strength is a luxury hospitality, private club, and editorial brand experience centered on strength, health, and community — **not a traditional gym website**. It should feel as close to **Aimé Leon Dore** as the membership use case allows: culture-first, image-led, minimal chrome — with Soho House membership application flow, Aman hospitality pauses, and Sukha-first IA.

## Site goals

1. Showcase culture and experience (who we are)
2. Establish standards and positioning (what we stand for)
3. Create desire and curiosity (why we're different)
4. Educate visitors on the United ecosystem
5. Drive membership applications (how to apply)

## Feel adjectives

Sophisticated, minimal, intentional, editorial, cinematic, premium, timeless, warm (not corporate), exclusive but approachable

---

## Color palette — The Culture Club

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg-primary` | `#FFFFFF` | Main canvas (ALD white) |
| `--color-bg-secondary` | `#F3EEE7` | Alternate sections (Aman alabaster) |
| `--color-bg-warm` | `#F7F7F7` | UI fills, buttons (ALD `#F7F7F7`) |
| `--color-bg-dark` | `#181818` | Cinematic dark sections (ALD type color) |
| `--color-text-primary` | `#181818` | Headlines, body on light |
| `--color-text-muted` | `#5C5C5C` | Captions, metadata |
| `--color-text-on-dark` | `#FFFFFF` | Text on dark sections / hero nav |
| `--color-accent` | `#0A3C2E` | Membership CTAs only (Soho forest) |
| `--color-accent-spare` | `#D43F21` | Sparingly — ALD editorial accent |

## Typography

| Role | Font | Fallback stack | Notes |
|------|------|----------------|-------|
| **Brand / display** | **Satoshi Bold** | `"Helvetica Neue"`, Arial, sans-serif | Wordmark, headlines, nav, CTAs — Fontshare (self-hosted) |
| **Brand italic** | Satoshi Bold Italic | same | Sparingly — editorial emphasis |
| Body | Satoshi Bold / Regular weights via variable file optional | same | ALD-adjacent tracked sans |
| Editorial | Instrument Serif | `"Libre Baskerville"`, Georgia, serif | Long-form manifesto blocks only |
| Caption | IBM Plex Mono | ui-monospace, monospace | Place lines, labels, scroll cue |

### Type scale (ALD-adjacent)

- H1 / hero wordmark: Satoshi Bold, uppercase, **tighter tracking** (~0.04em), tighter line-height (~0.88) — artistic club-home feel (Todd Jul 2026)
- Header wordmark (crest mode): **UNITED STRENGTH CLUB** — Satoshi Bold, tracked caps
- Body: 12–16px / 1.7 line-height / 0.02–0.06em letter-spacing
- Nav labels: Satoshi Bold, 10–12px / uppercase / 0.08–0.14em tracking
- Place line: IBM Plex Mono, 10px uppercase

---

## Voice and copy

### Do

- "Apply for Membership"
- "Explore the Ecosystem"
- "Discover" · "Reserve"
- "The Practice" (not Classes)
- "The Space" (not Equipment)
- "Start the Journey" (new-here arc, Sukha parity)
- "Submit an Inquiry"

### Don't

- "Join Our Gym"
- "Sign Up Now"
- "Shop classes"
- "Get Started Free"
- "Best workouts in town"
- Fluorescent, hype-driven fitness language

### CTA language

| Context | Copy |
|---------|------|
| Primary conversion | Apply for Membership |
| Secondary | Explore the Ecosystem |
| Journey entry | Start the Journey |
| Footer / contact | Submit an Inquiry |

---

## Photography and art direction

### Do

- **ALD rule:** Culture and craft before equipment — lookbook pacing, editorial grids
- Natural light, dramatic shadows, warm moody indoor lighting
- Quiet moments: chalk dust, leather benches, poured espresso, architecture of locker rooms
- Porsche rule: shoot facility and equipment for engineering, lines, craftsmanship
- Nowness-style short-film pacing

### Don't

- Fluorescent gym lighting
- Stock "people high-fiving at gym" imagery
- Aggressive before/after fitness tropes
- Cluttered equipment catalog shots above the fold

---

## Todd-approved navigation (Jul 2026)

Client direction from foundation review (Jul 1, 2026). Reference: [Aimé Leon Dore](https://www.aimeleondore.com) overlay nav + crest header.

| Requirement | United Strength target |
|-------------|------------------------|
| **Overlay menu** | Full-viewport dark overlay (not right drawer); links **left-aligned**; stealth US monogram watermark (`logo-monogram-stealth.png`, ~5–8% opacity, centered) |
| **Menu trigger** | Hamburger on **left** |
| **Crest transition** | Scroll **up** → centered **UNITED STRENGTH CLUB** wordmark; scroll **down** → US monogram only |
| **Top bar** | Below header when scrolled: `Columbus, OH \| {weekday}, {month} {day}, {year}` (ALD `top-bar` pattern) |
| **Public nav items** | Info · Offerings · Memberships · New here — **no Buy, Reserve, Member** on marketing chrome |
| **Member ops** | Triib embeds (`/buy`, `/schedule`, `/account`) — direct-link / post-login only; not in overlay or header |
| **Overlay structure** | Default: single flat left-aligned list (reserved). Revisit CLUB \| EXPLORE tabs if Todd requests during beta |
| **Homepage hero type** | Satoshi Bold, bolder and tighter spacing; artistic home-club feel — not gym CTA density |

**Public brand name (header):** United Strength Club

---

## Layout and UX patterns

- **Homepage (Direction D — Todd Aug 2026):** Two-act ritual progression — **Act 1:** four full-viewport intro chapters (01–04 teasers with Odd Ritual next-preview UI) → **Act 2:** six content sections (Believe · Pillars · Experience · Space · Membership · Start Here). Spec: [`docs/wireframes/home-direction-d.md`](../../../docs/wireframes/home-direction-d.md) · [`docs/client/todd-homepage-direction-aug-2026.md`](../../../docs/client/todd-homepage-direction-aug-2026.md)
- **Navigation:** Left hamburger; ALD overlay on open; crest wordmark/monogram swap on scroll direction
- **Section rhythm:** White canvas default; `#F3EEE7` alabaster bands for pause; `#181818` dark cinematic blocks sparingly
- **Motion:** 600–800ms ease fades; scroll-triggered reveals; slow cinematic video loops (not flashy); force user to slow down
- **Scroll snap:** Act 1 chapters + major Act 2 bands snap to viewport; disabled when reduced motion preferred
- **Application flow:** START HERE — Experience United + Apply for Membership; selective application (reviewed by team)

### Tier 3 editorial pattern library (2026-06-24)

Extracted from Kinfolk, Monocle, Cereal, Wallpaper*, Nowness. Full research: [`.firecrawl/tier3-editorial/extraction-summary.md`](../../../.firecrawl/tier3-editorial/extraction-summary.md). Proposed v5 wireframe: [`docs/wireframes/home-v5-editorial.md`](../../../docs/wireframes/home-v5-editorial.md).

| Pattern ID | Use on US homepage |
|------------|-------------------|
| `cover-hero` | Block 1 — keep v4 ALD/Kinfolk cover |
| `manifesto-band` | Block 2 — Instrument Serif deck + left prose |
| `broadsheet-grid` | Block 3 — Monocle 3-col pillars + hairline rules |
| `eyebrow-feature` | Section labels (IBM Plex Mono caps) |
| `gallery-index` | Blocks 4–5 — full-bleed contrast + asymmetric offerings |
| `video-premiere` | Block 1 future — Nowness-style facility reel |
| `category-rail` | Block 5 — offerings taxonomy links |

**Tier 3 rules:** Gallery wall not app UI · serif 400 for editorial · one accent only · hairline dividers not shadows · 80px+ section rhythm.

### Tier 2 private club pattern library (2026-06-24)

Extracted from The Ned, Sukha Club, Zero Bond, Casa Cipriani, The Battery. Full research: [`.firecrawl/tier2-private-club/extraction-summary.md`](../../../.firecrawl/tier2-private-club/extraction-summary.md). Canvas: `tier2-private-club-research.canvas.tsx`.

| Pattern ID | Use on US `/memberships` |
|------------|-------------------------|
| `journey-steps` | How to join — Experience → Apply → Review |
| `membership-manifesto` | Intro — holistic journey, no public pricing |
| `club-perks-band` | Membership types — perks without $ cards |
| `apply-form-hero` | On-page application form (Sukha model) |
| `tour-bridge` | Book a tour / visit |
| `waitlist-copy` | FAQ + form success — capacity transparency |
| `mission-membership` | Community / #ColumbUS proof (Battery) |
| `house-rules` | Club standards on `/new-here` |
| `heritage-band` | Origin + place narrative (Cipriani/Ned tone) |

**Tier 2 rules:** Application before transaction · club-not-gym copy · hidden public pricing (Sukha default) · single apply accent · Zero Bond public $ tiers are US anti-pattern unless client approves.

### Master inspiration research (2026-06-24)

**All 31 client URLs** — [`.firecrawl/united-strength-inspiration/extraction-summary.md`](../../../.firecrawl/united-strength-inspiration/extraction-summary.md). Canvas: `united-strength-inspiration-research.canvas.tsx`.

| Tier | Folder | Role |
|------|--------|------|
| 1 | `tier1-culture-club/` | ALD-primary visual north star |
| 2 | `tier2-private-club/` | Membership UX + apply flow |
| 3 | `tier3-editorial/` | Section pacing + typography |
| 4 | `tier4-hospitality-wellness/` | Recover pillar + hospitality warmth |
| 5 | `tier5-community-model/` | Simplicity + community programming |
| + | `additional-references/` | Ethos features only; brand discipline refs |

**Five communication goals** map to patterns across tiers — see master extraction summary.

---

## Sitemap (Sukha-first IA)

Per [docs/information-architecture.md](../../../docs/information-architecture.md):

```
/                     — Who we are (cinematic ALD-style hero)
/new-here             — How to apply (journey arc)
/offerings            — United ecosystem hub
/offerings/[slug]     — Train · Recover · Community detail
/memberships          — Standards + application (no public pricing)
/team                 — Coaches and leadership
/contact              — Inquiry, tour interest
/faq                  — Club questions
/buy, /schedule, /account — Gym software embeds (minimal chrome; **not** in public nav — member-internal)
/terms, /privacy      — Legal
```

### Homepage — Direction D two-act map (Todd Aug 2026)

| Act | Section | Purpose |
|-----|---------|---------|
| **1** | 01 United Strength Club | Full-viewport intro teaser → previews 02 |
| **1** | 02 What We Believe | Intro teaser → previews 03 |
| **1** | 03 The Four Pillars | Intro teaser → previews 04 |
| **1** | 04 Experience United | Intro teaser → Act 2 |
| **2** | What We Believe | Editorial headline + paragraph + image |
| **2** | Four Pillars | Foundation · Reflection · Longevity · Move the City — editorial panels |
| **2** | Experience United | 5 Classes · 14 Days · $75 + Start Here CTA |
| **2** | The Space | Photography-led gallery |
| **2** | Membership | Belonging statement — no public pricing |
| **2** | Start Here | Experience United + Apply for Membership |

**Four Pillars** are brand ideas — not nav mirrors. **Mood ref:** [Odd Ritual Golf](https://oddritualgolf.com) — chapter pacing, next-preview, vintage editorial (do not clone golf/shop grids).

Legacy v4/v5 block maps archived in [`docs/wireframes/home.md`](../../../docs/wireframes/home.md) and [`home-v5-editorial.md`](../../../docs/wireframes/home-v5-editorial.md).

---

## Inspo sources (extracted 2026-06-24)

| Site | Key takeaway |
|------|--------------|
| **aimeleondore.com** ★ | Sohne #181818; 12px/0.6px body; 10px/1.4px nav; image-led; culture-first |
| buckmason.com | acumin-pro; journal storytelling; Explore the Collection |
| sohohouse.com | Cardo 56px + HK Grotesk; Apply for membership |
| aman.com | #F3EEE7 alabaster; Reserve; negative space |
| neuehouse.com | Instrument Serif; Membership; structural minimal |
| sukhaclub.com | `/new-to-sukha` journey; club-not-gym IA; **Tier 2 primary** |
| thened.com | Ned's Club tiers; Find out more; heritage + hospitality |
| zerobondny.com | Understated NYC club (zerobond.com parked); public $ = US anti-pattern |
| casacipriani.com | Heritage → community → apply; external portal |
| thebatterysf.com | 4-step apply; Battery Powered mission; house rules |
| **oddritualgolf.com** ★ | Numbered chapter scroll; next-section preview (↓); vintage/heritage editorial; **Direction D primary mood** — do not clone golf/shop grids |
| kinfolk.com | `cover-hero`, `manifesto-band`; invisible UI |
| monocle.com | `broadsheet-grid`, `eyebrow-feature`; hairline rules |
| cerealmag.com | `gallery-index`; whitespace discipline |
| wallpaper.com | category hubs; architect-grade imagery |
| nowness.com | `video-premiere`, `category-rail` |

Full table: [.firecrawl/united-strength-inspiration/extraction-summary.md](../../../.firecrawl/united-strength-inspiration/extraction-summary.md) · Tier 1: [.firecrawl/tier1-culture-club/](../../../.firecrawl/tier1-culture-club/) · Tier 2: [.firecrawl/tier2-private-club/extraction-summary.md](../../../.firecrawl/tier2-private-club/extraction-summary.md) · Tier 3: [.firecrawl/tier3-editorial/extraction-summary.md](../../../.firecrawl/tier3-editorial/extraction-summary.md) · Tier 4: [.firecrawl/tier4-hospitality-wellness/](../../../.firecrawl/tier4-hospitality-wellness/) · Tier 5: [.firecrawl/tier5-community-model/](../../../.firecrawl/tier5-community-model/) · Additional: [.firecrawl/additional-references/](../../../.firecrawl/additional-references/)

---

## Anti-patterns (project-specific)

- Never position as a gym or fitness chain
- Never use Inter, Roboto, or purple gradient heroes
- Never use mass-market fitness CTAs
- Never rush the scroll experience with dense above-the-fold clutter
- Never default to forest-green-first palette — ALD white/#181818 leads; green for membership CTAs only
- Never put Buy, Reserve, or Member in public header or overlay menu (Todd Jul 2026)
- Never use right-slide drawer nav — use full-viewport ALD overlay with left-aligned links

---

## Beta implementation backlog (deferred — do not ship until beta build)

**UX source of truth (beta):** AI Studio app + Cloud Run preview + [Rob-code-94/US-google-Studio](https://github.com/Rob-code-94/US-google-Studio) (Studio code only) — see [ai-studio-brief.md](../../docs/client/ai-studio-brief.md). Cursor implements the backlog below in this repo; do not ship until patterns match preview + Todd nav.

| File | Change |
|------|--------|
| `src/data/site.ts` | `publicName` → United Strength Club; trim `mainNav` |
| `src/components/layout/SiteHeader.tsx` | ALD layout: hamburger left, crest transition, top bar |
| `src/components/layout/MobileNav.tsx` | Full-viewport overlay; dark bg; watermark |
| `src/components/layout/MobileNavList.tsx` | Left-align links; ALD spacing |
| `src/components/layout/Logo.tsx` | Wordmark variant for crest mode |
| `src/components/layout/TopBar.tsx` | New — location + date strip |
| `src/lib/useScrollDirection.ts` | New — scroll up/down for crest |
| `src/components/sections/BrandIntroBlock.tsx` | Tighter Satoshi hero tokens |
| `src/app/globals.css` | `--nav-overlay-bg`, watermark opacity tokens |

---

## Superseded directions

| Direction | Status |
|-----------|--------|
| **Kit D / v3 Editorial Private Club** | Superseded 2026-06-24 — dark #0D0D0D canvas, Inter-forward |
| **The Quiet Club** | Superseded — forest-green-first, Cormorant + Work Sans |

---

## Chosen direction rationale

**The Culture Club** — **55% ALD Culture Editorial + 25% Soho/Sukha Heritage Membership + 15% Aman Sanctuary + 5% Switchyards simplicity**.

ALD sets the visual north star: white canvas, `#181818` tracked sans type, image-led heroes, culture before commerce. Soho and Sukha supply membership language and application journey. Aman provides alabaster section pauses and hospitality standards. Switchyards keeps the marketing layer from over-building.

United Strength should feel like discovering a culture brand that happens to practice strength — not shopping for a gym membership.
