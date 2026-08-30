/**
 * Training section copy — Direction EF menu pages (overlay 02).
 * Sources: unitedstrengthgym.com/classes/build · /classes/burn · /personal-training
 * Balance / Small Group / Private Group: Coming Soon in overlay — no dedicated live pages yet.
 *
 * Strip from live: Sign up / Free Trial / Book chrome → Start Here / mailto only.
 */

export interface ScheduleRow {
  day: string;
  times: string;
}

export interface TrainingClassCopy {
  n: string;
  title: string;
  metadata: string;
  headline: string;
  lede: string;
  body: string[];
  communityNote: string;
  schedule: ScheduleRow[];
  scheduleNote?: string;
  next?: string;
}

/** Facility hours — unitedstrengthgym.com footer */
export const FACILITY_HOURS = [
  { label: "Monday – Thursday", value: "5:30AM — 8:30PM" },
  { label: "Friday", value: "5:30AM — 7:30PM" },
  { label: "Saturday & Sunday", value: "8AM — 2PM" },
] as const;

export const FACILITY_ADDRESS = "237 Cleveland Ave, Columbus, Ohio 43215";

/** Source: unitedstrengthgym.com/classes/build */
export const BUILD_CLASS: TrainingClassCopy = {
  n: "01",
  title: "Build",
  metadata: "( Classes )",
  headline: "BUILD",
  lede: "Strength first — with conditioning that finishes the work.",
  body: [
    "Build is a class that focuses on strength but also incorporates conditioning and weight circuits. Build begins with a strength component dedicated to either the upper body or the lower body.",
    "The next portion incorporates super-sets and circuits of accessory movements that complement the major lift in the beginning. Build will finish with some form of HIIT training to increase your metabolic conditioning and cardiovascular capacity.",
  ],
  communityNote:
    "Regardless of where you're starting from, the United Strength community is here to help educate and motivate you to reach your goals. We highly recommend you try out our classes — we offer a free trial class to those who are interested.",
  schedule: [
    { day: "Monday", times: "6 am · 9 am · 6 pm" },
    { day: "Tuesday", times: "7 pm" },
    { day: "Wednesday", times: "6 am · 9 am · 6 pm" },
    { day: "Thursday", times: "7 pm" },
    { day: "Friday", times: "6 am · 9 am · 6 pm" },
    { day: "Saturday", times: "10 am" },
    { day: "Sunday", times: "10 am" },
  ],
  next: "02 // Burn",
};

/**
 * Source: unitedstrengthgym.com/classes/burn
 * Schedule on live site lists Mon–Thu only — do not invent Fri–Sun.
 */
export const BURN_CLASS: TrainingClassCopy = {
  n: "02",
  title: "Burn",
  metadata: "( Classes )",
  headline: "BURN",
  lede: "HIIT intervals — maximal effort, then recovery.",
  body: [
    "Burn is a class focused on HIIT training, which incorporates intervals of maximal effort followed by recovery. This type of training allows for optimal fat and calorie burning.",
    "Burn will help build your cardiovascular and muscular endurance.",
  ],
  communityNote:
    "Regardless of where you're starting from, the United Strength community is here to help educate and motivate you to reach your goals. We highly recommend you try out our classes — we offer a free trial class to those who are interested.",
  schedule: [
    { day: "Monday", times: "7 pm" },
    { day: "Tuesday", times: "6 am · 9 am · 6 pm" },
    { day: "Wednesday", times: "7 pm" },
    { day: "Thursday", times: "6 am · 9 am · 6 pm" },
  ],
  scheduleNote: "Times as published on unitedstrengthgym.com — additional days pending confirmation.",
  next: "03 // Balance",
};

/** Coming Soon — no live /balance page yet. */
export const BALANCE_CLASS = {
  n: "03",
  title: "Balance",
  metadata: "( Coming Soon )",
  headline: "BALANCE",
  lede: "A third class lane is on the way — recovery, mobility, and the quieter side of the practice.",
  body: [
    "Balance will round out the United Strength class ecosystem alongside Build and Burn. Details are still being shaped by the coaching team.",
  ],
} as const;

/** Source: unitedstrengthgym.com/personal-training */
export const PERSONAL_TRAINING_HUB = {
  headline: "Personal Training",
  lede: "Customized coaching. Real results. Personal attention that changes the game.",
  body: [
    "We have elite-level coaches who are among the best in the industry. Each one brings a unique skill set, deep expertise, and a passion for helping others get stronger in and out of the gym.",
    "Whether you're new to training or ready to break through a plateau, our coaches are ready to meet you where you're at and take you where you want to go.",
  ],
  coachCues: [
    { name: "Todd Johnson", role: "Owner, Coach", note: "Exercise physiology · ACSM CPT · USAW" },
    { name: "Jason Katz", role: "Coach", note: "Strength and conditioning" },
    { name: "Jenna Farkas", role: "Coach", note: "Body recomposition · competition prep" },
    { name: "Kara Shaffer", role: "Coach", note: "Kettlebell, barbell & bodyweight · all levels" },
  ],
} as const;

/** 1-on-1 — adapted from PT hub. */
export const ONE_ON_ONE = {
  n: "01",
  title: "1-on-1 Coaching",
  metadata: "( Personal Training )",
  headline: "1-ON-1 COACHING",
  lede: "Undivided attention — programming built around you.",
  body: [
    "One-on-one coaching pairs you with a United Strength coach for personalized programming, form, and accountability. Sessions meet you where you are and progress toward where you want to go.",
    "Whether you're new to training or ready to break through a plateau, our coaches bring deep expertise and a passion for helping others get stronger in and out of the gym.",
  ],
  next: "02 // Small Group",
} as const;

/**
 * Small Group — Coming Soon. No dedicated live page yet.
 */
export const SMALL_GROUP = {
  n: "02",
  title: "Small Group Training",
  metadata: "( Personal Training )",
  headline: "SMALL GROUP TRAINING",
  lede: "Shared focus — coach-led sessions with room to be seen.",
  body: [
    "Small group training keeps the personal attention of coaching while building the energy of training alongside others.",
  ],
  formatRows: [
    { label: "Format", value: "Coach-led sessions in a small cohort" },
    { label: "Focus", value: "Technique, progressive loading, shared accountability" },
    { label: "Fit", value: "Members who want coaching depth without a full private slate" },
  ],
  next: "03 // Private Group",
} as const;

/**
 * Private Group — Coming Soon. Inquiry-forward; no prices.
 */
export const PRIVATE_GROUP = {
  n: "03",
  title: "Private Group Training",
  metadata: "( Personal Training )",
  headline: "PRIVATE GROUP TRAINING",
  lede: "Your crew. Your schedule. Coach-led in the United room.",
  body: [
    "Private group training is for friends, teams, or circles who want a dedicated coaching block together. Inquire with the team — we'll shape the session around your goals.",
  ],
} as const;

/**
 * Class / PT CTAs — match live functions without Triib Book chrome.
 * Live “Free Trial Class” → Start Here / Experience United.
 */
export const TRAINING_CTA = {
  /** Live-site equivalent: Free Trial Class */
  freeTrialLabel: "Free Trial Class",
  freeTrialHref: "/start-here/experience",
  experienceLabel: "Experience United",
  experienceHref: "/start-here/experience",
  applyLabel: "Apply for Membership",
  applyHref: "/start-here/apply",
  teamLabel: "Meet the Team",
  teamHref: "/about/team",
  inquireLabel: "Inquire about training",
  inquireHref: "mailto:training@unitedstrengthgym.com",
} as const;
