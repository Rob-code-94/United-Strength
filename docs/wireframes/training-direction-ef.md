# Wireframe — Training Section (Direction EF)

**Status:** Overlay **02 TRAINING** — EF lookbook interiors  
**System:** skills `odd-ritual` + `odd-ritual-pages` (per-page layout recipes)  
**Home parent:** [home-direction-ef.md](home-direction-ef.md) — homepage **frozen**  
**About sibling:** [about-direction-ef.md](about-direction-ef.md)  
**Copy module:** [`src/data/training-copy.ts`](../../src/data/training-copy.ts)  
**Foundation rule:** [`.cursor/rules/direction-ef-training-foundation.mdc`](../../.cursor/rules/direction-ef-training-foundation.mdc)

---

## Routes (`workingDirection === "EF"`)

| Route | Page | Layout recipe |
|---|---|---|
| `/training/classes/build` | BUILD | Opener + photo split + body + week-strip schedule → Burn |
| `/training/classes/burn` | BURN | Alternate canvas/photo + week-strip schedule → Balance |
| `/training/classes/balance` | BALANCE | Coming Soon sparse manifesto — no schedule |
| `/training/personal/1-on-1` | 1-on-1 Coaching | Story-led + Team cue + inquire / Start Here |
| `/training/personal/small-group` | Small Group | Ruled format index (draft) |
| `/training/personal/private-group` | Private Group | Inquiry band — no prices (draft) |

Shared: `LookbookAboutPageShell` + `LookbookPageOpener` + `SiteIndexFooter`.

---

## Copy sources

| Page | Source | Notes |
|---|---|---|
| Build | unitedstrengthgym.com/classes/build | Full week schedule |
| Burn | unitedstrengthgym.com/classes/burn | Mon–Thu only as published |
| Balance | — | Coming Soon draft |
| Personal Training | /personal-training | Hub lede + coach cues → Team |
| Small / Private Group | — | Draft pending Todd |

**Strip:** “Sign up for classes” Triib chrome → **Free Trial Class** (`/start-here/experience`) + Apply. Same live function, Odd Ritual routing.

---

## Anti-patterns

- Triib schedule embed on marketing Training pages
- Public Buy / Reserve / Book / pricing
- Cloning Philosophy chapter stack onto every leaf
- Mutating `direction-e/**` or frozen homepage

---

## Open items

- Todd sign-off on Balance / Small Group / Private Group draft copy
- Confirm Burn Fri–Sun times if they exist off-site
