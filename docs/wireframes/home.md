# Wireframe — Home

> **Superseded (Aug 2026):** Active homepage spec is **[home-direction-d.md](home-direction-d.md)** — Todd-approved Direction D (Odd Ritual–inspired two-act structure). This v4 wireframe is archived for reference only.

**Design direction (v4):** ALD brand-first scroll — Block 1 is aesthetic-only (Satoshi wordmark + place line + scroll cue). Full nav reveals after scroll. Reference: [Aimé Leon Dore](https://www.aimeleondore.com).

## Block 1 — Brand intro (100dvh, ALD pattern)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [≡]                                                                         │
│                                                                             │
│                    UNITED STRENGTH                                          │
│                    Columbus, OH                                             │
│                                                                             │
│              [ full-bleed cinematic image / video ]                         │
│                                                                             │
│                         Scroll                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

- **No CTAs** on block 1 — aesthetic first
- Wordmark: **Satoshi Bold**, uppercase, tracked, top-center (~14vh)
- Place line: small mono caption under wordmark
- **Scroll cue:** animated label + chevron at bottom; tappable (44px) → snaps to block 2; fades on scroll
- **Scroll snap:** homepage blocks 1–7 snap to section start on flick scroll (disabled when reduced motion preferred)
- Hamburger only until user scrolls past block 1
- Entire block optionally links to `/new-here` (scroll cue sits above link layer)
- Still image hero until client 4K video export

## Global header (after scroll past block 1)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]     Info ▾   Offerings ▾   Memberships   Buy   Reserve   NEW HERE   │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Info dropdown:** About · Team · Contact  
**Offerings dropdown:** Links to each `/offerings/[slug]`

---

## Block 2 — Who we are (two-column editorial)

- Story copy + facility image

## Block 3 — What we stand for

- Train · Recover · Community pillars

## Block 4 — Why we're different

- Club-not-gym contrast (image left)

## Block 5 — Explore the Ecosystem

- Offerings teaser (BUILD / BURN cards)

## Block 6 — Apply for Membership

- First CTA on page

## Block 7 — Start the Journey

- `/new-here` + inquiry

---

## Legacy v2 wireframe (superseded)

<details>
<summary>IronX stacked hero (v2 — archived)</summary>

## Section 1 — Hero (~90vh, IronX stacked)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [TRANSPARENT HEADER — white logo + links; solidifies on scroll]             │
│                                                                             │
│  ▶ Train with the best          │  Aside copy (top-right on desktop)       │
│                                                                             │
│  BUILD.                         │                                          │
│  BURN.                          │  [ Become a member → ]  Call us: …       │
│  BELONG.                        │                                          │
└─────────────────────────────────────────────────────────────────────────────┘
```

- Stacked lines: **BUILD. / BURN. / BELONG.**
- **One** hero CTA → `/memberships` + phone link (no second hero button)

</details>

---

## Legacy sections (v2 — removed from homepage)

## Section 2 — Feature grid (`#about`)

```
┌──────────────────┬──────────────────┬──────────────────┐
│  [ icon ]        │  [ icon ]        │  [ icon ]        │
│  Coaching        │  Equipment       │  Environment     │
│  2–3 lines       │  2–3 lines       │  2–3 lines       │
└──────────────────┴──────────────────┴──────────────────┘
```

---

## Section 4 — Stat band (inverted)

```
┌─────────┬─────────┬─────────┬─────────┐
│  4+     │   2     │   7     │   1     │
│ coaches │ classes │  days   │ location│
└─────────┴─────────┴─────────┴─────────┘
```

---

## Section 5 — Class promos (BUILD / BURN)

Two `ClassPromoCard` tiles → `/offerings/[slug]` · link to `/schedule`

---

## Section 6 — Marquee band

Scrolling uppercase line: “Where commitment meets results” (static when reduced motion)

---

## Section 7 — Numbered facility steps (01 / 02 / 03)

Alternating image + copy rows — strength, conditioning, community

---

## Section 8 — Coaches teaser

4-up grid → `/team`

---

## Section 9 — Pillars (Train · Recover · Community)

Bordered 3-column grid

---

## Section 10 — Club summary CTA band

Asymmetric headline + `Become a member` → `/memberships`

---

## Section 11 — Testimonials

Horizontal snap carousel + prev/next on desktop

---

## Section 12 — Community (#ColumbUS)

Partners list + contact link

---

## Section 13 — Schedule a visit

Tour CTA → `/contact#visit`

---

## Global footer

Unchanged — logo, address, segmented emails, social, legal, optional newsletter.

---

## Responsive behavior

| Breakpoint | Changes |
|------------|---------|
| Mobile | Hamburger nav; stats 2×2; classes stack; coaches 2-col; marquee static |
| Desktop | Full nav; 4-col stats; 2-col classes; 4-col coaches |

---

## Interactions

- Hero primary → `/memberships`; secondary → `/new-here`
- Journey CTA band → `/memberships`
- No autoplay audio on video; respect `prefers-reduced-motion`
- **Out of scope:** IronX pricing tables, shop modules
