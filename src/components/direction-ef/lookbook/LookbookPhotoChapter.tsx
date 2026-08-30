import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { LOOKBOOK_EASE } from "./constants";
import LookbookNextCue from "./LookbookNextCue";

interface LookbookPhotoChapterProps {
  image: string;
  imageAlt: string;
  next?: string;
  children: ReactNode;
  gradientClass?: string;
}

/** Full-bleed photo chapter with gradient + next-preview cue. */
export default function LookbookPhotoChapter({
  image,
  imageAlt,
  next,
  children,
  gradientClass = "from-black/75 via-black/30 to-black/15",
}: LookbookPhotoChapterProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full min-h-[100cqh] shrink-0 overflow-hidden flex flex-col justify-end snap-start">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${gradientClass}`} />
      <div className="relative z-10 px-6 pb-10 pt-20 text-white flex flex-col gap-8 min-h-[100cqh] justify-end">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: LOOKBOOK_EASE }}
          className="flex flex-col gap-4"
        >
          {children}
        </motion.div>
        {next ? <LookbookNextCue next={next} onDark className="mt-auto" /> : null}
      </div>
    </section>
  );
}
