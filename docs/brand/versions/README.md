# Aesthetic versions

Numbered previews of the United Strength marketing site look. **Active** is what ships in `src/app/globals.css`. Older versions are frozen for restore and comparison.

| Version | Name | Descriptor | Git tag | Status |
|---------|------|------------|---------|--------|
| **v1** | High-Octane Industrial Sanctuary | Dark obsidian, volt accent, wide grids, panel nav | `aesthetic-v1` | Frozen |
| **v2** | Light Performance Bold | Light canvas, black/white only, Barlow Condensed bold, IronX rhythm | `aesthetic-v2` (before v3 ship) | Frozen — still in `globals.css` until v3 ships |
| **v3** | Editorial Private Club | Dark charcoal, warm off-white, cinematic heroes, Kit D, application-first | `aesthetic-v3` (not created — superseded) | Superseded |
| **v4** | The Culture Club | ALD-primary, scroll-snap homepage, Satoshi wordmark, Sukha apply | `aesthetic-v4-culture-club` | Frozen 2026-06-24 |
| **v5** | Culture Club Editorial | Canvas-driven pattern library, Monocle broadsheet, full route rebuild | `aesthetic-v5-culture-club` (after ship) | **Active** (EF default) |
| **v6** | V1 Edits homepage | Dark-first · horizontal opening carousel · left drawer · passport Membership preview | — | **Code default** `workingDirection: "V1"` — [v6-v1-edits.md](v6-v1-edits.md) |

## Naming convention

- Files: `v{N}-{kebab-descriptor}.md`, `src/styles/versions/v{N}-{kebab-descriptor}.css`
- Git tags: `aesthetic-v{N}` with annotated message

## Before a whole new look (v3+)

1. Freeze outgoing version: token CSS snapshot + manifest + `git tag aesthetic-vN`
   - **v2 freeze:** snapshot at [`v2-light-performance-bold.css`](../../../src/styles/versions/v2-light-performance-bold.css) (2026-06-24). Run `git tag -a aesthetic-v2 -m "Light Performance Bold (v2)"` before merging v3 to `globals.css`.
2. Register new row in this table
3. Implement new tokens in `globals.css` as active — see [v3 implementation checklist](v3-editorial-private-club.md#implementation-checklist-deferred)
4. Extend dev aesthetic switcher if needed

## How to restore

| Goal | Command / action |
|------|------------------|
| **Full site as v1** | `git checkout aesthetic-v1` (or branch from tag) |
| **Full site as v2** | `git checkout aesthetic-v2` (tag after v3 ships) |
| **Token preview only (dev)** | Viewport switcher → **Dark (v1)**, **Light (v2)**, or **v3** when wired. Sets `html[data-aesthetic-version]`. After token edits in `globals.css`, restart dev (`rm -rf .next && npm run dev`). |
| **Read v1 spec** | [v1-industrial-sanctuary.md](v1-industrial-sanctuary.md) |
| **Read v3 spec** | [v3-editorial-private-club.md](v3-editorial-private-club.md) |

Token-only preview does not revert component markup from v2; use git for pixel-perfect v1.

## Related

- [united-strength-aesthetic.md](../united-strength-aesthetic.md) — living brand kit
- Skills: `high-octane-industrial-sanctuary` (v1), `light-performance-bold` (v2), `high-end-minimalist-ui` (v3)
