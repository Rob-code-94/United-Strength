import { Instagram, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { LOOKBOOK_EASE } from "../direction-ef/lookbook";
import { ClubCrestSVG, StrongerUnitedMark } from "./brand";

interface Props {
  onNav: (href: string, label: string) => void;
}

const GOLD = "#C4A35A";
const CREAM = "#F3EEE7";

const EXPLORE = [
  { label: "EXPERIENCE UNITED", href: "/start-here/experience" },
  { label: "MEMBERSHIP", href: "/membership" },
  { label: "TRAINING", href: "/training/classes/build" },
  { label: "PHILOSOPHY", href: "/about/philosophy" },
] as const;

const sectionLabelClass =
  "font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-[#F3EEE7]";

const exploreLinkClass =
  "min-h-[44px] inline-flex items-center font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-[#F3EEE7]/90 transition-opacity hover:text-[#F3EEE7] md:text-[13px]";

/**
 * Editorial dark footer — Part G mock fidelity.
 * Five zones: location · explore · crest · connect · Stronger United
 * + bottom © 2026 · PRIVACY | TERMS
 * Space DNA: footer-02/05 adapted (dark close + minimal nav). No Buy/Reserve.
 */
export default function V1SiteIndexFooter({ onNav }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="relative bg-[#181818] px-5 pb-10 pt-16 text-[#F3EEE7] md:px-10 md:pb-12 md:pt-24">
      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: LOOKBOOK_EASE }}
      >
        {/* Main five-zone row — stack mobile, 5-col desktop */}
        <div className="flex flex-col items-stretch gap-12 md:flex-row md:items-center md:justify-between md:gap-6 lg:gap-8">
          {/* 1 — Location */}
          <div className="flex shrink-0 flex-col gap-3 md:max-w-[200px]">
            <div className="flex items-center gap-2">
              <span
                className="font-sans text-[13px] font-bold uppercase tracking-[0.14em] text-[#F3EEE7] md:text-[14px]"
                style={{ fontFamily: "'Satoshi', sans-serif" }}
              >
                United Strength
              </span>
              <span
                className="inline-block h-2.5 w-5 shrink-0"
                style={{ backgroundColor: GOLD }}
                aria-hidden
              />
            </div>

            <div
              className="inline-flex w-fit items-center border px-2.5 py-1.5 font-mono text-[9px] tracking-[0.08em] md:text-[10px]"
              style={{ borderColor: GOLD, color: GOLD }}
            >
              39.9652° N&nbsp;&nbsp;|&nbsp;&nbsp;-82.9897° W
            </div>

            <div
              className="flex flex-wrap items-center gap-2 font-sans text-[11px] uppercase tracking-[0.1em] md:text-[12px]"
              style={{ color: GOLD }}
            >
              <span>237 Cleveland Ave</span>
              <span
                className="inline-block h-2.5 w-5 shrink-0"
                style={{ backgroundColor: GOLD }}
                aria-hidden
              />
              <span>43215</span>
            </div>
          </div>

          {/* 2 — Explore */}
          <nav className="shrink-0 md:min-w-[140px]" aria-label="Explore">
            <h3 className={sectionLabelClass}>
              Explore
              <span
                className="mt-1.5 block h-px w-8"
                style={{ backgroundColor: GOLD }}
                aria-hidden
              />
            </h3>
            <ul className="mt-4 flex flex-col gap-0.5">
              {EXPLORE.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => onNav(link.href, link.label)}
                    className={`${exploreLinkClass} text-left`}
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3 — Crest */}
          <div className="flex shrink-0 items-center justify-center py-2 md:px-2">
            <ClubCrestSVG className="h-auto w-[100px] md:w-[120px] lg:w-[140px]" color="#8A8070" />
          </div>

          {/* 4 — Connect */}
          <div className="shrink-0 md:min-w-[100px]">
            <h3 className={sectionLabelClass}>
              Connect
              <span
                className="mt-1.5 block h-px w-8"
                style={{ backgroundColor: GOLD }}
                aria-hidden
              />
            </h3>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://www.instagram.com/united_strength/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-[#F3EEE7] transition-opacity hover:opacity-70"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" strokeWidth={1.25} />
              </a>
              <span className="h-6 w-px bg-[#F3EEE7]/35" aria-hidden />
              <a
                href="mailto:info@unitedstrengthgym.com"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center text-[#F3EEE7] transition-opacity hover:opacity-70"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" strokeWidth={1.25} />
              </a>
            </div>
          </div>

          {/* 5 — Stronger United */}
          <div className="flex shrink-0 items-center justify-start md:justify-end">
            <StrongerUnitedMark className="h-11 w-auto max-w-[200px] object-contain object-left sm:h-12 sm:max-w-[220px] md:h-[52px] md:max-w-[240px]" />
          </div>
        </div>

        {/* Legal bar */}
        <div
          className="mt-14 flex flex-col gap-3 border-t pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between md:mt-20"
          style={{ borderColor: `${CREAM}1A` }}
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#F3EEE7]/45">
            © 2026 United Strength Club
          </span>
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#F3EEE7]/45">
            <button
              type="button"
              onClick={() => onNav("/privacy-policy", "Privacy")}
              className="min-h-[44px] transition-opacity hover:text-[#F3EEE7]/75"
            >
              Privacy
            </button>
            <span aria-hidden>|</span>
            <button
              type="button"
              onClick={() => onNav("/terms-of-service", "Terms")}
              className="min-h-[44px] transition-opacity hover:text-[#F3EEE7]/75"
            >
              Terms
            </button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
