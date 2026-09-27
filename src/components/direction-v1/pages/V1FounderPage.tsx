import { gymPhotos } from "../../../assets/images/gym";
import { FOUNDER_CHAPTERS } from "../../../data/about-copy";
import {
  V1Display,
  V1Heading,
  V1Hero,
  V1InteriorShell,
  V1Kicker,
  V1MediaImg,
  V1Prose,
  V1Section,
} from "./V1Interior";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

/** Stand-in wide still until Todd sends the Canva collage. */
export default function V1FounderPage({ onBack, onNav }: PageProps) {
  const story = FOUNDER_CHAPTERS.story.body ?? [];
  const midpoint = Math.ceil(story.length / 2);
  const opening = story.slice(0, midpoint);
  const rest = story.slice(midpoint);
  const belief = FOUNDER_CHAPTERS.community;

  return (
    <V1InteriorShell onNav={onNav}>
      <V1Hero
        image={gymPhotos.architectureRaw}
        imageAlt="United Strength architecture, stand-in for the founder collage"
        onBack={onBack}
        mediaSlot="founderHero"
      >
        <V1Display>{FOUNDER_CHAPTERS.origin.headline}</V1Display>
        <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.22em] text-[#F3EEE7]/75">
          // {FOUNDER_CHAPTERS.origin.lede}
        </p>
      </V1Hero>

      <V1Section>
        <V1Kicker>
          {FOUNDER_CHAPTERS.story.n} // {FOUNDER_CHAPTERS.story.title}
        </V1Kicker>
        <V1Prose paragraphs={opening} />
      </V1Section>

      <section className="border-b border-white/10">
        <V1MediaImg
          slot="founderPortrait"
          src={gymPhotos.floorColumbus}
          alt="Todd at United, stand-in until the current portrait arrives"
          className="aspect-[16/9] w-full object-cover md:aspect-[21/9]"
          style={{ objectPosition: "center 45%" }}
        />
      </section>

      <V1Section>
        <V1Prose paragraphs={rest} />
      </V1Section>

      <V1Section className="bg-[#181818]">
        <V1Kicker>
          {belief.n} // {belief.title}
        </V1Kicker>
        <V1Heading className="mt-8 max-w-[16ch]">{belief.quote}</V1Heading>
        <V1Prose paragraphs={belief.body ?? []} />
      </V1Section>
    </V1InteriorShell>
  );
}
