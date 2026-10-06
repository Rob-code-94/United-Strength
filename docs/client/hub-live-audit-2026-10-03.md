# Hub live audit — 2026-10-03

- **URL:** http://localhost:5173/hub  
- **Auth:** Local default `united-strength-hub` (when `HUB_PASSWORD` unset)  
- **Scope:** HUB-501 — pencil inventory, Save/Publish chrome, gaps vs Oct pages

## Working (spot-checked)

| Area | Result |
|---|---|
| Login / session | Hub editor loads with Save draft · Publish · Revert · Log out |
| Home preview | Pencils: brand, opening 01/02/04, type mono/display/body, pillars ×4, space floor/detail, footer, crest, Stronger United |
| By Design (prior session) | Stronger United mark + hero media pencils (“Using the built-in image” when empty) |
| Save draft / Publish / Revert | Buttons present in chrome (not force-published in this pass) |
| Media slots in kit | ~70 keys incl. Experience beats, Cultivated, Archive featured/issues, By Design frames |

## Gaps resolved (HUB-502–505)

| Gap | Status |
|---|---|
| Hub MENU Escape + preview scroll lock | Done — Escape closes; stage inert while open |
| Philosophy in page picker / preview | Done — EF Philosophy + `philosophyHero` / `philosophyPlace` |
| Archive Off Centered Stack kit covers | Done — `archiveIssue1/2` via `V1MediaImg` |
| Run Club route maps | Done — `runRouteMonday` / `runRouteThursday` |

## Still by design / Dev-only

| Item | Note |
|---|---|
| Cultivated hero **MP4** | Poster/type-art only in kit |
| Membership photography-free | `membershipHero` unused — OK |
| Type pencils ≠ rewrite headlines | FAQ is only copy CMS |
| `ptBand` | May linger empty |

## Handoff matrix

See [`hub-editable-matrix.md`](./hub-editable-matrix.md).
