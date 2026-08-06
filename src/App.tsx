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
  Sparkles,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Clock,
  Instagram,
  Mail
} from "lucide-react";
import ConceptTeamView from "./components/ConceptTeamView";
import ConceptDView from "./components/ConceptDView";

// ----------------------------------------------------------------------
// BRAND CONSTANTS & LINKS
// ----------------------------------------------------------------------
const CORE_LINKS = [
  { label: "New here", href: "/new-here" },
  { label: "Memberships", href: "/memberships" },
  { label: "Offerings (hub)", href: "/offerings" },
  { label: "About", href: "/#about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
  { label: "BUILD", href: "/offerings/build" },
  { label: "BURN", href: "/offerings/burn" },
  { label: "Personal Training", href: "/offerings/private-training" },
  { label: "Open Gym", href: "/offerings/open-gym" }
];

/** Todd Aug 2026 — locked IA (Direction D) — exact hierarchy */
type NavLeaf = { label: string; href: string; external?: boolean; comingSoon?: boolean };
type NavBranch = { label: string; children: NavLeaf[] };
type NavSection =
  | { title: string; kind: "links"; items: NavLeaf[] }
  | { title: string; kind: "branches"; branches: NavBranch[] }
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
          { label: "Small Group Training", href: "/training/personal/small-group" },
          { label: "Private Group Training", href: "/training/personal/private-group" },
        ],
      },
    ],
  },
  {
    title: "FOUNDATION",
    kind: "direct",
    item: { label: "Foundation", href: "/foundation" },
  },
  {
    title: "LONGEVITY",
    kind: "links",
    items: [
      { label: "Reflection", href: "/longevity/reflection" },
      { label: "The Strength Standard", href: "/longevity/strength-standard" },
      { label: "The Trials", href: "/longevity/the-trials" },
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
  const [activeConcept, setActiveConcept] = useState<"A" | "C" | "D">("D");
  const [activeTab, setActiveTab] = useState<"simulator" | "comparison" | "specs">("simulator");
  const [activeSimRoute, setActiveSimRoute] = useState<string>("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [navigationNotification, setNavigationNotification] = useState<string | null>(null);
  /** Hide sticky beta chrome while scrolling so Direction preview is full-bleed on phone */
  const [chromeHidden, setChromeHidden] = useState(false);

  // User route configuration states
  const [teamRoute, setTeamRoute] = useState<string>("/team");
  const [isTeamVisible, setIsTeamVisible] = useState(true);

  // Dynamically constructed core links list (A/C legacy). Direction D uses LOCKED_NAV hierarchy.
  const dynamicCoreLinks = [
    { label: "New here", href: "/new-here" },
    { label: "Memberships", href: "/memberships" },
    { label: "Offerings (hub)", href: "/offerings" },
    { label: "About", href: "/#about" },
    ...(isTeamVisible ? [{ label: "Team", href: teamRoute }] : []),
    { label: "Contact", href: "/contact" },
    { label: "BUILD", href: "/offerings/build" },
    { label: "BURN", href: "/offerings/burn" },
    { label: "Personal Training", href: "/offerings/private-training" },
    { label: "Open Gym", href: "/offerings/open-gym" }
  ];

  // References for mobile frames to track manual scrolling
  const simScrollContainerRef = useRef<HTMLDivElement>(null);
  const compScrollContainerRefA = useRef<HTMLDivElement>(null);
  const compScrollContainerRefC = useRef<HTMLDivElement>(null);
  const compScrollContainerRefD = useRef<HTMLDivElement>(null);
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

  // Handle fake navigation for interactive link testing
  const triggerNavigation = (href: string, label: string) => {
    if (isTeamVisible && (href === teamRoute || href === "/about/team")) {
      setActiveSimRoute("/team");
      setIsMenuOpen(false);
      setIsScrolled(false);
      setTimeout(() => {
        if (simScrollContainerRef.current) {
          simScrollContainerRef.current.scrollTop = 0;
        }
      }, 50);
    } else if (href === "/" || href === "/home") {
      setActiveSimRoute("/");
      setIsMenuOpen(false);
      setIsScrolled(false);
      setTimeout(() => {
        if (simScrollContainerRef.current) {
          simScrollContainerRef.current.scrollTop = 0;
        }
      }, 50);
    } else {
      setNavigationNotification(`Mock Route Request: "${label}" (${href})`);
      setTimeout(() => {
        setNavigationNotification(null);
      }, 4000);
    }
  };

  // Copy color code to clipboard
  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  // Reset menu and scroll states when switching concepts
  useEffect(() => {
    setIsMenuOpen(false);
    setIsScrolled(false);
    setChromeHidden(false);
    lastSimScrollY.current = 0;
    setActiveSimRoute("/");
    if (simScrollContainerRef.current) {
      simScrollContainerRef.current.scrollTop = 0;
    }
  }, [activeConcept]);

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
  const handleSimScroll = () => {
    if (!simScrollContainerRef.current) return;
    const top = simScrollContainerRef.current.scrollTop;
    setIsScrolled(top > 20);
    if (top - lastSimScrollY.current > 6 && top > 24) setChromeHidden(true);
    lastSimScrollY.current = top;
  };

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
    <div className="min-h-screen bg-[#111111] text-[#E5E5E5] flex flex-col font-sans">
      
      {/* HEADER / CONTROL BAR — collapses on scroll so Direction preview is clear on phone */}
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
          <div className="flex items-center gap-2 bg-[#222] p-1 rounded-lg self-start md:self-auto">
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
                Interactive Simulator
              </span>
            </button>
            <button
              onClick={() => setActiveTab("comparison")}
              className={`px-3.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                activeTab === "comparison"
                  ? "bg-[#0A3C2E] text-white shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                Side-by-Side Canvas
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

      {/* Reveal beta chrome without scrolling back to top */}
      {chromeHidden && (
        <button
          type="button"
          onClick={() => setChromeHidden(false)}
          className="fixed top-3 left-3 z-50 min-h-[44px] min-w-[44px] px-3 rounded-full bg-[#0A3C2E] text-emerald-400 text-[10px] font-mono font-semibold uppercase tracking-wider shadow-lg border border-emerald-900/60"
          title="Show beta controls"
        >
          BETA
        </button>
      )}

      {/* SYSTEM ROUTE NOTIFICATION TOASTER */}
      {navigationNotification && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 bg-neutral-900 border border-emerald-950 text-white px-6 py-3 rounded-xl shadow-2xl z-50 flex items-center gap-3 animate-bounce">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
          <p className="text-xs font-mono tracking-wide">{navigationNotification}</p>
        </div>
      )}

      {/* MAIN CONTAINER AREA */}
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        
        {/* ================================================================= */}
        {/* TAB 1: INTERACTIVE SIMULATOR                                      */}
        {/* ================================================================= */}
        {activeTab === "simulator" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* MOBILE PREVIEW COL */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-center justify-center">
              
              {/* Concept Selector Pills */}
              <div className="w-full max-w-[375px] flex justify-between bg-[#1A1A1A] rounded-xl p-1 mb-4 border border-neutral-800">
                {activeSimRoute === "/team" ? (
                  <button
                    onClick={() => {
                      setActiveSimRoute("/");
                      if (simScrollContainerRef.current) {
                        simScrollContainerRef.current.scrollTop = 0;
                      }
                    }}
                    className="w-full py-2.5 text-center rounded-lg bg-neutral-800 text-white font-bold transition-all text-xs uppercase tracking-widest hover:bg-neutral-700 cursor-pointer"
                  >
                    ← Back to Landing Concepts (A/C/D)
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => setActiveConcept("A")}
                      className={`flex-1 py-2 text-center rounded-lg transition-all ${
                        activeConcept === "A"
                          ? "bg-white text-[#181818] font-bold shadow-md"
                          : "text-neutral-400 hover:text-neutral-200 text-xs"
                      }`}
                    >
                      <div className="text-[10px] tracking-wider uppercase">Direction A</div>
                      <div className="text-[9px] opacity-75 font-mono">Editorial</div>
                    </button>
                    <button
                      onClick={() => setActiveConcept("C")}
                      className={`flex-1 py-2 text-center rounded-lg transition-all ${
                        activeConcept === "C"
                          ? "bg-white text-[#181818] font-bold shadow-md"
                          : "text-neutral-400 hover:text-neutral-200 text-xs"
                      }`}
                    >
                      <div className="text-[10px] tracking-wider uppercase">Direction C</div>
                      <div className="text-[9px] opacity-75 font-mono">Gallery</div>
                    </button>
                    <button
                      onClick={() => setActiveConcept("D")}
                      className={`flex-1 py-2 text-center rounded-lg transition-all ${
                        activeConcept === "D"
                          ? "bg-white text-[#181818] font-bold shadow-md"
                          : "text-neutral-400 hover:text-neutral-200 text-xs"
                      }`}
                    >
                      <div className="text-[10px] tracking-wider uppercase">Direction D</div>
                      <div className="text-[9px] opacity-75 font-mono">Ritual</div>
                    </button>
                  </>
                )}
              </div>

              {/* PHYSICALLY BOUNDED MOBILE DEVICE FRAME */}
              <div className="relative w-[375px] h-[780px] bg-[#181818] rounded-[48px] p-3 shadow-2xl border-[10px] border-[#2c2c2c] overflow-hidden flex flex-col">
                
                {/* Speaker Grill & Camera (Notch Spacer) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-[#2c2c2c] rounded-b-2xl z-[70] flex items-center justify-center gap-1.5 pointer-events-none">
                  <div className="w-10 h-1 bg-black/40 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-black/60 rounded-full"></div>
                </div>

                {/* Status Bar */}
                <div className="h-6 w-full px-6 flex justify-between items-center bg-transparent z-40 text-[#181818] text-[11px] font-mono select-none shrink-0">
                  <span className="font-bold">10:28</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px]">5G</span>
                    <div className="w-4 h-2 border border-current rounded-sm flex items-center p-0.5">
                      <div className="w-full h-full bg-current rounded-2xs"></div>
                    </div>
                  </div>
                </div>

                {/* SCROLLABLE SCREEN STAGE — container query height so chapters fill the phone */}
                <div
                  ref={simScrollContainerRef}
                  onScroll={handleSimScroll}
                  className="relative flex-1 min-h-0 w-full bg-white text-[#181818] overflow-y-auto rounded-[36px] scrollbar-none flex flex-col [container-type:size]"
                >
                  
                  {/* BRAND HEADER & TRANSITION CONTROLLER */}
                  <div
                    className={`sticky top-0 left-0 right-0 z-30 transition-all duration-300 ${
                      isScrolled
                        ? "bg-[#FFFFFF] border-b border-neutral-100 shadow-sm"
                        : "bg-transparent"
                    }`}
                  >
                    {/* Header Primary Content */}
                    <div className="px-5 py-4 flex items-center justify-between min-h-[56px] relative">
                      {/* Left Side: Hamburger Menu on Left (Non-negotiable) */}
                      <button
                        onClick={() => setIsMenuOpen(true)}
                        className={`hover:opacity-75 transition-all p-1 -ml-1 ${
                          isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                        } text-[#181818]`}
                        title="Open Overlay Menu"
                      >
                        <div className="w-5 h-[2px] bg-current mb-1.5 transition-all"></div>
                        <div className="w-3.5 h-[2px] bg-current transition-all"></div>
                      </button>

                      {/* Center: Crest Transition Wordmark vs Monogram */}
                      <button
                        onClick={() => triggerNavigation("/", "Home")}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center cursor-pointer hover:opacity-75 transition-all w-2/3 z-10"
                        title="Return to Home"
                      >
                        {!isScrolled ? (
                          /* SCROLLED UP: Full Wordmark — Direction D uses tighter tracking */
                          <span
                            className={`font-semibold text-[10px] font-sans text-center transition-all uppercase leading-tight text-[#181818] ${
                              activeConcept === "D" ? "tracking-[-0.03em]" : "tracking-[0.22em]"
                            }`}
                          >
                            UNITED STRENGTH CLUB
                          </span>
                        ) : (
                          /* SCROLLED DOWN: Monogram only (US Crest) */
                          <div className="text-[#181818] animate-fade-in">
                            <USCrestSVG className="w-6 h-6" />
                          </div>
                        )}
                      </button>

                      {/* Right Balance spacer (empty as required for elegant nav) */}
                      <div className="w-5"></div>
                    </div>

                    {/* TOP BAR below header when scrolled (Revealed dynamically) */}
                    <div
                      className={`overflow-hidden transition-all duration-500 bg-neutral-900 text-neutral-400 border-t border-neutral-800 text-[9px] font-mono tracking-widest text-center select-none uppercase ${
                        isScrolled ? "max-h-[30px] py-1.5 border-b border-neutral-800 opacity-100" : "max-h-0 py-0 opacity-0"
                      }`}
                    >
                      {getFormattedDate()}
                    </div>
                  </div>

                  {/* ACTIVE HOME-SCREEN CONCEPTS CONTENT */}
                  <div className="flex flex-col">
                    {activeSimRoute === "/team" ? (
                      <ConceptTeamView onNav={triggerNavigation} />
                    ) : (
                      <>
                        {activeConcept === "A" && (
                          <ConceptAView onNav={triggerNavigation} />
                        )}
                        {activeConcept === "C" && (
                          <ConceptCView onNav={triggerNavigation} />
                        )}
                        {activeConcept === "D" && (
                          <ConceptDView onNav={triggerNavigation} />
                        )}
                      </>
                    )}
                  </div>

                </div>

                {/* FULL-SCREEN OVERLAY MENU — covers entire phone until closed */}
                <div
                  className={`absolute inset-0 z-[60] bg-[#181818] text-white flex flex-col transition-opacity duration-300 ease-out ${
                    isMenuOpen
                      ? "opacity-100 pointer-events-auto visible"
                      : "opacity-0 pointer-events-none invisible"
                  }`}
                  aria-hidden={!isMenuOpen}
                >
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                    <USCrestSVG className="w-72 h-72 text-white/5" />
                  </div>

                  <div className="relative z-10 flex items-center justify-between px-6 pt-10 pb-4 shrink-0">
                    <button
                      type="button"
                      onClick={() => setIsMenuOpen(false)}
                      className="min-h-[44px] min-w-[44px] flex items-center justify-start -ml-1 text-white hover:opacity-80 transition-all"
                      title="Close Overlay Menu"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <span className="font-mono text-[9px] text-neutral-500 tracking-widest uppercase">
                      PRIVATE INVITATION ONLY
                    </span>
                  </div>

                  <div className="relative z-10 flex-1 min-h-0 flex flex-col px-6 pb-8">
                    {activeConcept === "D" ? (
                      <LockedNavOverlay
                        onNavigate={(href, label) => {
                          setIsMenuOpen(false);
                          triggerNavigation(href, label);
                        }}
                      />
                    ) : (
                      <nav className="flex-1 min-h-0 overflow-y-auto scrollbar-none pr-1 flex flex-col gap-4 text-left">
                        {dynamicCoreLinks.map((link) => (
                          <a
                            key={link.href + link.label}
                            href={link.href}
                            onClick={(e) => {
                              e.preventDefault();
                              setIsMenuOpen(false);
                              triggerNavigation(link.href, link.label);
                            }}
                            className="group flex items-baseline gap-2 transition-transform duration-200 hover:translate-x-1"
                          >
                            <span className="font-sans font-extrabold tracking-widest text-[13px] text-white uppercase">
                              {link.label}
                            </span>
                            <span className="h-[1px] flex-1 bg-white/10 group-hover:bg-white/30 transition-colors"></span>
                            <ChevronRight className="w-3.5 h-3.5 text-neutral-600 group-hover:text-neutral-400 shrink-0" />
                          </a>
                        ))}
                      </nav>
                    )}

                    <div className="border-t border-neutral-800 pt-4 mt-4 text-[10px] font-mono text-neutral-400 flex flex-col gap-2 shrink-0">
                      <div className="flex justify-between gap-3">
                        <span>237 Cleveland Ave</span>
                        <span className="text-right">Columbus, OH 43215</span>
                      </div>
                      <div className="flex justify-between gap-3">
                        <a
                          href="mailto:info@unitedstrengthgym.com"
                          className="hover:text-white transition-colors"
                        >
                          info@unitedstrengthgym.com
                        </a>
                        <a
                          href="https://www.instagram.com/united_strength/"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-white transition-colors flex items-center gap-1 shrink-0"
                        >
                          Instagram <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Device Home Indicator Bar */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-28 bg-[#2c2c2c] rounded-full z-[65] select-none pointer-events-none"></div>

              </div>

              {/* SIMULATOR QUICK TOGGLES */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center max-w-[375px]">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="bg-[#222] border border-neutral-800 text-xs px-3 py-1.5 rounded-lg text-white hover:bg-[#333] transition-all flex items-center gap-1.5"
                >
                  <Menu className="w-3 h-3 text-neutral-400" />
                  {isMenuOpen ? "Force Close Menu" : "Simulate Hamburger Click"}
                </button>
                <button
                  onClick={() => setIsScrolled(!isScrolled)}
                  className="bg-[#222] border border-neutral-800 text-xs px-3 py-1.5 rounded-lg text-white hover:bg-[#333] transition-all flex items-center gap-1.5"
                >
                  <Clock className="w-3 h-3 text-neutral-400" />
                  {isScrolled ? "Scroll to Top" : "Scroll Down State"}
                </button>
              </div>

              {/* INTERACTIVE ROUTE & VISIBILITY CONFIGURATOR */}
              <div className="mt-5 bg-[#161616] border border-neutral-800 rounded-xl p-4 max-w-[375px] w-full text-left space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-neutral-800">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white font-semibold">
                    Interactive Team Route Config
                  </span>
                </div>

                {/* VISIBILITY TOGGLE */}
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-xs font-bold text-white uppercase tracking-wider block">
                      Visible in Menu
                    </label>
                    <span className="text-[10px] text-neutral-400 block">
                      Toggle if "Team" link appears in the navigation.
                    </span>
                  </div>
                  <button
                    onClick={() => setIsTeamVisible(!isTeamVisible)}
                    className={`relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      isTeamVisible ? "bg-[#0A3C2E]" : "bg-neutral-800"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                        isTeamVisible ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                {/* PATH INPUT FIELD */}
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <label className="text-xs font-bold text-white uppercase tracking-wider block">
                      Custom URL Route
                    </label>
                    <span className="font-mono text-[9px] text-neutral-500">[Current: {teamRoute}]</span>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={teamRoute}
                      onChange={(e) => {
                        let val = e.target.value;
                        if (!val.startsWith("/")) {
                          val = "/" + val;
                        }
                        setTeamRoute(val);
                      }}
                      className="flex-1 bg-neutral-900 border border-neutral-800 rounded px-2.5 py-1.5 text-xs text-white font-mono focus:outline-none focus:border-emerald-600"
                      placeholder="/team"
                    />
                    <button
                      onClick={() => {
                        setTeamRoute("/team");
                      }}
                      className="bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-[10px] uppercase font-mono px-2 py-1 rounded"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                {/* SIMULATED LINK STATUS INFO */}
                <div className="bg-neutral-900/55 rounded-lg p-2.5 border border-neutral-800/40 text-[10px] font-mono space-y-1">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Menu Link:</span>
                    <span className={isTeamVisible ? "text-emerald-400" : "text-red-400"}>
                      {isTeamVisible ? `Active (points to ${teamRoute})` : "Hidden"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Live Simulator Test:</span>
                    <button
                      onClick={() => {
                        if (isTeamVisible) {
                          setActiveSimRoute("/team");
                          if (simScrollContainerRef.current) {
                            simScrollContainerRef.current.scrollTop = 0;
                          }
                        }
                      }}
                      disabled={!isTeamVisible}
                      className={`underline hover:text-white transition-colors cursor-pointer ${
                        isTeamVisible ? "text-neutral-300" : "text-neutral-600 pointer-events-none"
                      }`}
                    >
                      Click here to jump to Team View
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* DESIGN SPECIFICATION / EXPLANATORY COL */}
            <div className="lg:col-span-6 xl:col-span-7 space-y-6">
              
              {/* Active Direction Card */}
              <div className="bg-[#161616] border border-neutral-800 rounded-2xl p-6 shadow-md">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block">
                      Active Direction Specification
                    </span>
                    <h2 className="text-2xl font-extrabold text-white tracking-tight mt-1">
                      {activeConcept === "A" && "Direction A: Editorial Cover"}
                      {activeConcept === "C" && "Direction C: Gallery Wall"}
                      {activeConcept === "D" && "Direction D: Ritual Progression"}
                    </h2>
                  </div>
                  <div className="bg-[#0A3C2E]/30 text-emerald-300 text-lg font-bold px-3 py-1 rounded-lg border border-emerald-900/40">
                    {activeConcept}
                  </div>
                </div>

                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  {activeConcept === "A" && (
                    "Inspired directly by Aimé Leon Dore and Kinfolk issue covers. This direction prioritizes calm editorial whitespace in the top third, emphasizing high-fashion cinematic fitness details. Layout structures are balanced, relying heavily on asymmetric image placement and precise margins. Typography focuses on the modern, high-fashion Satoshi font family, using heavy bold tracked uppercase headings locked directly with elegant stylish italics and natural light black-and-white strength photography."
                  )}
                  {activeConcept === "C" && (
                    "Inspired by Cereal and Nowness. Built like an art gallery wall layout with asymmetric crops, letters, and facility images. It showcases physical sculpture-like strength equipment as design artifacts. Overlay text is kept to the margins. It rejects the aggressive workout noise completely, offering an elegant aesthetic retreat for selective downtown Columbus members."
                  )}
                  {activeConcept === "D" && (
                    "Active foundation (Todd Aug 2026). Odd Ritual–inspired numbered scroll chapters with locked IA: ABOUT · TRAINING · FOUNDATION · LONGEVITY · CULTURE · MEMBERSHIP · SHOP · START HERE. Homepage is a 7-section progression/reveal — seamless one-picture hero, then Believe → Pillars → Experience → Space → Membership → Start Here. Shop links out to United Limited. BALANCE shows Coming Soon. No public pricing."
                  )}
                </p>

                {/* Concept Spec Checklist Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-neutral-800 pt-6">
                  <div>
                    <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2.5">
                      Visual System Pairings
                    </h4>
                    <ul className="space-y-2 text-xs text-neutral-300">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        <span>Canvas Background: <strong className="font-mono text-white">#FFFFFF</strong></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        <span>Primary Font: <strong className="font-sans text-white">{activeConcept === "A" ? "Satoshi (Bold & Italic)" : activeConcept === "D" ? "Satoshi tight + Instrument Serif" : "Space Grotesk"}</strong></span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        <span>Photography: <strong className="font-sans text-white">{activeConcept === "A" ? "B&W Cinematic" : activeConcept === "D" ? "Full-bleed chapter stills" : "Asymmetric Architectural"}</strong></span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono text-neutral-400 uppercase tracking-wider mb-2.5">
                      Nav Guardrails Checked
                    </h4>
                    <ul className="space-y-2 text-xs text-neutral-300">
                      <li className="flex items-center gap-2 text-emerald-400">
                        <Check className="w-3.5 h-3.5" />
                        <span>Hamburger button positioned left</span>
                      </li>
                      <li className="flex items-center gap-2 text-emerald-400">
                        <Check className="w-3.5 h-3.5" />
                        <span>Crest wordmark/monogram on scroll</span>
                      </li>
                      <li className="flex items-center gap-2 text-emerald-400">
                        <Check className="w-3.5 h-3.5" />
                        <span>Columbus date/location topbar active</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* COGNITIVE REVELATION PANEL: NO GYM NOISE */}
              <div className="bg-[#161616] border border-neutral-800 rounded-2xl p-6">
                <h3 className="text-sm font-mono text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Info className="w-4 h-4 text-emerald-400" />
                  PRIVATE CLUB DESIGN ARCHITECTURE
                </h3>
                <div className="space-y-3 text-xs text-neutral-400 leading-relaxed">
                  <p>
                    Unlike normal fitness templates that clutter the viewport with live class calendars, countdown timers, and pricing tiers, <strong>United Strength Club</strong> operates on an selective, high-integrity hospitality architecture:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 font-mono text-[11px] text-neutral-300">
                    <li className="bg-[#222]/40 p-2 rounded border border-neutral-800">
                      <span className="text-red-400 block mb-0.5">❌ EXCLUDED (Gym Noise):</span>
                      No pricing cards, schedules, Triib links, class credits, or buy routes.
                    </li>
                    <li className="bg-[#222]/40 p-2 rounded border border-neutral-800">
                      <span className="text-emerald-400 block mb-0.5">✅ INCLUDED (Club Vibe):</span>
                      Selective copy, application button (deep emerald), and "Start the Journey" text links only.
                    </li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 2: SIDE-BY-SIDE CANVAS                                         */}
        {/* ================================================================= */}
        {activeTab === "comparison" && (
          <div className="space-y-6">
            <div className="bg-[#161616] border border-neutral-800 rounded-2xl p-6 text-center max-w-2xl mx-auto mb-4">
              <h2 className="text-lg font-bold text-white tracking-tight">Concept Comparison Grid</h2>
              <p className="text-xs text-neutral-400 mt-1 max-w-lg mx-auto">
                Scroll through or inspect both concepts side-by-side to review typography weight, image cropping layouts, and whitespace balancing in real-time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start justify-center max-w-6xl mx-auto">
              
              {/* CONCEPT A */}
              <div className="flex flex-col items-center">
                <div className="bg-[#222] text-xs px-3 py-1 rounded-full text-white font-mono uppercase tracking-widest mb-3 border border-neutral-800">
                  Concept A: Editorial Cover
                </div>
                <div className="w-full max-w-[375px] h-[680px] bg-white text-[#181818] border border-neutral-800 rounded-3xl overflow-y-auto relative scrollbar-none shadow-xl flex flex-col" ref={compScrollContainerRefA}>
                  {/* Embedded Static Header (representing up state) */}
                  <div className="sticky top-0 bg-white/90 backdrop-blur-xs z-20 px-4 py-3 border-b border-neutral-100 flex justify-between items-center select-none">
                    <Menu className="w-4 h-4 text-neutral-800" />
                    <span className="font-semibold tracking-[0.2em] text-[8px] font-sans text-neutral-900">
                      UNITED STRENGTH CLUB
                    </span>
                    <div className="w-4"></div>
                  </div>
                  <ConceptAView onNav={triggerNavigation} />
                </div>
              </div>

              {/* CONCEPT C */}
              <div className="flex flex-col items-center">
                <div className="bg-[#222] text-xs px-3 py-1 rounded-full text-white font-mono uppercase tracking-widest mb-3 border border-neutral-800">
                  Concept C: Gallery Wall
                </div>
                <div className="w-full max-w-[375px] h-[680px] bg-white text-[#181818] border border-neutral-800 rounded-3xl overflow-y-auto relative scrollbar-none shadow-xl flex flex-col" ref={compScrollContainerRefC}>
                  {/* Embedded Static Header */}
                  <div className="sticky top-0 bg-white/90 backdrop-blur-xs z-20 px-4 py-3 border-b border-neutral-100 flex justify-between items-center select-none">
                    <Menu className="w-4 h-4 text-neutral-800" />
                    <span className="font-semibold tracking-[0.2em] text-[8px] font-sans text-neutral-900">
                      UNITED STRENGTH CLUB
                    </span>
                    <div className="w-4"></div>
                  </div>
                  <ConceptCView onNav={triggerNavigation} />
                </div>
              </div>

              {/* CONCEPT D */}
              <div className="flex flex-col items-center">
                <div className="bg-[#0A3C2E] text-xs px-3 py-1 rounded-full text-emerald-100 font-mono uppercase tracking-widest mb-3 border border-emerald-900">
                  Concept D: Ritual Progression
                </div>
                <div className="w-full max-w-[375px] h-[680px] bg-white text-[#181818] border border-neutral-800 rounded-3xl overflow-y-auto relative scrollbar-none shadow-xl flex flex-col" ref={compScrollContainerRefD}>
                  <div className="sticky top-0 bg-white/90 backdrop-blur-xs z-20 px-4 py-3 border-b border-neutral-100 flex justify-between items-center select-none">
                    <Menu className="w-4 h-4 text-neutral-800" />
                    <span className="font-semibold tracking-[-0.03em] text-[8px] font-sans text-neutral-900">
                      UNITED STRENGTH CLUB
                    </span>
                    <div className="w-4"></div>
                  </div>
                  <ConceptDView onNav={triggerNavigation} />
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 3: SPECIFICATIONS / THE CULTURE CLUB BRAND SHEET            */}
        {/* ================================================================= */}
        {activeTab === "specs" && (
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

      {/* SYSTEM WORKSPACE FOOTER */}
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

    </div>
  );
}

// ----------------------------------------------------------------------
// DIRECTION D — LOCKED HIERARCHICAL OVERLAY NAV
// ----------------------------------------------------------------------
function LockedNavOverlay({
  onNavigate,
}: {
  onNavigate: (href: string, label: string) => void;
}) {
  const linkRow = (item: NavLeaf, indent = false) => {
    const label = item.comingSoon ? `${item.label} (Coming Soon)` : item.label;
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
        } ${item.comingSoon ? "opacity-60" : ""}`}
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
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-neutral-500">
            {section.title}
          </p>

          {section.kind === "links" && (
            <div className="flex flex-col gap-2.5">{section.items.map((item) => linkRow(item))}</div>
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
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop"
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
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop"
            alt="Moody, cinematic light casting on athlete resting, museum-like stillness"
            className="w-full h-[220px] object-cover filter brightness-95 rounded-xs select-none pointer-events-none"
          />
        </div>

        {/* Asymmetrical Overlapping Grid of details (Gallery style) */}
        <div className="grid grid-cols-12 gap-3 my-4">
          <div className="col-span-7">
            <img
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop"
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
