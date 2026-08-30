# Odd Ritual Pages — reference

Companion detail for [SKILL.md](SKILL.md). Parent system feel: [odd-ritual/reference.md](../odd-ritual/reference.md).

---

## Philosophy beats (foundation inventory)

Source implementation: `src/components/direction-ef/about/PhilosophyPage.tsx`  
Primitives: `src/components/direction-ef/lookbook/`

| Beat | Primitive / pattern | Use when |
|------|---------------------|----------|
| Typographic opener | `LookbookPageOpener` | **Every** EF interior (density may vary) |
| Page shell + site index | `LookbookAboutPageShell` + `SiteIndexFooter` | Every EF interior |
| Off-center image + prose | `LookbookEditorialChapter` | Photo + story (Philosophy place/practice; class leaves) |
| Manifesto / serif statement | `LookbookManifestoSection` / `LookbookManifestoSplit` | Belief / voice pages |
| Ruled numbered index | Four-areas list (`border-t` rows + mono `n`) | FAQ, credentials, formats, health areas |
| Gallery-led plane | `LookbookGallerySwipe` | Space (photo-first) |
| Off Centered Stack | `LookbookOffCenteredStack` | Left-biased layered prints; scroll reveal; Culture Archive |
| Alternating portrait rows | `LookbookTeamPortrait` | Team |
| Next chapter cue | `LookbookNextCue` | Optional between major beats |
| Fade-up / stagger | `LookbookScrollReveal` / `LookbookStaggerBody` · `LOOKBOOK_EASE` | Tier 3 everywhere |
| Editorial section pad | `EditorialSectionWrapper` or `px-5 py-14` + `border-b border-neutral-200/60` | Section rhythm |

### Philosophy stack (canonical — reference only)

```
LookbookPageOpener
→ editorial / manifesto sections (PHILOSOPHY_EDITORIAL_SECTIONS)
→ four-areas ruled index (cream canvas)
→ closing / continue band
→ SiteIndexFooter (via shell)
```

Other pages compose a **subset** of beats + unique structure. Do not paste this whole stack.

---

## Full page recipe matrix

### About (`direction-ef/about/`)

| Route | Recipe | Tier 2 structure | Catalog DNA | Notes |
|-------|--------|------------------|-------------|-------|
| `/about/philosophy` | Editorial chapters | Opener → off-center chapters → manifesto → ruled index → closer | `about-us-09`, `about-us-13` | Canonical; minimal change |
| `/about/founder` | Story-led | Opener → text columns → pull-quote band → credentials ruled index | `about-us-13` | **No** image splits |
| `/about/the-space` | Photo-first | Light opener → gallery dominates → short visit band | `gallery-01` | Less manifesto density |
| `/about/team` | Alternating portraits | Intro → flip L/R `LookbookTeamPortrait` → expand bio | `team-03` | **No** Apply CTA |
| `/about/faq` | Full-width index | Light opener → cream jump band → numbered accordion | `faq-02` | One open at a time |

Copy: `src/data/about-copy.ts`  
Wireframe: [about-direction-ef.md](../../../docs/wireframes/about-direction-ef.md)

### Training (`direction-ef/training/`)

| Route | Recipe | Tier 2 structure | Catalog DNA | Notes |
|-------|--------|------------------|-------------|-------|
| `/training/classes/build` | Class leaf | Opener → photo split → body → week-strip → cue to Burn | editorial + custom | Free Trial → Experience, not Triib |
| `/training/classes/burn` | Class leaf | Alternate canvas/photo + week-strip → Balance | editorial + custom | Mon–Thu as published |
| `/training/classes/balance` | Sparse manifesto | Coming Soon sparse — **no** schedule | manifesto DNA | Draft |
| `/training/personal/1-on-1` | Story-led | Story + Team cue + inquire / Start Here | `about-us-13` | |
| `/training/personal/small-group` | Ruled format index | Ruled format index | about / index | Draft |
| `/training/personal/private-group` | Inquiry band | Inquiry band — **no** prices | `cta-08` (no tier cards) | Draft |

Copy: `src/data/training-copy.ts`  
Wireframe: [training-direction-ef.md](../../../docs/wireframes/training-direction-ef.md)

### Culture (`direction-ef/culture/`)

| Route | Recipe | Tier 2 structure | Catalog DNA | Notes |
|-------|--------|------------------|-------------|-------|
| `/culture/move-the-city` | Photo-first community | Opener → `LookbookPhotoChapter` → story → partners ruled index | `gallery-01` | Live twin: `/our-partners` |
| `/culture/cultivated` | Sparse manifesto | Opener → manifesto → cream quote → principles index | `about-us-13` | Todd draft — no live twin |
| `/culture/archive` | Off Centered Stack | Cream jump → `LookbookOffCenteredStack` (scroll reveal) → authors | Act2 photo-deck DNA | Live blog; external Read links |

Copy: `src/data/culture-copy.ts`

### Future journey pages

Use the same 3-tier system. Pick the closest recipe (story-led, photo-first, ruled index, inquiry) before inventing a sixth clone of Philosophy. Document new recipes when they ship.

---

## Prompt translation (Google Odd Ritual → United Strength)

| Prompt rule | Allow for US? | Translation |
|-------------|---------------|-------------|
| Pure `#000000` / `#FFFFFF` B/W theme | Partial | White + `#F3EEE7` + `#181818`; photo dark sections OK — not pure black brand canvas |
| `tracking-tighter` mega uppercase H1s | Soften | Satoshi bold; club restraint over streetwear shout |
| Micro mono eyebrows | Yes | IBM Plex Mono · wide tracking · `#5C5C5C` |
| Hairline `border-black/10` | Yes | `border-neutral-200/60` or `border-black/10` |
| Absolute / asymmetrical overlays | Yes | 60/40 · `col-span-7` / `5` — never 6/6 cards |
| Infinite marquee ticker | **No** | Not brand chrome for US |
| Shop / product grids + SKUs | **No** | Never on marketing interiors |
| Sharp `rounded-none` buttons | Soften | Prefer forest Apply underline / restrained CTAs; no SaaS pills |
| Framer hover zoom `1.03` on photos | Sparingly | Subtle only; honor `prefers-reduced-motion` |
| Sheet cart / Shop archive | **No** | Out of scope — Triib embeds elsewhere |
| Brutalist header / ticker footer | Adapt | Todd overlay accordion + `SiteIndexFooter` (no ticker) |

---

## Asymmetry rule

- Prefer **60/40** or **7/4–5** editorial splits when images appear.
- Stagger offsets (`translate-y` sparingly) only when it serves photo hierarchy.
- **Never** centered balanced card columns (`grid-cols-2` equal feature cards) as the page spine.
- Team may alternate L/R rows — that *is* intentional asymmetry, not a template clone of Philosophy.

### Off Centered Stack (named beat)

**Component:** `LookbookOffCenteredStack` · **Say:** “use an Off Centered Stack”  
**Always-on rule:** [.cursor/rules/off-centered-stack.mdc](../../rules/off-centered-stack.mdc) — sticky mechanism is **locked**; do not re-invent.

| Trait | Rule |
|-------|------|
| **Mechanism (required)** | Each plate wrapper: `sticky` + shared `top` (~`4.5rem`) + rising `z-index` + scroll runway `paddingBottom` on non-last plates |
| Alignment | Left-biased alternating L/R prints; generous opposite gutter |
| Layering | Later print stacks **on top** of earlier while scrolling; slight rotate; soft depth shadow only |
| Gap | **Forbidden:** `flex gap-*` between plates (that was the spaced-column bug) |
| Chrome | Mono `01 // {indexLabel}` · title · meta · `[ Read ]` · photo cover |
| Motion | Enter fade-up `LOOKBOOK_EASE`; honor `prefers-reduced-motion` |
| Cue | `Scroll` / `↓` (not Swipe / ticker) |
| When to use | Publication / issue series (Culture Archive); photo-led scroll stacks |
| Do not use | Homepage (`Act2LookbookStack` frozen); FAQ indexes; price grids; infinite marquees; horizontal snap as a substitute |

---

## Shell vs page content

| Global / shell (Tier 1) | Page file (Tier 2 + copy) |
|-------------------------|---------------------------|
| Culture Club canvas + type vars | Recipe-specific section stack |
| Overlay accordion (Todd nav) | Beats from Philosophy inventory as needed |
| `LookbookAboutPageShell` | Page-only grids (gallery, week-strip, accordion) |
| `LookbookPageOpener` | Copy modules (`about-copy.ts`, `training-copy.ts`) |
| `SiteIndexFooter` | Route-specific CTAs (Apply forest only where allowed) |

Homepage composition stays in `odd-ritual` — do not edit frozen home under this skill.

---

## Catalog pairing (per recipe)

When using `shadcn-space-catalog` with this skill:

1. Identify page → recipe from matrix above.
2. `searchBlocks` with recipe keywords (e.g. `gallery`, `faq accordion`, `team`, `about split`) — avoid SaaS/crypto/dashboard.
3. Prefer DNA column in matrix; reject anti-fit even if keyword-matched.
4. Adapt into `direction-ef/` — Vite has no shadcn `components/ui` install path unless user overrides.
5. Restyle to Culture Club; strip badges / CDN / Book-now density.

Shared Odd Ritual catalog filter also applies: [odd-ritual/reference.md](../odd-ritual/reference.md) § Catalog filter.

---

## Anti-patterns

- Cloning Philosophy’s full chapter stack onto every interior
- Using `DirectionEPageShell` or snap `LookbookPhotoChapter` on EF About
- Mutating frozen `direction-e/**` or homepage
- Public Buy / Reserve / Book / Triib schedule embeds on marketing Training
- Public pricing tier cards
- Infinite text marquees as section dividers
- Card shadows, purple gradients, rounded-full pill clusters
- Golf / Cape Town / shop SKU chrome

---

## New-page checklist (expanded)

- [ ] Tier 1 chrome: shell + opener + site-index footer
- [ ] Tier 2 matches published recipe (About or Training matrix)
- [ ] Not a Philosophy clone (beat subset only)
- [ ] Tier 3: `LOOKBOOK_EASE` fade-up; stagger body where lists/manifesto
- [ ] Hairline separation; no card containers
- [ ] Culture Club tokens; Satoshi / Instrument Serif / mono
- [ ] Real gym / team media from `src/assets/images/`
- [ ] Copy from approved modules / live sources
- [ ] If catalog used: DNA matches recipe; adapted not invented
- [ ] **Mechanisms high-confidence** — every interactive pattern verified working (accordion, swipe, expand, CTAs, motion + reduced-motion)
- [ ] **Mobile-first media** — 375px first; `object-cover` / correct aspects; no overflow or clipped focal points
- [ ] Mobile 375px; 44px targets; footer usable
- [ ] No Buy / Reserve / Book in marketing chrome
- [ ] EF tree only; homepage untouched
