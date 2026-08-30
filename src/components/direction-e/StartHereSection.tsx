import { motion, useReducedMotion } from "motion/react";
import { gymPhotos } from "../../assets/images/gym";

interface SubViewProps {
  onNav: (href: string, label: string) => void;
}

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const PATHS = [
  {
    title: "Experience United",
    body: "Five classes. Fourteen days. Feel the practice and the standard before you apply.",
    href: "/start-here/experience",
    label: "Experience United",
    cta: "Begin Trial",
    image: gymPhotos.experienceBroll,
    imageAlt: "Experience United — Stronger mural",
    accent: false,
  },
  {
    title: "Apply for Membership",
    body: "Selective application — reviewed by the team. Belonging before transaction.",
    href: "/start-here/apply",
    label: "Apply for Membership",
    cta: "Apply",
    image: gymPhotos.heroFullBleed,
    imageAlt: "United Strength Club — membership",
    accent: true,
  },
] as const;

/**
 * Act 2 — Start Here.
 * Editorial dual path (Odd Ritual community DNA + cta-08 image statement).
 * Sparse type · photo leads · text CTAs — no chunky gym buttons.
 */
export default function StartHereSection({ onNav }: SubViewProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="box-border w-full min-h-[100cqh] flex flex-col justify-center px-5 py-14 shrink-0 snap-start snap-always bg-white gap-10"
      aria-labelledby="e-start-heading"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="flex flex-col gap-3 max-w-[22rem]"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#5C5C5C]">
          Start Here
        </span>
        <h2
          id="e-start-heading"
          className="text-[26px] font-bold tracking-[-0.03em] uppercase text-[#181818] leading-tight"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          Two clear paths
        </h2>
        <p className="text-[14px] leading-relaxed text-[#5C5C5C]">
          Begin with the trial, or apply when you already know the standard. Either way —
          no open checkout on this layer.
        </p>
      </motion.div>

      <div className="flex flex-col gap-12">
        {PATHS.map((path, i) => (
          <motion.article
            key={path.href}
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.08 * i, ease: EASE }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <h3
                className="text-[15px] font-bold tracking-[0.04em] uppercase text-[#181818]"
                style={{ fontFamily: "'Satoshi', sans-serif" }}
              >
                {path.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-[#5C5C5C] max-w-sm">{path.body}</p>
            </div>

            <button
              type="button"
              onClick={() => onNav(path.href, path.label)}
              className="group relative w-full aspect-[4/3] overflow-hidden text-left min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#181818]"
            >
              <img
                src={path.image}
                alt={path.imageAlt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-500" />
              <span className="absolute inset-0 flex items-center justify-center font-mono text-[11px] uppercase tracking-[0.22em] text-white drop-shadow-sm">
                <span
                  className={`border-b pb-0.5 transition-colors ${
                    path.accent
                      ? "border-[#0A3C2E] group-hover:border-emerald-800"
                      : "border-white/50 group-hover:border-white"
                  }`}
                >
                  [ {path.cta} ]
                </span>
              </span>
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
