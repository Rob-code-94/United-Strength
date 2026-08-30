import { ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { gymPhotos } from "../../assets/images/gym";

interface SubViewProps {
  onNav: (href: string, label: string) => void;
}

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const TILES = [
  {
    src: gymPhotos.architectureRaw,
    alt: "Architecture",
    label: "Architecture",
    className: "col-span-2 row-span-2 h-[220px]",
  },
  {
    src: gymPhotos.spaceAtmosphere,
    alt: "Natural light",
    label: "Light",
    className: "col-span-1 h-[104px]",
  },
  {
    src: gymPhotos.equipmentClose,
    alt: "Equipment detail",
    label: "Equipment",
    className: "col-span-1 h-[104px]",
  },
  {
    src: gymPhotos.galleryCinematic,
    alt: "Small moment",
    label: "Moments",
    className: "col-span-2 h-[120px]",
  },
] as const;

/** Act 2 — The Space. DNA: gallery-01 mosaic. */
export default function SpaceSection({ onNav }: SubViewProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="w-full min-h-[100cqh] shrink-0 snap-start snap-always bg-white px-4 py-12 flex flex-col gap-6 justify-center border-t border-neutral-100"
      aria-labelledby="e-space-heading"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="px-2 flex flex-col gap-2"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#5C5C5C]">
          The Space
        </span>
        <h2
          id="e-space-heading"
          className="text-[20px] leading-snug text-[#181818] max-w-xs"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Downtown Columbus. Atmosphere before amenities.
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 gap-2">
        {TILES.map((tile) => (
          <div
            key={tile.label}
            className={`relative overflow-hidden group ${tile.className}`}
          >
            <img
              src={tile.src}
              alt={tile.alt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <span className="absolute bottom-2 left-2 z-10 font-mono text-[9px] uppercase tracking-[0.2em] text-white/90">
              {tile.label}
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => onNav("/about/the-space", "The Space")}
        className="self-start mx-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#181818] border-b border-[#181818]/40 pb-0.5 hover:border-[#181818] transition-colors min-h-[44px] flex items-center gap-1.5"
      >
        Explore The Space
        <ChevronRight className="w-3 h-3" />
      </button>
    </section>
  );
}
