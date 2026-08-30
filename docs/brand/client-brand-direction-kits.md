# United Strength — brand direction kits (client presentation)

> **Client selection (2026-06-24): Kit D — Editorial Club** — **superseded** by ALD-primary foundation refresh (The Culture Club). See [.cursor/skills/united-strength-brand/SKILL.md](../../.cursor/skills/united-strength-brand/SKILL.md). Kits A–D remain historical previews. Kit D was **v3 Editorial Private Club** — see [versions/v3-editorial-private-club.md](versions/v3-editorial-private-club.md).

**Purpose:** Four comparable **directions** (not final brand guidelines) for Todd / United Strength to review. Each kit ties **colors, typography, logo brief, and website mood** to a preview we have already built or audited.

**Visual presentation:** Run `npm run dev`, then open **[`/brand-kits`](http://localhost:3000/brand-kits)** — white canvas deck with **Cores**, **Tipografia**, reference aesthetics, and phone previews per kit.

**PDF export:** Use **Print → Save as PDF** — **Letter, portrait**, turn **Background graphics** on, disable browser headers/footers. Output is **4 pages** (one kit per page: A–D). Compact preview thumbnails appear at the bottom of each printed page.

**Tagline (all kits):** STRONGER UNITED

**How to use this doc:** Pick one **primary kit**, note any **mix** (e.g. light website + volt accent only on buttons), then complete the checklists at the end.

---

## Quick comparison

| Kit | Name | Mood | Canvas | Accent | Display font | Best if you want… |
|-----|------|------|--------|--------|--------------|-------------------|
| **A** | Heritage | Familiar gym, direct | Dark/neutral | TBD | Anton | Minimal change from today’s site |
| **B** | Industrial Sanctuary | Underground athletic club | Near-black | Electric volt | Barlow Condensed or Anton | Bold, distinctive, night-club energy |
| **C** | Light Performance | Athletic marketing | Off-white | None (B/W) | Barlow Condensed | Maximum clarity, IronX-style energy |
| **D** | Editorial Club | Boutique club, journey | Charcoal | Restrained (stone or soft) | Inter light + optional serif | Premium “club not gym,” Sukha-like calm |

**Layout note:** Full-bleed **editorial photo cards** (class and coach promos) work on **B, C, or D**. Bright **volt labels** are specific to kit **B**.

---

## Kit A — Heritage (current live site)

### Positioning

A refined version of what members already know—community gym in downtown Columbus, coach-led BUILD and BURN, athletic and direct.

### Mood

- Familiar · Community · Direct · Energetic · Approachable · No-nonsense · Columbus-local

### Color palette (proposed — confirm hex)

| Role | Hex | Usage |
|------|-----|--------|
| Canvas | `#1A1A1A` | Page background (inferred from live Squarespace) |
| Surface | `#242424` | Cards, sections |
| Text primary | `#FFFFFF` | Headlines, nav |
| Text muted | `#B3B3B3` | Body, captions |
| Accent | **Client choice** | Options: electric volt `#CCFF00` · rust `#C45C26` · none (white only) |
| Border | `#333333` | Dividers |

*Live site does not publish official brand hex values—we need your approval or brand files.*

### Typography

| Role | Font | Weights | Sample |
|------|------|---------|--------|
| Display / headlines | [Anton](https://fonts.google.com/specimen/Anton) | 400 | `STRONGER UNITED` · `BUILD` |
| Body | [Inter](https://fonts.google.com/specimen/Inter) | 400, 700 | Class descriptions, coach bios |

**Google Fonts bundle:** `family=Anton&family=Inter:wght@400;700`

### Logo direction (brief for designer)

- **Wordmark:** Bold uppercase sans, Anton-adjacent weight; “UNITED STRENGTH” or “UNITED STRENGTH GYM”
- **Icon:** Favicon exists today; optional simple monogram later
- **Lockups:** Light text on dark background (primary); reversed for light merch if needed
- **Deliverable needed:** Vector **SVG** (we only have PNG from current site)

### UI snapshot

- Traditional stacked sections; class promos with photo + text
- Less “app-like” than performance marketing sites
- Hero: video or still from existing site assets

### Best for / tradeoffs

| Pros | Cons |
|------|------|
| Recognizable to current members | Can feel generic without simplification |
| Fonts already in use | Anton is very “gym template” unless paired with restraint |
| Lowest friction rollout | No strong single accent defined today |

### What we need from you (Kit A)

- [ ] Keep **Anton + Inter** or open to new fonts?
- [ ] Choose **one accent color** (or none)
- [ ] Provide **logo SVG** + reversed PNG
- [ ] Confirm **STRONGER UNITED** stays the public tagline

---

## Kit B — Industrial Sanctuary (dark + volt)

### Positioning

Premium underground athletic club—wide layouts, cinematic photography, electric accent used sparingly. References: editorial spacing (Sukha) + high-energy accent discipline (ONE LDN).

### Mood

- Industrial · Cinematic · Bold · Underground · Premium · Focused · High-contrast

### Color palette

| Role | Hex | Usage |
|------|-----|--------|
| Canvas | `#080808` | Page background |
| Surface | `#121212` | Header, panels, cards |
| Text primary | `#FAFAFA` | Headlines, nav |
| Text muted | `#737373` | Secondary copy |
| **Accent (volt)** | `#CCFF00` | Section labels, hover, focus—**not** large fills |
| Border | `#1F1F1F` | Dividers, grid lines |
| Hero overlay | `rgba(0,0,0,0.62)` | Legibility on photos |

*Preview available in development build (see appendix).*

### Typography (recommended for approval)

| Role | Font | Weights | Sample |
|------|------|---------|--------|
| Display / nav | [Barlow Condensed](https://fonts.google.com/specimen/Barlow+Condensed) | 600–800 | `STRONGER UNITED` · `BUILD` |
| Body | [Inter](https://fonts.google.com/specimen/Inter) or [DM Sans](https://fonts.google.com/specimen/DM+Sans) | 400, 500, 700 | Coach bios, membership copy |

**Alternative display:** Anton (closer to live site) with volt accent only on kit B.

### Logo direction (brief for designer)

- **Wordmark:** Condensed, heavy industrial sans; tight tracking
- **Accent device:** Thin volt rule, slash, or underline under “STRENGTH”
- **Icon:** Optional monogram **US** for social avatar
- **Lockups:** Light wordmark on dark heroes (primary); volt used in mark only, not backgrounds

### UI snapshot

- Full-bleed dark heroes (video + still fallback)
- Volt eyebrow labels (e.g. “OUR CLASSES”)
- Editorial overlay cards for BUILD/BURN and coaches
- Slide-out panel navigation; generous section spacing

### Best for / tradeoffs

| Pros | Cons |
|------|------|
| Most distinctive vs other Columbus gyms | Volt can feel “sports brand” if overused |
| Photography pops on dark canvas | Dark-first may need separate light lockup for print/signage |
| Pairs well with NRC-style cards | Requires discipline on accent usage |

### What we need from you (Kit B)

- [ ] **Love or limit** electric volt?
- [ ] Dark-only brand, or also need **light-background** logo for signage/merch?
- [ ] Approve **Barlow Condensed + Inter** (or specify alternatives)
- [ ] Logo SVG + volt usage rules (where accent is allowed)

---

## Kit C — Light Performance Bold (light + monochrome)

### Positioning

Athletic marketing website—high energy on a clean white field. References: IronX gym theme rhythm, Young Bodies / Vetor typographic discipline. Photography and type carry the brand; **no secondary accent color**.

### Mood

- Athletic · Clean · Confident · Modern · High-energy · Readable · Marketing-forward

### Color palette

| Role | Hex | Usage |
|------|-----|--------|
| Canvas | `#FAFAFA` | Page background |
| Surface | `#FFFFFF` | Header, cards |
| Text primary | `#0A0A0A` | Headlines, nav, CTAs |
| Text muted | `#525252` | Body |
| Accent | *None* | Black/white only; energy from photos + bold type |
| Border | `#E5E5E5` | Dividers |
| Hero overlay | `rgba(255,255,255,0.72)` | Light legibility on bright heroes |

*This is the **active preview** in the current development build (see appendix).*

### Typography

| Role | Font | Weights | Sample |
|------|------|---------|--------|
| Display, nav, body | [Barlow Condensed](https://fonts.google.com/specimen/Barlow+Condensed) | 500–800 (headlines 700–800) | `STRONGER UNITED` · `WHY UNITED STRENGTH` |

**Google Fonts bundle:** `family=Barlow+Condensed:wght@500;600;700;800`

### Logo direction (brief for designer)

- **Wordmark:** Bold condensed black sans; uppercase or tight caps
- **Icon:** Optional simple geometric mark (square, slash) for app/social
- **Lockups:** Black on white (default); white reversed on photo heroes only

### UI snapshot

- Light sticky header; bold uppercase navigation
- Homepage: tagline band, feature highlights, stats, class editorial cards, facility steps, coaches teaser
- Editorial overlay cards with **black pill** CTAs (Learn more / View bio)
- IronX-inspired section rhythm without public pricing

### Best for / tradeoffs

| Pros | Cons |
|------|------|
| Excellent mobile readability | Less “boutique club at night” than dark kits |
| Timeless monochrome | May feel less unique without photography |
| Strong for ads, SEO, first-time visitors | Signage/apparel may need separate dark variant |

### What we need from you (Kit C)

- [ ] Confirm **light-first** brand (website + signage) vs website-only
- [ ] Approve **Barlow Condensed** for all roles (SIL OFL — confirm OK for commercial use)
- [ ] Logo SVG (black + white reversed)
- [ ] Hero: **video vs still** preference

---

## Kit D — Editorial Club (Sukha-inspired)

### Positioning

Boutique fitness club—“more than a gym,” journey and community language, minimal chrome, photography-led. Calm, premium, editorial pacing.

### Mood

- Editorial · Calm · Premium · Human · Journey · Spacious · Club-not-gym

### Color palette (proposed)

| Role | Hex | Usage |
|------|-----|--------|
| Canvas | `#0D0D0D` | Page background |
| Surface | `#161616` | Subtle panels |
| Text primary | `#F5F5F0` | Warm off-white headlines |
| Text muted | `#9CA3AF` | Body |
| Accent | `#C4B5A0` *or* volt at ≤20% usage | Section labels, one CTA style only |
| Border | `#262626` | Hairline dividers |
| Hero overlay | `rgba(0,0,0,0.55)` | Cinematic heroes |

*Not fully built as a third theme in code today—direction for discussion.*

### Typography (proposed)

| Role | Font | Weights | Sample |
|------|------|---------|--------|
| Display (optional serif) | [Fraunces](https://fonts.google.com/specimen/Fraunces) or [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) | 400–600 | `Stronger United` (sentence case) |
| Display (sans option) | [Inter](https://fonts.google.com/specimen/Inter) | 300–400 | Light-weight heroes (Sukha parity) |
| Body | [Inter](https://fonts.google.com/specimen/Inter) or [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) | 400, 500 | Long-form copy |

**Recommendation:** Sans-only Inter light heroes if you want lowest friction; add serif only if you want more “lifestyle club.”

### Logo direction (brief for designer)

- **Wordmark:** Refined sans or serif; mixed case or small caps; generous letter-spacing
- **Icon:** None, or very subtle mark
- **Lockups:** **Light logo on dark cinematic heroes** (primary); minimal reversed for print

### UI snapshot

- Maximum whitespace between sections (`py-24`–`py-32`)
- Sparse top nav; full-screen or deep drawer menu
- Full-bleed video heroes; soft weighted motion
- Pillars: Train · Recover · Community (not duplicate class blocks)
- Editorial cards allowed; prefer muted accent over volt

### Best for / tradeoffs

| Pros | Cons |
|------|------|
| Most “premium club” positioning | Less overt hardcore gym energy |
| Differentiates from template gyms | Serif + journey copy may not match your athletic voice |
| Pairs with Sukha / high-end club comps | Requires strongest photography and video |

### What we need from you (Kit D)

- [ ] Tone: **journey / club** vs **athletic / direct** (see discovery questionnaire)
- [ ] Accent: **warm stone** vs **no accent** vs **limited volt**
- [ ] Serif display **yes/no**
- [ ] Hero: **video vs still**

---

## Logo comparison (all kits)

| Kit | Wordmark style | Icon | Primary lockup | Secondary lockup |
|-----|----------------|------|----------------|------------------|
| **A Heritage** | Bold caps, Anton-like | Favicon today | Light on dark | Dark on light (TBD) |
| **B Industrial** | Condensed heavy | Optional “US” monogram | Light on dark + volt detail | Light merch variant |
| **C Light Performance** | Bold condensed black | Optional geometric | Black on white | White on photo |
| **D Editorial** | Refined mixed case / serif option | None or subtle | Light on dark hero | Print/minimal |

---

## Universal deliverables (any kit)

Please provide or approve:

- [ ] **Logo:** SVG (required) + PNG @2x — full color, reversed, and single-color
- [ ] **Favicon** + social profile image (square)
- [ ] **Brand colors:** Official hex codes (or approve proposed tables above)
- [ ] **Fonts:** Confirmation Google Fonts / licensed files are OK for web + print
- [ ] **Tagline:** Confirm **STRONGER UNITED** or replacement
- [ ] **Hero media:** Approve still and/or video; supply 4K masters when available (see [media README](../media/README.md))
- [ ] **Coach headshots:** Brian Penn, Benn Mudzi (not on current site)
- [ ] **Accent rule:** Where color is allowed (buttons only vs labels vs never)

---

## Discovery checklist (brand decisions)

Consolidated from [client-discovery.md](../client-discovery.md). Check when decided:

- [ ] **Primary kit:** A · B · C · D · Mix: _______________
- [ ] **Public brand name:** United Strength · United Strength Gym · Other: _______
- [ ] **Positioning one-liner** approved
- [ ] **Tone:** Spiritual/journey · Athletic/direct · Community-first (current)
- [ ] **Pricing on website:** Hidden (Sukha-style application) · Public tiers
- [ ] **Match Sukha minimal** vs keep current Squarespace feel
- [ ] **Professional photo/video shoot** scheduled? Y / N
- [ ] **Stock imagery** acceptable? Y / N

---

## Appendix — How to preview in the development build

*For United Strength team and developer only.*

1. Run `npm run dev` and open the local site.
2. Use the **bottom-left preview panel** (development only):
   - **Auto / Mobile / Desktop** — viewport width
   - **Light** — Kit **C** (Light Performance Bold)
   - **Dark** — Kit **B** (Industrial Sanctuary)
3. Kit **A** — compare to live [unitedstrengthgym.com](https://www.unitedstrengthgym.com/)
4. Kit **D** — described above; not a separate switcher yet

Technical reference: [versions/README.md](versions/README.md) · [united-strength-aesthetic.md](united-strength-aesthetic.md)

After you choose a kit, we record approved hex, fonts, and logo paths in the living brand kit and remove “preview only” labels.

---

## Presentation tip (facilitator)

Show **two phone screenshots** per direction with the same copy (**STRONGER UNITED**, **BUILD**, **BURN**):

1. Home hero  
2. Classes or team section  

Close with: **“Pick one primary kit + one accent rule.”**  
Example mix: **Kit C** (light site) + **volt only on primary buttons** from Kit B.

---

*Document version: 2026-05-29 · Preview directions only — not client-approved brand standards.*
