# Fix backlog — United Strength

Per-repo parked fixes + **final delivery checklist**. Source of truth for Todd handoff tracking.
Do not put secrets here. Check off with `- [x]` when done.

**Date key:** · MM/DD/YYYY

---

## Sprint — handoff Sep 8, 2026

**Target:** Nick / Todd plug-and-play handoff by **Monday, Sep 8, 2026**.


| Wave               | Due       | Scope                                                                                                  |
| ------------------ | --------- | ------------------------------------------------------------------------------------------------------ |
| **Handoff sprint** | **Sep 8** | Fonts + colors · Privacy/Terms URLs · staging embeds · Todd SMS + 2nd-font blockers · V1 home sign-off |
| Platform cutover   | Oct 1     | Mariana production ID swap + maintenance (Nick calendar)                                               |


**Sprint must-ship (open):** SMS phone/cap · staging URLs → Nick · counsel OK if required. Crest, logos, and fonts are no longer code work — the brand hub edits them. Public site is V1. Todd signed off the V1 home on 09/26/2026. EF is not an active surface.

**Parked after Sep 8:** Oct 1 execute · optional post-launch banner. Coming-soon pages (Balance, Foundation, Longevity) stay with Todd.

---



## Categories


| Tag   | Use for                                 |
| ----- | --------------------------------------- |
| UI    | Layout, chrome, Space/shadcn, visual    |
| Bug   | Incorrect behavior                      |
| Data  | Firestore / API / wrong or missing data |
| Perf  | Slow load, jank, heavy bundles          |
| Copy  | Labels, wording, dates display          |
| Ops   | Deploy, env, scripts, tooling           |
| Other | Anything else                           |


---



## V1 — Homepage (Todd PDF §§01–17)

**Audit 09/26/2026:** Structural brief is **done**. Do not reopen shipped rows. Code: `ConceptV1View` · `direction-v1/`*. Default homepage = **V1** (`workingDirection`). EF is not the public site.

**Homepage leftovers:** none. Todd signed off the public home as V1 on 09/26/2026. Crest, logos, carousel 02–04 media, sticky pillars, and the membership page are not code leftovers.

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
  - Notes: Homepage preview only. about-us-09/13 split on md+ (editorial left · full-width ledger right · Issued/Access/Review). Full membership page is `/membership`.
- [x] **UI** — §15–16 Start Here: `YOUR NEXT CHAPTER STARTS HERE.` + EXPERIENCE UNITED → / APPLY FOR MEMBERSHIP → · 09/02/2026
- [x] **UI** — §17 Dark footer · superseded by Part G mock layout · 09/02/2026 · mock fidelity 09/23/2026
  - Notes: Was EXPLORE / JOIN / CONNECT. Now 5-zone mock: location · EXPLORE · crest · CONNECT · Stronger United · `© 2026 UNITED STRENGTH CLUB` · PRIVACY | TERMS. Year added to match editorial mock (overrides prior “no year” rule).
- [x] **UI** — EF main build untouched · E+F still in DEV · 09/02/2026



### Homepage sign-off

- [x] **Other** — Todd sign-off: public home = V1 · 09/26/2026
  - Notes: Todd confirmed. Code default is already V1. Nick can see staging with V1 as the home.
- [x] **UI** — §02 Final brand mark · not a code wait · 09/26/2026
  - Notes: Footer crest is the brand hub media slot `crest` (`V1SiteIndexFooter`). A new crest file is an upload, not an `App.tsx` edit. The scrolled header still shows the bundled `USCrestSVG` as the default mark until that slot is what the header reads.
- [x] **UI** — §05 Final carousel video/GIF for slides 02–04 · parked post-handoff
  - Notes: Slide 01 done (`opening-01-united-strength.mp4`). 02–04 stills until Todd/purpose media. Slots exist.
- [x] **UI** — Horizontal sticky pillar stack (optional polish — not PDF §09) · parked post-handoff
  - Notes: Quad already satisfies Todd. Nested sticky-left fights parent snap-x. File: `PillarsQuad.tsx`.
- [x] **UI** — Full Membership passport **page** · parked post-handoff
  - Notes: PDF — complete system on Membership page; homepage is preview. Route: `/membership`.



### Space DNA (shipped / reject)

- [x] **UI** — Adapt: drawer-01 · hero-29 · carousel-01/02 · about-us-09 · feature-25 · services-02 · gallery-01 · cta-08/15 · footer-02/05 · 09/02/2026
- [x] **Other** — Study-only alts unused · 09/02/2026
- [x] **UI** — Reject dashboard sidebars, card carousels, portfolio-08 sticky on V1 home, pricing-*, SaaS heroes · 09/02/2026

---



## V1 — Homepage revisions (Sep 16 meeting)

**Part E** of Sep 23 master plan · check-off source for meeting-derived homepage work.  
**Google Doc:** [Meeting Sep 16, 2026 — notes](https://docs.google.com/document/d/13skfUNq75FjX3GYg04gOcldjRGXGAu-DbleLh_XfUZk/edit?tab=t.r2y6qz179xcz)  
**Surface:** V1 only (local). Do **not** confuse with § **V1 — Navigation Updates** below (different Doc `14dlLG…` — nav polish PARKED).  
**Not done by Part A legal** — these rows stay open until Part E deep-spec + implement.

### From meeting (Rob)

- [x] **UI** — Scroll indicators on opening carousel (skinny scroll/swipe cue; keep chapter numbers) · 09/26/2026
  - Notes: Part E · `OpeningCarousel.tsx` · slim Swipe → on 01–03 advances one chapter · `Scroll ↓` on 04 · chapter numbers kept
- [x] **UI** — Desktop header / hero type slightly larger than mobile · 09/26/2026
  - Notes: Part E · V1 wordmark 15px / 22px · date 8px / 10px · opening type stays kit size on phone and scales to 64 / 40 / 18 from `md`
- [x] **UI** — Mobile four pillars → 2×2 square blocks (not toothpicks) · 09/26/2026
  - Notes: Part E · `PillarsQuad.tsx` · UL/UR/LL/LR squares on ~375px; desktop keep tall quarters
- [x] **UI** — Post-carousel typography “what we believe” break (text-forward, less photo) · 09/23/2026
  - Notes: Part E · `BelieveBreak.tsx` · `02 // WHAT WE BELIEVE` · cream split · philosophy CTA
- [x] **UI** — Training section beta: overlay vs caddy-corner layouts · 09/23/2026
  - Notes: Part E · `WhatWeOffer.tsx` retargeted to `03 // TRAINING` · four photo pathways (Build/Burn/PT/Move the City). Deeper overlay/caddy-corner polish can still iterate.
- [x] **UI** — Start Here: two large images + side text / hover · 09/23/2026
  - Notes: Part E · `StartHere.tsx` · `07 // START HERE` · dual image columns · tap-first (no hover-only)
- [x] **UI** — Vertical spine 02–07 + continuous overlaps · 09/23/2026
  - Notes: Part E · Believe → Training → People → Space(05) → Membership(06) → Start Here(07) · z-index + negative margins · wireframe updated
- [x] **UI** — Experience United number-flick; package **$70** (not $75) · open 09/23/2026
  - Notes: Part E · 5 classes / 14 days / $70 · homepage still no membership tier prices
- [x] **Copy** — Homepage membership: offerings OK, **no prices** on home · open 09/23/2026
  - Notes: Part E · real prices live on `/membership` only (Part C) · passport stays credential-only (done)
- [x] **UI** — Footer editable / brand-kit ready · 09/23/2026
  - Notes: **Part G done** — `V1SiteIndexFooter.tsx` matches editorial mock (5-zone + legal bar). Crest and Stronger United swap through the brand hub, not a later code pass.
- [x] **UI** — Footer Stronger United mark · hub slot, not a redraw · 09/26/2026
  - Notes: `StrongerUnitedMark` reads hub slot `strongerUnited` and falls back to `src/assets/images/brand/stronger-united.png`. A closer lockup is an upload.



### Parked / other Parts (from same meeting)

- [x] **Other** — Plug-and-play brand hub · shipped 09/26/2026
  - Notes: Part H. Brand hub edits Brand colors, Type (Satoshi, Instrument Serif, IBM Plex Mono), Media (footer crest, Stronger United, opening stills, pillars, space), and Footer. Publish writes `/api/brand-kit`. A logo or font change among those families does not need a code deploy.
- [x] **Other** — Todd brand kit delivery · no longer a code blocker · 09/26/2026
  - Notes: Official logos, crest, and type go into the brand hub. No developer swap in `direction-v1/brand/`.

---



## Copywright — website page copy (Parts B–D)

**Parts B–D** of Sep 23 master plan · check-off source for page copyright rollout.  
**Folder:** `[Copywright/websitepageassetsandcopy/](../Copywright/websitepageassetsandcopy/)` (15 `.docx` files)  
**Legal folder** (`privacypolicyandtermsandservices/`) = **Part A** only — do not duplicate here.  
**Surface:** V1 routes only · local.  
**Locked copy rules:** member-facing text **verbatim**; design notes (“I like the bones…”) = **instructions only**, not on-page copy. Membership **prices on** `/membership`; homepage stays price-free (Part E).

### Part B — Ingest

- [x] **Docs** — Mapping table: docx filename → route → data module · 09/23/2026
  - Notes: Part B · journey/about/culture/training-copy modules · Copywright websitepageassetsandcopy
- [x] **Copy** — Ingest pipeline rule locked (verbatim member-facing; design prose = instructions) · 09/23/2026
  - Notes: Part B · no paraphrasing member-facing strings



### Part C — Priority pages

- [x] **Copy** — `EXPERIENCE UNITED PAGE.docx` → `/start-here/experience` · 09/23/2026
  - Notes: Part C · 5 / 14 / **$70** · deepened sections
- [x] **Copy** — `_MEMBERSHIP PAGE.docx` → `/membership` · 09/23/2026
  - Notes: Part C · four tiers + real prices · passport cards
- [x] **Copy** — `_MOVE THE CITY PAGE.docx` → `/training/move-the-city` · 09/23/2026
  - Notes: Part C · Run Club · partnerships removed
- [x] **Copy** — `PHILOSOPHY PAGE.docx` → `/about/philosophy` · 09/23/2026
  - Notes: Part C · hero “CUTTING THROUGH THE NOISE” · 5 core beliefs
- [x] **Copy** — `APPLY FOR MEMBERSHIP PAGE.docx` → `/start-here/apply` · 09/23/2026
  - Notes: Part C · Begin Application mailto stub until Typeform
- [x] **Copy** — `APPLICATION PROCESS_FUNCATIONALITY.docx` → Apply / Typeform bridge notes · 09/23/2026
  - Notes: Part C companion · **Part F** when Typeform URL exists · no full form on-site



### Open leftovers (Doc audit 09/26)

- [x] **Other** — Part F · Apply form on the page · 09/26/2026
  - Notes: On-site Forms 03 replaced the Typeform URL. Send application posts to `/api/apply`, which emails membership@unitedstrengthgym.com. The visitor only sees that someone will be in contact. `TYPEFORM_APPLY_URL` stays empty.
- [ ] **Copy** — Founder Story · Todd collage hero + one current mid-page photo · open 09/26/2026
  - Notes: Story copy is already on `/about/founder`. The Doc says the wide collage and the one current mid-page photo come from Todd.



### Part D — Remaining pages

- [x] **Copy** — `BUILD PAGE.docx` → `/training/classes/build` · 09/23/2026
  - Notes: Part D · Strength for life · Experience United CTA language
- [x] **Copy** — `CULTIVATED PAGE.docx` → `/culture/cultivated` · 09/23/2026
  - Notes: Part D
- [x] **Copy** — `FAQ PAGE.docx` → `/about/faq` · 09/23/2026
  - Notes: Part D · 20 questions · some answers “Details coming.”
- [x] **Copy** — `FOUNDER STORY PAGE.docx` → `/about/founder` · 09/23/2026
  - Notes: Part D
- [x] **Copy** — `MEET THE TEAM PAGE.docx` → `/about/team` · 09/23/2026
  - Notes: Part D · title Meet the Team · bios pending Todd
- [x] **Copy** — `THE SPACE PAGE.docx` → `/about/the-space` · 09/23/2026
  - Notes: Part D · visit CTA → Experience United
- [x] **Copy** — `_ARCHIVE PAGE.docx` → `/culture/archive` · 09/23/2026
  - Notes: Part D
- [x] **Copy** — `_BY DESIGN PAGE.docx` → `/culture/by-design` · 09/23/2026
  - Notes: Part D · NAV-101 content unparked
- [x] **Copy** — `_PERSONAL TRAINING PAGE.docx` → `/training/personal` · 09/23/2026
  - Notes: Part D · NAV-102 content unparked · no prices

---



## V1 — Navigation Updates (Sep 2026)

**Google Doc:** [Navigation Updates — Sep 2026](https://docs.google.com/document/d/14dlLGcht1pqntmc_AbxH0zjxQjl1LbJMsAtYoqMwbgs/edit?pli=1&tab=t.dzx30iv71vus)  
**Brief:** [docs/client/todd-navigation-updates-sep-2026.md](../docs/client/todd-navigation-updates-sep-2026.md) · **Wireframe:** [docs/wireframes/navigation-updates-sep-2026.md](../docs/wireframes/navigation-updates-sep-2026.md) · **Spec:** [docs/wireframes/nav-sep-2026-wave2-spec.md](../docs/wireframes/nav-sep-2026-wave2-spec.md)  
**Chrome:** Keep V1 drawer — hierarchy only (honored).  
**Source of truth for check-off:** this section · canvas view: `fix-backlog.canvas.tsx`

**Status 09/26/2026:** Wave 1 (tree + shells) = **done**. Public site is **V1**. Balance, Foundation, and Longevity stay Coming Soon for Todd to build later. Open nav questions are the Shop label and any Todd label changes.

### Wave 1 — Done (shipped)



#### 01 About

- [x] **UI** — About · Philosophy page keep · 09/14/2026
- [x] **UI** — About · Founder Story page keep · 09/14/2026
- [x] **UI** — About · Meet the Team page keep · 09/14/2026
- [x] **UI** — About · The Space page keep · 09/14/2026
- [x] **UI** — About · FAQ page keep · 09/14/2026



#### 02 Training

- [x] **UI** — Training Classes · BUILD page · 09/14/2026
- [x] **UI** — Training Classes · BURN page · 09/14/2026
- [x] **UI** — Training Classes · BALANCE Coming Soon in nav · 09/14/2026
  - Notes: Nav toast stays Coming Soon. Todd builds the class page later.
- [x] **UI** — Move the City → Training as MOVE THE CITY // RUN CLUB · 09/14/2026
  - Notes: `/training/move-the-city` · alias `/culture/move-the-city` · retired Culture leaf
- [x] **UI** — Coaching · single PERSONAL TRAINING nav leaf + hub shell · 09/14/2026
  - Notes: `/training/personal` · folded 1-on-1 / small / private aliases



#### 03–08 + chrome (Wave 1)

- [x] **UI** — FOUNDATION Coming Soon single nav entry · 09/14/2026
- [x] **UI** — LONGEVITY Coming Soon single nav entry (no child leaves) · 09/14/2026
- [x] **UI** — Culture · remove Move the City from Culture · 09/14/2026
- [x] **UI** — Culture · By Design page shell `/culture/by-design` · 09/14/2026
- [x] **UI** — Culture · Cultivated page keep · 09/14/2026
- [x] **UI** — Culture · Archive page keep · 09/14/2026
- [x] **UI** — Membership dedicated page keep · 09/14/2026
- [x] **UI** — Shop in nav → TheUnitedLimited.com external (no US Shop page) · 09/14/2026
- [x] **UI** — Start Here · Experience United keep · 09/14/2026
- [x] **UI** — Start Here · Apply for Membership keep · 09/14/2026
- [x] **UI** — No nav drawer/overlay redesign (hierarchy-only changes) · 09/14/2026
- [x] **UI** — LOCKED_NAV matches Todd Sep tree · 09/14/2026
- [x] **Other** — Docs/wireframe/spec status for Wave 1 · 09/14/2026
  - Notes: wireframe + `nav-sep-2026-wave2-spec.md` · odd-ritual-pages matrix Sep sync · canvas `fix-backlog` / `sep-2026-nav-status`



### Nav polish

By Design and Personal Training content are in. Balance, Foundation, and Longevity pages are Todd’s later. Two Todd questions remain below.

- [x] **UI** — NAV-101 · By Design full interior polish · content 09/23/2026
  - Notes: Copywright `_BY DESIGN` wired · Cultivated twin shell · further media lookbook polish may remain
- [x] **UI** — NAV-102 · Personal Training full interior polish · content 09/23/2026
  - Notes: Copywright `_PERSONAL TRAINING` wired · no prices · single leaf · inquire CTA
- [ ] **Copy** — NAV-103 · Confirm Shop label Shop vs United Limited with Todd · parked 09/23/2026
  - Notes: URL stays `https://theunitedlimited.com` · LOCKED_NAV label only
- [x] **UI** — NAV-104 · BALANCE dedicated class page · left for Todd · 09/26/2026
  - Notes: Nav stays Coming Soon. Todd builds the page later. Not a V1 developer page.
- [x] **UI** — NAV-105 · Foundation dedicated page · left for Todd · 09/26/2026
  - Notes: Nav stays Coming Soon. Todd builds the page later. Not a V1 developer page.
- [x] **UI** — NAV-106 · Longevity dedicated page · left for Todd · 09/26/2026
  - Notes: Nav stays Coming Soon. Todd builds the page later. Not a V1 developer page.
- [ ] **Other** — Re-open Google Doc tab with Todd for any label/href deltas · parked 09/23/2026
  - Notes: Doc link above · after feedback, update LOCKED_NAV then unpark matching NAV-* rows

---



## Delivery — Strip & promote


| Runs on                             | Notes                                           |
| ----------------------------------- | ----------------------------------------------- |
| Vite SPA (`npm run build`) → Vercel | `vercel.json` SPA rewrite                       |
| Mariana Tek iframes                 | `/buy` `/schedule` `/account`                   |
| Optional later                      | Next.js + Firebase (not Sep 8 / Oct 1 required) |


- [x] **Ops** — BETA / Archive / Specs / direction switcher DEV-only (`showDevChrome`) · 09/06/2026
- [x] **UI** — Production default homepage → **V1** · 09/06/2026
- [x] **UI** — No Buy / Reserve / Book in marketing nav · 09/06/2026
- [x] **Ops** — Dead-code prune Concept A/C/D / EF archive mounts · not a V1 task · 09/26/2026
  - Notes: Public site is V1. Old directions stay in the repo unused. Cleaning them out is not remaining V1 work.

**Keep for client:** **V1** home + V1 interiors · site chrome · Privacy/Terms (permanent paths) · Contact/Apply/Experience · Mariana routes · `gymPhotos` / team assets. EF and Concepts A/C/D are not the public site.

---



## Mariana Tek + Legal / SMS

Source: `docs/integrations/mariana-tek-onboarding.md` · Nick packet · Oct 1 runbook · counsel docs in `Copywright/privacypolicyandtermsandservices/`.

Sandbox: tenant `unitedstrength.sandbox` · location `48730` · region `48547`

### Part A — Legal pages (active 09/23)

Permanent paths (Todd): `/privacy-policy` · `/terms-of-service`  
Surface: **V1 dark editorial** · local verify first · final-domain URLs for Mariana later  
Aliases: `/privacy` → privacy-policy · `/terms` → terms-of-service

- [x] **Copy** — Ingest counsel Privacy + Terms verbatim into `src/data/legal-copy.ts` · 09/23/2026
  - Notes: Effective Date September 22, 2026. Source: Copywright docx. SMS placeholder stubs removed.
- [x] **UI** — Dark V1 legal document pages (`V1LegalDocumentPage`) · 09/23/2026
  - Notes: Charcoal / cream / muted gold · matches footer aesthetic
- [x] **UI** — Routes + footer links to permanent paths · 09/23/2026
  - Notes: `App.tsx` PARITY_ROUTES · V1 + EF footers · old path aliases
- [ ] **Ops** — Local smoke: open `/privacy-policy` + `/terms-of-service` on phone + desktop · 09/23/2026
- [ ] **Ops** — Mariana Privacy/Terms URLs on **final deploy domain** · parked until final deploy
  - Notes: Do not send beta as permanent. After final domain live → email Todd both links.



### Ready (code/docs)

- [x] **Ops** — Font/color handoff packet drafted · 09/06/2026
  - Notes: `docs/integrations/mariana-nick-handoff.md` — Satoshi + IBM Plex Mono (recommended secondary).
- [x] **Copy** — Privacy Twilio mobile-data paragraph · 09/06/2026 · **superseded 09/23** by counsel Privacy Policy
- [x] **Copy** — Terms SMS program sections 1–5 (Todd placeholders) · 09/06/2026 · **superseded 09/23** by counsel Terms (SMS stubs dropped unless counsel re-adds)
- [x] **UI** — Embed routes `/buy` `/schedule` `/account` · 09/06/2026
- [x] **Ops** — Cutover runbook + `MaintenancePage` · 09/06/2026



### Open — due Sep 8

- [x] **Ops** — Confirm hex + second font in code · superseded by brand hub · 09/26/2026
  - Notes: Defaults stay the current tokens. Hub Brand sets background, cream, gold, and text. Hub Type sets display, body, and mono from Satoshi, Instrument Serif, and IBM Plex Mono. Telling Nick those values is still the separate reply row.
- [ ] **Copy** — SMS frequency cap `[X]` + support phone · parked 09/23/2026
  - Notes: Not in counsel Terms. Re-open only if Mariana/Twilio still requires a separate SMS addendum.
- [ ] **Other** — Counsel review of Privacy/Terms (if required before Nick) · **due 09/08/2026**
  - Notes: Live pages now use Sep 22 counsel docs from Todd.
- [ ] **Ops** — Deploy staging + fill live privacy/terms/embed URLs · **due 09/08/2026**
  - Notes: Permanent paths `/privacy-policy` + `/terms-of-service`. Local first. Final production domain for Mariana (not beta).
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

---



## Ownership handoff

Do this only after Todd says the site is the one that replaces [unitedstrengthgym.com](https://unitedstrengthgym.com). Git remote today: `Rob-code-94/United-Strength`. Hosting is the Vite SPA in `vercel.json` (no separate server). Confirm the receiving Vercel and GitHub account with Todd before any invite — Nick is the Mariana contact, not automatically the site owner.

Not in this handoff: Stripe, Supabase, Firebase, MongoDB, Formspree, or Web3Forms. None of those are wired. Firebase is an optional later idea in the delivery notes, not a live account. The Shadcn Space license stays with the developer. Do not copy it into the client project.

- [ ] **Ops** — Sanitize env keys before any transfer · 09/26/2026
  - Notes: Production secrets are only `HUB_PASSWORD`, `HUB_SESSION_SECRET`, and `BLOB_READ_WRITE_TOKEN` (Vercel Blob, path `hub/brand-kit.json`). Build-time public keys, not secrets: `VITE_MARIANA_TENANT`, `VITE_MARIANA_LOCATION_ID`, `VITE_MARIANA_REGION_ID`, `VITE_MAINTENANCE_MODE`. `.env.example` currently lists only the three hub keys — add the four `VITE_` names with empty values before transfer. `.env` and `.env.*` stay gitignored. Do not paste values into this file or into git.
- [ ] **Ops** — Transfer GitHub repo, then the Vercel project · 09/26/2026
  - Notes: Invite the confirmed client account as Admin on `Rob-code-94/United-Strength`, or transfer ownership under GitHub Settings → General only after they accept. Then Vercel → this project → Settings → General → Transfer. Client accepts the email. Use re-import (client adds the Git repo as a new Vercel project and copies the env keys) only if transfer is blocked because the project sits on a personal team. Production refuses hub login until `HUB_PASSWORD` and `HUB_SESSION_SECRET` are set on their project. Blob saves fail until `BLOB_READ_WRITE_TOKEN` is set there. Leave Mariana on sandbox (`unitedstrength.sandbox`, location `48730`, region `48547`) until the Oct 1 cutover rows above.
- [ ] **Ops** — Point unitedstrengthgym.com at the client Vercel project · 09/26/2026
  - Notes: Add `unitedstrengthgym.com` and `www.unitedstrengthgym.com` under the client project's Settings → Domains. At the registrar (confirm which one with Todd; do not assume GoDaddy), set the records Vercel displays. Expected if unchanged: A `@` → `76.76.21.21`, CNAME `www` → `cname.vercel-dns.com`. Wait for the automatic certificate. Do not change DNS until the client project is the one that should replace the current Squarespace site. After it is live, send Todd the final `/privacy-policy` and `/terms-of-service` URLs (existing parked row).
- [x] **Ops** — Write `HANDOFF.md` at repo root and walk it once · 09/26/2026
  - Notes: [`HANDOFF.md`](../HANDOFF.md) written 10/06/2026 (pre-transfer gate, transfer order, brand-assets pointer, Todd/Nick leftovers). Walkthrough still happens on the ownership call.
- [ ] **Ops** — Revoke developer access after the walkthrough · 09/26/2026
  - Notes: Remove developer access from the GitHub repo, the Vercel project, and the domain registrar. Keep write access only if Todd confirms a maintenance retainer before the call. Do not remove the developer from Mariana until Nick's Oct 1 cutover is done, if that login is still required that day.
- [ ] **Ops** — Apply mail cannot be delivered yet · 09/26/2026
  - Notes: Moved from QA pre-delivery. Message Todd before handoff. Form checks work (empty name, `not-an-email`, empty phone). `POST /api/apply` returns 503 while `RESEND_API_KEY` is unset. Default From `onboarding@resend.dev` does not deliver to `membership@unitedstrengthgym.com` until a sending domain is verified. He picks the inbox and the email service (Resend or otherwise). Do not paste API keys into this file.
- [ ] **Ops** — Hub password reset waits on the club email · 09/27/2026
  - Notes: The hub sign-in has Reset password. It emails a 30-minute link only after the same email setup as Apply (`RESEND_API_KEY` and a verified From). Set `HUB_RESET_EMAIL` to the inbox Todd wants. If that is empty, the link uses `APPLY_TO_EMAIL`, then `membership@unitedstrengthgym.com`. Saving the new password uses the same private storage as the brand kit (Vercel Blob). Until Resend is connected, the button says the email is not connected. Do not paste API keys or the password into this file.
- [x] **UI** — Archive subscribe shows no confirmation after a valid email · 09/26/2026
  - Notes: Fixed in WT. Invalid → “Enter a valid email.” Valid with no list tool → “Subscription unavailable. Try again later.” (fail-closed). Thanks message when a list is connected. Re-checked deep QA 10/06/2026 · `qa-report/2026-10-06T19-15-43/CLIENT_QA_REPORT.md`.

---

## QA — hub pencils 09/27/2026

Source: full QA of `http://localhost:5173`. Report: `qa-report/2026-09-27T10-50-50/CLIENT_QA_REPORT.md`. Do not commit `qa-report/` unless asked.

- [x] **UI** — Hub preview menu ignores Escape · 09/27/2026
  - Notes: Fixed in WT (`HubPreview.tsx` keydown Escape). Re-checked signed-in hub 10/06/2026 — Escape closes preview Menu.

## QA — pre-delivery 09/26/2026

Source: deep QA of `http://localhost:5174` (local working tree). Report: `qa-report/2026-09-26T21-05-21/CLIENT_QA_REPORT.md`. Do not commit `qa-report/` unless asked.

- [x] **Bug** — Direct links, refresh, and browser Back stay on the homepage · 09/26/2026
  - Notes: The address bar now follows the sitemap path. A pasted `/membership` stays on Membership after refresh. Menu Philosophy sets `/about/philosophy`, in-page Back sets `/`, and browser Back returns. `/team` becomes `/about/team`. `/foundation` stays and toasts. `/schedule` shows the embed. Unknown paths become `/`. Checked 09/27/2026.
- [x] **UI** — Archive subscribe shows no confirmation after a valid email · 09/26/2026
  - Notes: Moved to Ownership handoff. `/culture/archive`. Bad email shows “Enter a valid email.” A valid address clears the error and the page stays silent. Submit does not email anyone. Checked 09/27/2026.
- [x] **UI** — Page still scrolls while the menu is open · 09/26/2026
  - Notes: Menu open marks the page `inert`, hides overflow, and pins `scrollTop`. Wheel and a forced scroll do not move it. Escape still closes the menu and leaves the page where it was. Checked 09/27/2026.
- [x] **UI** — Closed menu sections stay reachable to assistive tech · 09/26/2026
  - Notes: Collapsed panels are `inert` and `aria-hidden`. An open section can be focused; a closed one cannot. Checked 09/27/2026.
- [x] **UI** — Shop leaves the site in the same tab · 09/26/2026
  - Notes: Shop is `target="_blank"` `rel="noopener noreferrer"`. Click opened theunitedlimited.com in a new tab and left the club page in place. Checked 09/27/2026.
- [x] **Ops** — Apply mail cannot be delivered yet · 09/26/2026
  - Notes: Moved to Ownership handoff. Form checks work. `POST /api/apply` returns 503 while `RESEND_API_KEY` is unset. Default From `onboarding@resend.dev` does not deliver to `membership@unitedstrengthgym.com` until a sending domain is verified. Checked 09/27/2026.
- [x] **Ops** — GitHub main still renders the old Apply page · 09/26/2026
  - Notes: Local WT `V1ApplyPage` is Typeform/mailto (`Begin Application`). **Still true:** `origin/main` can lag until commit+push. Pre-transfer gate 10/06 — do not transfer GitHub until WT is on `main`.

---

## Final handoff

Source: Todd emails 10/2026 (design revisions + ownership). Hub = brand kit **plus** marketing page copy (COPY-501–506); nav/layout/forms stay Dev.

### Tell Todd (hub vs code)
- [x] **Ops** — Reply: what hub can edit (colors, type roles, **page copy**, media slots, footer, crest, FAQ Q&A, team still/GIF) vs what needs Dev (nav, layout, forms, env) · 10/04/2026
  - Notes: Matrix in [`docs/client/hub-editable-matrix.md`](../docs/client/hub-editable-matrix.md). Copy pencils on all InteriorPreview pages.
- [x] **Ops** — Walkthrough shows Save draft / Publish for hub edits; FAQ + page Copy tabs; pencils on editorial text · 10/04/2026
  - Notes: Same matrix § Save vs Publish + Copy row. Audit: [`docs/client/hub-live-audit-2026-10-03.md`](../docs/client/hub-live-audit-2026-10-03.md).

### Developer sprint (from design email)
- [x] **Copy** — Home: United Strength Club → United Strength · 10/03/2026
  - Notes: Public-facing rename shipped (V1 home, footers, kit copyright, journey apply, index title). Checked 10/03/2026.
- [x] **UI** — Home How We Train: Build / Burn / Run Club / Personal Training · 10/03/2026
  - Notes: WhatWeOffer tile 04 renamed Run Club; bento + `/training/move-the-city` href unchanged. Checked 10/03/2026.
- [x] **UI** — Footer Connect: phone/text icon + number · 10/03/2026
  - Notes: V1 Connect Phone icon + brand-kit `footer.phone` = `614-754-7524`. Hub editable. Checked 10/03/2026.
- [x] **UI** — Philosophy: click/tap panels with arrows; center closing statement · 10/03/2026
  - Notes: Belief strip is click/tap carousel (arrows + swipe); close centered. Checked 10/03/2026.
- [x] **UI** — Founder: mid-image caption; center closing statement · 10/03/2026
  - Notes: Mid-image caption + centered What I Believe close. Checked 10/03/2026.
- [x] **UI** — Team: focus / credentials / bio hierarchy; GIF-ready portraits · 10/03/2026
  - Notes: Focus / Credentials / Perspective hierarchy + V1TeamPortrait (GIF/video-ready). Checked 10/03/2026.
- [x] **UI** — Space: hover/tap category descriptions · 10/03/2026
  - Notes: Six why-it-matters notes filled on V1_SPACE_TILES. Checked 10/03/2026.
- [x] **UI** — Space: ~40% light see-through overlay for category notes · 10/03/2026
  - Notes: Centered glass panel (~42% height) on hover / focus / tap; larger centered type. Resting state shows bottom label only. `V1SpacePage.tsx`.
- [x] **Bug** — Facts: accordion opens answer under question · 10/03/2026
  - Notes: FAQ (`/about/faq`) answers wired from FAQ_ITEMS; accordion under each Q; kicker says FAQ. Checked 10/03/2026.
- [x] **Other** — Hub-editable FAQ Q&A (20 items) · 10/03/2026
  - Notes: Brand-kit `faq` + Hub FAQ tab (pencil on FAQ intro). Published kit drives `V1FactsPage`. Team portraits: still or GIF (5 MB GIF / 3 MB still).
- [x] **UI** — Build: Experience United as main CTA (no free trial) · 10/03/2026
  - Notes: `V1BuildPage` + `V1_BUILD_START` already Experience United; Strength Standard + schedule kept. Checked 10/03/2026.
- [x] **UI** — Burn: V1 page matching Build system · 10/03/2026
  - Notes: `V1BurnPage` (dark shell, Experience United, schedule). App `isV1` + hub. Balance left Coming Soon. Checked 10/03/2026.
- [x] **UI** — Burn: Build-length editorial expand · 10/03/2026
  - Notes: Session + outcomes + photo band; no Strength Standard; schedule disclaimer removed. Checked 10/03/2026.
- [x] **Copy** — Remove unfinished public disclaimers (pending / Details coming / XX+) · 10/03/2026
  - Notes: FAQ answers filled; PT stats concrete; Build Strength Standard link CTA removed (section kept). Checked 10/03/2026.
- [x] **UI** — Run Club: rename Move the City page; yellow route maps; Name/Email/Mobile capture · 10/03/2026
  - Notes: Path stays `/training/move-the-city`. Gold SVG Mon/Thu route placeholders + `POST /api/run-club` form. Swap maps when Todd delivers. Checked 10/03/2026.
- [x] **UI** — Nav: Move the City top-level Coming Soon; Run Club under Training · 10/03/2026
  - Notes: Overlay peer after Longevity → `/move-the-city` Coming Soon. Run Club stays `/training/move-the-city`. Checked 10/03/2026.
- [x] **UI** — Personal Training: two-image Ways to Train; START WITH A CONVERSATION; remove equipment image · 10/03/2026
  - Notes: Editorial on-image Two Ways tiles; closer headline updated; `ptBand` removed. Checked 10/03/2026.
- [x] **UI** — Personal Training: Find the Right Coach → Meet the Team deep links · 10/03/2026
  - Notes: PT coaches = TEAM_MEMBERS (Todd/Jenna/Jason/Kara) → `/about/team#coach-{id}`; Team scrolls + opens bio. Checked 10/03/2026.
- [x] **UI** — By Design: simplify sequence; carousel controls; delete three-photo block · 10/03/2026
  - Notes: Hero → manifesto → Portfolio (controls on carousel) → video → Materials/Hospitality → closing → Built with Intention. Detail crops removed. Checked 10/03/2026.
- [x] **UI** — By Design: editorial aesthetic polish (V1Interior + Cultivated chapters) · 10/03/2026
  - Notes: `V1Hero`/`V1Section`/`V1Kicker` ladder; `#181818` beats; Portfolio mono Prev/Next; Materials/Hospitality full-bleed chapters (distinct assets). Checked 10/03/2026.
- [x] **UI** — By Design: Materials/Hospitality alabaster offerings index · 10/03/2026
  - Notes: Cream `#F3EEE7` ruled index (about-us-13 DNA); md inset stills on `byDesignLeft`/`byDesignRight`; mobile type-only. Checked 10/03/2026.
- [x] **UI** — Cultivated: blank type-art slot + Odd Ritual principle editorials · 10/03/2026
  - Notes: Type art empty until hub `cultivatedTypeArt`; People/Room/Conversations unique light layouts; definition on cream. Checked 10/03/2026.
- [x] **UI** — By Design: cream + Instrument Serif manifesto/pull · 10/03/2026
  - Notes: Text beats on `#F3EEE7`; Portfolio/film/offerings index unchanged. Checked 10/03/2026.
- [x] **UI** — Cultivated: video hero, typography artwork, three principle sections, 001 media · 10/03/2026
  - Notes: Silent video hero (back only); type-art hub slot ~75vh; definition; Right People/Room/Conversations chapters. Swap type art + media when Todd drops assets. Checked 10/03/2026.
- [x] **UI** — Archive: type → featured → issues/PDF → articles → Mailchimp subscribe · 10/03/2026
  - Notes: Oversized type; cinematic Featured (gold hover); ARCHIVE // 00n hover cover; text articles; `VITE_MAILCHIMP_ARCHIVE_ACTION`. Checked 10/03/2026.
- [x] **UI** — Archive: Featured hub image + Todd five-beat order · 10/03/2026
  - Notes: Default `galleryCinematic` + `archiveFeatured` hub; overlays `pointer-events-none`; order Type → Feature → Issues → Articles → Subscribe → Authors coda. Checked 10/03/2026.
- [x] **UI** — Membership: fast glitch price reveal · 10/03/2026
  - Notes: `NumberTicker` `mode="glitch"` (~0.28s flick) on tier prices + join fee. Checked 10/03/2026.
- [x] **UI** — Experience United: larger beats; reviews section · 10/03/2026
  - Notes: Immersive edge-reaching beats; Testimonial quotes before First Visit. Checked 10/03/2026. Fidelity 10/03/2026: true edge-bleed (col-span-9 / full-bleed strips), left↔center type rhythm, `// Voices` band before First Visit.
- [x] **UI** — Apply: Typeform embed or clean handoff (no second progress) · 10/03/2026
  - Notes: Forms03 removed. `VITE_TYPEFORM_APPLY_URL` embeds; else Begin → mailto. No second progress. Checked 10/03/2026.

### Todd provides (blockers)
- [x] **Other** — GitHub username for United Strength account · 10/03/2026
  - Notes: `UnitedStrength`. Checked 10/06/2026.
- [x] **Other** — Vercel account for United Strength · 10/03/2026
  - Notes: `info@unitedstrengthgym.com` / team United Strength. Checked 10/06/2026.
- [x] **Other** — Resend account + Sending API key (local) · 10/06/2026
  - Notes: Domain unitedstrengthgym.com + Sending key saved in local `.env.local` only (gitignored). From: `United Strength <membership@unitedstrengthgym.com>`. Still must add the same env on **his** Vercel after transfer — see Ownership Resend row.
- [ ] **Other** — Final brand kit + page assets (incl. Cultivated artwork, route maps, coach GIFs, reviews) · 10/03/2026
  - Notes: **Crests / colors / fonts / pillar marks** now in-repo at [`docs/client/brand-assets/`](../docs/client/brand-assets/) (copied 10/06; map in README). Hub can take PNG ≤3 MB for `crest` / `strongerUnited`; OTFs not uploadable. **Still Todd:** founder collage, run maps, coach GIFs, Cultivated type art, reviews. Do not auto-Publish pack.
- [ ] **Other** — Typeform apply URL · 10/03/2026
  - Notes: Set `VITE_TYPEFORM_APPLY_URL` on Vercel to activate in-page embed.
- [x] **Other** — Mailchimp for Archive · 10/03/2026
  - Notes: **Disregarded 10/06/2026** — not required for handoff. Archive subscribe can stay unconnected / fail closed until Todd asks for a list tool later.
- [x] **Other** — Phone number for footer Connect · 10/03/2026
  - Notes: `614-754-7524` seeded in brand-kit. Checked 10/03/2026.
- [ ] **Other** — Go-live date after revisions + assets · 10/03/2026

### Ownership / accounts
- [ ] **Ops** — Transfer GitHub then Vercel after usernames arrive; no retainer; revoke after walkthrough · 10/03/2026
  - Notes: Ready — GitHub `UnitedStrength`, Vercel team United Strength (`info@…`). Transfer repo first, then Vercel project.
- [ ] **Ops** — DNS walkthrough: Vercel A/CNAME only; leave Google Workspace MX/TXT · 10/03/2026
- [ ] **Ops** — Resend under his account; membership@unitedstrengthgym.com; connect env on his Vercel · 10/03/2026
  - Notes: Account + key exist; local `.env.local` has `RESEND_API_KEY` + From. **Open:** put `RESEND_API_KEY`, `APPLY_FROM_EMAIL=United Strength <membership@unitedstrengthgym.com>`, leave `APPLY_TO_EMAIL` empty on **his** Vercel, then redeploy. Do not point To at info@. Connect footer icon stays info@.
- [ ] **Ops** — Nick/Mariana final checklist (Privacy, Terms, production URLs, Columbus location, SMS if still required) · 10/03/2026
- [ ] **Ops** — Send individual quotes: Foundation / Longevity / Move the City (future pages) · 10/03/2026
  - Notes: **Estimate only (not scheduled this wave).** Once Todd has concept/content: Foundation **2.5–3.5 days**; Longevity hub **2.5–3.5 days** (+**1.5–2 days** each child if live); Move the City platform (not Run Club) **3–4 days**. Bundle 3 hubs only: **8–11 days** × usual day rate. Confirm after content packet.
- [ ] **Ops** — Final ownership list: GitHub, Vercel, Blob, domain, Resend, Mariana, Typeform, analytics if any · 10/03/2026
  - Notes: Mailchimp disregarded 10/06/2026 — not part of handoff stack.

---

## QA — deep pre-transfer 10/06/2026

Source: deep crawl + browser + hub of `http://localhost:5173`. Report: `qa-report/2026-10-06T19-15-43/CLIENT_QA_REPORT.md`. Brand pack check-only (not wired).

### Passed (close / no new ticket)

- [x] **UI** — Voices Prev/Next enabled; advances quotes · 10/06/2026
- [x] **Copy** — Membership How to Join `$70` (no `$75`) · 10/06/2026
- [x] **UI** — Apply = Begin Application mailto/Typeform path · 10/06/2026
- [x] **UI** — Archive fail-closed message when list unset · 10/06/2026
- [x] **UI** — Hub Escape + crest Media upload UI + Copy pencil + Save draft · 10/06/2026
- [x] **Ops** — Brand pack preserved in `docs/client/brand-assets/` + hub map README · 10/06/2026

### Open from this run

- [x] **UI** — Home tablet `scrollportOverflowX: 197` · fixed 10/07/2026
  - Notes: Cause was V1 footer five-zone `md:flex-row` with `shrink-0` columns (~965px at 768). Stack through tablet; row from `lg`. Also quiet hub-session GET + optimistic opening chapter `aria-selected`.
- [ ] **Ops** — Pre-transfer gate: **commit + push WT to `main` before GitHub → Vercel transfer** · 10/06/2026
  - Notes: Transferring today’s `origin/main` without the Oct WT ships old Apply / Escape / Archive behavior. Order: sanitize env → commit/push → transfer GitHub (`UnitedStrength`) → transfer Vercel → paste Resend/hub env → DNS → walkthrough → revoke. See ownership rows above. Wave-1 QAFIX commit lands with this sprint.
- [ ] **Ops** — Mariana embed framing / Nick production (sandbox deny) · still open · 10/06/2026
  - Notes: App shell fallback correct (`MarianaEmbedPage` Open ↗ when framing denied). **Owner: Nick** — production tenant + allow framing, or sign off Open↗-only for `/buy` · `/schedule` · `/account`. Not a local UI bug.

## QA — fix-spec wave 10/07/2026

Source: all six `CLIENT_QA_REPORT` runs consolidated in plan `qa_reports_fix_spec`.

- [x] **UI** — Tablet home overflow (footer 5-zone) · 10/07/2026
- [x] **UI** — Opening chapter tab optimistic `aria-selected` · 10/07/2026
- [x] **Bug** — Quiet `/api/hub-session` GET → 200 `{ ok: false }` when logged out · 10/07/2026
- [x] **Ops** — `RESEND_API_KEY` on Vercel Production + Preview (from local `.env.local`; sensitive) · 10/07/2026
  - Notes: Key present — reset no longer 503 “not connected.” Smoke POST `/api/hub-reset` returns **502** while From is `onboarding@resend.dev` and To is `membership@…` (Resend sandbox only delivers to the account owner until a sending domain is verified). Next: verify `unitedstrengthgym.com` in Resend, set `APPLY_FROM_EMAIL` to that domain, re-smoke.
- [ ] **Ops** — Mariana production framing (Nick) · open
- [ ] **Ops** — Ownership transfer push gate · open until transfer walkthrough done
- [ ] **Other** — QAVER production re-QA after Wave 1 deploy · open

