---
name: odd-ritual-pages
description: >-
  Per-page layout recipes for United Strength Direction EF interiors — About,
  Training, and journey pages. Shared Tier 1 chrome + unique Tier 2 grids so
  routes feel related, never templated. Philosophy is the foundation recipe
  library. Use when building or editing EF interior pages, unique page layouts,
  or when paired with odd-ritual + shadcn-space-catalog to pick catalog DNA per
  page recipe (not one clone-of-Philosophy stack).
---

# Odd Ritual Pages

> Companion to [odd-ritual](../odd-ritual/SKILL.md) — system feel lives there; **this skill** decides how each *route* is composed.  
> Foundation: [`PhilosophyPage.tsx`](../../../src/components/direction-ef/about/PhilosophyPage.tsx) + [`direction-ef/lookbook/`](../../../src/components/direction-ef/lookbook/)  
> Rules: [direction-ef-about-foundation.mdc](../../rules/direction-ef-about-foundation.mdc) · [direction-ef-training-foundation.mdc](../../rules/direction-ef-training-foundation.mdc)  
> Detail: [reference.md](reference.md)

## North star

**Cohesion via Tier 1. Uniqueness via Tier 2.**  
Visitors should know they are still in United Strength — not that every page is the same magazine chapter stack.

Does **not** unlock the frozen homepage — home stays under `odd-ritual` + [direction-ef-home-frozen.mdc](../../rules/direction-ef-home-frozen.mdc).

## 3-tier layout system

```
Tier 1  Global anchor     — identical framing on every interior
Tier 2  Variable grid     — unique recipe per page (required)
Tier 3  Micro-details     — shared motion + hairlines + metadata
```

| Tier | What | US implementation |
|------|------|-------------------|
| **1 — Global anchor** | Shell, nav, footer, tokens | Overlay accordion · `LookbookAboutPageShell` · `LookbookPageOpener` (density may vary) · `SiteIndexFooter` · Culture Club colors/fonts |
| **2 — Variable grid** | Section stack & layout DNA | Pick **one recipe** from the matrix below — never default to Philosophy’s full stack |
| **3 — Micro-details** | Motion & chrome accents | `LOOKBOOK_EASE` fade-up · `LookbookScrollReveal` / `LookbookStaggerBody` · hairlines · sparse `( metadata )` |

**Tier 3 never includes:** infinite marquees, bounce/spring, SaaS badges, rounded card shells, public Buy / Reserve / Book.

## Philosophy = recipe library, not template

Steal **beats** from Philosophy; do **not** clone the whole page onto Founder / Space / Team / FAQ / Training.

| Steal | Never clone wholesale |
|-------|----------------------|
| `LookbookPageOpener` + back row | Full opener → editorial chapters → manifesto → four-areas → closer on every route |
| Off-center image splits (`LookbookEditorialChapter`) when photo+story | Image splits on story-led or FAQ pages |
| Manifesto / Instrument Serif statement when voice-led | Manifesto density on photo-first Space |
| Ruled numbered index (four-areas pattern) for lists | Snap photo chapters / `DirectionEPageShell` on EF interiors |

Full beat inventory: [reference.md](reference.md) § Philosophy beats.

## Layout recipes (Tier 2)

### About

| Page | Recipe | Tier 2 structure | Catalog DNA |
|------|--------|------------------|-------------|
| Philosophy | Editorial chapters | Opener → off-center chapters → manifesto → ruled index → closer | `about-us-09` / `13` |
| Founder | Story-led | Opener → text columns → pull-quote → credentials index (**no** image splits) | `about-us-13` |
| Space | Photo-first | Light opener → gallery dominates → short visit band | `gallery-01` |
| Team | Alternating portraits | Intro → flip L/R rows → expand bio; **no** Apply CTA | `team-03` |
| FAQ | Full-width index | Light opener → cream jump band → numbered accordion | `faq-02` |

### Training

| Page | Recipe | Tier 2 structure | Catalog DNA |
|------|--------|------------------|-------------|
| Build / Burn | Class leaf | Opener → photo split → body → week-strip schedule | editorial + custom |
| Balance | Sparse manifesto | Coming-soon sparse — **no** schedule | manifesto DNA |
| Move the City // Run Club | Photo-first community | Opener → full-bleed photo → story → partners ruled index | `gallery-01` |
| Personal Training | Story-led hub | Opener → hub body → 1:1 + private group beats → coaches → inquire band | `about-us-13` + `cta-08` |

### Culture

| Page | Recipe | Tier 2 structure | Catalog DNA |
|------|--------|------------------|-------------|
| By Design | Sparse manifesto | Opener → manifesto → cream pull-quote → principles index | `about-us-13` (Cultivated twin) |
| Cultivated | Sparse manifesto | Opener → manifesto → cream pull-quote → principles index | `about-us-13` |
| Archive | Off Centered Stack | Opener → cream jump → scroll-reveal Archives → authors | Act2 photo-deck DNA |

### Journey

| Page | Recipe | Tier 2 structure | Catalog DNA |
|------|--------|------------------|-------------|
| Membership | Story-led belonging | Opener → belonging statement → no tier cards | `about-us-13` / image statement |
| Experience United | Inquiry / Start Here | Opener → experience path → CTAs | `cta-08` DNA (no Buy) |
| Apply for Membership | Form / apply | Opener → application path · Apply `#0A3C2E` | form + `cta-08` |

### Coming Soon (future recipes)

| Page | Recipe (when live) | Catalog DNA |
|------|--------------------|-------------|
| Foundation | Sparse manifesto → dedicated page | `about-us-13` |
| Longevity | Sparse manifesto → dedicated page | `about-us-13` |

**Sep 2026:** PT children (`1-on-1` / small-group / private-group) are **aliases →** `/training/personal`. Move the City lives under Training (`/training/move-the-city`), not Culture. Shop = external only (no interior recipe). Adapt Space DNA only — **no** CLI install.

## Culture Club tokens (required)

Override any pure B/W “Odd Ritual” prompt defaults:

| Role | Value |
|------|-------|
| Canvas | `#FFFFFF` · `#F3EEE7` · photo full-bleed |
| Text | `#181818` · muted `#5C5C5C` |
| Dark sections | Photo-led only — not pure `#000000` brand canvas |
| Apply | `#0A3C2E` only |
| Type | Satoshi · Instrument Serif · IBM Plex Mono |

See [brand-tokens.mdc](../../rules/brand-tokens.mdc) · [united-strength-brand](../united-strength-brand/SKILL.md).

## Type & spacing (prompt → US)

| Prompt idea | US rule |
|-------------|---------|
| High-impact uppercase display | Satoshi bold; tracking restrained — not `tracking-tighter` mega-streetwear on every H1 |
| Micro mono labels | IBM Plex Mono `text-[10px]`–`11px` · `tracking-[0.2em]`–`0.28em` · uppercase · `#5C5C5C` |
| Unbounded whitespace | `px-5`–`px-6` mobile · `py-14`+ between beats · `border-b border-neutral-200/60` |
| Asymmetry | 60/40 or 7/4–5 grids; never centered 6/6 card stacks |
| Sharp corners | Prefer hairlines over shadows; no bulky cards |

**Named beat — Off Centered Stack:** Say “use an Off Centered Stack” for publication / issue series (Culture Archive). Primitive: `LookbookOffCenteredStack`. **Locked mechanic:** sticky wrappers + rising z-index + scroll runway — **never** a spaced `flex gap` column or horizontal swipe substitute. Rule: [.cursor/rules/off-centered-stack.mdc](../../rules/off-centered-stack.mdc). Detail: [reference.md](reference.md) § Off Centered Stack.

Prompt allow/deny map: [reference.md](reference.md) § Prompt translation.

## Pairing with shadcn-space-catalog

When attached **with** `/shadcn-space-catalog` (and usually `/odd-ritual`):

1. Read this skill’s recipe for the **target page** first.
2. Search catalog for that recipe’s DNA (table above) — not a generic “about” dump.
3. Adapt into `direction-ef/` Tailwind + `motion` — **no** CLI-install into this Vite app unless user overrides.
4. Strip SaaS chrome; restyle to Culture Club tokens.
5. Confirm Tier 2 still matches the recipe (not Philosophy clone).

## Quality bar — mechanisms + mobile-first media

Same bar as [odd-ritual](../odd-ritual/SKILL.md) § Quality bar — enforce on **every** interior recipe.

### Mechanisms (high confidence)

Any pattern on the page must work correctly before ship — not “mostly works”:

- Opener back + `onNav` / shell footer links resolve
- Fade-up / stagger honor `prefers-reduced-motion`
- Gallery swipe (`LookbookGallerySwipe`): touch works; no page-bleed horizontal scroll
- Team expand / FAQ accordion: open/close reliable; content readable
- Week-strip / schedule rows (Training): scrollable on 375px without breaking layout
- Optional `LookbookNextCue`: targets a real following beat

If confidence is low, fix or remove the mechanism — do not leave decorative broken UI.

### Mobile-first imagery (pages)

Phone is the primary canvas for every Tier 2 recipe:

- Size and crop photos for **375px** first — full-bleed openers, editorial splits, portraits, mosaics
- Use correct aspect / `object-cover` so images fill frames without stretch or overflow
- Asymmetric 7/4 grids stack cleanly on mobile (single column) before desktop split
- Portrait rows and gallery tiles: consistent frame height on phone; no clipped faces from bad `object-position`
- Verify no horizontal scroll except intentional carousels

## New-page checklist

- [ ] Tier 1: `LookbookAboutPageShell` + opener + `SiteIndexFooter`
- [ ] Tier 2: matches recipe matrix (not Philosophy full stack)
- [ ] Tier 3: fade-up / stagger / hairlines only
- [ ] Culture Club tokens; real `gymPhotos` / team assets
- [ ] Copy from `about-copy.ts` / `training-copy.ts` (or approved source)
- [ ] Catalog DNA adapted if used
- [ ] **Mechanisms high-confidence** — swipe, expand, accordion, CTAs, motion verified on phone
- [ ] **Mobile-first media** — correct sizes/aspects/crops at 375px; no overflow
- [ ] Mobile 375px; 44px targets; no Buy / Reserve / Book
- [ ] EF only — do not mutate `direction-e/**` or frozen homepage

## Related

- Parent: [odd-ritual](../odd-ritual/SKILL.md)
- Wireframes: [about-direction-ef.md](../../../docs/wireframes/about-direction-ef.md) · [training-direction-ef.md](../../../docs/wireframes/training-direction-ef.md)
- Primitives: `src/components/direction-ef/lookbook/`
- Full matrix + beats: [reference.md](reference.md)
