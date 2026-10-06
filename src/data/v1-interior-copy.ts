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

/** Burn mid chapters — Build-length stack without Strength Standard. */
export const V1_BURN_SESSION = {
  n: "02",
  title: "The Session",
  headline: "Work. Recover. Repeat.",
  body: [
    "Each BURN class is built around intervals — short windows where you give what you have, then recover with intention.",
    "Coaches keep the room clear: what the interval asks for, how hard to push, and when to settle your breathing so the next effort still has quality.",
    "The pace is demanding. The structure is simple. You always know what the clock is asking for.",
  ],
} as const;

export const V1_BURN_OUTCOMES = {
  n: "03",
  title: "What You Build",
  headline: "Capacity you can feel.",
  body: [
    "Over time, BURN builds the engine underneath your training — the ability to work hard, recover faster, and stay composed when the interval gets loud.",
    "It pairs with BUILD: strength gives you structure; conditioning keeps you capable when life asks for more.",
  ],
  metrics: ["Effort", "Recovery", "Endurance", "Focus"],
} as const;

/** Burn Start Here — mirrors Build conversion (Experience United, not free trial). */
export const V1_BURN_START = {
  kicker: "// Start Here",
  headline: "Experience Burn.",
  body: "The best way to understand BURN is to experience it. Experience United gives you the opportunity to train with us, meet our coaches, understand how our classes work, and decide if United is the right place for you.",
  cta: "Experience United",
  href: "/start-here/experience",
} as const;

export const V1_PT_STATS = [
  "20+ Years Coaching",
  "Decades of Combined Experience",
  "A Small Coaching Team",
] as const;

/** Coaches with Meet the Team profiles — deep-link via `/about/team#coach-{id}`. */
export const V1_PT_COACHES = [
  { id: "todd-johnson", name: "Todd Johnson" },
  { id: "jenna-farkas", name: "Jenna Farkas" },
  { id: "jason-katz", name: "Jason Katz" },
  { id: "kara-shaffer", name: "Kara Shaffer" },
] as const;

export const V1_FACTS_INTRO = "Questions, answered without the noise.";

/**
 * Keyed by question number. Mapped from FAQ_ITEMS in about-copy (same Copywright FAQ).
 * An empty or missing entry stays non-interactive on the page.
 */
export const V1_FACTS_ANSWERS: Readonly<Record<string, string>> = {
  "01":
    "United Strength is a private fitness club in downtown Columbus, Ohio. We offer intentional coaching, structured classes, personal training, and a community built around a shared commitment to health and strength.",
  "02":
    "Yes. Membership is selective and reviewed by the team. We're not a traditional open-enrollment gym.",
  "03":
    "No. You need to be willing to learn, challenge yourself, and keep showing up. Our coaches meet you where you are.",
  "04":
    "Intentional coaching, a selective membership community, structured programming, and a space built to make the practice feel deliberate — not just another place to work out.",
  "05":
    "We offer BUILD, BURN, and BALANCE signature classes, personal training (1:1 and private group), and Move the City // Run Club.",
  "06":
    "BUILD is our functional strength training class. BURN is our conditioning and HIIT class. BALANCE is coming soon — recovery, mobility, and the quieter side of the practice.",
  "07":
    "Yes. Our coaches offer 1:1 coaching and private group training, each built around your goals, your body, and your life. Inquire at training@unitedstrengthgym.com.",
  "08":
    "Open gym access depends on your membership. Classes and coaching are the core of how we train — if you want guidance built around you, personal training is the clearest path.",
  "09":
    "Move the City is our free run club — open to everyone. No membership required. We get outside, move our bodies, and spend time with people.",
  "10":
    "No. Personal training is available to members and non-members. Inquire at training@unitedstrengthgym.com and we will help you find the right fit.",
  "11":
    "Membership is selective and reviewed by the team. There is no open checkout on this site. Apply when you're ready; we will follow up.",
  "12":
    "United Strength is a community first. The application helps us understand your goals and whether the club is the right fit — belonging over volume.",
  "13": "Yes. Experience United is how you get to know us — and how we get to know you.",
  "14":
    "Experience United is five classes over 14 days — a chance to train with us, meet our coaches, and understand how United works before choosing a membership.",
  "15":
    "Membership options are discussed during the application process. We do not publish pricing on this site.",
  "16":
    "Yes. Membership terms and cancellations are reviewed with you during the application and onboarding process so expectations are clear before you join.",
  "17": "237 Cleveland Ave, Columbus, Ohio 43215 — downtown near Columbus State.",
  "18": "Yes — parking is available behind the building.",
  "19":
    "Member access follows the facility hours posted for United Strength. Your coach or the front desk can confirm the current schedule when you join.",
  "20":
    "Experience United is the recommended first step — you'll train with us, meet our coaches, understand how our classes work, and decide if United is the right place for you.",
};

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

/** Keep aligned with EXPERIENCE_UNITED stats / closer ($70). */
export const V1_MEMBERSHIP_EXPERIENCE_JOIN = {
  n: "01",
  title: "Experience United",
  lines: ["5 Classes", "14 Days", "$70"],
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

/** Hover/tap “why it matters” blurbs — draftable by Todd. */
export const V1_SPACE_TILES = [
  {
    n: "01",
    title: "The Space",
    note: "Designed downtown so training feels intentional, not crowded.",
  },
  {
    n: "02",
    title: "Equipment",
    note: "Quality tools chosen for strength, conditioning, and longevity.",
  },
  {
    n: "03",
    title: "Details",
    note: "Materials and finish that make the room feel considered.",
  },
  {
    n: "04",
    title: "Hospitality",
    note: "Clean, cared-for amenities that respect your time here.",
  },
  {
    n: "05",
    title: "People",
    note: "Community is the draw — people who know each other and push together.",
  },
  {
    n: "06",
    title: "Atmosphere",
    note: "Light, sound, and pace that keep the practice calm and focused.",
  },
] as const;

export const V1_ARCHIVE_ISSUES = [
  { n: "001", pdf: "", coverSlot: "archiveIssue1" as const },
  { n: "002", pdf: "", coverSlot: "archiveIssue2" as const },
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
