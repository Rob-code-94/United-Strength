interface LookbookTeamPortraitProps {
  src: string;
  alt: string;
  /** When true, image is gym b-roll placeholder until editorial coach shoot */
  isPlaceholder?: boolean;
  darkBand?: boolean;
}

/**
 * Editorial portrait frame — B&W, grain, high contrast.
 * Mood ref: US EDITORIAL Post IMG_6407/6408 · Pinterest May board.
 */
export default function LookbookTeamPortrait({
  src,
  alt,
  isPlaceholder = false,
  darkBand = false,
}: LookbookTeamPortraitProps) {
  return (
    <div
      className={`relative aspect-[3/4] w-full overflow-hidden ${
        darkBand ? "bg-[#181818] border border-white/15" : "bg-neutral-100 border border-black/10"
      }`}
    >
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-[center_20%] grayscale contrast-125 brightness-90 select-none pointer-events-none"
      />
      {/* Film grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      {isPlaceholder ? (
        <span className="absolute top-2 right-2 z-10 font-mono text-[8px] uppercase tracking-[0.2em] text-white/50 bg-black/40 px-1.5 py-0.5">
          Editorial
        </span>
      ) : null}
    </div>
  );
}
