# Spec — Todd Sep 2026 nav (Wave 1 done · Wave 2 polish)

**Type:** `enhancement` · UI nav · EF interiors · docs  
**Surfaces:** UI (drawer/overlay labels + interior shells) · docs/backlog  
**Companion sheet:** Cursor canvas `sep-2026-nav-status.canvas.tsx`  
**Prior plan (executed):** `.cursor/plans/v1_nav_integration_41b49d16.plan.md`  
**Do not edit that plan file** — this doc is the living status + Wave 2 spec.

Google Doc (Todd review): [Navigation Updates — Sep 2026](https://docs.google.com/document/d/14dlLGcht1pqntmc_AbxH0zjxQjl1LbJMsAtYoqMwbgs/edit?tab=t.dzx30iv71vus)

---

## 1. Intent and success

- **Prompt (restated):** Spec + status sheet for Todd Sep 2026 navigation — check off Wave 1 already shipped; ticket remaining polish without guessing; keep V1 homepage locked.
- **Type / surfaces:** enhancement · UI · docs (no API/auth)
- **Success:**
  - Status sheet shows Wave 1 Done vs Wave 2 Parked/Open
  - Wave 2 tickets are implementable after Todd Doc feedback
  - V1 home (`ConceptV1View` / `direction-v1/*`) stays frozen
  - Drawer/overlay chrome is not redesigned
- **Out of scope:** Drawer redesign · Space CLI install · mutating frozen E/EF homepage composition · Mariana embeds · public Buy/Reserve/Book in nav

---

## 2. Assumptions and confidence

| Assumption | Why | If wrong | Confidence |
|---|---|---|---|
| Wave 1 already coded in repo | `[Code]` LOCKED_NAV, PersonalTrainingPage, ByDesignPage, routes | Re-open Wave 1 tickets | high |
| Todd has not signed off on Doc tab | User assumption from prior plan | May revert labels; keep Wave 2 thin until confirmed | high |
| V1 homepage stays locked | Prior plan + ship audit | No `direction-v1` edits in Wave 2 either | high |
| Shop label stays **Shop** until Todd says otherwise | Brief §07 | One-line LOCKED_NAV label swap | medium |

**Overall confidence:** high for Wave 1 audit; medium for Wave 2 copy (awaiting Todd).

---

## 3. Current context

### Already exists (Wave 1 — Done)

| Item | Evidence |
|------|----------|
| Todd `LOCKED_NAV` tree | `[Code]` `src/App.tsx` `LOCKED_NAV` |
| Shop → `https://theunitedlimited.com` external | `[Code]` Shop `kind: "direct"` · `triggerNavigation` opens http(s) |
| Longevity single Coming Soon | `[Code]` Longevity `kind: "direct"` + `comingSoon` |
| Move the City under Training | `[Code]` `/training/move-the-city` · copy `MOVE_THE_CITY` headline `// Run Club` |
| Culture Move the City alias | `[Code]` normalize `/culture/move-the-city` → training path |
| Personal Training hub | `[Code]` `PersonalTrainingPage.tsx` · aliases 1-on-1 / small / private |
| By Design shell | `[Code]` `ByDesignPage.tsx` · `BY_DESIGN` in `culture-copy.ts` |
| Pillars href fixes | `[Code]` EF/E Pillars · ConceptD · direction-f data |
| Backlog / wireframe status | `[Docs]` `.cursor/fix-backlog.md` · `navigation-updates-sep-2026.md` |

### Reuse vs new (Wave 2)

- **Reuse:** Lookbook shells, Cultivated DNA, Move the City photo-first page, `gymPhotos`
- **Extend:** By Design + Personal Training copy/media depth only
- **Do not touch:** `direction-v1/*` · drawer/overlay chrome · frozen EF home composition

### Constraints

- `[Skill]` odd-ritual-pages · odd-ritual · united-strength-brand · shadcn-space-pro-design (adapt only)
- `[Rule]` todd-nav-preferences · mobile-first · no public Buy/Reserve/Book  
- Adapt Space DNA only — **no** Space CLI install

### Page coverage matrix (odd-ritual-pages · Sep 2026)

Status: **Covered** = recipe live + polish N/A · **Shell** = Wave 1 thin · **Parked** = future page · **N/A** = no interior

| Doc page | Route | Recipe | Space DNA (adapt) | Status |
|----------|-------|--------|-------------------|--------|
| Philosophy | `/about/philosophy` | Editorial chapters | `about-us-09` / `13` | Covered |
| Founder Story | `/about/founder` | Story-led | `about-us-13` | Covered |
| Meet the Team | `/about/team` | Alternating portraits | `team-03` | Covered |
| The Space | `/about/the-space` | Photo-first | `gallery-01` | Covered |
| FAQ | `/about/faq` | Full-width index | `faq-02` | Covered |
| BUILD | `/training/classes/build` | Class leaf | editorial + custom | Covered |
| BURN | `/training/classes/burn` | Class leaf | editorial + custom | Covered |
| BALANCE | `/training/classes/balance` | Sparse manifesto (CS) | manifesto DNA | Covered CS · full page Parked (NAV-104) |
| Move the City // Run Club | `/training/move-the-city` | Photo-first community | `gallery-01` | Covered |
| Personal Training | `/training/personal` | Story-led hub | `about-us-13` + `cta-08` | Shell · polish NAV-102 |
| Foundation | `/foundation` | Sparse manifesto (future) | `about-us-13` | Parked NAV-105 |
| Longevity | `/longevity` | Sparse manifesto (future) | `about-us-13` | Parked NAV-106 |
| By Design | `/culture/by-design` | Sparse manifesto | `about-us-13` | Shell · polish NAV-101 |
| Cultivated | `/culture/cultivated` | Sparse manifesto | `about-us-13` | Covered |
| Archive | `/culture/archive` | Off Centered Stack | Act2 photo-deck | Covered |
| Membership | `/membership` | Story-led belonging | `about-us-13` | Covered |
| Experience United | `/start-here/experience` | Inquiry / Start Here | `cta-08` | Covered |
| Apply for Membership | `/start-here/apply` | Form / apply | form + `cta-08` | Covered |
| Shop | `https://theunitedlimited.com` | — | — | N/A (external) · label NAV-103 |

**Matrix source:** `.cursor/skills/odd-ritual-pages/reference.md` (synced 09/14/2026).

### Related older sheet

- Canvas `old-vs-new-ia.canvas.tsx` = Aug 2026 live vs locked IA — **stale for Sep nav**. Prefer `fix-backlog.canvas.tsx` + `sep-2026-nav-status.canvas.tsx`.

---

## 4. Scenario matrix

| ID | Result | Spec note |
|---|---|---|
| U-happy | in-scope | Drawer → Todd labels → correct page / Shop external |
| U-invalid | N/A | No form input |
| U-partial | N/A | Static SPA nav |
| U-repeat | in-scope | Re-open same leaf idempotent |
| U-denied | N/A | Public marketing; no auth |
| U-empty | N/A | No empty data states in Wave 2 polish (editorial pages) |
| U-fail | in-scope | Old aliases must not dead-end (already Wave 1) |
| U-undo | open | If Todd rejects nav → revert LOCKED_NAV; shells stay thin |
| U-compat | in-scope | V1 home + About 5 pages unchanged |
| U-done | in-scope | Canvas + backlog checkmarks; manual drawer QA |
| UI-load | N/A | No async page load beyond SPA |
| UI-error | N/A | No network-bound interiors |
| UI-success | in-scope | Land on shell; inquire CTAs work |
| UI-mobile | in-scope | Drawer 44px; shells readable at 375 |
| UI-desktop | in-scope | Same capabilities |
| UI-a11y | in-scope | Coming Soon non-navigating; focus on links |
| UI-concurrent | N/A | No multi-tab write |
| UI-long | N/A | Short editorial pages |
| API-* | N/A | Static SPA |
| INT-* | N/A | Shop is plain external link (no API) |
| JOB-* | N/A | — |
| TEN-* | N/A | — |
| RISK-pii / abuse / rollback | open | Rollback = restore prior LOCKED_NAV if Todd rejects |

**Open questions**

1. Shop label: **Shop** vs **United Limited**?
2. Does Todd approve Move the City under Training + // Run Club wording?
3. By Design / PT copy depth after Doc review?

---

## 5. Sectioned plan

### S0 — Wave 1 audit (complete)

- **Purpose:** Confirm shipped nav + shells; freeze V1 home
- **In / out:** Audit only · no new product code in this pass
- **Scenarios:** U-done · U-compat
- **Likely files:** `App.tsx` · backlog · wireframe · canvas
- **Section done:**
  - [x] LOCKED_NAV matches Todd tree
  - [x] New routes + aliases resolve
  - [x] Status sheet + backlog checked
- **Confidence:** high

### S1 — Wave 2 By Design polish (parked)

- **Purpose:** Full Culture/By Design interior after Todd feedback
- **In / out:** Copy + media + section rhythm · out: The Space redesign
- **Scenarios:** U-happy · UI-mobile · UI-a11y · U-compat
- **Likely files:** `ByDesignPage.tsx` · `culture-copy.ts` · gym assets
- **Section done:** Client-approved copy; intention ≠ environment clear
- **Confidence:** medium (awaiting Todd)

### S2 — Wave 2 Personal Training polish (parked)

- **Purpose:** Deepen hub (1:1 + private group) without re-splitting nav
- **In / out:** Editorial + inquire · out: prices · separate nav leaves
- **Scenarios:** U-happy · UI-mobile · U-compat
- **Likely files:** `PersonalTrainingPage.tsx` · `training-copy.ts`
- **Section done:** Single leaf still; no prices; aliases still work
- **Confidence:** medium

### S3 — Label / Doc confirmation (open)

- **Purpose:** Lock Shop label + any Todd Doc deltas into LOCKED_NAV
- **In / out:** Label/href tweaks only
- **Scenarios:** U-undo · U-done
- **Likely files:** `App.tsx` LOCKED_NAV · client brief
- **Section done:** Todd-confirmed labels match drawer
- **Confidence:** medium

---

## 6. Ticket map

```
Wave 1 (DONE): NAV-001 … NAV-006
Wave 2 polish: NAV-101 (By Design) · NAV-102 (PT) · NAV-103 (Shop label)
Wave 3 parked: NAV-104 (Balance full) · NAV-105 (Foundation) · NAV-106 (Longevity)
Docs (DONE):   odd-ritual-pages matrix sync 09/14/2026
Critical path: Todd Doc feedback → NAV-103 (if needed) → NAV-101 ∥ NAV-102
```

### NAV-001 — LOCKED_NAV + Shop URL

- **Section:** S0 · **Type:** enhancement · **Status:** Done
- **User value:** Drawer matches Todd Sep tree; Shop is live external
- **Scope:** LOCKED_NAV rewrite · Shop URL · Longevity direct CS · exclude V1 home
- **Frontend:** Drawer/overlay consume LOCKED_NAV · mobile 44px unchanged
- **Backend / Data / Permissions:** N/A
- **Dependencies:** none
- **Scenarios:** U-happy · U-compat · UI-a11y
- **Acceptance:**
  - [x] Tree matches brief
  - [x] Shop opens theunitedlimited.com (not Coming Soon)
- **Confidence:** high

### NAV-002 — Routes + aliases + COMING_SOON

- **Section:** S0 · **Type:** enhancement · **Status:** Done
- **User value:** New paths work; old leaves don’t dead-end
- **Scope:** allowlist + switch + alias normalize · exclude drawer chrome
- **Frontend:** route switch in `App.tsx`
- **Dependencies:** NAV-001
- **Scenarios:** U-fail · U-repeat · U-happy
- **Acceptance:**
  - [x] `/training/move-the-city` · `/training/personal` · `/culture/by-design`
  - [x] Old culture/PT paths alias to hubs
- **Confidence:** high

### NAV-003 — Move the City under Training

- **Section:** S0 · **Type:** enhancement · **Status:** Done
- **User value:** Run Club discoverable under Classes
- **Scope:** title/metadata · route under Training · pillars hrefs
- **Dependencies:** NAV-002
- **Scenarios:** U-happy · U-compat
- **Acceptance:**
  - [x] Label MOVE THE CITY // RUN CLUB
  - [x] metadata Training · pillars → `/training/move-the-city`
- **Confidence:** high

### NAV-004 — Personal Training hub shell

- **Section:** S0 · **Type:** enhancement · **Status:** Done (thin)
- **User value:** One coaching destination; 1:1 + private group in-page
- **Scope:** thin story-led shell · no prices · no re-split nav
- **Dependencies:** NAV-002
- **Scenarios:** U-happy · UI-mobile
- **Acceptance:**
  - [x] `/training/personal` hub live
  - [x] Legacy PT children alias to hub
- **Confidence:** high

### NAV-005 — By Design shell

- **Section:** S0 · **Type:** enhancement · **Status:** Done (thin)
- **User value:** Culture leaf for intention behind experience
- **Scope:** Cultivated DNA opener/manifesto/index · gymPhotos only
- **Dependencies:** NAV-002
- **Scenarios:** U-happy · U-compat
- **Acceptance:**
  - [x] `/culture/by-design` reachable from Culture
  - [x] Contrast with About/The Space clear in copy
- **Confidence:** high

### NAV-006 — Backlog + wireframe status

- **Section:** S0 · **Type:** docs · **Status:** Done
- **User value:** Team knows Wave 1 done / polish parked
- **Dependencies:** NAV-001…005
- **Acceptance:**
  - [x] fix-backlog Wave 1 checked
  - [x] wireframe status Wave 1 coded
- **Confidence:** high

### NAV-101 — By Design full interior polish

- **Section:** S1 · **Type:** enhancement · **Status:** Parked
- **User value:** Todd-approved Culture story for intention/design system
- **Recipe:** Sparse manifesto (Cultivated twin) · `[Skill]` odd-ritual-pages
- **Space DNA:** `about-us-13` — **adapt only**, no CLI install
- **Scope:** deepen copy + optional photo chapters · exclude The Space rewrite · exclude Space CLI
- **Frontend:** mobile-first Lookbook; loading N/A; empty N/A; success = scrollable editorial
- **Backend / Data / Permissions:** N/A
- **Dependencies:** Todd Doc feedback (soft) · NAV-005 done
- **Scenarios covered:** U-happy · UI-mobile · UI-desktop · UI-a11y · U-compat
- **Acceptance criteria:**
  - [ ] Copy reviewed against Todd Doc / client notes
  - [ ] Intention ≠ environment still explicit
  - [ ] Tier 2 stays Cultivated-twin (not Philosophy full stack)
  - [ ] No public prices / Buy / Reserve / Book
  - [ ] Mobile 375 readable; 44px CTAs if any
- **Test plan:**
  - [ ] automated — `tsc --noEmit`
  - [ ] manual — Culture → By Design on phone + desktop; compare to The Space
- **Risks/notes:** Don’t invent brand claims Todd didn’t approve
- **Confidence:** medium — awaiting Todd

### NAV-102 — Personal Training full polish

- **Section:** S2 · **Type:** enhancement · **Status:** Parked
- **User value:** Credible single PT page without three nav destinations
- **Recipe:** Story-led hub · `[Skill]` odd-ritual-pages
- **Space DNA:** `about-us-13` + `cta-08` inquire — **adapt only**
- **Scope:** deepen 1:1 + private group · coaches · inquire · out: prices · re-splitting leaves
- **Frontend:** story-led; mobile first
- **Dependencies:** Todd Doc feedback (soft) · NAV-004 done
- **Scenarios covered:** U-happy · UI-mobile · U-compat · U-fail (aliases still)
- **Acceptance criteria:**
  - [ ] Still one nav leaf `/training/personal`
  - [ ] 1:1 + private group both explained
  - [ ] No prices; inquire / Start Here CTAs only
  - [ ] Aliases still resolve to hub
- **Test plan:**
  - [ ] automated — `tsc --noEmit`
  - [ ] manual — Coaching → Personal Training; hit old `/training/personal/1-on-1`
- **Risks/notes:** Don’t resurrect Small Group as nav leaf unless Todd asks
- **Confidence:** medium

### NAV-103 — Confirm Shop label with Todd

- **Section:** S3 · **Type:** docs / enhancement · **Status:** Open
- **User value:** Nav language matches Todd preference
- **Scope:** LOCKED_NAV Shop title/label only · URL stays theunitedlimited.com
- **Recipe / DNA:** N/A (external)
- **Dependencies:** Todd answer
- **Scenarios covered:** U-done · U-undo
- **Acceptance criteria:**
  - [ ] Todd confirms Shop vs United Limited
  - [ ] LOCKED_NAV updated if needed
- **Test plan:**
  - [ ] manual — open Shop from V1 drawer; external tab
- **Confidence:** medium

### NAV-104 — BALANCE dedicated class page

- **Section:** Wave 3 · **Type:** enhancement · **Status:** Parked
- **User value:** Third class lane beyond Coming Soon toast
- **Recipe:** Sparse manifesto → class leaf when schedule ready · DNA manifesto → editorial
- **Scope:** Full Balance interior; keep CS until content ready · no schedule until approved
- **Dependencies:** Coaching team copy · Todd
- **Acceptance criteria:**
  - [ ] Nav leaf no longer Coming Soon (or still CS until launch)
  - [ ] Matches Build/Burn quality bar without inventing schedule
- **Confidence:** low — no Todd copy yet

### NAV-105 — Foundation dedicated page

- **Section:** Wave 3 · **Type:** enhancement · **Status:** Parked
- **User value:** Doc — eventually its own page
- **Recipe:** Sparse manifesto · DNA `about-us-13` (adapt)
- **Scope:** Replace CS toast with Lookbook page · out: homepage pillars composition edits
- **Dependencies:** Todd content
- **Acceptance criteria:**
  - [ ] `/foundation` renders Lookbook shell
  - [ ] No Buy / Reserve / Book
- **Confidence:** low

### NAV-106 — Longevity dedicated page

- **Section:** Wave 3 · **Type:** enhancement · **Status:** Parked
- **User value:** Doc — eventually its own page (single leaf, not three children)
- **Recipe:** Sparse manifesto · DNA `about-us-13` (adapt)
- **Scope:** Single page under Longevity · out: re-adding Reflection / Trials nav children
- **Dependencies:** Todd content
- **Acceptance criteria:**
  - [ ] `/longevity` renders Lookbook shell
  - [ ] Remains one nav entry
- **Confidence:** low

---

## 7. Implementation sequence

- **Wave 1 (MVP):** NAV-001 → NAV-002 → NAV-003 ∥ NAV-004 ∥ NAV-005 → NAV-006 — **complete**
- **Docs:** odd-ritual-pages matrix sync — **complete** 09/14/2026
- **Wave 2:** Todd Doc feedback → NAV-103 (if label change) → NAV-101 ∥ NAV-102
- **Wave 3:** NAV-104 · NAV-105 · NAV-106 when Todd has content
- **Parallel:** NAV-101 ∥ NAV-102 after Todd
- **Critical path:** Todd review → polish tickets

---

## 8. Definition of done

### Wave 1 (complete)

- [x] Nav matches Todd Sep tree in V1 drawer
- [x] Shop external works; no Shop marketing page
- [x] New/aliased routes resolve
- [x] V1 homepage unchanged
- [x] Backlog reflects Wave 1 done; polish parked

### Recipe coverage (complete)

- [x] Every Doc marketing page in odd-ritual-pages matrix with recipe + DNA
- [x] Sep routes: `/training/move-the-city` · `/training/personal` · `/culture/by-design` · journey three
- [x] PT children + old culture MTC marked aliases
- [x] Explicit: no Space CLI; adapt DNA only

### Wave 2 (not started)

- [ ] Todd Doc feedback incorporated
- [ ] NAV-101 / NAV-102 acceptance met
- [ ] NAV-103 resolved
- [ ] No V1 home regressions
- [ ] Mobile QA on By Design + PT

---

## 9. Gaps and follow-ups

- Full By Design / PT content after Todd reviews Doc tab (NAV-101 / NAV-102)
- Confirm Shop label with Todd (NAV-103)
- Balance / Foundation / Longevity full pages (NAV-104–106)
- Optional: update `old-vs-new-ia.canvas.tsx` so it doesn’t contradict Sep nav
- Suggested next: implement Wave 2 after Todd · or open Plan mode for polish only

---

## Status checklist (sheet mirror)

| # | Item | Status |
|---|------|--------|
| 1 | LOCKED_NAV Sep tree | Done |
| 2 | Shop external | Done |
| 3 | Longevity single CS | Done |
| 4 | Move the City // Run Club under Training | Done |
| 5 | Personal Training hub + aliases | Done |
| 6 | By Design shell | Done |
| 7 | Pillars href → `/training/move-the-city` | Done |
| 8 | V1 homepage lock honored | Done |
| 9 | Backlog + wireframe docs | Done |
| 10 | odd-ritual-pages matrix Sep sync | Done |
| 11 | By Design full polish | Parked |
| 12 | PT full polish | Parked |
| 13 | Shop label confirm | Open |
| 14 | Balance / Foundation / Longevity full pages | Parked |
