import { MEMBERSHIP_PAGE } from "../../../data/journey-copy";
import {
  V1_MEMBERSHIP_COMPARE,
  V1_MEMBERSHIP_EXPERIENCE_JOIN,
} from "../../../data/v1-interior-copy";
import NumberTicker from "../NumberTicker";
import {
  V1BackButton,
  V1Display,
  V1Heading,
  V1InteriorShell,
  V1Kicker,
  V1NavButton,
  V1Section,
} from "./V1Interior";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

/** Counts on mount, then holds the landing number. */
const TICKER_SECONDS = 10;

const PRICE_CLASS =
  "font-sans text-[56px] font-bold leading-none tracking-[-0.05em] text-[#F3EEE7] tabular-nums md:text-[72px]";

const JOIN_CLASS =
  "font-sans text-[28px] font-bold uppercase leading-none tracking-[-0.04em] tabular-nums";

export default function V1MembershipPage({ onBack, onNav }: PageProps) {
  const c = MEMBERSHIP_PAGE;
  const join = V1_MEMBERSHIP_EXPERIENCE_JOIN;

  return (
    <V1InteriorShell onNav={onNav}>
      <section className="relative border-b border-white/10 px-5 pb-16 pt-24 md:px-10 md:pb-24 md:pt-28">
        <V1BackButton onBack={onBack} />
        <div className="mx-auto max-w-6xl">
          <V1Kicker>{c.metadata}</V1Kicker>
          <V1Display className="mt-6">{c.headline}</V1Display>
          <p className="mt-6 max-w-md text-[18px] leading-snug text-[#F3EEE7]/85">
            Four memberships.
            <br />
            Different ways to train.
            <br />
            One United.
          </p>
        </div>
      </section>

      <V1Section label="01 // Choose Your Membership">
        <V1Kicker>01 // Choose Your Membership</V1Kicker>
        <ul className="mt-4 border-t border-white/15">
          {c.tiers.map((tier) => (
            <li
              key={`${tier.n}-${tier.subtitle}`}
              className="grid gap-6 border-b border-white/15 py-10 md:grid-cols-12 md:items-start md:gap-10"
            >
              <div className="md:col-span-4">
                <p className="font-mono text-[12px] tracking-[0.28em] text-[var(--v1-highlight)]">{tier.n}</p>
                <p className={`mt-3 ${PRICE_CLASS}`} style={{ fontFamily: "'Satoshi', sans-serif" }}>
                  <NumberTicker
                    end={Number(tier.price.replace(/\D/g, ""))}
                    prefix="$"
                    immediate
                    duration={TICKER_SECONDS}
                  />
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#F3EEE7]/55">{tier.period}</p>
              </div>
              <div className="border-t border-white/10 pt-6 md:col-span-8 md:border-t-0 md:pt-0">
                <p
                  className="font-sans text-[22px] font-bold uppercase tracking-[-0.03em]"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  {tier.name}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#F3EEE7]/60">{tier.subtitle}</p>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#F3EEE7]/80">{tier.blurb}</p>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-[#F3EEE7]/45">Includes</p>
                <ul className="mt-3 grid gap-x-8 gap-y-1 sm:grid-cols-2">
                  {tier.includes.map((item) => (
                    <li key={item} className="border-b border-white/10 py-2 text-[14px] text-[#F3EEE7]/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </V1Section>

      <V1Section label={c.valueProps.title}>
        <V1Kicker>
          {c.valueProps.n} // {c.valueProps.title}
        </V1Kicker>
        <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {c.valueProps.rows.map((row) => (
            <li key={row.title} className="grid gap-2 py-6 md:grid-cols-12">
              <h3 className="font-sans text-[16px] font-bold uppercase tracking-[-0.02em] md:col-span-4" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                {row.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#F3EEE7]/80 md:col-span-8">{row.body}</p>
            </li>
          ))}
        </ul>
      </V1Section>

      <V1Section className="bg-[#181818]" label={c.ecosystem.title}>
        <V1Kicker>
          {c.ecosystem.n} // {c.ecosystem.title}
        </V1Kicker>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#F3EEE7]/75">{c.ecosystem.note}</p>
        <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {c.ecosystem.rows.map((row) => (
            <li key={row.title} className="flex min-h-[44px] flex-col gap-1 py-5 md:flex-row md:items-baseline md:justify-between">
              {row.href ? (
                <button type="button" onClick={() => onNav(row.href, row.title)} className="min-h-[44px] text-left font-sans text-[16px] font-bold uppercase tracking-[-0.02em]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                  {row.title} →
                </button>
              ) : (
                <span className="font-sans text-[16px] font-bold uppercase tracking-[-0.02em]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                  {row.title}
                </span>
              )}
              <span className="text-[14px] text-[#F3EEE7]/70 md:max-w-md md:text-right">{row.body}</span>
            </li>
          ))}
        </ul>
      </V1Section>

      <V1Section label="04 // Compare">
        <V1Kicker>04 // Compare</V1Kicker>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/15">
                <th className="py-3 pr-4 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-[#F3EEE7]/45" />
                {V1_MEMBERSHIP_COMPARE.headers.map((header) => (
                  <th key={header} className="px-2 py-3 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#F3EEE7]/70">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {V1_MEMBERSHIP_COMPARE.rows.map((row) => (
                <tr key={row.label} className="border-b border-white/10">
                  <th className="py-4 pr-4 font-sans text-[13px] font-bold uppercase tracking-[-0.02em]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                    {row.label}
                  </th>
                  {row.marks.map((mark, index) => (
                    <td key={`${row.label}-${V1_MEMBERSHIP_COMPARE.headers[index]}`} className="px-2 py-4 text-center font-mono text-[14px]">
                      {mark ? "✓" : ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </V1Section>

      <V1Section label="05 // How to Join">
        <V1Kicker>05 // How to Join</V1Kicker>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] text-[#F3EEE7]/55">{join.n} // {join.title}</p>
            <ul className="mt-4 flex flex-col gap-1">
              {join.lines.map((line) => {
                const matched = line.match(/^(\$?)(\d+)\s*(.*)$/);
                if (!matched) {
                  return (
                    <li key={line} className={JOIN_CLASS} style={{ fontFamily: "'Satoshi', sans-serif" }}>
                      {line}
                    </li>
                  );
                }
                const prefix = matched[1] ?? "";
                const end = Number(matched[2] ?? "0");
                const rest = matched[3] ?? "";
                return (
                  <li key={line} className={JOIN_CLASS} style={{ fontFamily: "'Satoshi', sans-serif" }}>
                    <NumberTicker end={end} prefix={prefix} immediate duration={TICKER_SECONDS} />
                    {rest ? ` ${rest}` : null}
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 text-[15px] leading-relaxed text-[#F3EEE7]/80">{join.body}</p>
            <div className="mt-4">
              <V1NavButton label="Experience United →" href="/start-here/experience" onNav={onNav} />
            </div>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] text-[#F3EEE7]/55">02 // Apply for Membership</p>
            <V1Heading className="mt-4 text-[24px] md:text-[28px]">Already know you're ready?</V1Heading>
            <p className="mt-4 text-[15px] leading-relaxed text-[#F3EEE7]/80">
              Apply for membership and we'll learn a little more about what you're looking for and help determine the best place to start.
            </p>
            <div className="mt-4">
              <V1NavButton forest label="Apply for Membership →" href="/start-here/apply" onNav={onNav} />
            </div>
          </div>
        </div>
      </V1Section>

      <V1Section>
        <V1Heading className="text-[22px] md:text-[28px]">{c.personalTraining.headline}</V1Heading>
        <div className="mt-4">
          <V1NavButton label={`${c.personalTraining.ctaLabel} →`} href={c.personalTraining.href} onNav={onNav} />
        </div>
      </V1Section>
    </V1InteriorShell>
  );
}
