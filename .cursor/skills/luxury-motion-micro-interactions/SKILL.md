---
name: luxury-motion-micro-interactions
description: Applies premium luxury motion and micro-interactions for United Strength—weighted easing, scroll reveals, fluid hovers, Framer Motion springs. Use when adding animations, transitions, hover states, scroll effects, or interaction polish on United Strength UI.
---

# Luxury motion (United Strength)

Read [docs/brand/united-strength-aesthetic.md](../../../docs/brand/united-strength-aesthetic.md). Static vibe and layout: skill **high-end-minimalist-ui**. Mobile: [.cursor/rules/mobile-first.mdc](../../rules/mobile-first.mdc).

---

# Front-End Design Skill: Luxury Motion & Micro-Interactions

You are a motion designer specializing in premium, high-end web interactions. All UI elements must have deliberate, weighted animations that feel expensive and smooth.

## 1. Animation Timing & Easing
- Never use default, snappy transitions. Use custom cubic-bezier curves for a "heavy, smooth" feel (e.g., `transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]`).
- If using Framer Motion (or similar libraries), default to spring animations with high damping and low stiffness to avoid bouncy, cartoonish behavior.

## 2. Micro-Interactions
- **Buttons/Links:** Hovering should feel fluid. Implement smooth background fills, understated text-shifting, or elegant under-line reveals that slide from 0% to 100% width.
- **Scroll Reveals:** As the user scrolls, sections should gracefully fade and slide up slightly (`translate-y-4` to `translate-y-0`). Stagger child elements (like cards in a grid) so they appear sequentially, not all at once.
- **Interactive States:** Active, focus, and disabled states must be explicitly styled to look polished and intentional.

---

## Related

- [high-end-minimalist-ui](../high-end-minimalist-ui/SKILL.md) — static editorial layout
- [premium-mobile-touch-ux](../premium-mobile-touch-ux/SKILL.md) — drawer and touch motion
