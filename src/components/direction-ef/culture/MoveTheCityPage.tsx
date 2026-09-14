import { gymPhotos } from "../../../assets/images/gym";
import { MOVE_THE_CITY } from "../../../data/culture-copy";
import {
  LookbookAboutPageShell,
  LookbookPageOpener,
  LookbookPhotoChapter,
  LookbookScrollReveal,
  LookbookStaggerBody,
} from "../lookbook";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

/**
 * Move the City // Run Club — photo-first community recipe (gallery-01 DNA).
 * Training Classes leaf (Sep 2026) — was Culture. Alias: /culture/move-the-city.
 * Light opener → full-bleed photo → story → partners ruled index.
 * Live twin: unitedstrengthgym.com/our-partners · #ColumbUS
 */
export default function MoveTheCityPage({ onBack, onNav }: PageProps) {
  const c = MOVE_THE_CITY;

  return (
    <LookbookAboutPageShell onNav={onNav}>
      <LookbookPageOpener
        title={c.headline}
        lede={c.lede}
        metadata={c.metadata}
        onBack={onBack}
        tone="alabaster"
      />

      <LookbookPhotoChapter
        image={gymPhotos.runClub}
        imageAlt="Run club — a diverse group of runners on a city street"
        gradientClass="from-black/55 via-black/20 to-transparent"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/70">
          {c.photo.n} // {c.photo.title}
        </p>
        <p
          className="text-[1.5rem] sm:text-[2rem] leading-snug tracking-tight max-w-md"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {c.photo.caption}
        </p>
      </LookbookPhotoChapter>

      <section
        className="box-border w-full px-5 py-14 md:px-8 md:py-24 border-b border-neutral-200/60 bg-white"
        aria-label={`${c.story.n} ${c.story.title}`}
      >
        <LookbookScrollReveal className="mx-auto max-w-6xl grid grid-cols-12 gap-y-8">
          <div className="col-span-12 md:col-span-4">
            <span
              className="font-mono text-[3.5rem] sm:text-[5rem] leading-none tracking-tight text-[#181818]/15"
              aria-hidden
            >
              {c.story.n}
            </span>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C] mt-3">
              // {c.story.title}
            </p>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <LookbookStaggerBody paragraphs={c.story.body} />
          </div>
        </LookbookScrollReveal>
      </section>

      <section
        className="box-border w-full px-5 py-14 md:px-8 md:py-20 border-b border-neutral-200/60 bg-[#F3EEE7]"
        aria-label={`${c.partners.n} ${c.partners.title}`}
      >
        <LookbookScrollReveal className="mx-auto max-w-6xl flex flex-col gap-10">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
              {c.partners.n} // {c.partners.title}
            </p>
            <p className="mt-2 text-[15px] text-[#5C5C5C] max-w-md leading-relaxed">
              {c.partners.lede}
            </p>
          </div>

          <ul className="flex flex-col border-t border-neutral-200">
            {c.partners.rows.map((row, i) => {
              const n = String(i + 1).padStart(2, "0");
              return (
                <li
                  key={row.name}
                  className="grid grid-cols-12 gap-3 py-6 border-b border-neutral-200"
                >
                  <span className="col-span-2 sm:col-span-1 font-mono text-[10px] tracking-widest text-[#5C5C5C] pt-0.5">
                    {n}
                  </span>
                  <div className="col-span-10 sm:col-span-11 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[15px] font-bold tracking-tight text-[#181818] min-h-[44px] inline-flex items-center hover:opacity-55 transition-opacity"
                      style={{ fontFamily: "'Satoshi', sans-serif" }}
                    >
                      {row.name}
                    </a>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5C5C]">
                      {row.focus}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-2">
            <a
              href={c.partnerCta.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#181818] min-h-[44px] inline-flex items-center hover:opacity-55 transition-opacity"
            >
              [ {c.partnerCta.label} ]
            </a>
            <button
              type="button"
              onClick={() => onNav(c.inquire.href, "Contact")}
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#0A3C2E] min-h-[44px] inline-flex items-center hover:opacity-55 transition-opacity text-left"
            >
              [ {c.inquire.label} ]
            </button>
          </div>
        </LookbookScrollReveal>
      </section>
    </LookbookAboutPageShell>
  );
}
