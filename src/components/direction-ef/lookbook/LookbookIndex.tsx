interface LookbookIndexProps {
  n: string;
  title: string;
  /** Sparse editorial label e.g. `( Philosophy )` */
  metadata?: string;
  onDark?: boolean;
  /** Optional lede under title */
  lede?: string;
  className?: string;
}

/** Mega mono index + // title + optional ( metadata ). */
export default function LookbookIndex({
  n,
  title,
  metadata,
  onDark = false,
  lede,
  className = "",
}: LookbookIndexProps) {
  return (
    <div className={`flex flex-col gap-3 max-w-sm ${className}`}>
      {n ? (
        <span
          className={`font-mono text-[48px] leading-none tracking-tight ${
            onDark ? "text-white/90" : "text-[#181818]/90"
          }`}
        >
          {n}
        </span>
      ) : null}
      <h2
        className={`font-mono text-[11px] uppercase tracking-[0.28em] ${
          onDark ? "text-white/85" : "text-[#5C5C5C]"
        }`}
      >
        // {title}
      </h2>
      {metadata ? (
        <p
          className={`text-[11px] font-mono uppercase tracking-[0.18em] ${
            onDark ? "text-white/45" : "text-[#5C5C5C]/70"
          }`}
        >
          {metadata}
        </p>
      ) : null}
      {lede ? (
        <p
          className={`text-sm leading-relaxed mt-1 ${
            onDark ? "text-white/75" : "text-[#5C5C5C]"
          }`}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
