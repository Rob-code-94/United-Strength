import { gymPhotos } from "../assets/images/gym";
import ChapterIntro from "./direction-e/ChapterIntro";
import ExperienceSection from "./direction-e/ExperienceSection";
import PillarsSection from "./direction-e/PillarsSection";
import SpaceSection from "./direction-e/SpaceSection";
import StartHereSection from "./direction-e/StartHereSection";

interface SubViewProps {
  onNav: (href: string, label: string) => void;
}

/**
 * Direction E — Odd Ritual Catalog Preview
 * Act 1: 01 Club → 02 Believe → 03 Pillars stack → 04 Experience chapter
 * Act 2: Experience (gallery + 5/14) · Space · Start Here
 * Membership statement removed from homepage scroll (still in overlay nav).
 * Believe prose lives on chapter 02 only (Act 2 BelieveSection removed).
 */
export default function ConceptEView({ onNav }: SubViewProps) {
  return (
    <div className="flex flex-col bg-white text-[#181818] animate-fade-in-opacity font-sans selection:bg-neutral-100 selection:text-neutral-900">
      <ChapterIntro
        n="01"
        title="United Strength Club"
        image={gymPhotos.galleryCinematic}
        imageAlt="United Strength Club — facility b-roll"
        next={{ n: "02", title: "What We Believe" }}
      />
      <ChapterIntro
        n="02"
        title="What We Believe"
        image={gymPhotos.spaceAtmosphere}
        imageAlt="What We Believe — atmosphere"
        lede="People don't stay because of equipment. They stay because of how a place makes them feel. United exists for deliberate practice, community, and longevity — a private club culture, not gym noise."
        next={{ n: "03", title: "The Four Pillars" }}
      />
      <PillarsSection onNav={onNav} />
      <ChapterIntro
        n="04"
        title="Experience United"
        image={gymPhotos.experienceBroll}
        imageAlt="Experience United — Stronger mural"
        lede="Five classes. Fourteen days. Feel the practice and the standard before you apply — membership is reviewed, not open checkout."
      />

      <ExperienceSection onNav={onNav} />
      <SpaceSection onNav={onNav} />
      <StartHereSection onNav={onNav} />

      <footer className="px-6 py-10 bg-neutral-50 border-t border-neutral-100 space-y-4 shrink-0 snap-end">
        <p className="font-mono text-[10px] uppercase tracking-wider text-[#5C5C5C] leading-relaxed">
          237 Cleveland Ave
          <br />
          Columbus, Ohio 43215
        </p>
        <div className="flex justify-between font-mono text-[9px] uppercase tracking-widest text-neutral-400 border-t border-neutral-200 pt-4">
          <span>Direction E</span>
          <span>Odd Ritual Preview</span>
        </div>
      </footer>
    </div>
  );
}
