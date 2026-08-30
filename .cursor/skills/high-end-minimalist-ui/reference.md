# High-end minimalist UI — quick reference

Use with [SKILL.md](SKILL.md). Sync token hex values into [docs/brand/united-strength-aesthetic.md](../../../docs/brand/united-strength-aesthetic.md) when the client approves.

## Section rhythm (mobile base)

```
Hero:     min-h-screen, single message, one primary CTA
Block:    py-24 px-6
Block lg: md:py-32 md:px-12
Gap:      space-y-24 between major sections
```

## Navigation pattern

- Mobile: minimal bar (logo + menu) → full-screen or deep drawer
- Desktop: sparse inline links; avoid duplicating every link in header and drawer
- Reserve / Buy: reachable from drawer or sticky mobile CTA row

## Component shapes

| Element | Classes |
|---------|---------|
| Button primary | `rounded-none px-8 py-4 font-medium tracking-wide` |
| Button ghost | `rounded-none border border-neutral-800` |
| Divider | `border-t border-neutral-800` |
| Image frame | `rounded-none overflow-hidden` |

## Motion defaults

```html
class="transition-all duration-500 ease-in-out"
```

Hover invert example for solid CTA:

```html
class="bg-white text-black hover:bg-neutral-200 duration-500 ease-in-out"
```

## Checklist before PR

- [ ] Viewed at 375px width first
- [ ] Hero reads as full-screen on phone
- [ ] Section padding feels editorial, not cramped
- [ ] No pill buttons or card stacks unless client override in brand kit
- [ ] Dividers are thin (`neutral-800`), not heavy borders
