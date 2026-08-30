import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import { gymPhotos } from "../../assets/images/gym";

interface SubViewProps {
  onNav: (href: string, label: string) => void;
}

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const STATS = [
  { value: "5", label: "Classes", prefix: "", suffix: "" },
  { value: "14", label: "Days", prefix: "", suffix: "" },
] as const;

/** gallery-01 mosaic DNA — experience-focused labels, facility stills only */
const TILES = [
  {
    src: gymPhotos.experienceBroll,
    alt: "Stronger — culture mark in the club",
    label: "Practice",
    className: "col-span-2 row-span-2 h-[220px]",
  },
  {
    src: gymPhotos.galleryCinematic,
    alt: "The floor — SkiErg line",
    label: "Floor",
    className: "col-span-1 h-[104px]",
  },
  {
    src: gymPhotos.spaceAtmosphere,
    alt: "Atmosphere and light",
    label: "Light",
    className: "col-span-1 h-[104px]",
  },
  {
    src: gymPhotos.architectureRaw,
    alt: "Downtown view from United",
    label: "City",
    className: "col-span-2 h-[120px]",
  },
] as const;

function CountUp({
  value,
  prefix,
  suffix,
  reduceMotion,
}: {
  value: string;
  prefix: string;
  suffix: string;
  reduceMotion: boolean | null;
}) {
  const num = parseInt(value, 10) || 0;
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(reduceMotion ? num : 0);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(num);
      return;
    }
    if (!isInView) return;
    const controls = animate(motionValue, num, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, motionValue, num, reduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/**
 * Act 2 — Experience United.
 * DNA: gallery-01 mosaic + about-us-13 CountUp (5 · 14). No public prices.
 */
export default function ExperienceSection({ onNav }: SubViewProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="w-full min-h-[100cqh] shrink-0 snap-start snap-always bg-white px-4 py-12 flex flex-col gap-6 justify-center border-t border-neutral-100"
      aria-labelledby="e-experience-heading"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="px-2 flex flex-col gap-2"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#5C5C5C]">
          04 // Experience United
        </span>
        <h2
          id="e-experience-heading"
          className="text-[22px] leading-snug text-[#181818] max-w-xs"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Feel the practice before you apply.
        </h2>
        <p className="text-sm text-[#5C5C5C] leading-relaxed max-w-sm">
          Five classes over fourteen days. Elevated entry — not open checkout. Membership is
          reviewed by the team.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-2">
        {TILES.map((tile) => (
          <div key={tile.label} className={`relative overflow-hidden group ${tile.className}`}>
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

      <div className="grid grid-cols-2 gap-0 border border-neutral-200 mx-0">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={`flex flex-col gap-1 px-3 py-5 text-center ${
              i < STATS.length - 1 ? "border-r border-neutral-200" : ""
            }`}
          >
            <span className="text-[26px] font-bold tracking-tight text-[#181818] leading-none">
              <CountUp
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                reduceMotion={reduceMotion}
              />
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#5C5C5C]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => onNav("/start-here/experience", "Experience United")}
        className="self-start mx-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#181818] border-b border-[#181818]/40 pb-0.5 hover:border-[#181818] transition-colors min-h-[44px] flex items-center gap-1.5"
      >
        Start Here
        <ChevronRight className="w-3 h-3" />
      </button>
    </section>
  );
}
