import { V1_FACTS, V1_FACTS_ANSWERS, V1_FACTS_INTRO } from "../data/v1-interior-copy.js";
import {
  mergePages,
  seedPages,
  validatePages,
  type PageCopyKit,
  getCopyPath,
  setCopyPath,
  listCopyPaths,
  copyPencilId,
  copyPathFromPencil,
} from "./page-copy.js";

export type { PageCopyKit };
export {
  mergePages,
  seedPages,
  getCopyPath,
  setCopyPath,
  listCopyPaths,
  copyPencilId,
  copyPathFromPencil,
};

/** Shared brand-kit shape. Donors stay in the hub UI; this file is data only. */

export const FONT_FAMILIES = [
  "Satoshi",
  "Instrument Serif",
  "IBM Plex Mono",
  "Tangier",
  "Neue Haas Grotesk",
  "Bookmania",
  "Field Gothic",
  "Roboto Mono",
  "Gotham",
] as const;

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
  { key: "philosophyHero", label: "Philosophy — hero" },
  { key: "philosophyPlace", label: "Philosophy — place" },
  { key: "teamHero", label: "Team — hero" },
  { key: "teamTodd", label: "Team — Todd Johnson (still or GIF)" },
  { key: "teamJenna", label: "Team — Jenna Farkas (still or GIF)" },
  { key: "teamJason", label: "Team — Jason Katz (still or GIF)" },
  { key: "teamKara", label: "Team — Kara Shaffer (still or GIF)" },
  { key: "spaceHero", label: "The Space — hero" },
  { key: "spaceTile1", label: "The Space — tile 1" },
  { key: "spaceTile2", label: "The Space — tile 2" },
  { key: "spaceTile3", label: "The Space — tile 3" },
  { key: "spaceTile4", label: "The Space — tile 4" },
  { key: "spaceTile5", label: "The Space — tile 5" },
  { key: "spaceTile6", label: "The Space — tile 6" },
  { key: "factsPhoto", label: "FAQ photo" },
  { key: "buildHero", label: "Build hero" },
  { key: "burnHero", label: "Burn hero" },
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
  { key: "runRouteMonday", label: "Run Club — Monday route map" },
  { key: "runRouteThursday", label: "Run Club — Thursday route map" },
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
  { key: "cultivatedHero", label: "Cultivated — hero (still / poster)" },
  { key: "cultivatedTypeArt", label: "Cultivated — type artwork" },
  { key: "cultivated1", label: "Cultivated — Right People" },
  { key: "cultivated2", label: "Cultivated — Right Room" },
  { key: "cultivated3", label: "Cultivated — Right Conversations" },
  { key: "archiveFeatured", label: "Archive — featured" },
  { key: "archiveIssue1", label: "Archive — issue 001 cover" },
  { key: "archiveIssue2", label: "Archive — issue 002 cover" },
  { key: "archivePost1", label: "Archive — post 1" },
  { key: "archivePost2", label: "Archive — post 2" },
] as const;

export type MediaSlot = (typeof MEDIA_SLOTS)[number]["key"];

export interface FooterLink {
  label: string;
  href: string;
}

export interface FaqKitItem {
  n: string;
  q: string;
  a: string;
}

export interface FaqKit {
  intro: string;
  items: FaqKitItem[];
}

export const FAQ_ITEM_COUNT = 20;

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
    /** Call/text number for Connect. Empty hides the phone icon. */
    phone: string;
    addressLine: string;
    postalCode: string;
  };
  copyright: string;
  media: Record<MediaSlot, string>;
  /** FAQ page intro + exactly 20 Q&A rows (01–20). */
  faq: FaqKit;
  /** Per-page marketing editorial copy (hub Copy pencils). */
  pages: PageCopyKit;
}

/** Hub-owned image inventory — not published to the live site by itself. */
export interface MediaLibraryItem {
  id: string;
  url: string;
  name: string;
  contentType: string;
  bytes: number;
  createdAt: string;
}

export interface BrandKitStore {
  draft: BrandKitFields;
  published: BrandKitFields;
  draftUpdatedAt: string;
  publishedUpdatedAt: string;
  /** Persist across Revert; assign URLs into draft.media slots. */
  library: MediaLibraryItem[];
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
  philosophyHero: "",
  philosophyPlace: "",
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
  burnHero: "",
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
  runRouteMonday: "",
  runRouteThursday: "",
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
  cultivatedTypeArt: "",
  cultivated1: "",
  cultivated2: "",
  cultivated3: "",
  archiveFeatured: "",
  archiveIssue1: "",
  archiveIssue2: "",
  archivePost1: "",
  archivePost2: "",
});

/** Seed FAQ from the static V1 Facts / FAQ copy (exactly 20 items). */
export function seedFaq(): FaqKit {
  const items: FaqKitItem[] = V1_FACTS.flatMap((group) =>
    group.items.map((item) => ({
      n: item.n,
      q: item.q,
      a: V1_FACTS_ANSWERS[item.n] ?? "",
    })),
  );
  return { intro: V1_FACTS_INTRO, items };
}

/** Merge published/partial FAQ onto the seed so old kits without `faq` stay valid. */
export function mergeFaq(incoming: FaqKit | undefined | null): FaqKit {
  const seed = seedFaq();
  if (!incoming || typeof incoming !== "object") return seed;
  const byN = new Map(
    (Array.isArray(incoming.items) ? incoming.items : [])
      .filter((item): item is FaqKitItem => Boolean(item && typeof item === "object"))
      .map((item) => [String(item.n ?? "").padStart(2, "0"), item] as const),
  );
  return {
    intro: typeof incoming.intro === "string" && incoming.intro.trim() ? incoming.intro.trim() : seed.intro,
    items: seed.items.map((seedItem) => {
      const patch = byN.get(seedItem.n);
      if (!patch) return seedItem;
      return {
        n: seedItem.n,
        q: typeof patch.q === "string" && patch.q.trim() ? patch.q.trim() : seedItem.q,
        a: typeof patch.a === "string" ? patch.a.trim() : seedItem.a,
      };
    }),
  };
}

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
      // Connect icon = general inbox. Membership/Apply/Experience/Run Club use MEMBERSHIP_INBOX.
      email: "info@unitedstrengthgym.com",
      phone: "614-754-7524",
      addressLine: "237 Cleveland Ave",
      postalCode: "43215",
    },
    copyright: "© 2026 United Strength",
    media: emptyMedia(),
    faq: seedFaq(),
    pages: seedPages(),
  };
}

export function seedStore(now = new Date().toISOString()): BrandKitStore {
  const fields = seedFields();
  return {
    draft: fields,
    published: structuredClone(fields),
    draftUpdatedAt: now,
    publishedUpdatedAt: now,
    library: [],
  };
}

/** Normalize library rows from older kits that omit `library`. */
export function mergeLibrary(incoming: unknown): MediaLibraryItem[] {
  if (!Array.isArray(incoming)) return [];
  const out: MediaLibraryItem[] = [];
  for (const row of incoming) {
    if (!row || typeof row !== "object") continue;
    const item = row as MediaLibraryItem;
    if (typeof item.id !== "string" || !item.id.trim()) continue;
    if (typeof item.url !== "string" || !item.url.trim()) continue;
    if (
      !item.url.startsWith("https://") &&
      !item.url.startsWith("/hub-media/") &&
      !item.url.startsWith("blob:")
    ) {
      continue;
    }
    out.push({
      id: item.id.trim(),
      url: item.url.trim(),
      name: typeof item.name === "string" && item.name.trim() ? item.name.trim() : item.id.trim(),
      contentType: typeof item.contentType === "string" ? item.contentType : "image/jpeg",
      bytes: typeof item.bytes === "number" && Number.isFinite(item.bytes) ? item.bytes : 0,
      createdAt: typeof item.createdAt === "string" ? item.createdAt : new Date(0).toISOString(),
    });
  }
  return out;
}

/** Slots (draft or published) that still point at this library URL. */
export function slotsUsingLibraryUrl(store: BrandKitStore, url: string): MediaSlot[] {
  const hits = new Set<MediaSlot>();
  for (const slot of MEDIA_SLOTS) {
    if (store.draft.media[slot.key] === url) hits.add(slot.key);
    if (store.published.media[slot.key] === url) hits.add(slot.key);
  }
  return [...hits];
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
  const phoneRaw = typeof footer.phone === "string" ? footer.phone.trim() : "";
  if (phoneRaw && !isPhone(phoneRaw)) {
    return { ok: false, error: "Phone must be digits you can call or text (optional + and spaces)." };
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
  const faqResult = validateFaq(raw.faq);
  if (faqResult.ok === false) {
    return { ok: false, error: faqResult.error };
  }
  const pagesResult = validatePages(raw.pages);
  if (pagesResult.ok === false) {
    return { ok: false, error: pagesResult.error };
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
        phone: phoneRaw,
        addressLine: footer.addressLine.trim(),
        postalCode: footer.postalCode.trim(),
      },
      copyright,
      media,
      faq: faqResult.value,
      pages: pagesResult.value,
    },
  };
}

function validateFaq(input: unknown): { ok: true; value: FaqKit } | { ok: false; error: string } {
  if (input === undefined || input === null) {
    return { ok: true, value: seedFaq() };
  }
  if (!input || typeof input !== "object") {
    return { ok: false, error: "FAQ must be an object with intro and items." };
  }
  const raw = input as FaqKit;
  const intro = typeof raw.intro === "string" ? raw.intro.trim() : "";
  if (!intro || intro.length > 240) {
    return { ok: false, error: "FAQ intro is required (max 240 characters)." };
  }
  if (!Array.isArray(raw.items) || raw.items.length !== FAQ_ITEM_COUNT) {
    return { ok: false, error: `FAQ needs exactly ${FAQ_ITEM_COUNT} questions.` };
  }
  const seed = seedFaq();
  const items: FaqKitItem[] = [];
  const seen = new Set<string>();
  for (let i = 0; i < FAQ_ITEM_COUNT; i++) {
    const item = raw.items[i];
    const expectedN = seed.items[i]?.n ?? String(i + 1).padStart(2, "0");
    if (!item || typeof item !== "object") {
      return { ok: false, error: `FAQ item ${expectedN} is missing.` };
    }
    const n = typeof item.n === "string" ? item.n.trim() : "";
    const q = typeof item.q === "string" ? item.q.trim() : "";
    const a = typeof item.a === "string" ? item.a.trim() : "";
    if (n !== expectedN) {
      return { ok: false, error: `FAQ item ${expectedN} has the wrong number.` };
    }
    if (seen.has(n)) {
      return { ok: false, error: "FAQ question numbers must be unique." };
    }
    seen.add(n);
    if (!q || q.length > 200) {
      return { ok: false, error: `FAQ ${n} needs a question (max 200 characters).` };
    }
    if (!a || a.length > 1200) {
      return { ok: false, error: `FAQ ${n} needs an answer (max 1200 characters).` };
    }
    items.push({ n, q, a });
  }
  return { ok: true, value: { intro, items } };
}

/** True when the string has enough digits for a tel: link. */
export function isPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

/** Build a tel: href from a display/phone string. Empty if invalid. */
export function telHref(phone: string): string {
  const trimmed = phone.trim();
  if (!isPhone(trimmed)) return "";
  const digits = trimmed.replace(/[^\d+]/g, "");
  const normalized = digits.startsWith("+") ? `+${digits.slice(1).replace(/\D/g, "")}` : digits.replace(/\D/g, "");
  return normalized ? `tel:${normalized}` : "";
}

export function fontStack(family: FontFamily): string {
  switch (family) {
    case "Instrument Serif":
      return "'Instrument Serif', Georgia, serif";
    case "IBM Plex Mono":
      return "'IBM Plex Mono', ui-monospace, monospace";
    case "Tangier":
      return "'Tangier', Georgia, serif";
    case "Neue Haas Grotesk":
      return "'Neue Haas Grotesk', 'Helvetica Neue', Helvetica, sans-serif";
    case "Bookmania":
      return "'Bookmania', Georgia, serif";
    case "Field Gothic":
      return "'Field Gothic', 'Arial Black', sans-serif";
    case "Roboto Mono":
      return "'Roboto Mono', ui-monospace, monospace";
    case "Gotham":
      return "'Gotham', 'Helvetica Neue', Helvetica, sans-serif";
    case "Satoshi":
      return "'Satoshi', sans-serif";
    default: {
      const _exhaustive: never = family;
      return _exhaustive;
    }
  }
}

/** Plain style map — Node-safe (no React types) for hub API import graph. */
export function kitStyle(kit: BrandKitFields): Record<string, string> {
  return {
    backgroundColor: kit.colors.background,
    color: kit.colors.cream,
    "--v1-bg": kit.colors.background,
    "--v1-cream": kit.colors.cream,
    "--v1-gold": kit.colors.gold,
    "--v1-text": kit.colors.text,
    "--v1-display-family": fontStack(kit.type.displayFamily),
    "--v1-body-family": fontStack(kit.type.bodyFamily),
    "--v1-mono-family": fontStack(kit.type.monoFamily),
    "--v1-display-size": `${kit.type.displaySizePx}px`,
    "--v1-body-size": `${kit.type.bodySizePx}px`,
    "--v1-mono-size": `${kit.type.monoSizePx}px`,
    "--v1-display-color": kit.type.displayColor,
    "--v1-body-color": kit.type.bodyColor,
    "--v1-mono-color": kit.type.monoColor,
  };
}
