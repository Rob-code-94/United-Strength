import { motion, useReducedMotion } from "motion/react";
import { LOOKBOOK_EASE } from "../direction-ef/lookbook";

interface Props {
  onNav: (href: string, label: string) => void;
}

/**
 * Stripped conversion — cta-15 DNA.
 * Statement + exactly two CTAs; left editorial stack (no chapter eyebrow).
 */
export default function StartHere({ onNav }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#181818] px-5 py-20 text-[#F3EEE7] md:px-10 md:py-28">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: LOOKBOOK_EASE }}
        className="max-w-xl text-left"
      >
        <h2
          className="font-sans text-[28px] font-bold uppercase leading-[1.1] tracking-[-0.04em] md:text-[40px]"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          Your next chapter starts here.
        </h2>

        <div className="mt-12 flex w-full flex-col gap-3">
          <button
            type="button"
            onClick={() =>
              onNav("/start-here/experience", "Experience United")
            }
            className="inline-flex min-h-[48px] w-full items-center justify-center border border-[#F3EEE7]/40 px-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[#F3EEE7] transition-opacity hover:opacity-70 sm:max-w-sm"
          >
            Experience United →
          </button>
          <button
            type="button"
            onClick={() =>
              onNav("/start-here/apply", "Apply for Membership")
            }
            className="inline-flex min-h-[48px] w-full items-center justify-center bg-[#0A3C2E] px-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[#F3EEE7] transition-opacity hover:opacity-90 sm:max-w-sm"
          >
            Apply for Membership →
          </button>
        </div>
      </motion.div>
    </section>
  );
}
