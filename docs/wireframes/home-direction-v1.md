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
| 07 | Start Here | `StartHere` | Dark | cta-15 equality: two equal frames side by side from `md` · stacked on phone · type off the photos |

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
| Start Here | cta-15 → equal two-up frames | Experience + Apply |

## Anti-patterns

- Editing `direction-ef/` home freeze files for V1 work  
- Pricing cards on homepage Membership (prices live on `/membership` only)  
- Sticky pillars on V1 home · SCROLL ↓ between opening slides **01–03** (cue only on 04)  
- Vertical page scroll escaping the carousel before slide 04  
- CLI-installing Space into `components/ui` (adapt DNA only)  
- ChatGPT left sticky 02–07 section rail (conflicts with V1 drawer)  
- Scroll-snap / scroll-jack between vertical chapters  
- Footer as dense sitemap / brand billboard  
