import { gymPhotos } from "../../../assets/images/gym";
import { MOVE_THE_CITY } from "../../../data/culture-copy";
import { RUN_WITH_US_URL } from "../../../data/v1-interior-copy";
import {
  V1Display,
  V1Heading,
  V1Hero,
  V1HoldControl,
  V1InteriorShell,
  V1Kicker,
  V1MediaImg,
  V1NavButton,
  V1Prose,
  V1Section,
} from "./V1Interior";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

const PEOPLE = [
  gymPhotos.runClub,
  gymPhotos.experienceBroll,
  gymPhotos.galleryCinematic,
  gymPhotos.floorColumbus,
] as const;

const PEOPLE_SLOTS = ["movePeople1", "movePeople2", "movePeople3", "movePeople4"] as const;

/** Move the City is the Run Club. Stand-in stills until Todd sends the run footage. */
export default function V1MoveTheCityPage({ onBack, onNav }: PageProps) {
  const c = MOVE_THE_CITY;

  return (
    <V1InteriorShell onNav={onNav}>
      <V1Hero image={gymPhotos.runClub} imageAlt="Run club on a city street" onBack={onBack} mediaSlot="moveHero">
        <V1Display>
          {c.headline}
          <span className="mt-3 block font-mono text-[14px] font-medium tracking-[0.22em] text-[#F3EEE7]/80 md:text-[16px]">
            {c.subhead}
          </span>
        </V1Display>
      </V1Hero>

      <V1Section>
        <div className="grid items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <V1Kicker>
              {c.story.n} // {c.story.title}
            </V1Kicker>
            <V1Heading className="mt-6">{c.story.headline}</V1Heading>
            <V1Prose paragraphs={c.story.body} />
          </div>
          <div className="md:col-span-7">
            <V1MediaImg
              slot="moveRun"
              src={gymPhotos.runClub}
              alt=""
              className="aspect-[4/5] w-full object-cover md:aspect-[5/4]"
            />
          </div>
        </div>
      </V1Section>

      <section className="relative min-h-[70vh] overflow-hidden border-b border-white/10">
        <V1MediaImg
          slot="moveWide"
          src={gymPhotos.experienceBroll}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#111111]/55" />
        <div className="relative flex min-h-[70vh] items-end px-5 py-16 md:px-10 md:py-24">
          <V1Heading className="max-w-[12ch]">{c.paceStatement}</V1Heading>
        </div>
      </section>

      <V1Section>
        <V1Kicker>
          {c.runs.n} // {c.runs.title}
        </V1Kicker>
        <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {c.runs.rows.map((row) => (
            <li key={row.day} className="flex min-h-[44px] items-baseline justify-between gap-4 py-5">
              <span className="font-sans text-[22px] font-bold uppercase tracking-[-0.03em]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                {row.day}
              </span>
              <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#F3EEE7]/70">
                {row.detail}
              </span>
            </li>
          ))}
        </ul>
      </V1Section>

      <V1Section className="bg-[#181818]">
        <V1Kicker>
          {c.route.n} // {c.route.title}
        </V1Kicker>
        <div className="relative mt-10 h-40 w-full" aria-hidden="true">
          <div className="absolute left-0 right-[12%] top-1/2 h-px bg-[#F3EEE7]/40" />
          <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 bg-[var(--v1-highlight)]" />
          <span className="absolute left-[28%] top-[calc(50%-18px)] font-mono text-[10px] uppercase tracking-[0.16em] text-[#F3EEE7]/50">
            01
          </span>
          <span className="absolute left-[58%] top-[calc(50%-18px)] font-mono text-[10px] uppercase tracking-[0.16em] text-[#F3EEE7]/50">
            02
          </span>
        </div>
        <p className="font-mono text-[12px] uppercase tracking-[0.22em]">{c.route.start}</p>
      </V1Section>

      <section className="border-b border-white/10" aria-label="04 // People">
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 py-10 md:px-10">
          {PEOPLE.map((src, index) => (
            <V1MediaImg
              key={PEOPLE_SLOTS[index]}
              slot={PEOPLE_SLOTS[index]}
              src={src}
              alt=""
              className="h-[280px] w-[78%] max-w-[420px] shrink-0 snap-start object-cover md:h-[420px] md:w-[42%]"
              style={{ objectPosition: index % 2 === 0 ? "center 40%" : "center 60%" }}
            />
          ))}
        </div>
      </section>

      <V1Section>
        <V1Heading>{c.closing.headline}</V1Heading>
        <V1Prose paragraphs={c.closing.body} />
        <div className="mt-8">
          {RUN_WITH_US_URL ? (
            <V1NavButton label={`${c.closing.ctaLabel} →`} href={RUN_WITH_US_URL} onNav={onNav} />
          ) : (
            <V1HoldControl label={`${c.closing.ctaLabel} →`} />
          )}
        </div>
      </V1Section>
    </V1InteriorShell>
  );
}
