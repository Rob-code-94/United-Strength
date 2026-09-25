/**
 * Journey + contact — Copywright Parts C (Experience, Membership, Apply).
 * Sources: Copywright/websitepageassetsandcopy · member-facing verbatim.
 * Design notes from docs are instructions only — not on-page.
 * Membership page shows prices; homepage must stay price-free (Part E).
 */

export { FACILITY_HOURS, FACILITY_ADDRESS } from "./training-copy";

// ── Experience United — Copywright EXPERIENCE UNITED PAGE ($70) ─────────────

export const EXPERIENCE_UNITED = {
  metadata: "( Start Here )",
  headline: "Experience United",
  lede: "Your introduction to United Strength.",
  heroLines: [
    "Experience our culture. Train inside our classes. Work directly with our coaches.",
    "This is where it starts.",
  ],
  stats: [
    { n: "5", label: "Classes" },
    { n: "14", label: "Days" },
    { n: "$70", label: "Intro" },
  ],
  experienceBody: [
    "Experience United gives you five classes over 14 days to actually experience what United is like before deciding if membership is right for you.",
    "This isn't about watching from the outside or trying to understand us through a website.",
    "Come in. Train with us. Meet the coaches. Meet the people. Experience the space.",
    "Then decide for yourself.",
  ],
  /** Legacy body for any residual consumers */
  body: [
    "Experience United gives you five classes over 14 days to actually experience what United is like before deciding if membership is right for you.",
    "This isn't about watching from the outside or trying to understand us through a website. Come in. Train with us. Meet the coaches. Meet the people. Experience the space. Then decide for yourself.",
  ],
  editorialStatement: [
    "You can learn a lot about a gym online.",
    "But eventually, you have to walk through the door.",
  ],
  whatYoullExperience: {
    n: "02",
    title: "What You'll Experience",
    beats: [
      {
        title: "The Training",
        body: [
          "You'll train inside our Signature Classes and experience the same coaching and programming our members do.",
          "BUILD is our approach to functional strength.",
          "BURN brings a faster pace and higher intensity.",
          "BALANCE will introduce a dedicated mobility and movement practice when it launches.",
        ],
      },
      {
        title: "The Coaching",
        body: [
          "Our coaches aren't there to simply tell you what exercise comes next.",
          "They're there to teach, make adjustments, answer questions and help you understand what you're doing.",
        ],
      },
      {
        title: "The People",
        body: [
          "United is a community, but that's difficult to understand until you're actually in it.",
          "You'll train alongside our members, meet people and begin to understand why the people around you are such an important part of the experience.",
        ],
      },
      {
        title: "The Space",
        body: [
          "The environment matters.",
          "You'll get to experience the equipment, details, hospitality and atmosphere we've intentionally built around the way we want people to train and spend time here.",
        ],
      },
    ],
  },
  whatToExpect: {
    n: "03",
    title: "What To Expect",
    steps: [
      {
        n: "01",
        title: "Start",
        body: "Choose Experience United and complete a short intake so we can learn a little about you before you arrive.",
      },
      {
        n: "02",
        title: "Come In",
        body: "For your first visit, arrive about 15 minutes early. We'll introduce you to the space, answer any questions and make sure you know what to expect before class starts.",
      },
      {
        n: "03",
        title: "Experience United",
        body: "You have 14 days to use your five classes. Train. Meet different coaches. Experience the programming. Get to know the space and the people around you.",
      },
      {
        n: "04",
        title: "Decide What's Next",
        body: "At the end of your experience, we'll help you understand the different ways to continue at United and which membership makes the most sense for how you want to train. No guessing. No pressure to figure everything out before you've even trained here.",
      },
    ],
  },
  whoIsThisFor: {
    n: "04",
    title: "Who Is This For?",
    headline: "Experience United is for you if:",
    bullets: [
      "You're looking for more structure in your training.",
      "You want coaching instead of figuring everything out on your own.",
      "You want to become stronger and more capable.",
      "You care about the environment and people you train around.",
      "Or you're simply curious about United and want to experience it before making a decision.",
    ],
    closing: [
      "You do not need to be in shape before you start.",
      "You just need to be willing to show up and do the work.",
    ],
  },
  firstVisit: {
    n: "05",
    title: "Your First Visit",
    headline: "Before You Arrive",
    items: [
      "Complete your intake form.",
      "Choose your first class.",
      "Arrive 15 minutes early.",
      "Wear whatever you're comfortable training in.",
      "We'll take it from there.",
    ],
  },
  closing: {
    headline: "Experience United",
    lines: ["5 Classes", "14 Days", "$70"],
    lede: "Your introduction to United Strength.",
  },
  statsNote: "5 classes · 14 days · $70",
  ctaPrimary: {
    label: "Start Your Experience",
    href: "mailto:info@unitedstrengthgym.com?subject=Experience%20United",
  },
  ctaSecondary: { label: "Apply for Membership", href: "/start-here/apply" },
} as const;

// ── Apply — Copywright APPLY + APPLICATION PROCESS (Typeform stub) ──────────

export const APPLY_MEMBERSHIP = {
  metadata: "( Start Here )",
  headline: "Apply for Membership",
  lede: "Most gyms start with a membership agreement. We start with a conversation.",
  body: [
    "At United Strength Club, we believe the best results come from understanding the person before prescribing the plan.",
    "Your goals, schedule, experience, challenges, and motivations all matter. These questions help us learn where you are today, what you're working toward, and how we can best support you along the way.",
    "They also give you an opportunity to reflect on your own goals, priorities, and commitment before getting started.",
  ],
  statement: [
    "Our goal isn't to fit you into a system.",
    "It's to build the right path for you.",
  ],
  steps: [
    { n: "01", title: "Complete the Application", body: "5–10 minutes." },
    { n: "02", title: "We Review It", body: "Our team will review your responses." },
    {
      n: "03",
      title: "We Connect",
      body: "We'll reach out to schedule a brief consultation.",
    },
    {
      n: "04",
      title: "We Find the Right Starting Point",
      body: "Together, we'll determine the best path for you based on your goals, lifestyle, and experience.",
    },
  ],
  closing:
    "Once we review your application, we'll reach out to discuss your goals, answer any questions, and help determine the best starting point within the United Strength ecosystem.",
  /** null until Todd sends Typeform URL — CTA uses mailto (Part F) */
  typeformUrl: null as string | null,
  beginApplicationLabel: "Begin Application",
  mailto:
    "mailto:membership@unitedstrengthgym.com?subject=Membership%20Application",
  mailtoLabel: "Begin Application",
  experienceHref: "/start-here/experience",
} as const;

// ── Membership — Copywright _MEMBERSHIP PAGE (public prices on this route) ───

export const MEMBERSHIP_PAGE = {
  metadata: "( Membership )",
  headline: "Membership",
  lede: "Four memberships. Different ways to train. One United.",
  body: [
    "Four memberships. Different ways to train. One United.",
  ],
  tiers: [
    {
      n: "01",
      name: "Essential",
      subtitle: "Open Gym",
      price: "$70",
      period: "/ month",
      blurb:
        "Independent access to United Strength for people who prefer to train on their own.",
      includes: [
        "Open Gym access",
        "Independent training",
        "United member access + amenities",
      ],
    },
    {
      n: "02",
      name: "Signature",
      subtitle: "2X / Week",
      price: "$130",
      period: "/ month",
      blurb:
        "Two Signature Classes each week for people who want coached training with flexibility in their schedule.",
      includes: [
        "2 Signature Classes per week",
        "BUILD",
        "BURN",
        "BALANCE when available",
        "Trainerize programming",
        "Training history + progress tracking",
      ],
    },
    {
      n: "03",
      name: "Signature",
      subtitle: "Unlimited",
      price: "$175",
      period: "/ month",
      blurb:
        "Unlimited Signature Classes for people who want coached training without limiting how often they can come.",
      includes: [
        "Unlimited Signature Classes",
        "BUILD",
        "BURN",
        "BALANCE when available",
        "Trainerize programming",
        "Training history + progress tracking",
      ],
    },
    {
      n: "04",
      name: "United",
      subtitle: "All Access",
      price: "$200",
      period: "/ month",
      blurb:
        "Our complete membership for people who want both coached training and the freedom to train independently.",
      includes: [
        "Unlimited Signature Classes",
        "Open Gym access",
        "BUILD",
        "BURN",
        "BALANCE when available",
        "Trainerize programming",
        "Training history + progress tracking",
      ],
    },
  ],
  valueProps: {
    n: "02",
    title: "What Your Membership Gives You",
    rows: [
      {
        title: "Intentional Programming",
        body: "Training should have a reason behind it. Our Signature Classes are intentionally programmed so you're building on the work you've already done rather than walking into a completely random workout every day.",
      },
      {
        title: "Experienced Coaching",
        body: "You're not simply being taken through a workout. Our coaches are there to teach, adjust, challenge and help you better understand what you're doing.",
      },
      {
        title: "Your Programming, In Your Pocket",
        body: "Signature members receive access to their programming through Trainerize. See your workouts, exercises, sets and reps, record your numbers and keep a history of your training so you can actually see how you're progressing.",
      },
      {
        title: "A Space Designed With Intention",
        body: "The environment matters. From the equipment we choose to the way the space functions and feels, United has been intentionally designed around the experience of the people using it.",
      },
      {
        title: "People Who Know Your Name",
        body: "United is intentionally built around connection. We want this to be a place where people know you, where relationships form naturally, and where someone notices when you haven't been around.",
      },
    ],
  },
  ecosystem: {
    n: "03",
    title: "More Than Your Membership",
    note: "Becoming part of United gives you access to a much larger environment focused on strength, health, connection and longevity. Not everything below is included in monthly membership.",
    rows: [
      {
        title: "Move the City // Run Club",
        body: "Our community Run Club built around movement, conversation and connection.",
        status: "live" as const,
        href: "/training/move-the-city",
      },
      {
        title: "Cultivated",
        body: "Intentionally small experiences designed to bring people together in different ways.",
        status: "live" as const,
        href: "/culture/cultivated",
      },
      {
        title: "Archive",
        body: "Something worth reading, thinking about, and taking with you.",
        status: "live" as const,
        href: "/culture/archive",
      },
      {
        title: "Foundation",
        body: "Coming soon.",
        status: "coming-soon" as const,
        href: null,
      },
      {
        title: "Longevity",
        body: "Coming soon.",
        status: "coming-soon" as const,
        href: null,
      },
      {
        title: "Personal Training",
        body: "Individualized coaching available separately.",
        status: "live" as const,
        href: "/training/personal",
      },
    ],
  },
  howToJoin: [
    {
      n: "01",
      title: "Experience United",
      href: "/start-here/experience",
      body: "5 classes · 14 days · $70. Experience United gives you a chance to train with us, meet our coaches and understand how United works before choosing a membership.",
    },
    {
      n: "02",
      title: "Apply for Membership",
      href: "/start-here/apply",
      body: "Already know you're ready? Apply for membership and we'll learn a little more about what you're looking for and help determine the best place to start.",
    },
  ],
  personalTraining: {
    headline: "Looking for Personal Training?",
    ctaLabel: "Explore Personal Training",
    href: "/training/personal",
  },
  perks: [
    "Intentional programming",
    "Experienced coaching",
    "Your programming, in your pocket (Trainerize)",
    "A space designed with intention",
    "People who know your name",
  ],
} as const;

// ── Contact — live /contact ──────────────────────────────────────────────────

export const CONTACT_PAGE = {
  metadata: "( Contact )",
  headline: "Contact",
  lede: "Downtown Columbus — come by, write, or ask a question.",
  address: "237 Cleveland Ave, Columbus, Ohio 43215",
  parking: "Parking behind the building · near Columbus State",
  emails: [
    { label: "General", href: "mailto:info@unitedstrengthgym.com", display: "info@unitedstrengthgym.com" },
    {
      label: "Membership",
      href: "mailto:membership@unitedstrengthgym.com",
      display: "membership@unitedstrengthgym.com",
    },
    {
      label: "Training",
      href: "mailto:training@unitedstrengthgym.com",
      display: "training@unitedstrengthgym.com",
    },
  ],
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/united_strength/",
  },
} as const;
