import {
  FOUNDER_CHAPTERS,
  FOUNDER_CREDENTIAL_ROWS,
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
  const { origin, story, community, credentials } = FOUNDER_CHAPTERS;

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
              {/* Pull-quote band — full width, story-led emphasis */}
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
                    {community.quoteAttribution ? (
                      <cite className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#5C5C5C] not-italic">
                        — {community.quoteAttribution}
                      </cite>
                    ) : null}
                  </div>
                </LookbookScrollReveal>
              ) : null}

              <LookbookScrollReveal className="px-5 md:px-8 py-14 md:py-20 mx-auto max-w-6xl flex flex-col gap-8">
                {community.body ? (
                  <div className="max-w-xl">
                    <LookbookStaggerBody paragraphs={community.body} />
                  </div>
                ) : null}
                {"advice" in community && community.advice ? (
                  <p className="max-w-xl text-[14px] leading-relaxed text-[#5C5C5C] border-t border-neutral-200 pt-6">
                    {community.advice}
                  </p>
                ) : null}
                {community.memberNote ? (
                  <p className="max-w-md text-sm text-[#5C5C5C] leading-relaxed italic border-t border-neutral-200 pt-6">
                    &ldquo;{community.memberNote}&rdquo;
                    {community.memberAttribution ? (
                      <span className="block mt-2 font-mono text-[9px] uppercase tracking-[0.18em] not-italic">
                        — {community.memberAttribution}
                      </span>
                    ) : null}
                  </p>
                ) : null}
              </LookbookScrollReveal>
              {section.next ? (
                <div className="mx-auto max-w-6xl px-5 md:px-8 pb-10">
                  <LookbookNextCue next={section.next} />
                </div>
              ) : null}
            </section>
          );
        }

        if (section.key === "credentials") {
          return (
            <section
              key={section.key}
              className="box-border w-full px-5 py-14 md:px-8 md:py-20 border-b border-neutral-200/60 bg-white"
              aria-label={`${credentials.n} ${credentials.title}`}
            >
              <LookbookScrollReveal className="mx-auto max-w-6xl flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <span
                    className="font-mono text-[3.5rem] sm:text-[4.5rem] leading-none tracking-tight text-[#181818]/15"
                    aria-hidden
                  >
                    {credentials.n}
                  </span>
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
                    // {credentials.title}
                  </p>
                  {credentials.metadata ? (
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5C5C]/70">
                      {credentials.metadata}
                    </p>
                  ) : null}
                </div>

                <ul className="flex flex-col max-w-3xl">
                  {FOUNDER_CREDENTIAL_ROWS.map((row) => (
                    <li
                      key={row.label}
                      className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 py-4 border-t border-neutral-200 first:border-t-0"
                    >
                      <span className="sm:col-span-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5C5C] pt-0.5">
                        {row.label}
                      </span>
                      <span className="sm:col-span-9 text-[14px] leading-relaxed text-[#181818]">
                        {row.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </LookbookScrollReveal>
            </section>
          );
        }

        return null;
      })}
    </LookbookAboutPageShell>
  );
}
