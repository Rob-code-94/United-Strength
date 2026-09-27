import type { CSSProperties } from "react";

/** Shared brand-kit shape. Donors stay in the hub UI; this file is data only. */

export const FONT_FAMILIES = ["Satoshi", "Instrument Serif", "IBM Plex Mono"] as const;

export type FontFamily = (typeof FONT_FAMILIES)[number];

export const MEDIA_SLOTS = [
  { key: "crest", label: "Footer crest" },
  { key: "strongerUnited", label: "Stronger United mark" },
  { key: "openingClubPoster", label: "Opening 01 poster" },
  { key: "openingBelieve", label: "Opening 02 — What We Believe" },
  { key: "pillar1", label: "Pillar — Foundation" },
  { key: "pillar2", label: "Pillar — Reflection" },
  { key: "pillar3", label: "Pillar — Longevity" },
  { key: "pillar4", label: "Pillar — Move the City" },
  { key: "openingExperience", label: "Opening 04 — Experience United" },
  { key: "spaceLead", label: "The Space — floor" },
  { key: "spaceDetail", label: "The Space — detail" },
  { key: "founderHero", label: "Founder hero" },
  { key: "founderPortrait", label: "Founder portrait" },
  { key: "teamHero", label: "Team — hero" },
  { key: "teamTodd", label: "Team — Todd Johnson" },
  { key: "teamJenna", label: "Team — Jenna Farkas" },
  { key: "teamJason", label: "Team — Jason Katz" },
  { key: "teamKara", label: "Team — Kara Shaffer" },
  { key: "spaceHero", label: "The Space — hero" },
  { key: "spaceTile1", label: "The Space — tile 1" },
  { key: "spaceTile2", label: "The Space — tile 2" },
  { key: "spaceTile3", label: "The Space — tile 3" },
  { key: "spaceTile4", label: "The Space — tile 4" },
  { key: "spaceTile5", label: "The Space — tile 5" },
  { key: "spaceTile6", label: "The Space — tile 6" },
  { key: "factsPhoto", label: "FAQ photo" },
  { key: "buildHero", label: "Build hero" },
  { key: "experienceHero", label: "Experience United hero" },
  { key: "experienceBeat1", label: "Experience United — photo 1" },
  { key: "experienceBeat2", label: "Experience United — photo 2" },
  { key: "experienceBeat3", label: "Experience United — photo 3" },
  { key: "experienceBeat4", label: "Experience United — photo 4" },
  { key: "applyHero", label: "Apply hero" },
  { key: "membershipHero", label: "Membership hero" },
  { key: "moveHero", label: "Move the City hero" },
  { key: "moveRun", label: "Move the City — run" },
  { key: "moveWide", label: "Move the City — wide" },
  { key: "movePeople1", label: "Move the City — people 1" },
  { key: "movePeople2", label: "Move the City — people 2" },
  { key: "movePeople3", label: "Move the City — people 3" },
  { key: "movePeople4", label: "Move the City — people 4" },
  { key: "ptHero", label: "Personal training — hero" },
  { key: "ptPhoto1", label: "Personal training — photo 1" },
  { key: "ptPhoto2", label: "Personal training — photo 2" },
  { key: "ptBand", label: "Personal training — band" },
  { key: "byDesignFrame1", label: "By Design — frame 1" },
  { key: "byDesignFrame2", label: "By Design — frame 2" },
  { key: "byDesignHero", label: "By Design — hero" },
  { key: "byDesignWide", label: "By Design — wide" },
  { key: "byDesignTall", label: "By Design — tall" },
  { key: "byDesignSquare", label: "By Design — square" },
  { key: "byDesignRest", label: "By Design — rest" },
  { key: "byDesignLeft", label: "By Design — left" },
  { key: "byDesignRight", label: "By Design — right" },
  { key: "byDesignClose", label: "By Design — close" },
  { key: "cultivatedHero", label: "Cultivated — hero" },
  { key: "cultivated1", label: "Cultivated — photo 1" },
  { key: "cultivated2", label: "Cultivated — photo 2" },
  { key: "cultivated3", label: "Cultivated — photo 3" },
  { key: "archiveFeatured", label: "Archive — featured" },
  { key: "archivePost1", label: "Archive — post 1" },
  { key: "archivePost2", label: "Archive — post 2" },
] as const;

export type MediaSlot = (typeof MEDIA_SLOTS)[number]["key"];

export interface FooterLink {
  label: string;
  href: string;
}

export interface BrandKitFields {
  colors: {
    background: string;
    cream: string;
    gold: string;
    text: string;
  };
  type: {
    displayFamily: FontFamily;
    bodyFamily: FontFamily;
    monoFamily: FontFamily;
    displaySizePx: number;
    bodySizePx: number;
    monoSizePx: number;
    displayColor: string;
    bodyColor: string;
    monoColor: string;
  };
  footer: {
    wordmark: string;
    exploreLabel: string;
    explore: FooterLink[];
    connectLabel: string;
    instagramUrl: string;
    email: string;
    addressLine: string;
    postalCode: string;
  };
  copyright: string;
  media: Record<MediaSlot, string>;
}

export interface BrandKitStore {
  draft: BrandKitFields;
  published: BrandKitFields;
  draftUpdatedAt: string;
  publishedUpdatedAt: string;
}

const HEX = /^#[0-9A-Fa-f]{6}$/;

const emptyMedia = (): Record<MediaSlot, string> => ({
  crest: "",
  strongerUnited: "",
  openingClubPoster: "",
  openingBelieve: "",
  pillar1: "",
  pillar2: "",
  pillar3: "",
  pillar4: "",
  openingExperience: "",
  spaceLead: "",
  spaceDetail: "",
  founderHero: "",
  founderPortrait: "",
  teamHero: "",
  teamTodd: "",
  teamJenna: "",
  teamJason: "",
  teamKara: "",
  spaceHero: "",
  spaceTile1: "",
  spaceTile2: "",
  spaceTile3: "",
  spaceTile4: "",
  spaceTile5: "",
  spaceTile6: "",
  factsPhoto: "",
  buildHero: "",
  experienceHero: "",
  experienceBeat1: "",
  experienceBeat2: "",
  experienceBeat3: "",
  experienceBeat4: "",
  applyHero: "",
  membershipHero: "",
  moveHero: "",
  moveRun: "",
  moveWide: "",
  movePeople1: "",
  movePeople2: "",
  movePeople3: "",
  movePeople4: "",
  ptHero: "",
  ptPhoto1: "",
  ptPhoto2: "",
  ptBand: "",
  byDesignFrame1: "",
  byDesignFrame2: "",
  byDesignHero: "",
  byDesignWide: "",
  byDesignTall: "",
  byDesignSquare: "",
  byDesignRest: "",
  byDesignLeft: "",
  byDesignRight: "",
  byDesignClose: "",
  cultivatedHero: "",
  cultivated1: "",
  cultivated2: "",
  cultivated3: "",
  archiveFeatured: "",
  archivePost1: "",
  archivePost2: "",
});

/** Current V1 constants — first-run seed so the editor is never blank. */
export function seedFields(): BrandKitFields {
  return {
    colors: {
      background: "#111111",
      cream: "#F3EEE7",
      gold: "#C4A35A",
      text: "#181818",
    },
    type: {
      displayFamily: "Satoshi",
      bodyFamily: "Satoshi",
      monoFamily: "IBM Plex Mono",
      displaySizePx: 28,
      bodySizePx: 15,
      monoSizePx: 42,
      displayColor: "#F3EEE7",
      bodyColor: "#F3EEE7",
      monoColor: "#F3EEE7",
    },
    footer: {
      wordmark: "United Strength",
      exploreLabel: "Explore",
      explore: [
        { label: "EXPERIENCE UNITED", href: "/start-here/experience" },
        { label: "MEMBERSHIP", href: "/membership" },
        { label: "TRAINING", href: "/training/classes/build" },
        { label: "PHILOSOPHY", href: "/about/philosophy" },
      ],
      connectLabel: "Connect",
      instagramUrl: "https://www.instagram.com/united_strength/",
      email: "info@unitedstrengthgym.com",
      addressLine: "237 Cleveland Ave",
      postalCode: "43215",
    },
    copyright: "© 2026 United Strength Club",
    media: emptyMedia(),
  };
}

export function seedStore(now = new Date().toISOString()): BrandKitStore {
  const fields = seedFields();
  return {
    draft: fields,
    published: structuredClone(fields),
    draftUpdatedAt: now,
    publishedUpdatedAt: now,
  };
}

function typeColor(value: unknown, fallback: string): string | null {
  if (value === undefined || value === null || value === "") return fallback;
  if (typeof value === "string" && HEX.test(value)) return value;
  return null;
}

function isFont(value: unknown): value is FontFamily {
  return typeof value === "string" && (FONT_FAMILIES as readonly string[]).includes(value);
}

function isHref(value: string): boolean {
  return (
    value.startsWith("/") ||
    value.startsWith("https://") ||
    value.startsWith("mailto:")
  );
}

function isMediaSlot(value: string): value is MediaSlot {
  return MEDIA_SLOTS.some((slot) => slot.key === value);
}

export function validateFields(input: unknown): { ok: true; value: BrandKitFields } | { ok: false; error: string } {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Brand kit is missing." };
  }
  const raw = input as BrandKitFields;
  const colors = raw.colors;
  if (!colors || !HEX.test(colors.background) || !HEX.test(colors.cream) || !HEX.test(colors.gold) || !HEX.test(colors.text)) {
    return { ok: false, error: "Colors must be 6-digit hex values like #181818." };
  }
  const type = raw.type;
  if (
    !type ||
    !isFont(type.displayFamily) ||
    !isFont(type.bodyFamily) ||
    !isFont(type.monoFamily) ||
    !Number.isFinite(type.displaySizePx) ||
    !Number.isFinite(type.bodySizePx) ||
    !Number.isFinite(type.monoSizePx)
  ) {
    return { ok: false, error: "Type settings are incomplete." };
  }
  const sizes = [type.displaySizePx, type.bodySizePx, type.monoSizePx];
  if (sizes.some((n) => n < 10 || n > 96)) {
    return { ok: false, error: "Type sizes must be between 10 and 96." };
  }
  const displayColor = typeColor(type.displayColor, colors.cream);
  const bodyColor = typeColor(type.bodyColor, colors.cream);
  const monoColor = typeColor(type.monoColor, colors.cream);
  if (!displayColor || !bodyColor || !monoColor) {
    return { ok: false, error: "Font colors must be 6-digit hex values like #F3EEE7." };
  }
  const copyright = typeof raw.copyright === "string" ? raw.copyright.trim() : "";
  if (!copyright || copyright.length > 160) {
    return { ok: false, error: "Copyright line is required." };
  }
  const footer = raw.footer;
  if (!footer || !footer.wordmark?.trim() || !footer.exploreLabel?.trim() || !footer.connectLabel?.trim()) {
    return { ok: false, error: "Footer labels are required." };
  }
  if (!Array.isArray(footer.explore) || footer.explore.length < 1 || footer.explore.length > 8) {
    return { ok: false, error: "Add between 1 and 8 explore links." };
  }
  for (const link of footer.explore) {
    if (!link?.label?.trim() || !isHref(link.href?.trim() ?? "")) {
      return { ok: false, error: "Each explore link needs a label and an href starting with /, https://, or mailto:." };
    }
  }
  if (!isHref(footer.instagramUrl.trim()) || !footer.email.includes("@")) {
    return { ok: false, error: "Connect links must be a valid Instagram URL and email." };
  }
  const media = { ...emptyMedia() };
  const incoming = raw.media ?? {};
  for (const key of Object.keys(incoming)) {
    if (!isMediaSlot(key)) {
      return { ok: false, error: "Unknown media slot." };
    }
    const url = incoming[key];
    if (typeof url !== "string" || url.length > 2000) {
      return { ok: false, error: "Media URL is invalid." };
    }
    if (url && !url.startsWith("https://") && !url.startsWith("/hub-media/") && !url.startsWith("blob:")) {
      return { ok: false, error: "Media must be an uploaded file URL." };
    }
    media[key] = url;
  }
  return {
    ok: true,
    value: {
      colors: { ...colors },
      type: {
        displayFamily: type.displayFamily,
        bodyFamily: type.bodyFamily,
        monoFamily: type.monoFamily,
        displaySizePx: Math.round(type.displaySizePx),
        bodySizePx: Math.round(type.bodySizePx),
        monoSizePx: Math.round(type.monoSizePx),
        displayColor,
        bodyColor,
        monoColor,
      },
      footer: {
        wordmark: footer.wordmark.trim(),
        exploreLabel: footer.exploreLabel.trim(),
        explore: footer.explore.map((link) => ({
          label: link.label.trim(),
          href: link.href.trim(),
        })),
        connectLabel: footer.connectLabel.trim(),
        instagramUrl: footer.instagramUrl.trim(),
        email: footer.email.trim(),
        addressLine: footer.addressLine.trim(),
        postalCode: footer.postalCode.trim(),
      },
      copyright,
      media,
    },
  };
}

export function fontStack(family: FontFamily): string {
  if (family === "Instrument Serif") return "'Instrument Serif', Georgia, serif";
  if (family === "IBM Plex Mono") return "'IBM Plex Mono', ui-monospace, monospace";
  return "'Satoshi', sans-serif";
}

export function kitStyle(kit: BrandKitFields): CSSProperties {
  return {
    backgroundColor: kit.colors.background,
    color: kit.colors.cream,
    ["--v1-bg" as string]: kit.colors.background,
    ["--v1-cream" as string]: kit.colors.cream,
    ["--v1-gold" as string]: kit.colors.gold,
    ["--v1-text" as string]: kit.colors.text,
    ["--v1-display-family" as string]: fontStack(kit.type.displayFamily),
    ["--v1-body-family" as string]: fontStack(kit.type.bodyFamily),
    ["--v1-mono-family" as string]: fontStack(kit.type.monoFamily),
    ["--v1-display-size" as string]: `${kit.type.displaySizePx}px`,
    ["--v1-body-size" as string]: `${kit.type.bodySizePx}px`,
    ["--v1-mono-size" as string]: `${kit.type.monoSizePx}px`,
    ["--v1-display-color" as string]: kit.type.displayColor,
    ["--v1-body-color" as string]: kit.type.bodyColor,
    ["--v1-mono-color" as string]: kit.type.monoColor,
  };
}
