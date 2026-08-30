import { BALANCE_CLASS } from "../../../data/training-copy";
import {
  LookbookAboutPageShell,
  LookbookPageOpener,
  LookbookScrollReveal,
} from "../lookbook";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

/** BALANCE — Coming Soon sparse manifesto. No schedule, no fake CTA. */
export default function BalancePage({ onBack, onNav }: PageProps) {
  const c = BALANCE_CLASS;

  return (
    <LookbookAboutPageShell onNav={onNav}>
      <LookbookPageOpener
        title={c.headline}
        lede={c.lede}
        metadata={c.metadata}
        onBack={onBack}
      />

      <section className="box-border w-full px-5 py-16 md:px-8 md:py-24 border-b border-neutral-200/60 bg-[#F3EEE7]">
        <LookbookScrollReveal className="mx-auto max-w-6xl grid grid-cols-12 gap-y-8">
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
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5C5C]/70">
              {c.metadata}
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6 flex flex-col gap-6">
            {c.body.map((p) => (
              <p key={p} className="text-[15px] leading-relaxed text-[#5C5C5C] max-w-md">
                {p}
              </p>
            ))}
          </div>
        </LookbookScrollReveal>
      </section>
    </LookbookAboutPageShell>
  );
}
