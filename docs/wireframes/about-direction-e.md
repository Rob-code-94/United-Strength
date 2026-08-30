# Wireframe — About Section (Direction E)

**Status:** **Frozen** with Direction E baseline. Lookbook About work lives on [about-direction-ef.md](about-direction-ef.md) (`direction-ef/about`).  
**Home parent:** [home-direction-e.md](home-direction-e.md)  
**IA source:** Locked ABOUT children from Todd nav  
**System:** [`.cursor/rules/direction-e-odd-ritual.mdc`](../../.cursor/rules/direction-e-odd-ritual.mdc) · skill `odd-ritual`

---

## Routes (locked)

| Route | Page | Catalog DNA |
|---|---|---|
| `/about/philosophy` | Philosophy | `about-us-09` / `about-us-13` editorial |
| `/about/founder` | Founder Story | `about-us-13` narrative |
| `/about/team` | Meet the Team | `team-03` expand grid (+ `/team` alias) |
| `/about/the-space` | The Space | `gallery-01` mosaic |
| `/about/faq` | FAQ | `faq-02` numbered accordion |

Copy is private-club placeholder until Todd sends finals.

---

## Shared shell

`DirectionEPageShell` (`src/components/direction-e/DirectionEPageShell.tsx`):

- Sticky top: back → home · eyebrow `01 // ABOUT` · page title
- Light canvas default; Space may use dark photo tone
- Footer strip (address) consistent with home
- Normal scroll (no snap) — snap reserved for home Act 1

---

## Page layouts (mobile-first)

### Philosophy
Large Instrument Serif manifesto · short prose · one facility still · negative space / alabaster band.

### Founder Story
Numbered chapter feel · serif headline · founder story placeholders · one image.

### Meet the Team
Portrait grid from existing coach assets · expand bio · Odd Ritual chapter chrome · Apply CTA → membership path.

### The Space
Full photo grid from `gymPhotos` · minimal copy · “feeling of the space” · dark canvas OK.

### FAQ
Numbered questions · one-open accordion · club-voice Q&As (trimmed from [faq.md](faq.md); no gym-hype language).

---

## Implementation

- Components: `src/components/direction-e/about/*`
- Routed from `App.tsx` phone stage when overlay About links fire
- Photos: `src/assets/images/gym` + coach images under `src/assets/images/`
- Tokens: Culture Club; Apply accent `#0A3C2E` only

## Out of scope

Training / Foundation / Longevity / Culture / Membership / Start Here interiors · restoring Direction D switcher · final Todd copy

---

## Related

- [home-direction-e.md](home-direction-e.md)
- [home-direction-d.md](home-direction-d.md) — locked IA reference
- [faq.md](faq.md) — legacy Q&A source
