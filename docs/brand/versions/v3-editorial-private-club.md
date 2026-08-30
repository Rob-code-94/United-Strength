# v3 — Editorial Private Club

> **SUPERSEDED 2026-06-24** — Kit D dark charcoal direction replaced by **The Culture Club** (ALD-primary). See [.cursor/skills/united-strength-brand/SKILL.md](../../../.cursor/skills/united-strength-brand/SKILL.md) and [moodboard.html](../../../moodboard.html). Do not implement v3 tokens until client explicitly re-selects this direction.

**Previously approved:** 2026-06-24 (client direction brief)  
**Git tag:** `aesthetic-v3` (not created — superseded before ship)  
**Skill:** [.cursor/skills/high-end-minimalist-ui/SKILL.md](../../../.cursor/skills/high-end-minimalist-ui/SKILL.md) (primary); Kit D spec in [client-brand-direction-kits.md](../client-brand-direction-kits.md)

## Descriptor

Dark charcoal canvas (`#0D0D0D`), warm off-white text (`#F5F5F0`), cinematic full-bleed heroes, sparse navigation, editorial pacing, club-not-gym copy. Inspired by Aimé Leon Dore, Soho House, Aman, Sukha — see [inspiration-index.md](../../reference/inspiration-index.md).

## Client approval

- Source: [client-direction-brief-2026-06-24.md](../../client/client-direction-brief-2026-06-24.md)
- Kit: **D — Editorial Club** (client-selected)
- Logo: US monogram (`public/brand/logo-monogram-black.png`, `logo-monogram-stealth.png`)

## Color tokens (proposed)

| Token | Value | Usage |
|-------|-------|-------|
| `background` | `#0D0D0D` | Page canvas |
| `surface` | `#161616` | Panels, header |
| `foreground` | `#F5F5F0` | Primary text (warm off-white) |
| `primary` | `#F5F5F0` | CTA fill on dark |
| `primary-foreground` | `#0D0D0D` | Text on light CTAs |
| `muted` | `#9CA3AF` | Body secondary |
| `accent` | `#C4B5A0` | Warm stone — section labels, one CTA style only |
| `border` | `#262626` | Hairline dividers |
| `surface-subtle` | `rgb(255 255 255 / 0.05)` | Muted bands |
| `hero-overlay` | `rgba(0, 0, 0, 0.55)` | Cinematic heroes |

## Typography (proposed)

| Role | Family | Weights | Notes |
|------|--------|---------|-------|
| Display + heroes | **Inter** | 300–400 | Light-weight heroes (Sukha parity) |
| Body | **Inter** or **Source Sans 3** | 400, 500 | Long-form copy |
| Display (optional) | **Fraunces** or **Cormorant Garamond** | 400–600 | Serif only if client confirms |

**Default recommendation:** Sans-only Inter light heroes for lowest friction.

## Layout and components

- Maximum whitespace between sections (`py-24`–`py-32`)
- Sparse top nav; full-screen or deep drawer menu on mobile
- Full-bleed video or cinematic still heroes
- Pillars: Train · Recover · Community
- Editorial overlay cards; muted accent over volt
- Application-first `/memberships` — no public tier pricing on marketing site
- US monogram on heroes (stealth variant on dark)

## Homepage narrative arc

Per [information-architecture.md](../../information-architecture.md):

1. Hero — who we are
2. Brand story + pillars — what we stand for
3. Editorial contrast — why we're different
4. Offerings / ecosystem teaser — United ecosystem
5. Application CTA — how to apply

## References

- [inspiration-index.md](../../reference/inspiration-index.md) — Tier 1 primary
- [Sukha Club](https://www.sukhaclub.com) — IA and application flow
- [client-brand-direction-kits.md](../client-brand-direction-kits.md) — Kit D full spec

## Implementation checklist (deferred)

1. Freeze v2: token snapshot at [`v2-light-performance-bold.css`](../../../src/styles/versions/v2-light-performance-bold.css) — done 2026-06-24
2. Run `git tag -a aesthetic-v2 -m "Light Performance Bold (v2)"` before merging v3 to `globals.css`
3. Add v3 tokens to `src/app/globals.css` as `:root` default
4. Add `html[data-aesthetic-version="v3"]` to dev switcher
5. Swap Barlow Condensed → Inter (and optional serif) in `layout.tsx`
6. Replace placeholder `logo.svg` with traced monogram SVG
7. Retheme home sections per narrative arc (reduce IronX marquee/stats density)
8. Update `.cursor/rules/united-strength-aesthetic.mdc` active preview to v3
9. Tag `aesthetic-v3` after ship

Proposed token CSS: [`src/styles/versions/v3-editorial-private-club.css`](../../../src/styles/versions/v3-editorial-private-club.css)

## Restore v2

```bash
git fetch --tags
git checkout aesthetic-v2
```

Dev token preview (until v3 ships): viewport switcher → **Light (v2)**.
