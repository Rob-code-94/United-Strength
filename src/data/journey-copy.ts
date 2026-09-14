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
    "This page outlines our approach to privacy for the United Strength Club website, membership communications, and related services. Counsel may refine language before public launch.",
  ],
  sections: [
    {
      title: "Information we collect",
      body: "When you contact us, apply for membership, book or visit, or use member tools, we may collect your name, email, phone number, payment-related details processed by our gym software partner, and information you choose to share about your goals.",
    },
    {
      title: "How we use information",
      body: "We use this information to respond to inquiries, review membership applications, operate the club, and provide booking and account services through our partners. We do not sell personal information.",
    },
    {
      title: "Mobile information & SMS",
      body: "No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties. If you opt into club text messages, see our Terms of Use for program details, opt-out (STOP), and help (HELP).",
    },
    {
      title: "Partners",
      body: "Booking, buy, and account experiences may be provided by Mariana Tek / Xplor. Their processing is governed by their policies in addition to this notice.",
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
    "By using this site you agree to these terms. Membership, training, and facility use are also governed by agreements shared during application and onboarding. Booking and account tools, when linked, are provided by our gym software partner.",
  ],
  sections: [
    {
      title: "Website use",
      body: "Content on this marketing site is for information about United Strength Club. It does not by itself create a membership contract. Open checkout and class booking occur in partner embeds or by arrangement with the club — not via public Buy/Reserve chrome on marketing pages.",
    },
    {
      title: "Membership & applications",
      body: "Membership is selective and reviewed by the team. Submitting an application does not guarantee acceptance. Plan details are confirmed directly with the club.",
    },
    {
      title: "SMS program — description",
      body: "By opting in, you agree to receive recurring automated text messages from United Strength Club (\"we,\" \"us,\" \"our\") at the mobile number you provided. Messages may include appointment reminders, class updates, account alerts, promotional offers, and customer support follow-ups. Consent to receive these messages is not a condition of any purchase.",
    },
    {
      title: "SMS program — message frequency",
      body: "You may receive up to [X] messages per [week/month]. Message frequency may vary depending on your activity and interactions with us. (Exact cap to be confirmed with the club before SMS launch.)",
    },
    {
      title: "SMS program — rates",
      body: "Message and data rates may apply. Charges are billed by and payable to your mobile service provider. Please contact your wireless carrier for details about your messaging plan.",
    },
    {
      title: "SMS program — opt out & help",
      body: "Unsubscribe anytime by replying STOP to any message we send. After STOP you will receive a one-time confirmation, and no further messages will be sent. Rejoin by signing up again or replying START. For help, reply HELP or contact info@unitedstrengthgym.com or [SUPPORT PHONE]. Privacy Policy: /privacy on this site.",
    },
    {
      title: "SMS program — carrier liability",
      body: "Carriers are not liable for any delayed or undelivered messages.",
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
