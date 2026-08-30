/**
 * About section copy — Direction EF lookbook pages.
 * Sources: unitedstrengthgym.com · Archive Issue 001 (US EDITORIAL Post/) · docs/wireframes/faq.md
 */

import { gymPhotos } from "../assets/images/gym";

// ── Philosophy — Archive Issue 001 (IMG_6408, IMG_6409) ─────────────────────

export interface PhilosophyChapter {
  n: string;
  title: string;
  metadata?: string;
  lede?: string;
  quote?: string;
  body?: string[];
  /** Serif pull headline */
  headline?: string;
}

/** Source: US EDITORIAL Post/IMG_6408.jpeg, IMG_6409.jpeg */
export const PHILOSOPHY_CHAPTERS = {
  /** ch.01 — Cutting Through the Noise */
  hero: {
    n: "01",
    title: "What We Hold",
    metadata: "( Philosophy )",
    lede: "Every week, we explore one topic to help you make better decisions about your health — without the hype, confusion, or endless opinions.",
    headline: "Cutting Through the Noise",
  },
  /** ch.02 — Manifesto opener */
  manifesto: {
    n: "02",
    title: "Manifesto",
    headline: "What does it really mean to be healthy?",
    body: [
      "Ask ten people what it means to be healthy, and you'll probably get ten different answers. Some will say losing weight. Others will say running a marathon. Some will say having visible abs. But none of those things, on their own, define health.",
      "Somewhere along the way, we started confusing looking healthy with actually being healthy. The reality is, health is much bigger than any single metric.",
    ],
  },
  /** ch.03 — Place / life you're building */
  place: {
    n: "03",
    title: "Place",
    metadata: "( Columbus )",
    quote:
      "People don't stay because of equipment. They stay because of how a place makes them feel.",
    body: [
      "At United, we believe real health is having the strength to carry your kids and eventually your grandkids. It's having the energy to enjoy your life instead of constantly feeling exhausted. It's being able to move well, recover from setbacks, manage stress, build meaningful relationships, and understand what's actually happening inside your body.",
      "It's not just about how you look today. It's about the life you're building for the years to come — the strength to carry kids and grandkids, the energy to enjoy life, moving well, managing stress, and understanding your own biology.",
      "That's why strength matters. Why movement matters. Why your habits and behaviors matter. Why the people you surround yourself with matter. And why understanding things like your bloodwork, body composition, and cardiovascular health becomes increasingly important as you age.",
      "The problem is that we tend to look at each of these things separately, when real health is built by paying attention to all of them. You can be strong and still neglect your health. You can be thin and still lack muscle, energy, or cardiovascular fitness.",
    ],
  },
  /** ch.04 — The Practice (photo chapter) */
  practice: {
    n: "04",
    title: "The Practice",
    lede: "For United, real health is built on four key areas.",
  },
  /** ch.05 — Four Key Areas index */
  fourAreas: {
    n: "05",
    title: "Four Key Areas",
    metadata: "( Index )",
  },
  /** ch.06 — Continue / closing */
  continue: {
    n: "06",
    title: "Continue",
    body: [
      "There is no single workout, diet, supplement, medication, or health trend that solves everything.",
      "The goal isn't simply to live longer. It's to live better for longer. To stay capable. To stay independent. To keep doing the things you love with the people you care about.",
    ],
    headline: "Health isn't something you achieve. It's something you continue to build.",
  },
} as const;

/** Source: US EDITORIAL Post/IMG_6409.jpeg */
export const PHILOSOPHY_HEALTH_AREAS = [
  {
    n: "01",
    title: "Strength",
    body: "Building a body that is strong and capable through all phases of life.",
  },
  {
    n: "02",
    title: "Self-awareness",
    body: "Understanding yourself, and creating lasting change.",
  },
  {
    n: "03",
    title: "Connection",
    body: "Surrounding yourself with people who challenge you, support you, and make life better.",
  },
  {
    n: "04",
    title: "Longevity",
    body: "Using meaningful information to understand where you are today and improve for tomorrow.",
  },
] as const;

/** Layout map for EF Philosophy — off-center editorial + hairline sections. */
export type PhilosophyEditorialKey =
  | "hero"
  | "manifesto"
  | "place"
  | "practice"
  | "fourAreas"
  | "continue";

export interface PhilosophyEditorialLayout {
  key: PhilosophyEditorialKey;
  align?: "media-left" | "media-right";
  image?: string;
  imageAlt?: string;
  tone?: "white" | "alabaster";
  next?: string;
}

export const PHILOSOPHY_EDITORIAL_SECTIONS: PhilosophyEditorialLayout[] = [
  {
    key: "hero",
    align: "media-left",
    image: gymPhotos.galleryCinematic,
    imageAlt: "United Strength — quiet moment in the practice",
    tone: "white",
    next: "02 // Manifesto",
  },
  {
    key: "manifesto",
    tone: "alabaster",
    next: "03 // Place",
  },
  {
    key: "place",
    align: "media-right",
    image: gymPhotos.spaceAtmosphere,
    imageAlt: "United Strength — atmosphere in the club",
    tone: "white",
    next: "04 // The Practice",
  },
  {
    key: "practice",
    align: "media-left",
    image: gymPhotos.experienceBroll,
    imageAlt: "United Strength — the practice",
    tone: "alabaster",
    next: "05 // Four Key Areas",
  },
  {
    key: "fourAreas",
    tone: "white",
    next: "06 // Continue",
  },
  {
    key: "continue",
    align: "media-right",
    image: gymPhotos.architectureRaw,
    imageAlt: "United Strength — downtown club",
    tone: "alabaster",
  },
];

// ── Founder — unitedstrengthgym.com/johnson + Archive IMG_6405 ───────────────

export interface FounderChapter {
  n: string;
  title: string;
  metadata?: string;
  lede?: string;
  headline?: string;
  body?: string[];
  quote?: string;
  quoteAttribution?: string;
}

/** Source: US EDITORIAL Post/IMG_6405.jpeg, unitedstrengthgym.com/johnson */
export const FOUNDER_CHAPTERS = {
  origin: {
    n: "01",
    title: "Origin",
    metadata: "( Founder )",
    headline: "Todd Johnson",
    lede: "Owner and coach — building a community that truly cares about one another.",
  },
  story: {
    n: "01",
    title: "Story",
    metadata: "( Journey )",
    headline: "Built downtown. For people who take the practice seriously.",
    body: [
      "My love of sports and fitness started in high school — track and soccer, the camaraderie of being part of a team. Once we started hitting the weight room, I was addicted. That led me to double major in exercise physiology and sports management at MVNU.",
      "Upon graduation, I gained experience at Dunlap Community Hospital in Orville, working with physical and occupational therapists along with athletic trainers. Wanting to focus more on helping people with their fitness goals, I moved to Columbus to become a personal trainer with aspirations of opening my own gym.",
      "I opened my first gym in 2014 and transitioned to opening United Strength in 2021. My passion lies within building a community that truly cares about one another and working to help people reach their fitness goals.",
    ],
  },
  community: {
    n: "02",
    title: "Community",
    metadata: "( Belonging )",
    body: [
      "We're not changing who we are. We're becoming more intentional about how we deliver it. This isn't about becoming exclusive. It's about creating a place where people can pursue their potential alongside others who challenge them to grow.",
    ],
    quote: "Don't limit your challenges, challenge your limits.",
    quoteAttribution: "Jerry Dunn",
    advice:
      "Don't be intimidated or discouraged by weight-training — everyone has to start someplace. Take the time to learn proper movements and techniques. Above all, don't compare yourself to other people. Everyone has their own fitness journey.",
    memberNote:
      "This newly opened gym is designed thoughtfully and beautifully by the experienced owner, Todd Johnson.",
    memberAttribution: "Liz Pione",
  },
  credentials: {
    n: "03",
    title: "Credentials",
    metadata: "( Index )",
  },
} as const;

/** Ruled credential index — about-us-13 DNA (no image split). Source: /johnson */
export const FOUNDER_CREDENTIAL_ROWS = [
  {
    label: "Education",
    value: "Bachelor of Science in Exercise Physiology & Sports Management",
  },
  { label: "Certifications", value: "ACSM CPT · USAW" },
  {
    label: "Experience",
    value:
      "12+ years in fitness and wellness — hospital rehab to strength and conditioning. Owner/operator of two gyms for eight years.",
  },
  {
    label: "Style",
    value: "Strength & HIIT circuit training · Bodybuilding",
  },
  { label: "Favorites", value: "Back squat · Bench press" },
] as const;

/** Story-led sequence — no image chapters (opener + text + pull-quote + ruled index). */
export const FOUNDER_EDITORIAL_SECTIONS = [
  {
    key: "story" as const,
    tone: "white" as const,
    next: "02 // Community",
  },
  {
    key: "community" as const,
    tone: "alabaster" as const,
    next: "03 // Credentials",
  },
  {
    key: "credentials" as const,
    tone: "white" as const,
  },
];

// ── Team — unitedstrengthgym.com/our-team + coach slug pages ────────────────

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  /** Short lede for grid */
  lede: string;
  /** Full bio on expand — source: live coach page */
  bio: string;
  /** Source URL for client review */
  source: string;
}

/** Source: unitedstrengthgym.com/our-team */
export const TEAM_INTRO = {
  lede: "Starting your fitness journey can be difficult, but our team is here to encourage and challenge you to become the best version of yourself.",
  headline: "Practitioners of the discipline — guiding the collective pursuit of strength in Columbus.",
} as const;

/** Source: unitedstrengthgym.com/johnson, /farkas, /katz, /shaffer */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "todd-johnson",
    name: "Todd Johnson",
    role: "Owner, Coach",
    specialty: "Strength & HIIT circuit training",
    lede: "Building a community that truly cares — 12+ years in fitness, owner since 2014.",
    bio: "Education: Bachelor of Science in Exercise Physiology & Sports Management. Certifications: ACSM CPT; USAW. I have been working in the fitness and wellness industry for over 12 years, starting in a hospital setting with physical therapy and rehab, then shifting to strength and conditioning and personal training. I opened my first gym in 2014 and transitioned to opening United Strength in 2021. My passion lies within building a community that truly cares about one another and working to help people reach their fitness goals. Style of training: Strength & HIIT circuit training; Bodybuilding. Favorite exercises: Back squat & Bench press.",
    source: "https://www.unitedstrengthgym.com/johnson",
  },
  {
    id: "jenna-farkas",
    name: "Jenna Farkas",
    role: "Coach",
    specialty: "Bodybuilding, circuits, HIIT",
    lede: "Physical therapy background · WNBF Bikini pro · nutrition and strength.",
    bio: "Education: Bachelors of Health Science at Bowling Green State University and Physical Therapist Assistant Program at Kent State Ashtabula. Certifications: ACSM CPT, AFPA Weight management and Nutrition and Fitness. I worked as a physical therapy assistant for 7+ years before joining United Strength in 2021. I competed in bodybuilding in the NPC and WNBF, winning my WNBF Bikini pro card in 2020. Style of training: Bodybuilding, circuits, HIIT. Favorite exercises: Deadlifts, anything shoulder and back.",
    source: "https://www.unitedstrengthgym.com/farkas",
  },
  {
    id: "jason-katz",
    name: "Jason Katz",
    role: "Coach",
    specialty: "Powerlifting and bodybuilding",
    lede: "Seven years coaching — powerlifting base with thoughtful progressions.",
    bio: "Certifications: USAW, PPSC (pain-free performance specialist), and Precision Nutrition Level 1 coach. I have been coaching and working in the fitness field for seven years. I translate my training style with clients, helping them build a strong base and incorporate HIIT for fat loss. I focus on teaching proper form and the science behind the exercises. Thoughtful programming and proper progressions have gotten my clients to exceed their original goals — from clients who lost 100lbs in less than a year to collegiate athletes. Style of training: Powerlifting and bodybuilding. Favorite exercise: Deadlift.",
    source: "https://www.unitedstrengthgym.com/katz",
  },
  {
    id: "kara-shaffer",
    name: "Kara Shaffer",
    role: "Coach",
    specialty: "Bodybuilding, kettlebell, HIIT, mobility",
    lede: "Gymnastics coach turned trainer — form, alignment, and strength.",
    bio: "Certifications: NASM CPT, USA Gymnastics, IIN Health Coaching, SOP Pilates Reformer, NCI Nutrition Coach, ATG Certification. I started as a competitive gymnastics coach from 2014–2021, then moved into personal training in 2019. Coaching gymnastics taught me how to be hands-on and how to have an eye for form. Pilates reformer taught me how to breathe correctly while exercising and the importance of body alignment. My goal is to combine all of this with resistance training for an optimized workout. Style of training: Bodybuilding, kettlebell, HIIT, calisthenics, + mobility.",
    source: "https://www.unitedstrengthgym.com/shaffer",
  },
];

// ── Space — unitedstrengthgym.com homepage + testimonials ───────────────────

export interface SpaceChapter {
  n: string;
  title: string;
  metadata?: string;
  lede?: string;
  body?: string[];
  memberQuote?: string;
  memberAttribution?: string;
}

/** Source: unitedstrengthgym.com homepage — photo-first (gallery dominates). */
export const SPACE_CHAPTERS = {
  hero: {
    n: "01",
    title: "The Space",
    metadata: "( Facility )",
    lede: "United Strength is a community designed to connect people through fitness — downtown Columbus.",
    headline: "We're more than a gym.",
    body: [] as string[],
  },
  mosaic: {
    n: "01",
    title: "Inside",
    metadata: "( Gallery )",
    lede: "Architecture · light · equipment · materials",
    memberQuote:
      "Best gym in Columbus!! This new space is conveniently located right downtown near CState and has parking behind the building. The biggest draw for me is the community — everyone knows each other and it truly feels like a gym family.",
    memberAttribution: "Steve Akey",
    memberQuote2:
      "Quality equipment and three bathrooms are clean and 5 star. It's like a family and everyone pushes one another.",
    memberAttribution2: "Erin Vassar",
  },
  visit: {
    n: "02",
    title: "Visit",
    metadata: "( Schedule a visit )",
    lede: "Take a free tour of our facility to help you decide if United Strength is the right gym for you. You'll have the opportunity to try equipment, observe classes, and get answers to all of your questions.",
    address: "237 Cleveland Ave, Columbus, Ohio 43215",
    parking: "Parking behind the building · near Columbus State",
  },
} as const;

export const SPACE_EDITORIAL_SECTIONS = [
  {
    key: "mosaic" as const,
    tone: "white" as const,
    next: "02 // Visit",
  },
  {
    key: "visit" as const,
    tone: "alabaster" as const,
  },
];

// ── FAQ — docs/wireframes/faq.md + site facts ────────────────────────────────

export interface FaqItem {
  q: string;
  a: string;
  /** Wireframe section anchor */
  section: "general" | "offerings" | "memberships" | "location";
}

/**
 * Source: docs/wireframes/faq.md + unitedstrengthgym.com + brand skill.
 * Todd may refine answers after V1 review — no client-visible draft chrome.
 */
export const FAQ_ITEMS: FaqItem[] = [
  {
    section: "general",
    q: "What should I expect on my first visit?",
    a: "Schedule a free tour — try equipment, observe classes, and get answers to your questions. Experience United is the recommended first step so you can feel the practice before you apply.",
  },
  {
    section: "general",
    q: "What classes do you offer?",
    a: "We offer two results-driven classes led by certified coaches: Build and Burn. Each is designed to build a stronger and healthier you from the inside out.",
  },
  {
    section: "general",
    q: "How do I get in touch?",
    a: "Email info@unitedstrengthgym.com for general questions, membership@unitedstrengthgym.com for membership, or training@unitedstrengthgym.com for coaching. Or apply through Start Here when you are ready to join.",
  },
  {
    section: "offerings",
    q: "What is Build?",
    a: "Build is our strength-focused class — foundational movements, technique, and progressive loading designed to make you stronger over time.",
  },
  {
    section: "offerings",
    q: "What is Burn?",
    a: "Burn is our conditioning class — energy systems work and HIIT circuits designed to improve capacity and complement your strength training.",
  },
  {
    section: "offerings",
    q: "Do you offer personal training and open gym?",
    a: "Yes. Coaches offer personal training alongside group classes, and open gym memberships are part of how the club operates. Details are confirmed during your visit or application.",
  },
  {
    section: "memberships",
    q: "How does membership work?",
    a: "Membership is selective and reviewed by the team. There is no open checkout on the marketing site. Apply when you are ready; we will follow up.",
  },
  {
    section: "memberships",
    q: "Why an application?",
    a: "United Strength is a community first. The application helps us understand your goals and whether the club is the right fit — belonging over volume.",
  },
  {
    section: "memberships",
    q: "Do you publish monthly prices here?",
    a: "No. Public monthly pricing is not shown on this marketing layer. Pricing is discussed in the application process.",
  },
  {
    section: "location",
    q: "Where are you located?",
    a: "237 Cleveland Ave, Columbus, Ohio 43215 — downtown near Columbus State, with parking behind the building.",
  },
  {
    section: "location",
    q: "Is parking available?",
    a: "Yes — parking is behind the building. Members often note the downtown location near CState as convenient.",
  },
];

export const FAQ_INTRO = {
  headline: "Questions, answered without the noise.",
  lede: "Straight answers grounded in how United Strength operates today.",
} as const;
