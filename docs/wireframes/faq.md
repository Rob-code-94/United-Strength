# Wireframe — FAQ

**URL:** `/faq`  
**Sukha reference:** Horizontal section nav + accordion groups

---

## Header / footer

Same global chrome as [home.md](home.md).

---

## Section 1 — Page title

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  H1: You have questions, we have answers                                    │
│                                                                             │
│  [ COME ON THE JOURNEY ]  [ OFFERINGS ]  [ MEMBERSHIPS ]  [ AMENITIES ]     │
│       #general            #offerings      #memberships     #amenities       │
└─────────────────────────────────────────────────────────────────────────────┘
```

Sticky sub-nav on scroll (optional) — jumps to anchor sections.

---

## Section 2 — General / New here (`#general`)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  H2: Come on the journey                                                    │
│                                                                             │
│  ▼ What should I expect in my first session?                                │
│  ▼ What intro packages are available?                                       │
│  ▼ What is a credit / what does it include?                                 │
│  ▼ Waitlist behavior?                                                       │
│  ▼ Cancellation policy?                                                     │
│  ▼ Medical / pregnancy guidance?                                            │
└─────────────────────────────────────────────────────────────────────────────┘
```

**Sukha defaults to document:** 15 min early; 3-pack vs single credit; $20 / 8hr cancel; physician consult recommended.

---

## Section 3 — Offerings (`#offerings`)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  H2: Offerings                                                              │
│                                                                             │
│  ▼ Group training capacity and format?                                      │
│  ▼ Open gym — who can attend?                                             │
│  ▼ Restore — coach-led vs self-led?                                       │
│  ▼ Yoga / run club / outdoors?                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Section 4 — Memberships (`#memberships`)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  H2: Memberships                                                            │
│                                                                             │
│  ▼ What does lifestyle membership include?                                  │
│  ▼ How do I get a membership?                                               │
│  ▼ Why 3 intro sessions first?                                              │
│  ▼ Why an application?                                                      │
│  ▼ Commitment length?                                                       │
│  ▼ Startup fees?                                                            │
│  ▼ Freeze rules?                                                            │
│  ▼ Member cap / waitlist for preferred times?                               │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Section 5 — Private training (`#private-training`) — optional

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  H2: Private training                                                       │
│  ▼ How to book?                                                             │
│  ▼ Pricing model?                                                           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Section 6 — Amenities (`#amenities`)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  H2: Amenities                                                              │
│                                                                             │
│  ▼ Sauna / cold plunge etiquette?                                           │
│  ▼ Towels, water, retail?                                                   │
│  ▼ Locker rooms?                                                            │
│  ▼ Parking?                                                                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Section 7 — Bottom CTA

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  Still have questions?                                                      │
│  [ Contact us ────────────────────────────────► ]  → /contact              │
│  [ Get started ─────────────────────────────────► ]  → /new-here           │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Accordion UX

- One item open at a time (optional) or allow multiple  
- `+` / `−` icon right-aligned  
- Keyboard accessible (Enter/Space toggles)  
- Copy loaded from CMS `faqItems` collection grouped by `section`

---

## Content source

Populate from client discovery + Sukha FAQ scrape (`docs/reference/scrapes/sukha-faq.md`) as starting draft — **rewrite** for United Strength before launch.
