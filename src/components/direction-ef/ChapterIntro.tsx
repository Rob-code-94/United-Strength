import { motion, useReducedMotion } from "motion/react";
import { LOOKBOOK_EASE, LookbookIndex, LookbookNextCue } from "./lookbook";

export interface ChapterIntroProps {
  n: string;
  title: string;
  image: string;
  imageAlt: string;
  /** Optional short chapter lede under the title */
  lede?: string;
  /** Sparse editorial label e.g. `( The Club )` */
  metadata?: string;
  /** Next chapter preview — omit on last intro chapter */
  next?: { n: string; title: string };
}

/**
 * Act 1 chapter shell — Odd Ritual lookbook DNA (EF).
 * Uses shared LookbookIndex + LookbookNextCue.
 */
export default function ChapterIntro({
  n,
  title,
  image,
  imageAlt,
  lede,
  metadata,
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
          transition={{ duration: 0.7, ease: LOOKBOOK_EASE }}
        >
          <LookbookIndex n={n} title={title} metadata={metadata} lede={lede} onDark />
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: LOOKBOOK_EASE }}
        >
          {next ? (
            <LookbookNextCue next={`${next.n} // ${next.title}`} onDark />
          ) : (
            <LookbookNextCue label="Next" next="↓ Continue" onDark />
          )}
        </motion.div>
      </div>
    </section>
  );
}
