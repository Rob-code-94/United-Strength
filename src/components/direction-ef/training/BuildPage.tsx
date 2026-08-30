import { gymPhotos } from "../../../assets/images/gym";
import { BUILD_CLASS } from "../../../data/training-copy";
import {
  LookbookAboutPageShell,
  LookbookEditorialChapter,
  LookbookPageOpener,
} from "../lookbook";
import TrainingClassCtaBand from "./TrainingClassCtaBand";
import TrainingScheduleIndex from "./TrainingScheduleIndex";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

/** BUILD — photo/editorial + free trial CTA + week schedule. Source: /classes/build */
export default function BuildPage({ onBack, onNav }: PageProps) {
  const c = BUILD_CLASS;

  return (
    <LookbookAboutPageShell onNav={onNav}>
      <LookbookPageOpener
        title={c.headline}
        lede={c.lede}
        metadata={c.metadata}
        onBack={onBack}
      />

      <LookbookEditorialChapter
        n={c.n}
        title={c.title}
        metadata={c.metadata}
        body={c.body}
        image={gymPhotos.equipmentClose}
        imageAlt="United Strength — strength training"
        align="media-left"
        tone="white"
      />

      <TrainingClassCtaBand
        communityNote={c.communityNote}
        onNav={onNav}
        tone="alabaster"
      />

      <TrainingScheduleIndex rows={c.schedule} tone="white" />
    </LookbookAboutPageShell>
  );
}
