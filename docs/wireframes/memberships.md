# Wireframe — Memberships

**URL:** `/memberships`  
**Sukha reference:** Application flow, no public monthly prices (default)

---

## Header / footer

Same global chrome as [home.md](home.md).

---

## Section 1 — Intro

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  H1: Memberships                                                            │
│                                                                             │
│  Intro: Holistic journey — training + recovery + community.                 │
│  Ready to join?                                                             │
│                                                                             │
│  [ Experience intro sessions first ───────────► ]  → /buy                   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Section 2 — How to join (3 steps)

```
┌──────────────────┬──────────────────┬──────────────────┐
│  1. EXPERIENCE   │  2. APPLY        │  3. REVIEW       │
│                  │                  │                  │
│  Complete intro  │  Submit          │  Team confirms   │
│  pack or credits │  application     │  availability    │
│  (link /buy)     │  (anchor #form)  │  & next steps    │
└──────────────────┴──────────────────┴──────────────────┘
```

---

## Section 3 — Tier cards (stacked, not priced by default)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  H2: Lifestyle membership                                                   │
│  Perks list (unlimited strength, open gym, yoga, restore, events…)         │
│  [ No price ] or [ Price — only if client Q12 = yes ]                       │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  H2: Restore membership (if applicable)                                   │
│  Perks list                                                                 │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  H2: Private training (if applicable)                                       │
│  Link to /offerings/private-training                                        │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Ethos alternative:** If client wants public pricing, replace with 3–4 column comparison cards + Individual/Couples toggle.

---

## Section 4 — Membership application form

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  H2: Membership application                          id="apply"             │
│                                                                             │
│  First name *          Last name *                                          │
│  Email *               Phone *                                              │
│                                                                             │
│  How did you hear about us? *  [ dropdown ]                                 │
│  Referral name (conditional)                                                │
│                                                                             │
│  Membership interest *     [ Lifestyle | Restore | PT | Unsure ]            │
│                                                                             │
│  Amenities excited about *  [ ] Group  [ ] Open gym  [ ] Restore  [ ] …    │
│                                                                             │
│  Why interested? *        [ textarea ]                                      │
│  Preferred training time * [ dropdown: early AM | mid AM | midday | eve ]   │
│                                                                             │
│  [ Submit application ]                                                     │
│                                                                             │
│  Fine print: waitlist message if applicable                                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Success state:** Thank you — we’ll be in touch. Link back to `/buy` for drop-ins while waiting.

---

## Section 5 — Tour

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [ Book a tour ───────────────────────────────► ]  Calendly embed or link   │
│  [                    optional facility photo ]                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Section 6 — Membership FAQ (accordion)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  ▼ What does membership include?                                            │
│  ▼ How do I apply?                                                          │
│  ▼ Is there a commitment?                                                   │
│  ▼ Freeze / cancel policy?                                                  │
│  ▼ Waitlist?                                                                │
│  (mirror Sukha FAQ membership section)                                      │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Sidebar / sticky CTA (mobile)

Optional bottom bar: **Apply** · **Buy intro pack**
