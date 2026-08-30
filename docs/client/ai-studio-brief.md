# United Strength Club — Google AI Studio brief

**Purpose:** Active **Culture Club frontend prototype** for United Strength Club — explore nav, hero, overlay, and homepage UX in Google AI Studio Build, then port approved patterns into this repo via Cursor.

**Status:** Todd-approved nav (Jul 2026) · Culture Club aesthetic · Beta exploration

---

## Active app + preview + code

| Surface | URL | Role |
|---------|-----|------|
| **AI Studio app** | https://aistudio.google.com/apps/f0b0ce5b-993b-4c03-9e60-d6063c477bd2 | Edit prompts, iterate UI in Build |
| **Live preview** | https://ais-pre-fewk45ctma7odjkgzbjqcl-20545025737.us-east1.run.app | Mobile preview / stakeholder share (375px) |
| **Studio code (GitHub)** | https://github.com/Rob-code-94/US-google-Studio | **Google AI Studio edits only** — source files synced from Build |
| **Studio local (active foundation)** | `/Users/cherobinson/Devolpment Apps /US-google-Studio` | **Cloned Aug 2026** — Vite + React; run with `npm run dev` → `http://localhost:5173`. Active frontend foundation going forward. |
| **Production repo** | This workspace (`United Strength`) | Next.js app — port approved patterns into `src/` when graduating beyond Studio |

Full bridge workflow: [docs/toolkit/ai-studio-cursor-bridge.md](../toolkit/ai-studio-cursor-bridge.md)

---

## AI Studio ↔ Cursor bridge

1. **Explore** — iterate in AI Studio; review at Cloud Run preview (375px)
2. **Decide** — lock nav, hero, overlay, and motion in Cursor chat against Todd rules + brand kit
3. **Sync code** — push/pull [Rob-code-94/US-google-Studio](https://github.com/Rob-code-94/US-google-Studio) (AI Studio output only)
4. **Port** — Cursor reimplements in `src/` using `website-frontend-build`, [brand-tokens.mdc](../../.cursor/rules/brand-tokens.mdc), and [beta backlog](../../.cursor/skills/united-strength-brand/SKILL.md) — never paste raw AI Studio HTML as production code
5. **Validate** — compare Cloud Run preview vs `localhost:3000` at 375px

---

## What to upload (click **+** in AI Studio)

Attach **2–4 files** before sending the prompt:

| File | Path in repo |
|------|----------------|
| Moodboard (palette, type, voice) | [`moodboard.html`](../../moodboard.html) — or screenshot/PDF export |
| Logo — black monogram | [`public/brand/logo-monogram-black.png`](../../public/brand/logo-monogram-black.png) |
| Logo — stealth watermark | [`public/brand/logo-monogram-stealth.png`](../../public/brand/logo-monogram-stealth.png) |
| Client direction + inspo URLs | [`docs/client/client-direction-brief-2026-06-24.md`](client-direction-brief-2026-06-24.md) |
| ALD nav screenshot | Todd meeting screenshots (overlay menu + crest header) |

Optional: [`docs/brand-foundation-notion-export.md`](../brand-foundation-notion-export.md)

In the prompt, say: **“Use attached moodboard, logos, and ALD screenshot for navigation.”**

---

## Master prompt (copy everything below the line)

---

Build **THREE different mobile homepage concepts** (375px wide) for **UNITED STRENGTH CLUB** — a private fitness and wellness club in downtown Columbus, OH.

**Scope:** Homepage ONLY. Not a full multi-page site. Each concept = one HTML/CSS mock **or** a clear visual spec I can compare. Use attached brand files if provided.

Every nav and footer item must be a real clickable link: `<a href="...">` with the paths below.

### Brand

| Item | Value |
|------|-------|
| Name | **UNITED STRENGTH CLUB** |
| Tagline | STRONGER UNITED |
| Address | 237 Cleveland Ave, Columbus, Ohio 43215 |
| Email | info@unitedstrengthgym.com |
| Instagram | https://www.instagram.com/united_strength/ |
| Voice | Private club, not gym. Selective membership — apply first, team reviews. No public pricing. |

### Public site map — use these hrefs

**Overlay menu (flat left-aligned list — no Buy/Reserve/Member):**

| Label | href |
|-------|------|
| New here | `/new-here` |
| Memberships | `/memberships` |
| Offerings (hub) | `/offerings` |
| About | `/#about` |
| Team | `/team` |
| Contact | `/contact` |
| BUILD | `/offerings/build` |
| BURN | `/offerings/burn` |
| Personal Training | `/offerings/private-training` |
| Open Gym | `/offerings/open-gym` |

**Homepage CTAs:**

| Label | href |
|-------|------|
| Apply for Membership | `/memberships` |
| Start the Journey (optional text link) | `/new-here` |

**Footer only (not in main overlay):**

| Label | href |
|-------|------|
| FAQ | `/faq` |
| Terms | `/terms` |
| Privacy | `/privacy` |
| Instagram | https://www.instagram.com/united_strength/ |
| Email | mailto:info@unitedstrengthgym.com |

**Do NOT link anywhere on public marketing homepage or overlay:**

- `/buy` · `/schedule` · `/account`
- https://unitedstrength.studio.xplor.co/ (Triib — member-internal)
- No “Book a class”, “Buy credits”, “Member login”, pricing tables, class schedules

### Navigation — exact (ALD-inspired, non-negotiable)

1. **Hamburger on LEFT**
2. **Header center — crest transition:** scroll **up** → full wordmark **UNITED STRENGTH CLUB**; scroll **down** → monogram only
3. **Top bar** below header when scrolled: `Columbus, OH | {Weekday}, {Month} {Day}, {Year}` (e.g. `Columbus, OH | Wednesday, July 01, 2026`)
4. **Menu open:** full-viewport **dark overlay** (not a right-side drawer)
5. **Overlay links:** left-aligned, white uppercase, generous spacing
6. **Watermark:** large US monogram centered behind menu at ~5–8% opacity (use stealth logo if attached)
7. **Overlay structure:** single flat list (no SHOP/EXPLORE tabs unless noted)

### Visual system — The Culture Club

| Token | Hex | Usage |
|-------|-----|-------|
| Canvas | `#FFFFFF` | Page background |
| Alabaster | `#F3EEE7` | Alternate bands |
| Type | `#181818` | Headlines, body |
| Muted | `#5C5C5C` | Secondary text |
| Membership accent | `#0A3C2E` | **Apply for Membership** button only |
| Overlay bg | `#181818` or dark charcoal | Full-screen menu |

**Typography:**

- UI / wordmark: bold tracked sans (Satoshi-like) — tight letter-spacing on hero
- Editorial: Instrument Serif — one manifesto line max
- Labels: IBM Plex Mono — 10px uppercase eyebrows

**Photography:** Culture-first, cinematic, natural light — not stock gym high-fives or fluorescent lighting.

**Homepage length:** Short and reserved — **3 blocks max:**

1. Hero — full-bleed image/video still; lockup **STRONGER / UNITED.**; place line **Columbus, OH**; scroll cue; **no buttons on hero**
2. Apply band — short club copy + one green **Apply for Membership** → `/memberships`
3. Minimal footer — address, email, Instagram

**Pillars (copy reference):** Train · Recover · Community

**Voice — use:** Apply for Membership · Start the Journey · The Practice · The Space  
**Voice — avoid:** Join Our Gym · Sign Up Now · Shop classes · Get Started Free

### Inspiration (mood only — do not clone layouts wholesale)

**Tier 1 north star:**

- https://www.aimeleondore.com
- https://www.buckmason.com
- https://www.sohohouse.com
- https://www.aman.com
- https://www.neuehouse.com
- https://www.kinfolk.com
- https://www.sukhaclub.com
- https://oddritualgolf.com — **Direction D primary mood** (numbered chapter scroll, next-section preview, vintage/heritage editorial; do not clone golf/shop grids)

**Tier 2 membership flow:**

- https://www.thened.com
- https://www.zerobond.com
- https://www.thebatterysf.com

**What we're replacing (avoid this gym tone):**

- https://www.unitedstrengthgym.com

### Homepage directions to deliver

| ID | Name | Description |
|----|------|-------------|
| **A** | Editorial cover | ALD/Kinfolk issue-cover hero; maximum whitespace; calm top third |
| **B** | Hospitality pause | Aman alabaster `#F3EEE7` band + Instrument Serif manifesto line |
| **C** | Gallery wall | Cereal/Nowness asymmetric full-bleed facility image; minimal overlay copy |
| **D** | Ritual progression | **Active (Todd Aug 2026)** — Odd Ritual–inspired two-act homepage: 4 full-screen intro chapters + 6 content sections; locked IA nav. See [locked IA prompt](#direction-d--locked-ia-prompt-todd-aug-2026) · [todd-homepage-direction-aug-2026.md](todd-homepage-direction-aug-2026.md) · [home-direction-d.md](../wireframes/home-direction-d.md) |
| **E** | Odd Ritual catalog preview | **Preview only** — same two-act IA as D; composed from shadcn-space marketing block DNA (`services-03`, `gallery-01`, `cta-08`, `about-us-13` stats). See [home-direction-e.md](../wireframes/home-direction-e.md). Does not replace D. |

### Anti-patterns

- Purple gradients, Inter/Roboto defaults, drop shadows on cards
- Public tier pricing cards (Ethos-style)
- Class countdown timers, “Book now” banners, busy multi-row nav
- Right-slide light drawer menu (must be dark full-viewport overlay)

---

## Direction D — locked IA prompt (Todd Aug 2026)

Primary Studio build. Architecture locked; copy still TBD (placeholders OK).

```
LOCKED CLIENT ARCHITECTURE — United Strength Club (Todd Johnson, Aug 2026)
DIRECTION D — Ritual Progression (Odd Ritual–inspired)

Rebuild the mobile-first site (375px) as Direction D. Do not invent alternate nav labels. Content/copy for each section is still coming from the client — use restrained placeholder copy in the private-club voice (not gym marketing). Structure and labels below are non-negotiable.

VISUAL REFERENCE (mood only — do not clone wholesale):
https://oddritualgolf.com
Borrow: culture-first brand feel, numbered scroll chapters (01 / 02 / 03…), next-section preview (↓ + next title), vintage/heritage editorial mood, heritage + community storytelling, restrained type, slow cinematic video loops, generous whitespace, progression as you scroll. Do NOT copy golf/apparel product grids or Cape Town specifics.

═══════════════════════════════════════
MAIN NAVIGATION (overlay menu — locked)
═══════════════════════════════════════

ABOUT
- Philosophy → /about/philosophy
- Founder Story → /about/founder
- Meet the Team → /about/team
- The Space → /about/the-space
- FAQ → /about/faq

TRAINING
- Classes
  - BUILD → /training/classes/build
  - BURN → /training/classes/burn
  - BALANCE (Coming Soon) → /training/classes/balance  [label must show Coming Soon; not bookable]
- Personal Training
  - 1-on-1 Coaching → /training/personal/1-on-1
  - Small Group Training → /training/personal/small-group
  - Private Group Training → /training/personal/private-group

FOUNDATION → /foundation  (direct page)

LONGEVITY
- Reflection → /longevity/reflection
- The Strength Standard → /longevity/strength-standard
- The Trials → /longevity/the-trials

CULTURE
- Move the City → /culture/move-the-city
- Cultivated → /culture/cultivated
- Archive → /culture/archive

MEMBERSHIP → /membership  (direct page)

SHOP → external link to United Limited (label: Shop / United Limited). Do not build an in-site shop.

START HERE
- Experience United → /start-here/experience
- Apply for Membership → /start-here/apply

Overlay rules (still apply):
- Hamburger LEFT
- Full-viewport DARK overlay, left-aligned links
- Stealth US monogram watermark ~5–8% opacity
- NO Buy / Reserve / Member login / Book a class / public pricing in marketing nav
- Crest: scroll up = UNITED STRENGTH CLUB wordmark (tight Satoshi tracking); scroll down = monogram

═══════════════════════════════════════
HOMEPAGE FLOW (locked — two acts) — Direction D
═══════════════════════════════════════

The homepage must feel like an EDITORIAL PUBLICATION — a progression / reveal. United slowly reveals itself. Visitors explore the brand one idea at a time, not a dense gym landing page.

Full spec: docs/client/todd-homepage-direction-aug-2026.md · docs/wireframes/home-direction-d.md

── ACT 1 — Editorial intro chapters (full viewport each; teasers only) ──

Each chapter: full-screen photo OR slow cinematic video loop · large chapter number · minimal copy · next-section preview (Odd Ritual pattern: ↓ + next number/title). No CTAs in Act 1.

01 // United Strength Club        → previews 02 What We Believe
02 // What We Believe             → previews 03 The Four Pillars
03 // The Four Pillars            → previews 04 Experience United
04 // Experience United           → transitions to Act 2

── ACT 2 — Content sections (full layouts) ──

1. What We Believe
   - Large editorial headline · short paragraph · one strong image
   - Plenty of negative space · minimal CTA
   - Focus: why United exists — not everything we offer

2. The Four Pillars (editorial feature panels — NOT list cards)
   - Order: Foundation · Reflection · Longevity · Move the City
   - Each panel: icon · title · one short sentence · subtle explore interaction
   - Pillars are brand ideas — do not mirror nav structure

3. Experience United (first functional section)
   - Stat row: 5 Classes · 14 Days · $75
   - Short explanation · elevated/intentional (not promotional)
   - Primary CTA: Start Here → /start-here/experience

4. The Space
   - Photography-led: architecture, natural light, equipment, details, materials, members, moments
   - Minimal copy · feeling of being inside United

5. Membership
   - Large statement · short paragraph · button → /membership
   - Belonging and community — NO public pricing

6. Start Here
   - Two clear paths: Experience United + Apply for Membership
   - Primary CTA → /start-here/apply · Secondary → /start-here/experience

═══════════════════════════════════════
BRAND / ANTI-PATTERNS
═══════════════════════════════════════

- Private club, not gym. Columbus, OH. STRONGER UNITED.
- Culture Club tokens: canvas #FFFFFF, type #181818, alabaster #F3EEE7, membership green #0A3C2E on Apply only
- Avoid: purple gradients, Inter defaults, gym “Book now” chrome, Ethos-style pricing cards, right-slide drawers

Deliver: Direction D mobile homepage (375px) with full overlay menu wired to the hrefs above, then the two-act homepage (4 intro chapters + 6 content sections) with Odd Ritual next-preview UI. Placeholder copy OK. Match Odd Ritual’s cultural restraint + vintage editorial feel + ALD cover-hero energy.
```

Notion record: [Locked IA + Homepage (Todd Aug 2026)](https://app.notion.com/p/3b2275066c17813eb1a9c4f8c8aa4bbc)

Client direction (repo): [todd-homepage-direction-aug-2026.md](todd-homepage-direction-aug-2026.md)

---

## Follow-up prompts

### After you pick A, B, C, or D

```
Build one mobile-first homepage (375px) using Direction [A|B|C|D] from our last conversation.

If Direction D: use the LOCKED Todd Aug 2026 nav + two-act homepage (4 intro chapters + 6 content sections). Overlay must include all locked hrefs. Shop = external United Limited only.

Single HTML file, inline CSS. Include:
- Sticky header: hamburger left, crest wordmark/monogram on scroll
- Top bar: Columbus, OH + today's date
- Dark overlay menu (show open state) with ALL public hrefs from the locked site map
- Stealth monogram watermark in overlay
- No /buy, /schedule, /account links in marketing chrome

Match attached moodboard. Private club voice only.
```

### Overlay menu only

```
Mobile UI: UNITED STRENGTH CLUB menu overlay only — full viewport dark bg, left-aligned links with these hrefs:

/new-here · /memberships · /offerings · /offerings/build · /offerings/burn · /offerings/private-training · /offerings/open-gym · /team · /contact · /#about

Stealth monogram watermark 6% opacity. Close X top-left. No Buy, Reserve, Login, pricing.
ALD mobile menu style. One HTML/CSS artifact.
```

### If output is too “gym”

```
This reads like a fitness app. Re-do as a private club that happens to center strength and wellness. Remove schedules, pricing, and join-now language. Keep nav and hrefs exactly as specified.
```

---

## Repo references (for your team — not for Gemini)

| Doc | Purpose |
|-----|---------|
| [united-strength-brand/SKILL.md](../../.cursor/skills/united-strength-brand/SKILL.md) | Todd nav § + beta code backlog |
| [united-strength-aesthetic.md](../brand/united-strength-aesthetic.md) | Changelog 2026-07-01 |
| [information-architecture.md](../information-architecture.md) | Marketing nav spec |
| [todd-nav-preferences.mdc](../../.cursor/rules/todd-nav-preferences.mdc) | Cursor guardrails |

**Beta code not yet built:** SiteHeader crest transition, ALD overlay, TopBar, trimmed `mainNav` in `src/data/site.ts`.
