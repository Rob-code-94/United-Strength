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
 * Move the City // Run Club — Copywright verbatim (not partnership outreach).
 */
export default function MoveTheCityPage({ onBack, onNav }: PageProps) {
  const c = MOVE_THE_CITY;

  return (
    <LookbookAboutPageShell onNav={onNav}>
      <LookbookPageOpener
        title={c.headline}
        lede={c.subhead}
        metadata={c.metadata}
        onBack={onBack}
        tone="alabaster"
      />

      <LookbookPhotoChapter
        image={gymPhotos.runClub}
        imageAlt="Run club — runners on a city street"
        gradientClass="from-black/55 via-black/20 to-transparent"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/70">
          {c.photo.n} // {c.photo.title}
        </p>
        <p
          className="text-[1.5rem] sm:text-[2rem] leading-snug tracking-tight max-w-md uppercase"
          style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}
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
          <div className="col-span-12 md:col-span-7 md:col-start-6 flex flex-col gap-6">
            <h2
              className="text-[22px] leading-snug tracking-[-0.02em] text-[#181818] md:text-[28px] uppercase"
              style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}
            >
              {c.story.headline}
            </h2>
            <LookbookStaggerBody paragraphs={[...c.story.body]} />
          </div>
        </LookbookScrollReveal>
      </section>

      <section className="relative box-border w-full min-h-[40vh] border-b border-neutral-200/60 overflow-hidden">
        <img
          src={gymPhotos.runClub}
          alt=""
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-40"
        />
        <div className="absolute inset-0 bg-[#181818]/75" />
        <LookbookScrollReveal className="relative z-10 flex min-h-[40vh] items-center justify-center px-5 py-16">
          <p
            className="text-center text-[24px] leading-snug tracking-[-0.02em] text-[#F3EEE7] md:text-[36px] uppercase max-w-xl"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}
          >
            {c.paceStatement}
          </p>
        </LookbookScrollReveal>
      </section>

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-20 border-b border-neutral-200/60 bg-[#F3EEE7]">
        <LookbookScrollReveal className="mx-auto max-w-6xl flex flex-col gap-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            {c.runs.n} // {c.runs.title}
          </p>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {c.runs.rows.map((row) => (
              <li
                key={row.day}
                className="flex flex-col gap-2 border border-[#181818]/15 bg-white p-5 min-h-[44px]"
              >
                <span
                  className="text-[16px] font-bold uppercase tracking-tight text-[#181818]"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  {row.day}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#5C5C5C]">
                  {row.detail}
                </span>
              </li>
            ))}
          </ul>
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#5C5C5C]">
            {c.runs.note}
          </p>
        </LookbookScrollReveal>
      </section>

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-20 border-b border-neutral-200/60 bg-white">
        <LookbookScrollReveal className="mx-auto max-w-xl flex flex-col gap-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            {c.route.n} // {c.route.title}
          </p>
          <p
            className="text-[20px] tracking-[-0.02em] text-[#181818] uppercase"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}
          >
            {c.route.start}
          </p>
          <p className="text-[14px] text-[#5C5C5C] leading-relaxed">
            Route graphic placeholder — final Columbus route treatment plugs in here.
          </p>
        </LookbookScrollReveal>
      </section>

      <section className="box-border w-full px-5 py-16 md:px-8 md:py-24 border-b border-neutral-200/60 bg-[#F3EEE7]">
        <LookbookScrollReveal className="mx-auto max-w-xl flex flex-col gap-6">
          <h2
            className="text-[28px] tracking-[-0.02em] text-[#181818] md:text-[36px] uppercase"
            style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}
          >
            {c.closing.headline}
          </h2>
          {c.closing.body.map((line) => (
            <p key={line} className="text-[15px] leading-relaxed text-[#5C5C5C]">
              {line}
            </p>
          ))}
          <a
            href={c.closing.href}
            className="min-h-[44px] inline-flex items-center justify-center self-start px-5 font-mono text-[10px] uppercase tracking-[0.22em] text-white bg-[#0A3C2E] hover:opacity-90 transition-opacity"
          >
            {c.closing.ctaLabel}
          </a>
        </LookbookScrollReveal>
      </section>
    </LookbookAboutPageShell>
  );
}
