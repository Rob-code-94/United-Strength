# Live-site parity wave

**Status:** Shipped (Aug 2026)  
**Goal:** Cover every current [unitedstrengthgym.com](https://unitedstrengthgym.com) marketing surface in the EF beta **before** building Todd-only extras.  
**Code:** `src/components/direction-ef/journey/` · `src/components/direction-ef/culture/` · `src/data/journey-copy.ts` · `src/data/culture-copy.ts` · `PARITY_ROUTES` in `App.tsx`

---

## Already shipped (live covered)

| Live | New route | Notes |
|------|-----------|--------|
| Home | `/` | EF lookbook — **frozen** |
| Build | `/training/classes/build` | Schedule + Free Trial CTA |
| Burn | `/training/classes/burn` | Schedule + Free Trial CTA |
| Personal Training | `/training/personal/*` | Expanded to 3 leaves vs live hub |
| Our Team / coaches | `/about/team` | |
| Todd bio | `/about/founder` | ≈ `/johnson` |
| Facility | `/about/the-space` | |

---

## This wave (build)

| Live | New route | Priority | Status |
|------|-----------|----------|--------|
| Free trial / tour | `/start-here/experience` | P0 | Done |
| Become a member | `/start-here/apply` | P0 | Done |
| Pricing (no public $) | `/membership` | P0 | Done |
| Contact | `/contact` | P0 | Done — footer only (not overlay) |
| Our Partners / #ColumbUS | `/culture/move-the-city` | P1 | Done — photo-first + partners index |
| Blog | `/culture/archive` | P1 | Done — cream jump + ruled index |

### Culture wave (odd-ritual-pages recipes)

| Overlay leaf | Route | Recipe | Status |
|--------------|-------|--------|--------|
| Move the City | `/culture/move-the-city` | Photo-first community | Done |
| Cultivated | `/culture/cultivated` | Sparse manifesto (draft) | Done |
| Archive | `/culture/archive` | Full-width index | Done |

---

## Defer (Todd extras — wave 2)

| Overlay leaf | Route | Why deferred |
|--------------|-------|--------------|
| Foundation | `/foundation` | No live page |
| Reflection / Strength Standard / Trials | `/longevity/*` | No live pages |
| Balance (full) | `/training/classes/balance` | Coming Soon stub only |
| Small Group / Private Group | `/training/personal/small-group` · `private-group` | Overlay `comingSoon` — draft pages remain in repo |
| Shop | United Limited | External — no build |

Philosophy + FAQ are already shipped (Todd-new, not live twins) — leave as-is.

---

## Rules

- Keep full Todd Aug 2026 overlay labels — do not slim without client confirm
- No Buy / Reserve / Book in marketing chrome
- No public monthly prices on Membership
- Free Trial → Experience United; Become member → Apply
- Home frozen
- Studio chrome (BETA / E+F / Archive A&C / Specs / desk footer / mock toasts) = `import.meta.env.DEV` only (`src/lib/dev-chrome.ts`). Vercel never shows it.
- Draft overlay leaves = `comingSoon: true` in `LOCKED_NAV` (grayed, non-clickable). Small Group + Private Group are Coming Soon; Cultivated stays live.
- No client-visible `draftNote` banners on live pages (Todd V1 delivery).
- Mariana / Xplor embeds = **after UI approval** — see [docs/integrations/mariana-tek-checklist.md](../integrations/mariana-tek-checklist.md).
- Privacy `/privacy` · Terms `/terms` lookbook shells live in footer (Social column).
## Done when

- [x] Checklist lists every live URL with shipped / this-wave / defer
- [x] Six new routes open EF pages (no toast)
- [x] Footer address → Contact
- [x] Free Trial CTAs → Experience
- [x] `tsc --noEmit`
