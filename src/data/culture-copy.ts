/**
 * Culture section — By Design · Cultivated · Archive.
 * Move the City // Run Club lives under Training (Sep 2026 nav).
 * Sources: tmp-copywright/ · unitedstrengthgym.com/our-partners · blog · Todd IA.
 * No public prices · no Buy / Reserve / Book chrome.
 * Copywright Part D: CULTIVATED, BY_DESIGN, ARCHIVE_PAGE updated Sep 2026.
 */

import { archiveCovers } from "../assets/images/archive";

// ── Move the City // Run Club — Training Classes (Copywright _MOVE THE CITY) ─
// MOVE_THE_CITY already done — leave as-is.

export const MOVE_THE_CITY = {
  metadata: "( Training )",
  headline: "Move the City",
  subhead: "// Run Club",
  lede: "Running is better with people.",
  photo: {
    n: "01",
    title: "Move Together",
    caption: "The pace is conversation.",
  },
  story: {
    n: "01",
    title: "Move Together",
    headline: "Running is better with people.",
    body: [
      "Move the City is our free Run Club built around a simple idea: get outside, move your body, and spend time with people.",
      "We're not interested in turning every run into a race.",
      "Some people come because they love running. Some come because they want to get better at it. Some come because they want to move, talk, and start their morning around other people.",
      "You don't have to be the fastest person there.",
      "You just have to show up.",
    ],
  },
  paceStatement: "The pace is conversation.",
  runs: {
    n: "02",
    title: "The Runs",
    rows: [
      { day: "Monday", detail: "// Long Run" },
      { day: "Thursday", detail: "// 3.1 Miles" },
      { day: "07:00 AM", detail: "// United Strength" },
    ],
    note: "Exact run details confirmed before launch.",
  },
  route: {
    n: "03",
    title: "The Route",
    start: "Start // United Strength",
  },
  closing: {
    headline: "Run with us.",
    body: [
      "Move the City is free.",
      "You don't need to be a United Strength member to join us.",
    ],
    ctaLabel: "Run With Us",
    href: "mailto:info@unitedstrengthgym.com?subject=Move%20the%20City%20Run%20Club",
  },
} as const;

// ── By Design — Copywright _BY DESIGN PAGE.txt ───────────────────────────────

export const BY_DESIGN = {
  metadata: "( Culture )",
  headline: "By Design",
  lede: "Nothing here is accidental.",
  manifesto: {
    n: "01",
    title: "Intention",
    headline: "Built with intention.",
    body: [
      "By Design is where we show the intentional details behind United: the space, equipment, materials, hospitality, lighting, furniture, plants, branding, and smaller details throughout the gym.",
      "Nothing about what we built was decided without a reason. The Space shows you what United looks and feels like. By Design explains why it was built and designed the way it was.",
    ],
  },
  quote: {
    n: "02",
    title: "Design",
    text: "Built with intention.",
  },
  principles: {
    n: "03",
    title: "Details",
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

// ── Cultivated — Copywright CULTIVATED PAGE.txt ───────────────────────────────

export const CULTIVATED = {
  metadata: "( Culture )",
  headline: "Cultivated",
  lede: "GROWTH HAPPENS IN THE RIGHT ROOM.",
  manifesto: {
    n: "01",
    title: "Cultivated",
    headline: "A series of intentionally small experiences.",
    body: [
      "Cultivated is a series of intentionally small experiences designed to bring people together, push us outside of our normal routines, and create opportunities for real connection.",
      "What we do will change from one Cultivated to the next.",
      "The intention won't.",
      "The right people. The right room. The right conversations.",
    ],
  },
  quote: {
    n: "02",
    title: "Cultivated // 001",
    text: "Growth happens in the right room.",
  },
  principles: {
    n: "03",
    title: "Cultivated // 001",
    rows: [
      {
        n: "01",
        title: "The Idea",
        body: "The idea was simple: bring together people who are committed to growth, challenge them physically, create space for meaningful conversations, and build new relationships.",
      },
      {
        n: "02",
        title: "Community",
        body: "It wasn't about competition. It was about community.",
      },
      {
        n: "03",
        title: "The Work",
        body: "We lifted. We ran. We talked. We pushed past comfort zones. And we built new connections.",
      },
      {
        n: "04",
        title: "What You Take With You",
        body: "Every Cultivated experience leaves you with something after you walk out the door — an object, prompt, plan, or takeaway connected to what we did.",
      },
    ],
  },
} as const;

// ── Archive — Copywright _ARCHIVE PAGE.txt ────────────────────────────────────

export const ARCHIVE_PAGE = {
  metadata: "( Culture )",
  headline: "Archive",
  lede: "Something worth reading, thinking about, and taking with you.",
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
