import { motion, useReducedMotion } from "motion/react";
import { gymPhotos } from "../../assets/images/gym";
import { LOOKBOOK_EASE } from "../direction-ef/lookbook";

interface Props {
  /** Kept for ConceptV1View parity — Space is a layout break, not a gateway. */
  onNav: (href: string, label: string) => void;
}

/**
 * 05 // THE SPACE — cream layout break.
 * Staggered pair: larger floor, smaller rack overlapping up-right.
 * Cluster tucks slightly into People. Type sits beside the pair on desktop.
 * No page CTA.
 */
export default function SpaceExperience({ onNav: _onNav }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative z-40 -mt-8 bg-[#F3EEE7] px-5 pb-16 pt-0 text-[#181818] md:-mt-14 md:px-10 md:pb-28"
      aria-labelledby="v1-space-heading"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-12 md:gap-6 lg:gap-10">
        <div className="relative order-2 md:order-none md:col-span-7 md:-mt-10">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: LOOKBOOK_EASE }}
            className="relative z-0 w-[78%] overflow-hidden aspect-[4/5] md:w-[80%]"
          >
            <img
              src={gymPhotos.floorColumbus}
              alt="United Strength training floor — benches, dumbbells, and Columbus banner"
              className="h-full w-full object-cover"
              style={{ objectPosition: "center 45%" }}
            />
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: reduceMotion ? 0 : 0.08,
              ease: LOOKBOOK_EASE,
            }}
            className="absolute right-0 top-[14%] z-10 w-[54%] overflow-hidden aspect-[3/4] md:top-[10%] md:w-[48%]"
          >
            <img
              src={gymPhotos.equipmentClose}
              alt="Dumbbell rack at United Strength"
              className="h-full w-full object-cover"
              style={{ objectPosition: "center 40%" }}
            />
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.65,
            delay: reduceMotion ? 0 : 0.06,
            ease: LOOKBOOK_EASE,
          }}
          className="order-1 flex flex-col items-center text-center md:order-none md:col-span-5 md:items-start md:self-center md:text-left"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5C5C5C]">
            05 // The Space
          </p>
          <h2
            id="v1-space-heading"
            className="mt-3 max-w-[12ch] font-sans text-[24px] font-bold uppercase leading-[1.05] tracking-[-0.04em] md:text-[28px] lg:text-[32px]"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            The physical club
          </h2>
          <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.18em] text-[#5C5C5C]">
            Columbus · floor, racks &amp; iron
          </p>
        </motion.div>
      </div>
    </section>
  );
}
