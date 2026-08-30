# Brand

| Document | Purpose |
|----------|---------|
| [united-strength-aesthetic.md](united-strength-aesthetic.md) | **Living brand kit** — colors, fonts, logos, UX defaults, changelog |
| [client-brand-direction-kits.md](client-brand-direction-kits.md) | **Client presentation** — four brand directions (colors, fonts, logo briefs) |
| [../client/client-direction-brief-2026-06-24.md](../client/client-direction-brief-2026-06-24.md) | **Client-approved** strategic direction and inspiration tiers |
| `/brand-kits` (dev) | **Visual presentation** — swatches, type, IronX/Sukha refs, home previews (`npm run dev`) |
| [versions/README.md](versions/README.md) | **Aesthetic version index** — v1 frozen, v2 active, restore instructions |

Update the aesthetic doc when fonts, colors, or logos are approved.

## Brand-kit screenshots

Static JPGs under `public/brand/previews/` (United Strength home/classes per kit) and `public/brand/references/` (IronX, Sukha, ONE LDN, live site). **Refresh after homepage or aesthetic changes:**

1. `npm run dev`
2. `npx playwright install chromium` (first time only)
3. `npm run brand-kits:capture`

**Versioning rule:** Before any whole-site look change, freeze the outgoing version (manifest + `src/styles/versions/vN-*.css` + git tag `aesthetic-vN`). See [versions/README.md](versions/README.md).

## Cursor rules (always on)

| Rule | Purpose |
|------|---------|
| [united-strength-aesthetic.mdc](../../.cursor/rules/united-strength-aesthetic.mdc) | Look, features, brand kit, skills index |
| [mobile-first.mdc](../../.cursor/rules/mobile-first.mdc) | Phone-first layout strategy |
| [plan-mode-ticketing.mdc](../../.cursor/rules/plan-mode-ticketing.mdc) | Plan todos, audit completed work, full completion |

## Cursor skills

| Skill | When to use |
|-------|-------------|
| [light-performance-bold](../../.cursor/skills/light-performance-bold/SKILL.md) | **Active v2** — light, bold type, monochrome |
| [high-octane-industrial-sanctuary](../../.cursor/skills/high-octane-industrial-sanctuary/SKILL.md) | Archived v1 only |
| [high-end-minimalist-ui](../../.cursor/skills/high-end-minimalist-ui/SKILL.md) | Spacing, flow, geometry baseline |
| [luxury-motion-micro-interactions](../../.cursor/skills/luxury-motion-micro-interactions/SKILL.md) | Animations, hovers, scroll reveals |
| [production-ready-components](../../.cursor/skills/production-ready-components/SKILL.md) | TypeScript, modular components, `cn` |
| [high-performance-media](../../.cursor/skills/high-performance-media/SKILL.md) | Next.js Image, video, CLS |
| [premium-mobile-touch-ux](../../.cursor/skills/premium-mobile-touch-ux/SKILL.md) | Touch targets, drawer nav |
