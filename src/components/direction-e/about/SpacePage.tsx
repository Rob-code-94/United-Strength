import { gymPhotos } from "../../../assets/images/gym";
import DirectionEPageShell from "../DirectionEPageShell";

interface PageProps {
  onBack: () => void;
}

const TILES = [
  {
    src: gymPhotos.heroFullBleed,
    alt: "Full facility view",
    label: "The Room",
    className: "col-span-2 h-[200px]",
  },
  {
    src: gymPhotos.architectureRaw,
    alt: "Architecture",
    label: "Architecture",
    className: "col-span-1 h-[140px]",
  },
  {
    src: gymPhotos.spaceAtmosphere,
    alt: "Natural light",
    label: "Light",
    className: "col-span-1 h-[140px]",
  },
  {
    src: gymPhotos.equipmentClose,
    alt: "Equipment",
    label: "Equipment",
    className: "col-span-1 h-[140px]",
  },
  {
    src: gymPhotos.galleryCinematic,
    alt: "Details",
    label: "Details",
    className: "col-span-1 h-[140px]",
  },
] as const;

/** The Space — DNA: gallery-01 mosaic */
export default function SpacePage({ onBack }: PageProps) {
  return (
    <DirectionEPageShell title="The Space" onBack={onBack} tone="dark">
      <section className="px-6 py-10">
        <p
          className="text-[22px] leading-snug text-white max-w-sm mb-3"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Downtown Columbus. Atmosphere before amenities.
        </p>
        <p className="text-sm text-white/60 leading-relaxed max-w-sm mb-8">
          Architecture, natural light, equipment, materials, members, and small moments —
          photography carries the feeling of being inside United.
        </p>

        <div className="grid grid-cols-2 gap-2">
          {TILES.map((tile) => (
            <div key={tile.label} className={`relative overflow-hidden group ${tile.className}`}>
              <img
                src={tile.src}
                alt={tile.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <span className="absolute bottom-2 left-2 z-10 font-mono text-[9px] uppercase tracking-[0.2em] text-white/90">
                {tile.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </DirectionEPageShell>
  );
}
