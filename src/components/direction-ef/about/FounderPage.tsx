import {
  FOUNDER_CHAPTERS,
  FOUNDER_EDITORIAL_SECTIONS,
} from "../../../data/about-copy";
import {
  LookbookAboutPageShell,
  LookbookNextCue,
  LookbookPageOpener,
  LookbookScrollReveal,
  LookbookStaggerBody,
} from "../lookbook";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

/**
 * Founder Story — story-led recipe (not Philosophy clone).
 * Opener + manifesto text + pull-quote band + ruled credentials index.
 * Copy: unitedstrengthgym.com/johnson
 */
export default function FounderPage({ onBack, onNav }: PageProps) {
  const { origin, story, community } = FOUNDER_CHAPTERS;

  return (
    <LookbookAboutPageShell onNav={onNav}>
      <LookbookPageOpener
        title={origin.headline ?? "Founder Story"}
        lede={origin.lede ?? ""}
        metadata={origin.metadata ?? "( Founder )"}
        onBack={onBack}
      />

      {FOUNDER_EDITORIAL_SECTIONS.map((section) => {
        if (section.key === "story") {
          return (
            <section
              key={section.key}
              className="box-border w-full px-5 py-14 md:px-8 md:py-24 border-b border-neutral-200/60 bg-white"
              aria-label={`${story.n} ${story.title}`}
            >
              <LookbookScrollReveal className="mx-auto max-w-6xl grid grid-cols-12 gap-y-8 md:gap-x-8">
                <div className="col-span-12 md:col-span-4 flex flex-col gap-3">
                  <span
                    className="font-mono text-[3.5rem] sm:text-[5rem] leading-none tracking-tight text-[#181818]/15"
                    aria-hidden
                  >
                    {story.n}
                  </span>
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
                    // {story.title}
                  </p>
                  {story.metadata ? (
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5C5C]/70">
                      {story.metadata}
                    </p>
                  ) : null}
                </div>
                <div className="col-span-12 md:col-span-7 md:col-start-6 flex flex-col gap-6">
                  {story.headline ? (
                    <h2
                      className="text-[1.75rem] sm:text-[2.25rem] leading-[1.15] tracking-[-0.02em] text-[#181818]"
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      {story.headline}
                    </h2>
                  ) : null}
                  {story.body ? <LookbookStaggerBody paragraphs={story.body} /> : null}
                </div>
              </LookbookScrollReveal>
              {section.next ? (
                <div className="mx-auto max-w-6xl mt-12">
                  <LookbookNextCue next={section.next} />
                </div>
              ) : null}
            </section>
          );
        }

        if (section.key === "community") {
          return (
            <section
              key={section.key}
              className="box-border w-full border-b border-neutral-200/60 bg-[#F3EEE7]"
              aria-label={`${community.n} ${community.title}`}
            >
              {/* Pull-quote band — 02 // What I Believe */}
              {community.quote ? (
                <LookbookScrollReveal className="px-5 md:px-8 py-16 md:py-24 border-b border-neutral-200/60">
                  <div className="mx-auto max-w-3xl flex flex-col gap-4 text-center md:text-left">
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#5C5C5C]">
                      // {community.title}
                    </p>
                    <blockquote
                      className="text-[1.5rem] sm:text-[2rem] leading-snug text-[#181818] italic"
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      &ldquo;{community.quote}&rdquo;
                    </blockquote>
                  </div>
                </LookbookScrollReveal>
              ) : null}

              <LookbookScrollReveal className="px-5 md:px-8 py-14 md:py-20 mx-auto max-w-6xl flex flex-col gap-8">
                {community.body ? (
                  <div className="max-w-xl">
                    <LookbookStaggerBody paragraphs={community.body} />
                  </div>
                ) : null}
              </LookbookScrollReveal>
            </section>
          );
        }

        return null;
      })}
    </LookbookAboutPageShell>
  );
}
