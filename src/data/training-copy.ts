/**
 * Training section copy — Direction EF menu pages (overlay 02).
 * Sources: tmp-copywright/ · unitedstrengthgym.com/classes/build · /classes/burn · /personal-training
 * Copywright Part D update Sep 2026: BUILD, PERSONAL_TRAINING_HUB, TRAINING_CTA.
 *
 * Strip from live: Sign up / Free Trial / Book chrome → Experience United / mailto only.
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

/** Source: BUILD PAGE.txt */
export const BUILD_CLASS: TrainingClassCopy = {
  n: "01",
  title: "Build",
  metadata: "( Classes )",
  headline: "BUILD",
  lede: "Strength for life.",
  body: [
    "BUILD is our approach to functional strength training.",
    "The goal isn't to make every workout as hard as possible. The goal is to get stronger, build and maintain muscle, move well, and continue developing a body that allows you to do more throughout your life.",
    "Every BUILD class is intentionally programmed around strength. We focus on the movements that matter, teach you how to perform them well, and give you the opportunity to progress them over time.",
    "Conditioning still has a place, but it supports the strength work rather than replacing it.",
    "You don't need to be an experienced lifter to start. You just need to be willing to learn, challenge yourself, and keep showing up.",
    "The work changes as you do.",
  ],
  communityNote:
    "The best way to understand BUILD is to experience it. Experience United gives you the opportunity to train with us, meet our coaches, understand how our classes work, and decide if United is the right place for you.",
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
    "The best way to understand BURN is to experience it. Experience United gives you the opportunity to train with us, meet our coaches, understand how our classes work, and decide if United is the right place for you.",
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

/**
 * Personal Training hub — Copywright _PERSONAL TRAINING PAGE.txt (Sep 2026).
 * Expanded verbatim. No prices · no Buy / Reserve / Book.
 */
export const PERSONAL_TRAINING_HUB = {
  metadata: "( Training )",
  headline: "Personal Training",
  lede: "Personal training should be personal.",

  /** 01 // OUR APPROACH */
  approach: {
    n: "01",
    title: "Our Approach",
    headline: "WE START WITH THE PERSON.",
    body: [
      "We don't start with a program and try to fit you into it.",
      "We start by understanding you.",
      "What are you trying to accomplish? What have you done before? What do you enjoy? Where do you struggle? What does your body need? And just as importantly, what can realistically fit into your life?",
      "From there, we build.",
      "Good coaching is more than writing workouts. It's knowing how to teach, when to push, when to adjust, and how to build something that someone can actually continue doing.",
      "The goal isn't to make you dependent on a coach forever.",
      "It's to help you become stronger, more capable, and more confident in understanding how to take care of yourself.",
    ],
  },

  /** 02 // EXPERIENCE MATTERS */
  experience: {
    n: "02",
    title: "Experience Matters",
    headline: "EXPERIENCE CHANGES HOW YOU COACH.",
    body: [
      "A certification can teach you a lot.",
      "Experience teaches you how to work with people.",
      "Our coaches have spent years working with different bodies, different goals, different ages, different personalities, and people at completely different places in their lives.",
      "Over time, you learn that there isn't one perfect program or one way to coach everyone.",
      "You learn how to listen. How to adjust. How to communicate. And how to recognize what the person standing in front of you actually needs.",
      "That experience matters.",
      "We also expect our coaches to continue learning and investing in themselves. Coaching is a craft, and getting better at it doesn't stop when you earn a certification.",
    ],
    stats: [
      { label: "20+ YEARS COACHING", value: "20+" },
    ],
  },

  /** 03 // TWO WAYS TO TRAIN */
  oneOnOne: {
    n: "01",
    title: "1:1 Coaching",
    headline: "The most individualized way to train at United.",
    body: [
      "You'll work directly with a coach who builds your training around your goals, your body, your experience, and your life.",
      "Your coach is there to teach, guide, adjust, challenge you, and help you understand the work you're doing instead of simply taking you through workouts.",
    ],
  },
  privateGroup: {
    n: "02",
    title: "Private Group Training",
    headline: "Personal training doesn't always have to mean training alone.",
    body: [
      "Private Group Training allows you to train with a small group of people you choose while still receiving dedicated coaching and intentional programming.",
      "It's a way to share the experience while still having a coach who understands the group, knows what everyone is working toward, and can adjust the training when needed.",
    ],
  },

  /** 04 // YOUR PROGRAMMING */
  programming: {
    n: "04",
    title: "Your Programming",
    headline: "THE WORK HAS A PLAN.",
    body: [
      "Personal Training extends beyond the time you spend standing next to your coach.",
      "Your programming is built around you and can live inside Trainerize, giving you access to your workouts, exercises, sets, reps, training history and progress.",
      "Depending on how you're training with us, your coach can also give you work to complete outside of your sessions so everything continues to work together.",
      "The goal is for you to know what you're doing, understand why you're doing it, and be able to see how you're progressing over time.",
    ],
  },

  /** 05 // FIND THE RIGHT COACH */
  coachCues: [
    { name: "Todd Johnson", role: "Owner, Coach", note: "Exercise physiology · ACSM CPT · USAW" },
    { name: "Jason Katz", role: "Coach", note: "Strength and conditioning" },
    { name: "Jenna Farkas", role: "Coach", note: "Body recomposition · competition prep" },
    { name: "Kara Shaffer", role: "Coach", note: "Kettlebell, barbell & bodyweight · all levels" },
  ],

  /** CTA — bottom inquire band */
  ctaSection: {
    headline: "READY TO FIND THE RIGHT COACH?",
    body: "You don't need to know exactly what you need before reaching out. Tell us where you are, what you're looking for, and we'll help you figure out the best place to start.",
    inquireLabel: "Inquire about training",
  },
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
 * "Free Trial Class" → "Experience United" per BUILD PAGE.txt direction.
 */
export const TRAINING_CTA = {
  /** Previously "Free Trial Class" — updated to Experience United per Part D copywright */
  freeTrialLabel: "Experience United",
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
