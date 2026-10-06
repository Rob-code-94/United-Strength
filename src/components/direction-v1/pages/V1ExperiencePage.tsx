import { gymPhotos } from "../../../assets/images/gym";
import { SPACE_CHAPTERS } from "../../../data/about-copy";
import { EXPERIENCE_UNITED } from "../../../data/journey-copy";
import LookbookCountUp from "../../direction-ef/lookbook/LookbookCountUp";
import Testimonial from "../../shadcn-space/blocks/testimonial-14/testimonial";
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

const BEAT_IMAGES = [
  gymPhotos.floorColumbus,
  gymPhotos.experienceBroll,
  gymPhotos.runClub,
  gymPhotos.architectureRaw,
] as const;

const BEAT_SLOTS = ["experienceBeat1", "experienceBeat2", "experienceBeat3", "experienceBeat4"] as const;

const SATOSHI = { fontFamily: "'Satoshi', sans-serif" } as const;
const LINKS = EXPERIENCE_UNITED;

export default function V1ExperiencePage({ onBack, onNav }: PageProps) {
  const c = usePageCopy().experience;
  const mosaic = SPACE_CHAPTERS.mosaic;

  return (
    <V1InteriorShell onNav={onNav}>
      <V1Hero
        image={gymPhotos.experienceBroll}
        imageAlt="Inside United Strength"
        onBack={onBack}
        mediaSlot="experienceHero"
      >
        <V1Display copyPath="experience.headline" className="max-w-[12ch]">
          {c.headline}
        </V1Display>
        <p className="mt-4 text-[16px] text-[#F3EEE7]/85">
          <HubCopyText path="experience.lede">{c.lede}</HubCopyText>
        </p>
        {c.heroLines.map((line, index) => (
          <p key={line} className="mt-2 max-w-md text-[16px] text-[#F3EEE7]/80">
            <HubCopyText path={`experience.heroLines.${index}`}>{line}</HubCopyText>
          </p>
        ))}
        <div className="mt-6">
          <a
            href={LINKS.ctaPrimary.href}
            className="inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.22em] text-[#F3EEE7]"
          >
            <HubCopyText path="experience.ctaPrimaryLabel">{c.ctaPrimaryLabel}</HubCopyText> →
          </a>
        </div>
      </V1Hero>

      <V1Section label="01 // The Experience">
        <V1Kicker>01 // The Experience</V1Kicker>
        <div className="mt-8 flex flex-wrap gap-8">
          {c.stats.map((stat, index) => (
            <div key={stat.label}>
              <LookbookCountUp
                value={stat.n}
                className="font-sans text-[64px] font-bold leading-none tracking-[-0.05em] text-[#F3EEE7]"
              />
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#F3EEE7]/55">
                <HubCopyText path={`experience.stats.${index}.label`}>{stat.label}</HubCopyText>
              </p>
            </div>
          ))}
        </div>
        <V1Prose
          paragraphs={c.experienceBody}
          copyPaths={c.experienceBody.map((_, index) => `experience.experienceBody.${index}`)}
        />
      </V1Section>

      <V1Section className="bg-[#181818]">
        {c.editorialStatement.map((line, index) => (
          <V1Heading key={line} copyPath={`experience.editorialStatement.${index}`} className="max-w-[16ch]">
            {line}
          </V1Heading>
        ))}
      </V1Section>

      <section
        className="border-b border-white/10 bg-[#111111]"
        aria-label={`${c.whatYoullExperience.n} ${c.whatYoullExperience.title}`}
      >
        <div className="px-5 pt-16 md:px-10 md:pt-24">
          <div className="mx-auto max-w-6xl">
            <V1Kicker>
              <HubCopyText path="experience.whatYoullExperience.n">{c.whatYoullExperience.n}</HubCopyText>
              {" // "}
              <HubCopyText path="experience.whatYoullExperience.title">{c.whatYoullExperience.title}</HubCopyText>
            </V1Kicker>
          </div>
        </div>

        <div className="mt-10 flex flex-col">
          {c.whatYoullExperience.beats.map((beat, index) => {
            const centered = index % 2 === 1;
            const mediaLeft = index % 2 === 0;
            const imageSrc = BEAT_IMAGES[index] ?? gymPhotos.floorColumbus;
            const imageSlot = BEAT_SLOTS[index] ?? "experienceBeat1";
            const beatPrefix = `experience.whatYoullExperience.beats.${index}`;

            if (centered) {
              return (
                <article
                  key={beat.title}
                  className="border-t border-white/10 py-12 md:py-16"
                >
                  <V1MediaImg
                    slot={imageSlot}
                    src={imageSrc}
                    alt={beat.title}
                    className="aspect-[16/9] w-full object-cover md:aspect-[21/9] md:min-h-[48vh]"
                  />
                  <div className="mx-auto mt-8 flex max-w-xl flex-col items-center px-5 text-center md:mt-10 md:px-10">
                    <h3
                      className="w-full text-center font-sans text-[24px] font-bold uppercase tracking-[-0.03em] md:text-[32px]"
                      style={SATOSHI}
                    >
                      <HubCopyText path={`${beatPrefix}.title`}>{beat.title}</HubCopyText>
                    </h3>
                    <div className="w-full text-left md:text-center">
                      <V1Prose
                        paragraphs={beat.body}
                        copyPaths={beat.body.map((_, bodyIndex) => `${beatPrefix}.body.${bodyIndex}`)}
                      />
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={beat.title}
                className="grid border-t border-white/10 md:grid-cols-12 md:items-stretch"
              >
                <div
                  className={`relative min-h-[56vh] md:col-span-9 md:min-h-[78vh] ${
                    mediaLeft ? "" : "md:order-2"
                  }`}
                >
                  <V1MediaImg
                    slot={imageSlot}
                    src={imageSrc}
                    alt={beat.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div
                  className={`flex flex-col justify-center px-5 py-12 text-left md:col-span-3 md:px-6 md:py-16 ${
                    mediaLeft ? "" : "md:order-1"
                  }`}
                >
                  <h3
                    className="font-sans text-[22px] font-bold uppercase tracking-[-0.03em] md:text-[26px]"
                    style={SATOSHI}
                  >
                    <HubCopyText path={`${beatPrefix}.title`}>{beat.title}</HubCopyText>
                  </h3>
                  <V1Prose
                    paragraphs={beat.body}
                    copyPaths={beat.body.map((_, bodyIndex) => `${beatPrefix}.body.${bodyIndex}`)}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <V1Section label={c.whatToExpect.title}>
        <V1Kicker>
          <HubCopyText path="experience.whatToExpect.n">{c.whatToExpect.n}</HubCopyText>
          {" // "}
          <HubCopyText path="experience.whatToExpect.title">{c.whatToExpect.title}</HubCopyText>
        </V1Kicker>
        <ol className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {c.whatToExpect.steps.map((step, index) => (
            <li key={step.n} className="grid gap-2 py-5 md:grid-cols-12">
              <span className="font-mono text-[12px] tracking-[0.16em] text-[#F3EEE7]/50 md:col-span-2">
                <HubCopyText path={`experience.whatToExpect.steps.${index}.n`}>{step.n}</HubCopyText>
                {" // "}
                <HubCopyText path={`experience.whatToExpect.steps.${index}.title`}>{step.title}</HubCopyText>
              </span>
              <p className="text-[15px] leading-relaxed text-[#F3EEE7]/85 md:col-span-10">
                <HubCopyText path={`experience.whatToExpect.steps.${index}.body`}>{step.body}</HubCopyText>
              </p>
            </li>
          ))}
        </ol>
      </V1Section>

      <V1Section label={c.whoIsThisFor.title}>
        <V1Kicker>
          <HubCopyText path="experience.whoIsThisFor.n">{c.whoIsThisFor.n}</HubCopyText>
          {" // "}
          <HubCopyText path="experience.whoIsThisFor.title">{c.whoIsThisFor.title}</HubCopyText>
        </V1Kicker>
        <V1Heading copyPath="experience.whoIsThisFor.headline" className="mt-6 text-[24px] md:text-[32px]">
          {c.whoIsThisFor.headline}
        </V1Heading>
        <ul className="mt-6 flex max-w-xl flex-col gap-3">
          {c.whoIsThisFor.bullets.map((item, index) => (
            <li key={item} className="text-[16px] leading-relaxed text-[#F3EEE7]/85">
              <HubCopyText path={`experience.whoIsThisFor.bullets.${index}`}>{item}</HubCopyText>
            </li>
          ))}
        </ul>
        <V1Prose
          paragraphs={c.whoIsThisFor.closing}
          copyPaths={c.whoIsThisFor.closing.map((_, index) => `experience.whoIsThisFor.closing.${index}`)}
        />
      </V1Section>

      <section className="border-b border-white/10 bg-[#181818]" aria-label="Member reviews">
        <div className="px-5 pt-14 md:px-10 md:pt-16">
          <div className="mx-auto max-w-6xl">
            <V1Kicker>// Voices</V1Kicker>
          </div>
        </div>
        <Testimonial
          quotes={[
            { name: mosaic.memberAttribution, content: mosaic.memberQuote },
            { name: mosaic.memberAttribution2, content: mosaic.memberQuote2 },
          ]}
        />
      </section>

      <V1Section label={c.firstVisit.title}>
        <V1Kicker>
          <HubCopyText path="experience.firstVisit.n">{c.firstVisit.n}</HubCopyText>
          {" // "}
          <HubCopyText path="experience.firstVisit.title">{c.firstVisit.title}</HubCopyText>
        </V1Kicker>
        <h3
          className="mt-6 font-sans text-[22px] font-bold uppercase tracking-[-0.03em]"
          style={SATOSHI}
        >
          <HubCopyText path="experience.firstVisit.headline">{c.firstVisit.headline}</HubCopyText>
        </h3>
        <ul className="mt-4 flex flex-col gap-2">
          {c.firstVisit.items.map((item, index) => (
            <li key={item} className="text-[16px] text-[#F3EEE7]/85">
              <HubCopyText path={`experience.firstVisit.items.${index}`}>{item}</HubCopyText>
            </li>
          ))}
        </ul>
      </V1Section>

      <V1Section className="bg-[#181818]">
        <V1Heading copyPath="experience.closing.headline">{c.closing.headline}</V1Heading>
        <ul className="mt-6 flex flex-col gap-1">
          {c.closing.lines.map((line, index) => (
            <li
              key={line}
              className="font-sans text-[28px] font-bold uppercase tracking-[-0.04em]"
              style={SATOSHI}
            >
              <HubCopyText path={`experience.closing.lines.${index}`}>{line}</HubCopyText>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[16px] text-[#F3EEE7]/80">
          <HubCopyText path="experience.closing.lede">{c.closing.lede}</HubCopyText>
        </p>
        <div className="mt-6">
          <a
            href={LINKS.ctaPrimary.href}
            className="inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.22em]"
          >
            <HubCopyText path="experience.ctaPrimaryLabel">{c.ctaPrimaryLabel}</HubCopyText> →
          </a>
        </div>
        <div className="mt-2">
          <V1NavButton
            label={`${c.ctaSecondaryLabel} →`}
            href={LINKS.ctaSecondary.href}
            onNav={onNav}
          />
        </div>
      </V1Section>
    </V1InteriorShell>
  );
}
