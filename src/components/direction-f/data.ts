import { gymPhotos } from "../../assets/images/gym";

export type ChapterAlign = "media-left" | "media-right";

export interface LookbookChapterData {
  n: string;
  title: string;
  metadata: string;
  body: string;
  image: string;
  imageAlt: string;
  align: ChapterAlign;
}

export interface PillarItem {
  n: string;
  title: string;
  metadata: string;
  body: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const heroCopy = {
  title: "United Strength Club",
  lede: "A private strength practice in Columbus — deliberate, communal, built for longevity.",
  metadata: "( Columbus, OH · Lookbook )",
} as const;

/** Same 01–04 story spine as Direction E, Awake lookbook layout. */
export const chapters: LookbookChapterData[] = [
  {
    n: "01",
    title: "United Strength Club",
    metadata: "( The Club )",
    body: "A private strength practice on Cleveland Ave — deliberate, communal, built for longevity. Not gym noise.",
    image: gymPhotos.galleryCinematic,
    imageAlt: "United Strength Club — facility b-roll",
    align: "media-left",
  },
  {
    n: "02",
    title: "What We Believe",
    metadata: "( Philosophy )",
    body: "People don't stay because of equipment. They stay because of how a place makes them feel. United exists for deliberate practice, community, and longevity — a private club culture, not gym noise.",
    image: gymPhotos.spaceAtmosphere,
    imageAlt: "What We Believe — atmosphere",
    align: "media-right",
  },
  {
    n: "04",
    title: "Experience United",
    metadata: "( Start Here )",
    body: "Five classes. Fourteen days. Feel the practice and the standard before you apply — membership is reviewed, not open checkout.",
    image: gymPhotos.experienceBroll,
    imageAlt: "Experience United — Stronger mural",
    align: "media-left",
  },
];

/** Todd order: Foundation → Reflection → Longevity → Move the City (chapter 03). */
export const pillars: PillarItem[] = [
  {
    n: "01",
    title: "Foundation",
    metadata: "( Strength )",
    body: "Building strength from the ground up — small-group work on movement, technique, and confidence before the long game.",
    image: gymPhotos.architectureRaw,
    imageAlt: "Foundation — architecture",
    href: "/foundation",
  },
  {
    n: "02",
    title: "Reflection",
    metadata: "( Awareness )",
    body: "Building self-awareness for lasting change — behavioral insight turned into tools you can actually use.",
    image: gymPhotos.galleryCinematic,
    imageAlt: "Reflection — facility",
    href: "/longevity/reflection",
  },
  {
    n: "03",
    title: "Longevity",
    metadata: "( Healthspan )",
    body: "Building measurable health for the years ahead — assessments and meaningful data so progress isn't left to guesswork.",
    image: gymPhotos.spaceAtmosphere,
    imageAlt: "Longevity — space",
    href: "/longevity",
  },
  {
    n: "04",
    title: "Move the City",
    metadata: "( Culture )",
    body: "Building stronger connections beyond the gym — a weekly run club for movement, conversation, and Columbus.",
    image: gymPhotos.equipmentClose,
    imageAlt: "Move the City — equipment",
    href: "/culture/move-the-city",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Resources",
    links: [
      { label: "New here", href: "/new-here" },
      { label: "Offerings", href: "/offerings" },
      { label: "Memberships", href: "/membership" },
      { label: "Info", href: "/about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "info@", href: "mailto:info@unitedstrength.club" },
      { label: "membership@", href: "mailto:membership@unitedstrength.club" },
      { label: "237 Cleveland Ave", href: "#" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Instagram", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  },
];
