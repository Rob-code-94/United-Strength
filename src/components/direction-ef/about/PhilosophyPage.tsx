import { motion, useReducedMotion } from "motion/react";
import {
  PHILOSOPHY_CHAPTERS,
  PHILOSOPHY_EDITORIAL_SECTIONS,
  PHILOSOPHY_HEALTH_AREAS,
} from "../../../data/about-copy";
import {
  LOOKBOOK_EASE,
  LookbookAboutPageShell,
  LookbookEditorialChapter,
  LookbookManifestoSection,
  LookbookNextCue,
  LookbookPageOpener,
  LookbookScrollReveal,
} from "../lookbook";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

/** Philosophy — EF editorial foundation (F off-center + Odd Ritual hairlines). */
export default function PhilosophyPage({ onBack, onNav }: PageProps) {
  const reduceMotion = useReducedMotion();
  const { hero, manifesto, place, practice, fourAreas, continue: closing } =
    PHILOSOPHY_CHAPTERS;

  return (
    <LookbookAboutPageShell onNav={onNav}>
      <LookbookPageOpener
        title={hero.headline ?? hero.title}
        lede={hero.lede ?? ""}
        metadata={hero.metadata ?? "( Philosophy )"}
        onBack={onBack}
      />

      {PHILOSOPHY_EDITORIAL_SECTIONS.map((section) => {
        if (section.key === "manifesto") {
          return (
            <LookbookManifestoSection
              key={section.key}
              n={manifesto.n}
              title={manifesto.title}
              headline={manifesto.headline}
              body={manifesto.body}
              tone={section.tone}
              next={section.next}
            />
          );
        }

        if (section.key === "fourAreas") {
          return (
            <section
              key={section.key}
              className="box-border w-full px-5 py-14 md:px-8 md:py-20 border-b border-neutral-200/60 bg-[#F3EEE7]"
              aria-label={`${fourAreas.n} ${fourAreas.title}`}
            >
              <LookbookScrollReveal className="mx-auto max-w-6xl flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <span
                    className="font-mono text-[3.5rem] sm:text-[4.5rem] leading-none tracking-tight text-[#181818]/15"
                    aria-hidden
                  >
                    {fourAreas.n}
                  </span>
                  {fourAreas.metadata ? (
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5C5C]">
                      {fourAreas.metadata}
                    </p>
                  ) : null}
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
                    // {fourAreas.title}
                  </p>
                </div>
                <ul className="flex flex-col">
                  {PHILOSOPHY_HEALTH_AREAS.map((area, i) => (
                    <motion.li
                      key={area.n}
                      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        duration: 0.55,
                        delay: reduceMotion ? 0 : i * 0.05,
                        ease: LOOKBOOK_EASE,
                      }}
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
              </LookbookScrollReveal>
              {section.next ? (
                <div className="mx-auto max-w-6xl mt-10">
                  <LookbookNextCue next={section.next} />
                </div>
              ) : null}
            </section>
          );
        }

        if (section.key === "hero") {
          return (
            <LookbookEditorialChapter
              key={section.key}
              n={hero.n}
              title={hero.title}
              metadata={hero.metadata}
              image={section.image}
              imageAlt={section.imageAlt}
              align={section.align}
              tone={section.tone}
              next={section.next}
            />
          );
        }

        if (section.key === "place") {
          return (
            <LookbookEditorialChapter
              key={section.key}
              n={place.n}
              title={place.title}
              metadata={place.metadata}
              body={place.body}
              quote={place.quote}
              image={section.image}
              imageAlt={section.imageAlt}
              align={section.align}
              tone={section.tone}
              next={section.next}
            />
          );
        }

        if (section.key === "practice") {
          return (
            <LookbookEditorialChapter
              key={section.key}
              n={practice.n}
              title={practice.title}
              body={practice.lede}
              image={section.image}
              imageAlt={section.imageAlt}
              align={section.align}
              tone={section.tone}
              next={section.next}
            />
          );
        }

        if (section.key === "continue") {
          return (
            <LookbookEditorialChapter
              key={section.key}
              n={closing.n}
              title={closing.title}
              body={closing.body}
              headline={closing.headline}
              image={section.image}
              imageAlt={section.imageAlt}
              align={section.align}
              tone={section.tone}
            />
          );
        }

        return null;
      })}
    </LookbookAboutPageShell>
  );
}
