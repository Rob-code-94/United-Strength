import { motion, useReducedMotion } from "motion/react";
import { LOOKBOOK_EASE } from "../direction-ef/lookbook";
import { usePageCopy } from "./V1Kit";
import { HubCopyText } from "./pages/V1Interior";

interface Props {
  onNav: (href: string, label: string) => void;
}

/**
 * 04 // PEOPLE — text-forward chapter + circular U watermark.
 * Continuous scroll: pulls up over Training with cream canvas handoff.
 */
export default function PeopleChapter({ onNav }: Props) {
  const reduceMotion = useReducedMotion();
  const { home } = usePageCopy();
  const people = home.people;

  return (
    <section
      className="relative z-30 -mt-10 bg-[#F3EEE7] px-5 pb-20 pt-16 text-[#181818] md:-mt-16 md:px-10 md:pb-28 md:pt-24"
      aria-labelledby="v1-people-heading"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: LOOKBOOK_EASE }}
        className="relative md:grid md:grid-cols-12 md:items-center md:gap-10 lg:gap-16"
      >
        <div className="relative z-10 md:col-span-7">
          <HubCopyText
            path="home.people.eyebrow"
            as="p"
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5C5C5C]"
          >
            {people.eyebrow}
          </HubCopyText>
          <h2
            id="v1-people-heading"
            className="mt-4 max-w-[12ch] font-sans text-[28px] font-bold uppercase leading-[1.05] tracking-[-0.04em] md:text-[36px] lg:text-[42px]"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            <HubCopyText path="home.people.headline">{people.headline}</HubCopyText>
          </h2>
          <p className="mt-6 max-w-[42ch] text-[15px] leading-relaxed tracking-[-0.01em] text-[#181818]/80 md:mt-8 md:text-[16px]">
            <HubCopyText path="home.people.body">{people.body}</HubCopyText>
          </p>
          <button
            type="button"
            onClick={() => onNav("/about/team", "Meet the Team")}
            className="mt-10 inline-flex min-h-[44px] items-center gap-2 border-b border-[#181818] pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#181818] transition-opacity hover:opacity-60"
          >
            <HubCopyText path="home.people.cta">{people.cta}</HubCopyText>
          </button>
        </div>

        <div
          className="pointer-events-none relative mt-12 flex items-center justify-center md:col-span-5 md:mt-0"
          aria-hidden
        >
          <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-[#181818]/20 md:h-52 md:w-52 lg:h-60 lg:w-60">
            <div className="absolute inset-3 rounded-full border border-[#181818]/10" />
            <span
              className="font-sans text-[72px] font-bold leading-none tracking-[-0.06em] text-[#181818]/15 md:text-[96px]"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              U
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
