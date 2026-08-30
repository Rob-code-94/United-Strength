import { motion, useReducedMotion } from "motion/react";

export interface ChapterIntroProps {
  n: string;
  title: string;
  image: string;
  imageAlt: string;
  /** Optional short chapter lede under the title */
  lede?: string;
  /** Next chapter preview — omit on last intro chapter */
  next?: { n: string; title: string };
}

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * Act 1 chapter shell — Odd Ritual next-preview DNA.
 * Motion easing adapted from shadcn-space services-03 / about-us-13.
 */
export default function ChapterIntro({
  n,
  title,
  image,
  imageAlt,
  lede,
  next,
}: ChapterIntroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative w-full min-h-[100cqh] shrink-0 overflow-hidden flex flex-col justify-end snap-start snap-always"
      aria-label={`${n} ${title}`}
    >
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/15" />

      <div className="relative z-10 px-6 pb-10 pt-16 text-white flex flex-col gap-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col gap-3 max-w-sm"
        >
          <span className="font-mono text-[48px] leading-none tracking-tight text-white/90">
            {n}
          </span>
          <h2 className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/85">
            // {title}
          </h2>
          {lede ? (
            <p className="text-sm leading-relaxed text-white/75 mt-1">{lede}</p>
          ) : null}
        </motion.div>

        {next ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="flex flex-col gap-1.5 border-t border-white/20 pt-4"
            aria-hidden={false}
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/50">
              Scroll
            </span>
            <div className="flex items-baseline gap-2 text-white/80">
              <span className="text-lg leading-none" aria-hidden>
                ↓
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
                {next.n} // {next.title}
              </span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="flex flex-col gap-1.5 border-t border-white/20 pt-4"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/50">
              Next
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/80">
              ↓ Continue
            </span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
