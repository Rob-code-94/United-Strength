import { gymPhotos } from "../../../assets/images/gym";
import { EXPERIENCE_UNITED } from "../../../data/journey-copy";
import {
  LookbookAboutPageShell,
  LookbookCountUp,
  LookbookPageOpener,
  LookbookScrollReveal,
  LookbookStaggerBody,
} from "../lookbook";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

/**
 * Experience United — free trial / tour.
 * Photo-led intro + about-us-13 CountUp stats (5 · 14 · $75); click replays.
 */
export default function ExperiencePage({ onBack, onNav }: PageProps) {
  const c = EXPERIENCE_UNITED;

  return (
    <LookbookAboutPageShell onNav={onNav}>
      <LookbookPageOpener
        title={c.headline}
        lede={c.lede}
        metadata={c.metadata}
        onBack={onBack}
      />

      <section
        className="relative box-border w-full min-h-[52vh] md:min-h-[58vh] border-b border-neutral-200/60 overflow-hidden"
        aria-label="Experience United intro"
      >
        <img
          src={gymPhotos.experienceBroll}
          alt="Experience United — STRONGER mural"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.72) 100%)",
          }}
        />

        <div className="relative z-10 flex min-h-[52vh] md:min-h-[58vh] flex-col justify-end px-5 md:px-8 py-10 md:py-14 mx-auto max-w-6xl">
          <LookbookScrollReveal className="flex flex-col gap-6 md:gap-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/65">
              // Intro framing
            </p>

            <div className="flex flex-nowrap items-end justify-between gap-0 w-full">
              {c.stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-1 flex-col gap-1.5 sm:gap-2 min-w-0 ${
                    i < c.stats.length - 1 ? "border-r border-white/20" : ""
                  } ${i === 0 ? "pr-3 sm:pr-8 md:pr-14" : ""} ${
                    i === 1 ? "px-3 sm:px-8 md:px-14" : ""
                  } ${i === 2 ? "pl-3 sm:pl-8 md:pl-14" : ""}`}
                >
                  <LookbookCountUp
                    value={s.n}
                    delay={i * 0.12}
                    className="font-mono text-[2.5rem] sm:text-[4.5rem] md:text-[5.5rem] leading-none tracking-tight text-white hover:opacity-85 transition-opacity min-h-[44px]"
                  />
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-white/70">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/45">
              Tap a figure to replay
            </p>
          </LookbookScrollReveal>
        </div>
      </section>

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-20 border-b border-neutral-200/60 bg-white">
        <LookbookScrollReveal className="mx-auto max-w-xl flex flex-col gap-6">
          <LookbookStaggerBody paragraphs={c.body} />
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#5C5C5C]/80 border-t border-neutral-200 pt-4">
            {c.statsNote}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
            <a
              href={c.ctaPrimary.href}
              className="min-h-[44px] inline-flex items-center justify-center px-5 font-mono text-[10px] uppercase tracking-[0.22em] text-white bg-[#0A3C2E] hover:opacity-90 transition-opacity"
            >
              {c.ctaPrimary.label}
            </a>
            <button
              type="button"
              onClick={() => onNav(c.ctaSecondary.href, c.ctaSecondary.label)}
              className="min-h-[44px] inline-flex items-center justify-center px-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#181818] hover:opacity-55 transition-opacity"
            >
              [ {c.ctaSecondary.label} ]
            </button>
          </div>
        </LookbookScrollReveal>
      </section>
    </LookbookAboutPageShell>
  );
}
