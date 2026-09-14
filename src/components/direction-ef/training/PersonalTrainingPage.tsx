import { gymPhotos } from "../../../assets/images/gym";
import {
  PERSONAL_TRAINING_HUB,
  TRAINING_CTA,
} from "../../../data/training-copy";
import {
  LookbookAboutPageShell,
  LookbookPageOpener,
  LookbookScrollReveal,
  LookbookStaggerBody,
} from "../lookbook";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

/**
 * Personal Training hub — Sep 2026 single Coaching leaf.
 * Story-led: hub lede → 1:1 + private group beats → coaches → inquire.
 * No prices · no Buy / Reserve / Book chrome.
 * Legacy aliases: /training/personal/1-on-1|small-group|private-group
 */
export default function PersonalTrainingPage({ onBack, onNav }: PageProps) {
  const c = PERSONAL_TRAINING_HUB;

  return (
    <LookbookAboutPageShell onNav={onNav}>
      <LookbookPageOpener
        title={c.headline}
        lede={c.lede}
        metadata={c.metadata}
        onBack={onBack}
      />

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-24 border-b border-neutral-200/60 bg-white">
        <LookbookScrollReveal className="mx-auto max-w-6xl grid grid-cols-12 gap-y-8 md:gap-x-8">
          <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
            <span
              className="font-mono text-[3.5rem] sm:text-[5rem] leading-none tracking-tight text-[#181818]/15"
              aria-hidden
            >
              01
            </span>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
              // Coaching
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 flex flex-col gap-6">
            <LookbookStaggerBody paragraphs={c.body} />
          </div>
        </LookbookScrollReveal>
      </section>

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-20 border-b border-neutral-200/60 bg-[#F3EEE7]">
        <LookbookScrollReveal className="mx-auto max-w-6xl flex flex-col gap-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            02 // How you train
          </p>

          <ul className="flex flex-col border-t border-neutral-200">
            {[c.oneOnOne, c.privateGroup].map((beat) => (
              <li
                key={beat.n}
                className="grid grid-cols-12 gap-3 py-8 border-b border-neutral-200"
              >
                <span className="col-span-2 sm:col-span-1 font-mono text-[10px] tracking-widest text-[#5C5C5C] pt-1">
                  {beat.n}
                </span>
                <div className="col-span-10 sm:col-span-11 flex flex-col gap-3 md:grid md:grid-cols-12 md:gap-6">
                  <div className="md:col-span-4 flex flex-col gap-2">
                    <h3
                      className="text-[15px] font-bold tracking-tight text-[#181818]"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      {beat.title}
                    </h3>
                    <p
                      className="text-[1.15rem] sm:text-[1.35rem] leading-snug text-[#181818]"
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      {beat.headline}
                    </p>
                  </div>
                  <div className="md:col-span-8">
                    <LookbookStaggerBody paragraphs={beat.body} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </LookbookScrollReveal>
      </section>

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-16 border-b border-neutral-200/60 bg-white">
        <LookbookScrollReveal className="mx-auto max-w-6xl flex flex-col gap-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            03 // Coaches
          </p>
          <ul className="flex flex-col max-w-2xl">
            {c.coachCues.map((coach) => (
              <li
                key={coach.name}
                className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 py-4 border-t border-neutral-200 first:border-t-0"
              >
                <span className="sm:col-span-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#181818]">
                  {coach.name}
                </span>
                <span className="sm:col-span-8 text-[13px] text-[#5C5C5C] leading-relaxed">
                  {coach.role} · {coach.note}
                </span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => onNav(TRAINING_CTA.teamHref, TRAINING_CTA.teamLabel)}
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#181818] min-h-[44px] inline-flex items-center self-start hover:opacity-55 transition-opacity border-t border-neutral-200 pt-4 mt-2"
          >
            [ {TRAINING_CTA.teamLabel} ]
          </button>
        </LookbookScrollReveal>
      </section>

      <section
        className="relative box-border w-full min-h-[50vh] flex flex-col justify-end border-b border-neutral-200/60 overflow-hidden"
        aria-label="Inquire"
      >
        <img
          src={gymPhotos.architectureRaw}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.78) 100%)",
          }}
        />
        <LookbookScrollReveal className="relative z-10 px-5 md:px-8 py-14 md:py-16 mx-auto max-w-6xl w-full flex flex-col gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
            ( Inquire )
          </p>
          <p
            className="text-[1.5rem] sm:text-[2rem] leading-snug text-white max-w-md"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Ready to train with a coach.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
            <a
              href={TRAINING_CTA.inquireHref}
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-white min-h-[44px] inline-flex items-center hover:opacity-70 transition-opacity"
            >
              [ {TRAINING_CTA.inquireLabel} ]
            </a>
            <button
              type="button"
              onClick={() =>
                onNav(TRAINING_CTA.experienceHref, TRAINING_CTA.experienceLabel)
              }
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/85 min-h-[44px] inline-flex items-center hover:opacity-70 transition-opacity"
            >
              [ {TRAINING_CTA.experienceLabel} ]
            </button>
          </div>
        </LookbookScrollReveal>
      </section>
    </LookbookAboutPageShell>
  );
}
