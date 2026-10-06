import { gymPhotos } from "../../../assets/images/gym";
import { usePageCopy } from "../V1Kit";
import {
  HubCopySection,
  HubCopyText,
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
  const { founder } = usePageCopy();
  const { origin, story, community } = founder;
  const storyBody = story.body ?? [];
  const midpoint = Math.ceil(storyBody.length / 2);
  const opening = storyBody.slice(0, midpoint);
  const rest = storyBody.slice(midpoint);
  const communityBody = community.body ?? [];

  return (
    <V1InteriorShell onNav={onNav}>
      <V1Hero
        image={gymPhotos.architectureRaw}
        imageAlt="United Strength architecture"
        onBack={onBack}
        mediaSlot="founderHero"
      >
        <V1Display copyPath="founder.origin.headline">{origin.headline}</V1Display>
        <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.22em] text-[#F3EEE7]/75">
          // <HubCopyText path="founder.origin.lede">{origin.lede}</HubCopyText>
        </p>
      </V1Hero>

      <V1Section>
        <HubCopySection prefix="founder.story">
          <V1Kicker pencil={false}>
            <HubCopyText path="founder.story.n" pencil={false}>
              {story.n}
            </HubCopyText>
            {" // "}
            <HubCopyText path="founder.story.title" pencil={false}>
              {story.title}
            </HubCopyText>
          </V1Kicker>
          <V1Prose paragraphs={opening} pencil={false} />
        </HubCopySection>
      </V1Section>

      <section className="relative aspect-[16/9] overflow-hidden border-b border-white/10 md:aspect-[21/9]">
        <V1MediaImg
          slot="founderPortrait"
          src={gymPhotos.floorColumbus}
          alt="Todd at United Strength"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 45%" }}
        />
        <div className="absolute inset-0 bg-[#111111]/50" aria-hidden />
        <div className="relative flex h-full items-end justify-center px-5 py-10 text-center md:px-10 md:py-14">
          <HubCopyText
            path="founder.story.midCaption"
            as="p"
            className="max-w-[22ch] font-sans text-[18px] font-bold uppercase leading-[1.15] tracking-[-0.03em] text-[#F3EEE7] md:max-w-[28ch] md:text-[28px]"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            {story.midCaption}
          </HubCopyText>
        </div>
      </section>

      <V1Section>
        {/* Continuation of founder.story — editable via the section pencil above. */}
        <V1Prose paragraphs={rest} pencil={false} />
      </V1Section>

      <V1Section className="bg-[#181818]">
        <HubCopySection
          prefix="founder.community"
          className="flex flex-col items-center text-center"
        >
          <V1Kicker pencil={false}>
            <HubCopyText path="founder.community.n" pencil={false}>
              {community.n}
            </HubCopyText>
            {" // "}
            <HubCopyText path="founder.community.title" pencil={false}>
              {community.title}
            </HubCopyText>
          </V1Kicker>
          <V1Heading
            className="mx-auto mt-8 max-w-[16ch]"
            copyPath="founder.community.quote"
            pencil={false}
          >
            {community.quote}
          </V1Heading>
          <div className="mx-auto mt-6 flex max-w-xl flex-col gap-4 text-center">
            {communityBody.map((paragraph, index) => (
              <HubCopyText
                key={`founder.community.body.${index}`}
                path={`founder.community.body.${index}`}
                as="p"
                className="text-[16px] leading-relaxed text-[#F3EEE7]/85"
                pencil={false}
              >
                {paragraph}
              </HubCopyText>
            ))}
          </div>
        </HubCopySection>
      </V1Section>
    </V1InteriorShell>
  );
}
