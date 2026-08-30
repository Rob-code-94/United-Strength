# Wireframe — Home Direction E (Odd Ritual Catalog Preview)

**Status:** **Frozen baseline** (code in `direction-e/`; simulator toggle **hidden**). Active default is **E+F** — see [home-direction-ef.md](home-direction-ef.md). Do **not** edit `src/components/direction-e/` for lookbook work.  
**Locked IA reference:** [home-direction-d.md](home-direction-d.md) (Direction D)  
**About interiors:** [about-direction-e.md](about-direction-e.md)  
**EF merge (active default):** [home-direction-ef.md](home-direction-ef.md) · [about-direction-ef.md](about-direction-ef.md)  
**Awake reference:** [home-direction-f.md](home-direction-f.md)  
**Client content map:** [todd-homepage-direction-aug-2026.md](../client/todd-homepage-direction-aug-2026.md)  
**Mood ref:** [Odd Ritual Golf](https://oddritualgolf.com) — chapter pacing, next-preview, vintage editorial (do not clone golf/shop grids)  
**Catalog:** ArmorATD `/Volumes/ArmorATD/Code/shadcn-space-catalog` — adapt layout/motion DNA into Vite; do **not** CLI-install Next.js blocks (no `components/ui` in this app)

---

## Role vs Direction D / EF / F

| | Direction D | Direction E | Direction EF | Direction F |
|---|---|---|---|---|
| Status | **Locked** Todd foundation (docs) | **Frozen** Odd Ritual baseline | **Active default** lookbook merge | Awake lookbook (toggle hidden) |
| Spec | `home-direction-d.md` | This file + `about-direction-e.md` | `home-direction-ef.md` | `home-direction-f.md` |
| Default in App | Hidden | Hidden | Yes | Hidden |

Same two-act IA labels as D. EF is the active working surface; E stays frozen for reference.

---

## Catalog → section mapping

| US section | Catalog DNA | Adapt how |
|---|---|---|
| Act 1 chapters 01–04 | Custom shell + easing from `services-03` / `about-us-13` | Full-viewport photo, large mono number, `//` title, bottom next-preview; no SaaS badges |
| What We Believe | `about-us-13` editorial + image | Serif headline, short prose, one gym still, alabaster/white |
| Four Pillars | `portfolio-08` sticky stack | Foundation → Reflection → Longevity → Move the City; Odd Ritual chrome; Culture Club tokens |
| Experience United | `gallery-01` mosaic + CountUp | Photo-led entry + **5 · 14 · $75**; Start Here CTA |
| The Space | `gallery-01` mosaic | Facility stills only; minimal overlay |
| Membership | `cta-08` image statement | Belonging copy; button → `/membership`; no pricing tiers |
| Start Here | Dual CTA (cta stripped) | Apply primary `#0A3C2E`; Experience secondary |

---

## Odd Ritual — borrow / avoid

**Borrow:** Numbered chapters · next-preview (`Scroll` / `↓` / next title) · photo-led bands · heritage restraint · slow motion (600–800ms)

**Avoid:** Product/shop grids · Cape Town specifics · blue SaaS gradients · rounded-full pills · shadcnspace CDN images

---

## Two-act structure (same as D)

**Act 1 — Intro:**  
01 United Strength Club → 02 What We Believe → **03 Four Pillars** (sticky stack content, not photo teaser) → 04 Experience United

**Act 2 — Content:**  
Experience (gallery mosaic + 5/14/$75) · Space · Membership · Start Here  
(Believe prose lives on Act 1 chapter 02 only.)

---

## Implementation

- Components: `src/components/direction-e/*` composed by `src/components/ConceptEView.tsx`
- Photos: `src/assets/images/gym` only
- Tokens: Culture Club (white / `#181818` / `#5C5C5C` / `#F3EEE7` / accent `#0A3C2E`)

## Backlog vs prior E

- [x] Replace thin services-03-only preview with full two-act homepage
- [x] Act 1 next-preview chapters
- [x] Todd pillar order (Foundation → Reflection → Longevity → Move the City)
- [x] Experience United stat row
- [ ] Slow loop video when facility reel exists
- [ ] Port winning E patterns into ConceptDView if Todd prefers

---

## Related

- [about-direction-e.md](about-direction-e.md) — About submenu pages
- [home-direction-d.md](home-direction-d.md) — locked foundation
- [ai-studio-brief.md](../client/ai-studio-brief.md)
