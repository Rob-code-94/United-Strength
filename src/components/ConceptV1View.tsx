import MembershipPassport from "./direction-v1/MembershipPassport";
import OpeningCarousel from "./direction-v1/OpeningCarousel";
import SpaceExperience from "./direction-v1/SpaceExperience";
import StartHere from "./direction-v1/StartHere";
import V1SiteIndexFooter from "./direction-v1/V1SiteIndexFooter";
import WhatWeOffer from "./direction-v1/WhatWeOffer";

interface SubViewProps {
  onNav: (href: string, label: string) => void;
  /** Slide 04 unlocks parent vertical scroll; 01–03 stay locked */
  onVerticalScrollUnlockChange?: (unlocked: boolean) => void;
}

/**
 * Direction V1 — US EDITS FROM V1 homepage (parallel to frozen EF).
 * Spec: docs/wireframes/home-direction-v1.md
 */
export default function ConceptV1View({
  onNav,
  onVerticalScrollUnlockChange,
}: SubViewProps) {
  return (
    <div className="flex flex-col bg-[#111111] text-[#F3EEE7] animate-fade-in-opacity font-sans selection:bg-[#F3EEE7]/20 selection:text-[#F3EEE7] overflow-x-hidden">
      <OpeningCarousel
        onVerticalScrollUnlockChange={onVerticalScrollUnlockChange}
      />
      <WhatWeOffer onNav={onNav} />
      <SpaceExperience onNav={onNav} />
      <MembershipPassport onNav={onNav} />
      <StartHere onNav={onNav} />
      <V1SiteIndexFooter onNav={onNav} />
    </div>
  );
}
