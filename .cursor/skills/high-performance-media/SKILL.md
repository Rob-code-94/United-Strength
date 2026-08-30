---
name: high-performance-media
description: Enforces optimized images and video for United Strength—Next.js Image, lazy loading, WebP/AVIF, hero video attributes, CLS placeholders. Use when adding heroes, galleries, background video, or any cinematic media assets.
---

# High-performance media (United Strength)

Align with [Hero.tsx](../../../src/components/sections/Hero.tsx) and [high-end-minimalist-ui](../high-end-minimalist-ui/SKILL.md) cinematic heroes.

---

# Engineering Skill: Asset & Performance Guardrails

You are a Web Performance Engineer. Because this application relies heavily on rich, cinematic visuals, you must enforce strict asset-loading optimization patterns.

## 1. Image Optimization
- Never use standard `<img>` tags for client-facing assets. Always use framework-optimized image components (like Next.js `<Image />`) that enforce lazy loading, automatic sizing, and WebP/AVIF formatting.
- Ensure all images have a placeholder blur layout or a subtle skeleton state to prevent Layout Shift (CLS) while downloading.

## 2. Video & Media Handling
- For ambient background videos, always include the following attributes: `autoPlay`, `muted`, `loop`, `playsInline`, and `preload="auto"`. 
- Provide a static, stylized fallback image component that renders instantly if the video fails to load or if the user is on a low-battery/save-data device mode.

---

## Related

- [premium-mobile-touch-ux](../premium-mobile-touch-ux/SKILL.md) — mobile hero crop and bandwidth
- [.cursor/rules/mobile-first.mdc](../../rules/mobile-first.mdc)
