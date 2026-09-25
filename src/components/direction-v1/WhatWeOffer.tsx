import { motion, useReducedMotion } from "motion/react";
import { gymPhotos } from "../../assets/images/gym";
import { LOOKBOOK_EASE } from "../direction-ef/lookbook";
import TrainingTile, { type TrainingPathway } from "./TrainingTile";

interface Props {
  onNav: (href: string, label: string) => void;
}

const PATHWAYS: readonly TrainingPathway[] = [
  {
    n: "01",
    label: "Build",
    title: "Strength for life.",
    href: "/training/classes/build",
    image: gymPhotos.equipmentClose,
    objectPosition: "center 40%",
  },
  {
    n: "02",
    label: "Burn",
    title: "Burn.",
    href: "/training/classes/burn",
    image: gymPhotos.heroFullBleed,
    objectPosition: "center 45%",
  },
  {
    n: "03",
    label: "Personal Training",
    title: "1:1 Coaching.",
    href: "/training/personal",
    image: gymPhotos.galleryCinematic,
    objectPosition: "center 35%",
  },
  {
    n: "04",
    label: "Move the City",
    title: "Move the City.",
    href: "/training/move-the-city",
    image: gymPhotos.runClub,
    objectPosition: "center 40%",
  },
] as const;

const [BUILD, BURN, PT, MOVE] = PATHWAYS;

/**
 * 03 // TRAINING — locked editorial bento.
 * Build wide 3cols · Burn tall rowspan-2 · PT 1col · Move 2cols.
 */
export default function WhatWeOffer({ onNav }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative z-20 -mt-8 bg-[#181818] px-5 pb-20 pt-16 text-[#F3EEE7] md:-mt-14 md:px-10 md:pb-28 md:pt-24"
      aria-labelledby="v1-training-heading"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: LOOKBOOK_EASE }}
        className="border-b border-[#F3EEE7]/15 pb-6"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F3EEE7]/50">
          03 // Training
        </p>
        <h2
          id="v1-training-heading"
          className="mt-3 max-w-[14ch] font-sans text-[28px] font-bold uppercase tracking-[-0.04em] md:text-[36px]"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          How we train.
        </h2>
      </motion.div>

      <div className="mt-8 flex flex-col gap-2 md:mt-12 md:grid md:grid-cols-4 md:grid-rows-[minmax(240px,32vw)_minmax(240px,32vw)] md:gap-2">
        <TrainingTile
          pathway={BUILD}
          onNav={onNav}
          index={0}
          className="aspect-[4/5] w-full md:col-span-3 md:row-start-1 md:aspect-auto md:h-full"
        />
        <TrainingTile
          pathway={BURN}
          onNav={onNav}
          index={1}
          className="aspect-[4/5] w-full md:col-span-1 md:row-span-2 md:row-start-1 md:aspect-auto md:h-full"
        />
        <TrainingTile
          pathway={PT}
          onNav={onNav}
          index={2}
          className="aspect-[4/5] w-full md:col-span-1 md:row-start-2 md:aspect-auto md:h-full"
        />
        <TrainingTile
          pathway={MOVE}
          onNav={onNav}
          index={3}
          className="aspect-[4/5] w-full md:col-span-2 md:row-start-2 md:aspect-auto md:h-full"
        />
      </div>
    </section>
  );
}
