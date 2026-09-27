import { gymPhotos } from "../../../assets/images/gym";
import { BUILD_CLASS } from "../../../data/training-copy";
import {
  V1_BUILD_PROGRAMMING,
  V1_BUILD_STANDARD,
  V1_BUILD_START,
} from "../../../data/v1-interior-copy";
import {
  V1Display,
  V1Heading,
  V1Hero,
  V1InteriorShell,
  V1Kicker,
  V1NavButton,
  V1Prose,
  V1Section,
} from "./V1Interior";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

export default function V1BuildPage({ onBack, onNav }: PageProps) {
  return (
    <V1InteriorShell onNav={onNav}>
      <V1Hero image={gymPhotos.floorColumbus} imageAlt="Training floor during BUILD" onBack={onBack} mediaSlot="buildHero">
        <V1Display>
          {BUILD_CLASS.headline}
          <span className="mt-3 block text-[18px] tracking-[-0.03em] md:text-[28px]">Strength for life.</span>
        </V1Display>
      </V1Hero>

      <V1Section>
        <V1Kicker>01 // Build</V1Kicker>
        <V1Prose paragraphs={BUILD_CLASS.body} />
      </V1Section>

      <V1Section className="bg-[#181818]">
        <V1Kicker>
          {V1_BUILD_PROGRAMMING.n} // {V1_BUILD_PROGRAMMING.title}
        </V1Kicker>
        <V1Heading className="mt-6">{V1_BUILD_PROGRAMMING.headline}</V1Heading>
        <V1Prose paragraphs={V1_BUILD_PROGRAMMING.body} />
        <ul className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-6">
          {V1_BUILD_PROGRAMMING.notation.map((mark) => (
            <li key={mark} className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#F3EEE7]/70">
              {mark}
            </li>
          ))}
        </ul>
      </V1Section>

      <V1Section>
        <V1Kicker>
          {V1_BUILD_STANDARD.n} // {V1_BUILD_STANDARD.title}
        </V1Kicker>
        <V1Heading className="mt-6">{V1_BUILD_STANDARD.headline}</V1Heading>
        <V1Prose paragraphs={V1_BUILD_STANDARD.body} />
        <ul className="mt-8 grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
          {["Grip", "Carry", "Baseline", "Measure"].map((metric) => (
            <li key={metric} className="bg-[#111111] px-4 py-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#F3EEE7]/70">
              {metric}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <V1NavButton label={`${V1_BUILD_STANDARD.cta} →`} href={V1_BUILD_STANDARD.href} onNav={onNav} />
        </div>
      </V1Section>

      <V1Section className="bg-[#181818]">
        <V1Kicker>{V1_BUILD_START.kicker}</V1Kicker>
        <V1Heading className="mt-6">{V1_BUILD_START.headline}</V1Heading>
        <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-[#F3EEE7]/85">{V1_BUILD_START.body}</p>
        <div className="mt-8">
          <V1NavButton label={`${V1_BUILD_START.cta} →`} href={V1_BUILD_START.href} onNav={onNav} />
        </div>
      </V1Section>

      <V1Section label="BUILD schedule">
        <V1Kicker>Schedule</V1Kicker>
        <ul className="mt-6 flex gap-3 overflow-x-auto pb-2">
          {BUILD_CLASS.schedule.map((row) => (
            <li key={row.day} className="min-w-[140px] shrink-0 border border-white/15 px-4 py-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#F3EEE7]/55">{row.day}</p>
              <p className="mt-3 text-[15px] text-[#F3EEE7]">{row.times}</p>
            </li>
          ))}
        </ul>
      </V1Section>
    </V1InteriorShell>
  );
}
