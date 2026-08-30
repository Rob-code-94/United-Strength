import { motion, useReducedMotion } from "motion/react";
import { LOOKBOOK_EASE } from "./constants";

export interface OffCenteredStackItem {
  title: string;
  author: string;
  date: string;
  href: string;
  cover: string;
  coverAlt: string;
  excerpt?: string;
}

interface LookbookOffCenteredStackProps {
  items: readonly OffCenteredStackItem[];
  /** Section eyebrow — e.g. Archives */
  eyebrow?: string;
  /** Mono index suffix — e.g. Archive → `01 // Archive` */
  indexLabel?: string;
}

/** Alternating off-center offsets — inset from edges (not flush). */
const OFFSETS = [
  { rotate: -1.5, side: "left" as const },
  { rotate: 1.25, side: "right" as const },
  { rotate: -0.75, side: "left" as const },
  { rotate: 1.5, side: "right" as const },
];

/** Pin under simulator crest / sticky header — locked in off-centered-stack.mdc */
const STICKY_TOP = "4.5rem";

/**
 * Off Centered Stack — named lookbook beat (locked).
 * Mechanic: sticky wrappers + shared top + rising z-index + scroll runway.
 * Lead plate materializes on load; later plates enter on scroll.
 * Rule: `.cursor/rules/off-centered-stack.mdc`
 */
export default function LookbookOffCenteredStack({
  items,
  eyebrow = "Archives",
  indexLabel = "Archive",
}: LookbookOffCenteredStackProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <motion.div
        className="flex items-center justify-between gap-4 px-6 md:px-10 mx-auto w-full max-w-6xl"
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: LOOKBOOK_EASE }}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#5C5C5C]">
          // {eyebrow}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5C5C5C] inline-flex items-center gap-2">
          Scroll
          <span aria-hidden>↓</span>
        </p>
      </motion.div>

      <div
        className="relative mx-auto w-full max-w-6xl px-6 md:px-10 pb-6 md:pb-10"
        role="list"
        aria-label={eyebrow}
      >
        {/* Locked: no flex gap between plates — sticky + z-index stacks on scroll */}
        <div className="relative">
          {items.map((item, i) => {
            const n = String(i + 1).padStart(2, "0");
            const offset = OFFSETS[i % OFFSETS.length]!;
            const z = i + 1;
            const isLast = i === items.length - 1;
            const isLead = i === 0;
            const sideClass =
              offset.side === "right"
                ? "ml-auto mr-2 sm:mr-4 md:mr-6"
                : "ml-2 sm:ml-4 md:ml-6 mr-auto";

            return (
              <div
                key={item.href}
                className="sticky"
                style={{
                  top: STICKY_TOP,
                  zIndex: z,
                  paddingBottom: isLast ? "1.5rem" : "min(48vh, 22rem)",
                }}
                role="listitem"
              >
                <motion.a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={
                    reduceMotion
                      ? false
                      : isLead
                        ? {
                            opacity: 0,
                            y: 40,
                            scale: 0.94,
                            rotate: offset.rotate - 3,
                            filter: "blur(6px)",
                          }
                        : {
                            opacity: 0,
                            y: 28,
                            rotate: offset.rotate - 1.5,
                          }
                  }
                  animate={
                    reduceMotion || !isLead
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          rotate: offset.rotate,
                          filter: "blur(0px)",
                        }
                  }
                  whileInView={
                    isLead || reduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                          rotate: offset.rotate,
                        }
                  }
                  viewport={
                    isLead ? undefined : { once: true, amount: 0.35 }
                  }
                  transition={{
                    duration: isLead ? 0.9 : 0.7,
                    ease: LOOKBOOK_EASE,
                    delay: reduceMotion
                      ? 0
                      : isLead
                        ? 0.12
                        : Math.min(0.08 + i * 0.06, 0.28),
                  }}
                  className={`group relative block w-[88%] sm:w-[78%] md:w-[62%] max-w-[420px] aspect-[3/4] overflow-hidden bg-[#181818] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#181818] ${sideClass}`}
                >
                  <img
                    src={item.cover}
                    alt={item.coverAlt}
                    className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none grayscale contrast-110 brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

                  <div className="relative z-10 flex h-full flex-col justify-between p-5 md:p-6 text-white">
                    <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/70">
                      {n} // {indexLabel}
                    </span>

                    <div className="flex flex-col gap-3">
                      <h3
                        className="text-[1.25rem] sm:text-[1.45rem] leading-snug tracking-tight font-bold line-clamp-3 group-hover:opacity-80 transition-opacity"
                        style={{ fontFamily: "'Satoshi', sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      {item.excerpt ? (
                        <p className="text-[13px] leading-relaxed text-white/75 line-clamp-2">
                          {item.excerpt}
                        </p>
                      ) : null}
                      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/65">
                        {item.author} · {item.date}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white min-h-[44px] inline-flex items-center pt-1 border-t border-white/20">
                        [ Read ]
                      </span>
                    </div>
                  </div>
                </motion.a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
