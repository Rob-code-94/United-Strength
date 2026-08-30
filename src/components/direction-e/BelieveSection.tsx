import { motion, useReducedMotion } from "motion/react";
import { gymPhotos } from "../../assets/images/gym";

const SECTION =
  "box-border w-full min-h-[100cqh] flex flex-col justify-center px-6 py-12 shrink-0 snap-start snap-always";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/** Act 2 — What We Believe. DNA: about-us-13 editorial + image. */
export default function BelieveSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={`${SECTION} bg-[#F3EEE7] gap-8`} aria-labelledby="e-believe-heading">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="flex flex-col gap-5"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#5C5C5C]">
          What We Believe
        </span>
        <h2
          id="e-believe-heading"
          className="text-[26px] leading-[1.25] text-[#181818] max-w-sm"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          People don&apos;t stay because of equipment. They stay because of how a place makes them
          feel.
        </h2>
        <p className="text-sm text-[#5C5C5C] leading-relaxed max-w-sm">
          We&apos;re not changing who we are. We&apos;re becoming more intentional about how we
          deliver it — a place where people pursue their potential alongside others who challenge
          them to grow.
        </p>
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        className="w-full overflow-hidden border border-[#D9D9D9]"
      >
        <img
          src={gymPhotos.galleryCinematic}
          alt="United Strength — quiet moment in the practice"
          className="w-full h-[200px] object-cover select-none pointer-events-none"
        />
      </motion.div>
    </section>
  );
}
