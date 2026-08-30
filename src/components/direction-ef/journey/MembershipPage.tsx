import { MEMBERSHIP_PAGE } from "../../../data/journey-copy";
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

/** Membership — live pricing rewritten; belonging, no public prices. */
export default function MembershipPage({ onBack, onNav }: PageProps) {
  const c = MEMBERSHIP_PAGE;

  return (
    <LookbookAboutPageShell onNav={onNav}>
      <LookbookPageOpener
        title={c.headline}
        lede={c.lede}
        metadata={c.metadata}
        onBack={onBack}
      />

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-20 border-b border-neutral-200/60 bg-white">
        <LookbookScrollReveal className="mx-auto max-w-xl flex flex-col gap-6">
          <LookbookStaggerBody paragraphs={c.body} />
        </LookbookScrollReveal>
      </section>

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-16 border-b border-neutral-200/60 bg-[#F3EEE7]">
        <LookbookScrollReveal className="mx-auto max-w-6xl flex flex-col gap-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            // How to join
          </p>
          <ul className="flex flex-col max-w-3xl">
            {c.howToJoin.map((step) => (
              <li key={step.n} className="border-t border-neutral-200 first:border-t-0 py-5">
                <button
                  type="button"
                  onClick={() => onNav(step.href, step.title)}
                  className="w-full grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 text-left min-h-[44px] group"
                >
                  <span className="sm:col-span-2 font-mono text-[10px] tracking-widest text-[#5C5C5C]">
                    {step.n}
                  </span>
                  <div className="sm:col-span-10 flex flex-col gap-1">
                    <span
                      className="text-[14px] font-bold uppercase tracking-tight text-[#181818] group-hover:opacity-55 transition-opacity"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      {step.title}
                    </span>
                    <span className="text-[14px] leading-relaxed text-[#5C5C5C]">{step.body}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </LookbookScrollReveal>
      </section>

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-16 border-b border-neutral-200/60 bg-white">
        <LookbookScrollReveal className="mx-auto max-w-xl flex flex-col gap-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            // Included
          </p>
          <ul className="flex flex-col">
            {c.perks.map((perk) => (
              <li
                key={perk}
                className="py-3 border-t border-neutral-200 first:border-t-0 text-[14px] text-[#181818] leading-relaxed"
              >
                {perk}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => onNav("/start-here/apply", "Apply for Membership")}
            className="mt-4 min-h-[44px] inline-flex items-center justify-center self-start px-5 font-mono text-[10px] uppercase tracking-[0.22em] text-white bg-[#0A3C2E] hover:opacity-90 transition-opacity"
          >
            Apply for Membership
          </button>
        </LookbookScrollReveal>
      </section>
    </LookbookAboutPageShell>
  );
}
