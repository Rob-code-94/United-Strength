import { motion, useReducedMotion } from "motion/react";
import { gymPhotos } from "../../assets/images/gym";
import { LOOKBOOK_EASE } from "../direction-ef/lookbook";

interface Props {
  onNav: (href: string, label: string) => void;
}

/**
 * Cream chapter break — gallery-01 DNA as layered horizontal planks
 * (magazine offsets), not an equal mosaic grid.
 */
export default function SpaceExperience({ onNav }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#F3EEE7] px-5 py-16 text-[#181818] md:px-10 md:py-24">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: LOOKBOOK_EASE }}
        className="border-b border-[#181818]/15 pb-6"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5C5C5C]">
          06 // The Space / Experience
        </p>
        <h2
          className="mt-3 max-w-[14ch] font-sans text-[28px] font-bold uppercase tracking-[-0.04em] md:text-[36px]"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          The physical club
        </h2>
      </motion.div>

      <div className="relative mt-10 md:mt-14">
        {/* Lead — training floor with weights */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: LOOKBOOK_EASE }}
          className="relative z-10 aspect-[21/9] w-full overflow-hidden md:aspect-[2.5/1]"
        >
          <img
            src={gymPhotos.floorColumbus}
            alt="United Strength training floor — benches, dumbbells, and Columbus banner"
            className="h-full w-full object-cover"
            style={{ objectPosition: "center 45%" }}
          />
        </motion.div>

        {/* Offset layered planks — equipment + rack */}
        <div className="relative z-20 mt-[-10px] flex flex-col gap-0 md:mt-[-14px]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.08, ease: LOOKBOOK_EASE }}
            className="relative ml-0 w-[92%] overflow-hidden aspect-[21/9] shadow-[0_0_0_1px_rgba(24,24,24,0.06)] md:ml-[4%] md:w-[88%] md:aspect-[2.8/1]"
          >
            <img
              src={gymPhotos.equipmentClose}
              alt="Dumbbell rack at United Strength"
              className="h-full w-full object-cover"
              style={{ objectPosition: "center 40%" }}
            />
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.14, ease: LOOKBOOK_EASE }}
            className="relative z-30 mt-[-8px] ml-auto w-[90%] overflow-hidden aspect-[21/9] shadow-[0_0_0_1px_rgba(24,24,24,0.06)] md:mt-[-12px] md:w-[86%] md:aspect-[2.8/1]"
          >
            <img
              src={gymPhotos.rackWeights}
              alt="Weight plates and dumbbell rack on the club floor"
              className="h-full w-full object-cover"
              style={{ objectPosition: "center 50%" }}
            />
          </motion.div>
        </div>

        <p className="mt-6 font-mono text-[9px] uppercase tracking-[0.18em] text-[#5C5C5C]">
          Columbus · floor, racks &amp; iron
        </p>
      </div>

      <button
        type="button"
        onClick={() => onNav("/about/the-space", "Explore the Space")}
        className="mt-10 inline-flex min-h-[44px] items-center gap-2 border-b border-[#181818] pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#181818] transition-opacity hover:opacity-60"
      >
        Explore the Space →
      </button>
    </section>
  );
}
