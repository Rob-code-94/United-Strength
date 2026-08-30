---
name: light-performance-bold
description: Applies United Strength aesthetic v2 — light canvas, Barlow Condensed bold type, black/white only, IronX section rhythm. Use when building or styling pages for the active marketing preview.
---

# Light Performance Bold (United Strength v2)

Read [docs/brand/versions/v2-light-performance-bold.md](../../../docs/brand/versions/v2-light-performance-bold.md) and [docs/brand/united-strength-aesthetic.md](../../../docs/brand/united-strength-aesthetic.md).

## Core mood

- Light `#FAFAFA` canvas, white surfaces, black text
- Athletic marketing energy (IronX-weighted), not spa-minimal or underground dark
- Monochrome only — no volt or neon accents on active UI

## Typography

- **Barlow Condensed** (500–800) via `next/font` — single family for display, UI, body
- Headlines: `font-bold` / `font-extrabold`, `uppercase` on hero and major bands; tight tracking
- Nav + section labels: `uppercase`, `font-semibold` or `font-bold`, `tracking-wide`
- Body: `font-medium`, `text-muted`, 16px minimum on mobile

## Layout

- Keep panel nav, `WideSection`, hard edges (`rounded-none`)
- IronX rhythm: bold hero, class/trainer modules, bordered grids, asymmetric CTA bands
- **Homepage modules (IronX-aligned):** `TaglineBand`, `FeatureIconGrid`, `StatBand`, `ClassesTeaser` + `ClassPromoCard`, `MarqueeBand`, `NumberedStepsSection`, `CoachesTeaser`, `PillarGrid`, `CtaBand`, `TestimonialGrid`
- Inverted black bands for tagline, stats, marquee — white type on `bg-foreground`
- Marquee: CSS `marquee-scroll`; static wrap when `prefers-reduced-motion`
- Mobile first — 44px targets, full-width CTAs

## Color

- CTA: black fill, white text; hover invert (transparent + black ring)
- Dividers: `border-border` (`#E5E5E5`)
- No `accent-volt` on v2 components

## Versioning

- v1 (dark industrial) frozen — see [docs/brand/versions/](../docs/brand/versions/)
- Dev switcher: aesthetic v1 = token preview only

## Related

- Skill `high-octane-industrial-sanctuary` — **v1 archived**
- Skill `luxury-motion-micro-interactions` — weighted transitions
- Skill `premium-mobile-touch-ux` — drawer nav
