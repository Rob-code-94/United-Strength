import { motion, useReducedMotion } from "motion/react";
import { gymPhotos } from "../../../assets/images/gym";
import DirectionEPageShell from "../DirectionEPageShell";

interface PageProps {
  onBack: () => void;
}

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/** Philosophy areas — Archive Issue 001 (not homepage Four Pillars). */
const HEALTH_AREAS = [
  {
    n: "01",
    title: "Strength",
    body: "Building a body that is strong and capable through all phases of life.",
  },
  {
    n: "02",
    title: "Self-awareness",
    body: "Understanding yourself, and creating lasting change.",
  },
  {
    n: "03",
    title: "Connection",
    body: "Surrounding yourself with people who challenge you, support you, and make life better.",
  },
  {
    n: "04",
    title: "Longevity",
    body: "Using meaningful information to understand where you are today and improve for tomorrow.",
  },
] as const;

function NextCue({
  label,
  next,
  onDark = false,
}: {
  label?: string;
  next: string;
  onDark?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-1.5 border-t pt-4 mt-auto ${
        onDark ? "border-white/20" : "border-black/10"
      }`}
    >
      <span
        className={`font-mono text-[9px] uppercase tracking-[0.3em] ${
          onDark ? "text-white/50" : "text-[#5C5C5C]"
        }`}
      >
        {label ?? "Scroll"}
      </span>
      <div
        className={`flex items-baseline gap-2 ${
          onDark ? "text-white/80" : "text-[#181818]/80"
        }`}
      >
        <span className="text-lg leading-none" aria-hidden>
          ↓
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em]">{next}</span>
      </div>
    </div>
  );
}

/**
 * Philosophy — Odd Ritual lookbook interior.
 * Sequential storytelling nodes · mega indices · Scroll/Next · photo-led emotion.
 * Copy: Archive Issue 001. No shop grids · no public pricing.
 */
export default function PhilosophyPage({ onBack }: PageProps) {
  const reduceMotion = useReducedMotion();

  return (
    <DirectionEPageShell title="Philosophy" onBack={onBack}>
      {/* LOOKBOOK 01 — Photo open */}
      <section className="relative w-full min-h-[100cqh] shrink-0 overflow-hidden flex flex-col justify-end snap-start">
        <img
          src={gymPhotos.galleryCinematic}
          alt="United Strength — quiet moment in the practice"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/15" />
        <div className="relative z-10 px-6 pb-10 pt-20 text-white flex flex-col gap-8 min-h-[100cqh] justify-end">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col gap-3 max-w-sm"
          >
            <span className="font-mono text-[48px] leading-none tracking-tight text-white/90">
              01
            </span>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/85">
              // What We Hold
            </h2>
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-white/45">
              ( Philosophy )
            </p>
            <p className="text-sm leading-relaxed text-white/75 mt-1">
              What does it really mean to be healthy?
            </p>
          </motion.div>
          <NextCue next="02 // Manifesto" onDark />
        </div>
      </section>

      {/* LOOKBOOK 02 — Manifesto (high negative space) */}
      <section className="w-full min-h-[100cqh] shrink-0 snap-start bg-[#F3EEE7] px-6 py-14 flex flex-col justify-between">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col gap-8 max-w-sm pt-4"
        >
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[48px] leading-none tracking-tight text-[#181818]/90">
              02
            </span>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
              // Manifesto
            </h2>
          </div>
          <p
            className="text-[26px] leading-[1.22] text-[#181818]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            What does it really mean to be healthy?
          </p>
          <p className="text-sm text-[#5C5C5C] leading-relaxed">
            Ask ten people what it means to be healthy, and you&apos;ll probably get ten different
            answers. Somewhere along the way, we started confusing looking healthy with actually
            being healthy. The reality is, health is much bigger than any single metric.
          </p>
        </motion.div>
        <NextCue next="03 // Place" />
      </section>

      {/* LOOKBOOK 03 — Place feeling */}
      <section className="w-full min-h-[100cqh] shrink-0 snap-start bg-white px-6 py-14 flex flex-col justify-between">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col gap-8 max-w-sm pt-4"
        >
          <div className="flex flex-col gap-3">
            <span className="font-mono text-[48px] leading-none tracking-tight text-[#181818]/90">
              03
            </span>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
              // Place
            </h2>
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#5C5C5C]/70">
              ( Columbus )
            </p>
          </div>
          <blockquote
            className="text-[24px] leading-snug text-[#181818]"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            People don&apos;t stay because of equipment. They stay because of how a place makes them
            feel.
          </blockquote>
          <p className="text-sm text-[#5C5C5C] leading-relaxed">
            It&apos;s not just about how you look today. It&apos;s about the life you&apos;re building
            for the years to come — the strength to carry kids and grandkids, the energy to enjoy
            life, moving well, managing stress, and understanding your own biology.
          </p>
        </motion.div>
        <NextCue next="04 // Four Areas" />
      </section>

      {/* LOOKBOOK 04 — Photo beat */}
      <section className="relative w-full min-h-[100cqh] shrink-0 overflow-hidden flex flex-col justify-end snap-start">
        <img
          src={gymPhotos.spaceAtmosphere}
          alt="United Strength — atmosphere in the club"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        <div className="relative z-10 px-6 pb-10 pt-20 text-white flex flex-col gap-8 min-h-[100cqh] justify-end">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col gap-3 max-w-sm"
          >
            <span className="font-mono text-[48px] leading-none tracking-tight text-white/90">
              04
            </span>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/85">
              // The Practice
            </h2>
            <p className="text-sm leading-relaxed text-white/75">
              For United, real health is built on four key areas.
            </p>
          </motion.div>
          <NextCue next="05 // Index" onDark />
        </div>
      </section>

      {/* LOOKBOOK 05 — Brutalist index of four areas */}
      <section className="w-full min-h-[100cqh] shrink-0 snap-start bg-white px-6 py-14 flex flex-col justify-between">
        <div className="flex flex-col gap-10 pt-4">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col gap-3"
          >
            <span className="font-mono text-[48px] leading-none tracking-tight text-[#181818]/90">
              05
            </span>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
              // Four Key Areas
            </h2>
            <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#5C5C5C]/70">
              ( Index )
            </p>
          </motion.div>

          <ul className="flex flex-col">
            {HEALTH_AREAS.map((area, i) => (
              <motion.li
                key={area.n}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, delay: reduceMotion ? 0 : i * 0.05, ease: EASE }}
                className="py-5 border-t border-neutral-200 last:border-b flex gap-4"
              >
                <span className="font-mono text-[22px] leading-none tracking-tight text-[#181818]/35 shrink-0 w-10">
                  {area.n}
                </span>
                <div className="flex flex-col gap-1.5 min-w-0 pt-0.5">
                  <span
                    className="text-[14px] font-bold uppercase tracking-[0.08em] text-[#181818]"
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                  >
                    {area.title}
                  </span>
                  <span className="text-sm text-[#5C5C5C] leading-relaxed">{area.body}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
        <NextCue label="Next" next="06 // Continue" />
      </section>

      {/* LOOKBOOK 06 — Close */}
      <section className="relative w-full min-h-[100cqh] shrink-0 overflow-hidden flex flex-col justify-end snap-start snap-end">
        <img
          src={gymPhotos.architectureRaw}
          alt="United Strength — downtown club"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative z-10 px-6 pb-12 pt-20 text-white flex flex-col gap-8 min-h-[100cqh] justify-end">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col gap-5 max-w-sm"
          >
            <span className="font-mono text-[48px] leading-none tracking-tight text-white/90">
              06
            </span>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/85">
              // Continue
            </h2>
            <p className="text-sm leading-relaxed text-white/70">
              There is no single workout, diet, supplement, medication, or health trend that solves
              everything. The goal isn&apos;t simply to live longer. It&apos;s to live better for
              longer.
            </p>
            <p
              className="text-[22px] leading-snug text-white"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Health isn&apos;t something you achieve. It&apos;s something you continue to build.
            </p>
          </motion.div>
          <div className="border-t border-white/20 pt-4 flex flex-col gap-2">
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/50">
              United Strength Club
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/40">
              237 Cleveland Ave · Columbus, Ohio
            </p>
          </div>
        </div>
      </section>
    </DirectionEPageShell>
  );
}
