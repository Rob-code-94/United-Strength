# Wireframe — Navigation updates (Sep 2026)

**Status:** Wave 1 coded in simulator — hierarchy live in `LOCKED_NAV`; thin shells for By Design + Personal Training. Full interior polish after Todd reviews Google Doc tab.  
**Client brief:** [todd-navigation-updates-sep-2026.md](../client/todd-navigation-updates-sep-2026.md)  
**Google Doc:** [Navigation Updates — Sep 2026](https://docs.google.com/document/d/14dlLGcht1pqntmc_AbxH0zjxQjl1LbJMsAtYoqMwbgs/edit?tab=t.dzx30iv71vus)  
**Code today:** `LOCKED_NAV` + routes in `src/App.tsx` · V1 homepage locked (`direction-v1/*` unchanged)  
**Chrome:** No overlay/drawer redesign — hierarchy and routes only

---

## Target hierarchy

```
01 ABOUT
   Philosophy
   Founder Story
   Meet the Team
   The Space
   FAQ

02 TRAINING
   CLASSES
      BUILD
      BURN
      BALANCE (COMING SOON)
      MOVE THE CITY // RUN CLUB
   COACHING
      PERSONAL TRAINING

03 FOUNDATION (COMING SOON)

04 LONGEVITY (COMING SOON)

05 CULTURE
   BY DESIGN
   CULTIVATED
   ARCHIVE

06 MEMBERSHIP

07 SHOP → https://theunitedlimited.com (external)

08 START HERE
   Experience United
   Apply for Membership
```

---

## Proposed route map

| Nav label | Href | Notes |
|-----------|------|--------|
| Philosophy | `/about/philosophy` | Keep |
| Founder Story | `/about/founder` | Keep |
| Meet the Team | `/about/team` | Keep |
| The Space | `/about/the-space` | Keep — physical environment |
| FAQ | `/about/faq` | Keep |
| BUILD | `/training/classes/build` | Keep |
| BURN | `/training/classes/burn` | Keep |
| BALANCE | `/training/classes/balance` | Coming Soon |
| MOVE THE CITY // RUN CLUB | `/training/move-the-city` | **New home** under Training; migrate from `/culture/move-the-city` |
| PERSONAL TRAINING | `/training/personal` | **Single page** — 1:1 + private group explained in-page |
| Foundation | `/foundation` | Coming Soon (direct) |
| Longevity | `/longevity` | Coming Soon (direct) — no Reflection / Strength Standard / Trials leaves |
| BY DESIGN | `/culture/by-design` | **New page** |
| Cultivated | `/culture/cultivated` | Keep |
| Archive | `/culture/archive` | Keep |
| Membership | `/membership` | Keep |
| Shop | `https://theunitedlimited.com` | External; no US marketing page; not Coming Soon |
| Experience United | `/start-here/experience` | Keep |
| Apply for Membership | `/start-here/apply` | Keep |

### Retire from nav (when coded)

| Current | Action |
|---------|--------|
| `/training/personal/1-on-1` | Fold into `/training/personal` |
| `/training/personal/small-group` | Remove from nav (Coming Soon leaf today) |
| `/training/personal/private-group` | Fold into `/training/personal` |
| `/culture/move-the-city` | Redirect or retire → `/training/move-the-city` |
| Longevity children (`/longevity/reflection`, etc.) | Hide until dedicated Longevity page ships |

---

## Page notes

- **By Design ≠ The Space** — About/The Space = show the environment; Culture/By Design = intention (space, equipment, materials, aesthetic, hospitality, function).
- **Personal Training** — one intentional page covering how someone works with a coach (primarily 1:1 and private group), not three nav destinations.
- **MOVE THE CITY // RUN CLUB** — label clarifies the offering for newcomers; lives under Training Classes.
- **Shop** — link out only to United Limited; do not build a Shop shell on unitedstrengthgym.com.
- **Interaction** — keep current V1 drawer (~28%) / EF fullscreen overlay numbered accordion behavior.

---

## Implementation (Wave 1 done · polish parked)

Wave 1 shipped: `LOCKED_NAV`, Shop external, Move the City under Training, PT hub + By Design thin shells, legacy aliases. See `.cursor/fix-backlog.md` § Navigation updates — polish rows remain open pending Todd Doc feedback.

**Living status sheet:** Cursor canvas `sep-2026-nav-status` · **Wave 2 spec:** [nav-sep-2026-wave2-spec.md](nav-sep-2026-wave2-spec.md)
