# v2 — Light Performance Bold

**Frozen:** 2026-06-24 (superseded by client-approved v3 direction)  
**Git tag:** `aesthetic-v2` (run before v3 ships in `globals.css`)  
**Skill:** [.cursor/skills/light-performance-bold/SKILL.md](../../../.cursor/skills/light-performance-bold/SKILL.md)

## Descriptor

Light canvas (`#FAFAFA`), white surfaces, black/white only (no volt), **Barlow Condensed** bold typography, IronX-style section rhythm, panel nav retained on light shell.

**Note:** Still the default in `globals.css` until v3 implementation. Client direction approved v3 Editorial Private Club on 2026-06-24.

Frozen CSS: [`src/styles/versions/v2-light-performance-bold.css`](../../../src/styles/versions/v2-light-performance-bold.css)

## Color tokens

| Token | Value |
|-------|-------|
| `background` | `#FAFAFA` |
| `surface` | `#FFFFFF` |
| `foreground` | `#0A0A0A` |
| `primary` | `#0A0A0A` |
| `primary-foreground` | `#FFFFFF` |
| `muted` | `#525252` |
| `border` | `#E5E5E5` |

## Dev preview

Default in development: open the bottom-left viewport panel and select **Light** (`data-aesthetic-version="v2"`). **Dark** applies frozen v1 tokens only (`v1`); markup stays v2.

## Homepage (IronX alignment)

**Since 2026-05-29:** Home (`src/app/page.tsx`) follows [IronX demo](https://wgl-dsites.net/ironx/) section rhythm — tagline band, feature icons, stats, class promos, marquee, numbered facility steps, coaches teaser — while keeping United Strength copy and no public pricing.

Config: `src/data/site.ts` (`taglineBand`, `featureHighlights`, `stats`, `marqueeText`, `facilitySteps`, coaches teaser strings).

**Since 2026-05-29 (hero):** IronX Behance parity — transparent nav on home, stacked `BUILD./BURN./BELONG.` headline, single hero CTA + phone, still-image hero until 4K video.

## References

- [IronX theme (Behance)](https://www.behance.net/gallery/249435049/IronX-Gym-Fitness-WordPress-Theme) — primary weight
- [Young Bodies](https://www.behance.net/gallery/209767609/Young-Bodies-Fitness-Brand-Identity-Logo-Design) — readability
- [Vetor](https://www.behance.net/gallery/225514705/Vetor) — premium type discipline
