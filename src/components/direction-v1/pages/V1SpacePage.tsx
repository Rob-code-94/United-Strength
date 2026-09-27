import { useState } from "react";
import { gymPhotos } from "../../../assets/images/gym";
import Testimonial from "../../shadcn-space/blocks/testimonial-14/testimonial";
import { SPACE_CHAPTERS } from "../../../data/about-copy";
import { V1_SPACE_TILES } from "../../../data/v1-interior-copy";
import {
  V1Display,
  V1Hero,
  V1InteriorShell,
  V1Kicker,
  V1NavButton,
  V1Section,
} from "./V1Interior";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

const TILE_IMAGES = [
  gymPhotos.floorColumbus,
  gymPhotos.equipmentClose,
  gymPhotos.galleryCinematic,
  gymPhotos.spaceAtmosphere,
  gymPhotos.experienceBroll,
  gymPhotos.architectureRaw,
] as const;

export default function V1SpacePage({ onBack, onNav }: PageProps) {
  const [open, setOpen] = useState<string | null>(null);
  const quotes = SPACE_CHAPTERS.mosaic;

  return (
    <V1InteriorShell onNav={onNav}>
      <V1Hero image={gymPhotos.heroFullBleed} imageAlt="The United Strength floor" onBack={onBack}>
        <V1Display className="max-w-[12ch]">{SPACE_CHAPTERS.hero.headline}</V1Display>
      </V1Hero>

      <section
        className="w-full max-w-full overflow-hidden border-b border-white/10 bg-[#111111]"
        aria-label="Visual gallery"
      >
        <div className="flex w-full min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto px-5 py-10 scrollbar-none md:px-10 md:py-14">
          {V1_SPACE_TILES.map((tile, index) => {
            const note = tile.note.trim();
            const active = open === tile.n;
            return (
              <button
                key={tile.n}
                type="button"
                aria-expanded={note ? active : undefined}
                onClick={() => setOpen(active ? null : tile.n)}
                className="group relative h-[68vh] min-h-[280px] w-[78%] max-w-[420px] shrink-0 snap-start overflow-hidden text-left md:h-[72vh] md:w-[34%] md:max-w-none"
              >
                <img
                  src={TILE_IMAGES[index]}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <span className="absolute inset-0 bg-[#111111]/25 transition-colors group-hover:bg-[#111111]/45 group-focus-visible:bg-[#111111]/45" />
                <span className="absolute bottom-4 left-4 right-4">
                  <span
                    className={`font-mono text-[11px] uppercase tracking-[0.2em] text-[#F3EEE7] group-hover:text-[var(--v1-highlight)] group-focus-visible:text-[var(--v1-highlight)] ${
                      active ? "text-[var(--v1-highlight)]" : ""
                    }`}
                  >
                    {tile.n} // {tile.title}
                  </span>
                  {note ? (
                    <span
                      className={`mt-2 max-w-[28ch] bg-[#111111]/80 px-3 py-2 text-[13px] text-[#F3EEE7] ${
                        active ? "block" : "hidden md:group-hover:block md:group-focus-within:block"
                      }`}
                    >
                      {note}
                    </span>
                  ) : null}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <Testimonial
        quotes={[
          { name: quotes.memberAttribution, content: quotes.memberQuote },
          { name: quotes.memberAttribution2, content: quotes.memberQuote2 },
        ]}
      />

      <V1Section>
        <V1Kicker>Start Here</V1Kicker>
        <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[#F3EEE7]/85">{SPACE_CHAPTERS.visit.lede}</p>
        <div className="mt-6">
          <V1NavButton label="Experience United →" href="/start-here/experience" onNav={onNav} />
        </div>
      </V1Section>
    </V1InteriorShell>
  );
}
