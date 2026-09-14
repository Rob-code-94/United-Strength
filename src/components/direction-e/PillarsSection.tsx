import { Fragment, useLayoutEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { gymPhotos } from "../../assets/images/gym";

interface SubViewProps {
  onNav: (href: string, label: string) => void;
}

interface PillarItem {
  number: string;
  title: string;
  image: string;
  description: string;
  href: string;
}

/** Todd order: Foundation → Reflection → Longevity → Move the City.
 *  DNA: portfolio-08 sticky stack · Odd Ritual chrome. */
const PILLARS: PillarItem[] = [
  {
    number: "01",
    title: "Foundation",
    image: gymPhotos.architectureRaw,
    description:
      "Building strength from the ground up — small-group work on movement, technique, and confidence before the long game.",
    href: "/foundation",
  },
  {
    number: "02",
    title: "Reflection",
    image: gymPhotos.galleryCinematic,
    description:
      "Building self-awareness for lasting change — behavioral insight turned into tools you can actually use.",
    href: "/longevity/reflection",
  },
  {
    number: "03",
    title: "Longevity",
    image: gymPhotos.spaceAtmosphere,
    description:
      "Building measurable health for the years ahead — assessments and meaningful data so progress isn't left to guesswork.",
    href: "/longevity",
  },
  {
    number: "04",
    title: "Move the City",
    image: gymPhotos.equipmentClose,
    description:
      "Building stronger connections beyond the gym — a weekly run club for movement, conversation, and Columbus.",
    href: "/training/move-the-city",
  },
];

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * Sticky offsets account for the phone-stage crest + date bar (~5.5rem when scrolled).
 * Title pins under crest; cards pin under title and stack as you swipe.
 */
const CREST_OFFSET = "4.5rem";
const TITLE_BAND = "5.25rem";

function findScrollContainer(el: HTMLElement | null): HTMLElement | null {
  let node: HTMLElement | null = el?.parentElement ?? null;
  while (node) {
    const { overflowY } = getComputedStyle(node);
    if (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay") {
      return node;
    }
    node = node.parentElement;
  }
  return null;
}

function PillarCard({
  pillar,
  index,
  onNav,
  reduceMotion,
}: {
  pillar: PillarItem;
  index: number;
  onNav: (href: string, label: string) => void;
  reduceMotion: boolean;
}) {
  const stickyRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const [scrollBound, setScrollBound] = useState(false);

  useLayoutEffect(() => {
    scrollContainerRef.current = findScrollContainer(stickyRef.current);
    setScrollBound(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: stickyRef,
    container: scrollBound ? scrollContainerRef : undefined,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <div
      ref={stickyRef}
      className="sticky w-full px-4 pb-3"
      style={{
        zIndex: index + 1,
        top: `calc(${CREST_OFFSET} + ${TITLE_BAND})`,
        height: `calc(100cqh - ${CREST_OFFSET} - ${TITLE_BAND})`,
      }}
    >
      <motion.button
        type="button"
        onClick={() => onNav(pillar.href, pillar.title)}
        style={reduceMotion ? undefined : { scale }}
        className="w-full h-full text-left origin-top flex flex-col gap-3 px-4 py-4 bg-white border border-[#D9D9D9] min-h-[44px] group shadow-[0_12px_28px_rgba(24,24,24,0.08)]"
      >
        <div className="flex items-baseline gap-2 shrink-0">
          <span className="font-mono text-[11px] tabular-nums text-[#5C5C5C] tracking-widest">
            {pillar.number}
          </span>
          <span className="font-mono text-[11px] text-[#5C5C5C] tracking-widest">//</span>
          <h3 className="text-lg font-bold uppercase tracking-[-0.02em] text-[#181818]">
            {pillar.title}
          </h3>
        </div>

        <div className="overflow-hidden border border-neutral-200 flex-1 min-h-0">
          <img
            src={pillar.image}
            alt={pillar.title}
            className="w-full h-full object-cover select-none pointer-events-none group-active:scale-[1.02] transition-transform duration-500 ease-out"
          />
        </div>

        <div className="flex items-end justify-between gap-4 shrink-0">
          <p className="text-sm text-[#5C5C5C] leading-relaxed flex-1 line-clamp-3">
            {pillar.description}
          </p>
          <div
            className="h-10 w-10 shrink-0 border border-[#181818] bg-[#181818] text-white flex justify-center items-center"
            aria-hidden
          >
            <ArrowRight className="size-4" />
          </div>
        </div>
      </motion.button>
    </div>
  );
}

/**
 * Act 2 — Four Pillars.
 * Snaps to section top: crest + “Pillars.” + card 01 only.
 * Swipe up stacks 02–04 under the pinned title.
 */
export default function PillarsSection({ onNav }: SubViewProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative w-full shrink-0 snap-start snap-always bg-white border-t border-neutral-100"
      aria-labelledby="e-pillars-heading"
    >
      <header
        className="sticky z-40 bg-white/95 backdrop-blur-sm px-6 pt-5 pb-3 border-b border-neutral-100"
        style={{ top: CREST_OFFSET }}
      >
        <motion.div
          initial={reduceMotion ? false : { y: -16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col gap-2"
          style={{ minHeight: `calc(${TITLE_BAND} - 2rem)` }}
        >
          <div className="flex gap-2 items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5C5C5C]" />
            <p className="text-[10px] text-[#5C5C5C] font-mono uppercase tracking-[0.2em]">
              The Four Pillars
            </p>
          </div>
          <h2
            id="e-pillars-heading"
            className="text-[32px] leading-[0.95] font-bold tracking-[-0.03em] uppercase text-[#181818]"
          >
            Pillars.
          </h2>
        </motion.div>
      </header>

      <div className="relative pb-10">
        {PILLARS.map((pillar, index) => (
          <Fragment key={pillar.number}>
            <PillarCard
              pillar={pillar}
              index={index}
              onNav={onNav}
              reduceMotion={!!reduceMotion}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
