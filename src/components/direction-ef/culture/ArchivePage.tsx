import { ARCHIVE_PAGE } from "../../../data/culture-copy";
import {
  LookbookAboutPageShell,
  LookbookOffCenteredStack,
  LookbookPageOpener,
  LookbookScrollReveal,
} from "../lookbook";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

/**
 * Archive — Off Centered Stack recipe.
 * Opener → cream jump → scroll-reveal Archives → authors band.
 * Live twin: unitedstrengthgym.com/blog
 */
export default function ArchivePage({ onBack, onNav }: PageProps) {
  const c = ARCHIVE_PAGE;

  return (
    <LookbookAboutPageShell onNav={onNav}>
      <LookbookPageOpener
        title={c.headline}
        lede={c.lede}
        metadata={c.metadata}
        onBack={onBack}
      />

      <section className="px-5 md:px-8 py-8 md:py-10 bg-[#F3EEE7] border-b border-neutral-200/60">
        <LookbookScrollReveal className="mx-auto max-w-6xl flex flex-col gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {c.jumpLabels.map((jump) => (
              <a
                key={jump.id}
                href={`#archive-${jump.id}`}
                className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#181818] min-h-[44px] inline-flex items-center hover:opacity-55 transition-opacity"
              >
                {jump.label}
              </a>
            ))}
          </div>
        </LookbookScrollReveal>
      </section>

      <section
        id="archive-archives"
        className="py-10 md:py-16 bg-white border-b border-neutral-200/60 scroll-mt-24"
      >
        <LookbookOffCenteredStack
          items={c.posts}
          eyebrow="Archives"
          indexLabel="Archive"
        />
      </section>

      <section
        id="archive-authors"
        className="px-5 md:px-8 py-10 md:py-14 bg-[#F3EEE7] border-b border-neutral-200/60 scroll-mt-24"
      >
        <LookbookScrollReveal className="mx-auto max-w-6xl flex flex-col gap-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#5C5C5C] pb-4 border-b border-neutral-200">
            // Authors
          </p>
          <ul className="flex flex-col">
            {c.authors.map((author, i) => {
              const n = String(i + 1).padStart(2, "0");
              return (
                <li
                  key={author.name}
                  className="grid grid-cols-12 gap-3 py-5 border-b border-neutral-200 first:border-t-0"
                >
                  <span className="col-span-2 sm:col-span-1 font-mono text-[10px] tracking-widest text-[#5C5C5C]">
                    {n}
                  </span>
                  <div className="col-span-10 sm:col-span-11 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <span
                      className="text-[15px] font-bold tracking-tight text-[#181818]"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      {author.name}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5C5C]">
                      {author.role}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </LookbookScrollReveal>
      </section>
    </LookbookAboutPageShell>
  );
}
