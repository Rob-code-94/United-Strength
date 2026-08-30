import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { teamPhotos } from "../../../assets/images/team";
import { TEAM_INTRO, TEAM_MEMBERS } from "../../../data/about-copy";
import {
  LOOKBOOK_EASE,
  LookbookAboutPageShell,
  LookbookPageOpener,
  LookbookTeamPortrait,
} from "../lookbook";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

const PORTRAIT_BY_ID: Record<string, { src: string; darkBand?: boolean }> = {
  "todd-johnson": { src: teamPhotos.toddJohnson },
  "jenna-farkas": { src: teamPhotos.jennaFarkas },
  "jason-katz": { src: teamPhotos.jasonKatz },
  "kara-shaffer": { src: teamPhotos.karaShaffer },
};

/**
 * Meet the Team — alternating portrait rows (already distinct from Philosophy).
 * Portrait flips left/right; no Apply CTA.
 */
export default function TeamPage({ onBack, onNav }: PageProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <LookbookAboutPageShell onNav={onNav}>
      <LookbookPageOpener
        title="Meet the Coaches"
        lede={TEAM_INTRO.lede}
        metadata="( Practitioners )"
        onBack={onBack}
      />

      <section className="flex flex-col border-b border-neutral-200/60">
        {TEAM_MEMBERS.map((coach, i) => {
          const open = expandedId === coach.id;
          const portrait = PORTRAIT_BY_ID[coach.id] ?? {
            src: teamPhotos.toddJohnson,
          };
          const tone = i % 2 === 0 ? "bg-white" : "bg-[#F3EEE7]";
          const portraitLeft = i % 2 === 0;
          const n = String(i + 1).padStart(2, "0");

          return (
            <motion.article
              key={coach.id}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: reduceMotion ? 0 : i * 0.05,
                ease: LOOKBOOK_EASE,
              }}
              className={`px-5 md:px-8 py-10 md:py-14 border-t border-neutral-200/80 first:border-t-0 ${tone}`}
            >
              <div
                className={`mx-auto max-w-6xl flex flex-col md:flex-row gap-6 md:gap-10 items-start ${
                  portraitLeft ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="w-full md:w-[42%] shrink-0">
                  <LookbookTeamPortrait
                    src={portrait.src}
                    alt={coach.name}
                    darkBand={portrait.darkBand}
                  />
                </div>
                <div className="flex flex-col min-w-0 flex-1 pt-1">
                  <span className="font-mono text-[2.5rem] leading-none tracking-tight text-[#181818]/12">
                    {n}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#5C5C5C] mt-3">
                    ( Coach )
                  </span>
                  <h3
                    className="text-xl md:text-2xl tracking-tight text-[#181818] mt-1"
                    style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}
                  >
                    {coach.name}
                  </h3>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#5C5C5C] mt-1">
                    {coach.role} · {coach.specialty}
                  </span>
                  <p className="text-[13px] text-[#5C5C5C] mt-4 leading-relaxed max-w-sm">
                    {coach.lede}
                  </p>
                  <button
                    type="button"
                    onClick={() => setExpandedId(open ? null : coach.id)}
                    className="mt-4 font-mono text-[9px] uppercase tracking-wider text-[#181818] flex items-center gap-1 self-start min-h-[44px]"
                  >
                    {open ? "Hide" : "Bio"}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-[12px] text-[#5C5C5C] leading-relaxed border-t border-neutral-200/80 max-w-md">
                          {coach.bio}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>
    </LookbookAboutPageShell>
  );
}
