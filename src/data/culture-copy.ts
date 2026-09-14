/**
 * Culture section — By Design · Cultivated · Archive.
 * Move the City // Run Club lives under Training (Sep 2026 nav).
 * Sources: unitedstrengthgym.com/our-partners · blog · Todd IA.
 * No public prices · no Buy / Reserve / Book chrome.
 */

import { archiveCovers } from "../assets/images/archive";

// ── Move the City // Run Club — Training Classes (was Culture) ───────────────

export const MOVE_THE_CITY = {
  metadata: "( Training )",
  headline: "Move the City // Run Club",
  lede: "Weekly run club — movement, conversation, and Columbus beyond the gym floor.",
  photo: {
    n: "01",
    title: "Run Club",
    caption: "Weekly miles. Good people. Columbus in motion.",
  },
  story: {
    n: "02",
    title: "#ColumbUS",
    body: [
      "Our weekly run club brings the United community beyond the gym floor — movement, conversation, and the city we call home. Whether you're chasing a PR or just looking to move with good people, everyone is welcome.",
    ],
  },
  /** Live twin: unitedstrengthgym.com/our-partners — full partner list + links */
  partners: {
    n: "03",
    title: "Local partners",
    lede: "As part of a greater initiative to support and connect with our Columbus community, we've partnered with local businesses, artists, and entrepreneurs.",
    rows: [
      {
        name: "Fit Fresh Fast",
        focus: "Local business",
        href: "https://www.fitfreshfast.com",
      },
      {
        name: "Rehabilitation Redefined",
        focus: "Recovery",
        href: "http://www.rehabilitationredefined.com",
      },
      {
        name: "Dana Grubbe",
        focus: "Contemporary Abstracts",
        href: "https://www.instagram.com/danafrostgrubbe/?hl=en",
      },
      {
        name: "OREWILER",
        focus: "Art",
        href: "https://www.orewiler.art",
      },
      {
        name: "LRX Apparel",
        focus: "Apparel",
        href: "https://lrxapparel.com",
      },
    ],
  },
  partnerCta: {
    label: "Learn more about local partners",
    href: "https://unitedstrengthgym.com/our-partners",
  },
  inquire: {
    label: "Partner with us",
    href: "/contact",
  },
} as const;

// ── By Design — Todd Sep 2026 Culture leaf (Wave 1 shell) ────────────────────

export const BY_DESIGN = {
  metadata: "( Culture )",
  headline: "By Design",
  lede: "The intention behind the experience — not just the room you walk into.",
  manifesto: {
    n: "01",
    title: "Intention",
    headline: "Designed on purpose.",
    body: [
      "By Design is how United Strength chooses space, equipment, materials, aesthetic, hospitality, and function — so the club feels deliberate before you ever pick up a weight.",
      "Where About / The Space shows the environment, By Design explains why it feels the way it does. Wave 1 shell — fuller copy after Todd reviews the Sep 2026 nav brief.",
    ],
  },
  quote: {
    n: "02",
    title: "Contrast",
    text: "The Space is where you train. By Design is why it was built that way.",
  },
  principles: {
    n: "03",
    title: "Held to",
    rows: [
      {
        n: "01",
        title: "Space",
        body: "Layout and light that support focus — never crowded for the sake of density.",
      },
      {
        n: "02",
        title: "Equipment",
        body: "Tools chosen for craft and longevity, not trend cycles.",
      },
      {
        n: "03",
        title: "Materials",
        body: "Surfaces and finishes that age with the club — quiet, durable, intentional.",
      },
      {
        n: "04",
        title: "Hospitality",
        body: "How members are received — selective, calm, never sales-forward.",
      },
    ],
  },
} as const;

// ── Cultivated — Todd IA Culture leaf ────────────────────────────────────────

export const CULTIVATED = {
  metadata: "( Culture )",
  headline: "Cultivated",
  lede: "Taste, intention, and the standards we hold — quietly.",
  manifesto: {
    n: "01",
    title: "Standard",
    headline: "Not louder. More intentional.",
    body: [
      "Cultivated is how the club shows up when the workout ends — how we dress the room, speak to members, and choose what belongs under the United Strength name.",
      "It is taste without costume. Craft without hype. A private-club standard that still feels like Columbus.",
    ],
  },
  quote: {
    n: "02",
    title: "Tone",
    text: "Explore the brand slowly. Discover who we are — don’t dump everything at once.",
  },
  principles: {
    n: "03",
    title: "Held to",
    rows: [
      {
        n: "01",
        title: "Intention",
        body: "Every surface, class, and word should feel deliberate — never crowded.",
      },
      {
        n: "02",
        title: "Craft",
        body: "Coaching, programming, and space design carry the same care.",
      },
      {
        n: "03",
        title: "Community",
        body: "Belonging over volume. Selective membership, real relationships.",
      },
      {
        n: "04",
        title: "Restraint",
        body: "No sales chrome on the marketing layer. Quiet confidence.",
      },
    ],
  },
} as const;

// ── Archive — live blog index ────────────────────────────────────────────────

export const ARCHIVE_PAGE = {
  metadata: "( Culture )",
  headline: "Archive",
  lede: "Notes from the club — health, training, and the season.",
  jumpLabels: [
    { id: "archives", label: "Archives" },
    { id: "authors", label: "Authors" },
  ],
  authors: [
    { name: "Kara Shaffer", role: "Coach" },
    { name: "Todd Johnson", role: "Owner, Coach" },
  ],
  posts: [
    {
      title: "Bite The Sandwich",
      author: "Kara Shaffer",
      date: "November 25, 2025",
      href: "https://unitedstrengthgym.com/blog/bite-the-sandwichnbspby-kara-shaffer",
      cover: archiveCovers.note01,
      coverAlt: "Editorial still — Bite The Sandwich",
      excerpt: "A note on fuel, patience, and showing up for the work.",
    },
    {
      title:
        "How to Stay Consistent With Your Workouts & Nutrition During the Holiday Season",
      author: "Todd Johnson",
      date: "November 25, 2025",
      href: "https://unitedstrengthgym.com/blog/how-to-stay-consistent-with-your-workouts-amp-nutrition-during-the-holiday-season-by-todd-johnson",
      cover: archiveCovers.note02,
      coverAlt: "Editorial still — Holiday consistency",
      excerpt: "Stay consistent through the season without losing the joy of it.",
    },
  ],
} as const;
