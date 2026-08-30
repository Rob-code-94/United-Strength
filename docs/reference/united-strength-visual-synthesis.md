# United Strength — Visual Synthesis

**Status:** Approved direction synthesis (2026-06-24)  
**Sources:** 31 client URLs — master extract in [`.firecrawl/united-strength-inspiration/extraction-summary.md`](../../.firecrawl/united-strength-inspiration/extraction-summary.md)  
**Canvas:** [`canvases/united-strength-inspiration-research.canvas.tsx`](../../canvases/united-strength-inspiration-research.canvas.tsx)  
**Wireframe:** [`docs/wireframes/home-direction-d.md`](../wireframes/home-direction-d.md) (active — Todd Aug 2026). Legacy: [`home-v5-editorial.md`](../wireframes/home-v5-editorial.md).

---

## North star

Luxury hospitality + private club + editorial culture — **not a traditional gym website**. Culture before commerce. Application before transaction. One idea per scroll band.

**Culture Club mix:** ~55% ALD · ~25% Soho/Sukha · ~15% Aman · ~5% Switchyards simplicity

---

## Foundation sites (client-selected)

### Soho House

| Borrow | US application |
|--------|----------------|
| Full-bleed cinematic hero + manifesto line | Block 1 video when ready; membership manifesto copy |
| Cream warmth `#FFFEF7` / alabaster bands | v5 `--color-bg-secondary` `#F3EEE7` on membership bands |
| Move · Recover · Unwind ecosystem | Train · Recover · Community pillars |
| Repeated Apply for membership | Block 6 + `/memberships` |
| Houses carousel as culture proof | Future facility carousel — not class schedule |

**Avoid:** Public pricing calculators; multi-banner nav density.

### NeueHouse

| Borrow | US application |
|--------|----------------|
| Sparse structural chrome; dark ground on hero only | `SiteHeader` dark scrim over `#brand-intro` |
| Centered welcome line on full-bleed interior | `BrandIntroBlock` wordmark + Columbus place line |
| Instrument Serif membership headlines | `CtaBand`, `/memberships` manifesto |
| Creative-community manifesto before apply | `/new-here`, `/memberships` copy rhythm |
| Member Login as utility | `/account` embed — separate from Apply |

**Avoid:** All-black global canvas — US stays alabaster white between bands.

### Kinfolk

| Borrow | US application |
|--------|----------------|
| Cover-hero: centered type, hamburger-only, no filled CTAs | Block 1 |
| Bone white + sage/alabaster section breaks | Band alternation across homepage |
| Serif deck at 400 weight — scale not bold | `ManifestoBand` Instrument Serif |
| Full-bleed photo between prose bands | Block 2 inset image |
| Invisible UI — chrome under ~10% viewport | Intro nav mode |

**Avoid:** Magazine shop/cart; Buy | Read commerce on hero.

### Nowness

| Borrow | US application |
|--------|----------------|
| Generous dead space — one premiere per viewport | Block 4 gallery; increased `py-24 lg:py-32` on prose bands |
| Full-bleed cinematic still; headline anchored low | `GalleryIndexBlock` — vast calm above copy |
| Category rail taxonomy | `EcosystemGallery` + offerings hub |
| Modular block rhythm | Seven-block scroll snap homepage |

**Avoid:** Video-feed density; queue UI; gold overlay typography.

---

## Combined recipe by homepage block

> **Updated Aug 2026:** Active homepage follows **Direction D two-act structure**. See [home-direction-d.md](../wireframes/home-direction-d.md) and [todd-homepage-direction-aug-2026.md](../client/todd-homepage-direction-aug-2026.md). Legacy v5 block map below is archived reference.

| Act | Section | Pattern | Primary sources |
|-----|---------|---------|-----------------|
| 1 | Intro 01–04 | `chapter-preview` | Odd Ritual + Kinfolk + Nowness |
| 2 | What We Believe | `manifesto-band` | Kinfolk + Monocle + Aman |
| 2 | Four Pillars | `editorial-panels` | Monocle broadsheet |
| 2 | Experience United | `stat-feature` | Sukha journey + NeueHouse restraint |
| 2 | The Space | `gallery-index` | Cereal + Nowness |
| 2 | Membership | `membership-band` | Soho + Sukha |
| 2 | Start Here | `journey-band` | Kinfolk |

### Legacy v5 block map (archived)

| Block | Pattern | Primary sources | Rule |
|-------|---------|-----------------|------|
| 1 | `cover-hero` | Kinfolk + NeueHouse + ALD + Nowness | Wordmark + place line + scroll cue; calm top third; no CTAs |
| 2 | `manifesto-band` | Kinfolk + Monocle + Aman | Eyebrow + hairline + Instrument Serif deck + prose |
| 3 | `broadsheet-grid` | Monocle | Three separate bordered cells; educate not sell |
| 4 | `gallery-index` | Cereal + Nowness | Full-bleed still; headline low; dead space above |
| 5 | `gallery-index` + `category-rail` | Wallpaper + Nowness | Asymmetric tiles + offering taxonomy |
| 6 | membership-band | Soho + Sukha | Single green apply accent; cream/alabaster band |
| 7 | `journey-band` | Kinfolk | Quiet close; text-link secondary CTAs |

---

## Photography direction

### Interim placeholders (until client shoot)

- Warm neutrals, architectural interiors, soft natural light
- Silhouettes or distant figures — never equipment-brand-forward
- Calm negative space in top third (header zone)
- Hospitality/club mood over gym marketing

### Client assets (launch)

- Replace all files in `public/media/placeholders/` with United Strength photography
- Set `NEXT_PUBLIC_PLACEHOLDER_MEDIA=false`
- See [`docs/media/placeholders.md`](../media/placeholders.md)

### Never stock

- Named coach headshots (`media.team.*`) — client property only

---

## Typography stack (v5)

| Role | Font | Usage |
|------|------|-------|
| Wordmark / UI | Satoshi Bold | Nav, pillar titles, buttons |
| Editorial deck | Instrument Serif | Manifesto headlines, membership bands |
| Eyebrows | IBM Plex Mono | Section labels + hairline rules |
| Body | Satoshi / system sans | 16px minimum on mobile |

---

## Color discipline

| Token | Value | Source |
|-------|-------|--------|
| Canvas | `#FFFFFF` | Kinfolk bone white |
| Alabaster pause | `#F3EEE7` | Aman / Soho warmth |
| Ink | `#181818` | ALD / NeueHouse structure |
| Membership accent | `#0A3C2E` | Soho apply CTA — apply buttons only |
| Editorial accent (sparing) | `#D43F21` | ALD editorial links only |
| Hairline | `#D9D9D9` | Monocle rules |

---

## Anti-patterns

- Ethos-style amenity density and promo banners
- Public monthly tier pricing without client sign-off
- Equipment-forward hero photography (Rogue branding, bench promos)
- Light cream header scrim over dark gym photo (muddy bleed)
- Heavy outer border wrapping multi-column grids (use separate cells)
- Sign up / Join now language — use Apply · Start the Journey · Enquire

---

## Related

- [inspiration-index.md](inspiration-index.md) — full 31-site table
- [united-strength-aesthetic.md](../brand/united-strength-aesthetic.md) — living brand kit
- [placeholders.md](../media/placeholders.md) — interim media attribution
