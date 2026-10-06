import { gymPhotos } from "@/assets/images/gym";
import {
  FOUNDER_CHAPTERS,
  PHILOSOPHY_CHAPTERS,
  SPACE_CHAPTERS,
  TEAM_INTRO,
} from "@/data/about-copy";
import { ARCHIVE_PAGE, BY_DESIGN, CULTIVATED, MOVE_THE_CITY } from "@/data/culture-copy";
import { APPLY_MEMBERSHIP, EXPERIENCE_UNITED, MEMBERSHIP_PAGE } from "@/data/journey-copy";
import { BUILD_CLASS, BURN_CLASS, PERSONAL_TRAINING_HUB } from "@/data/training-copy";
import { V1_FACTS_INTRO } from "@/data/v1-interior-copy";

export interface HubPageOption {
  id: string;
  label: string;
  title: string;
  body: string;
  image: string;
}

export const HUB_PAGES = [
  {
    id: "home",
    label: "Home",
    title: "// United Strength",
    body: "A strength community for people who want more from their gym and life.",
    image: gymPhotos.galleryCinematic,
  },
  {
    id: "founder",
    label: "Founder",
    title: FOUNDER_CHAPTERS.origin.headline,
    body: FOUNDER_CHAPTERS.origin.lede,
    image: gymPhotos.architectureRaw,
  },
  {
    id: "philosophy",
    label: "Philosophy",
    title: PHILOSOPHY_CHAPTERS.hero.headline,
    body: PHILOSOPHY_CHAPTERS.place.headline,
    image: gymPhotos.heroFullBleed,
  },
  {
    id: "team",
    label: "Team",
    title: TEAM_INTRO.headline,
    body: TEAM_INTRO.lede,
    image: gymPhotos.experienceBroll,
  },
  {
    id: "space",
    label: "The Space",
    title: SPACE_CHAPTERS.hero.headline,
    body: SPACE_CHAPTERS.hero.lede,
    image: gymPhotos.heroFullBleed,
  },
  {
    id: "faq",
    label: "FAQ",
    title: V1_FACTS_INTRO,
    body: "What is United Strength?",
    image: gymPhotos.architectureRaw,
  },
  {
    id: "build",
    label: "Build",
    title: BUILD_CLASS.headline,
    body: "Strength for life.",
    image: gymPhotos.floorColumbus,
  },
  {
    id: "burn",
    label: "Burn",
    title: BURN_CLASS.headline,
    body: BURN_CLASS.lede,
    image: gymPhotos.experienceBroll,
  },
  {
    id: "personal-training",
    label: "Personal Training",
    title: PERSONAL_TRAINING_HUB.headline,
    body: PERSONAL_TRAINING_HUB.lede,
    image: gymPhotos.floorColumbus,
  },
  {
    id: "move-the-city",
    label: "Run Club",
    title: MOVE_THE_CITY.headline,
    body: MOVE_THE_CITY.lede,
    image: gymPhotos.runClub,
  },
  {
    id: "experience",
    label: "Experience United",
    title: EXPERIENCE_UNITED.headline,
    body: EXPERIENCE_UNITED.lede,
    image: gymPhotos.experienceBroll,
  },
  {
    id: "apply",
    label: "Apply",
    title: APPLY_MEMBERSHIP.headline,
    body: APPLY_MEMBERSHIP.lede,
    image: gymPhotos.spaceAtmosphere,
  },
  {
    id: "membership",
    label: "Membership",
    title: MEMBERSHIP_PAGE.headline,
    body: MEMBERSHIP_PAGE.lede,
    image: gymPhotos.galleryCinematic,
  },
  {
    id: "by-design",
    label: "By Design",
    title: BY_DESIGN.headline,
    body: BY_DESIGN.lede,
    image: gymPhotos.architectureRaw,
  },
  {
    id: "cultivated",
    label: "Cultivated",
    title: CULTIVATED.headline,
    body: CULTIVATED.lede,
    image: gymPhotos.experienceBroll,
  },
  {
    id: "archive",
    label: "Archive",
    title: ARCHIVE_PAGE.headline,
    body: ARCHIVE_PAGE.lede,
    image: gymPhotos.galleryCinematic,
  },
] as const satisfies readonly HubPageOption[];

export type HubPageId = (typeof HUB_PAGES)[number]["id"];

export function hubPage(id: string): HubPageOption {
  return HUB_PAGES.find((page) => page.id === id) ?? HUB_PAGES[0];
}

const HREF_PAGE: Partial<Record<string, HubPageId>> = {
  "/": "home",
  "/home": "home",
  "/about/founder": "founder",
  "/about/philosophy": "philosophy",
  "/about/team": "team",
  "/team": "team",
  "/about/the-space": "space",
  "/about/faq": "faq",
  "/faq": "faq",
  "/training/classes/build": "build",
  "/training/classes/burn": "burn",
  "/training/personal": "personal-training",
  "/training/move-the-city": "move-the-city",
  "/culture/move-the-city": "move-the-city",
  "/start-here/experience": "experience",
  "/start-here/apply": "apply",
  "/membership": "membership",
  "/memberships": "membership",
  "/culture/by-design": "by-design",
  "/culture/cultivated": "cultivated",
  "/culture/archive": "archive",
};

/** Hub page for a site-menu href. Paths with no preview stay null. */
export function hubPageFromHref(href: string): HubPageId | null {
  const path = href.split("?")[0].replace(/\/$/, "") || "/";
  return HREF_PAGE[path] ?? null;
}
