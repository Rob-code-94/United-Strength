import TypographicHero from "./direction-f/TypographicHero";
import LookbookChapter from "./direction-f/LookbookChapter";
import PillarsLookbook from "./direction-f/PillarsLookbook";
import SiteIndexFooter from "./direction-f/SiteIndexFooter";
import { chapters } from "./direction-f/data";

interface SubViewProps {
  onNav: (href: string, label: string) => void;
}

const chapter01 = chapters.find((c) => c.n === "01")!;
const chapter02 = chapters.find((c) => c.n === "02")!;
const chapter04 = chapters.find((c) => c.n === "04")!;

/**
 * Direction F — Awake Lookbook Landing
 * Same 01–04 spine as Direction E (Club · Believe · Pillars · Experience),
 * Awake lookbook layout · magazine site-index footer.
 * Spec: docs/wireframes/home-direction-f.md
 */
export default function ConceptFView({ onNav }: SubViewProps) {
  return (
    <div className="flex flex-col bg-[#fafafa] text-zinc-900 animate-fade-in-opacity font-sans selection:bg-zinc-200 selection:text-zinc-900 overflow-x-hidden w-full max-w-full">
      <TypographicHero />
      <LookbookChapter chapter={chapter01} />
      <LookbookChapter chapter={chapter02} />
      <PillarsLookbook onNav={onNav} />
      <LookbookChapter chapter={chapter04} />
      <SiteIndexFooter onNav={onNav} />
    </div>
  );
}
