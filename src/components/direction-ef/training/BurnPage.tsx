import { gymPhotos } from "../../../assets/images/gym";
import { BURN_CLASS } from "../../../data/training-copy";
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

/** BURN — free trial CTA + week schedule. Source: /classes/burn */
export default function BurnPage({ onBack, onNav }: PageProps) {
  const c = BURN_CLASS;

  return (
    <LookbookAboutPageShell onNav={onNav}>
      <LookbookPageOpener
        title={c.headline}
        lede={c.lede}
        metadata={c.metadata}
        onBack={onBack}
        tone="alabaster"
      />

      <LookbookEditorialChapter
        n={c.n}
        title={c.title}
        metadata={c.metadata}
        body={c.body}
        image={gymPhotos.experienceBroll}
        imageAlt="United Strength — conditioning"
        align="media-right"
        tone="white"
      />

      <TrainingClassCtaBand
        communityNote={c.communityNote}
        onNav={onNav}
        tone="white"
      />

      <TrainingScheduleIndex
        rows={c.schedule}
        note={c.scheduleNote}
        tone="alabaster"
      />
    </LookbookAboutPageShell>
  );
}
