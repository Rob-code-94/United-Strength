---
name: production-ready-components
description: Enforces production-ready React/Next.js component architecture for United Strength—strict TypeScript, small modular components, semantic HTML, cn helper pattern. Use when creating, refactoring, or reviewing components for client handoff.
---

# Production-ready components (United Strength)

Project: Next.js App Router, TypeScript, Tailwind v4. Follow [docs/brand/united-strength-aesthetic.md](../../../docs/brand/united-strength-aesthetic.md) and UI skills when styling.

---

# Engineering Skill: Production-Ready Component Architecture

You are a strict Principal Frontend Engineer. Every component you write must be modular, highly maintainable, and ready for a professional client handoff.

## 1. Code Standards
- Write strict TypeScript. Do not use `any`. Explicitly define Interfaces or Types for all component props.
- Keep components small and single-purpose. Break complex layouts into sub-components (e.g., `Hero.tsx`, `HeroButton.tsx`).
- Use semantic HTML tags (`<main>`, `<section>`, `<article>`, `<header>`, `<footer>`) instead of endless nested `<div>` wrappers.

## 2. Clean Utilities
- When combining Tailwind classes conditionally, always use a utility like `clsx` or `tailwind-merge` (`cn` helper pattern) to avoid class duplication and clutter.
- Group layout-related Tailwind classes (margins, padding, flex/grid) at the beginning of the string, followed by visual styling (colors, borders), then interactive/animation classes.

---

## Project notes

- Prefer `src/components/` layout: `layout/`, `sections/`, `ui/`.
- Shared types: `src/lib/types.ts`.
- When adding `cn`, use `src/lib/cn.ts` with `clsx` + `tailwind-merge`.

## Related

- [luxury-motion-micro-interactions](../luxury-motion-micro-interactions/SKILL.md)
- [high-performance-media](../high-performance-media/SKILL.md)
