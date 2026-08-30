import { gymPhotos } from "../assets/images/gym";
import Act2LookbookStack from "./direction-ef/Act2LookbookStack";
import ChapterIntro from "./direction-ef/ChapterIntro";
import ExperienceSection from "./direction-ef/ExperienceSection";
import PillarsSection from "./direction-ef/PillarsSection";
import SiteIndexFooter from "./direction-ef/SiteIndexFooter";

interface SubViewProps {
  onNav: (href: string, label: string) => void;
  onFreeScrollZoneChange?: (active: boolean) => void;
}

/**
 * Direction EF — E + lookbook + selective F harvest.
 * Act 2: Experience split snap (04) · asymmetric photo deck (free scroll) · footer.
 * Spec: docs/wireframes/home-direction-ef.md
 */
export default function ConceptEFView({ onNav, onFreeScrollZoneChange }: SubViewProps) {
  return (
    <div className="flex flex-col bg-white text-[#181818] animate-fade-in-opacity font-sans selection:bg-neutral-100 selection:text-neutral-900">
      <ChapterIntro
        n="01"
        title="United Strength Club"
        image={gymPhotos.galleryCinematic}
        imageAlt="United Strength Club — facility b-roll"
        metadata="( The Club )"
        next={{ n: "02", title: "What We Believe" }}
      />
      <ChapterIntro
        n="02"
        title="What We Believe"
        image={gymPhotos.spaceAtmosphere}
        imageAlt="What We Believe — atmosphere"
        metadata="( Philosophy )"
        lede="People don't stay because of equipment. They stay because of how a place makes them feel. United exists for deliberate practice, community, and longevity — a private club culture, not gym noise."
        next={{ n: "03", title: "The Four Pillars" }}
      />
      <PillarsSection onNav={onNav} />
      <ExperienceSection onNav={onNav} />
      <Act2LookbookStack onNav={onNav} onFreeScrollZoneChange={onFreeScrollZoneChange} />
      <SiteIndexFooter onNav={onNav} />
    </div>
  );
}
