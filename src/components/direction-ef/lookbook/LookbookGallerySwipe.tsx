interface GalleryTile {
  src: string;
  alt: string;
  label: string;
}

interface LookbookGallerySwipeProps {
  tiles: readonly GalleryTile[];
  onDark?: boolean;
}

/** Horizontal scroll-snap gallery — gallery-01 DNA, touch-first. */
export default function LookbookGallerySwipe({ tiles, onDark = false }: LookbookGallerySwipeProps) {
  return (
    <div
      className={`flex gap-2 overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-6 px-6 pb-2 ${
        onDark ? "" : ""
      }`}
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {tiles.map((tile) => (
        <div
          key={tile.label}
          className="relative shrink-0 snap-start w-[72vw] max-w-[280px] aspect-[4/5] overflow-hidden"
        >
          <img
            src={tile.src}
            alt={tile.alt}
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-110 brightness-95 select-none pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          <span className="absolute bottom-3 left-3 z-10 font-mono text-[9px] uppercase tracking-[0.2em] text-white/90">
            {tile.label}
          </span>
        </div>
      ))}
    </div>
  );
}
