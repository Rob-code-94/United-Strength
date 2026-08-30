# v4 — The Culture Club (ALD-primary)

**Approved:** 2026-06-24  
**Frozen:** 2026-06-24 (superseded by v5 canvas-driven editorial)  
**Git tag:** `aesthetic-v4-culture-club`  
**Token snapshot:** [v4-culture-club.css](../../../src/styles/versions/v4-culture-club.css) · [docs snapshot](v4-culture-club.css)

## Descriptor

White canvas, ALD brand-first homepage scroll-snap, Satoshi Bold wordmark, Instrument Serif editorial decks, IBM Plex Mono eyebrows. Culture Club mix: ~55% ALD · ~25% Soho/Sukha · ~15% Aman · ~5% Switchyards.

## Color tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-primary` | `#ffffff` | Page canvas |
| `--color-bg-secondary` | `#f3eee7` | Alabaster hospitality bands |
| `--color-bg-warm` | `#f7f7f7` | Utility surfaces |
| `--color-text-primary` | `#181818` | Ink |
| `--color-accent` | `#0a3c2e` | Membership apply CTA only |
| `--color-accent-spare` | `#d43f21` | Editorial accent sparing |

## Typography

| Role | Family |
|------|--------|
| Wordmark / UI | Satoshi Bold |
| Editorial deck | Instrument Serif 400 |
| Eyebrows | IBM Plex Mono |

## Homepage (v4)

Seven scroll-snap blocks: BrandIntroBlock → ManifestoBand → EditorialPillarGrid → GalleryIndexBlock → EcosystemGallery → CtaBand → JourneyBand.

## Restore

```bash
git checkout aesthetic-v4-culture-club
```

Dev preview: Viewport switcher → set `data-aesthetic-version="v4"` when v4 override is wired.
