import { CONTACT_PAGE, FACILITY_HOURS } from "../../../data/journey-copy";
import {
  LookbookAboutPageShell,
  LookbookPageOpener,
  LookbookScrollReveal,
} from "../lookbook";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

/** Contact — live /contact. Not in overlay; footer destination. */
export default function ContactPage({ onBack, onNav }: PageProps) {
  const c = CONTACT_PAGE;

  return (
    <LookbookAboutPageShell onNav={onNav}>
      <LookbookPageOpener
        title={c.headline}
        lede={c.lede}
        metadata={c.metadata}
        onBack={onBack}
      />

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-20 border-b border-neutral-200/60 bg-white">
        <LookbookScrollReveal className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
              // Visit
            </p>
            <p
              className="text-[18px] leading-snug text-[#181818]"
              style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}
            >
              {c.address}
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#5C5C5C]">
              {c.parking}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C] mb-2">
              // Hours
            </p>
            <ul className="flex flex-col">
              {FACILITY_HOURS.map((row) => (
                <li
                  key={row.label}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-1 py-3 border-t border-neutral-200 first:border-t-0"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C5C5C]">
                    {row.label}
                  </span>
                  <span className="text-[14px] text-[#181818]">{row.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </LookbookScrollReveal>
      </section>

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-16 border-b border-neutral-200/60 bg-[#F3EEE7]">
        <LookbookScrollReveal className="mx-auto max-w-6xl flex flex-col gap-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            // Write
          </p>
          <ul className="flex flex-col max-w-xl">
            {c.emails.map((e) => (
              <li key={e.label} className="py-4 border-t border-neutral-200 first:border-t-0">
                <a
                  href={e.href}
                  className="flex flex-col gap-1 min-h-[44px] justify-center hover:opacity-55 transition-opacity"
                >
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#5C5C5C]">
                    {e.label}
                  </span>
                  <span className="text-[14px] text-[#181818]">{e.display}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={c.instagram.href}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#181818] min-h-[44px] inline-flex items-center border-t border-neutral-200 pt-4 self-start hover:opacity-55 transition-opacity"
          >
            [ {c.instagram.label} ]
          </a>
        </LookbookScrollReveal>
      </section>
    </LookbookAboutPageShell>
  );
}
