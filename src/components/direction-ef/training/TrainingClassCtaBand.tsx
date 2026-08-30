import { TRAINING_CTA } from "../../../data/training-copy";
import LookbookScrollReveal from "../lookbook/LookbookScrollReveal";
import LookbookStaggerBody from "../lookbook/LookbookStaggerBody";

interface TrainingClassCtaBandProps {
  communityNote: string;
  onNav: (href: string, label: string) => void;
  /** white = Burn · alabaster = Build */
  tone?: "white" | "alabaster";
}

/**
 * Shared class CTA band — live “Free Trial Class” + Apply.
 * Routes to Start Here (not Triib Sign up / Book).
 */
export default function TrainingClassCtaBand({
  communityNote,
  onNav,
  tone = "alabaster",
}: TrainingClassCtaBandProps) {
  const canvas = tone === "alabaster" ? "bg-[#F3EEE7]" : "bg-white";

  return (
    <section
      className={`box-border w-full px-5 py-12 md:px-8 md:py-16 border-b border-neutral-200/60 ${canvas}`}
      aria-label="Try a class"
    >
      <LookbookScrollReveal className="mx-auto max-w-xl flex flex-col gap-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5C5C5C]">
          ( Start Here )
        </p>
        <LookbookStaggerBody paragraphs={[communityNote]} />
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-x-6 sm:gap-y-2 border-t border-neutral-200 pt-6">
          <button
            type="button"
            onClick={() =>
              onNav(TRAINING_CTA.freeTrialHref, TRAINING_CTA.freeTrialLabel)
            }
            className="min-h-[44px] inline-flex items-center justify-center px-5 font-mono text-[10px] uppercase tracking-[0.22em] text-white bg-[#0A3C2E] hover:opacity-90 transition-opacity"
          >
            {TRAINING_CTA.freeTrialLabel}
          </button>
          <button
            type="button"
            onClick={() => onNav(TRAINING_CTA.applyHref, TRAINING_CTA.applyLabel)}
            className="min-h-[44px] inline-flex items-center justify-center px-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#181818] hover:opacity-55 transition-opacity"
          >
            [ {TRAINING_CTA.applyLabel} ]
          </button>
        </div>
      </LookbookScrollReveal>
    </section>
  );
}
