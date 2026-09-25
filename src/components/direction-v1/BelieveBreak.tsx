import { motion, useReducedMotion } from "motion/react";
import { PHILOSOPHY_CHAPTERS } from "../../data/about-copy";
import { LOOKBOOK_EASE } from "../direction-ef/lookbook";

interface Props {
  onNav: (href: string, label: string) => void;
}

const manifesto = PHILOSOPHY_CHAPTERS.manifesto;

/**
 * 02 // WHAT WE BELIEVE — post-carousel typography break.
 * about-us-09 DNA: split headline + body; cream canvas; no photo dump.
 */
export default function BelieveBreak({ onNav }: Props) {
  const reduceMotion = useReducedMotion();
  const body = manifesto.body ?? [];

  return (
    <section
      className="relative z-10 bg-[#F3EEE7] px-5 pb-20 pt-16 text-[#181818] md:px-10 md:pb-28 md:pt-24"
      aria-labelledby="v1-believe-heading"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: LOOKBOOK_EASE }}
        className="md:grid md:grid-cols-12 md:gap-10 lg:gap-16"
      >
        <div className="md:col-span-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5C5C5C]">
            02 // What We Believe
          </p>
          <h2
            id="v1-believe-heading"
            className="mt-4 max-w-[12ch] font-sans text-[28px] font-bold uppercase leading-[1.05] tracking-[-0.04em] md:text-[36px] lg:text-[42px]"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            {manifesto.headline}
          </h2>
        </div>

        <div className="mt-8 md:col-span-7 md:mt-10">
          <div className="flex flex-col gap-4 border-t border-[#181818]/15 pt-6 md:border-t-0 md:pt-0">
            {body.slice(0, 3).map((para, i) => (
              <motion.p
                key={para.slice(0, 24)}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  delay: reduceMotion ? 0 : 0.08 + i * 0.08,
                  ease: LOOKBOOK_EASE,
                }}
                className="max-w-[42ch] text-[15px] leading-relaxed tracking-[-0.01em] text-[#181818]/80 md:text-[16px]"
              >
                {para}
              </motion.p>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onNav("/about/philosophy", "Our Philosophy")}
            className="mt-10 inline-flex min-h-[44px] items-center gap-2 border-b border-[#181818] pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#181818] transition-opacity hover:opacity-60"
          >
            Our Philosophy →
          </button>
        </div>
      </motion.div>
    </section>
  );
}
