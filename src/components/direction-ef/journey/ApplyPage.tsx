import { APPLY_MEMBERSHIP } from "../../../data/journey-copy";
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

/** Apply for Membership — live become-a-member (mailto draft; no prices). */
export default function ApplyPage({ onBack, onNav }: PageProps) {
  const c = APPLY_MEMBERSHIP;

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
        <LookbookScrollReveal className="mx-auto max-w-xl flex flex-col gap-6">
          <LookbookStaggerBody paragraphs={c.body} />
        </LookbookScrollReveal>
      </section>

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-16 border-b border-neutral-200/60 bg-[#F3EEE7]">
        <LookbookScrollReveal className="mx-auto max-w-6xl flex flex-col gap-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C] mb-4">
            // How it works
          </p>
          <ul className="flex flex-col max-w-3xl">
            {c.steps.map((step) => (
              <li
                key={step.n}
                className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 py-5 border-t border-neutral-200 first:border-t-0"
              >
                <span className="sm:col-span-2 font-mono text-[10px] tracking-widest text-[#5C5C5C]">
                  {step.n}
                </span>
                <div className="sm:col-span-10 flex flex-col gap-1">
                  <span
                    className="text-[14px] font-bold uppercase tracking-tight text-[#181818]"
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                  >
                    {step.title}
                  </span>
                  <span className="text-[14px] leading-relaxed text-[#5C5C5C]">{step.body}</span>
                </div>
              </li>
            ))}
          </ul>
        </LookbookScrollReveal>
      </section>

      <section className="box-border w-full px-5 py-12 md:px-8 md:py-14 border-b border-neutral-200/60 bg-white">
        <LookbookScrollReveal className="mx-auto max-w-xl flex flex-col sm:flex-row flex-wrap gap-3">
          <a
            href={c.mailto}
            className="min-h-[44px] inline-flex items-center justify-center px-5 font-mono text-[10px] uppercase tracking-[0.22em] text-white bg-[#0A3C2E] hover:opacity-90 transition-opacity"
          >
            {c.mailtoLabel}
          </a>
          <button
            type="button"
            onClick={() => onNav(c.experienceHref, "Experience United")}
            className="min-h-[44px] inline-flex items-center justify-center px-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#181818] hover:opacity-55 transition-opacity"
          >
            [ Experience United first ]
          </button>
        </LookbookScrollReveal>
      </section>
    </LookbookAboutPageShell>
  );
}
