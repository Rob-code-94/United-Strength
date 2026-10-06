import { gymPhotos } from "../../../assets/images/gym";
import { usePageCopy } from "../V1Kit";
import {
  HubCopyText,
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
  const c = usePageCopy().build;

  return (
    <V1InteriorShell onNav={onNav}>
      <V1Hero image={gymPhotos.floorColumbus} imageAlt="Training floor during BUILD" onBack={onBack} mediaSlot="buildHero">
        <V1Display copyPath="build.headline">
          {c.headline}
          <HubCopyText
            path="build.lede"
            as="span"
            className="mt-3 block text-[18px] tracking-[-0.03em] md:text-[28px]"
          >
            {c.lede}
          </HubCopyText>
        </V1Display>
      </V1Hero>

      <V1Section>
        <V1Kicker>01 // Build</V1Kicker>
        <V1Prose
          paragraphs={c.body}
          copyPaths={c.body.map((_, index) => `build.body.${index}`)}
        />
      </V1Section>

      <V1Section className="bg-[#181818]">
        <V1Kicker>
          <HubCopyText path="build.programming.n">{c.programming.n}</HubCopyText>
          {" // "}
          <HubCopyText path="build.programming.title">{c.programming.title}</HubCopyText>
        </V1Kicker>
        <V1Heading className="mt-6" copyPath="build.programming.headline">
          {c.programming.headline}
        </V1Heading>
        <V1Prose
          paragraphs={c.programming.body}
          copyPaths={c.programming.body.map((_, index) => `build.programming.body.${index}`)}
        />
        <ul className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-6">
          {c.programming.notation.map((mark, index) => (
            <li key={mark} className="font-mono text-[12px] uppercase tracking-[0.2em] text-[#F3EEE7]/70">
              <HubCopyText path={`build.programming.notation.${index}`}>{mark}</HubCopyText>
            </li>
          ))}
        </ul>
      </V1Section>

      <V1Section>
        <V1Kicker>
          <HubCopyText path="build.standard.n">{c.standard.n}</HubCopyText>
          {" // "}
          <HubCopyText path="build.standard.title">{c.standard.title}</HubCopyText>
        </V1Kicker>
        <V1Heading className="mt-6" copyPath="build.standard.headline">
          {c.standard.headline}
        </V1Heading>
        <V1Prose
          paragraphs={c.standard.body}
          copyPaths={c.standard.body.map((_, index) => `build.standard.body.${index}`)}
        />
        <ul className="mt-8 grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
          {["Grip", "Carry", "Baseline", "Measure"].map((metric) => (
            <li key={metric} className="bg-[#111111] px-4 py-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#F3EEE7]/70">
              {metric}
            </li>
          ))}
        </ul>
      </V1Section>

      <V1Section className="bg-[#181818]">
        <V1Kicker copyPath="build.start.kicker">{c.start.kicker}</V1Kicker>
        <V1Heading className="mt-6" copyPath="build.start.headline">
          {c.start.headline}
        </V1Heading>
        <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-[#F3EEE7]/85">
          <HubCopyText path="build.start.body">{c.start.body}</HubCopyText>
        </p>
        <div className="mt-8">
          <V1NavButton
            label={`${c.start.cta} →`}
            href={c.start.href}
            onNav={onNav}
          />
        </div>
      </V1Section>

      <V1Section label="BUILD schedule">
        <V1Kicker>Schedule</V1Kicker>
        <ul className="mt-6 flex gap-3 overflow-x-auto pb-2">
          {c.schedule.map((row, index) => (
            <li key={`${row.day}-${index}`} className="min-w-[140px] shrink-0 border border-white/15 px-4 py-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#F3EEE7]/55">
                <HubCopyText path={`build.schedule.${index}.day`}>{row.day}</HubCopyText>
              </p>
              <p className="mt-3 text-[15px] text-[#F3EEE7]">
                <HubCopyText path={`build.schedule.${index}.times`}>{row.times}</HubCopyText>
              </p>
            </li>
          ))}
        </ul>
      </V1Section>
    </V1InteriorShell>
  );
}
