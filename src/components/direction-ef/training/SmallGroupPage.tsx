import { SMALL_GROUP, TRAINING_CTA } from "../../../data/training-copy";
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

/** Small Group — ruled format index (draft). */
export default function SmallGroupPage({ onBack, onNav }: PageProps) {
  const c = SMALL_GROUP;

  return (
    <LookbookAboutPageShell onNav={onNav}>
      <LookbookPageOpener
        title={c.headline}
        lede={c.lede}
        metadata={c.metadata}
        onBack={onBack}
        tone="alabaster"
      />

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-20 border-b border-neutral-200/60 bg-white">
        <LookbookScrollReveal className="mx-auto max-w-6xl flex flex-col gap-8">
          <div className="flex flex-col gap-2 max-w-xl">
            <span
              className="font-mono text-[3.5rem] sm:text-[4.5rem] leading-none tracking-tight text-[#181818]/15"
              aria-hidden
            >
              {c.n}
            </span>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
              // {c.title}
            </p>
            <LookbookStaggerBody paragraphs={c.body} />
          </div>

          <ul className="flex flex-col max-w-3xl mt-4">
            {c.formatRows.map((row) => (
              <li
                key={row.label}
                className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 py-4 border-t border-neutral-200 first:border-t-0"
              >
                <span className="sm:col-span-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5C5C] pt-0.5">
                  {row.label}
                </span>
                <span className="sm:col-span-9 text-[14px] leading-relaxed text-[#181818]">
                  {row.value}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-neutral-200 pt-6">
            <a
              href={TRAINING_CTA.inquireHref}
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0A3C2E] min-h-[44px] inline-flex items-center hover:opacity-55 transition-opacity"
            >
              [ {TRAINING_CTA.inquireLabel} ]
            </a>
            <button
              type="button"
              onClick={() => onNav(TRAINING_CTA.applyHref, TRAINING_CTA.applyLabel)}
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#181818] min-h-[44px] inline-flex items-center hover:opacity-55 transition-opacity"
            >
              [ Apply ]
            </button>
          </div>
        </LookbookScrollReveal>
      </section>
    </LookbookAboutPageShell>
  );
}
