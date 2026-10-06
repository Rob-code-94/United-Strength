/**
 * Per-page editorial copy in the brand kit (FAQ-style seed / merge / path edit).
 * Seeds come from existing `@/data/*-copy` constants — those files remain the source of defaults.
 */
import {
  FOUNDER_CHAPTERS,
  PHILOSOPHY_CHAPTERS,
  PHILOSOPHY_HEALTH_AREAS,
  SPACE_CHAPTERS,
  TEAM_INTRO,
  TEAM_MEMBERS,
} from "../data/about-copy.js";
import { ARCHIVE_PAGE, BY_DESIGN, CULTIVATED, MOVE_THE_CITY } from "../data/culture-copy.js";
import { APPLY_MEMBERSHIP, EXPERIENCE_UNITED, MEMBERSHIP_PAGE } from "../data/journey-copy.js";
import { BUILD_CLASS, BURN_CLASS, PERSONAL_TRAINING_HUB } from "../data/training-copy.js";
import {
  V1_BUILD_PROGRAMMING,
  V1_BUILD_STANDARD,
  V1_BUILD_START,
  V1_BURN_OUTCOMES,
  V1_BURN_SESSION,
  V1_BURN_START,
  V1_MEMBERSHIP_COMPARE,
  V1_MEMBERSHIP_EXPERIENCE_JOIN,
  V1_PT_STATS,
  V1_SPACE_TILES,
} from "../data/v1-interior-copy.js";

function clone<T>(value: T): T {
  return structuredClone(value);
}

/** Deep-merge page copy: seed shape wins for structure; non-empty incoming strings win. */
export function mergeDeep<T>(seed: T, incoming: unknown): T {
  if (incoming === undefined || incoming === null) return clone(seed);
  if (typeof seed === "string") {
    return (typeof incoming === "string" && incoming.trim() ? incoming : seed) as T;
  }
  if (typeof seed === "number" || typeof seed === "boolean") {
    return (typeof incoming === typeof seed ? incoming : seed) as T;
  }
  if (Array.isArray(seed)) {
    if (!Array.isArray(incoming)) return clone(seed);
    return seed.map((item, index) => mergeDeep(item, incoming[index])) as T;
  }
  if (seed && typeof seed === "object") {
    const out: Record<string, unknown> = {};
    const src = incoming && typeof incoming === "object" ? (incoming as Record<string, unknown>) : {};
    for (const key of Object.keys(seed as object)) {
      out[key] = mergeDeep((seed as Record<string, unknown>)[key], src[key]);
    }
    return out as T;
  }
  return clone(seed);
}

export function getCopyPath(root: unknown, path: string): string | undefined {
  if (!path) return undefined;
  let cur: unknown = root;
  for (const part of path.split(".")) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[part];
  }
  return typeof cur === "string" ? cur : undefined;
}

export function setCopyPath<T>(root: T, path: string, value: string): T {
  const parts = path.split(".").filter(Boolean);
  if (parts.length === 0) return root;
  const next = clone(root) as Record<string, unknown>;
  let cur: Record<string, unknown> = next;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i]!;
    const child = cur[key];
    if (child == null || typeof child !== "object") {
      cur[key] = {};
    } else {
      cur[key] = Array.isArray(child) ? child.slice() : { ...(child as object) };
    }
    cur = cur[key] as Record<string, unknown>;
  }
  cur[parts[parts.length - 1]!] = value;
  return next as T;
}

/** List string leaf paths under a node (for Copy tab field lists). */
export function listCopyPaths(root: unknown, prefix = ""): string[] {
  if (typeof root === "string") return prefix ? [prefix] : [];
  if (Array.isArray(root)) {
    return root.flatMap((item, index) => listCopyPaths(item, prefix ? `${prefix}.${index}` : String(index)));
  }
  if (root && typeof root === "object") {
    return Object.keys(root as object).flatMap((key) =>
      listCopyPaths((root as Record<string, unknown>)[key], prefix ? `${prefix}.${key}` : key),
    );
  }
  return [];
}

function seedPhilosophy() {
  return {
    hero: { headline: PHILOSOPHY_CHAPTERS.hero.headline },
    place: {
      n: PHILOSOPHY_CHAPTERS.place.n,
      title: PHILOSOPHY_CHAPTERS.place.title,
      kicker: PHILOSOPHY_CHAPTERS.place.kicker,
      headline: PHILOSOPHY_CHAPTERS.place.headline,
      body: [...PHILOSOPHY_CHAPTERS.place.body],
    },
    manifesto: {
      title: PHILOSOPHY_CHAPTERS.manifesto.title,
      headline: PHILOSOPHY_CHAPTERS.manifesto.headline,
      body: [...PHILOSOPHY_CHAPTERS.manifesto.body],
    },
    close: { lines: [...PHILOSOPHY_CHAPTERS.close.lines] },
    beliefs: PHILOSOPHY_HEALTH_AREAS.map((area) => ({
      n: area.n,
      title: area.title,
      body: [...area.body],
    })),
  };
}

function seedFounder() {
  return {
    origin: {
      headline: FOUNDER_CHAPTERS.origin.headline,
      lede: FOUNDER_CHAPTERS.origin.lede,
    },
    story: {
      n: FOUNDER_CHAPTERS.story.n,
      title: FOUNDER_CHAPTERS.story.title,
      midCaption: FOUNDER_CHAPTERS.story.midCaption,
      body: [...FOUNDER_CHAPTERS.story.body],
    },
    community: {
      n: FOUNDER_CHAPTERS.community.n,
      title: FOUNDER_CHAPTERS.community.title,
      quote: FOUNDER_CHAPTERS.community.quote,
      body: [...FOUNDER_CHAPTERS.community.body],
    },
  };
}

function seedTeam() {
  return {
    intro: { headline: TEAM_INTRO.headline, lede: TEAM_INTRO.lede },
    members: TEAM_MEMBERS.map((member) => ({
      id: member.id,
      name: member.name,
      role: member.role,
      focus: member.focus,
      lede: member.lede,
      credentials: [...member.credentials],
      perspective: member.perspective,
    })),
  };
}

function seedSpace() {
  return {
    hero: {
      headline: SPACE_CHAPTERS.hero.headline,
      lede: SPACE_CHAPTERS.hero.lede,
    },
    mosaic: {
      memberQuote: SPACE_CHAPTERS.mosaic.memberQuote,
      memberAttribution: SPACE_CHAPTERS.mosaic.memberAttribution,
      memberQuote2: SPACE_CHAPTERS.mosaic.memberQuote2,
      memberAttribution2: SPACE_CHAPTERS.mosaic.memberAttribution2,
    },
    visit: {
      n: SPACE_CHAPTERS.visit.n,
      title: SPACE_CHAPTERS.visit.title,
      lede: SPACE_CHAPTERS.visit.lede,
      ctaLabel: "Experience United",
    },
    tiles: V1_SPACE_TILES.map((tile) => ({
      n: tile.n,
      title: tile.title,
      note: tile.note,
    })),
  };
}

function seedBuild() {
  return {
    headline: BUILD_CLASS.headline,
    lede: BUILD_CLASS.lede,
    body: [...BUILD_CLASS.body],
    communityNote: BUILD_CLASS.communityNote,
    schedule: BUILD_CLASS.schedule.map((row) => ({ day: row.day, times: row.times })),
    programming: clone(V1_BUILD_PROGRAMMING),
    standard: clone(V1_BUILD_STANDARD),
    start: clone(V1_BUILD_START),
  };
}

function seedBurn() {
  return {
    headline: BURN_CLASS.headline,
    lede: BURN_CLASS.lede,
    body: [...BURN_CLASS.body],
    communityNote: BURN_CLASS.communityNote,
    schedule: BURN_CLASS.schedule.map((row) => ({ day: row.day, times: row.times })),
    session: clone(V1_BURN_SESSION),
    outcomes: clone(V1_BURN_OUTCOMES),
    start: clone(V1_BURN_START),
  };
}

function seedPersonalTraining() {
  const hub = PERSONAL_TRAINING_HUB;
  return {
    headline: hub.headline,
    lede: hub.lede,
    approach: {
      n: hub.approach.n,
      title: hub.approach.title,
      headline: hub.approach.headline,
      body: [...hub.approach.body],
    },
    experience: {
      n: hub.experience.n,
      title: hub.experience.title,
      headline: hub.experience.headline,
      body: [...hub.experience.body],
    },
    stats: [...V1_PT_STATS],
    oneOnOne: {
      n: hub.oneOnOne.n,
      title: hub.oneOnOne.title,
      headline: hub.oneOnOne.headline,
      body: [...hub.oneOnOne.body],
    },
    privateGroup: {
      n: hub.privateGroup.n,
      title: hub.privateGroup.title,
      headline: hub.privateGroup.headline,
      body: [...hub.privateGroup.body],
    },
    programming: {
      n: hub.programming.n,
      title: hub.programming.title,
      headline: hub.programming.headline,
      body: [...hub.programming.body],
    },
    coachCues: hub.coachCues.map((cue) => ({ name: cue.name, role: cue.role, note: cue.note })),
    ctaSection: {
      headline: hub.ctaSection.headline,
      body: hub.ctaSection.body,
      inquireLabel: hub.ctaSection.inquireLabel,
    },
  };
}

function seedMoveTheCity() {
  const c = MOVE_THE_CITY;
  return {
    headline: c.headline,
    subhead: c.subhead,
    lede: c.lede,
    story: {
      n: c.story.n,
      title: c.story.title,
      headline: c.story.headline,
      body: [...c.story.body],
    },
    paceStatement: c.paceStatement,
    runs: {
      n: c.runs.n,
      title: c.runs.title,
      rows: c.runs.rows.map((row) => ({ day: row.day, detail: row.detail })),
    },
    route: { n: c.route.n, title: c.route.title, start: c.route.start },
    closing: {
      headline: c.closing.headline,
      body: [...c.closing.body],
      ctaLabel: c.closing.ctaLabel,
    },
  };
}

function seedByDesign() {
  const c = BY_DESIGN;
  return {
    headline: c.headline,
    lede: c.lede,
    manifesto: {
      n: c.manifesto.n,
      title: c.manifesto.title,
      headline: c.manifesto.headline,
      body: [...c.manifesto.body],
    },
    quote: { n: c.quote.n, title: c.quote.title, text: c.quote.text },
    principles: {
      n: c.principles.n,
      title: c.principles.title,
      rows: c.principles.rows.map((row) => ({ n: row.n, title: row.title, body: row.body })),
    },
  };
}

function seedCultivated() {
  const c = CULTIVATED;
  return {
    headline: c.headline,
    lede: c.lede,
    manifesto: {
      n: c.manifesto.n,
      title: c.manifesto.title,
      headline: c.manifesto.headline,
      body: [...c.manifesto.body],
    },
    quote: { n: c.quote.n, title: c.quote.title, text: c.quote.text },
    principles: {
      n: c.principles.n,
      title: c.principles.title,
      rows: c.principles.rows.map((row) => ({ n: row.n, title: row.title, body: row.body })),
    },
  };
}

function seedArchive() {
  const c = ARCHIVE_PAGE;
  return {
    headline: c.headline,
    lede: c.lede,
    subscribeHeadline: "Get the next Archive.",
    subscribeCta: "Subscribe →",
    authorsLabel: "// Authors",
    issuesEyebrow: "Issues",
    articlesEyebrow: "Articles",
    featuredLabel: "Featured",
    authors: c.authors.map((author) => ({ name: author.name, role: author.role })),
    posts: c.posts.map((post) => ({
      title: post.title,
      author: post.author,
      date: post.date,
      excerpt: post.excerpt ?? "",
    })),
  };
}

function seedExperience() {
  const c = EXPERIENCE_UNITED;
  return {
    headline: c.headline,
    lede: c.lede,
    heroLines: [...c.heroLines],
    stats: c.stats.map((stat) => ({ n: stat.n, label: stat.label })),
    experienceBody: [...c.experienceBody],
    editorialStatement: [...c.editorialStatement],
    whatYoullExperience: {
      n: c.whatYoullExperience.n,
      title: c.whatYoullExperience.title,
      beats: c.whatYoullExperience.beats.map((beat) => ({
        title: beat.title,
        body: [...beat.body],
      })),
    },
    whatToExpect: {
      n: c.whatToExpect.n,
      title: c.whatToExpect.title,
      steps: c.whatToExpect.steps.map((step) => ({
        n: step.n,
        title: step.title,
        body: step.body,
      })),
    },
    whoIsThisFor: {
      n: c.whoIsThisFor.n,
      title: c.whoIsThisFor.title,
      headline: c.whoIsThisFor.headline,
      bullets: [...c.whoIsThisFor.bullets],
      closing: [...c.whoIsThisFor.closing],
    },
    firstVisit: {
      n: c.firstVisit.n,
      title: c.firstVisit.title,
      headline: c.firstVisit.headline,
      items: [...c.firstVisit.items],
    },
    closing: {
      headline: c.closing.headline,
      lines: [...c.closing.lines],
      lede: c.closing.lede,
    },
    ctaPrimaryLabel: c.ctaPrimary.label,
    ctaSecondaryLabel: c.ctaSecondary.label,
  };
}

function seedApply() {
  const c = APPLY_MEMBERSHIP;
  return {
    headline: c.headline,
    lede: c.lede,
    body: [...c.body],
    statement: [...c.statement],
    steps: c.steps.map((step) => ({ n: step.n, title: step.title, body: step.body })),
    closing: c.closing,
    beginApplicationLabel: c.beginApplicationLabel,
  };
}

function seedMembership() {
  const c = MEMBERSHIP_PAGE;
  return {
    headline: c.headline,
    lede: c.lede,
    body: [...c.body],
    tiers: c.tiers.map((tier) => ({
      n: tier.n,
      name: tier.name,
      subtitle: tier.subtitle,
      price: tier.price,
      period: tier.period,
      blurb: tier.blurb,
      includes: [...tier.includes],
    })),
    valueProps: {
      n: c.valueProps.n,
      title: c.valueProps.title,
      rows: c.valueProps.rows.map((row) => ({ title: row.title, body: row.body })),
    },
    ecosystem: {
      n: c.ecosystem.n,
      title: c.ecosystem.title,
      note: c.ecosystem.note,
      rows: c.ecosystem.rows.map((row) => ({ title: row.title, body: row.body })),
    },
    howToJoin: c.howToJoin.map((step) => ({
      n: step.n,
      title: step.title,
      body: step.body,
    })),
    personalTraining: {
      headline: c.personalTraining.headline,
      ctaLabel: c.personalTraining.ctaLabel,
    },
    perks: [...c.perks],
    compare: {
      headers: [...V1_MEMBERSHIP_COMPARE.headers],
      rows: V1_MEMBERSHIP_COMPARE.rows.map((row) => ({
        label: row.label,
        marks: [...row.marks],
      })),
    },
    experienceJoin: {
      n: V1_MEMBERSHIP_EXPERIENCE_JOIN.n,
      title: V1_MEMBERSHIP_EXPERIENCE_JOIN.title,
      lines: [...V1_MEMBERSHIP_EXPERIENCE_JOIN.lines],
      body: V1_MEMBERSHIP_EXPERIENCE_JOIN.body,
    },
  };
}

function seedHome() {
  return {
    opening: {
      slides: {
        "01": {
          title: "United Strength",
          lede: "A strength community for people who want more from their gym and life.",
        },
        "02": {
          title: "What We Believe",
          lede: "People don't stay because of equipment. They stay because of how a place makes them feel.",
        },
        "03": { title: "The Four Pillars" },
        "04": {
          title: "Experience United",
          lede: "An introduction to the club — immersive, visual, and unhurried.",
        },
      },
      pillars: [
        { n: "01", title: "Foundation" },
        { n: "02", title: "Reflection" },
        { n: "03", title: "Longevity" },
        { n: "04", title: "Move the City" },
      ],
    },
    believe: {
      eyebrow: "02 // What We Believe",
      headline: PHILOSOPHY_CHAPTERS.manifesto.headline,
      body: PHILOSOPHY_CHAPTERS.manifesto.body.slice(0, 3),
      cta: "Our Philosophy →",
    },
    training: {
      eyebrow: "03 // Training",
      headline: "How we train.",
      pathways: {
        build: { label: "Build", title: "Strength for life." },
        burn: { label: "Burn", title: "Burn." },
        personal: { label: "Personal Training", title: "1:1 Coaching." },
        runClub: { label: "Run Club", title: "Run Club." },
      },
    },
    people: {
      eyebrow: "04 // People",
      headline: "People need people.",
      body: PHILOSOPHY_HEALTH_AREAS[2]?.body.join(" ") ?? "",
      cta: "Meet the Team →",
    },
    space: {
      eyebrow: "05 // The Space",
      headline: "The physical club",
      kicker: "Columbus · floor, racks & iron",
    },
    membership: {
      eyebrow: "// Membership",
      headline: ["Four memberships.", "Different ways to train.", "One United."],
      lede: "Choose the level of coaching and access that works for you.",
      cta: "Explore Membership →",
      ticket: {
        brand: "United Strength",
        recordLabel: "// Membership record",
        address: "237 Cleveland Ave / Columbus",
        seal: "Strength • People • A healthier city",
      },
    },
    start: {
      eyebrow: "07 // Start Here",
      headline: "Two ways to begin.",
      pathways: {
        experience: {
          title: "Experience United",
          lede: "5 classes · 14 days · try the practice.",
        },
        apply: {
          title: "Apply for Membership",
          lede: "Selective membership — reviewed by the team.",
        },
      },
    },
  };
}

export function seedPages() {
  return {
    home: seedHome(),
    philosophy: seedPhilosophy(),
    founder: seedFounder(),
    team: seedTeam(),
    space: seedSpace(),
    build: seedBuild(),
    burn: seedBurn(),
    "personal-training": seedPersonalTraining(),
    "move-the-city": seedMoveTheCity(),
    "by-design": seedByDesign(),
    cultivated: seedCultivated(),
    archive: seedArchive(),
    experience: seedExperience(),
    apply: seedApply(),
    membership: seedMembership(),
  };
}

export type PageCopyKit = ReturnType<typeof seedPages>;
export type PageCopyId = keyof PageCopyKit;

export function mergePages(incoming: PageCopyKit | undefined | null): PageCopyKit {
  return mergeDeep(seedPages(), incoming ?? undefined);
}

export function validatePages(input: unknown): { ok: true; value: PageCopyKit } | { ok: false; error: string } {
  try {
    const value = mergePages(input as PageCopyKit | undefined);
    const hero = value.philosophy.hero.headline?.trim();
    if (!hero) {
      return { ok: false, error: "Philosophy hero headline is required." };
    }
    return { ok: true, value };
  } catch {
    return { ok: false, error: "Page copy is invalid." };
  }
}

/** Pencil id → path (`copy:philosophy.place.headline` → `philosophy.place.headline`). */
export function copyPathFromPencil(id: string): string | null {
  if (!id.startsWith("copy:")) return null;
  const path = id.slice("copy:".length).trim();
  return path || null;
}

export function copyPencilId(path: string): string {
  return `copy:${path}`;
}
