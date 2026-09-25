import { MEMBERSHIP_PAGE } from "../../../data/journey-copy";
import {
  LookbookAboutPageShell,
  LookbookPageOpener,
  LookbookScrollReveal,
} from "../lookbook";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

/** Membership — four passport-style tiers with public prices (Copywright). */
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
        <LookbookScrollReveal className="mx-auto max-w-6xl flex flex-col gap-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            01 // Choose Your Membership
          </p>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {c.tiers.map((tier) => (
              <li
                key={`${tier.n}-${tier.subtitle}`}
                className="flex flex-col gap-4 border border-[#181818]/15 bg-[#F3EEE7] p-5 md:p-6 min-h-[44px]"
              >
                <div className="flex items-baseline justify-between gap-3 border-b border-[#181818]/15 pb-3">
                  <span className="font-mono text-[10px] tracking-[0.22em] text-[#5C5C5C]">
                    {tier.n}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C5C5C]">
                    {tier.subtitle}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3
                    className="text-[18px] font-bold uppercase tracking-tight text-[#181818]"
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                  >
                    {tier.name}
                  </h3>
                  <p className="flex items-baseline gap-1">
                    <span
                      className="text-[32px] leading-none tracking-[-0.03em] text-[#181818]"
                      style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}
                    >
                      {tier.price}
                    </span>
                    <span className="font-mono text-[11px] text-[#5C5C5C]">{tier.period}</span>
                  </p>
                </div>
                <p className="text-[14px] leading-relaxed text-[#5C5C5C]">{tier.blurb}</p>
                <ul className="flex flex-col gap-2 border-t border-[#181818]/10 pt-4">
                  <li className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#5C5C5C]">
                    Includes
                  </li>
                  {tier.includes.map((item) => (
                    <li key={item} className="text-[13px] leading-snug text-[#181818]">
                      · {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </LookbookScrollReveal>
      </section>

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-16 border-b border-neutral-200/60 bg-[#F3EEE7]">
        <LookbookScrollReveal className="mx-auto max-w-3xl flex flex-col gap-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            {c.valueProps.n} // {c.valueProps.title}
          </p>
          <ul className="flex flex-col">
            {c.valueProps.rows.map((row) => (
              <li
                key={row.title}
                className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 py-6 border-t border-neutral-200 first:border-t-0"
              >
                <h3
                  className="sm:col-span-4 text-[14px] font-bold uppercase tracking-tight text-[#181818]"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  {row.title}
                </h3>
                <p className="sm:col-span-8 text-[14px] leading-relaxed text-[#5C5C5C]">
                  {row.body}
                </p>
              </li>
            ))}
          </ul>
        </LookbookScrollReveal>
      </section>

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-16 border-b border-neutral-200/60 bg-white">
        <LookbookScrollReveal className="mx-auto max-w-3xl flex flex-col gap-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            {c.ecosystem.n} // {c.ecosystem.title}
          </p>
          <p className="text-[14px] leading-relaxed text-[#5C5C5C] max-w-xl">{c.ecosystem.note}</p>
          <ul className="flex flex-col">
            {c.ecosystem.rows.map((row) => (
              <li key={row.title} className="border-t border-neutral-200 first:border-t-0 py-4">
                {row.status === "live" && row.href ? (
                  <button
                    type="button"
                    onClick={() => onNav(row.href!, row.title)}
                    className="w-full text-left min-h-[44px] group flex flex-col gap-1"
                  >
                    <span
                      className="text-[14px] font-bold uppercase tracking-tight text-[#181818] group-hover:opacity-55 transition-opacity"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      {row.title}
                    </span>
                    <span className="text-[14px] text-[#5C5C5C]">{row.body}</span>
                  </button>
                ) : (
                  <div className="flex flex-col gap-1 min-h-[44px] justify-center opacity-55">
                    <span
                      className="text-[14px] font-bold uppercase tracking-tight text-[#181818]"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      {row.title}
                    </span>
                    <span className="text-[14px] text-[#5C5C5C]">{row.body}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
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
          <p
            className="text-[18px] tracking-[-0.01em] text-[#181818]"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}
          >
            {c.personalTraining.headline}
          </p>
          <button
            type="button"
            onClick={() => onNav(c.personalTraining.href, c.personalTraining.ctaLabel)}
            className="min-h-[44px] inline-flex items-center justify-center self-start px-5 font-mono text-[10px] uppercase tracking-[0.22em] text-white bg-[#0A3C2E] hover:opacity-90 transition-opacity"
          >
            {c.personalTraining.ctaLabel}
          </button>
          <button
            type="button"
            onClick={() => onNav("/start-here/apply", "Apply for Membership")}
            className="min-h-[44px] inline-flex items-center justify-center self-start px-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#181818] hover:opacity-55 transition-opacity"
          >
            [ Apply for Membership ]
          </button>
        </LookbookScrollReveal>
      </section>
    </LookbookAboutPageShell>
  );
}
