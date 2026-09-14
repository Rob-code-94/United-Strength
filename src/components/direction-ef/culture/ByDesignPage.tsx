import { BY_DESIGN } from "../../../data/culture-copy";
import {
  LookbookAboutPageShell,
  LookbookManifestoSection,
  LookbookPageOpener,
  LookbookScrollReveal,
} from "../lookbook";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

/**
 * By Design — Culture leaf (Sep 2026). Intention behind the experience.
 * Contrast: About / The Space = environment; By Design = why it feels that way.
 * DNA: Cultivated manifesto / about-us-13. Wave 1 shell — polish after Todd.
 */
export default function ByDesignPage({ onBack, onNav }: PageProps) {
  const c = BY_DESIGN;

  return (
    <LookbookAboutPageShell onNav={onNav}>
      <LookbookPageOpener
        title={c.headline}
        lede={c.lede}
        metadata={c.metadata}
        onBack={onBack}
      />

      <LookbookManifestoSection
        n={c.manifesto.n}
        title={c.manifesto.title}
        headline={c.manifesto.headline}
        body={c.manifesto.body}
        tone="white"
      />

      <section
        className="box-border w-full border-b border-neutral-200/60 bg-[#F3EEE7]"
        aria-label={`${c.quote.n} ${c.quote.title}`}
      >
        <LookbookScrollReveal className="px-5 md:px-8 py-16 md:py-24">
          <div className="mx-auto max-w-3xl flex flex-col gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#5C5C5C]">
              {c.quote.n} // {c.quote.title}
            </p>
            <blockquote
              className="text-[1.5rem] sm:text-[2rem] leading-snug text-[#181818] italic"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              &ldquo;{c.quote.text}&rdquo;
            </blockquote>
          </div>
        </LookbookScrollReveal>
      </section>

      <section
        className="box-border w-full px-5 py-14 md:px-8 md:py-20 border-b border-neutral-200/60 bg-white"
        aria-label={`${c.principles.n} ${c.principles.title}`}
      >
        <LookbookScrollReveal className="mx-auto max-w-6xl flex flex-col gap-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            {c.principles.n} // {c.principles.title}
          </p>

          <ul className="flex flex-col border-t border-neutral-200">
            {c.principles.rows.map((row) => (
              <li
                key={row.n}
                className="grid grid-cols-12 gap-3 py-7 border-b border-neutral-200"
              >
                <span className="col-span-2 sm:col-span-1 font-mono text-[10px] tracking-widest text-[#5C5C5C] pt-1">
                  {row.n}
                </span>
                <div className="col-span-10 sm:col-span-11 flex flex-col gap-2 md:grid md:grid-cols-12 md:gap-6">
                  <h3
                    className="md:col-span-4 text-[15px] font-bold tracking-tight text-[#181818]"
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                  >
                    {row.title}
                  </h3>
                  <p className="md:col-span-8 text-[15px] leading-relaxed text-[#5C5C5C]">
                    {row.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </LookbookScrollReveal>
      </section>
    </LookbookAboutPageShell>
  );
}
