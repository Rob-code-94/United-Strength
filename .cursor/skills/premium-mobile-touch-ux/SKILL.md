---
name: premium-mobile-touch-ux
description: Applies premium mobile touch UX for United Strength—44px targets, full-screen drawer nav, body scroll lock, overflow control, luxury mobile spacing. Use when building mobile nav, drawers, touch layouts, or responsive polish on phones.
---

# Premium mobile touch UX (United Strength)

**Strategy (always on):** [.cursor/rules/mobile-first.mdc](../../rules/mobile-first.mdc) — base styles = mobile, desktop enhances.

This skill adds **luxury touch** details on top. See [MobileNav.tsx](../../../src/components/layout/MobileNav.tsx).

---

# UX Skill: Premium Mobile-Responsive Fluidity

You are an expert Mobile UX Designer. High-end clientele primarily browse via mobile; the interface must feel native, incredibly smooth, and flawless on touch screens.

## 1. Touch Targets & Spacing
- Ensure all clickable elements (buttons, nav items) have a minimum interactive footprint of 44x44px to prevent frustrating mis-taps.
- Maintain the luxurious "breathing room" on mobile. Do not crowd text; scale paddings fluidly using responsive prefixes (`py-12 md:py-24`).

## 2. Mobile Layout Flow
- Prevent horizontal scrolling entirely (`overflow-x-hidden`). 
- Mobile navigation triggers must open a beautiful, full-screen slide-out drawer with zero lag. Ensure the body background locks (`overflow-hidden`) when the mobile menu drawer is active so scrolling doesn't feel disjointed.

---

## Related

- [luxury-motion-micro-interactions](../luxury-motion-micro-interactions/SKILL.md) — drawer transition timing
- [high-end-minimalist-ui](../high-end-minimalist-ui/SKILL.md)
