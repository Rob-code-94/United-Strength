import { useState } from "react";
import { gymPhotos } from "../../../assets/images/gym";
import Testimonial from "../../shadcn-space/blocks/testimonial-14/testimonial";
import { usePageCopy } from "../V1Kit";
import {
  HubCopyText,
  V1Display,
  V1Hero,
  V1InteriorShell,
  V1Kicker,
  V1MediaImg,
  V1NavButton,
  V1Section,
} from "./V1Interior";
import type { MediaSlot } from "@/hub/brand-kit";

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

const TILE_SLOTS = [
  "spaceTile1",
  "spaceTile2",
  "spaceTile3",
  "spaceTile4",
  "spaceTile5",
  "spaceTile6",
] as const satisfies readonly MediaSlot[];

export default function V1SpacePage({ onBack, onNav }: PageProps) {
  const { space } = usePageCopy();
  const { hero, mosaic, visit, tiles } = space;
  const [open, setOpen] = useState<string | null>(null);
  return (
    <V1InteriorShell onNav={onNav}>
      <V1Hero
        image={gymPhotos.heroFullBleed}
        imageAlt="The United Strength floor"
        onBack={onBack}
        mediaSlot="spaceHero"
      >
        <V1Display className="max-w-[12ch]" copyPath="space.hero.headline">
          {hero.headline}
        </V1Display>
      </V1Hero>

      <section
        className="w-full max-w-full overflow-hidden border-b border-white/10 bg-[#111111]"
        aria-label="Visual gallery"
      >
        <div className="flex w-full min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto px-5 py-10 scrollbar-none md:px-10 md:py-14">
          {tiles.map((tile, index) => {
            const note = tile.note.trim();
            const active = open === tile.n;
            const tileBase = `space.tiles.${index}`;
            return (
              <button
                key={tile.n}
                type="button"
                aria-expanded={note ? active : undefined}
                onClick={() => setOpen(active ? null : tile.n)}
                className="group relative h-[68vh] min-h-[280px] w-[78%] max-w-[420px] shrink-0 snap-start overflow-hidden text-left md:h-[72vh] md:w-[34%] md:max-w-none"
              >
                <V1MediaImg
                  slot={TILE_SLOTS[index]}
                  src={TILE_IMAGES[index]}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <span
                  className={`absolute inset-0 bg-[#111111]/15 transition-colors duration-500 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] motion-reduce:transition-none ${
                    active
                      ? "bg-[#111111]/40"
                      : "group-hover:bg-[#111111]/40 group-focus-visible:bg-[#111111]/40"
                  }`}
                />
                {/* Resting label — Odd Ritual index; yields to glass on hover / tap */}
                <span
                  className={`absolute bottom-4 left-4 right-4 transition-opacity duration-500 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] motion-reduce:transition-none ${
                    note && (active ? "opacity-0" : "group-hover:opacity-0 group-focus-visible:opacity-0")
                  }`}
                >
                  <span className="flex items-baseline gap-2">
                    <span className="font-mono text-[22px] leading-none tracking-tight text-[#F3EEE7]/90">
                      <HubCopyText path={`${tileBase}.n`}>{tile.n}</HubCopyText>
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#F3EEE7]/75">
                      // <HubCopyText path={`${tileBase}.title`}>{tile.title}</HubCopyText>
                    </span>
                  </span>
                </span>
                {note ? (
                  <span
                    className={`pointer-events-none absolute inset-0 flex items-center justify-center px-5 transition-opacity duration-500 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] motion-reduce:transition-none ${
                      active
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                    }`}
                  >
                    <span
                      className={`flex h-[42%] w-full max-w-[22rem] flex-col items-center justify-center border border-[#F3EEE7]/20 bg-[#F3EEE7]/12 px-6 py-7 text-center backdrop-blur-[6px] ${
                        active ? "border-[var(--v1-highlight)]/40" : ""
                      }`}
                    >
                      <span
                        className={`font-mono text-[36px] leading-none tracking-tight text-[#F3EEE7]/90 md:text-[40px] ${
                          active ? "text-[var(--v1-highlight)]" : ""
                        }`}
                      >
                        <HubCopyText path={`${tileBase}.n`}>{tile.n}</HubCopyText>
                      </span>
                      <span className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-[#F3EEE7]/85">
                        // <HubCopyText path={`${tileBase}.title`}>{tile.title}</HubCopyText>
                      </span>
                      <span className="mt-4 h-px w-10 bg-[#F3EEE7]/25" aria-hidden />
                      <HubCopyText
                        path={`${tileBase}.note`}
                        as="span"
                        className="mt-4 max-w-[22ch] text-[17px] leading-relaxed tracking-[-0.01em] text-[#F3EEE7]/80 md:text-[19px]"
                        style={{ fontFamily: "'Satoshi', sans-serif" }}
                      >
                        {note}
                      </HubCopyText>
                    </span>
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </section>

      <Testimonial
        quotes={[
          { name: mosaic.memberAttribution, content: mosaic.memberQuote },
          { name: mosaic.memberAttribution2, content: mosaic.memberQuote2 },
        ]}
        quoteCopyPaths={[
          {
            contentPath: "space.mosaic.memberQuote",
            namePath: "space.mosaic.memberAttribution",
          },
          {
            contentPath: "space.mosaic.memberQuote2",
            namePath: "space.mosaic.memberAttribution2",
          },
        ]}
      />

      <V1Section>
        <V1Kicker>
          <HubCopyText path="space.visit.n">{visit.n}</HubCopyText>
          {" // "}
          <HubCopyText path="space.visit.title">{visit.title}</HubCopyText>
        </V1Kicker>
        <HubCopyText
          path="space.visit.lede"
          as="p"
          className="mt-4 max-w-xl text-[16px] leading-relaxed text-[#F3EEE7]/85"
        >
          {visit.lede}
        </HubCopyText>
        <div className="mt-6">
          <V1NavButton
            label={`${visit.ctaLabel} →`}
            href="/start-here/experience"
            onNav={onNav}
            copyPath="space.visit.ctaLabel"
          />
        </div>
      </V1Section>
    </V1InteriorShell>
  );
}
