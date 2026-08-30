import { motion, useReducedMotion } from "motion/react";
import { gymPhotos } from "../../../assets/images/gym";
import DirectionEPageShell from "../DirectionEPageShell";

interface PageProps {
  onBack: () => void;
}

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/** Founder Story — DNA: about-us-13 narrative */
export default function FounderPage({ onBack }: PageProps) {
  const reduceMotion = useReducedMotion();

  return (
    <DirectionEPageShell title="Founder Story" onBack={onBack}>
      <section className="relative w-full h-[280px] overflow-hidden shrink-0">
        <img
          src={gymPhotos.architectureRaw}
          alt="United Strength — the space that started it"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 text-white">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/55">
            Origin
          </span>
        </div>
      </section>

      <section className="px-6 py-12 flex flex-col gap-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col gap-4"
        >
          <h2
            className="text-[26px] leading-snug text-[#181818]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Built downtown. For people who take the practice seriously.
          </h2>
          <p className="text-sm text-[#5C5C5C] leading-relaxed">
            If you&apos;ve been around United Strength lately, you&apos;ve probably noticed things
            are changing. That&apos;s intentional. We&apos;re not just trying to build a better gym
            — we&apos;re building something people genuinely want to belong to.
          </p>
          <p className="text-sm text-[#5C5C5C] leading-relaxed">
            Columbus is home. The space, the coaches, and the members are the story — not a
            franchise template. Health isn&apos;t something you achieve. It&apos;s something you
            continue to build.
          </p>
        </motion.div>

        <div className="border-t border-neutral-200 pt-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#5C5C5C] mb-2">
            Chapter note
          </p>
          <p className="text-xs text-[#5C5C5C] leading-relaxed italic">
            Final portrait, name lockup, and timeline arrive with client content.
          </p>
        </div>
      </section>
    </DirectionEPageShell>
  );
}
