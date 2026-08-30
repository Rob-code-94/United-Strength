/**
 * Culture section (05) — Move the City · Cultivated · Archive.
 * Sources: unitedstrengthgym.com/our-partners · blog · Todd IA (Cultivated).
 * No public prices · no Buy / Reserve / Book chrome.
 */

import { archiveCovers } from "../assets/images/archive";

// ── Move the City — live partners / #ColumbUS ────────────────────────────────

export const MOVE_THE_CITY = {
  metadata: "( Culture )",
  headline: "Move the City",
  lede: "#ColumbUS — building a stronger community beyond the gym floor.",
  photo: {
    n: "01",
    title: "Community",
    caption: "Stronger together — Columbus first.",
  },
  story: {
    n: "02",
    title: "#ColumbUS",
    body: [
      "We believe in building a strong community. That's why we focus on giving back to our city of Columbus by partnering with other local small businesses to help and support one another.",
    ],
  },
  partners: {
    n: "03",
    title: "Local partners",
    lede: "Artists, makers, and neighbors we stand with.",
    rows: [
      { name: "Dana Grubbe", focus: "Contemporary Abstracts" },
      { name: "OREWILER", focus: "Art" },
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
