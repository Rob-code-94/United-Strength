import { gymPhotos } from "../../../assets/images/gym";
import { usePageCopy } from "../V1Kit";
import {
  HubCopyText,
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

/** V1 Burn — Build-length dark stack (no Strength Standard). */
export default function V1BurnPage({ onBack, onNav }: PageProps) {
  const c = usePageCopy().burn;

  return (
    <V1InteriorShell onNav={onNav}>
      <V1Hero
        image={gymPhotos.experienceBroll}
        imageAlt="Conditioning floor during BURN"
        onBack={onBack}
        mediaSlot="burnHero"
      >
        <V1Display copyPath="burn.headline">
          {c.headline}
          <HubCopyText
            path="burn.lede"
            as="span"
            className="mt-3 block text-[18px] tracking-[-0.03em] md:text-[28px]"
          >
            {c.lede}
          </HubCopyText>
        </V1Display>
      </V1Hero>

      <V1Section>
        <V1Kicker>01 // Burn</V1Kicker>
        <V1Prose paragraphs={c.body} copyPaths={c.body.map((_, index) => `burn.body.${index}`)} />
      </V1Section>

      <V1Section className="bg-[#181818]">
        <V1Kicker>
          <HubCopyText path="burn.session.n">{c.session.n}</HubCopyText>
          {" // "}
          <HubCopyText path="burn.session.title">{c.session.title}</HubCopyText>
        </V1Kicker>
        <V1Heading className="mt-6" copyPath="burn.session.headline">
          {c.session.headline}
        </V1Heading>
        <V1Prose
          paragraphs={c.session.body}
          copyPaths={c.session.body.map((_, index) => `burn.session.body.${index}`)}
        />
      </V1Section>

      <section className="border-b border-white/10" aria-hidden>
        <V1MediaImg
          slot="burnHero"
          src={gymPhotos.equipmentClose}
          alt=""
          className="aspect-[16/7] w-full object-cover"
        />
      </section>

      <V1Section>
        <V1Kicker>
          <HubCopyText path="burn.outcomes.n">{c.outcomes.n}</HubCopyText>
          {" // "}
          <HubCopyText path="burn.outcomes.title">{c.outcomes.title}</HubCopyText>
        </V1Kicker>
        <V1Heading className="mt-6" copyPath="burn.outcomes.headline">
          {c.outcomes.headline}
        </V1Heading>
        <V1Prose
          paragraphs={c.outcomes.body}
          copyPaths={c.outcomes.body.map((_, index) => `burn.outcomes.body.${index}`)}
        />
        <ul className="mt-8 grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
          {c.outcomes.metrics.map((metric, index) => (
            <li
              key={metric}
              className="bg-[#111111] px-4 py-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#F3EEE7]/70"
            >
              <HubCopyText path={`burn.outcomes.metrics.${index}`}>{metric}</HubCopyText>
            </li>
          ))}
        </ul>
      </V1Section>

      <V1Section className="bg-[#181818]">
        <V1Kicker copyPath="burn.start.kicker">{c.start.kicker}</V1Kicker>
        <V1Heading className="mt-6" copyPath="burn.start.headline">
          {c.start.headline}
        </V1Heading>
        <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-[#F3EEE7]/85">
          <HubCopyText path="burn.start.body">{c.start.body}</HubCopyText>
        </p>
        <div className="mt-8">
          <V1NavButton label={`${c.start.cta} →`} href={c.start.href} onNav={onNav} />
        </div>
      </V1Section>

      <V1Section label="BURN schedule">
        <V1Kicker>Schedule</V1Kicker>
        <ul className="mt-6 flex gap-3 overflow-x-auto pb-2">
          {c.schedule.map((row, index) => (
            <li key={`${row.day}-${index}`} className="min-w-[140px] shrink-0 border border-white/15 px-4 py-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#F3EEE7]/55">
                <HubCopyText path={`burn.schedule.${index}.day`}>{row.day}</HubCopyText>
              </p>
              <p className="mt-3 text-[15px] text-[#F3EEE7]">
                <HubCopyText path={`burn.schedule.${index}.times`}>{row.times}</HubCopyText>
              </p>
            </li>
          ))}
        </ul>
      </V1Section>
    </V1InteriorShell>
  );
}
