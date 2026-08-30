interface LookbookNextCueProps {
  /** Line under the cue — e.g. `02 // Manifesto` */
  next: string;
  /** Affordance label — default Scroll */
  label?: string;
  /** White text/borders for photo chapters */
  onDark?: boolean;
  className?: string;
}

/** Scroll / Next chapter affordance — Odd Ritual lookbook DNA. */
export default function LookbookNextCue({
  next,
  label = "Scroll",
  onDark = false,
  className = "",
}: LookbookNextCueProps) {
  return (
    <div
      className={`flex flex-col gap-1.5 border-t pt-4 ${
        onDark ? "border-white/20" : "border-black/10"
      } ${className}`}
    >
      <span
        className={`font-mono text-[9px] uppercase tracking-[0.3em] ${
          onDark ? "text-white/50" : "text-[#5C5C5C]"
        }`}
      >
        {label}
      </span>
      <div
        className={`flex items-baseline gap-2 ${
          onDark ? "text-white/80" : "text-[#181818]/80"
        }`}
      >
        <span className="text-lg leading-none" aria-hidden>
          ↓
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em]">{next}</span>
      </div>
    </div>
  );
}
