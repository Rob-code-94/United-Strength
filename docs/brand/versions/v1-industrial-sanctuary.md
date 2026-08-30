# v1 — High-Octane Industrial Sanctuary

**Frozen:** 2026-05-28  
**Git tag:** `aesthetic-v1` (run `git tag -a aesthetic-v1 -m "High-Octane Industrial Sanctuary (v1)"` when the repo is initialized)  
**Skill:** [.cursor/skills/high-octane-industrial-sanctuary/SKILL.md](../../../.cursor/skills/high-octane-industrial-sanctuary/SKILL.md)

## Descriptor

Dark obsidian canvas (`#080808`), charcoal surfaces, electric volt accent (`#CCFF00`) used sparingly, wide editorial grids, slide-out panel navigation, `font-light` hero headlines, weighted `duration-500` motion.

## Color tokens (snapshot)

| Token | Value |
|-------|-------|
| `background` | `#080808` |
| `surface` | `#121212` |
| `foreground` | `#fafafa` |
| `primary` | `#ffffff` |
| `primary-foreground` | `#080808` |
| `muted` | `#737373` |
| `accent-volt` | `#CCFF00` |
| `border` | `#1f1f1f` |

Frozen CSS: [`src/styles/versions/v1-industrial-sanctuary.css`](../../../src/styles/versions/v1-industrial-sanctuary.css)

## Key components (at freeze)

- Layout: `SiteHeader`, `NavPanel`, `MobileNav`, `WideSection`, `Container`
- Sections: `Hero`, `PillarGrid`, `CtaBand`
- UI: `ButtonLink` (volt hover)

## Restore

```bash
git fetch --tags
git checkout aesthetic-v1
```

Dev token preview: run `npm run dev`, open viewport switcher, set **Aesthetic → v1**.
