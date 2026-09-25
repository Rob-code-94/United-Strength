import BelieveBreak from "./direction-v1/BelieveBreak";
import MembershipPassport from "./direction-v1/MembershipPassport";
import OpeningCarousel from "./direction-v1/OpeningCarousel";
import PeopleChapter from "./direction-v1/PeopleChapter";
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
 * Vertical spine 02–07 after opening carousel · continuous overlap.
 * Spec: docs/wireframes/home-direction-v1.md
 */
export default function ConceptV1View({
  onNav,
  onVerticalScrollUnlockChange,
}: SubViewProps) {
  return (
    <div className="flex flex-col overflow-x-hidden bg-[#111111] font-sans text-[#F3EEE7] animate-fade-in-opacity selection:bg-[#F3EEE7]/20 selection:text-[#F3EEE7]">
      <OpeningCarousel
        onVerticalScrollUnlockChange={onVerticalScrollUnlockChange}
      />
      {/* 02 → 07 continuous magazine spine */}
      <BelieveBreak onNav={onNav} />
      <WhatWeOffer onNav={onNav} />
      <PeopleChapter onNav={onNav} />
      <SpaceExperience onNav={onNav} />
      <MembershipPassport onNav={onNav} />
      <StartHere onNav={onNav} />
      <div className="relative z-[70] -mt-6">
        <V1SiteIndexFooter onNav={onNav} />
      </div>
    </div>
  );
}
