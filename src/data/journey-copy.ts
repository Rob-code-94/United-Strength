/**
 * Journey + contact soft twins — live-site parity wave.
 * Culture lives in `culture-copy.ts` · `direction-ef/culture/`.
 * Sources: unitedstrengthgym.com · todd-homepage-direction-aug-2026 · training-copy hours
 * No public prices · no Triib Book chrome.
 */

export { FACILITY_HOURS, FACILITY_ADDRESS } from "./training-copy";

// ── Experience United — live free trial / tour ───────────────────────────────

export const EXPERIENCE_UNITED = {
  metadata: "( Start Here )",
  headline: "Experience United",
  lede: "Feel the practice before you apply — the recommended first step.",
  body: [
    "Take a free tour of our facility to help you decide if United Strength is the right gym for you. You'll have the opportunity to try equipment, observe classes, and get answers to all of your questions.",
    "We offer a free trial class to those who are interested. Regardless of where you're starting from, the United Strength community is here to help educate and motivate you to reach your goals.",
  ],
  stats: [
    { n: "5", label: "Classes" },
    { n: "14", label: "Days" },
    { n: "$75", label: "Intro" },
  ],
  statsNote: "Experience United intro framing — details confirmed with the team on visit.",
  ctaPrimary: { label: "Free Trial Class", href: "mailto:info@unitedstrengthgym.com" },
  ctaSecondary: { label: "Apply for Membership", href: "/start-here/apply" },
} as const;

// ── Apply — live become-a-member (no prices) ─────────────────────────────────

export const APPLY_MEMBERSHIP = {
  metadata: "( Start Here )",
  headline: "Apply for Membership",
  lede: "Selective membership — reviewed by the team. Belonging over volume.",
  body: [
    "Membership is selective and reviewed by the team. There is no open checkout on this marketing site.",
    "Apply when you are ready. We will follow up to understand your goals and whether United is the right fit.",
  ],
  steps: [
    { n: "01", title: "Experience", body: "Tour the space and try a class so you know the practice." },
    { n: "02", title: "Apply", body: "Tell us about yourself — goals, schedule, and what you're looking for." },
    { n: "03", title: "Review", body: "The team confirms availability and next steps." },
  ],
  mailto: "mailto:membership@unitedstrengthgym.com?subject=Membership%20Application",
  mailtoLabel: "Email your application",
  experienceHref: "/start-here/experience",
} as const;

// ── Membership — live pricing rewritten (no public $) ────────────────────────

export const MEMBERSHIP_PAGE = {
  metadata: "( Membership )",
  headline: "Membership",
  lede: "A place to pursue your potential alongside others who challenge you to grow.",
  body: [
    "United Strength is a community designed to connect people through fitness. Membership is about belonging — not a public price list.",
    "Pricing is discussed in the application process. Public monthly rates are not shown on this layer.",
  ],
  howToJoin: [
    { n: "01", title: "Experience", href: "/start-here/experience", body: "Start with a visit or free trial class." },
    { n: "02", title: "Apply", href: "/start-here/apply", body: "Submit interest — the team reviews every application." },
    { n: "03", title: "Belong", href: "/about/team", body: "Train with coaches who invest in your long game." },
  ],
  perks: [
    "Coach-led Build and Burn classes",
    "Open gym access as part of club life",
    "Personal training pathways",
    "A community that knows your name",
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

// ── Privacy — lookbook shell (counsel / Mariana SMS fields later) ────────────

export const PRIVACY_PAGE = {
  metadata: "( Legal )",
  headline: "Privacy Policy",
  lede: "How United Strength Club handles information you share with us.",
  intro: [
    "This page outlines our approach to privacy for the United Strength Club website and related communications. Final counsel language and SMS program details will be confirmed before Mariana Tek launch.",
  ],
  sections: [
    {
      title: "Information we collect",
      body: "When you contact us, apply for membership, or request a visit, we may collect your name, email, phone number, and details you choose to share about your goals.",
    },
    {
      title: "How we use information",
      body: "We use this information to respond to inquiries, review membership applications, schedule visits, and operate the club. We do not sell personal information.",
    },
    {
      title: "Mobile messaging (SMS)",
      body: "If you opt into club text messages, message frequency varies. Message and data rates may apply. Reply STOP to opt out and HELP for help. Support phone and frequency caps will be confirmed with the team before SMS launch. See also our Terms of Use.",
    },
    {
      title: "Contact",
      body: "Questions about privacy: info@unitedstrengthgym.com · 237 Cleveland Ave, Columbus, Ohio 43215.",
    },
  ],
} as const;

// ── Terms — lookbook shell (SMS program sections for Mariana prep) ───────────

export const TERMS_PAGE = {
  metadata: "( Legal )",
  headline: "Terms of Use",
  lede: "Guidelines for using the United Strength Club website and related services.",
  intro: [
    "By using this site you agree to these terms. Membership, training, and facility use are governed by agreements shared during the application and onboarding process.",
  ],
  sections: [
    {
      title: "Website use",
      body: "Content on this marketing site is for information about United Strength Club. It does not create a membership contract. Booking and account tools, when linked, are provided by our gym software partner.",
    },
    {
      title: "Membership & applications",
      body: "Membership is selective and reviewed by the team. Submitting an application does not guarantee acceptance. Pricing and plan details are confirmed directly with the club — not via open checkout on this marketing layer.",
    },
    {
      title: "SMS program",
      body: "By opting into SMS you agree to receive club-related messages (visits, membership, schedule updates as offered). Frequency varies. Carrier fees may apply. Opt out anytime by replying STOP. Help: reply HELP or email info@unitedstrengthgym.com. Exact message types and caps will be confirmed before launch.",
    },
    {
      title: "Privacy",
      body: "Our Privacy Policy describes how we handle personal information, including mobile data where applicable.",
    },
    {
      title: "Contact",
      body: "United Strength Club · 237 Cleveland Ave, Columbus, Ohio 43215 · info@unitedstrengthgym.com",
    },
  ],
} as const;
