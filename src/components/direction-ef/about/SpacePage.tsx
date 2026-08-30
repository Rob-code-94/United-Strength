import { gymPhotos } from "../../../assets/images/gym";
import { SPACE_CHAPTERS, SPACE_EDITORIAL_SECTIONS } from "../../../data/about-copy";
import {
  LookbookAboutPageShell,
  LookbookGallerySwipe,
  LookbookNextCue,
  LookbookPageOpener,
  LookbookScrollReveal,
} from "../lookbook";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

const GALLERY_TILES = [
  { src: gymPhotos.heroFullBleed, alt: "Full facility view", label: "The Room" },
  { src: gymPhotos.architectureRaw, alt: "Architecture", label: "Architecture" },
  { src: gymPhotos.spaceAtmosphere, alt: "Natural light", label: "Light" },
  { src: gymPhotos.equipmentClose, alt: "Equipment", label: "Equipment" },
  { src: gymPhotos.galleryCinematic, alt: "Details", label: "Details" },
  { src: gymPhotos.experienceBroll, alt: "Experience United", label: "Practice" },
] as const;

/**
 * The Space — photo-first recipe.
 * Light opener → gallery dominates → short visit band (less manifesto density).
 */
export default function SpacePage({ onBack, onNav }: PageProps) {
  const { hero, mosaic, visit } = SPACE_CHAPTERS;

  return (
    <LookbookAboutPageShell onNav={onNav}>
      <LookbookPageOpener
        title={hero.headline ?? hero.title}
        lede={hero.lede ?? ""}
        metadata={hero.metadata ?? "( Facility )"}
        onBack={onBack}
        tone="alabaster"
      />

      {SPACE_EDITORIAL_SECTIONS.map((section) => {
        if (section.key === "mosaic") {
          return (
            <section
              key={section.key}
              className="box-border w-full border-b border-neutral-200/60 bg-white"
              aria-label={`${mosaic.n} ${mosaic.title}`}
            >
              <LookbookScrollReveal className="px-5 md:px-8 pt-10 md:pt-14 pb-6 mx-auto max-w-6xl flex flex-col gap-2">
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
                    // {mosaic.title}
                  </p>
                  {mosaic.lede ? (
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#5C5C5C]/80">
                      {mosaic.lede}
                    </p>
                  ) : null}
                </div>
              </LookbookScrollReveal>

              {/* Gallery first — primary visual plane */}
              <div className="w-full px-5 md:px-8 pb-10 md:pb-14">
                <LookbookGallerySwipe tiles={GALLERY_TILES} />
              </div>

              {/* Short caption / member notes — secondary to photos */}
              <LookbookScrollReveal className="px-5 md:px-8 pb-14 md:pb-20 mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 border-t border-neutral-200 pt-8">
                  {mosaic.memberQuote ? (
                    <figure className="flex flex-col gap-3">
                      <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#5C5C5C]">
                        ( Member )
                      </span>
                      <blockquote
                        className="text-[15px] leading-relaxed text-[#181818] italic"
                        style={{ fontFamily: "'Instrument Serif', serif" }}
                      >
                        &ldquo;{mosaic.memberQuote}&rdquo;
                      </blockquote>
                      {mosaic.memberAttribution ? (
                        <figcaption className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#5C5C5C]">
                          — {mosaic.memberAttribution}
                        </figcaption>
                      ) : null}
                    </figure>
                  ) : null}
                  {mosaic.memberQuote2 ? (
                    <figure className="flex flex-col gap-3">
                      <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#5C5C5C]">
                        ( Member )
                      </span>
                      <blockquote
                        className="text-[15px] leading-relaxed text-[#5C5C5C] italic"
                        style={{ fontFamily: "'Instrument Serif', serif" }}
                      >
                        &ldquo;{mosaic.memberQuote2}&rdquo;
                      </blockquote>
                      {mosaic.memberAttribution2 ? (
                        <figcaption className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#5C5C5C]">
                          — {mosaic.memberAttribution2}
                        </figcaption>
                      ) : null}
                    </figure>
                  ) : null}
                </div>
              </LookbookScrollReveal>

              {section.next ? (
                <div className="mx-auto max-w-6xl px-5 md:px-8 pb-10">
                  <LookbookNextCue next={section.next} />
                </div>
              ) : null}
            </section>
          );
        }

        if (section.key === "visit") {
          return (
            <section
              key={section.key}
              className="box-border w-full px-5 py-12 md:px-8 md:py-16 border-b border-neutral-200/60 bg-[#F3EEE7]"
              aria-label="Visit"
            >
              <LookbookScrollReveal className="mx-auto max-w-lg flex flex-col gap-3">
                {visit.metadata ? (
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5C5C]">
                    {visit.metadata}
                  </p>
                ) : null}
                {"title" in visit && visit.title ? (
                  <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
                    // {visit.title}
                  </p>
                ) : null}
                <p className="text-[14px] leading-relaxed text-[#5C5C5C]">{visit.lede}</p>
                {"address" in visit && visit.address ? (
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#181818] border-t border-neutral-200 pt-4 mt-2">
                    {visit.address}
                  </p>
                ) : null}
                {"parking" in visit && visit.parking ? (
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#5C5C5C]">
                    {visit.parking}
                  </p>
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
