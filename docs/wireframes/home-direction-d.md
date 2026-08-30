# Wireframe — Home (Direction D — Ritual Progression)

**Status:** **Active** — Todd approved Aug 2026  
**Client direction:** [todd-homepage-direction-aug-2026.md](../client/todd-homepage-direction-aug-2026.md)  
**Notion:** [Locked IA + Homepage](https://app.notion.com/p/3b2275066c17813eb1a9c4f8c8aa4bbc)  
**Mood ref:** [Odd Ritual Golf](https://oddritualgolf.com) — chapter pacing, next-preview, vintage editorial (do not clone golf/shop grids)  
**Supersedes:** [home.md](home.md) (v4 ALD) · [home-v5-editorial.md](home-v5-editorial.md)

---

## Global chrome

Unchanged from Todd Aug 2026 locked IA:

- Hamburger **left**
- Full-viewport **dark overlay** nav; left-aligned links; stealth US monogram watermark (~5–8% opacity)
- Crest: scroll up → **UNITED STRENGTH CLUB** wordmark; scroll down → monogram only
- Top bar when scrolled: `Columbus, OH | {weekday}, {date}`
- **No** Buy · Reserve · Member · Book a class in public marketing nav

---

## Two-act structure

| Act | Sections | Purpose |
|-----|----------|---------|
| **Act 1** | Intro chapters 01–04 | Full-viewport teasers — one idea at a time |
| **Act 2** | Content sections 1–6 | Full layouts — Believe through Start Here |

**Scroll snap:** Each Act 1 chapter and major Act 2 band snaps to viewport start on mobile. Disable when `prefers-reduced-motion`.

---

## Act 1 — Editorial intro chapters

Each chapter = **100dvh / 100cqh** full viewport. Shared anatomy:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│              [ full-bleed photo OR slow loop video — cinematic ]            │
│                                                                             │
│  01                                                                         │
│  // United Strength Club                                                    │
│                                                                             │
│  (minimal copy — optional)                                                  │
│                                                                             │
│                              ↓                                              │
│                         02 // What We Believe                               │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Chapter map

| # | Title | Previews | Media notes |
|---|-------|----------|-------------|
| **01** | United Strength Club | 02 What We Believe | Hero facility still or slow reel; Satoshi Bold lockup optional |
| **02** | What We Believe | 03 The Four Pillars | Philosophy / culture still |
| **03** | The Four Pillars | 04 Experience United | Pillar mood still |
| **04** | Experience United | *(transition to Act 2)* | Experience / community still |

**Rules:**

- Large chapter number (IBM Plex Mono or display scale)
- Title format: `{nn} // {Title}`
- Bottom **next preview**: chevron + next chapter number/title (Odd Ritual pattern)
- No CTAs in Act 1
- Video: very slow, cinematic — not flashy; respect reduced motion (fallback to still)

---

## Act 2 — Content sections

### Section 1 — What We Believe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [ large editorial headline — Instrument Serif or Satoshi display ]         │
│                                                                             │
│  Short supporting paragraph. Plenty of negative space.                      │
│  Focus: why United exists — not everything we offer.                        │
│                                                                             │
│  ┌─────────────────────────────┐                                            │
│  │   [ one strong image ]      │                                            │
│  └─────────────────────────────┘                                            │
│                                                                             │
│  (minimal CTA — optional text link only)                                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

- Background: `#F3EEE7` alabaster or white canvas
- Copy: placeholder OK until Todd sends final

---

### Section 2 — The Four Pillars

Four **editorial feature panels** — not list rows or pricing cards.

**Order (locked):** Foundation · Reflection · Longevity · Move the City

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  The Four Pillars                                                           │
│                                                                             │
│  ┌──────────────┐  ┌──────────────┐                                         │
│  │ [icon]       │  │ [icon]       │   (stack 1-col mobile · 2-col md+)      │
│  │ Foundation   │  │ Reflection   │                                         │
│  │ one sentence │  │ one sentence │                                         │
│  │ explore →    │  │ explore →    │                                         │
│  └──────────────┘  └──────────────┘                                         │
│  ┌──────────────┐  ┌──────────────┐                                         │
│  │ Longevity    │  │ Move the City│                                         │
│  └──────────────┘  └──────────────┘                                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

| Pillar | Route |
|--------|-------|
| Foundation | `/foundation` |
| Reflection | `/longevity/reflection` |
| Longevity | `/longevity` |
| Move the City | `/culture/move-the-city` |

- Subtle tap/hover interaction → explore further
- Pillars are brand ideas — **not** nav mirrors

---

### Section 3 — Experience United

First functional section. Elevated — not promotional.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Experience United                                                          │
│                                                                             │
│     5              14              $75                                        │
│  Classes         Days           (trial)                                     │
│                                                                             │
│  Short explanation — one or two lines.                                      │
│                                                                             │
│              [ Start Here → /start-here/experience ]                        │
└─────────────────────────────────────────────────────────────────────────────┘
```

- Stat row: **5 Classes · 14 Days · $75**
- Primary CTA: Start Here → `/start-here/experience`
- Forest green accent (`#0A3C2E`) for primary button only

---

### Section 4 — The Space

Photography-led. Minimal copy.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ┌────────┐ ┌────────┐                                                      │
│  │ arch   │ │ light  │   asymmetric grid or horizontal scroll on mobile      │
│  └────────┘ └────────┘                                                      │
│  ┌──────────────────┐ ┌────────┐                                            │
│  │ equipment/detail │ │ member │                                            │
│  └──────────────────┘ └────────┘                                            │
│                                                                             │
│  The Space — one line optional                                              │
│  Explore → /about/the-space                                                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Subjects:** architecture · natural light · equipment · details · materials · members · small moments

**Assets:** `GYM PHOTOS BETA/` → `src/assets/images/gym/` per [.cursor/rules/gym-photos-beta.mdc](../../.cursor/rules/gym-photos-beta.mdc)

---

### Section 5 — Membership

Belonging — not pricing.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  [ Large statement — Instrument Serif ]                                   │
│                                                                             │
│  Short paragraph — what membership represents. Community.                   │
│  No public monthly prices.                                                  │
│                                                                             │
│              [ Membership → /membership ]                                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

- Background: `#F3EEE7` alabaster band optional

---

### Section 6 — Start Here

Two clear paths — obvious next step.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Start Here                                                                 │
│                                                                             │
│  ┌─────────────────────────────────────┐                                    │
│  │     Apply for Membership            │  ← primary filled (#0A3C2E)       │
│  └─────────────────────────────────────┘                                    │
│                                                                             │
│       Experience United  → /start-here/experience                           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Motion and interaction

| Element | Treatment |
|---------|-----------|
| Chapter transitions | 600–800ms ease; no bounce |
| Next-preview cue | Subtle float or fade; 44px tap target if tappable |
| Pillar panels | Hover/tap reveal — explore affordance |
| Video loops | Autoplay muted; pause when off-screen; still fallback |
| Reduced motion | Disable snap; static stills; no autoplay video |

---

## Photography sourcing

| Use | Asset path |
|-----|------------|
| Intro chapters | `hero-full-bleed.jpg`, `space-atmosphere.jpg`, `architecture-raw.jpg`, `gallery-cinematic.jpg` |
| The Space grid | B Roll + Equipment library via `src/assets/images/gym/index.ts` |

---

## Implementation backlog (vs. current `ConceptDView`)

Current beta preview [`src/components/ConceptDView.tsx`](../../src/components/ConceptDView.tsx) does not yet match this wireframe:

- [ ] Act 1 intro chapters missing — currently silent hero + numbered content sections only
- [ ] Next-chapter preview UI (`↓` + next title) not implemented
- [ ] Experience United stat row (5 / 14 / $75) missing
- [ ] Four Pillars still list-style — need editorial panels with icons
- [ ] Pillar order: code has Foundation → Longevity → Reflection; wireframe locks **Foundation → Reflection → Longevity → Move the City**
- [ ] The Space needs multi-image gallery treatment
- [ ] Slow cinematic video loops not wired

Full UI rebuild is a follow-up build ticket — this wireframe is the spec.

---

## Responsive behavior

| Breakpoint | Changes |
|------------|---------|
| Mobile (375px) | Single column; full-viewport snap chapters; pillar panels stack; Space grid scroll or stack |
| Desktop | Same narrative order; wider typography; 2-col pillar grid; richer Space gallery |

---

## Related

- [Todd homepage direction](../client/todd-homepage-direction-aug-2026.md)
- [AI Studio brief — Direction D](../client/ai-studio-brief.md)
- [Brand skill](../../.cursor/skills/united-strength-brand/SKILL.md)
