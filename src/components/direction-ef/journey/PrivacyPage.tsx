import { PRIVACY_PAGE } from "../../../data/journey-copy";
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
 * Privacy Policy — lookbook shell for Todd / counsel review.
 * SMS/Twilio fields remain editable placeholders until Mariana handoff.
 */
export default function PrivacyPage({ onBack, onNav }: PageProps) {
  const c = PRIVACY_PAGE;

  return (
    <LookbookAboutPageShell onNav={onNav}>
      <LookbookPageOpener
        title={c.headline}
        lede={c.lede}
        metadata={c.metadata}
        onBack={onBack}
      />

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-20 border-b border-neutral-200/60 bg-white">
        <LookbookScrollReveal className="mx-auto max-w-3xl flex flex-col gap-10">
          <LookbookStaggerBody paragraphs={c.intro} />

          <ul className="flex flex-col border-t border-neutral-200">
            {c.sections.map((row, i) => {
              const n = String(i + 1).padStart(2, "0");
              return (
                <li
                  key={row.title}
                  className="grid grid-cols-12 gap-3 py-7 border-b border-neutral-200"
                >
                  <span className="col-span-2 sm:col-span-1 font-mono text-[10px] tracking-widest text-[#5C5C5C] pt-1">
                    {n}
                  </span>
                  <div className="col-span-10 sm:col-span-11 flex flex-col gap-2">
                    <h2
                      className="text-[15px] tracking-[-0.01em] text-[#181818]"
                      style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}
                    >
                      {row.title}
                    </h2>
                    <p className="text-[14px] leading-relaxed text-[#5C5C5C] max-w-xl">
                      {row.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-neutral-200 pt-6">
            <button
              type="button"
              onClick={() => onNav("/terms", "Terms")}
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#181818] min-h-[44px] inline-flex items-center hover:opacity-55 transition-opacity"
            >
              [ Terms of Use ]
            </button>
            <button
              type="button"
              onClick={() => onNav("/contact", "Contact")}
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#181818] min-h-[44px] inline-flex items-center hover:opacity-55 transition-opacity"
            >
              [ Contact ]
            </button>
          </div>
        </LookbookScrollReveal>
      </section>
    </LookbookAboutPageShell>
  );
}
