import { motion, useReducedMotion } from "motion/react";
import { LOOKBOOK_EASE } from "../direction-ef/lookbook";

interface Props {
  onNav: (href: string, label: string) => void;
}

const EXPLORE = [
  { label: "About", href: "/about/philosophy" },
  { label: "Training", href: "/training/classes/build" },
  { label: "Membership", href: "/membership" },
  { label: "The Space", href: "/about/the-space" },
] as const;

const JOIN = [
  { label: "Experience United", href: "/start-here/experience" },
  { label: "Apply for Membership", href: "/start-here/apply" },
] as const;

const CONNECT = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/united_strength/",
    external: true,
  },
  { label: "Contact", href: "/contact" },
  { label: "Columbus, Ohio", href: "/contact" },
] as const;

const linkClass =
  "min-h-[44px] inline-flex items-center font-sans text-[13px] tracking-[-0.01em] text-[#F3EEE7]/65 transition-opacity hover:text-[#F3EEE7]/95";

/**
 * Quiet closing colophon — Todd PDF §17 exact IA + copyright.
 * Bottom row verbatim: © UNITED STRENGTH CLUB · PRIVACY · TERMS
 * No filler colophon / “All rights reserved” / year stamp.
 */
export default function V1SiteIndexFooter({ onNav }: Props) {
  const reduceMotion = useReducedMotion();

  const renderLink = (
    link: { label: string; href: string; external?: boolean },
  ) => {
    if (link.external) {
      return (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          {link.label}
        </a>
      );
    }
    return (
      <button
        key={link.label}
        type="button"
        onClick={() => onNav(link.href, link.label)}
        className={`${linkClass} text-left`}
      >
        {link.label}
      </button>
    );
  };

  return (
    <footer className="relative bg-[#0D0D0D] px-5 pb-10 pt-20 text-[#F3EEE7] md:px-10 md:pb-12 md:pt-28">
      {/* Crest with quiet presence — PDF: meaningful, not a billboard */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
        aria-hidden
      >
        <span
          className="font-sans text-[140px] font-bold leading-none tracking-[-0.06em] text-[#F3EEE7]/[0.06] md:text-[180px]"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          US
        </span>
      </div>

      <motion.div
        className="relative z-10"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: LOOKBOOK_EASE }}
      >
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-10">
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F3EEE7]/40">
              Explore
            </h3>
            <ul className="mt-5 flex flex-col gap-0.5">
              {EXPLORE.map((l) => (
                <li key={l.label}>{renderLink(l)}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F3EEE7]/40">
              Join
            </h3>
            <ul className="mt-5 flex flex-col gap-0.5">
              {JOIN.map((l) => (
                <li key={l.label}>{renderLink(l)}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F3EEE7]/40">
              Connect
            </h3>
            <ul className="mt-5 flex flex-col gap-0.5">
              {CONNECT.map((l) => (
                <li key={l.label}>{renderLink(l)}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Todd PDF §17 — exact bottom legal row (no year / no “All rights reserved”) */}
        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-1 border-t border-[#F3EEE7]/10 pt-8 font-mono text-[9px] tracking-[0.18em] text-[#F3EEE7]/40 md:mt-20">
          <span>© UNITED STRENGTH CLUB</span>
          <button
            type="button"
            onClick={() => onNav("/privacy", "Privacy")}
            className="min-h-[44px] transition-opacity hover:text-[#F3EEE7]/75"
          >
            PRIVACY
          </button>
          <button
            type="button"
            onClick={() => onNav("/terms", "Terms")}
            className="min-h-[44px] transition-opacity hover:text-[#F3EEE7]/75"
          >
            TERMS
          </button>
        </div>
      </motion.div>
    </footer>
  );
}
