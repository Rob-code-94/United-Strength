/**
 * V1-only interior strings. Existing EF exports stay untouched.
 * Stand-in media is noted in the page components, not shown as on-page copy.
 */

/** Empty on purpose. Apply uses the on-page form, not a Typeform link. */
export const TYPEFORM_APPLY_URL = "";

/** Empty until scheduling decides where Run With Us goes. */
export const RUN_WITH_US_URL = "";

/** Empty until the next Cultivated has a destination. */
export const CULTIVATED_JOIN_URL = "";

export const V1_BUILD_PROGRAMMING = {
  n: "02",
  title: "Your Programming",
  headline: "Your training has a plan.",
  body: [
    "BUILD isn't a collection of random workouts.",
    "The programming is designed to progress over time so you can build on what you've already done instead of starting over every time you walk through the door.",
    "BUILD members also receive access to their programming through the Trainerize app. Your workouts live there, along with your exercises, sets, reps and training history, so you can record your numbers and actually see how you're progressing.",
    "We want you to understand what you're doing, know where you've been, and have a clear way to keep moving forward.",
  ],
  notation: ["04", "Sets", "06", "Reps", "01", "Plan"],
} as const;

export const V1_BUILD_STANDARD = {
  n: "03",
  title: "The Strength Standard",
  headline: "Know where you stand.",
  body: [
    "We believe strength should be something you understand, not something you guess at.",
    "The United Strength Standard gives us a way to establish a baseline, understand where you are today, and continue measuring the things that help you remain strong and capable over time.",
    "BUILD is where we train it.",
    "The Strength Standard helps us understand it.",
  ],
  cta: "Explore the Strength Standard",
  href: "/longevity/strength-standard",
} as const;

export const V1_BUILD_START = {
  kicker: "// Start Here",
  headline: "Experience Build.",
  body: "The best way to understand BUILD is to experience it. Experience United gives you the opportunity to train with us, meet our coaches, understand how our classes work, and decide if United is the right place for you.",
  cta: "Experience United",
  href: "/start-here/experience",
} as const;

export const V1_PT_STATS = [
  "20+ Years Coaching",
  "XX+ Years Combined Experience",
  "XX Coaches",
] as const;

export const V1_PT_COACHES = [
  "Todd Johnson",
  "Jason Katz",
  "Kara Shaffer",
  "Logan",
  "Brian",
  "Bri",
] as const;

export const V1_FACTS_INTRO = "Questions, answered without the noise.";

/** Keyed by question number. An empty or missing entry stays off the page. */
export const V1_FACTS_ANSWERS: Readonly<Record<string, string>> = {};

export const V1_FACTS = [
  {
    id: "general",
    title: "General",
    items: [
      { n: "01", q: "What is United Strength?" },
      { n: "02", q: "Is United Strength a private club?" },
      { n: "03", q: "Do I need to be experienced to train at United?" },
      { n: "04", q: "What makes United different from a traditional gym?" },
    ],
  },
  {
    id: "training",
    title: "Training",
    items: [
      { n: "05", q: "What types of training do you offer?" },
      { n: "06", q: "What are BUILD, BURN and BALANCE?" },
      { n: "07", q: "Do you offer personal training?" },
      { n: "08", q: "Can I train on my own?" },
      { n: "09", q: "What is Move the City // Run Club?" },
      { n: "10", q: "Do I need to be a member to work with a coach?" },
    ],
  },
  {
    id: "membership",
    title: "Membership",
    items: [
      { n: "11", q: "How does membership work?" },
      { n: "12", q: "Why do I need to apply for membership?" },
      { n: "13", q: "Can I try United before becoming a member?" },
      { n: "14", q: "What is Experience United?" },
      { n: "15", q: "What membership options are available?" },
      { n: "16", q: "Can I cancel my membership?" },
    ],
  },
  {
    id: "visiting",
    title: "Visiting United",
    items: [
      { n: "17", q: "Where are you located?" },
      { n: "18", q: "Is parking available?" },
      { n: "19", q: "When can members access the gym?" },
      { n: "20", q: "What should I expect the first time I come in?" },
    ],
  },
] as const;

/** Membership how-to-join writes $75. The Experience page keeps $70. */
export const V1_MEMBERSHIP_EXPERIENCE_JOIN = {
  n: "01",
  title: "Experience United",
  lines: ["5 Classes", "14 Days", "$75"],
  body: "Experience United gives you a chance to train with us, meet our coaches and understand how United works before choosing a membership.",
} as const;

export const V1_MEMBERSHIP_COMPARE = {
  headers: ["Essential", "Signature 2X", "Signature Unlimited", "United"],
  rows: [
    { label: "Open Gym", marks: [true, false, false, true] },
    { label: "2 Classes / Week", marks: [false, true, false, false] },
    { label: "Unlimited Classes", marks: [false, false, true, true] },
    { label: "Trainerize Programming", marks: [false, true, true, true] },
    { label: "Build / Burn / Balance", marks: [false, true, true, true] },
  ],
} as const;

/** Empty `note` stays off the page until Todd writes the hover blurb. */
export const V1_SPACE_TILES = [
  { n: "01", title: "The Space", note: "" },
  { n: "02", title: "Equipment", note: "" },
  { n: "03", title: "Details", note: "" },
  { n: "04", title: "Hospitality", note: "" },
  { n: "05", title: "People", note: "" },
  { n: "06", title: "Atmosphere", note: "" },
] as const;

export const V1_ARCHIVE_ISSUES = [
  { n: "001", pdf: "" },
  { n: "002", pdf: "" },
] as const;

export const V1_CULTIVATED_001 = {
  title: "Cultivated // 001",
  body: [
    "The idea was simple: bring together people who are committed to growth, challenge them physically, create space for meaningful conversations, and build new relationships.",
    "It wasn't about competition.",
    "It was about community.",
    "We lifted.",
    "We ran.",
    "We talked.",
    "We pushed past comfort zones.",
    "And we built new connections.",
    "Growth happens in the right room.",
    "For 001, everyone received sunflower seeds to take home.",
  ],
} as const;
