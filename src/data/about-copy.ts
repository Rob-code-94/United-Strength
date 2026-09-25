/**
 * About section copy — Direction EF lookbook pages.
 * Sources: tmp-copywright/ · unitedstrengthgym.com · Archive Issue 001
 * Copywright Part D update Sep 2026: Philosophy, Founder, Team, Space, FAQ.
 */

// ── Philosophy — Todd PHILOSOPHY PAGE ────────────────────────────────────────

export interface PhilosophyChapter {
  n: string;
  title: string;
  metadata?: string;
  lede?: string;
  quote?: string;
  body?: readonly string[];
  /** Serif pull headline */
  headline?: string;
}

/** Source: Todd's Philosophy page brief. */
export const PHILOSOPHY_CHAPTERS = {
  /** Full-screen hero. Headline only. */
  hero: {
    headline: "Cutting Through the Noise",
  },
  /** After the hero. 01 // Philosophy · // What We Believe */
  place: {
    n: "01",
    title: "Philosophy",
    kicker: "What We Believe",
    headline: "You are capable of more.",
    body: [
      "There is more information than ever about how to be healthy, yet taking care of ourselves has somehow become more complicated.",
      "We believe it can be simpler.",
      "Train with intention. Understand your body. Take care of your health. Stay connected to people. Build a life that allows you to keep doing the things you love for as long as possible.",
      "United exists to help people make sense of what matters, put it into practice, and keep moving forward.",
    ],
  },
  /** Horizontal manifesto break. */
  manifesto: {
    title: "Manifesto",
    headline: "What does it really mean to be healthy?",
    body: [
      "We don't believe health is defined by how much you lift, how you look, or how often you make it to the gym.",
      "It is the ability to live your life well.",
      "To move. To think. To connect. To adapt. To remain capable. To keep doing the things you love with the people you love.",
      "Training is part of that.",
      "But it is only part of it.",
    ],
  },
  /** Sparse close. No repeat of belief 05. */
  close: {
    lines: [
      "You have to do the work.",
      "But you shouldn't have to do it alone.",
      "Stronger United.",
    ],
  },
} as const;

/** Five Core Beliefs — one full screen at a time. */
export const PHILOSOPHY_HEALTH_AREAS = [
  {
    n: "01",
    title: "Cut Through the Noise",
    body: [
      "There is more information than ever about how to be healthy. More trends. More shortcuts. More people telling you what you should be doing.",
      "We believe in making it simpler. Understand what matters, understand why it matters, and build the confidence to take ownership of your health.",
    ],
  },
  {
    n: "02",
    title: "Build Strength for Life",
    body: [
      "Strength is more than what you can lift.",
      "It's building and maintaining a body that allows you to remain capable throughout your life.",
      "It's challenging yourself, doing difficult things, and continuing to raise the standard of what you believe you're capable of.",
    ],
  },
  {
    n: "03",
    title: "People Need People",
    body: [
      "At a time when we are more connected than ever, we have somehow become more disconnected.",
      "We believe community matters. Having people who know you, challenge you, support you, and notice when you're not there matters.",
    ],
  },
  {
    n: "04",
    title: "Take Care of the Whole Person",
    body: [
      "Health is physical, but it isn't only physical.",
      "How you move, how you think, how you recover, how you connect with people, and how you take care of yourself outside the gym all play a role in how well you live.",
    ],
  },
  {
    n: "05",
    title: "Do the Work",
    body: [
      "There are no shortcuts to lasting change.",
      "Show up. Be consistent. Challenge yourself. Keep learning. Keep growing.",
      "You have to do the work. But you shouldn't have to do it alone.",
    ],
  },
] as const;

// ── Founder — Copywright FOUNDER STORY PAGE.txt ──────────────────────────────

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

/** Source: FOUNDER STORY PAGE.txt */
export const FOUNDER_CHAPTERS = {
  origin: {
    n: "01",
    title: "Origin",
    metadata: "( Founder )",
    headline: "Todd Johnson",
    lede: "Founder, United Strength",
  },
  story: {
    n: "01",
    title: "Story",
    metadata: "( Journey )",
    headline: "",
    body: [
      "Before anything else, I'm a father and a husband.",
      "Showing up for my daughter and building a legacy she can be proud of is what drives me.",
      "Everything I build is rooted in leaving this world better than I found it.",
      "That's what shapes how I show up in my work, in my leadership, and in the spaces I build.",
      "I've spent over 20 years working in fitness, in hospitals, athletic performance settings, and alongside everyday people who just want to feel better in their own bodies and in their lives. I've seen people at their lowest and their strongest. What changes people is not hype or shortcuts, it is consistency, support, and knowing someone actually cares. The relationships I built during that time, many of which have lasted 15 years and counting, showed me what real trust looks like and why community matters.",
      "I've owned and operated gyms for over a decade, building through seasons most people never see and learning what it actually takes to create something that lasts. Along the way, I've helped build brands, design training spaces, and shape the culture of fitness communities, work that's grown into consulting with other founders who want to build with intention.",
      "Earlier in my career, I went through a long and difficult season in business that tested me mentally, financially, and personally. Walking away would have been easier. I chose not to. That season sharpened my standards. It clarified what I stand for, principle, integrity, and intention, and taught me to build with transparency, structure, and people who share those values.",
      "What carried me through that season was people.",
      "Clients and members who believed in me, showed up for me, and chose to keep moving forward together. Their support gave United Strength its deeper meaning. This gym exists because of that shared commitment to keep going, not just for ourselves, but for each other.",
      "United Strength was also built in response to something I see happening in our world. We are more disconnected than ever. Screens, noise, and division have made it harder to find real connection. People need community. They need accountability. They need spaces where they can show up as they are and grow alongside others who are doing the same.",
      "I also wanted to approach fitness differently.",
      "The industry is saturated with misinformation, shortcuts, and trends that promise quick results without teaching people how to build lasting health. Dependency has become the norm, on programs, personalities, and external answers, instead of helping people develop the understanding and confidence to take ownership of their health long term.",
      "United Strength exists to cut through that noise.",
      "Our approach is rooted in education, intention, and longevity. We aim to give people the tools to understand their bodies, take care of their health, physically and mentally, and build strength that carries into every part of their life.",
    ],
  },
  community: {
    n: "02",
    title: "What I Believe",
    metadata: "( Belief )",
    quote: "AT ITS CORE, UNITED STRENGTH IS ABOUT CHOOSING PEOPLE.",
    body: [
      "Choosing to grow.",
      "Choosing to build something honest, supportive, and meaningful, without an agenda other than helping each other become better every day.",
    ],
  },
  credentials: {
    n: "03",
    title: "Credentials",
    metadata: "( Index )",
  },
} as const;

/** Ruled credential index — kept in data but removed from editorial sections per Todd Sep 2026. */
export const FOUNDER_CREDENTIAL_ROWS = [
  {
    label: "Education",
    value: "Bachelor of Science in Exercise Physiology & Sports Management",
  },
  { label: "Certifications", value: "ACSM CPT · USAW" },
  {
    label: "Experience",
    value:
      "20+ years in fitness and wellness — hospital rehab to strength and conditioning. Owner/operator of gyms for over a decade.",
  },
] as const;

/** Story-led sequence — credentials removed per FOUNDER STORY PAGE.txt direction. */
export const FOUNDER_EDITORIAL_SECTIONS = [
  {
    key: "story" as const,
    tone: "white" as const,
    next: "02 // What I Believe",
  },
  {
    key: "community" as const,
    tone: "alabaster" as const,
  },
];

// ── Team — Copywright MEET THE TEAM PAGE.txt ─────────────────────────────────

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

/** Source: MEET THE TEAM PAGE.txt */
export const TEAM_INTRO = {
  lede: "Starting your fitness journey can be difficult, but our team is here to encourage and challenge you to become the best version of yourself.",
  headline: "Meet the Team",
} as const;

/** Source: unitedstrengthgym.com/johnson, /farkas, /katz, /shaffer */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "todd-johnson",
    name: "Todd Johnson",
    role: "Owner, Coach",
    specialty: "Strength & HIIT circuit training",
    lede: "Building a community that truly cares — 20+ years in fitness, owner since 2014.",
    bio: "Education: Bachelor of Science in Exercise Physiology & Sports Management. Certifications: ACSM CPT; USAW. I have been working in the fitness and wellness industry for over 20 years, starting in a hospital setting with physical therapy and rehab, then shifting to strength and conditioning and personal training. I opened my first gym in 2014 and transitioned to opening United Strength in 2021. My passion lies within building a community that truly cares about one another and working to help people reach their fitness goals. Style of training: Strength & HIIT circuit training; Bodybuilding. Favorite exercises: Back squat & Bench press.",
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

// ── Space — Copywright THE SPACE PAGE.txt ────────────────────────────────────

export interface SpaceChapter {
  n: string;
  title: string;
  metadata?: string;
  lede?: string;
  body?: string[];
  memberQuote?: string;
  memberAttribution?: string;
}

/** Source: THE SPACE PAGE.txt + unitedstrengthgym.com homepage testimonials. */
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
    title: "Experience United",
    metadata: "( Start Here )",
    lede: "Experience United is how you get to know us — and how we get to know you. The best way to understand what United is about is to be here.",
    address: "237 Cleveland Ave, Columbus, Ohio 43215",
    parking: "Parking behind the building · near Columbus State",
  },
} as const;

export const SPACE_EDITORIAL_SECTIONS = [
  {
    key: "mosaic" as const,
    tone: "white" as const,
    next: "02 // Experience United",
  },
  {
    key: "visit" as const,
    tone: "alabaster" as const,
  },
];

// ── FAQ — Copywright FAQ PAGE.txt ─────────────────────────────────────────────

export interface FaqItem {
  q: string;
  a: string;
  /** Section anchor */
  section: "general" | "training" | "memberships" | "visiting";
}

/**
 * Source: FAQ PAGE.txt — 20 questions, 4 sections.
 * Answers: placeholder "Details coming." where doc deferred; kept existing if stronger.
 */
export const FAQ_ITEMS: FaqItem[] = [
  // ── GENERAL ──────────────────────────────────────────────────────────────
  {
    section: "general",
    q: "What is United Strength?",
    a: "United Strength is a private fitness club in downtown Columbus, Ohio. We offer intentional coaching, structured classes, personal training, and a community built around a shared commitment to health and strength.",
  },
  {
    section: "general",
    q: "Is United Strength a private club?",
    a: "Yes. Membership is selective and reviewed by the team. We're not a traditional open-enrollment gym.",
  },
  {
    section: "general",
    q: "Do I need to be experienced to train at United?",
    a: "No. You need to be willing to learn, challenge yourself, and keep showing up. Our coaches meet you where you are.",
  },
  {
    section: "general",
    q: "What makes United different from a traditional gym?",
    a: "Intentional coaching, a selective membership community, structured programming, and a space built to make the practice feel deliberate — not just another place to work out.",
  },
  // ── TRAINING ─────────────────────────────────────────────────────────────
  {
    section: "training",
    q: "What types of training do you offer?",
    a: "We offer BUILD, BURN, and BALANCE signature classes, personal training (1:1 and private group), and Move the City // Run Club.",
  },
  {
    section: "training",
    q: "What are BUILD, BURN and BALANCE?",
    a: "BUILD is our functional strength training class. BURN is our conditioning and HIIT class. BALANCE is coming soon — recovery, mobility, and the quieter side of the practice.",
  },
  {
    section: "training",
    q: "Do you offer personal training?",
    a: "Yes. Our coaches offer 1:1 coaching and private group training, each built around your goals, your body, and your life. Inquire at training@unitedstrengthgym.com.",
  },
  {
    section: "training",
    q: "Can I train on my own?",
    a: "Details coming.",
  },
  {
    section: "training",
    q: "What is Move the City // Run Club?",
    a: "Move the City is our free run club — open to everyone. No membership required. We get outside, move our bodies, and spend time with people.",
  },
  {
    section: "training",
    q: "Do I need to be a member to work with a coach?",
    a: "Details coming.",
  },
  // ── MEMBERSHIP ───────────────────────────────────────────────────────────
  {
    section: "memberships",
    q: "How does membership work?",
    a: "Membership is selective and reviewed by the team. There is no open checkout on this site. Apply when you're ready; we will follow up.",
  },
  {
    section: "memberships",
    q: "Why do I need to apply for membership?",
    a: "United Strength is a community first. The application helps us understand your goals and whether the club is the right fit — belonging over volume.",
  },
  {
    section: "memberships",
    q: "Can I try United before becoming a member?",
    a: "Yes. Experience United is how you get to know us — and how we get to know you.",
  },
  {
    section: "memberships",
    q: "What is Experience United?",
    a: "Details coming.",
  },
  {
    section: "memberships",
    q: "What membership options are available?",
    a: "Membership options are discussed during the application process. We do not publish pricing on this site.",
  },
  {
    section: "memberships",
    q: "Can I cancel my membership?",
    a: "Details coming.",
  },
  // ── VISITING UNITED ───────────────────────────────────────────────────────
  {
    section: "visiting",
    q: "Where are you located?",
    a: "237 Cleveland Ave, Columbus, Ohio 43215 — downtown near Columbus State.",
  },
  {
    section: "visiting",
    q: "Is parking available?",
    a: "Yes — parking is available behind the building.",
  },
  {
    section: "visiting",
    q: "When can members access the gym?",
    a: "Details coming.",
  },
  {
    section: "visiting",
    q: "What should I expect the first time I come in?",
    a: "Experience United is the recommended first step — you'll train with us, meet our coaches, understand how our classes work, and decide if United is the right place for you.",
  },
];

export const FAQ_INTRO = {
  headline: "Questions, answered without the noise.",
  lede: "Straight answers grounded in how United Strength operates today.",
} as const;
