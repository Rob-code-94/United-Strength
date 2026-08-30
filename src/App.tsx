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
import ConceptEFView from "./components/ConceptEFView";
import ConceptFView from "./components/ConceptFView";
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
  OneOnOnePage,
  PrivateGroupPage,
  SmallGroupPage,
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
  CultivatedPage,
  MoveTheCityPage,
} from "./components/direction-ef/culture";
import { gymPhotos } from "./assets/images/gym";
import { showDevChrome } from "./lib/dev-chrome";

type WorkingDirection = "E" | "EF" | "F";

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
  "/training/personal/1-on-1",
]);

/** Live-site parity + Culture + legal shells */
const PARITY_ROUTES = new Set([
  "/start-here/experience",
  "/start-here/apply",
  "/membership",
  "/contact",
  "/culture/move-the-city",
  "/culture/cultivated",
  "/culture/archive",
  "/privacy",
  "/terms",
]);

/** Intentional roadmap — client-facing Coming Soon (pillars + overlay drafts) */
const COMING_SOON_ROUTES = new Set([
  "/foundation",
  "/longevity",
  "/longevity/reflection",
  "/longevity/strength-standard",
  "/longevity/the-trials",
  "/training/classes/balance",
  "/training/personal/small-group",
  "/training/personal/private-group",
]);

// ----------------------------------------------------------------------
// BRAND CONSTANTS & LINKS
// ----------------------------------------------------------------------
/** Todd Aug 2026 — locked IA (Direction D) — exact hierarchy */
type NavLeaf = { label: string; href: string; external?: boolean; comingSoon?: boolean };
type NavBranch = { label: string; children: NavLeaf[] };
type NavSection =
  | { title: string; kind: "links"; items: NavLeaf[]; comingSoon?: boolean }
  | { title: string; kind: "branches"; branches: NavBranch[]; comingSoon?: boolean }
  | { title: string; kind: "direct"; item: NavLeaf };

const LOCKED_NAV: NavSection[] = [
  {
    title: "ABOUT",
    kind: "links",
    items: [
      { label: "Philosophy", href: "/about/philosophy" },
      { label: "Founder Story", href: "/about/founder" },
      { label: "Meet the Team", href: "/about/team" },
      { label: "The Space", href: "/about/the-space" },
      { label: "FAQ", href: "/about/faq" },
    ],
  },
  {
    title: "TRAINING",
    kind: "branches",
    branches: [
      {
        label: "Classes",
        children: [
          { label: "BUILD", href: "/training/classes/build" },
          { label: "BURN", href: "/training/classes/burn" },
          { label: "BALANCE", href: "/training/classes/balance", comingSoon: true },
        ],
      },
      {
        label: "Personal Training",
        children: [
          { label: "1-on-1 Coaching", href: "/training/personal/1-on-1" },
          {
            label: "Small Group Training",
            href: "/training/personal/small-group",
            comingSoon: true,
          },
          {
            label: "Private Group Training",
            href: "/training/personal/private-group",
            comingSoon: true,
          },
        ],
      },
    ],
  },
  {
    title: "FOUNDATION",
    kind: "direct",
    item: { label: "Foundation", href: "/foundation", comingSoon: true },
  },
  {
    title: "LONGEVITY",
    kind: "links",
    comingSoon: true,
    items: [
      { label: "Reflection", href: "/longevity/reflection", comingSoon: true },
      { label: "The Strength Standard", href: "/longevity/strength-standard", comingSoon: true },
      { label: "The Trials", href: "/longevity/the-trials", comingSoon: true },
    ],
  },
  {
    title: "CULTURE",
    kind: "links",
    items: [
      { label: "Move the City", href: "/culture/move-the-city" },
      { label: "Cultivated", href: "/culture/cultivated" },
      { label: "Archive", href: "/culture/archive" },
    ],
  },
  {
    title: "MEMBERSHIP",
    kind: "direct",
    item: { label: "Membership", href: "/membership" },
  },
  {
    title: "SHOP",
    kind: "direct",
    item: {
      label: "United Limited",
      href: "https://unitedlimited.com",
      external: true,
      comingSoon: true,
    },
  },
  {
    title: "START HERE",
    kind: "links",
    items: [
      { label: "Experience United", href: "/start-here/experience" },
      { label: "Apply for Membership", href: "/start-here/apply" },
    ],
  },
];

const FOOTER_LINKS = [
  { label: "FAQ", href: "/faq" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
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
  /** Working homepage: E (default Odd Ritual) | F (Awake lookbook) */
  const [workingDirection, setWorkingDirection] = useState<WorkingDirection>("EF");
  const [activeSimRoute, setActiveSimRoute] = useState<string>("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  /** Hide sticky beta chrome while scrolling so Direction preview is full-bleed on phone */
  const [chromeHidden, setChromeHidden] = useState(false);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [navigationNotification, setNavigationNotification] = useState<string | null>(null);
  /** EF lookbook zone — drop snap-mandatory for continuous stack scroll */
  const [lookbookFreeScroll, setLookbookFreeScroll] = useState(false);

  // References for mobile frames to track manual scrolling
  const simScrollContainerRef = useRef<HTMLDivElement>(null);
  const archiveScrollContainerRef = useRef<HTMLDivElement>(null);
  const lastWindowScrollY = useRef(0);
  const lastSimScrollY = useRef(0);

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

  const scrollSimToTop = () => {
    setTimeout(() => {
      if (simScrollContainerRef.current) {
        simScrollContainerRef.current.scrollTop = 0;
      }
    }, 50);
  };

  const goSimHome = () => {
    setActiveSimRoute("/");
    setIsMenuOpen(false);
    setIsScrolled(false);
    setLookbookFreeScroll(false);
    scrollSimToTop();
  };

  // Handle fake navigation for interactive link testing
  const triggerNavigation = (href: string, label: string) => {
    let normalized = href === "/team" ? "/about/team" : href;
    if (normalized === "/memberships") normalized = "/membership";

    if (
      ABOUT_ROUTES.has(normalized) ||
      TRAINING_ROUTES.has(normalized) ||
      PARITY_ROUTES.has(normalized)
    ) {
      setActiveSimRoute(normalized);
      setIsMenuOpen(false);
      setIsScrolled(false);
      scrollSimToTop();
      return;
    }

    if (href === "/" || href === "/home") {
      goSimHome();
      return;
    }

    // Intentional roadmap — works on Vercel (not silent no-op; not Mock Route)
    if (COMING_SOON_ROUTES.has(normalized)) {
      setNavigationNotification(`Coming Soon — ${label}`);
      setTimeout(() => {
        setNavigationNotification(null);
      }, 3200);
      return;
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

  // Reset menu and scroll when returning home / switching archive direction
  useEffect(() => {
    setIsMenuOpen(false);
    setIsScrolled(false);
    setChromeHidden(activeTab === "simulator");
    lastSimScrollY.current = 0;
    setActiveSimRoute("/");
    if (simScrollContainerRef.current) {
      simScrollContainerRef.current.scrollTop = 0;
    }
    if (archiveScrollContainerRef.current) {
      archiveScrollContainerRef.current.scrollTop = 0;
    }
  }, [activeTab, archiveDirection]);

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

  // Lock phone-stage scroll while overlay menu is open
  useEffect(() => {
    const el = simScrollContainerRef.current;
    if (!el) return;
    if (isMenuOpen) {
      el.style.overflow = "hidden";
    } else {
      el.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-[#111111] text-[#E5E5E5] flex flex-col font-sans overflow-x-hidden">
      
      {/* HEADER / CONTROL BAR — local DEV only */}
      {showDevChrome ? (
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

      {/* Simulator dev controls + reveal beta chrome — local DEV only */}
      {showDevChrome && activeTab === "simulator" ? (
        <div className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-[max(0.75rem,env(safe-area-inset-right))] z-[100] flex items-center gap-2 flex-wrap justify-end max-w-[calc(100%-1.5rem)]">
          {chromeHidden && (
            <button
              type="button"
              onClick={() => setChromeHidden(false)}
              className="min-h-[44px] min-w-[44px] px-3 rounded-full bg-[#0A3C2E] text-emerald-400 text-[10px] font-mono font-semibold uppercase tracking-wider shadow-lg border border-emerald-900/60"
              title="Show beta controls"
            >
              BETA
            </button>
          )}
          <div
            className="flex rounded-lg border border-neutral-700/80 overflow-hidden shadow-lg bg-[#161616]/95 backdrop-blur-sm"
            role="tablist"
            aria-label="Working direction"
          >
            {/* E and F hidden for now — E+F is the active working surface */}
            {(
              [{ id: "EF" as const, label: "E+F" }] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={workingDirection === tab.id}
                onClick={() => {
                  setWorkingDirection(tab.id);
                  goSimHome();
                }}
                className="px-3 py-2 min-h-[44px] min-w-[44px] text-[10px] font-mono uppercase tracking-widest transition-colors bg-[#F3EEE7] text-[#181818]"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      ) : showDevChrome && chromeHidden ? (
          <button
            type="button"
            onClick={() => setChromeHidden(false)}
            className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-[max(0.75rem,env(safe-area-inset-right))] z-50 min-h-[44px] min-w-[44px] px-3 rounded-full bg-[#0A3C2E] text-emerald-400 text-[10px] font-mono font-semibold uppercase tracking-wider shadow-lg border border-emerald-900/60"
            title="Show beta controls"
          >
            BETA
          </button>
      ) : null}

      {/* Route notification — Coming Soon (prod + DEV) · Mock Route (DEV only, set above) */}
      {navigationNotification && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[110] max-w-[min(92vw,24rem)] bg-[#181818] border border-white/10 text-white px-5 py-3 rounded-sm shadow-2xl flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#F3EEE7] shrink-0" />
          <p className="text-[11px] font-mono uppercase tracking-[0.14em] leading-snug">
            {navigationNotification}
          </p>
        </div>
      )}

      {/* MAIN CONTAINER AREA */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8 min-w-0 overflow-x-hidden">
        
        {/* ================================================================= */}
        {/* TAB 1: INTERACTIVE SIMULATOR                                      */}
        {/* ================================================================= */}
        {studioTab === "simulator" && (
          <div className="fixed inset-0 z-20 flex flex-col bg-white min-h-[100dvh]">
            <div className="relative flex-1 min-h-0 flex flex-col">
              {/* ALD crest — fixed over the scrollport (not inside overflow content) */}
                  <div
                    className={`absolute top-0 left-0 right-0 z-30 transition-all duration-500 pointer-events-none ${
                      crestCompact
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
                        } ${crestCompact ? "text-[#181818]" : "text-white"}`}
                        title="Open Overlay Menu"
                      >
                        <div className="w-5 h-[1.5px] bg-current mb-1.5 transition-all" />
                        <div className="w-5 h-[1.5px] bg-current mb-1.5 transition-all" />
                        <div className="w-3.5 h-[1.5px] bg-current transition-all" />
                      </button>

                      <button
                        type="button"
                        onClick={() => triggerNavigation("/", "Home")}
                        className="absolute left-1/2 top-3 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer hover:opacity-80 transition-opacity w-[78%] z-10 min-h-[44px]"
                        title="Return to Home"
                      >
                        {/* Crossfade: wordmark at top · monogram when scrolled */}
                        <span className="relative block h-6 w-full">
                          <span
                            className={`absolute inset-0 flex items-center justify-center font-bold text-[12px] font-sans uppercase leading-tight tracking-[-0.04em] transition-all duration-500 ${
                              crestCompact
                                ? "opacity-0 scale-95 pointer-events-none"
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
                                ? "opacity-100 scale-100 text-[#181818]"
                                : "opacity-0 scale-95 pointer-events-none text-white"
                            }`}
                            aria-hidden={!crestCompact}
                          >
                            <USCrestSVG className="w-6 h-6" />
                          </span>
                        </span>
                        <span
                          className={`font-mono text-[8px] uppercase tracking-[0.18em] text-center transition-opacity duration-500 ${
                            crestCompact ? "text-[#5C5C5C] opacity-100" : "text-white/70 opacity-100"
                          }`}
                        >
                          {getFormattedDate()}
                        </span>
                      </button>

                      <div className="w-11 shrink-0" aria-hidden />
                    </div>
                  </div>

                  <div
                    ref={simScrollContainerRef}
                    onScroll={handleSimScroll}
                    className={`relative flex-1 min-h-0 w-full bg-white text-[#181818] overflow-y-auto scrollbar-none flex flex-col [container-type:size] ${
                      lookbookFreeScroll ? "" : "scroll-smooth"
                    } ${
                      (activeSimRoute === "/" && !lookbookFreeScroll) ||
                      (workingDirection === "E" && activeSimRoute === "/about/philosophy")
                        ? "snap-y snap-mandatory"
                        : ""
                    }`}
                  >
                    {/* ACTIVE SCREEN — E / EF / F home; About: EF tree when EF, else E (F home-only) */}
                    <div className="flex flex-col">
                      {activeSimRoute === "/about/philosophy" ? (
                        workingDirection === "EF" ? (
                          <EfPhilosophyPage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : (
                          <PhilosophyPage onBack={goSimHome} />
                        )
                      ) : activeSimRoute === "/about/founder" ? (
                        workingDirection === "EF" ? (
                          <EfFounderPage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : (
                          <FounderPage onBack={goSimHome} />
                        )
                      ) : activeSimRoute === "/about/team" ? (
                        workingDirection === "EF" ? (
                          <EfTeamPage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : (
                          <TeamPage onBack={goSimHome} onNav={triggerNavigation} />
                        )
                      ) : activeSimRoute === "/about/the-space" ? (
                        workingDirection === "EF" ? (
                          <EfSpacePage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : (
                          <SpacePage onBack={goSimHome} />
                        )
                      ) : activeSimRoute === "/about/faq" ? (
                        workingDirection === "EF" ? (
                          <EfFaqPage onBack={goSimHome} onNav={triggerNavigation} />
                        ) : (
                          <FaqPage onBack={goSimHome} />
                        )
                      ) : activeSimRoute === "/training/classes/build" ? (
                        <BuildPage onBack={goSimHome} onNav={triggerNavigation} />
                      ) : activeSimRoute === "/training/classes/burn" ? (
                        <BurnPage onBack={goSimHome} onNav={triggerNavigation} />
                      ) : activeSimRoute === "/training/classes/balance" ? (
                        <BalancePage onBack={goSimHome} onNav={triggerNavigation} />
                      ) : activeSimRoute === "/training/personal/1-on-1" ? (
                        <OneOnOnePage onBack={goSimHome} onNav={triggerNavigation} />
                      ) : activeSimRoute === "/training/personal/small-group" ? (
                        <SmallGroupPage onBack={goSimHome} onNav={triggerNavigation} />
                      ) : activeSimRoute === "/training/personal/private-group" ? (
                        <PrivateGroupPage onBack={goSimHome} onNav={triggerNavigation} />
                      ) : activeSimRoute === "/start-here/experience" ? (
                        <ExperiencePage onBack={goSimHome} onNav={triggerNavigation} />
                      ) : activeSimRoute === "/start-here/apply" ? (
                        <ApplyPage onBack={goSimHome} onNav={triggerNavigation} />
                      ) : activeSimRoute === "/membership" ? (
                        <MembershipPage onBack={goSimHome} onNav={triggerNavigation} />
                      ) : activeSimRoute === "/contact" ? (
                        <ContactPage onBack={goSimHome} onNav={triggerNavigation} />
                      ) : activeSimRoute === "/culture/move-the-city" ? (
                        <MoveTheCityPage onBack={goSimHome} onNav={triggerNavigation} />
                      ) : activeSimRoute === "/culture/cultivated" ? (
                        <CultivatedPage onBack={goSimHome} onNav={triggerNavigation} />
                      ) : activeSimRoute === "/culture/archive" ? (
                        <ArchivePage onBack={goSimHome} onNav={triggerNavigation} />
                      ) : activeSimRoute === "/privacy" ? (
                        <PrivacyPage onBack={goSimHome} onNav={triggerNavigation} />
                      ) : activeSimRoute === "/terms" ? (
                        <TermsPage onBack={goSimHome} onNav={triggerNavigation} />
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

                {/* FULL-SCREEN OVERLAY MENU — photo field + accordion keeps full IA */}
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
// DIRECTION D — LOCKED HIERARCHICAL OVERLAY NAV
// Direction E — Odd Ritual variant: numbered sections, larger type, accordion
// ----------------------------------------------------------------------
function LockedNavOverlay({
  onNavigate,
  variant = "default",
}: {
  onNavigate: (href: string, label: string) => void;
  variant?: "default" | "oddRitual";
}) {
  if (variant === "oddRitual") {
    return <OddRitualNavOverlay onNavigate={onNavigate} />;
  }

  const linkRow = (item: NavLeaf, indent = false) => {
    const label = item.comingSoon ? `${item.label} (Coming Soon)` : item.label;
    if (item.comingSoon) {
      return (
        <span
          key={item.href + item.label}
          aria-disabled="true"
          className={`flex items-baseline gap-2 opacity-60 cursor-default ${
            indent ? "pl-3" : ""
          }`}
        >
          <span className="font-sans font-semibold tracking-widest text-[12px] text-white uppercase">
            {label}
          </span>
          <span className="h-[1px] flex-1 bg-white/10" />
        </span>
      );
    }
    return (
      <a
        key={item.href + item.label}
        href={item.href}
        onClick={(e) => {
          e.preventDefault();
          onNavigate(item.href, label);
        }}
        className={`group flex items-baseline gap-2 transition-transform duration-200 hover:translate-x-1 ${
          indent ? "pl-3" : ""
        }`}
      >
        <span className="font-sans font-semibold tracking-widest text-[12px] text-white uppercase">
          {label}
        </span>
        <span className="h-[1px] flex-1 bg-white/10 group-hover:bg-white/30 transition-colors" />
        {item.external ? (
          <ExternalLink className="w-3 h-3 text-neutral-500 group-hover:text-neutral-300 shrink-0" />
        ) : (
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-neutral-400 shrink-0" />
        )}
      </a>
    );
  };

  return (
    <nav className="flex-1 min-h-0 overflow-y-auto scrollbar-none pr-1 flex flex-col gap-5 text-left pb-2">
      {LOCKED_NAV.map((section) => (
        <div key={section.title} className="space-y-2 shrink-0">
          <p
            className={`font-mono text-[9px] uppercase tracking-[0.22em] ${
              section.kind !== "direct" && section.comingSoon
                ? "text-neutral-600"
                : "text-neutral-500"
            }`}
          >
            {section.title}
            {section.kind !== "direct" && section.comingSoon ? " (Coming Soon)" : ""}
          </p>

          {section.kind === "links" && !section.comingSoon && (
            <div className="flex flex-col gap-2.5">{section.items.map((item) => linkRow(item))}</div>
          )}

          {section.kind === "links" && section.comingSoon && (
            <p className="font-sans text-[11px] text-white/40 uppercase tracking-wider opacity-55">
              Details forthcoming
            </p>
          )}

          {section.kind === "direct" && (
            <div className="flex flex-col gap-2.5">{linkRow(section.item)}</div>
          )}

          {section.kind === "branches" && (
            <div className="flex flex-col gap-3">
              {section.branches.map((branch) => (
                <div key={branch.label} className="space-y-2">
                  <p className="font-sans text-[11px] font-bold uppercase tracking-[0.14em] text-white/85 pl-0">
                    {branch.label}
                  </p>
                  <div className="flex flex-col gap-2 border-l border-white/15 ml-0.5">
                    {branch.children.map((child) => linkRow(child, true))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

/**
 * Photo-menu overlay: collapsed = sparse OR-scale titles;
 * one accordion open at a time = full IA without dumping the sitemap.
 */
function OddRitualNavOverlay({
  onNavigate,
}: {
  onNavigate: (href: string, label: string) => void;
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const ease = "cubic-bezier(0.21, 0.47, 0.32, 0.98)";

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const childLink = (item: NavLeaf) => {
    const label = item.comingSoon ? `${item.label} (Coming Soon)` : item.label;
    if (item.comingSoon) {
      return (
        <span
          key={item.href + item.label}
          aria-disabled="true"
          className="flex items-center justify-between gap-3 min-h-[44px] py-2.5 px-1 border-b border-white/15 last:border-b-0 opacity-55 cursor-default"
        >
          <span className="font-sans text-[14px] font-medium tracking-[0.1em] uppercase text-white/85">
            {label}
          </span>
        </span>
      );
    }
    return (
      <a
        key={item.href + item.label}
        href={item.href}
        onClick={(e) => {
          e.preventDefault();
          onNavigate(item.href, label);
        }}
        className="flex items-center justify-between gap-3 min-h-[44px] py-2.5 px-1 border-b border-white/15 last:border-b-0 group"
      >
        <span className="font-sans text-[14px] font-medium tracking-[0.1em] uppercase text-white/85 group-hover:text-white transition-colors">
          {label}
        </span>
        {item.external ? (
          <ExternalLink className="w-3.5 h-3.5 text-white/45 shrink-0" />
        ) : (
          <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white/75 shrink-0" />
        )}
      </a>
    );
  };

  return (
    <nav
      className="flex-1 min-h-0 overflow-y-auto scrollbar-none pr-0.5 flex flex-col gap-0 text-left pb-2"
      aria-label="Site navigation"
    >
      {LOCKED_NAV.map((section, index) => {
        const n = String(index + 1).padStart(2, "0");
        const id = section.title;
        const isOpen = openId === id;
        const sectionComingSoon =
          section.kind === "direct"
            ? Boolean(section.item.comingSoon)
            : Boolean(section.comingSoon);

        if (section.kind === "direct") {
          const item = section.item;
          const label = item.comingSoon
            ? `${section.title} (Coming Soon)`
            : section.title;

          if (item.comingSoon) {
            return (
              <div
                key={id}
                aria-disabled="true"
                className="flex items-baseline gap-3 min-h-[52px] py-3.5 border-b border-white/20 opacity-55 cursor-default"
              >
                <span className="font-mono text-[10px] tracking-[0.22em] text-white/45 shrink-0 pt-1.5">
                  {n}
                </span>
                <span
                  className="font-sans text-[22px] font-bold tracking-[-0.03em] uppercase text-white flex-1 drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  {label}
                </span>
              </div>
            );
          }

          return (
            <a
              key={id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.href, label);
              }}
              className="group flex items-baseline gap-3 min-h-[52px] py-3.5 border-b border-white/20"
            >
              <span className="font-mono text-[10px] tracking-[0.22em] text-white/45 shrink-0 pt-1.5">
                {n}
              </span>
              <span
                className="font-sans text-[22px] font-bold tracking-[-0.03em] uppercase text-white flex-1 group-hover:opacity-80 transition-opacity drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]"
                style={{ fontFamily: "'Satoshi', sans-serif" }}
              >
                {section.title}
              </span>
              {item.external ? (
                <ExternalLink className="w-4 h-4 text-white/45 shrink-0" />
              ) : (
                <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white/75 shrink-0" />
              )}
            </a>
          );
        }

        // Whole section locked (e.g. Longevity) — gray header, no accordion
        if (sectionComingSoon) {
          return (
            <div
              key={id}
              aria-disabled="true"
              className="flex items-baseline gap-3 min-h-[52px] py-3.5 border-b border-white/20 opacity-55 cursor-default"
            >
              <span className="font-mono text-[10px] tracking-[0.22em] text-white/45 shrink-0 pt-1.5">
                {n}
              </span>
              <span
                className="font-sans text-[22px] font-bold tracking-[-0.03em] uppercase text-white flex-1 drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]"
                style={{ fontFamily: "'Satoshi', sans-serif" }}
              >
                {section.title} (Coming Soon)
              </span>
            </div>
          );
        }

        return (
          <div key={id} className="border-b border-white/20 shrink-0">
            <button
              type="button"
              onClick={() => toggle(id)}
              aria-expanded={isOpen}
              className="w-full flex items-baseline gap-3 min-h-[52px] py-3.5 text-left group"
            >
              <span className="font-mono text-[10px] tracking-[0.22em] text-white/45 shrink-0 pt-1.5">
                {n}
              </span>
              <span
                className="font-sans text-[22px] font-bold tracking-[-0.03em] uppercase text-white flex-1 drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]"
                style={{ fontFamily: "'Satoshi', sans-serif" }}
              >
                {section.title}
              </span>
              <ChevronRight
                className={`w-5 h-5 text-white/40 shrink-0 transition-transform duration-500 ${
                  isOpen ? "rotate-90 text-white/80" : ""
                }`}
                style={{ transitionTimingFunction: ease }}
              />
            </button>

            <div
              className={`grid transition-[grid-template-rows,opacity] duration-500 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
              style={{ transitionTimingFunction: ease }}
            >
              <div className="overflow-hidden min-h-0">
                <div className="mb-4 ml-7 mr-0 rounded-sm bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
                  {section.kind === "links" && (
                    <div className="flex flex-col">{section.items.map((item) => childLink(item))}</div>
                  )}

                  {section.kind === "branches" && (
                    <div className="flex flex-col gap-4 py-2">
                      {section.branches.map((branch) => (
                        <div key={branch.label} className="flex flex-col gap-0.5">
                          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/45 mb-1 px-1">
                            {branch.label}
                          </p>
                          {branch.children.map((child) => childLink(child))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </nav>
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
