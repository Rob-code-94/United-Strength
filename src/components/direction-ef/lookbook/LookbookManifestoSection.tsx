import LookbookManifestoSplit from "./LookbookManifestoSplit";
import LookbookNextCue from "./LookbookNextCue";
import LookbookScrollReveal from "./LookbookScrollReveal";

interface LookbookManifestoSectionProps {
  n: string;
  title: string;
  metadata?: string;
  headline?: string;
  body?: readonly string[];
  quote?: string;
  next?: string;
  tone?: "white" | "alabaster";
}

/** Manifesto split row — hairline section + optional next cue. */
export default function LookbookManifestoSection({
  n,
  title,
  metadata,
  headline,
  body,
  quote,
  next,
  tone = "white",
}: LookbookManifestoSectionProps) {
  const canvas = tone === "alabaster" ? "bg-[#F3EEE7]" : "bg-white";

  return (
    <section
      className={`box-border w-full px-5 py-14 md:px-8 md:py-20 border-b border-neutral-200/60 ${canvas}`}
      aria-label={`${n} ${title}`}
    >
      <LookbookScrollReveal className="mx-auto max-w-6xl">
        <LookbookManifestoSplit
          n={n}
          title={title}
          metadata={metadata}
          headline={headline}
          body={body}
          quote={quote}
        />
      </LookbookScrollReveal>
      {next ? (
        <div className="mx-auto max-w-6xl mt-10">
          <LookbookNextCue next={next} />
        </div>
      ) : null}
    </section>
  );
}
