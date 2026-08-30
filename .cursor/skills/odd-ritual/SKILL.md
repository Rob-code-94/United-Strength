---
name: odd-ritual
description: >-
  Odd Ritual editorial experience for United Strength Direction E and EF — chapter
  scroll, lookbook interiors, fade-up transitions, hairline separation, accordion
  overlay, photo-led storytelling, Culture Club tokens. Use when building Direction
  E/EF pages, Odd Ritual feel, lookbook About chapters, or when paired with
  shadcn-space-catalog to filter blocks (portfolio sticky, gallery mosaic, about
  editorial, image CTA, numbered FAQ, team portraits — never SaaS/gym chrome).
---

# Odd Ritual (Direction E + EF)

> **E** = frozen Odd Ritual baseline (`direction-e/`). **EF** = approved lookbook merge (`direction-ef/` · `ConceptEFView`) — extend lookbook spine to About interiors.  
> Mood ref: [oddritualgolf.com](https://oddritualgolf.com) / [About page](https://oddritualgolf.com/pages/about) — **pacing & restraint only**; never clone golf/shop grids or Cape Town copy.  
> Brand tokens / voice: [united-strength-brand](../united-strength-brand/SKILL.md)  
> Always-on patterns: [direction-e-odd-ritual.mdc](../../rules/direction-e-odd-ritual.mdc)  
> Catalog pairing: personal skill `shadcn-space-catalog` + [reference.md](reference.md)

## North star (verbatim)

Overall, the experience should feel clean, premium, interactive, and intentional. Motion should be subtle, typography should be minimal, and photography should carry most of the emotion. I want people to feel like they’re exploring the brand, not just browsing a website.

The goal is for visitors to slowly discover who we are rather than seeing everything immediately. I want the homepage to feel like you’re moving through an editorial story instead of scrolling a traditional gym website.

A full-screen photograph or subtle looping video (very slow, cinematic movement—not flashy).
Minimal copy.

## Experience principles

1. **Discover, don’t dump** — Reveal brand in chapters; one idea per viewport.
2. **Photo / video leads** — Emotion lives in facility stills or slow cinematic loops; type is secondary.
3. **Editorial story scroll** — Numbered chapters + next-preview (`Scroll` / `↓` / next title), not gym landing sections.
4. **Subtle motion** — 600–800ms ease `[0.21, 0.47, 0.32, 0.98]`; honor `prefers-reduced-motion`.
5. **Private-club voice** — Heritage restraint; no hype, no Book/Buy/Reserve in marketing chrome.

## Lookbook system (from Odd Ritual analysis)

Full source notes: [reference.md](reference.md) § Lookbook & type system.

| System | Borrow for US | Do not clone |
|--------|---------------|--------------|
| **Editorial grid** | Sequential storytelling nodes (`01` / `02` / `03`); lookbook / magazine compartmentalization | Product shop as homepage spine |
| **Guided navigation** | `Scroll` / `Next` / `Swipe` / `↓` as chapter affordances | Fake horizontal shop carousels of apparel SKUs |
| **Typographic hierarchy** | Brutalist mega-indices + clean readable body; metadata in `( )` / `[ ]` sparingly | Loud retail labels / SKU ledgers |
| **Spacing & rhythm** | High negative space; strict horizontal dividers for index / footer / legal | Crowded multi-band gym landing |
| **Tone** | Contemporary heritage · understated sophistication · local premium (Columbus) | Golf heritage · Cape Town · “Join the fam” streetwear sales |

**US tone target:** Elevated neo–private club — confident, casual, never desperate sales jargon.

## Section transitions (reuse these)

Odd Ritual avoids aggressive SaaS slide animations. Use a **high-end editorial rhythm** — same three transitions everywhere:

| Transition | When | US spec |
|------------|------|---------|
| **Content fade-up** | Section enters viewport | `opacity: 0→1`, `y: 15–20→0`, `duration: 0.6–0.8`, `LOOKBOOK_EASE`, `viewport: { once: true, amount: 0.35–0.4 }` |
| **Staggered typography** | Manifesto / list items inside a chapter | Index + headline first; body paragraphs `delay: 0.08–0.12` per item |
| **Horizontal image swipe** | Editorial galleries only (Space mosaic, future lookbook carousels) | `x` offset + touch/drag; calm — not product-shop carousel |

**Do not use:** bounce, spring overshoot, slide-in-from-offscreen, parallax spam, ticker marquees.

Full motion snippet + Shadcn catalog notes: [reference.md](reference.md) § Transitions.

## Separation aesthetic (how chapters divide)

Separation = **grid isolation + lineation** — not colored cards or heavy containers.

| Device | Rule | Tailwind / token |
|--------|------|------------------|
| **Hairline dividers** | Ultra-thin rules between index rows, footer columns, chapter cues | `border-t border-neutral-200` or `border-black/10` / `border-white/20` on dark |
| **Oversized indexing** | `01` / `02` / `03` are the dividers — not “Our Vision” H2s | `LookbookIndex` mega mono + `// Title` |
| **Negative space** | One idea finishes before the next begins | `min-h-[100cqh]`, `py-14`–`py-16` mobile; more on desktop |
| **Canvas shift** | Alternate `#FFFFFF` · `#F3EEE7` · photo full-bleed — never rainbow bands | Culture Club tokens only |
| **Site index footer** | Publication-style index with ruled columns | `SiteIndexFooter` — F DNA, EF only |

**Never:** bulky card shadows, gradient section backgrounds, rounded pill section wrappers.

## Direction EF — two-layer lookbook (preferred for pages)

Wireframes: [home-direction-ef.md](../../../docs/wireframes/home-direction-ef.md) · [about-direction-ef.md](../../../docs/wireframes/about-direction-ef.md)

| Layer | Where | Pattern |
|-------|-------|---------|
| **A — Lookbook spine** | Act 1 chapters · Philosophy · Founder · Space | Full-viewport snap chapters: `LookbookIndex` + `LookbookNextCue` + fade-up |
| **B — Editorial depth** | Pillars · Experience · Space mosaic · Start Here · Team · FAQ | Keep section mechanics; add lookbook chrome only (eyebrow, hairlines, metadata) |

**Shared primitives** (`src/components/direction-ef/lookbook/`): `LookbookIndex` · `LookbookNextCue` · `LOOKBOOK_EASE`

**Freeze rule:** Never apply EF lookbook edits to `direction-e/**` or `ConceptEView.tsx`.

### EF About pages (Layer A)

| Page | Chapters |
|------|----------|
| Philosophy | 01–06 snap (hero → manifesto → place → practice → four areas → continue) |
| Founder | 01–04 snap (building → story → community → credentials) |
| The Space | 01–02 snap + mosaic |
| Team / FAQ | Shell + catalog DNA (`team-03`, `faq-02`) — chrome only, not full snap spine |

## Shell vs page content (architecture)

| Global shell (persistent) | Route / page files (content) |
|---------------------------|------------------------------|
| Culture Club canvas + typography vars | Sequential numbered chapters per route |
| Sticky header + overlay accordion | Split manifesto grids (`about-us-09` / `13` DNA) |
| Site-index footer (`SiteIndexFooter`) | Photo mosaics (`gallery-01`), sticky pillars (`portfolio-08`) |
| No Buy / Reserve / Book in marketing chrome | Copy module: `src/data/about-copy.ts` for EF About |

In this Vite simulator, shell = `App.tsx` phone stage + overlay; pages = `ConceptEFView` + `direction-ef/about/*`.

## Borrow from Odd Ritual site

| Borrow | How US uses it |
|--------|----------------|
| Large mono chapter numbers (`01` `02` `03`) | Act 1 full-viewport chapters |
| `//` title treatment | Chapter + shell eyebrows (`01 // ABOUT`) |
| Next-preview (`Scroll` / `Next` / ↓) | Bottom of each Act 1 chapter |
| Full-bleed photo as primary plane | Hero / chapters / Space |
| Minimal on-image copy | Brand + short lede only |
| Accordion / expandable story depth | Overlay nav + FAQ |
| Slow, intentional pacing | Motion + snap chapters |
| Heritage / culture language | Club voice (Columbus, not Cape Town) |
| Parenthetical / bracket metadata | Sparse editorial labels — e.g. `( Experience )`, `[Apply]` — not product SKUs |
| Site-index footer breaks | Hairline dividers; address · emails · legal · social |

## Never borrow

- Product / shop / apparel grids
- Symmetrical e-commerce cards with technical SKUs / price ledgers
- Price lists as homepage hero content
- Cape Town / South Africa / golf specifics (“fairways”, caddie, etc.)
- Dense always-open nav lists
- Blue SaaS badges, purple gradients, rounded-full pill clusters
- Public Buy / Reserve / Book in header or overlay

## Direction E — shipped anatomy (frozen baseline)

**Home** (`ConceptEView` + `src/components/direction-e/*`)

| Act | Surface | Pattern |
|-----|---------|---------|
| 1 | Chapters 01–04 | Full-viewport photo (or future slow loop), mono `n`, `// Title`, next-preview |
| 1 | 03 Four Pillars | Sticky stack — Foundation → Reflection → Longevity → Move the City |
| 2 | Experience | gallery-01 mosaic + sparse stats (5 · 14 · $75) + Start Here |
| 2 | Space | Photo mosaic, minimal overlay |
| 2 | Membership | Image statement; belonging; no tier cards |
| 2 | Start Here | Dual CTA; Apply uses `#0A3C2E` only |

Believe prose lives on Act 1 chapter 02 (no duplicate Act 2 Believe band).

**Interiors** — `DirectionEPageShell`: back → `/` · eyebrow `01 // ABOUT` · page title · address footer. No snap unless page opts in.

**Overlay** — Numbered accordion (~20px caps); one section open; children indented; no booking CTAs.

**Tokens** — `#FFFFFF` · `#181818` · `#5C5C5C` · `#F3EEE7` · Apply `#0A3C2E`. Media: `gymPhotos` / coach assets only.

## Pairing with shadcn-space-catalog

When this skill is attached **with** `/shadcn-space-catalog` (or user asks for catalog blocks for Direction E / Odd Ritual):

1. Read [reference.md](reference.md) **Catalog filter** before searching.
2. Search with Odd Ritual queries (editorial / gallery / portfolio sticky / about split / image CTA / faq accordion / team) — **not** SaaS, crypto, AI, dashboard, property pricing.
3. Prefer the **approved DNA** list; reject anti-fit blocks even if keyword-matched.
4. In this Vite simulator: **adapt** layout/motion into Tailwind + `motion` + lucide — do **not** CLI-install Next.js blocks into `components/ui` unless the user explicitly changes that rule.
5. Strip SaaS chrome after adapt: badges, gradients, CDN images, Book-now density.

## Quality bar — mechanisms + mobile-first media

Ship only when mechanisms are **high-confidence correct** and the page is built **mobile first** (see [mobile-first.mdc](../../rules/mobile-first.mdc)).

### Mechanisms (must work as designed)

Before marking done, verify each interactive pattern used on the surface:

| Mechanism | Confidence check |
|-----------|------------------|
| Overlay accordion | One section open; children indent; close/back restores scroll; no booking CTAs |
| Fade-up / stagger | Fires once in view; `LOOKBOOK_EASE`; static when `prefers-reduced-motion` |
| Next / Scroll cues | Point at real next beat; not decorative dead ends |
| Gallery swipe / mosaic | Touch drag works; no horizontal page scroll bleed; images cover frames |
| Expand bio / FAQ accordion | One open (or documented multi); keyboard/focus sane; content not clipped |
| Sticky pillars / snap chapters | Snap only where intended; shell pages don’t inherit home snap |
| CTAs / onNav | Routes resolve; Apply uses forest accent only |

Do **not** ship half-wired motion, broken swipe, or “looks fine on desktop” interactions that fail on phone.

### Mobile-first imagery

Design and crop for **~375px portrait first**; desktop is enhancement.

- Full-bleed / chapter photos: `object-cover` + mobile-safe focal point (faces/product not clipped by notches or gradients)
- Aspect frames (`aspect-[3/4]`, mosaics, portraits): correct ratio on phone; no letterboxing unless intentional
- No layout shift from missing width/height behavior; images fill their plane without overflowing the phone stage
- Critical type stays out of unsafe corners; soft bottom gradients don’t bury ledes on small screens
- Base styles = mobile; `md:` / `lg:` only to enhance — never desktop-first then shrink

## Checklist

- [ ] Feels like exploring a brand story, not a gym site
- [ ] Full-bleed photo or slow cinematic loop; minimal copy
- [ ] Chapter numbers + next-preview where Act 1 / lookbook spine applies
- [ ] Transitions: fade-up only; stagger body copy; no bounce/slide spam
- [ ] Separation: hairlines + mega indices + whitespace — no card containers
- [ ] Lookbook rhythm: high negative space; brutalist indices + quiet body
- [ ] Tone: contemporary heritage / local Columbus premium — not golf shop
- [ ] Culture Club tokens; real gym/coach media
- [ ] **Mechanisms verified** — accordion, motion, swipe, expand, CTAs work on phone
- [ ] **Mobile-first media** — 375px crops, `object-cover`, no overflow / wrong aspect
- [ ] Mobile-first 375px; 44px targets
- [ ] No public Buy / Reserve / Book chrome
- [ ] If catalog used: block matches reference filter
- [ ] EF work stays in `direction-ef/` — do not mutate frozen `direction-e/`

## Related

- Page recipes (unique interiors): [odd-ritual-pages](../odd-ritual-pages/SKILL.md)
- Wireframes: [home-direction-e.md](../../../docs/wireframes/home-direction-e.md) · [home-direction-ef.md](../../../docs/wireframes/home-direction-ef.md) · [about-direction-e.md](../../../docs/wireframes/about-direction-e.md) · [about-direction-ef.md](../../../docs/wireframes/about-direction-ef.md)
- Client: [todd-homepage-direction-aug-2026.md](../../../docs/client/todd-homepage-direction-aug-2026.md)
- Detail + catalog map: [reference.md](reference.md)
