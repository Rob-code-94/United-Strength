# Fix backlog — United Strength

Per-repo parked fixes + **final delivery checklist**. Source of truth for Todd handoff tracking.
Do not put secrets here. Check off with `- [x]` when done.

**Date key:** · MM/DD/YYYY

---

## Sprint — handoff Sep 8, 2026

**Target:** Nick / Todd plug-and-play handoff by **Monday, Sep 8, 2026**.

| Wave | Due | Scope |
|------|-----|--------|
| **Handoff sprint** | **Sep 8** | Fonts + colors · Privacy/Terms URLs · staging embeds · Todd SMS + 2nd-font blockers · V1 home sign-off |
| Platform cutover | Oct 1 | Mariana production ID swap + maintenance (Nick calendar) |

**Sprint must-ship (open):** Todd V1 sign-off · SMS phone/cap · 2nd font · staging URLs → Nick · counsel OK if required · final crest asset (if available).

**Parked after Sep 8:** carousel video/GIF · sticky pillars polish · full Membership passport page · dead-code prune · Oct 1 execute · optional post-launch banner.

---

## Categories

| Tag | Use for |
|-----|---------|
| UI | Layout, chrome, Space/shadcn, visual |
| Bug | Incorrect behavior |
| Data | Firestore / API / wrong or missing data |
| Perf | Slow load, jank, heavy bundles |
| Copy | Labels, wording, dates display |
| Ops | Deploy, env, scripts, tooling |
| Other | Anything else |

---

## V1 — Homepage (Todd PDF §§01–17)

**Audit 09/07/2026:** Structural brief is **done**. Do not reopen shipped rows. Code: `ConceptV1View` · `direction-v1/*`. Default homepage = **V1** (`workingDirection`). EF = frozen fallback (DEV switcher).

**Open leftovers (not a rebuild):** final crest mark · §05 purpose media (slides 02–04) · Todd sign-off · (parked) sticky pillars · full Membership **page**.

### Shipped — §§01–17

- [x] **UI** — §01 Dark-first charcoal · cream type · larger opening scale · editorial language · 09/02/2026
- [x] **UI** — §02 Header: larger `UNITED STRENGTH` · live `COLUMBUS, OH // MM.DD.YY // h:mm AM/PM` · crest transform kept · 09/02/2026
  - Notes: `App.tsx` `getV1FormattedDateTime`. Compact crest asset still open (below).
- [x] **UI** — §03 Left drawer ~28% desktop / full mobile · numbered nav · crest watermark · fullscreen overlay off for V1 · 09/02/2026
  - Notes: EF keeps fullscreen overlay.
- [x] **UI** — §04 Horizontal 4-chapter opening carousel · vertical only after 04 · 09/02/2026
- [x] **UI** — §05 Media slots (stills now; video path ready) · 09/02/2026
  - Notes: Final per-slide video/GIF parked — see open. **Slide 01 video shipped 09/07** (local muted MP4 from live SQS hero).
- [x] **UI** — §06 Editorial progress `01 — 02 — 03 — 04` · 09/02/2026
  - Notes: No SCROLL↓ between horizontal chapters. `Scroll ↓` only on slide 04 (vertical unlock).
- [x] **UI** — §07 Slide 01 · `// UNITED STRENGTH CLUB` · hero lede · no `( THE CLUB )` · 09/02/2026 · Club restored 09/07/2026
  - Notes: Matches Todd written brief. Header crest wordmark stays `UNITED STRENGTH`. File: `OpeningCarousel.tsx`.
- [x] **UI** — §05 Slide 01 opening loop video · 09/07/2026
  - Notes: `gymVideos.opening01` · poster `galleryCinematic` · muted autoplay via `OpeningSlide`. Source: live site hero. Slides 02–04 still stills.
- [x] **UI** — §08 Slide 02 What We Believe (restrained, full-screen) · 09/02/2026
- [x] **UI** — §09 Slide 03 Four Pillars — one frame, four equal vertical quarters · type matched to other slides · 09/06–09/07/2026
  - Notes: `PillarsQuad.tsx`. Mid labels nudged up for soft overlap with chapter chrome.
- [x] **UI** — §10 Slide 04 Experience United · no 5/14/START HERE pricing · 09/02/2026
- [x] **UI** — §11–12 Vertical What We Offer (image gateways, minimal text) · 09/02/2026 · lanes polish 09/07/2026
- [x] **UI** — §13 Space / Experience cream break · EXPLORE THE SPACE → · 09/02/2026 · layered planks 09/07/2026
- [x] **UI** — §14 Membership passport preview · EXPLORE MEMBERSHIP → · 09/02/2026 · ledger + flip 09/07/2026 · desktop split depth 09/07/2026
  - Notes: Homepage preview only. about-us-09/13 split on md+ (editorial left · full-width ledger right · Issued/Access/Review). Full passport **page** parked.
- [x] **UI** — §15–16 Start Here: `YOUR NEXT CHAPTER STARTS HERE.` + EXPERIENCE UNITED → / APPLY FOR MEMBERSHIP → · 09/02/2026
- [x] **UI** — §17 Dark footer EXPLORE / JOIN / CONNECT · bottom `© UNITED STRENGTH CLUB` · PRIVACY · TERMS · 09/02/2026 · legal verbatim 09/07/2026
  - Notes: `V1SiteIndexFooter.tsx` — no year / “All rights reserved” filler.
- [x] **UI** — EF main build untouched · E+F still in DEV · 09/02/2026

### Open — homepage (leave unchecked)

- [ ] **Other** — Todd sign-off: public home = V1 · **due 09/08/2026**
  - Notes: Code default already V1; need Todd OK before Nick sees staging as final home.
- [ ] **UI** — §02 Final brand mark in scrolled/transformed header · open
  - Notes: Still `USCrestSVG` in `App.tsx` when `crestCompact`. Wire when final crest asset is confirmed. Do not check off early.
- [ ] **UI** — §05 Final carousel video/GIF for slides 02–04 · parked post-handoff
  - Notes: Slide 01 done (`opening-01-united-strength.mp4`). 02–04 stills until Todd/purpose media. Slots exist.
- [ ] **UI** — Horizontal sticky pillar stack (optional polish — not PDF §09) · parked post-handoff
  - Notes: Quad already satisfies Todd. Nested sticky-left fights parent snap-x. File: `PillarsQuad.tsx`.
- [ ] **UI** — Full Membership passport **page** · parked post-handoff
  - Notes: PDF — complete system on Membership page; homepage is preview. Route: `/membership`.

### Space DNA (shipped / reject)

- [x] **UI** — Adapt: drawer-01 · hero-29 · carousel-01/02 · about-us-09 · feature-25 · services-02 · gallery-01 · cta-08/15 · footer-02/05 · 09/02/2026
- [x] **Other** — Study-only alts unused · 09/02/2026
- [x] **UI** — Reject dashboard sidebars, card carousels, portfolio-08 sticky on V1 home, pricing-*, SaaS heroes · 09/02/2026

---

## V1 — Navigation Updates (Sep 2026)

**Google Doc:** [Navigation Updates — Sep 2026](https://docs.google.com/document/d/14dlLGcht1pqntmc_AbxH0zjxQjl1LbJMsAtYoqMwbgs/edit?pli=1&tab=t.dzx30iv71vus)  
**Brief:** [docs/client/todd-navigation-updates-sep-2026.md](../docs/client/todd-navigation-updates-sep-2026.md) · **Wireframe:** [docs/wireframes/navigation-updates-sep-2026.md](../docs/wireframes/navigation-updates-sep-2026.md) · **Spec:** [docs/wireframes/nav-sep-2026-wave2-spec.md](../docs/wireframes/nav-sep-2026-wave2-spec.md)  
**Chrome:** Keep V1 drawer / EF overlay — hierarchy only (honored). V1 homepage locked (see § Homepage above).  
**Source of truth for check-off:** this section · canvas view: `fix-backlog.canvas.tsx`

### 01 About

- [x] **UI** — About · Philosophy page keep · 09/14/2026
- [x] **UI** — About · Founder Story page keep · 09/14/2026
- [x] **UI** — About · Meet the Team page keep · 09/14/2026
- [x] **UI** — About · The Space page keep · 09/14/2026
- [x] **UI** — About · FAQ page keep · 09/14/2026

### 02 Training

- [x] **UI** — Training Classes · BUILD page · 09/14/2026
- [x] **UI** — Training Classes · BURN page · 09/14/2026
- [x] **UI** — Training Classes · BALANCE Coming Soon in nav · 09/14/2026
  - Notes: Dedicated Balance page still CS toast when hit; not full class content
- [x] **UI** — Move the City → Training as MOVE THE CITY // RUN CLUB · 09/14/2026
  - Notes: `/training/move-the-city` · alias `/culture/move-the-city` · retired Culture leaf
- [x] **UI** — Coaching · single PERSONAL TRAINING nav leaf + hub shell · 09/14/2026
  - Notes: `/training/personal` · folded 1-on-1 / small / private aliases
- [ ] **UI** — Personal Training full interior polish · 09/14/2026
  - Notes: NAV-102 · Recipe story-led hub · DNA `about-us-13` + `cta-08` (adapt only) · thin shell at `/training/personal` · polish after Todd
- [ ] **UI** — BALANCE dedicated class page (beyond Coming Soon) · 09/14/2026
  - Notes: NAV-104 · Recipe sparse manifesto → class leaf · manifesto DNA · full page later

### 03 Foundation

- [x] **UI** — FOUNDATION Coming Soon single nav entry · 09/14/2026
- [ ] **UI** — Foundation dedicated page · 09/14/2026
  - Notes: NAV-105 · Recipe sparse manifesto · DNA `about-us-13` (adapt) · Doc — eventually its own page

### 04 Longevity

- [x] **UI** — LONGEVITY Coming Soon single nav entry (no child leaves) · 09/14/2026
- [ ] **UI** — Longevity dedicated page · 09/14/2026
  - Notes: NAV-106 · Recipe sparse manifesto · DNA `about-us-13` (adapt) · single leaf · Doc — eventually its own page

### 05 Culture

- [x] **UI** — Culture · remove Move the City from Culture · 09/14/2026
- [x] **UI** — Culture · By Design page shell `/culture/by-design` · 09/14/2026
- [x] **UI** — Culture · Cultivated page keep · 09/14/2026
- [x] **UI** — Culture · Archive page keep · 09/14/2026
- [ ] **UI** — By Design full interior polish · 09/14/2026
  - Notes: NAV-101 · Recipe sparse manifesto (Cultivated twin) · DNA `about-us-13` (adapt) · intention ≠ The Space · polish after Todd

### 06 Membership

- [x] **UI** — Membership dedicated page keep · 09/14/2026

### 07 Shop

- [x] **UI** — Shop in nav → TheUnitedLimited.com external (no US Shop page) · 09/14/2026
- [ ] **Copy** — Confirm Shop label Shop vs United Limited with Todd · 09/14/2026
  - Notes: NAV-103 · No interior recipe · Code uses Shop; URL `https://theunitedlimited.com`

### 08 Start Here

- [x] **UI** — Start Here · Experience United keep · 09/14/2026
- [x] **UI** — Start Here · Apply for Membership keep · 09/14/2026

### Overall / chrome

- [x] **UI** — No nav drawer/overlay redesign (hierarchy-only changes) · 09/14/2026
- [x] **UI** — LOCKED_NAV matches Todd Sep tree · 09/14/2026
- [x] **Other** — Docs/wireframe/spec status for Wave 1 · 09/14/2026
  - Notes: wireframe + `nav-sep-2026-wave2-spec.md` · odd-ritual-pages matrix Sep sync · canvas `fix-backlog` / `sep-2026-nav-status`

---

## Delivery — Strip & promote

| Runs on | Notes |
|---------|--------|
| Vite SPA (`npm run build`) → Vercel | `vercel.json` SPA rewrite |
| Mariana Tek iframes | `/buy` `/schedule` `/account` |
| Optional later | Next.js + Firebase (not Sep 8 / Oct 1 required) |

- [x] **Ops** — BETA / Archive / Specs / direction switcher DEV-only (`showDevChrome`) · 09/06/2026
- [x] **UI** — Production default homepage → **V1** · 09/06/2026
- [x] **UI** — No Buy / Reserve / Book in marketing nav · 09/06/2026
- [ ] **Ops** — Dead-code prune Concept A/C/D archive mounts · parked post-handoff

**Keep for client:** V1 home + EF interiors · site chrome · Privacy/Terms/Contact/Apply/Experience · Mariana routes · `gymPhotos` / team assets.

---

## Mariana Tek + Legal / SMS

Source: `docs/integrations/mariana-tek-onboarding.md` · Nick packet · Oct 1 runbook.

Sandbox: tenant `unitedstrength.sandbox` · location `48730` · region `48547`

### Ready (code/docs)

- [x] **Ops** — Font/color handoff packet drafted · 09/06/2026
  - Notes: `docs/integrations/mariana-nick-handoff.md` — Satoshi + IBM Plex Mono (recommended secondary).
- [x] **Copy** — Privacy Twilio mobile-data paragraph · 09/06/2026
- [x] **Copy** — Terms SMS program sections 1–5 (Todd placeholders) · 09/06/2026
- [x] **UI** — Embed routes `/buy` `/schedule` `/account` · 09/06/2026
- [x] **Ops** — Cutover runbook + `MaintenancePage` · 09/06/2026

### Open — due Sep 8

- [ ] **Ops** — Confirm primary/secondary hex + 2nd font with Todd · **due 09/08/2026**
  - Notes: Proposed `#181818` · `#FFFFFF` · `#F3EEE7` · accent `#0A3C2E`.
- [ ] **Copy** — SMS frequency cap `[X]` + support phone for Terms HELP · **due 09/08/2026**
  - Notes: Todd fills; also message-types list if needed.
- [ ] **Other** — Counsel review of Privacy/Terms (if required before Nick) · **due 09/08/2026**
- [ ] **Ops** — Deploy staging + fill live privacy/terms/embed URLs · **due 09/08/2026**
- [ ] **Ops** — Reply to Nick: fonts + colors + privacy/terms URLs + staging buy/schedule/account · **due 09/08/2026**
- [ ] **Ops** — Confirm location navigation disabled with Nick (single Columbus studio) · **due 09/08/2026**

### Parked (not Sep 8 gate)

- [ ] **Ops** — Email domain auth DNS when Xplor Growth live
  - Notes: `@unitedstrengthgym.com` — not personal Gmail.

### Oct 1, 2026 — Mariana migration day

- [ ] **Ops** — 8:00 AM EST: enable maintenance mode · 10/01/2026
- [ ] **Ops** — Evening: swap sandbox → production Mariana IDs · 10/01/2026
- [ ] **Ops** — Evening: disable maintenance; mobile smoke buy/schedule/account · 10/01/2026
- [ ] **UI** — Optional post-launch homepage banner (password reset + update card) · post-cutover
