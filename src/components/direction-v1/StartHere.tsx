import { motion, useReducedMotion } from "motion/react";
import { gymPhotos } from "../../assets/images/gym";
import { LOOKBOOK_EASE } from "../direction-ef/lookbook";

interface Props {
  onNav: (href: string, label: string) => void;
}

/**
 * 07 // START HERE — cta-15 equality adapted.
 * Centered chapter line, then two equal frames. Type stays off the photos.
 */
export default function StartHere({ onNav }: Props) {
  const reduceMotion = useReducedMotion();

  const pathways = [
    {
      title: "Experience United",
      lede: "5 classes · 14 days · try the practice.",
      href: "/start-here/experience",
      label: "Experience United",
      cta: "Start Experience →",
      image: gymPhotos.experienceBroll,
      objectPosition: "center 40%",
      frame: "h-[280px] w-full md:h-[min(36vw,420px)]",
      linkClass: "text-[#F3EEE7]",
    },
    {
      title: "Apply for Membership",
      lede: "Selective membership — reviewed by the team.",
      href: "/start-here/apply",
      label: "Apply for Membership",
      cta: "Apply →",
      image: gymPhotos.runClub,
      objectPosition: "center 35%",
      frame: "h-[280px] w-full md:h-[min(36vw,420px)]",
      linkClass: "bg-[#0A3C2E] px-3 py-1.5 text-[#F3EEE7]",
    },
  ] as const;

  return (
    <section
      className="relative z-[60] -mt-8 overflow-hidden bg-[#181818] px-5 pb-16 pt-16 text-[#F3EEE7] md:-mt-14 md:px-10 md:pb-24 md:pt-24"
      aria-labelledby="v1-start-heading"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: LOOKBOOK_EASE }}
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F3EEE7]/50">
          07 // Start Here
        </p>
        <h2
          id="v1-start-heading"
          className="mt-3 font-sans text-[28px] font-bold uppercase leading-[1.1] tracking-[-0.04em] md:text-[40px]"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          Two ways to begin.
        </h2>
        <div className="mt-8 flex w-full flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-12">
          {pathways.map((path) => (
            <button
              key={path.href}
              type="button"
              onClick={() => onNav(path.href, path.label)}
              className="min-h-[44px] max-w-[28ch] text-center"
            >
              <span
                className="block font-sans text-[16px] font-bold uppercase tracking-[-0.03em]"
                style={{ fontFamily: "'Satoshi', sans-serif" }}
              >
                {path.title}
              </span>
              <span className="mt-1 block text-[13px] leading-relaxed text-[#F3EEE7]/70">
                {path.lede}
              </span>
              <span
                className={`mt-2 inline-flex items-center font-mono text-[11px] uppercase tracking-[0.18em] ${path.linkClass}`}
              >
                {path.cta}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-2 md:mt-16 md:grid-cols-2 md:gap-3">
        {pathways.map((path, i) => (
          <motion.button
            key={path.href}
            type="button"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.65,
              delay: reduceMotion ? 0 : i * 0.08,
              ease: LOOKBOOK_EASE,
            }}
            onClick={() => onNav(path.href, path.label)}
            aria-label={`${path.title}. ${path.cta.replace(" →", "")}`}
            className={`group relative min-h-[44px] overflow-hidden ${path.frame}`}
          >
            <img
              src={path.image}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] group-hover:scale-[1.03] group-active:scale-[1.02]"
              style={{ objectPosition: path.objectPosition }}
            />
          </motion.button>
        ))}
      </div>
    </section>
  );
}
