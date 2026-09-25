# Wireframe — About Section (Direction EF)

**Status:** Cohesive polish wave — shared chrome + **differentiated layout recipes**  
**Home parent:** [home-direction-ef.md](home-direction-ef.md) — **homepage frozen**  
**Frozen E About:** [about-direction-e.md](about-direction-e.md) — do not mutate for lookbook  
**IA source:** Locked ABOUT children from Todd nav  
**System:** skills `odd-ritual` + `odd-ritual-pages` (per-page layout recipes)  
**Copy module:** [`src/data/about-copy.ts`](../../src/data/about-copy.ts)  
**Lookbook primitives:** [`src/components/direction-ef/lookbook/`](../../src/components/direction-ef/lookbook/)  
**Foundation rule:** [`.cursor/rules/direction-ef-about-foundation.mdc`](../../.cursor/rules/direction-ef-about-foundation.mdc)

---

## Routes (EF component tree when `workingDirection === "EF"`)

| Route | Page | Layout recipe |
|---|---|---|
| `/about/philosophy` | Philosophy | Dark sequence — full-screen “Cutting Through the Noise” hero → 01 Philosophy / What We Believe → manifesto → five full-screen beliefs (vertical scroll moves sideways, one at a time) → sparse close. Footer is the V1 homepage footer (`V1SiteIndexFooter`). |
| `/about/founder` | Founder Story | **Story-led** — opener + text columns + pull-quote band + ruled credentials index (no image splits) |
| `/about/the-space` | The Space | **Photo-first** — light opener → gallery dominates → short visit band |
| `/about/team` | Meet the Team | **Alternating portraits** — flip left/right rows; bio expand; no Apply CTA |
| `/about/faq` | FAQ | **Full-width index** — cream section jump band + numbered accordion (faq-02 feel) |

Shared: `LookbookAboutPageShell` + `LookbookPageOpener` + `SiteIndexFooter`. **No** `DirectionEPageShell`. Pages must feel related, not identical.

Philosophy is the exception: dark canvas, no typographic opener, and the V1 homepage footer. Other interiors keep the cream `SiteIndexFooter`.

---

## Motion and separation

| Primitive | Use |
|---|---|
| `LookbookAboutPageShell` | Page wrapper + `SiteIndexFooter` |
| `LookbookPageOpener` | Typographic opener + back row (density varies) |
| `LookbookEditorialChapter` | Philosophy image splits only |
| `LookbookManifestoSection` / `LookbookManifestoSplit` | Philosophy manifesto |
| `LookbookGallerySwipe` | Space mosaic — primary visual plane |
| `LookbookTeamPortrait` | Team B&W + grain frames |
| `LookbookScrollReveal` / `LookbookStaggerBody` | Fade-up / stagger body |
| `LookbookNextCue` | Optional between major beats |

**Separation:** hairline dividers only — no card borders.  
**Ease:** `LOOKBOOK_EASE` `[0.21, 0.47, 0.32, 0.98]` · honor `prefers-reduced-motion`.

---

## Copy sources

| Page | Primary source | Notes |
|---|---|---|
| Philosophy | `US EDITORIAL Post/IMG_6408–6409` (Archive Issue 001) | No live `/philosophy` |
| Founder | unitedstrengthgym.com/johnson + editorial | Bio + credentials rows + advice; no “Book assessment” |
| Team | unitedstrengthgym.com/our-team + coach slugs | Todd/Jenna headshots; Jason/Kara gym placeholders |
| Space | Homepage + member testimonials | `gymPhotos` gallery |
| FAQ | [faq.md](faq.md) + site facts | **Draft** — pending Todd review; no public pricing |

---

## Footer / legal

`SiteIndexFooter`: segmented emails (info / membership / training), address `237 Cleveland Ave · 43215`, © United Strength Club, Designed and Made Locally. No Buy / Reserve / Book. No beta direction labels.

---

## Freeze guard

- Homepage: [direction-ef-home-frozen.mdc](../../.cursor/rules/direction-ef-home-frozen.mdc)  
- Lookbook About work only in `direction-ef/about/`, `direction-ef/lookbook/`, `about-copy.ts`  
- Default E About (`direction-e/about`) stays frozen

---

## Open items

- **Training (02)** shipped — see [training-direction-ef.md](training-direction-ef.md); Balance / Small Group / Private Group drafts pending Todd  
- **Live parity wave** shipped — Experience, Apply, Membership, Contact, Move the City, Archive — see [live-site-parity-wave.md](../client/live-site-parity-wave.md)  
- Culture trio shipped (Move the City · Cultivated · Archive) — see `direction-ef/culture/`  
- Still toast (Todd extras): Foundation, Longevity×3  
- FAQ draft answers pending Todd; Jason/Kara headshots pending
