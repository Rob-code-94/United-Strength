import { gymPhotos } from "../../../assets/images/gym";
import { EXPERIENCE_UNITED } from "../../../data/journey-copy";
import LookbookCountUp from "../../direction-ef/lookbook/LookbookCountUp";
import {
  V1Display,
  V1Heading,
  V1Hero,
  V1InteriorShell,
  V1Kicker,
  V1MediaImg,
  V1NavButton,
  V1Prose,
  V1Section,
} from "./V1Interior";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

const BEAT_IMAGES = [
  gymPhotos.floorColumbus,
  gymPhotos.experienceBroll,
  gymPhotos.runClub,
  gymPhotos.architectureRaw,
] as const;

const BEAT_SLOTS = ["experienceBeat1", "experienceBeat2", "experienceBeat3", "experienceBeat4"] as const;

export default function V1ExperiencePage({ onBack, onNav }: PageProps) {
  const c = EXPERIENCE_UNITED;

  return (
    <V1InteriorShell onNav={onNav}>
      <V1Hero
        image={gymPhotos.experienceBroll}
        imageAlt="Inside United Strength"
        onBack={onBack}
        mediaSlot="experienceHero"
      >
        <V1Display className="max-w-[12ch]">{c.headline}</V1Display>
        <p className="mt-4 text-[16px] text-[#F3EEE7]/85">{c.lede}</p>
        {c.heroLines.map((line) => (
          <p key={line} className="mt-2 max-w-md text-[16px] text-[#F3EEE7]/80">
            {line}
          </p>
        ))}
        <div className="mt-6">
          <a
            href={c.ctaPrimary.href}
            className="inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.22em] text-[#F3EEE7]"
          >
            {c.ctaPrimary.label} →
          </a>
        </div>
      </V1Hero>

      <V1Section label="01 // The Experience">
        <V1Kicker>01 // The Experience</V1Kicker>
        <div className="mt-8 flex flex-wrap gap-8">
          {c.stats.map((stat) => (
            <div key={stat.label}>
              <LookbookCountUp
                value={stat.n}
                className="font-sans text-[64px] font-bold leading-none tracking-[-0.05em] text-[#F3EEE7]"
              />
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#F3EEE7]/55">{stat.label}</p>
            </div>
          ))}
        </div>
        <V1Prose paragraphs={c.experienceBody} />
      </V1Section>

      <V1Section className="bg-[#181818]">
        {c.editorialStatement.map((line) => (
          <V1Heading key={line} className="max-w-[16ch]">
            {line}
          </V1Heading>
        ))}
      </V1Section>

      <V1Section label={c.whatYoullExperience.title}>
        <V1Kicker>
          {c.whatYoullExperience.n} // {c.whatYoullExperience.title}
        </V1Kicker>
        <div className="mt-10 flex flex-col gap-12">
          {c.whatYoullExperience.beats.map((beat, index) => (
            <article key={beat.title} className="grid items-center gap-6 md:grid-cols-12">
              <V1MediaImg
                slot={BEAT_SLOTS[index] ?? "experienceBeat1"}
                src={BEAT_IMAGES[index] ?? gymPhotos.floorColumbus}
                alt=""
                className={`aspect-[4/3] w-full object-cover md:col-span-5 ${index % 2 === 1 ? "md:order-2 md:col-start-8" : ""}`}
              />
              <div className={`md:col-span-6 ${index % 2 === 1 ? "md:order-1" : "md:col-start-7"}`}>
                <h3 className="font-sans text-[22px] font-bold uppercase tracking-[-0.03em]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                  {beat.title}
                </h3>
                <V1Prose paragraphs={beat.body} />
              </div>
            </article>
          ))}
        </div>
      </V1Section>

      <V1Section label={c.whatToExpect.title}>
        <V1Kicker>
          {c.whatToExpect.n} // {c.whatToExpect.title}
        </V1Kicker>
        <ol className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {c.whatToExpect.steps.map((step) => (
            <li key={step.n} className="grid gap-2 py-5 md:grid-cols-12">
              <span className="font-mono text-[12px] tracking-[0.16em] text-[#F3EEE7]/50 md:col-span-2">
                {step.n} // {step.title}
              </span>
              <p className="text-[15px] leading-relaxed text-[#F3EEE7]/85 md:col-span-10">{step.body}</p>
            </li>
          ))}
        </ol>
      </V1Section>

      <V1Section label={c.whoIsThisFor.title}>
        <V1Kicker>
          {c.whoIsThisFor.n} // {c.whoIsThisFor.title}
        </V1Kicker>
        <V1Heading className="mt-6 text-[24px] md:text-[32px]">{c.whoIsThisFor.headline}</V1Heading>
        <ul className="mt-6 flex max-w-xl flex-col gap-3">
          {c.whoIsThisFor.bullets.map((item) => (
            <li key={item} className="text-[16px] leading-relaxed text-[#F3EEE7]/85">
              {item}
            </li>
          ))}
        </ul>
        <V1Prose paragraphs={c.whoIsThisFor.closing} />
      </V1Section>

      <V1Section label={c.firstVisit.title}>
        <V1Kicker>
          {c.firstVisit.n} // {c.firstVisit.title}
        </V1Kicker>
        <h3 className="mt-6 font-sans text-[22px] font-bold uppercase tracking-[-0.03em]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
          {c.firstVisit.headline}
        </h3>
        <ul className="mt-4 flex flex-col gap-2">
          {c.firstVisit.items.map((item) => (
            <li key={item} className="text-[16px] text-[#F3EEE7]/85">
              {item}
            </li>
          ))}
        </ul>
      </V1Section>

      <V1Section className="bg-[#181818]">
        <V1Heading>{c.closing.headline}</V1Heading>
        <ul className="mt-6 flex flex-col gap-1">
          {c.closing.lines.map((line) => (
            <li key={line} className="font-sans text-[28px] font-bold uppercase tracking-[-0.04em]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
              {line}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[16px] text-[#F3EEE7]/80">{c.closing.lede}</p>
        <div className="mt-6">
          <a
            href={c.ctaPrimary.href}
            className="inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.22em]"
          >
            {c.ctaPrimary.label} →
          </a>
        </div>
        <div className="mt-2">
          <V1NavButton label={`${c.ctaSecondary.label} →`} href={c.ctaSecondary.href} onNav={onNav} />
        </div>
      </V1Section>
    </V1InteriorShell>
  );
}
