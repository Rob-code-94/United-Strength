import { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  ArrowDown,
  Copy,
  Check,
  Compass,
  FileText,
  Info,
  Layers,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Instagram,
  Mail
} from "lucide-react";
import ConceptEView from "./components/ConceptEView";
import { LockedNavOverlay } from "./components/direction-v1/LockedNavOverlay";
import ConceptEFView from "./components/ConceptEFView";
import ConceptFView from "./components/ConceptFView";
import ConceptV1View from "./components/ConceptV1View";
import MarianaEmbedPage from "./components/MarianaEmbedPage";
import MaintenancePage, {
  isMaintenanceMode,
} from "./components/MaintenancePage";
import {
  FaqPage,
  FounderPage,
  PhilosophyPage,
  SpacePage,
  TeamPage,
} from "./components/direction-e/about";
import {
  FaqPage as EfFaqPage,
  FounderPage as EfFounderPage,
  PhilosophyPage as EfPhilosophyPage,
  SpacePage as EfSpacePage,
  TeamPage as EfTeamPage,
} from "./components/direction-ef/about";
import {
  BalancePage,
  BuildPage,
  BurnPage,
  PersonalTrainingPage,
} from "./components/direction-ef/training";
import {
  ApplyPage,
  ContactPage,
  ExperiencePage,
  MembershipPage,
  PrivacyPage,
  TermsPage,
} from "./components/direction-ef/journey";
import {
  ArchivePage,
  ByDesignPage,
  CultivatedPage,
  MoveTheCityPage,
} from "./components/direction-ef/culture";
import {
  V1ApplyPage,
  V1ArchivePage,
  V1BuildPage,
  V1ByDesignPage,
  V1CultivatedPage,
  V1ExperiencePage,
  V1FactsPage,
  V1FounderPage,
  V1MembershipPage,
  V1MoveTheCityPage,
  V1PersonalTrainingPage,
  V1SpacePage,
  V1TeamPage,
} from "./components/direction-v1/pages";
import { gymPhotos } from "./assets/images/gym";
import { showDevChrome } from "./lib/dev-chrome";

type WorkingDirection = "E" | "EF" | "F" | "V1";

const ABOUT_ROUTES = new Set([
  "/about/philosophy",
  "/about/founder",
  "/about/team",
  "/about/the-space",
  "/about/faq",
]);

/** Navigable training leaves only — Coming Soon routes excluded */
const TRAINING_ROUTES = new Set([
  "/training/classes/build",
  "/training/classes/burn",
  "/training/move-the-city",
  "/training/personal",
]);

/** Legacy PT children → `/training/personal` */
const PERSONAL_TRAINING_ALIASES = new Set([
  "/training/personal/1-on-1",
  "/training/personal/small-group",
  "/training/personal/private-group",
]);

/** Live-site parity + Culture + legal shells */
const PARITY_ROUTES = new Set([
  "/start-here/experience",
  "/start-here/apply",
  "/membership",
  "/contact",
  "/culture/by-design",
  "/culture/cultivated",
  "/culture/archive",
  "/privacy-policy",
  "/terms-of-service",
]);

/** Mariana Tek embeds — deep-link only; not in marketing nav */
const EMBED_ROUTES = new Set(["/buy", "/schedule", "/account"]);

/** Intentional roadmap — client-facing Coming Soon (pillars + overlay drafts) */
const COMING_SOON_ROUTES = new Set([
  "/foundation",
  "/longevity",
  "/longevity/reflection",
  "/longevity/strength-standard",
  "/longevity/the-trials",
  "/training/classes/balance",
]);

const COMING_SOON_LABELS: Record<string, string> = {
  "/foundation": "Foundation",
  "/longevity": "Longevity",
  "/longevity/reflection": "Reflection",
  "/longevity/strength-standard": "Strength Standard",
  "/longevity/the-trials": "The Trials",
  "/training/classes/balance": "BALANCE",
};

type ResolvedRoute =
  | { kind: "page"; path: string; aliased: boolean }
  | { kind: "home"; aliased: boolean }
  | { kind: "comingSoon"; path: string; label: string }
  | { kind: "unknown" };

function stripPath(href: string): string {
  const bare = href.split("?")[0]?.split("#")[0] ?? "/";
  const withSlash = bare.startsWith("/") ? bare : `/${bare}`;
  if (withSlash.length > 1 && withSlash.endsWith("/")) {
    return withSlash.slice(0, -1);
  }
  return withSlash || "/";
}

/** Aliases and `/home` collapse to the sitemap path. Coming Soon stays itself. */
function resolveRoute(href: string): ResolvedRoute {
  const raw = stripPath(href);
  if (COMING_SOON_ROUTES.has(raw)) {
    return {
      kind: "comingSoon",
      path: raw,
      label: COMING_SOON_LABELS[raw] ?? "Coming Soon",
    };
  }

  let path = raw;
  if (path === "/team") path = "/about/team";
  else if (path === "/memberships") path = "/membership";
  else if (path === "/privacy") path = "/privacy-policy";
  else if (path === "/terms") path = "/terms-of-service";
  else if (path === "/culture/move-the-city") path = "/training/move-the-city";
  else if (PERSONAL_TRAINING_ALIASES.has(path)) path = "/training/personal";
  else if (path === "/home") path = "/";

  const aliased = path !== raw;
  if (path === "/") return { kind: "home", aliased };
  if (
    ABOUT_ROUTES.has(path) ||
    TRAINING_ROUTES.has(path) ||
    PARITY_ROUTES.has(path) ||
    EMBED_ROUTES.has(path)
  ) {
    return { kind: "page", path, aliased };
  }
  return { kind: "unknown" };
}

function viewPathFor(resolved: ResolvedRoute): string {
  if (resolved.kind === "page") return resolved.path;
  return "/";
}

function locationUrl(path: string): string {
  return `${path}${window.location.search}${window.location.hash}`;
}


const FOOTER_LINKS = [
  { label: "FAQ", href: "/faq" },
  { label: "Terms", href: "/terms-of-service" },
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Instagram", href: "https://www.instagram.com/united_strength/" },
  { label: "Email", href: "mailto:info@unitedstrengthgym.com" }
];

// ----------------------------------------------------------------------
// ELEVATED SVG BRAND LOGOS
// ----------------------------------------------------------------------

// Interlocking US Crest (Geometric Monogram from User Upload)
function USCrestSVG({ className = "w-10 h-10", opacity = 1 }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={{ opacity }}
      fill="currentColor"
    >
      {/* 
        This is a high-fidelity geometric vector representation of the custom 
        modern 'US' monogram logo uploaded by the user. It features precise 
        angled tops, nested concentric loops, and bold lines.
      */}
      <g>
        {/* Main 'U' stem and base curve */}
        <path d="M 22 24 
                 L 35.5 33.5 
                 L 35.5 54 
                 C 35.5 62 42 68.5 50 68.5 
                 C 58 68.5 64.5 62 64.5 54 
                 L 64.5 45.5 
                 L 78 45.5 
                 L 78 54 
                 C 78 69.5 65.5 82 50 82 
                 C 34.5 82 22 69.5 22 54 
                 Z" />
        {/* Right 'S' top connector loop */}
        <path d="M 78 24 
                 L 64.5 33.5 
                 L 64.5 45.5 
                 L 78 54 
                 Z" />
      </g>
    </svg>
  );
}

// ----------------------------------------------------------------------
// MAIN APPLICATION COMPONENT
// ----------------------------------------------------------------------
export default function App() {
  const [activeTab, setActiveTab] = useState<"simulator" | "archive" | "specs">("simulator");
  /** Production / Vercel: always simulator — Archive A&C and Specs never mount */
  const studioTab = showDevChrome ? activeTab : "simulator";
  const [archiveDirection, setArchiveDirection] = useState<"A" | "C">("A");
  /** Working homepage: V1 = Todd PDF delivery candidate; EF frozen fallback (DEV switcher) */
  const [workingDirection] = useState<WorkingDirection>("V1");
  const [activeSimRoute, setActiveSimRoute] = useState(() =>
    viewPathFor(resolveRoute(window.location.pathname)),
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(
    () => viewPathFor(resolveRoute(window.location.pathname)) !== "/",
  );
  /** Hide sticky beta chrome while scrolling so Direction preview is full-bleed on phone */
  const [chromeHidden, setChromeHidden] = useState(false);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [navigationNotification, setNavigationNotification] = useState<string | null>(null);
  /** EF lookbook zone — drop snap-mandatory for continuous stack scroll */
  const [lookbookFreeScroll, setLookbookFreeScroll] = useState(false);
  /** V1 opening: vertical page scroll only after slide 04 */
  const [v1VerticalUnlocked, setV1VerticalUnlocked] = useState(false);
  /** V1 header clock — ticks every minute */
  const [v1Clock, setV1Clock] = useState(() => new Date());

  const isV1 = workingDirection === "V1";
  const usesEfInteriors = workingDirection === "EF" || workingDirection === "V1";
  const isEmbedRoute = EMBED_ROUTES.has(activeSimRoute);
  /** V1 dark chrome on marketing home/interiors — never under Mariana embeds */
  const useV1Chrome = isV1 && !isEmbedRoute;
  /** Lock parent Y scroll while V1 home is on slides 01–03 */
  const v1OpeningLocked =
    isV1 && activeSimRoute === "/" && !v1VerticalUnlocked;

  // References for mobile frames to track manual scrolling
  const simScrollContainerRef = useRef<HTMLDivElement>(null);
  const archiveScrollContainerRef = useRef<HTMLDivElement>(null);
  const lastWindowScrollY = useRef(0);
  const lastSimScrollY = useRef(0);
  /** Null until the first effect pass; later resets only when the key changes. */
  const studioRouteKey = useRef<string | null>(null);

  // Format today's date exactly as requested: "Columbus, OH | Weekday, Month Day, Year"
  const getFormattedDate = () => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit"
    };
    const dateStr = today.toLocaleDateString("en-US", options);
    return `Columbus, OH | ${dateStr}`;
  };

  /** V1 PDF §02 — COLUMBUS, OH // MM.DD.YY // 12-HOUR TIME WITH AM/PM */
  const getV1FormattedDateTime = (d: Date) => {
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    const yy = String(d.getFullYear()).slice(-2);
    let hours = d.getHours();
    const minutes = String(d.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    if (hours === 0) hours = 12;
    return `COLUMBUS, OH // ${mm}.${dd}.${yy} // ${hours}:${minutes} ${ampm}`;
  };

  useEffect(() => {
    if (!isV1) return;
    const tick = () => setV1Clock(new Date());
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, [isV1]);

  const scrollSimToTop = () => {
    setTimeout(() => {
      if (simScrollContainerRef.current) {
        simScrollContainerRef.current.scrollTop = 0;
      }
    }, 50);
  };

  const writeAddress = (path: string, mode: "push" | "replace") => {
    if (stripPath(window.location.pathname) === path) return;
    const url = locationUrl(path);
    if (mode === "push") window.history.pushState(null, "", url);
    else window.history.replaceState(null, "", url);
  };

  const goSimHome = () => {
    setActiveSimRoute("/");
    setIsMenuOpen(false);
    setIsScrolled(false);
    setLookbookFreeScroll(false);
    setV1VerticalUnlocked(false);
    scrollSimToTop();
    const resolved = resolveRoute(window.location.pathname);
    if (resolved.kind === "home" && resolved.aliased) writeAddress("/", "replace");
    else writeAddress("/", "push");
  };

  const showComingSoon = (label: string) => {
    setNavigationNotification(`Coming Soon — ${label}`);
    window.setTimeout(() => {
      setNavigationNotification(null);
    }, 3200);
  };

  const showResolvedPage = (path: string) => {
    setActiveSimRoute(path);
    setIsMenuOpen(false);
    setIsScrolled(false);
    scrollSimToTop();
  };

  // Handle navigation and keep the address bar on the same path
  const triggerNavigation = (href: string, label: string) => {
    if (href.startsWith("http://") || href.startsWith("https://")) {
      setIsMenuOpen(false);
      return;
    }
    if (href.startsWith("mailto:") || href.startsWith("tel:")) return;

    const resolved = resolveRoute(href);
    switch (resolved.kind) {
      case "page":
        showResolvedPage(resolved.path);
        writeAddress(resolved.path, "push");
        return;
      case "home":
        goSimHome();
        return;
      case "comingSoon":
        showComingSoon(label || resolved.label);
        return;
      case "unknown":
        break;
      default: {
        const _exhaustive: never = resolved;
        return _exhaustive;
      }
    }

    // Studio-only mock toast — never on Vercel / production builds
    if (!showDevChrome) return;

    setNavigationNotification(`Mock Route Request: "${label}" (${href})`);
    setTimeout(() => {
      setNavigationNotification(null);
    }, 4000);
  };

  // Copy color code to clipboard
  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  // Reset menu and scroll when switching studio tab or archive direction.
  // The first pass — including Strict Mode's second run of the same key —
  // must not wipe a path read from the address bar.
  useEffect(() => {
    const key = `${activeTab}:${archiveDirection}`;
    if (studioRouteKey.current === null || studioRouteKey.current === key) {
      studioRouteKey.current = key;
      setIsMenuOpen(false);
      setChromeHidden(activeTab === "simulator");
      lastSimScrollY.current = 0;
      return;
    }
    studioRouteKey.current = key;
    setIsMenuOpen(false);
    setIsScrolled(false);
    setChromeHidden(activeTab === "simulator");
    lastSimScrollY.current = 0;
    setActiveSimRoute("/");
    if (stripPath(window.location.pathname) !== "/") {
      window.history.replaceState(null, "", locationUrl("/"));
    }
    if (simScrollContainerRef.current) {
      simScrollContainerRef.current.scrollTop = 0;
    }
    if (archiveScrollContainerRef.current) {
      archiveScrollContainerRef.current.scrollTop = 0;
    }
  }, [activeTab, archiveDirection]);

  // Deep links, aliases, Coming Soon, and browser Back/Forward.
  useEffect(() => {
    let toastTimer = 0;

    const applyFromAddress = (source: "hydrate" | "pop") => {
      const resolved = resolveRoute(window.location.pathname);
      switch (resolved.kind) {
        case "page":
          setActiveSimRoute(resolved.path);
          setIsMenuOpen(false);
          if (resolved.aliased) {
            window.history.replaceState(null, "", locationUrl(resolved.path));
          }
          if (source === "pop") scrollSimToTop();
          return;
        case "home":
          setActiveSimRoute("/");
          setIsMenuOpen(false);
          setLookbookFreeScroll(false);
          setV1VerticalUnlocked(false);
          if (resolved.aliased) {
            window.history.replaceState(null, "", locationUrl("/"));
          }
          if (source === "pop") scrollSimToTop();
          return;
        case "comingSoon":
          setActiveSimRoute("/");
          setIsMenuOpen(false);
          setNavigationNotification(`Coming Soon — ${resolved.label}`);
          window.clearTimeout(toastTimer);
          toastTimer = window.setTimeout(() => {
            setNavigationNotification(null);
          }, 3200);
          return;
        case "unknown":
          setActiveSimRoute("/");
          setIsMenuOpen(false);
          window.history.replaceState(null, "", locationUrl("/"));
          return;
        default: {
          const _exhaustive: never = resolved;
          return _exhaustive;
        }
      }
    };

    applyFromAddress("hydrate");
    const onPop = () => applyFromAddress("pop");
    window.addEventListener("popstate", onPop);
    return () => {
      window.clearTimeout(toastTimer);
      window.removeEventListener("popstate", onPop);
    };
  }, []);

  // Hide beta chrome on scroll — stays collapsed until the BETA pill is tapped
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y - lastWindowScrollY.current > 6 && y > 32) setChromeHidden(true);
      lastWindowScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Crest wordmark/monogram + auto-collapse beta chrome (manual reopen only)
  const syncCrestFromScroll = () => {
    const el = simScrollContainerRef.current;
    if (!el) return;
    const top = el.scrollTop;
    const next = activeSimRoute !== "/" ? true : top > 40;
    setIsScrolled(next);
    if (top - lastSimScrollY.current > 6 && top > 24) setChromeHidden(true);
    lastSimScrollY.current = top;
  };

  const handleSimScroll = () => {
    syncCrestFromScroll();
  };

  // Native listener — more reliable with snap-scroll than React onScroll alone
  useEffect(() => {
    const el = simScrollContainerRef.current;
    if (!el) return;
    const onScroll = () => syncCrestFromScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    syncCrestFromScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, [activeSimRoute, activeTab]);

  // Re-sync crest when route changes (interiors always use compact chrome)
  useEffect(() => {
    if (activeSimRoute !== "/") {
      setIsScrolled(true);
      return;
    }
    const el = simScrollContainerRef.current;
    if (el) setIsScrolled(el.scrollTop > 40);
  }, [activeSimRoute]);

  /** Home at top = ALD overlay; scrolled or interior = compact crest */
  const crestCompact = isScrolled || activeSimRoute !== "/";

  // Lock phone-stage scroll while overlay menu is open OR V1 opening (01–03)
  useEffect(() => {
    const el = simScrollContainerRef.current;
    if (!el) return;
    if (!isMenuOpen) {
      el.style.overflowY = "";
      if (v1OpeningLocked) el.scrollTop = 0;
      return;
    }
    const lockedTop = el.scrollTop;
    el.style.overflowY = "hidden";
    const pin = () => {
      if (el.scrollTop !== lockedTop) el.scrollTop = lockedTop;
    };
    const block = (event: Event) => {
      event.preventDefault();
    };
    const timer = window.setInterval(pin, 50);
    el.addEventListener("scroll", pin);
    el.addEventListener("wheel", block, { capture: true, passive: false });
    el.addEventListener("touchmove", block, { capture: true, passive: false });
    return () => {
      window.clearInterval(timer);
      el.removeEventListener("scroll", pin);
      el.removeEventListener("wheel", block, { capture: true });
      el.removeEventListener("touchmove", block, { capture: true });
      el.style.overflowY = "";
    };
  }, [isMenuOpen, v1OpeningLocked]);

  // Clear V1 unlock when leaving V1 home
  useEffect(() => {
    if (!isV1 || activeSimRoute !== "/") {
      setV1VerticalUnlocked(false);
    }
  }, [isV1, activeSimRoute]);

  // Reset unlock when switching working direction away from / onto V1 mid-session
  useEffect(() => {
    if (workingDirection !== "V1") {
      setV1VerticalUnlocked(false);
    }
  }, [workingDirection]);

  // Escape closes nav (EF overlay or V1 drawer)
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-[#111111] text-[#E5E5E5] flex flex-col font-sans overflow-x-hidden">
      
      {isMaintenanceMode ? <MaintenancePage /> : null}

      {/* HEADER / CONTROL BAR — local DEV only */}
      {showDevChrome && !isMaintenanceMode ? (
      <header
        className={`border-b border-neutral-800 bg-[#161616] sticky top-0 z-40 overflow-hidden transition-[max-height,opacity,padding] duration-300 ease-out ${
          chromeHidden
            ? "max-h-0 py-0 opacity-0 pointer-events-none border-transparent"
            : "max-h-[320px] px-6 py-4 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="bg-[#0A3C2E] text-emerald-400 text-xs px-2 py-0.5 rounded-full font-mono uppercase tracking-wider font-semibold">
                BETA EXPLORATION
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                Direction D locked IA · Aug 2026 · Odd Ritual ref
              </span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white mt-1">
              UNITED STRENGTH CLUB <span className="font-light text-neutral-400">/ Brand Mocks</span>
            </h1>
          </div>

          {/* MAIN CONTAINER TABS */}
          <div className="flex items-center gap-2 bg-[#222] p-1 rounded-lg self-start md:self-auto flex-wrap">
            <button
              onClick={() => setActiveTab("simulator")}
              className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeTab === "simulator"
                  ? "bg-[#0A3C2E] text-white shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5" />
                Direction D
              </span>
            </button>
            <button
              onClick={() => setActiveTab("archive")}
              className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeTab === "archive"
                  ? "bg-[#0A3C2E] text-white shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                Archive A &amp; C
              </span>
            </button>
            <button
              onClick={() => setActiveTab("specs")}
              className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeTab === "specs"
                  ? "bg-[#0A3C2E] text-white shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5" />
                Aesthetic Specs & Rules
              </span>
            </button>
          </div>
        </div>
      </header>
      ) : null}

      {/* Route notification — Coming Soon (prod + DEV) · Mock Route (DEV only, set above) */}
      {!isMaintenanceMode && navigationNotification && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[110] max-w-[min(92vw,24rem)] bg-[#181818] border border-white/10 text-white px-5 py-3 rounded-sm shadow-2xl flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#F3EEE7] shrink-0" />
          <p className="text-[11px] font-mono uppercase tracking-[0.14em] leading-snug">
            {navigationNotification}
          </p>
        </div>
      )}

      {/* MAIN CONTAINER AREA */}
      {!isMaintenanceMode ? (
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 min-w-0 overflow-x-hidden">
        
        {/* ================================================================= */}
        {/* TAB 1: INTERACTIVE SIMULATOR                                      */}
        {/* ================================================================= */}
        {studioTab === "simulator" && (
          <div className="fixed inset-0 z-20 flex flex-col bg-white min-h-[100dvh]">
            <div className="relative flex-1 min-h-0 flex flex-col">
              {/* ALD crest — fixed over the scrollport (not inside overflow content) */}
                  {!isEmbedRoute ? (
                  <div
                    className={`absolute top-0 left-0 right-0 z-30 transition-all duration-500 pointer-events-none ${
                      useV1Chrome
                        ? crestCompact
                          ? "bg-[#111111]/92 backdrop-blur-md border-b border-white/[0.08]"
                          : "bg-gradient-to-b from-black/70 via-black/30 to-transparent"
                        : crestCompact
                          ? "bg-white/85 backdrop-blur-md border-b border-black/[0.06]"
                          : "bg-gradient-to-b from-black/50 via-black/20 to-transparent"
                    }`}
                  >
                    <div className="px-5 pt-3 pb-2 flex items-start justify-between min-h-[56px] relative pointer-events-auto">
                      <button
                        type="button"
                        onClick={() => setIsMenuOpen(true)}
                        className={`hover:opacity-75 transition-all p-1 -ml-1 min-h-[44px] min-w-[44px] flex flex-col justify-center ${
                          isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                        } ${
                          useV1Chrome
                            ? "text-[#F3EEE7]"
                            : crestCompact
                              ? "text-[#181818]"
                              : "text-white"
                        }`}
                        title={useV1Chrome ? "Open navigation" : "Open Overlay Menu"}
                      >
                        <div className="w-5 h-[1.5px] bg-current mb-1.5 transition-all" />
                        <div className="w-5 h-[1.5px] bg-current mb-1.5 transition-all" />
                        <div className="w-3.5 h-[1.5px] bg-current transition-all" />
                      </button>

                      <button
                        type="button"
                        onClick={() => triggerNavigation("/", "Home")}
                        className="absolute left-1/2 top-3 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity w-[86%] z-10 min-h-[44px]"
                        title="Return to Home"
                      >
                        {/* Crossfade: wordmark at top · monogram when scrolled */}
                        <span className={`relative block w-full ${useV1Chrome ? "h-8" : "h-6"}`}>
                          <span
                            className={`absolute inset-0 flex items-center justify-center font-bold font-sans uppercase leading-tight tracking-[-0.04em] transition-all duration-500 ${
                              useV1Chrome ? "text-[15px] md:text-[22px]" : "text-[12px]"
                            } ${
                              crestCompact
                                ? "opacity-0 scale-95 pointer-events-none"
                                : useV1Chrome
                                  ? "opacity-100 scale-100 text-[#F3EEE7]"
                                  : "opacity-100 scale-100 text-white"
                            }`}
                            style={{ fontFamily: "'Satoshi', sans-serif" }}
                            aria-hidden={crestCompact}
                          >
                            UNITED STRENGTH
                          </span>
                          <span
                            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                              crestCompact
                                ? useV1Chrome
                                  ? "opacity-100 scale-100 text-[#F3EEE7]"
                                  : "opacity-100 scale-100 text-[#181818]"
                                : "opacity-0 scale-95 pointer-events-none text-white"
                            }`}
                            aria-hidden={!crestCompact}
                          >
                            <USCrestSVG className={useV1Chrome ? "w-7 h-7" : "w-6 h-6"} />
                          </span>
                        </span>
                        <span
                          className={`font-mono uppercase text-center transition-opacity duration-500 ${
                            useV1Chrome
                              ? "text-[8px] md:text-[10px] tracking-[0.14em] text-[#F3EEE7]/70 opacity-100"
                              : crestCompact
                                ? "text-[8px] tracking-[0.18em] text-[#5C5C5C] opacity-100"
                                : "text-[8px] tracking-[0.18em] text-white/70 opacity-100"
                          }`}
                        >
                          {useV1Chrome
                            ? getV1FormattedDateTime(v1Clock)
                            : getFormattedDate()}
                        </span>
                      </button>

                      <div className="w-11 shrink-0" aria-hidden />
                    </div>
                  </div>
                  ) : null}

                  <div
                    ref={simScrollContainerRef}
                    data-sim-scroll
                    inert={isMenuOpen ? true : undefined}
                    onScroll={handleSimScroll}
                    className={`relative flex-1 min-h-0 w-full scrollbar-none flex flex-col [container-type:size] ${
                      isMenuOpen || v1OpeningLocked
                        ? "overflow-y-hidden"
                        : "overflow-y-auto"
                    } ${
                      useV1Chrome
                        ? "bg-[#111111] text-[#F3EEE7]"
                        : "bg-white text-[#181818]"
                    } ${
                      lookbookFreeScroll || useV1Chrome ? "" : "scroll-smooth"
                    } ${
                      !useV1Chrome &&
                      !isEmbedRoute &&
                      ((activeSimRoute === "/" && !lookbookFreeScroll) ||
                        (workingDirection === "E" &&
                          activeSimRoute === "/about/philosophy"))
                        ? "snap-y snap-mandatory"
                        : ""
                    }`}
                  >
                    {/* ACTIVE SCREEN — EF default · V1 parallel · E/F hidden */}
                    <div className="flex flex-col">
                      {activeSimRoute === "/about/philosophy" ? (
                        usesEfInteriors ? (
                          <EfPhilosophyPage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : (
                          <PhilosophyPage onBack={goSimHome} />
                        )
                      ) : activeSimRoute === "/about/founder" ? (
                        isV1 ? (
                          <V1FounderPage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : usesEfInteriors ? (
                          <EfFounderPage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : (
                          <FounderPage onBack={goSimHome} />
                        )
                      ) : activeSimRoute === "/about/team" ? (
                        isV1 ? (
                          <V1TeamPage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : usesEfInteriors ? (
                          <EfTeamPage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : (
                          <TeamPage onBack={goSimHome} onNav={triggerNavigation} />
                        )
                      ) : activeSimRoute === "/about/the-space" ? (
                        isV1 ? (
                          <V1SpacePage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : usesEfInteriors ? (
                          <EfSpacePage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : (
                          <SpacePage onBack={goSimHome} />
                        )
                      ) : activeSimRoute === "/about/faq" ? (
                        isV1 ? (
                          <V1FactsPage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : usesEfInteriors ? (
                          <EfFaqPage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : (
                          <FaqPage onBack={goSimHome} />
                        )
                      ) : activeSimRoute === "/training/classes/build" ? (
                        isV1 ? (
                          <V1BuildPage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : (
                          <BuildPage onBack={goSimHome} onNav={triggerNavigation} />
                        )
                      ) : activeSimRoute === "/training/classes/burn" ? (
                        <BurnPage onBack={goSimHome} onNav={triggerNavigation} />
                      ) : activeSimRoute === "/training/classes/balance" ? (
                        <BalancePage onBack={goSimHome} onNav={triggerNavigation} />
                      ) : activeSimRoute === "/training/personal" ||
                        PERSONAL_TRAINING_ALIASES.has(activeSimRoute) ? (
                        isV1 ? (
                          <V1PersonalTrainingPage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : (
                          <PersonalTrainingPage
                            onBack={goSimHome}
                            onNav={triggerNavigation}
                          />
                        )
                      ) : activeSimRoute === "/training/move-the-city" ||
                        activeSimRoute === "/culture/move-the-city" ? (
                        isV1 ? (
                          <V1MoveTheCityPage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : (
                          <MoveTheCityPage
                            onBack={goSimHome}
                            onNav={triggerNavigation}
                          />
                        )
                      ) : activeSimRoute === "/start-here/experience" ? (
                        isV1 ? (
                          <V1ExperiencePage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : (
                          <ExperiencePage onBack={goSimHome} onNav={triggerNavigation} />
                        )
                      ) : activeSimRoute === "/start-here/apply" ? (
                        isV1 ? (
                          <V1ApplyPage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : (
                          <ApplyPage onBack={goSimHome} onNav={triggerNavigation} />
                        )
                      ) : activeSimRoute === "/membership" ? (
                        isV1 ? (
                          <V1MembershipPage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : (
                          <MembershipPage onBack={goSimHome} onNav={triggerNavigation} />
                        )
                      ) : activeSimRoute === "/contact" ? (
                        <ContactPage onBack={goSimHome} onNav={triggerNavigation} />
                      ) : activeSimRoute === "/culture/by-design" ? (
                        isV1 ? (
                          <V1ByDesignPage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : (
                          <ByDesignPage onBack={goSimHome} onNav={triggerNavigation} />
                        )
                      ) : activeSimRoute === "/culture/cultivated" ? (
                        isV1 ? (
                          <V1CultivatedPage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : (
                          <CultivatedPage onBack={goSimHome} onNav={triggerNavigation} />
                        )
                      ) : activeSimRoute === "/culture/archive" ? (
                        isV1 ? (
                          <V1ArchivePage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : (
                          <ArchivePage onBack={goSimHome} onNav={triggerNavigation} />
                        )
                      ) : activeSimRoute === "/privacy-policy" ? (
                        <PrivacyPage onBack={goSimHome} onNav={triggerNavigation} />
                      ) : activeSimRoute === "/terms-of-service" ? (
                        <TermsPage onBack={goSimHome} onNav={triggerNavigation} />
                      ) : activeSimRoute === "/buy" ? (
                        <MarianaEmbedPage kind="buy" onBack={goSimHome} />
                      ) : activeSimRoute === "/schedule" ? (
                        <MarianaEmbedPage kind="schedule" onBack={goSimHome} />
                      ) : activeSimRoute === "/account" ? (
                        <MarianaEmbedPage kind="account" onBack={goSimHome} />
                      ) : workingDirection === "V1" ? (
                        <ConceptV1View
                          onNav={triggerNavigation}
                          onVerticalScrollUnlockChange={setV1VerticalUnlocked}
                        />
                      ) : workingDirection === "F" ? (
                        <ConceptFView onNav={triggerNavigation} />
                      ) : workingDirection === "EF" ? (
                        <ConceptEFView
                          onNav={triggerNavigation}
                          onFreeScrollZoneChange={setLookbookFreeScroll}
                        />
                      ) : (
                        <ConceptEView onNav={triggerNavigation} />
                      )}
                    </div>
                  </div>

                {/* NAV — V1 left drawer · EF/others fullscreen overlay · hidden on embeds */}
                {isEmbedRoute ? null : useV1Chrome ? (
                  <div
                    className={`absolute inset-0 z-[60] flex transition-opacity duration-500 ease-out ${
                      isMenuOpen
                        ? "opacity-100 pointer-events-auto visible"
                        : "opacity-0 pointer-events-none invisible"
                    }`}
                    aria-hidden={!isMenuOpen}
                  >
                    <div
                      className={`relative h-full w-full md:w-[28%] min-w-0 md:min-w-[280px] max-w-full bg-[#111111] text-white flex flex-col border-r border-white/10 transition-transform duration-500 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] ${
                        isMenuOpen ? "translate-x-0" : "-translate-x-full"
                      }`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1] overflow-hidden">
                        <USCrestSVG className="w-[160%] max-w-none h-auto text-white/[0.05]" />
                      </div>

                      <div className="relative z-10 flex items-center justify-between px-5 pt-10 pb-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => setIsMenuOpen(false)}
                          className="min-h-[44px] min-w-[44px] flex items-center justify-start -ml-1 text-[#F3EEE7] hover:opacity-80 transition-all"
                          title="Close navigation"
                        >
                          <X className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsMenuOpen(false)}
                          className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#F3EEE7]/90 min-h-[44px] px-1 hover:opacity-70 transition-opacity"
                        >
                          Close
                        </button>
                      </div>

                      <div className="relative z-10 flex-1 min-h-0 flex flex-col px-5 pb-6">
                        <LockedNavOverlay
                          variant="oddRitual"
                          onNavigate={(href, label) => {
                            setIsMenuOpen(false);
                            triggerNavigation(href, label);
                          }}
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      className="hidden md:block flex-1 h-full bg-black/35 cursor-default"
                      aria-label="Close navigation"
                      onClick={() => setIsMenuOpen(false)}
                    />
                  </div>
                ) : (
                <div
                  className={`absolute inset-0 z-[60] text-white flex flex-col transition-opacity duration-500 ease-out ${
                    isMenuOpen
                      ? "opacity-100 pointer-events-auto visible"
                      : "opacity-0 pointer-events-none invisible"
                  }`}
                  aria-hidden={!isMenuOpen}
                >
                  {/* Odd Ritual DNA: photo is the menu plane */}
                  <img
                    src={gymPhotos.architectureRaw}
                    alt=""
                    aria-hidden
                    className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                  />
                  {/* Soft vignette only — keep facility visible */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.28) 38%, rgba(0,0,0,0.45) 72%, rgba(0,0,0,0.72) 100%)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1] overflow-hidden">
                    <USCrestSVG className="w-[140%] max-w-none h-auto text-white/[0.06]" />
                  </div>

                  <div className="relative z-10 flex items-center justify-between px-6 pt-10 pb-2 shrink-0">
                    <button
                      type="button"
                      onClick={() => setIsMenuOpen(false)}
                      className="min-h-[44px] min-w-[44px] flex items-center justify-start -ml-1 text-white hover:opacity-80 transition-all"
                      title="Close Overlay Menu"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsMenuOpen(false)}
                      className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-white/90 min-h-[44px] px-1 hover:opacity-70 transition-opacity"
                    >
                      Close
                    </button>
                  </div>

                  <div className="relative z-10 flex-1 min-h-0 flex flex-col px-5 pb-0">
                    <LockedNavOverlay
                      variant="oddRitual"
                      onNavigate={(href, label) => {
                        setIsMenuOpen(false);
                        triggerNavigation(href, label);
                      }}
                    />

                    {/* Place footer on the photo — left-aligned (not centered) */}
                    <div className="shrink-0 pt-3 pb-7 flex flex-col items-start gap-2.5 text-left">
                      <USCrestSVG className="w-9 h-9 text-white/90" />
                      <p
                        className="font-serif text-[10px] uppercase tracking-[0.14em] text-white/85 leading-relaxed"
                        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                      >
                        United Strength Club · ©{new Date().getFullYear()}
                        <br />
                        Columbus, Ohio
                      </p>
                      <div className="flex items-center gap-4 text-[9px] font-mono uppercase tracking-[0.16em] text-white/55">
                        <span>237 Cleveland Ave</span>
                        <a
                          href="https://www.instagram.com/united_strength/"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-white transition-colors"
                        >
                          Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                )}
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 2: ARCHIVE — Directions A & C (revisit / salvage)             */}
        {/* ================================================================= */}
        {studioTab === "archive" && (
          <div className="space-y-6">
            <div className="bg-[#161616] border border-neutral-800 rounded-2xl p-6 max-w-3xl mx-auto text-left">
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">
                Archived · Aug 2026 meeting
              </span>
              <h2 className="text-lg font-bold text-white tracking-tight mt-1">
                Directions A &amp; C — revisit before delete
              </h2>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Live work is Direction D. Keep A and C here so Todd can screenshot anything worth
                salvaging. These are the interactive old builds — not the active foundation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <button
                type="button"
                onClick={() => setArchiveDirection("A")}
                className={`text-left rounded-2xl border p-5 transition-all min-h-[44px] ${
                  archiveDirection === "A"
                    ? "bg-[#0A3C2E]/25 border-emerald-800 text-white"
                    : "bg-[#161616] border-neutral-800 text-neutral-300 hover:border-neutral-600"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-sm uppercase tracking-wide">Direction A</span>
                  <span className="font-mono text-[10px] text-neutral-500">Editorial</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-2 leading-relaxed">
                  ALD / Kinfolk cover energy — Satoshi, B&amp;W cinematic, calm top-third whitespace.
                </p>
              </button>
              <button
                type="button"
                onClick={() => setArchiveDirection("C")}
                className={`text-left rounded-2xl border p-5 transition-all min-h-[44px] ${
                  archiveDirection === "C"
                    ? "bg-[#0A3C2E]/25 border-emerald-800 text-white"
                    : "bg-[#161616] border-neutral-800 text-neutral-300 hover:border-neutral-600"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-sm uppercase tracking-wide">Direction C</span>
                  <span className="font-mono text-[10px] text-neutral-500">Gallery</span>
                </div>
                <p className="text-[11px] text-neutral-400 mt-2 leading-relaxed">
                  Cereal / Nowness gallery wall — asymmetric crops, equipment as artifacts.
                </p>
              </button>
            </div>

            <div className="flex flex-col items-center pt-2">
              <div className="bg-[#222] text-xs px-3 py-1 rounded-full text-white font-mono uppercase tracking-widest mb-3 border border-neutral-800">
                {archiveDirection === "A"
                  ? "Preview · Concept A: Editorial Cover"
                  : "Preview · Concept C: Gallery Wall"}
              </div>
              <div
                ref={archiveScrollContainerRef}
                className="w-full max-w-[375px] h-[680px] bg-white text-[#181818] border border-neutral-800 rounded-3xl overflow-y-auto relative scrollbar-none shadow-xl flex flex-col"
              >
                <div className="sticky top-0 bg-white/90 backdrop-blur-xs z-20 px-4 py-3 border-b border-neutral-100 flex justify-between items-center select-none">
                  <Menu className="w-4 h-4 text-neutral-800" />
                  <span className="font-semibold tracking-[0.2em] text-[8px] font-sans text-neutral-900">
                    UNITED STRENGTH CLUB
                  </span>
                  <div className="w-4"></div>
                </div>
                {archiveDirection === "A" ? (
                  <ConceptAView onNav={triggerNavigation} />
                ) : (
                  <ConceptCView onNav={triggerNavigation} />
                )}
              </div>
              <p className="text-[10px] font-mono text-neutral-500 mt-4 text-center max-w-sm">
                Tip: screenshot anything to keep, then we can fold it into D and retire this archive.
              </p>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 3: SPECIFICATIONS / THE CULTURE CLUB BRAND SHEET            */}
        {/* ================================================================= */}
        {studioTab === "specs" && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Color Tokens Panel */}
            <div className="md:col-span-6 bg-[#161616] border border-neutral-800 rounded-2xl p-6 space-y-6">
              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                  CULTURE CLUB SYSTEM
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                  Visual Design Tokens
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Color Block 1 */}
                <div className="bg-[#222] border border-neutral-800 p-4 rounded-xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FFFFFF] border border-neutral-700 rounded-lg shrink-0"></div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block">Canvas</span>
                    <span className="text-xs font-semibold text-white">#FFFFFF</span>
                    <button
                      onClick={() => copyToClipboard("#FFFFFF")}
                      className="text-[9px] font-mono text-emerald-400 hover:underline block mt-0.5 flex items-center gap-1"
                    >
                      {copiedColor === "#FFFFFF" ? <Check className="w-2.5 h-2.5" /> : <Copy className="w-2.5 h-2.5" />}
                      Copy hex
                    </button>
                  </div>
                </div>

                {/* Color Block 2 */}
                <div className="bg-[#222] border border-neutral-800 p-4 rounded-xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F3EEE7] border border-neutral-700 rounded-lg shrink-0"></div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block">Alabaster</span>
                    <span className="text-xs font-semibold text-white">#F3EEE7</span>
                    <button
                      onClick={() => copyToClipboard("#F3EEE7")}
                      className="text-[9px] font-mono text-emerald-400 hover:underline block mt-0.5 flex items-center gap-1"
                    >
                      {copiedColor === "#F3EEE7" ? <Check className="w-2.5 h-2.5" /> : <Copy className="w-2.5 h-2.5" />}
                      Copy hex
                    </button>
                  </div>
                </div>

                {/* Color Block 3 */}
                <div className="bg-[#222] border border-neutral-800 p-4 rounded-xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#181818] border border-neutral-700 rounded-lg shrink-0"></div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block">Type (Dark)</span>
                    <span className="text-xs font-semibold text-white">#181818</span>
                    <button
                      onClick={() => copyToClipboard("#181818")}
                      className="text-[9px] font-mono text-emerald-400 hover:underline block mt-0.5 flex items-center gap-1"
                    >
                      {copiedColor === "#181818" ? <Check className="w-2.5 h-2.5" /> : <Copy className="w-2.5 h-2.5" />}
                      Copy hex
                    </button>
                  </div>
                </div>

                {/* Color Block 4 */}
                <div className="bg-[#222] border border-neutral-800 p-4 rounded-xl flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#5C5C5C] border border-neutral-700 rounded-lg shrink-0"></div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block">Muted</span>
                    <span className="text-xs font-semibold text-white">#5C5C5C</span>
                    <button
                      onClick={() => copyToClipboard("#5C5C5C")}
                      className="text-[9px] font-mono text-emerald-400 hover:underline block mt-0.5 flex items-center gap-1"
                    >
                      {copiedColor === "#5C5C5C" ? <Check className="w-2.5 h-2.5" /> : <Copy className="w-2.5 h-2.5" />}
                      Copy hex
                    </button>
                  </div>
                </div>

                {/* Color Block 5 - Accent */}
                <div className="bg-[#222] border border-neutral-800 p-4 rounded-xl flex items-center gap-3 col-span-1 sm:col-span-2">
                  <div className="w-10 h-10 bg-[#0A3C2E] border border-neutral-700 rounded-lg shrink-0"></div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase block">Membership Accent</span>
                    <span className="text-xs font-semibold text-emerald-100 flex items-center gap-1.5">
                      #0A3C2E <span className="bg-[#0A3C2E] text-emerald-400 text-[8px] font-mono px-1 rounded uppercase">Apply Button Only</span>
                    </span>
                    <button
                      onClick={() => copyToClipboard("#0A3C2E")}
                      className="text-[9px] font-mono text-emerald-400 hover:underline block mt-0.5 flex items-center gap-1"
                    >
                      {copiedColor === "#0A3C2E" ? <Check className="w-2.5 h-2.5" /> : <Copy className="w-2.5 h-2.5" />}
                      Copy hex
                    </button>
                  </div>
                </div>

              </div>

              {/* Typography Specs */}
              <div className="border-t border-neutral-800 pt-6 space-y-3">
                <h4 className="text-xs font-mono text-white uppercase tracking-widest">
                  Typography Rules
                </h4>
                <div className="space-y-3.5 text-xs">
                  <div className="bg-[#222]/40 p-3 rounded border border-neutral-800">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase block mb-1">
                      UI & Wordmarks
                    </span>
                    <p className="font-sans font-bold tracking-[0.2em] text-white uppercase text-[11px] mb-1">
                      SPACE GROTESK (SATOSHI-LIKE)
                    </p>
                    <p className="text-neutral-400 leading-normal">
                      Heavy letter-spacing on tiny elements, tightly packed on enormous text headers.
                    </p>
                  </div>

                  <div className="bg-[#222]/40 p-3 rounded border border-neutral-800">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase block mb-1">
                      Editorial Prose
                    </span>
                    <p className="font-serif italic text-white text-lg mb-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
                      Instrument Serif
                    </p>
                    <p className="text-neutral-400 leading-normal">
                      One core manifesto statement max per page. Understated serif, styled in thin italic weights.
                    </p>
                  </div>

                  <div className="bg-[#222]/40 p-3 rounded border border-neutral-800">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase block mb-1">
                      Status & Technical Tags
                    </span>
                    <p className="font-mono text-white text-[10px] mb-1">
                      IBM PLEX MONO
                    </p>
                    <p className="text-neutral-400 leading-normal">
                      10px uppercase eyebrows. Clean, technical details mapping locations, coordinates, dates.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Vocal Dictionary Panel */}
            <div className="md:col-span-6 bg-[#161616] border border-neutral-800 rounded-2xl p-6 space-y-6">
              <div>
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                  BRAND TONAL CONTROL
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                  Vocal Dictionary
                </h3>
              </div>

              <div className="space-y-4">
                <p className="text-xs text-neutral-400 leading-relaxed">
                  To preserve the downtown club environment and separate the brand completely from typical suburban high-energy workout gyms, Todd's content matrix requires strict vocabulary policing:
                </p>

                {/* Positive Voice Dictionary */}
                <div className="bg-[#0A3C2E]/10 border border-[#0A3C2E]/40 p-4 rounded-xl space-y-3">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block font-bold">
                    Use these terms (Private Club Vibe)
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-neutral-200">
                    <div className="p-1.5 rounded bg-black/20 font-sans border-l-2 border-emerald-500 pl-3">
                      Apply for Membership
                    </div>
                    <div className="p-1.5 rounded bg-black/20 font-sans border-l-2 border-emerald-500 pl-3">
                      Start the Journey
                    </div>
                    <div className="p-1.5 rounded bg-black/20 font-sans border-l-2 border-emerald-500 pl-3">
                      The Practice
                    </div>
                    <div className="p-1.5 rounded bg-black/20 font-sans border-l-2 border-emerald-500 pl-3">
                      The Space
                    </div>
                    <div className="p-1.5 rounded bg-black/20 font-sans border-l-2 border-emerald-500 pl-3 col-span-2">
                      Train · Recover · Community
                    </div>
                  </div>
                </div>

                {/* Negative Voice Dictionary */}
                <div className="bg-red-950/10 border border-red-900/30 p-4 rounded-xl space-y-3">
                  <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest block font-bold">
                    Strictly Avoid (Fitness/Gym Noise)
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-neutral-300 opacity-80">
                    <div className="p-1.5 rounded bg-black/20 line-through pl-3 border-l-2 border-red-800">
                      Join Our Gym
                    </div>
                    <div className="p-1.5 rounded bg-black/20 line-through pl-3 border-l-2 border-red-800">
                      Sign Up Now
                    </div>
                    <div className="p-1.5 rounded bg-black/20 line-through pl-3 border-l-2 border-red-800">
                      Shop Classes
                    </div>
                    <div className="p-1.5 rounded bg-black/20 line-through pl-3 border-l-2 border-red-800">
                      Get Started Free
                    </div>
                    <div className="p-1.5 rounded bg-black/20 line-through pl-3 border-l-2 border-red-800">
                      Book a Class
                    </div>
                    <div className="p-1.5 rounded bg-black/20 line-through pl-3 border-l-2 border-red-800">
                      Member Login
                    </div>
                  </div>
                </div>
              </div>

              {/* Inspiration list */}
              <div className="border-t border-neutral-800 pt-6 space-y-3">
                <h4 className="text-xs font-mono text-white uppercase tracking-widest">
                  Brand North Stars
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-neutral-400">
                  <a href="https://www.aimeleondore.com" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 bg-[#222]/40 p-2 rounded border border-neutral-800/80">
                    Aimé Leon Dore <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <a href="https://www.sohohouse.com" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 bg-[#222]/40 p-2 rounded border border-neutral-800/80">
                    Soho House <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <a href="https://www.aman.com" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 bg-[#222]/40 p-2 rounded border border-neutral-800/80">
                    Aman Resorts <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <a href="https://www.neuehouse.com" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 bg-[#222]/40 p-2 rounded border border-neutral-800/80">
                    Neuehouse <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <a href="https://oddritualgolf.com" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-1 bg-[#222]/40 p-2 rounded border border-neutral-800/80 col-span-2">
                    Odd Ritual Golf (Direction D) <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        )}

      </main>
      ) : null}

      {/* SYSTEM WORKSPACE FOOTER — local DEV only (never on Vercel) */}
      {showDevChrome && activeTab !== "simulator" && (
      <footer className="border-t border-neutral-800 bg-[#141414] py-6 px-6 mt-12 text-center text-xs text-neutral-500 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span>UNITED STRENGTH CLUB © {new Date().getFullYear()} — PRIVATE MEMBERS WORKSPACE</span>
          <div className="flex gap-4">
            <span className="text-neutral-400">Status: Live Preview (Dev Frame)</span>
            <span>·</span>
            <span>OS: Linux Containers</span>
          </div>
        </div>
      </footer>
      )}

    </div>
  );
}


// ----------------------------------------------------------------------
// SUB-VIEWS FOR CONCEPT HOMEPAGES
// ----------------------------------------------------------------------

// Type declaration for subviews props
interface SubViewProps {
  onNav: (href: string, label: string) => void;
}

/* ================================================================= */
/* CONCEPT A: EDITORIAL COVER (KINFOLK / ALD)                         */
/* ================================================================= */
function ConceptAView({ onNav }: SubViewProps) {
  return (
    <div className="flex-1 flex flex-col bg-white text-[#181818] animate-fade-in font-satoshi selection:bg-neutral-100 selection:text-neutral-900">
      
      {/* Block 1: Hero Cover */}
      <div className="px-6 pt-12 pb-10 flex flex-col justify-between min-h-[580px] border-b border-neutral-100">
        
        {/* Top-third quiet area */}
        <div className="space-y-2 mt-4">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#5C5C5C] block">
            ISSUE N°01 · VOL. I
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#5C5C5C] block">
            COLUMBUS, OHIO
          </span>
        </div>

        {/* Centerpiece: Cinematic Raw Concrete B&W gym space image with elegant custom margins */}
        <div className="my-8 relative group">
          <div className="absolute inset-0 bg-neutral-900/5 mix-blend-multiply rounded-sm"></div>
          <img
            src={gymPhotos.architectureRaw}
            alt="Cinematic raw athletic studio, harsh concrete pillars with sunlight casting shadows"
            className="w-full h-[280px] object-cover grayscale contrast-115 brightness-95 rounded-sm select-none pointer-events-none"
          />
          <div className="absolute bottom-2 right-2 text-[8px] font-mono uppercase tracking-widest text-white bg-black/60 px-1.5 py-0.5 rounded-xs select-none">
            01. RAW ARCHITECTURE
          </div>
        </div>

        {/* Hero typography locked at bottom */}
        <div className="space-y-4">
          <div className="space-y-0.5">
            <h2 className="font-satoshi font-black text-[44px] leading-[0.9] tracking-tight uppercase text-[#181818]">
              STRONGER
            </h2>
            <h2 className="font-satoshi font-black text-[44px] leading-[0.9] tracking-tight uppercase text-[#181818]">
              UNITED.
            </h2>
          </div>
          
          <div className="flex items-center justify-between border-t border-neutral-200 pt-3">
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#5C5C5C]">
              PRIVATE FITNESS & WELLNESS CLUB
            </span>
            <div className="flex items-center gap-1 text-[9px] font-mono uppercase tracking-widest text-[#181818]">
              <span>SCROLL</span>
              <ArrowDown className="w-2.5 h-2.5 animate-bounce" />
            </div>
          </div>
        </div>

      </div>

      {/* Block 2: Apply Band */}
      <div className="px-6 py-16 bg-white flex flex-col items-center justify-center border-b border-neutral-100">
        
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#5C5C5C] mb-5">
          THE PRACTICE
        </span>

        {/* Manifesto Copy inside Editorial Cover */}
        <p className="font-satoshi italic font-bold text-[24px] leading-[1.35] text-[#181818] text-center max-w-xs mb-8">
          “We believe in the deliberate practice of self-mastery, surrounded by a collective of the like-minded.”
        </p>

        {/* Deep Forest Green apply button */}
        <a
          href="/memberships"
          onClick={(e) => {
            e.preventDefault();
            onNav("/memberships", "Apply for Membership");
          }}
          className="w-full max-w-[280px] bg-[#0A3C2E] text-white text-[12px] font-bold tracking-[0.15em] uppercase text-center py-4 rounded-xs transition-all hover:bg-emerald-900 hover:shadow-lg flex justify-center items-center gap-2"
        >
          <span>Apply for Membership</span>
        </a>

        {/* Subtle text link underneath */}
        <a
          href="/new-here"
          onClick={(e) => {
            e.preventDefault();
            onNav("/new-here", "Start the Journey");
          }}
          className="mt-4 font-satoshi font-medium text-[10px] uppercase tracking-[0.2em] text-[#5C5C5C] hover:text-[#181818] transition-all flex items-center gap-1.5"
        >
          <span>Start the Journey</span>
          <ChevronRight className="w-3 h-3" />
        </a>

      </div>

      {/* Block 3: Minimalist Footer */}
      <div className="px-6 py-12 bg-neutral-50 text-[#181818] flex flex-col gap-8">
        
        <div className="space-y-4">
          {/* Logo representation in footer */}
          <div className="flex items-center gap-2">
            <USCrestSVG className="w-8 h-8 text-[#181818]" />
            <span className="font-satoshi font-bold tracking-widest text-[9px] uppercase">
              UNITED STRENGTH CLUB
            </span>
          </div>
          <p className="font-mono text-[10px] text-[#5C5C5C] leading-normal uppercase">
            237 Cleveland Ave,<br />
            Columbus, Ohio 43215
          </p>
        </div>

        {/* Core links mapping footer hrefs only */}
        <div className="border-t border-neutral-200 pt-6">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNav(link.href, link.label);
                }}
                className="font-mono text-[10px] uppercase tracking-wider text-[#5C5C5C] hover:text-[#181818] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-5 text-[9px] font-mono text-neutral-400 uppercase tracking-widest flex justify-between items-center">
          <span>Columbus, OH</span>
          <span>EST. 2026</span>
        </div>

      </div>

    </div>
  );
}



/* ================================================================= */
/* CONCEPT C: GALLERY WALL (CEREAL / NOWNESS)                        */
/* ================================================================= */
function ConceptCView({ onNav }: SubViewProps) {
  return (
    <div className="flex-1 flex flex-col bg-white text-[#181818] animate-fade-in font-sans selection:bg-neutral-100 selection:text-neutral-900">
      
      {/* Block 1: Cinematic Gallery Wall Hero */}
      <div className="px-6 pt-12 pb-10 flex flex-col justify-between min-h-[580px] border-b border-neutral-100">
        
        <div className="flex justify-between items-baseline mb-6 border-b border-neutral-100 pb-4 mt-4">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#5C5C5C]">
            VOLUME N°1
          </span>
          <span className="font-sans font-semibold text-[10px] uppercase tracking-[0.1em] text-[#181818]">
            UNITED STRENGTH®
          </span>
        </div>

        {/* Large Cinematic Letterbox Crop Frame */}
        <div className="relative rounded-sm overflow-hidden my-4">
          <div className="absolute inset-0 bg-neutral-900/10 mix-blend-multiply"></div>
          <img
            src={gymPhotos.galleryCinematic}
            alt="Moody, cinematic light casting on athlete resting, museum-like stillness"
            className="w-full h-[220px] object-cover filter brightness-95 rounded-xs select-none pointer-events-none"
          />
        </div>

        {/* Asymmetrical Overlapping Grid of details (Gallery style) */}
        <div className="grid grid-cols-12 gap-3 my-4">
          <div className="col-span-7">
            <img
              src={gymPhotos.equipmentClose}
              alt="Sculptural metal custom gym equipment close up"
              className="w-full h-[120px] object-cover grayscale rounded-xs select-none pointer-events-none"
            />
          </div>
          <div className="col-span-5 flex flex-col justify-center pl-2 space-y-1">
            <span className="font-mono text-[8px] uppercase tracking-widest text-[#5C5C5C]">REF. N°049</span>
            <p className="font-serif italic text-xs text-neutral-600 leading-normal">
              High-integrity steel milled privately in downtown Columbus.
            </p>
          </div>
        </div>

        <div className="space-y-3 mt-4">
          <h2 className="font-sans font-extrabold text-[28px] leading-tight tracking-tight uppercase text-[#181818]">
            STRONGER / UNITED.
          </h2>
          
          <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#5C5C5C]">
              THE PHYSICAL EXHIBIT
            </span>
            <span className="font-mono text-[9px] text-neutral-800 tracking-widest">↓ SCROLL</span>
          </div>
        </div>

      </div>

      {/* Block 2: Gallery Placard Apply Band */}
      <div className="px-6 py-16 bg-white flex flex-col items-center justify-center border-b border-neutral-100">
        
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#5C5C5C] mb-4">
          THE SPACE
        </span>

        {/* Minimalist placards block */}
        <div className="border border-neutral-200 p-6 rounded-xs max-w-xs mb-8 space-y-3.5 select-none">
          <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-sm inline-block">
            MEMBER LIMIT ACTIVE
          </span>
          <p className="font-serif italic text-[18px] leading-relaxed text-[#181818]">
            United Strength Club is a selective downtown sanctuary. Membership is limited, vetted, and strictly private.
          </p>
        </div>

        {/* Deep Forest Green apply button */}
        <a
          href="/memberships"
          onClick={(e) => {
            e.preventDefault();
            onNav("/memberships", "Apply for Membership");
          }}
          className="w-full max-w-[280px] bg-[#0A3C2E] text-white text-[12px] font-bold tracking-[0.15em] uppercase text-center py-4 rounded-xs transition-all hover:bg-emerald-900 hover:shadow-lg flex justify-center items-center gap-2"
        >
          <span>Apply for Membership</span>
        </a>

        {/* Text link */}
        <a
          href="/new-here"
          onClick={(e) => {
            e.preventDefault();
            onNav("/new-here", "Start the Journey");
          }}
          className="mt-4 font-sans font-medium text-[10px] uppercase tracking-[0.2em] text-[#5C5C5C] hover:text-[#181818] transition-all flex items-center gap-1"
        >
          <span>Start the Journey</span>
          <ChevronRight className="w-3 h-3" />
        </a>

      </div>

      {/* Block 3: Gallery Footer */}
      <div className="px-6 py-12 bg-neutral-50 text-[#181818] flex flex-col gap-8">
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <USCrestSVG className="w-8 h-8 text-[#181818]" />
            <span className="font-sans font-bold tracking-widest text-[9px] uppercase">
              UNITED STRENGTH CLUB
            </span>
          </div>
          <p className="font-mono text-[10px] text-[#5C5C5C] leading-normal uppercase">
            237 Cleveland Ave,<br />
            Columbus, Ohio 43215
          </p>
        </div>

        <div className="border-t border-neutral-200 pt-6">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNav(link.href, link.label);
                }}
                className="font-mono text-[10px] uppercase tracking-wider text-[#5C5C5C] hover:text-[#181818] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-5 text-[9px] font-mono text-neutral-400 uppercase tracking-widest flex justify-between items-center">
          <span>Columbus, OH</span>
          <span>EST. 2026</span>
        </div>

      </div>

    </div>
  );
}
