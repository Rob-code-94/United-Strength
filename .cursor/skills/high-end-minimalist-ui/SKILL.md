---
name: high-end-minimalist-ui
description: Applies United Strength high-end minimalist UI/UX—dark editorial mood, spatial flow, hard geometry, weighted motion. Use when building or styling pages, components, layouts, Tailwind classes, navigation, heroes, or CTAs for United Strength. Complements united-strength-aesthetic and mobile-first rules.
---

# High-end minimalist UI (United Strength)

Read [docs/brand/united-strength-aesthetic.md](../../../docs/brand/united-strength-aesthetic.md) for approved tokens. Apply [.cursor/rules/mobile-first.mdc](../../rules/mobile-first.mdc) on every screen. **Do not hardcode font families** unless recorded in the brand kit—focus on feel, spacing, contrast, and motion.

---

# Front-End Design Skill: High-End Minimalist Vibe & Flow

You are a premium UI/UX designer focusing strictly on the emotional weight, layout rhythm, and spatial flow of a culture-first, high-end lifestyle brand. Do not hardcode specific font families; focus entirely on the "feel" of the interface.

## 1. The Core Mood
- **Atmosphere:** Dark, immersive, editorial, and deeply grounded. The interface should feel like a premium lookbook or high-end gallery, not a tech application.
- **Color Temperature:** Rely heavily on deep matte darks (rich blacks, volcanic charcoals) contrasted against stark whites and muted, raw-concrete neutrals. 
- **Contrast Strategy:** Use contrast sparingly but intentionally to guide the eye. Most elements should rest in the shadows, allowing key focus actions to sharply slice through the dark canvas.

## 2. Layout Rhythm & Spacing (The "Flow")
- **Extreme Breathing Room:** Implement generous vertical padding (`py-24` to `py-32` in Tailwind) between major sections. Space is luxury; let the design breathe deeply.
- **Cinematic Entrances:** The top of the page (Hero) must be an expansive, full-screen canvas. It should rely on high-impact visual real estate (placeholder boxes for moody video/imagery) with a single, centered structural message.
- **Asymmetric Pacing:** Break up standard grid monotony. Alternate between full-bleed imagery rows, wide-open editorial text callouts, and multi-column asymmetric layouts to create a sense of discovery as the user scrolls.

## 3. Structural Geometry
- **Hard Edges:** Keep components structurally raw. Use sharp, unrounded corners (`rounded-none` or extremely subtle `rounded-sm`) to maintain an architectural, industrial edge.
- **Subtle Boundaries:** Separate ideas or sections using ultra-thin, low-contrast divider lines (`border-neutral-800`). Avoid heavy cards, boxes, or blocky containers. Let the elements float seamlessly on the dark background.

## 4. Interaction & Motion Feel
- **The "Lookbook" Navigation:** Keep the header incredibly sparse and low-profile. Prioritize a clean transition into a full-screen or deep-drawer navigation panel rather than crowding the top desktop menu.
- **CTAs:** Action steps should feel like solid, definitive blocks—high contrast, rectangle shapes that invert smoothly on interaction.
- **Motion detail:** For full motion rules (easing, scroll reveals, micro-interactions, Framer Motion), use skill **`luxury-motion-micro-interactions`**.

---

## Implementation (Tailwind-oriented)

Map mood to utilities without naming fonts:

| Intent | Tailwind direction |
|--------|-------------------|
| Canvas | `bg-neutral-950`, `bg-black`, `text-neutral-100` |
| Muted copy | `text-neutral-400`, `text-neutral-500` |
| Dividers | `border-neutral-800`, `border-white/10` |
| Section rhythm | `py-24 md:py-32`, `space-y-24` |
| Hero | `min-h-screen`, centered single headline + one CTA |
| CTA block | `rounded-none`, `bg-white text-black` hover:`bg-neutral-200`, `transition-all duration-500 ease-in-out` |
| Motion | See skill `luxury-motion-micro-interactions` |

**Mobile:** Implement hero, nav drawer, and CTAs at 375px first; then widen layouts.

## Anti-patterns

- Bright SaaS palettes, heavy shadows, `rounded-2xl` cards, crowded top nav on mobile
- Desktop-first breakpoints that shrink cramped mobile layouts
- Snappy `duration-150` micro-interactions on primary UI (see `luxury-motion-micro-interactions`)

## Related

- [luxury-motion-micro-interactions](../luxury-motion-micro-interactions/SKILL.md)
- [docs/wireframes/](../../../docs/wireframes/)
- [.cursor/rules/united-strength-aesthetic.mdc](../../rules/united-strength-aesthetic.mdc)
