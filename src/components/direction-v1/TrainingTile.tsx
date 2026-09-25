import { motion, useReducedMotion } from "motion/react";
import { LOOKBOOK_EASE } from "../direction-ef/lookbook";

export interface TrainingPathway {
  n: string;
  label: string;
  /** Short overlay title — ultra-bold on photo */
  title: string;
  href: string;
  image: string;
  objectPosition: string;
}

interface TrainingTileProps {
  pathway: TrainingPathway;
  onNav: (href: string, label: string) => void;
  /** Extra layout classes (grid spans, aspect, height) */
  className?: string;
  /** Stagger index for fade-up */
  index?: number;
}

/**
 * Photo plane + bottom-left bold overlay. No under-image captions.
 */
export default function TrainingTile({
  pathway,
  onNav,
  className = "",
  index = 0,
}: TrainingTileProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay: reduceMotion ? 0 : index * 0.06,
        ease: LOOKBOOK_EASE,
      }}
      onClick={() => onNav(pathway.href, pathway.label)}
      className={`group relative min-h-[44px] overflow-hidden rounded-none bg-[#181818] text-left ${className}`}
      aria-label={`${pathway.label}: ${pathway.title}`}
    >
      <img
        src={pathway.image}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] group-hover:scale-[1.04] group-active:scale-[1.03]"
        style={{ objectPosition: pathway.objectPosition }}
      />
      {/* Legibility guard */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 z-10 p-4 transition-transform duration-500 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] group-hover:-translate-y-1 group-active:-translate-y-1 md:p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#F3EEE7]/65">
          {pathway.n} // {pathway.label}
        </p>
        <p
          className="mt-1.5 max-w-[14ch] font-sans text-[22px] font-black uppercase leading-[1.05] tracking-[-0.04em] text-[#F3EEE7] md:text-[26px] lg:text-[28px]"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          {pathway.title}
        </p>
        <span className="mt-2 inline-block font-mono text-[11px] tracking-[0.16em] text-[#F3EEE7]/80">
          →
        </span>
      </div>
    </motion.button>
  );
}
