import {
  ONE_ON_ONE,
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

/** 1-on-1 Coaching — story-led PT. Source: /personal-training */
export default function OneOnOnePage({ onBack, onNav }: PageProps) {
  const c = ONE_ON_ONE;

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
              {c.n}
            </span>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
              // {c.title}
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 flex flex-col gap-6">
            <p
              className="text-[1.5rem] sm:text-[1.85rem] leading-snug text-[#181818]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {PERSONAL_TRAINING_HUB.lede}
            </p>
            <LookbookStaggerBody paragraphs={c.body} />
          </div>
        </LookbookScrollReveal>
      </section>

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-16 border-b border-neutral-200/60 bg-[#F3EEE7]">
        <LookbookScrollReveal className="mx-auto max-w-6xl flex flex-col gap-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            // Coaches
          </p>
          <ul className="flex flex-col max-w-2xl">
            {PERSONAL_TRAINING_HUB.coachCues.map((coach) => (
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

      <section className="box-border w-full px-5 py-12 md:px-8 md:py-14 border-b border-neutral-200/60 bg-white">
        <LookbookScrollReveal className="mx-auto max-w-6xl flex flex-wrap gap-x-6 gap-y-2">
          <a
            href={TRAINING_CTA.inquireHref}
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0A3C2E] min-h-[44px] inline-flex items-center hover:opacity-55 transition-opacity"
          >
            [ {TRAINING_CTA.inquireLabel} ]
          </a>
          <button
            type="button"
            onClick={() => onNav(TRAINING_CTA.experienceHref, TRAINING_CTA.experienceLabel)}
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#181818] min-h-[44px] inline-flex items-center hover:opacity-55 transition-opacity"
          >
            [ {TRAINING_CTA.experienceLabel} ]
          </button>
        </LookbookScrollReveal>
      </section>
    </LookbookAboutPageShell>
  );
}
