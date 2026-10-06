import { useState } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";

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
          {
            label: "RUN CLUB",
            href: "/training/move-the-city",
          },
        ],
      },
      {
        label: "Coaching",
        children: [
          { label: "Personal Training", href: "/training/personal" },
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
    kind: "direct",
    item: { label: "Longevity", href: "/longevity", comingSoon: true },
  },
  {
    title: "MOVE THE CITY",
    kind: "direct",
    item: { label: "Move the City", href: "/move-the-city", comingSoon: true },
  },
  {
    title: "CULTURE",
    kind: "links",
    items: [
      { label: "By Design", href: "/culture/by-design" },
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
      label: "Shop",
      href: "https://theunitedlimited.com",
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

export function LockedNavOverlay({
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
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
        onClick={(e) => {
          if (!item.external) e.preventDefault();
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
        target={item.external ? "_blank" : undefined}
        rel={item.external ? "noopener noreferrer" : undefined}
        onClick={(e) => {
          if (!item.external) e.preventDefault();
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
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                if (!item.external) e.preventDefault();
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
              aria-controls={`nav-section-${index}`}
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
              id={`nav-section-${index}`}
              inert={isOpen ? undefined : true}
              aria-hidden={!isOpen}
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
