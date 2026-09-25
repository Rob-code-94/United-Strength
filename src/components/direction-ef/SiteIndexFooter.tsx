import { motion, useReducedMotion } from "motion/react";
import { LOOKBOOK_EASE } from "./lookbook";

interface SiteIndexFooterProps {
  onNav: (href: string, label: string) => void;
}

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Philosophy", href: "/about/philosophy" },
      { label: "Founder", href: "/about/founder" },
      { label: "The Space", href: "/about/the-space" },
      { label: "Build", href: "/training/classes/build" },
      { label: "Burn", href: "/training/classes/burn" },
      { label: "Membership", href: "/membership" },
    ],
  },
  {
    title: "Start",
    links: [
      { label: "Experience United", href: "/start-here/experience" },
      { label: "Apply", href: "/start-here/apply" },
      { label: "FAQ", href: "/about/faq" },
      { label: "Team", href: "/about/team" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "info@", href: "mailto:info@unitedstrengthgym.com" },
      { label: "membership@", href: "mailto:membership@unitedstrengthgym.com" },
      { label: "training@", href: "mailto:training@unitedstrengthgym.com" },
      { label: "237 Cleveland Ave · 43215", href: "/contact" },
    ],
  },
  {
    title: "Social",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/united_strength/",
        external: true,
      },
      { label: "Privacy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms-of-service" },
    ],
  },
] as const;

const linkClass =
  "text-[13px] font-medium tracking-[-0.01em] text-[#181818] min-h-[44px] inline-flex items-center text-left transition-opacity duration-500 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] hover:opacity-55";

/**
 * Culture Club site-index footer — Odd Ritual pacing + footer-01/05 DNA (adapted).
 * Mono column labels · Satoshi link rows · hairlines · cream canvas.
 * No Buy / Reserve / Book.
 */
export default function SiteIndexFooter({ onNav }: SiteIndexFooterProps) {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="box-border w-full px-5 py-14 md:px-8 md:py-16 bg-[#F3EEE7] border-t border-neutral-200/80 shrink-0 snap-none">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: LOOKBOOK_EASE }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {COLUMNS.map((col) => (
            <div key={col.title} className="border-t border-black/10 pt-4">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5C5C5C] mb-3">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-0.5">
                {col.links.map((link) => {
                  const isMail = link.href.startsWith("mailto:");
                  const isExternal = "external" in link && link.external;
                  const isDead = link.href === "#";

                  if (isMail || isExternal) {
                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noreferrer" : undefined}
                          className={linkClass}
                          style={{ fontFamily: "'Satoshi', sans-serif" }}
                        >
                          {link.label}
                        </a>
                      </li>
                    );
                  }

                  if (isDead) {
                    return (
                      <li key={link.label}>
                        <span
                          className="text-[13px] font-medium tracking-[-0.01em] text-[#5C5C5C] min-h-[44px] inline-flex items-center"
                          style={{ fontFamily: "'Satoshi', sans-serif" }}
                        >
                          {link.label}
                        </span>
                      </li>
                    );
                  }

                  return (
                    <li key={link.label}>
                      <button
                        type="button"
                        onClick={() => onNav(link.href, link.label)}
                        className={linkClass}
                        style={{ fontFamily: "'Satoshi', sans-serif" }}
                      >
                        {link.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-black/10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-6">
          <div className="flex flex-col gap-1.5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5C5C]">
              United Strength Club · Columbus, Ohio
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#5C5C5C]/80">
              © 2026 United Strength Club. All rights reserved.
            </p>
          </div>
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#5C5C5C]/70">
            Designed and Made Locally
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
