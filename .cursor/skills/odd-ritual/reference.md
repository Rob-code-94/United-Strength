# Odd Ritual — reference

## Catalog filter (pair with shadcn-space-catalog)

Use these when searching MCP (`searchBlocks` / `searchPages`) or browsing ArmorATD.

### Preferred search queries

```
portfolio sticky stack
gallery destination mosaic
about split editorial
about interior design metrics
cta image background
faq accordion numbered
team meet portraits
hero cinematic video minimal
services easing chapter
```

Avoid searching primarily with: `saas`, `crypto`, `ai analytics`, `dashboard`, `trial`, `pricing tiers`, `property listings`, `agency badges`.

### Motion / transition queries (Odd Ritual About-style pages)

```
about split editorial
gallery destination mosaic
faq accordion numbered
team meet portraits
portfolio sticky stack
hero cinematic video minimal
```

When adapting catalog blocks, **extract motion timing** from `about-us-13`, `services-03`, `gallery-01` preview pages — not from SaaS heroes with badges.

### Approved DNA (Direction E / EF map)

| US surface | Prefer | Notes |
|------------|--------|-------|
| Act 1 chapters | Custom + easing from `services-03` / `about-us-13` | Full-bleed; next-preview; no badges |
| Pillars | `portfolio-08` | Sticky vertical stack |
| Believe / Founder / Philosophy | `about-us-09`, `about-us-13` | Split editorial + image; sparse stats OK |
| Experience stats | `about-us-13` CountUp DNA | 5 · 14 · $75 only — not KPI walls |
| Space | `gallery-01` | Facility mosaic; minimal copy |
| Membership | `cta-08` | Image statement; dual CTA OK; no tier cards |
| Team | `team-03` | Portraits + expand bio |
| FAQ | `faq-02` | Numbered accordion; one open |
| EF Philosophy / Founder / Space | Layer A lookbook chapters | Custom snap + `LookbookIndex` / `LookbookNextCue` |
| EF Site index footer | `footer-01` / `footer-05` DNA (from F) | Ruled columns; Culture Club tokens |
| Future slow-loop hero | `hero-03`, `hero-14`, `hero-29`–`hero-33` (video bg) | Only if cinematic + minimal; strip search bars / frosted chrome |

Registry names may appear as `about-us-09` or `about-us-section-09` — same DNA family.

### Accept / reject heuristics

**Accept if most true:**
- Photography or video is the dominant plane
- Typography is sparse (one headline, short support)
- Layout reads editorial / chapter / mosaic — not dashboard
- Motion is calm (stack, fade, sticky) — not bounce or ticker spam
- Easy to restyle to white / `#181818` / mono captions / forest Apply only

**Reject if any dominate:**
- Gradient banners, blue/purple SaaS chrome, logo clouds
- Dense KPI / feature grids as the hero
- Product shop grids or price-forward cards
- Always-visible multi-CTA booking chrome
- Crypto / AI / dashboard product UI
- Property listing cards with amenities + price

### Install vs adapt (United Strength Vite)

Default: **adapt** DNA into `src/components/direction-e/` (Tailwind + `motion`).  
Do not CLI-install `@shadcn-space/*` into this app unless the user explicitly asks to change the Vite constraint.

Other projects (Next + shadcn `components/ui`): follow `shadcn-space-catalog` install order, then restyle to Odd Ritual / brand tokens.

---

## Odd Ritual site DNA (observed)

Source: [oddritualgolf.com](https://oddritualgolf.com) — structure & tone only. Translate to United Strength; never ship golf shop or Cape Town copy.

### Lookbook & type system (source analysis)

#### 1. Layout Format & Grid System

The site uses a highly structured, sequential editorial grid layout that mimics a physical lookbook or premium sports magazine.

- **Numbered Sections:** The layout is compartmentalized into distinct storytelling nodes labeled sequentially (e.g., `## 01 Explore our First Collection`, `## 02 About us`, `## 03 Community`). This anchors the user's journey.
- **Horizontal & Interactive Navigation:** Elements like "Scroll", "Next", and "Swipe" imply a horizontal storytelling flow across the viewport rather than a simple vertical scroll.
- **Symmetrical E-Commerce Cards:** Products are displayed clean and repetitive, explicitly showing item details alongside technical SKUs (e.g., The Caddie Jacket [Navy] (OR_CAD_N)) to maintain a neat ledger-like consistency.

**US translation:** Keep numbered storytelling nodes + Scroll/Next/Swipe chapter cues. Do **not** build apparel/SKU card grids — if a ledger rhythm is needed, use sparse membership/experience rows (not product commerce).

#### 2. Typographic Hierarchy

The typography acts as a key visual anchor. It emphasizes a mix of raw brutalism and clean corporate framing:

- **Display Headers (Brutalist Elements):** Heavy use of raw indices and large headers (e.g., `## 01`, `## 02`) serve as structural signposts.
- **Stylized Brackets:** Editorial metadata is enclosed in parentheses and brackets—like `( Featured Products )` or `[Burgundy]`—adding a contemporary streetwear aesthetic to ordinary labels.
- **Subdued Metadata:** Long block paragraphs (such as the brand's manifesto) rely on highly readable, standard clean sans-serif typefaces to balance the loud header numerals.

**US translation:** Mono/brutalist `01` indices + Satoshi / Instrument Serif hierarchy; body stays quiet and readable. Use `( )` / `[ ]` sparingly for editorial labels — never as SKU/color commerce chrome.

#### 3. Spacing & Rhythm

- **High Negative Space:** Large conceptual descriptions are separated neatly from product grids, preventing the shop from feeling overcrowded.
- **Clean Structural Breaks:** The transition into the lower section shifts to a distinct "Site Index" structure, using strict horizontal dividers to neatly separate links, legal text, and contact information.

**US translation:** Separate manifesto / chapter prose from any denser Act 2 bands with generous whitespace. Footer = site-index energy (dividers · address · segmented emails · legal · social).

#### 4. Emotional Tone & Aesthetic Vibe

The overarching tone can be described as "Contemporary Heritage" or "Elevated Neo-Country Club."

What Creates This Tone:

- **The Narrative Overlaps:** Blending the stiff, traditional history of golf imagery ("fairways", "caddie jackets") with modern, community-driven language ("Join the fam", "Everyday Athletes").
- **The "Local Premium" Edge:** Rooting the visual vibe in South African culture ("Cape Town, South Africa", "Made for us. By us.") shifts the tone from a sterile global brand to an authentic, artfully crafted lifestyle movement.
- **Understated Sophistication:** The language used is confident but casual ("Come on, treat yourself. You deserve it"), avoiding desperate sales jargon to ensure a high-end, premium feel.

**US translation:** Contemporary heritage / elevated neo–private club. Overlap strength tradition with culture & community (pillars, belonging) — not golf. Local premium = Columbus, OH · Cleveland Ave · “Made for us” energy without SA copy. Confident casual voice; never sales desperation or gym hype.

### Compact checklist (structure)

1. **Chaptered homepage** — Sequential `01` / `02` / `03` full-screen moments before deeper content.
2. **Next affordance** — Explicit `Scroll` / `Next` / `Swipe` so progress feels guided.
3. **Brand manifesto early** — Short heritage/culture prose; commerce-like density later only if needed (US: membership belonging, not apparel).
4. **Photo-first emotion** — Lifestyle / place imagery carries tone; UI chrome is thin.
5. **Community story bands** — Expandable culture sections (US: pillars, believe, team — not golf partners).
6. **Local identity** — Place as signal (Columbus / Cleveland Ave — never Cape Town).
7. **Lookbook spacing** — High negative space; site-index footer with horizontal rules.

7. **Lookbook spacing** — High negative space; site-index footer with horizontal rules.

---

## Transitions & separation (engineering breakdown)

Source: Odd Ritual structural analysis ([oddritualgolf.com/pages/about](https://oddritualgolf.com/pages/about)). United Strength uses `motion/react` (not legacy `framer-motion` import path).

### 1. Section-to-section animation transitions

Odd Ritual bypasses standard, aggressive tech-SaaS slide animations in favor of a subtle, high-end editorial rhythm.

**The reused transitions:**

- **Content fade-up:** As sections hit the viewport, block containers use a slight vertical translate combined with an opacity transition (`y: [20, 0]`, `opacity: [0, 1]`). This mimics turning a high-quality physical magazine page.
- **Staggered typography revelations:** Within each chapter (like the brand manifesto), headers load instantly while body copy features a delayed, staggered entry.
- **Horizontal image swiping:** For editorial collections, images use smooth horizontal slide or carousel transitions governed by touch or button clicks (`x` layout offsets).

**US standard ease** (shipped in EF):

```ts
export const LOOKBOOK_EASE = [0.21, 0.47, 0.32, 0.98] as const;
// duration 0.6–0.8 · viewport once · honor useReducedMotion
```

Odd Ritual reference cubic-bezier (if matching source literally): `[0.215, 0.610, 0.355, 1.000]`. Prefer `LOOKBOOK_EASE` for Culture Club consistency.

**Editorial section wrapper** — adapt into `direction-ef/lookbook/` or per-page sections:

```tsx
import { motion, useReducedMotion } from "motion/react";
import { LOOKBOOK_EASE } from "../lookbook";

export function EditorialSectionWrapper({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: LOOKBOOK_EASE }}
      className="w-full min-h-[100cqh] shrink-0 snap-start px-6 py-14 flex flex-col justify-between"
    >
      {children}
    </motion.section>
  );
}
```

**Stagger body copy:**

```tsx
{paragraphs.map((p, i) => (
  <motion.p
    key={p.slice(0, 32)}
    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: i * 0.08, ease: LOOKBOOK_EASE }}
  >
    {p}
  </motion.p>
))}
```

**Replicating in Shadcn Space Pro:** Combine catalog block layout with `motion` wrappers. Search `about-us-09`, `about-us-13`, `gallery-01`, `services-03` for layout DNA; wrap exported sections with the fade-up pattern above. Do **not** install SaaS motion presets (bounce, spring, slide-from-100%).

### 2. How sections are separated (separation aesthetic)

The "Contemporary Heritage" style achieves visual division through grid isolation and clean lineation, completely avoiding colored backgrounds or bulky decorative card containers.

**The architectural separation system:**

- **Strict hairline dividers:** Sections are separated by ultra-thin, low-contrast horizontal lines (`border-t border-neutral-200` or `border-zinc-200/50`). They resemble blueprint guidelines or a newspaper index grid.
- **Oversized section indexing:** Rather than naming a section "Our Vision", the page explicitly uses bold, numerical anchors like `01`, `02`, and `03`. These numbers act as hard visual dividers (`LookbookIndex`).
- **Massive asymmetrical negative space:** Generous vertical padding (`py-14` mobile, `py-24`+ desktop) ensures that one conceptual idea finishes entirely before the eye meets the next, allowing sections to separate themselves cleanly via empty canvas space.

**US hairline map:**

| Location | Class |
|----------|-------|
| `LookbookNextCue` top rule | `border-t border-white/20` (dark) · `border-black/10` (light) |
| Act 2 section entry | `border-t border-neutral-100` |
| Philosophy list rows | `border-t border-neutral-200 last:border-b` |
| Site index footer columns | `border-t border-neutral-200 pt-4` |

**Never for separation:** card shadows, `rounded-2xl` section shells, gradient band backgrounds, alternating loud color blocks.

### 3. Shell vs page content (layout architecture)

To ensure maintainability, separate universal framing boundaries from page-specific content grids.

**What goes in global shell (layout / App framing):**

- Culture Club canvas + typography vars on body (`#FFFFFF`, `#181818`, `#5C5C5C`, `#F3EEE7`)
- Minimalist sticky header + full-viewport overlay accordion (Todd nav — no Buy/Reserve)
- Site index footer (`SiteIndexFooter`) — publication-style multi-column index with hairlines

**What goes in page files (home / about routes):**

- **Home (`ConceptEFView`):** Sequential chapters `01`–`04` narrative + Layer B depth sections
- **About Philosophy / Founder / Space:** Split-column manifesto grids + snap lookbook chapters
- **About Team / FAQ:** Shell chrome + `team-03` / `faq-02` DNA — not full snap spine

**Optional frame component:** Wrap EF About subpages with a shared hairline + padding wrapper if sections repeat — keep in `direction-ef/lookbook/`, not global layout.

---

## Implementation map (repo)

| Piece | E (frozen) | EF (lookbook merge) |
|-------|------------|---------------------|
| Homepage composer | `ConceptEView.tsx` | `ConceptEFView.tsx` |
| Chapters | `direction-e/ChapterIntro.tsx` | `direction-ef/ChapterIntro.tsx` |
| Lookbook primitives | — | `direction-ef/lookbook/*` |
| About interiors | `direction-e/about/*` | `direction-ef/about/*` |
| Site index footer | — | `direction-ef/SiteIndexFooter.tsx` |
| About copy | — | `src/data/about-copy.ts` |
| Page shell | `direction-e/DirectionEPageShell.tsx` | `direction-ef/DirectionEPageShell.tsx` |
| Gym media | `src/assets/images/gym` (`gymPhotos`) | same |
| Motion ease | `[0.21, 0.47, 0.32, 0.98]` | `LOOKBOOK_EASE` in `lookbook/constants.ts` |

### Act 1 chapter contract (`ChapterIntro`)

- `min-h-[100cqh]`, snap-start
- Full-bleed `object-cover` image
- Soft bottom gradient for type legibility (not stickers/badges)
- Mono number ~48px · `// Title` · optional short lede
- Optional `next: { n, title }` preview row

### Shell contract (`DirectionEPageShell`)

- Sticky: back · `NN // SECTION` · page title
- Light canvas default; Space may go dark photo
- Footer address strip
- Normal scroll (no snap) unless page opts in

---

## Wireframes

- [home-direction-e.md](../../../docs/wireframes/home-direction-e.md) — frozen E baseline
- [home-direction-ef.md](../../../docs/wireframes/home-direction-ef.md) — EF lookbook merge
- [about-direction-e.md](../../../docs/wireframes/about-direction-e.md) — frozen E About
- [about-direction-ef.md](../../../docs/wireframes/about-direction-ef.md) — EF lookbook About
- Locked IA (hidden in UI): [home-direction-d.md](../../../docs/wireframes/home-direction-d.md)
