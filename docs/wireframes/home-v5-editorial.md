# Wireframe — Home v5 (Editorial Culture Club)

> **Superseded (Aug 2026):** Active homepage spec is **[home-direction-d.md](home-direction-d.md)** — Todd-approved Direction D (Odd Ritual–inspired two-act structure). This v5 wireframe is archived for reference only.

**Status:** Implemented in `src/` (v5 Culture Club Editorial, 2026-06-24)  
**Built reference:** [`home.md`](home.md) (v4 — ALD brand-first + scroll snap)  
**Research:** [`.firecrawl/tier3-editorial/extraction-summary.md`](../.firecrawl/tier3-editorial/extraction-summary.md)  
**IA:** Unchanged — five communication goals from [information-architecture.md](../information-architecture.md)

**Tier 3 inspo:** Kinfolk · Monocle · Cereal · Wallpaper* · Nowness  
**Tier 1/2 retained:** ALD block 1 · Sukha nav/apply · Satoshi wordmark · membership green accent only

---

## Global chrome

### Block 1 (intro mode)

NeueHouse segmented bar — **US monogram always visible** · Account · hamburger. Hairline vertical dividers between cells.

### After scroll (Sukha IA — unchanged)

```
┌─────────────┬──────────────────────────┬─────────────┬──────────┐
│ [US mark]   │  Info · Offerings · …    │  (nav)      │ NEW HERE │
└─────────────┴──────────────────────────┴─────────────┴──────────┘
```

---

## Block map

| Block | Pattern ID | Primary inspo | Notes |
|-------|------------|---------------|-------|
| 1 | `cover-hero` | ALD + NeueHouse | HD hero; stacked Satoshi lockup; scroll cue |
| 2 | `membership-close` | Sukha / NeueHouse | Apply CTA + outbound “Show more” links |

**Conversion trim (2026-07):** Homepage is **2 snap blocks** (~200dvh). Pillars → `/new-here`. Ecosystem → `/offerings`. No inline expand on `/`.

Scroll snap: `home-snap-section` on both blocks.

---

## Block 1 — Cover hero

**Pattern:** `cover-hero` · Editorial club lockup (distinct from Kinfolk micro-caps)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [≡]                                                                         │
│                                                                             │
│              [ full-bleed cinematic image / video ]                         │
│                                                                             │
│                         UNITED                                              │
│                        STRENGTH                                             │
│                    ─────────────                                            │
│                    Columbus, OH                                             │
│                         Scroll ↓                                            │
└─────────────────────────────────────────────────────────────────────────────┘
```

- 100dvh · stacked Satoshi Bold wordmark · IBM Plex Mono place line below hairline · luxury scroll cue · no CTAs
- Lockup vertically centered in lower-middle band (`pb-[18vh]`)
- **Future:** swap still for Nowness `video-premiere` when 4K facility reel ready

**Typography:** Satoshi Bold wordmark · IBM Plex Mono place line  
**Motion:** Fade-up lockup on mount; scroll cue float; snap to block 2 (membership)

---

## Block 2 — Apply + show more (membership close)

**Pattern:** `membership-close` · Sukha apply + NeueHouse restraint

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ MEMBERSHIP                                                                  │
│ Apply for membership.                                                       │
│                                                                             │
│              [ Apply for Membership ]    ← only filled button on page       │
│                                                                             │
│ Show more                                                                   │
│   New here — how the club works →                                           │
│   Explore offerings →                                                       │
└─────────────────────────────────────────────────────────────────────────────┘
```

- **100dvh snap** — alabaster `#F3EEE7` band
- **First filled CTA** on page — membership green
- Outbound text links only for curious visitors (no second filled button)
- Pillars and ecosystem live on `/new-here` and `/offerings`

---

## Moved off homepage (interior routes)

| Former block | Route |
|--------------|-------|
| What we stand for (pillars) | `/new-here` |
| Ecosystem gallery | `/offerings` |
| Journey band | `/new-here` + show-more links |

---

## Typography roles (v5)

| Role | Font | Usage |
|------|------|-------|
| Wordmark / UI / buttons | Satoshi Bold | Block 1, nav, CTAs, pillar titles |
| Editorial deck | Instrument Serif 400 | Membership / journey headlines |
| Eyebrows / metadata | IBM Plex Mono | Section labels, place line, read time |
| Body | Satoshi or Instrument Serif Text | Section prose (16px min mobile) |

---

## Motion notes

- Scroll snap: mandatory y-axis on `/` (v4 — keep)
- Block enter: fade + translate-y-4, 700ms `cubic-bezier(0.25, 1, 0.5, 1)`
- Stagger pillar cells in block 2 (100ms offset)
- `prefers-reduced-motion`: no snap, no stagger, instant reveal

---

## Implementation checklist (future pass)

- [x] `SectionEyebrow` component (Monocle)
- [x] Refactor `TwoColumnCopy` → `ManifestoBand` variant
- [x] `PillarGrid` → broadsheet hairline cells (`BroadsheetGrid`)
- [x] `ClassesTeaser` → asymmetric `GalleryIndex` (`EcosystemGallery`)
- [x] Block 4 full-bleed overlay variant
- [x] Docs: v5 approved in brand kit — shipped 2026-06-24

---

## Related

- [home.md](home.md) — v4 built wireframe
- [README.md](README.md) — wireframe index
- [inspiration-index.md](../reference/inspiration-index.md) — Tier 3 URLs
