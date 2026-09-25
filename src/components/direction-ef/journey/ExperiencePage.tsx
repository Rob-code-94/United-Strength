import { gymPhotos } from "../../../assets/images/gym";
import { EXPERIENCE_UNITED } from "../../../data/journey-copy";
import {
  LookbookAboutPageShell,
  LookbookCountUp,
  LookbookPageOpener,
  LookbookScrollReveal,
  LookbookStaggerBody,
} from "../lookbook";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

/**
 * Experience United — Copywright verbatim · 5 / 14 / $70 CountUp.
 */
export default function ExperiencePage({ onBack, onNav }: PageProps) {
  const c = EXPERIENCE_UNITED;

  return (
    <LookbookAboutPageShell onNav={onNav}>
      <LookbookPageOpener
        title={c.headline}
        lede={c.lede}
        metadata={c.metadata}
        onBack={onBack}
      />

      <section
        className="relative box-border w-full min-h-[52vh] md:min-h-[58vh] border-b border-neutral-200/60 overflow-hidden"
        aria-label="Experience United intro"
      >
        <img
          src={gymPhotos.experienceBroll}
          alt="Experience United — STRONGER mural"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.72) 100%)",
          }}
        />

        <div className="relative z-10 flex min-h-[52vh] md:min-h-[58vh] flex-col justify-end px-5 md:px-8 py-10 md:py-14 mx-auto max-w-6xl">
          <LookbookScrollReveal className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-2 max-w-xl">
              {c.heroLines.map((line) => (
                <p
                  key={line}
                  className="text-[15px] leading-relaxed text-white/85 md:text-[16px]"
                >
                  {line}
                </p>
              ))}
            </div>

            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/65">
              01 // The Experience
            </p>

            <div className="flex flex-nowrap items-end justify-between gap-0 w-full">
              {c.stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-1 flex-col gap-1.5 sm:gap-2 min-w-0 ${
                    i < c.stats.length - 1 ? "border-r border-white/20" : ""
                  } ${i === 0 ? "pr-3 sm:pr-8 md:pr-14" : ""} ${
                    i === 1 ? "px-3 sm:px-8 md:px-14" : ""
                  } ${i === 2 ? "pl-3 sm:pl-8 md:pl-14" : ""}`}
                >
                  <LookbookCountUp
                    value={s.n}
                    delay={i * 0.12}
                    className="font-mono text-[2.5rem] sm:text-[4.5rem] md:text-[5.5rem] leading-none tracking-tight text-white hover:opacity-85 transition-opacity min-h-[44px]"
                  />
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.22em] sm:tracking-[0.28em] text-white/70">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/45">
              Tap a figure to replay
            </p>
          </LookbookScrollReveal>
        </div>
      </section>

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-20 border-b border-neutral-200/60 bg-white">
        <LookbookScrollReveal className="mx-auto max-w-xl flex flex-col gap-6">
          <LookbookStaggerBody paragraphs={[...c.experienceBody]} />
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#5C5C5C]/80 border-t border-neutral-200 pt-4">
            {c.statsNote}
          </p>
        </LookbookScrollReveal>
      </section>

      <section className="box-border w-full px-5 py-16 md:px-8 md:py-24 border-b border-neutral-200/60 bg-[#F3EEE7]">
        <LookbookScrollReveal className="mx-auto max-w-2xl flex flex-col gap-4 text-center">
          {c.editorialStatement.map((line) => (
            <p
              key={line}
              className="text-[22px] leading-snug tracking-[-0.02em] text-[#181818] md:text-[28px]"
              style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}
            >
              {line}
            </p>
          ))}
        </LookbookScrollReveal>
      </section>

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-20 border-b border-neutral-200/60 bg-white">
        <LookbookScrollReveal className="mx-auto max-w-6xl flex flex-col gap-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            {c.whatYoullExperience.n} // {c.whatYoullExperience.title}
          </p>
          <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
            {c.whatYoullExperience.beats.map((beat) => (
              <li key={beat.title} className="flex flex-col gap-3 border-t border-neutral-200 pt-6">
                <h3
                  className="text-[15px] font-bold uppercase tracking-tight text-[#181818]"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  {beat.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {beat.body.map((p) => (
                    <p key={p.slice(0, 40)} className="text-[14px] leading-relaxed text-[#5C5C5C]">
                      {p}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </LookbookScrollReveal>
      </section>

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-16 border-b border-neutral-200/60 bg-[#F3EEE7]">
        <LookbookScrollReveal className="mx-auto max-w-6xl flex flex-col gap-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            {c.whatToExpect.n} // {c.whatToExpect.title}
          </p>
          <ul className="flex flex-col max-w-3xl">
            {c.whatToExpect.steps.map((step) => (
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

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-20 border-b border-neutral-200/60 bg-white">
        <LookbookScrollReveal className="mx-auto max-w-xl flex flex-col gap-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            {c.whoIsThisFor.n} // {c.whoIsThisFor.title}
          </p>
          <p
            className="text-[18px] tracking-[-0.01em] text-[#181818]"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}
          >
            {c.whoIsThisFor.headline}
          </p>
          <ul className="flex flex-col gap-3">
            {c.whoIsThisFor.bullets.map((b) => (
              <li key={b} className="text-[14px] leading-relaxed text-[#5C5C5C] border-t border-neutral-200 pt-3 first:border-t-0 first:pt-0">
                {b}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 border-t border-neutral-200 pt-6">
            {c.whoIsThisFor.closing.map((line) => (
              <p key={line} className="text-[15px] leading-relaxed text-[#181818]">
                {line}
              </p>
            ))}
          </div>
        </LookbookScrollReveal>
      </section>

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-16 border-b border-neutral-200/60 bg-[#F3EEE7]">
        <LookbookScrollReveal className="mx-auto max-w-xl flex flex-col gap-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            {c.firstVisit.n} // {c.firstVisit.title}
          </p>
          <p
            className="text-[16px] font-bold uppercase tracking-tight text-[#181818]"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            {c.firstVisit.headline}
          </p>
          <ul className="flex flex-col">
            {c.firstVisit.items.map((item) => (
              <li
                key={item}
                className="py-3 border-t border-neutral-200 first:border-t-0 text-[14px] text-[#181818] leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </LookbookScrollReveal>
      </section>

      <section className="box-border w-full px-5 py-16 md:px-8 md:py-24 border-b border-neutral-200/60 bg-white">
        <LookbookScrollReveal className="mx-auto max-w-xl flex flex-col gap-6">
          <h2
            className="text-[28px] tracking-[-0.02em] text-[#181818] md:text-[36px]"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}
          >
            {c.closing.headline}
          </h2>
          <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-[#5C5C5C]">
            {c.closing.lines.join(" · ")}
          </p>
          <p className="text-[15px] leading-relaxed text-[#5C5C5C]">{c.closing.lede}</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
            <a
              href={c.ctaPrimary.href}
              className="min-h-[44px] inline-flex items-center justify-center px-5 font-mono text-[10px] uppercase tracking-[0.22em] text-white bg-[#0A3C2E] hover:opacity-90 transition-opacity"
            >
              {c.ctaPrimary.label}
            </a>
            <button
              type="button"
              onClick={() => onNav(c.ctaSecondary.href, c.ctaSecondary.label)}
              className="min-h-[44px] inline-flex items-center justify-center px-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#181818] hover:opacity-55 transition-opacity"
            >
              [ {c.ctaSecondary.label} ]
            </button>
          </div>
        </LookbookScrollReveal>
      </section>
    </LookbookAboutPageShell>
  );
}
