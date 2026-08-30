# Wireframe — Home Direction EF (E+F Lookbook Merge)

**Status:** **FROZEN homepage** (Aug 2026) — do **not** edit home composition without explicit unlock. Simulator default remains **E+F** (E / F toggles hidden).  
**Freeze rule:** [`.cursor/rules/direction-ef-home-frozen.mdc`](../../.cursor/rules/direction-ef-home-frozen.mdc)  
**Frozen E baseline:** [home-direction-e.md](home-direction-e.md) — do **not** edit `direction-e/` for lookbook work  
**Awake reference:** [home-direction-f.md](home-direction-f.md) — harvest footer/metadata only  
**About (EF tree — active polish):** [about-direction-ef.md](about-direction-ef.md)  
**Locked IA:** [home-direction-d.md](home-direction-d.md)  
**System:** skill `odd-ritual` · Culture Club tokens

---

## Role vs E vs F

| | Direction E | Direction EF (E+F) | Direction F |
|---|---|---|---|
| Status | **Frozen** Odd Ritual baseline (toggle hidden) | **Active default** lookbook merge | Awake lookbook (toggle hidden) |
| Default in App | No | Yes | No |
| Code | `direction-e/` · `ConceptEView` | `direction-ef/` · `ConceptEFView` | `direction-f/` · `ConceptFView` |
| About | `direction-e/about` | `direction-ef/about` | Home only (uses E About if opened) |

---

## Two-layer lookbook contract (EF only)

### Layer A — Lookbook spine

Full-viewport (or snap) storytelling nodes: mega mono indices (`01`), `// Title`, Scroll/Next cues, photo-led emotion. Used for:

- Act 1 `ChapterIntro` 01–02 · Pillars 03
- Act 2 **04 Experience United** — F-style split lookbook in **one** `100cqh` snap (photo + editorial + 5·14)
- Narrative About (Philosophy · Founder · Space)

### Layer B — Editorial depth

One-job sections that keep mosaics / sticky mechanics. Lookbook **chrome only** (eyebrows, `( metadata )`, hairlines, breathing room):

- Four Pillars sticky stack (`portfolio-08`)
- **`Act2LookbookStack`** — Odd Ritual asymmetric photo deck; **larger prints on mobile**; desktop matrix unchanged; free-scroll hysteresis + no `scroll-smooth` in lookbook zone → `SiteIndexFooter`
- **No homepage Space mosaic** — facility depth lives on `/about/the-space`

### Shared chrome

- Mega indices + slash titles
- Scroll / Next / ↓ affordances
- Sparse `( )` / `[ ]` editorial labels (never SKU commerce)
- Site-index footer (F DNA, Culture Club tokens)
- Hard freeze: never apply lookbook edits to `direction-e/**` or `ConceptEView.tsx`

---

## Catalog → section mapping (EF)

| US section | Catalog DNA | Adapt how |
|---|---|---|
| Act 1 chapters | Custom + `services-03` / `about-us-13` easing | Full-bleed; shared EF lookbook primitives |
| Four Pillars | `portfolio-08` | Sticky stack; lookbook eyebrow chrome only |
| Experience United (04) | F split / editorial chapter | One `100cqh` snap; photo + copy + 5·14; no mosaic |
| Act 2 lookbook close | Odd Ritual asymmetric photo deck | Tall track + sticky; mobile-large / desktop-narrow print matrix; rising z-index; free-scroll hysteresis (snap + scroll-smooth off in zone) |
| Footer | `footer-01` / `footer-05` DNA from F | Cream `#F3EEE7` canvas; mono column labels; Satoshi link rows; hairlines; © + Designed and Made Locally |

---

## Act 2 spine (Aug 2026)

`03 Pillars` → `04 Experience` (snap) → `Act2LookbookStack` (asymmetric deck · free scroll) → `SiteIndexFooter`

Dropped from homepage: Space mosaic; tall Experience photo+mosaic; separate Start Here / MembershipStack sections.

---

## Implementation

- Components: `src/components/direction-ef/*` composed by `src/components/ConceptEFView.tsx`
- Simulator: `workingDirection: "E" | "EF" | "F"` in `App.tsx` (default **`"EF"`**; E / F toggles hidden for now)
- Photos: `gymPhotos` only
- Tokens: `#FFFFFF` · `#181818` · `#5C5C5C` · `#F3EEE7` · Apply `#0A3C2E`

## Anti-patterns

- Editing frozen E for lookbook
- Snap-per-section rewrite of Act 2
- F TypographicHero / zinc canvas as EF home spine
- Apparel / SKU / price ledgers
- Public Buy / Reserve / Book

## Related

- [home-direction-e.md](home-direction-e.md) · [home-direction-f.md](home-direction-f.md) · [about-direction-ef.md](about-direction-ef.md)
