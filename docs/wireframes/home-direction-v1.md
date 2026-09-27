# Wireframe — Home Direction V1 (Edits)

**Status:** Production default homepage · Sep 2026  
**Code default:** `workingDirection === "V1"` · EF remains frozen fallback ([home-direction-ef.md](home-direction-ef.md))  
**Version:** [v6-v1-edits.md](../brand/versions/v6-v1-edits.md)  
**PDF:** US EDITS FROM V1 (14 pages)  
**Code:** `ConceptV1View` · `src/components/direction-v1/*`

## Role

| | Direction EF | Direction V1 |
|---|---|---|
| Status | Frozen lookbook fallback (DEV) | **Default** public home |
| Canvas | Light / white-led | Dark-first charcoal + cream type |
| Opening | Vertical snap chapters | Horizontal 4-slide carousel |
| Pillars | Sticky stack | One slide · four vertical quarters |
| Nav | Fullscreen overlay | Left drawer (~28% desktop) |

## Composition

1. **OpeningCarousel** — full-viewport `snap-x` · slides 01–04  
   - **01–03:** horizontal only — parent vertical scroll locked  
   - **04:** unlocks vertical scroll into spine 02–07 → footer (`Scroll ↓` cue)  

### Vertical spine 02–07 (Part E · continuous magazine scroll)

Free vertical scroll (no snap). Adjacent chapters **overlap** via z-index ladder + negative top margins + bleed media (Space offset-plank DNA). Dark ↔ cream handoffs are soft edges, not sealed boxes.

| # | Section | Component | Canvas | Notes |
|---|---------|-----------|--------|-------|
| 02 | What We Believe | `BelieveBreak` | Cream `#F3EEE7` | Text-forward split; `OUR PHILOSOPHY →` |
| 03 | Training | `WhatWeOffer` | Dark `#181818` | Locked bento: Build · Burn · PT · Move the City |
| 04 | People | `PeopleChapter` | Cream | “People need people.” + circular U; `MEET THE TEAM →` |
| 05 | The Space | `SpaceExperience` | Cream | Staggered pair (floor larger, rack overlaps up-right); tucks slightly into People; type beside the pair; no page CTA |
| 06 | Membership | `MembershipPassport` | Charcoal | Cream ticket stub, 12px, seam ~70% with dotted tear and mask notches · hub fields · serial and chapter loop · **no home prices**; `EXPLORE MEMBERSHIP →` |
| 07 | Start Here | `StartHere` | Dark | Apple card strip (`carousel-08`): two tall rounded photo cards, type on the image, scroll-snap. Desktop cards share the row, capped at 640px and centered. Phone stays 280px with a peek. Experience circle white · Apply circle forest |

Then **V1SiteIndexFooter** — editorial 5-zone mock (Part G).

## Vertical spine polish (Odd Ritual)

Treat post–04 as a **lookbook issue after the opening filmstrip**: oversized mono chapter indices, hairline rules, photo as the plane, type as caption. Reject card chrome, equal tile mosaics, centered SaaS dual-button stacks. Continuous overlap — not isolated landing blocks.

| Section | DNA adapt | Locked cue |
|---------|-----------|------------|
| Believe | about-us-09 split | `OUR PHILOSOPHY →` |
| Training | services-02 → editorial bento (locked) | Build / Burn / PT / Move the City |
| People | about-us-09 + U watermark | `MEET THE TEAM →` |
| Space | gallery-01 → staggered overlapping pair | No CTA; slight tuck into People |
| Membership | cream ticket stub · notches · looping serial and chapter | `EXPLORE MEMBERSHIP →` · no prices |
| Start Here | carousel-08 Apple cards | Experience + Apply · no extra cards |

## Anti-patterns

- Editing `direction-ef/` home freeze files for V1 work  
- Pricing cards on homepage Membership (prices live on `/membership` only)  
- Sticky pillars on V1 home · SCROLL ↓ between opening slides **01–03** (cue only on 04)  
- Vertical page scroll escaping the carousel before slide 04  
- CLI-installing Space into `components/ui` (adapt DNA only)  
- ChatGPT left sticky 02–07 section rail (conflicts with V1 drawer)  
- Scroll-snap / scroll-jack between vertical chapters  
- Footer as dense sitemap / brand billboard

## Interior pages (Todd, Sep 2026)

V1 interiors live in `src/components/direction-v1/pages/`. `App.tsx` mounts them only when `workingDirection === "V1"`. The EF lookbook files stay frozen. Canvas is `#111111` / `#181818`, type is cream, and every page closes on `V1SiteIndexFooter`. Homepage prices stay on the ticketless spine. Public prices are only on `/membership`.

| Route | Component | Order |
|-------|-----------|--------|
| `/training/move-the-city` | `V1MoveTheCityPage` | Hero MOVE THE CITY // RUN CLUB → 01 Move Together → The pace is conversation → 02 The Runs → 03 The Route → 04 People → Run with us |
| `/about/founder` | `V1FounderPage` | Collage stand-in → Todd Johnson // Founder → 01 Story → mid photo → 02 What I Believe. No credentials. |
| `/start-here/apply` | `V1ApplyPage` | Apply hero → why → statement → four steps → Begin Application. Typeform URL empty, button does not leave the page. Forest only on that control. |
| `/membership` | `V1MembershipPage` | Four tiers with public prices → value → ecosystem → compare → how to join shows Experience United at **$75** → personal training link |
| `/training/classes/build` | `V1BuildPage` | BUILD / Strength for life → 01 → programming → Strength Standard → Experience Build → static week strip |
| `/about/the-space` | `V1SpacePage` | Existing hero line → six categories with yellow hover/tap note → quotes → Experience United |
| `/about/team` | `V1TeamPage` | Meet the Team hero only → portrait, role, intro, expandable bio. No Apply. |
| `/start-here/experience` | `V1ExperiencePage` | Hero → 5 / 14 / **$70** count-up → statement → four beats → expect → who → first visit → close |
| `/about/faq` | `V1FactsPage` | Questions, answered without the noise → four groups, 20 questions → one photo between Training and Membership |
| `/training/personal` | `V1PersonalTrainingPage` | Personal should be personal → approach → experience stats → two ways → programming → coach index → inquire mailto |
| `/culture/archive` | `V1ArchivePage` | Archive + lede → Archives / Authors → featured → issues 001–002 without PDFs → articles → subscribe with no success state |
| `/culture/cultivated` | `V1CultivatedPage` | Cultivated / Growth happens in the right room → 01 → 001 including seeds → system → 002 Join Us held |
| `/culture/by-design` | `V1ByDesignPage` | By Design / Nothing here is accidental → mixed stills → Built with intention. // By Design |

Burn, Balance, Philosophy, Privacy, and Terms are unchanged. Stand-in gym stills remain until Todd sends final media.
