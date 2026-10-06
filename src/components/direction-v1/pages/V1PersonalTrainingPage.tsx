import { gymPhotos } from "../../../assets/images/gym";
import { TRAINING_CTA } from "../../../data/training-copy";
import { V1_PT_COACHES } from "../../../data/v1-interior-copy";
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

/** Two Ways tile — photo-led Odd Ritual index with copy on the image. */
function WayTile({
  slot,
  src,
  copyPrefix,
  n,
  title,
  headline,
  body,
}: {
  slot: "ptPhoto1" | "ptPhoto2";
  src: string;
  copyPrefix: string;
  n: string;
  title: string;
  headline: string;
  body: readonly string[];
}) {
  return (
    <article className="group relative min-h-[420px] overflow-hidden md:min-h-[560px]">
      <V1MediaImg
        slot={slot}
        src={src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/45 to-[#111111]/15" />
      <div className="relative flex h-full min-h-[420px] flex-col justify-end px-5 py-8 md:min-h-[560px] md:px-8 md:py-10">
        <p className="font-mono text-[36px] leading-none tracking-tight text-[#F3EEE7]/90 md:text-[44px]">
          <HubCopyText path={`${copyPrefix}.n`}>{n}</HubCopyText>
        </p>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-[#F3EEE7]/85">
          // <HubCopyText path={`${copyPrefix}.title`}>{title}</HubCopyText>
        </p>
        <span className="mt-4 h-px w-10 bg-[#F3EEE7]/25" aria-hidden />
        <h3
          className="mt-4 max-w-[18ch] font-sans text-[20px] font-bold uppercase tracking-[-0.03em] text-[#F3EEE7] md:text-[24px]"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          <HubCopyText path={`${copyPrefix}.headline`}>{headline}</HubCopyText>
        </h3>
        <div className="mt-3 max-w-[36ch] space-y-3">
          {body.map((paragraph, index) => (
            <p key={paragraph} className="text-[15px] leading-relaxed text-[#F3EEE7]/80">
              <HubCopyText path={`${copyPrefix}.body.${index}`}>{paragraph}</HubCopyText>
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function V1PersonalTrainingPage({ onBack, onNav }: PageProps) {
  const c = usePageCopy()["personal-training"];

  return (
    <V1InteriorShell onNav={onNav}>
      <V1Hero
        image={gymPhotos.floorColumbus}
        imageAlt="Coaching on the training floor"
        onBack={onBack}
        mediaSlot="ptHero"
      >
        <V1Display className="max-w-[14ch]" copyPath="personal-training.headline">
          {c.headline}
          <HubCopyText
            path="personal-training.lede"
            as="span"
            className="mt-3 block text-[18px] tracking-[-0.03em] md:text-[28px]"
          >
            {c.lede}
          </HubCopyText>
        </V1Display>
      </V1Hero>

      <V1Section>
        <V1Kicker>
          <HubCopyText path="personal-training.approach.n">{c.approach.n}</HubCopyText>
          {" // "}
          <HubCopyText path="personal-training.approach.title">{c.approach.title}</HubCopyText>
        </V1Kicker>
        <V1Heading className="mt-6" copyPath="personal-training.approach.headline">
          {c.approach.headline}
        </V1Heading>
        <V1Prose
          paragraphs={c.approach.body}
          copyPaths={c.approach.body.map((_, index) => `personal-training.approach.body.${index}`)}
        />
      </V1Section>

      <V1Section className="bg-[#181818]">
        <V1Kicker>
          <HubCopyText path="personal-training.experience.n">{c.experience.n}</HubCopyText>
          {" // "}
          <HubCopyText path="personal-training.experience.title">{c.experience.title}</HubCopyText>
        </V1Kicker>
        <V1Heading className="mt-6" copyPath="personal-training.experience.headline">
          {c.experience.headline}
        </V1Heading>
        <ul className="mt-8 flex flex-col gap-3">
          {c.stats.map((stat, index) => (
            <li
              key={stat}
              className="font-sans text-[28px] font-bold uppercase tracking-[-0.04em] md:text-[40px]"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              <HubCopyText path={`personal-training.stats.${index}`}>{stat}</HubCopyText>
            </li>
          ))}
        </ul>
        <V1Prose
          paragraphs={c.experience.body}
          copyPaths={c.experience.body.map((_, index) => `personal-training.experience.body.${index}`)}
        />
      </V1Section>

      <section className="border-b border-white/10" aria-label="03 // Two Ways to Train">
        <div className="px-5 pt-16 md:px-10 md:pt-24">
          <div className="mx-auto max-w-6xl">
            <V1Kicker>03 // Two Ways to Train</V1Kicker>
          </div>
        </div>
        <div className="mx-auto mt-8 grid max-w-6xl gap-3 px-5 pb-16 md:grid-cols-2 md:px-10 md:pb-24">
          <WayTile
            slot="ptPhoto1"
            src={gymPhotos.equipmentClose}
            copyPrefix="personal-training.oneOnOne"
            n={c.oneOnOne.n}
            title={c.oneOnOne.title}
            headline={c.oneOnOne.headline}
            body={c.oneOnOne.body}
          />
          <WayTile
            slot="ptPhoto2"
            src={gymPhotos.rackWeights}
            copyPrefix="personal-training.privateGroup"
            n={c.privateGroup.n}
            title={c.privateGroup.title}
            headline={c.privateGroup.headline}
            body={c.privateGroup.body}
          />
        </div>
      </section>

      <V1Section className="bg-[#181818]">
        <V1Kicker>
          <HubCopyText path="personal-training.programming.n">{c.programming.n}</HubCopyText>
          {" // "}
          <HubCopyText path="personal-training.programming.title">{c.programming.title}</HubCopyText>
        </V1Kicker>
        <V1Heading className="mt-6" copyPath="personal-training.programming.headline">
          {c.programming.headline}
        </V1Heading>
        <V1Prose
          paragraphs={c.programming.body}
          copyPaths={c.programming.body.map((_, index) => `personal-training.programming.body.${index}`)}
        />
      </V1Section>

      <V1Section label="05 // Find the Right Coach">
        <V1Kicker>05 // Find the Right Coach</V1Kicker>
        <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[#F3EEE7]/85">
          Finding a coach shouldn't just be about picking a name from a list. You don't need to know exactly who you
          want to work with before you start. Tell us what you're looking for and we'll help you figure out the right
          next step.
        </p>
        <ul className="mt-6 border-t border-white/10">
          {c.coachCues.map((cue, index) => {
            const coach = V1_PT_COACHES[index];
            const label = coach?.name ?? cue.name;
            return (
              <li key={cue.name} className="border-b border-white/10">
                <button
                  type="button"
                  className="flex min-h-[44px] w-full items-center py-4 text-left font-sans text-[18px] font-bold uppercase tracking-[-0.03em]"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                  onClick={() =>
                    coach ? onNav(`/about/team#coach-${coach.id}`, label) : onNav("/about/team", label)
                  }
                >
                  <HubCopyText path={`personal-training.coachCues.${index}.name`}>{cue.name}</HubCopyText> →
                </button>
              </li>
            );
          })}
        </ul>
        <div className="mt-4">
          <V1NavButton label="Meet the Team →" href={TRAINING_CTA.teamHref} onNav={onNav} />
        </div>
      </V1Section>

      <V1Section>
        <V1Heading className="max-w-[16ch]" copyPath="personal-training.ctaSection.headline">
          {c.ctaSection.headline}
        </V1Heading>
        <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[#F3EEE7]/85">
          <HubCopyText path="personal-training.ctaSection.body">{c.ctaSection.body}</HubCopyText>
        </p>
        <a
          href={TRAINING_CTA.inquireHref}
          className="mt-6 inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.22em]"
        >
          <HubCopyText path="personal-training.ctaSection.inquireLabel">{c.ctaSection.inquireLabel}</HubCopyText> →
        </a>
      </V1Section>
    </V1InteriorShell>
  );
}
