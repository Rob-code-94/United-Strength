# Wireframe — Home Direction F (Awake Lookbook Landing)

**Status:** Awake lookbook reference (simulator toggle **hidden**; harvest into EF). **E+F** is the active default — [home-direction-ef.md](home-direction-ef.md).  
**Sibling merge:** [home-direction-ef.md](home-direction-ef.md) — harvest footer/metadata into EF only; do not replace E  
**Locked IA reference:** [home-direction-d.md](home-direction-d.md)  
**Sibling preview:** [home-direction-e.md](home-direction-e.md) (Odd Ritual frozen baseline)  
**Mood / shell:** [Awake — Shadcn Agency & Portfolio](https://shadcnspace.com/templates/awake) — wide boundaries, negative space, sharp low-contrast borders (adapt DNA only; do not install Next template into this Vite app)

---

## Role vs Direction E / EF

| | Direction E | Direction EF | Direction F |
|---|---|---|---|
| Status | Frozen Odd Ritual baseline | **Active default** lookbook merge | Awake lookbook (toggle hidden) |
| Feel | Full-bleed chapters + snap | E spine + lookbook chrome + site-index | Awake airy lookbook |
| About interiors | `direction-e/about` | `direction-ef/about` | Home only |
| Default in App | No (hidden) | Yes | No (hidden) |

---

## Locked decisions

- **Same IA labels as E** for chapters 01–04 (Todd pillar order).
- **No** offerings ledger / apparel commerce on F.
- **No** Buy / Reserve / Book in marketing chrome.
- **Media:** `gymPhotos` only.

---

## Catalog → section mapping

| US section | Catalog DNA | Adapt how |
|---|---|---|
| Typographic hero | Awake spacing + `hero-04` / `hero-26` | Bold title + mono metadata; `#fafafa` canvas |
| 01 Club · 02 Believe · 04 Experience | `portfolio-02`/`04` + `about-us-section-09` | 12-col asymmetrical; oversized mono index |
| 03 Four Pillars | `card-22` Lenis stack + snap | Dedicated viewport + Lenis smooth scroll; sticky scale ranges + `-5vh + i*16px`; large ~72% height × full-width cards; snap per pillar |
| Site index | `footer-01` / `footer-05` | Multi-column + `border-t border-zinc-200/60`; “Designed and Made Locally” |

Install policy: **adapt** into `src/components/direction-f/*` — do not CLI-install blocks into this Vite simulator. `card-22` mechanics adapted from ArmorATD source (CLI blocked on `lenis` registry item).

---

## Page anatomy

1. **TypographicHero** — United Strength Club + lede + `( Columbus, OH · Lookbook )`
2. **LookbookChapter 01** — United Strength Club
3. **LookbookChapter 02** — What We Believe (reverse align)
4. **PillarsLookbook 03** — full-bleed snap pages (Foundation → Reflection → Longevity → Move the City); card-22 scale stack
5. **LookbookChapter 04** — Experience United
6. **SiteIndexFooter** — Resources · Legal · Contact · Social

**Motion:** `ScrollReveal` on chapters; pillars use sticky scale + `scroll-snap` on phone stage. Ease `[0.21, 0.47, 0.32, 0.98]`; honor `prefers-reduced-motion`.

**Pillars fill:** Active card ≈ near-full width and ~60–70% of phone content height under crest (orange-outline target). Behind cards may scale down slightly for stack depth.

**Canvas (F-scoped):** `bg-[#fafafa]` · `text-zinc-900` · hairline zinc borders. Does not rewrite global Culture Club tokens for E/D.

---

## Implementation

- Components: `src/components/direction-f/*` composed by `src/components/ConceptFView.tsx`
- Simulator: `workingDirection: "E" | "EF" | "F"` in `App.tsx` (default **`"EF"`**; E / F toggles hidden)
- Data: `src/components/direction-f/data.ts`

---

## Related

- [home-direction-e.md](home-direction-e.md)
- [home-direction-d.md](home-direction-d.md)
- Skills: odd-ritual · shadcn-space-catalog
