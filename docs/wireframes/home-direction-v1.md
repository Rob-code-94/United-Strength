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
   - **04:** unlocks vertical scroll into Offer → … → footer (`Scroll ↓` cue)  
2. **WhatWeOffer** — horizontal lookbook lanes (filmstrip gateways · mono indices · minimal type)  
3. **SpaceExperience** — cream `#F3EEE7` chapter break · layered offset horizontal planks · `EXPLORE THE SPACE →`  
4. **MembershipPassport** — charcoal archival ledger (perforation + hairlines · `PassportDigitReel`) · `EXPLORE MEMBERSHIP →`  
5. **StartHere** — statement only · `YOUR NEXT CHAPTER STARTS HERE.` · two CTAs left-stacked (Experience outline · Apply `#0A3C2E`)  
6. **V1SiteIndexFooter** — quiet closing colophon (not a sitemap)  
   - **EXPLORE** · About · Training · Membership · The Space  
   - **JOIN** · Experience United · Apply for Membership  
   - **CONNECT** · Instagram · Contact · Columbus, Ohio  
   - Bottom · exact Todd verbatim: `© UNITED STRENGTH CLUB` · `PRIVACY` · `TERMS` (no year / no “All rights reserved” filler)  

## Vertical spine polish (Odd Ritual)

Treat post–04 as a **lookbook issue after the opening filmstrip**: oversized mono chapter indices, hairline rules, photo as the plane, type as caption. Reject card chrome, equal tile mosaics, centered SaaS dual-button stacks.

| Section | DNA adapt | Locked cue |
|---------|-----------|------------|
| Offer | services-02 → horizontal lanes | Build / Burn / The Space |
| Space | gallery-01 → layered planks | `EXPLORE THE SPACE →` |
| Membership | cta-08 + archival ledger | `EXPLORE MEMBERSHIP →` |
| Start Here | cta-15 stripped | Experience + Apply only |

## Anti-patterns

- Editing `direction-ef/` home freeze files for V1 work  
- Pricing cards · Begin Trial · Belonging-as-nav  
- Sticky pillars on V1 home · SCROLL ↓ between opening slides **01–03** (cue only on 04)  
- Vertical page scroll escaping the carousel before slide 04  
- CLI-installing Space into `components/ui` (adapt DNA only)  
- Footer as dense sitemap / brand billboard (use quiet colophon instead)  
