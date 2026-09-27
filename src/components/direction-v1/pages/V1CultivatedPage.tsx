import { gymPhotos } from "../../../assets/images/gym";
import { CULTIVATED } from "../../../data/culture-copy";
import { CULTIVATED_JOIN_URL, V1_CULTIVATED_001 } from "../../../data/v1-interior-copy";
import {
  V1Display,
  V1Heading,
  V1Hero,
  V1HoldControl,
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

export default function V1CultivatedPage({ onBack, onNav }: PageProps) {
  return (
    <V1InteriorShell onNav={onNav}>
      <V1Hero image={gymPhotos.experienceBroll} imageAlt="" onBack={onBack} mediaSlot="cultivatedHero">
        <V1Display>{CULTIVATED.headline}</V1Display>
        <p className="mt-4 max-w-[16ch] font-sans text-[22px] font-bold uppercase tracking-[-0.03em] md:text-[32px]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
          {CULTIVATED.lede}
        </p>
      </V1Hero>

      <V1Section>
        <V1Kicker>01 // Cultivated</V1Kicker>
        <V1Prose paragraphs={CULTIVATED.manifesto.body} />
      </V1Section>

      <V1Section className="bg-[#181818]">
        <V1Kicker>{V1_CULTIVATED_001.title}</V1Kicker>
        <V1Prose paragraphs={V1_CULTIVATED_001.body} />
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
          <V1MediaImg slot="cultivated1" src={gymPhotos.galleryCinematic} alt="Cultivated poster, stand-in" className="aspect-[3/4] w-full object-cover" />
          <V1MediaImg slot="cultivated2" src={gymPhotos.runClub} alt="" className="aspect-[3/4] w-full object-cover" />
          <V1MediaImg slot="cultivated3" src={gymPhotos.floorColumbus} alt="" className="col-span-2 aspect-[16/9] w-full object-cover md:col-span-1 md:aspect-[3/4]" />
        </div>
        <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-[#F3EEE7]/80">
          People sent photographs of those sunflowers growing. The experience should leave you with something after you walk out the door.
        </p>
      </V1Section>

      <V1Section>
        <V1Kicker>The Cultivated System</V1Kicker>
        <ul className="mt-6 flex flex-col gap-2 font-mono text-[13px] uppercase tracking-[0.18em] text-[#F3EEE7]/75">
          <li>Cultivated // 001</li>
          <li>Cultivated // 002</li>
          <li>Cultivated // 003</li>
        </ul>
      </V1Section>

      <V1Section className="bg-[#181818]">
        <V1Kicker>Next Cultivated</V1Kicker>
        <V1Heading className="mt-6">Cultivated // 002</V1Heading>
        <div className="mt-6">
          {CULTIVATED_JOIN_URL ? (
            <V1NavButton label="Join Us →" href={CULTIVATED_JOIN_URL} onNav={onNav} />
          ) : (
            <V1HoldControl label="Join Us →" />
          )}
        </div>
      </V1Section>
    </V1InteriorShell>
  );
}
