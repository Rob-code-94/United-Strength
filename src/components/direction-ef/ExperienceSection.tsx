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
import { LOOKBOOK_EASE } from "./lookbook";

interface SubViewProps {
  onNav: (href: string, label: string) => void;
}

function CountUp({
  value,
  reduceMotion,
}: {
  value: string;
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
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, motionValue, num, reduceMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
    </span>
  );
}

/**
 * Act 2 — Experience United.
 * One full-viewport F-style split lookbook snap (photo + editorial + 5·14).
 */
export default function ExperienceSection({ onNav }: SubViewProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="box-border w-full h-[100cqh] min-h-[100cqh] max-h-[100cqh] shrink-0 snap-start bg-white border-t border-neutral-100 overflow-hidden flex flex-col"
      aria-labelledby="e-experience-heading"
    >
      {/* Media ~52% */}
      <div className="relative w-full h-[52%] min-h-0 shrink-0 overflow-hidden bg-neutral-100">
        <img
          src={gymPhotos.experienceBroll}
          alt="Experience United — Stronger mural"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
      </div>

      {/* Editorial ~48% */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: LOOKBOOK_EASE }}
        className="flex-1 min-h-0 px-5 py-5 flex flex-col justify-center gap-3 max-w-lg"
      >
        <span
          className="font-mono text-[3rem] leading-none tracking-tight text-[#181818]/15"
          aria-hidden
        >
          04
        </span>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5C5C]">
          ( Start Here )
        </p>
        <h2
          id="e-experience-heading"
          className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]"
        >
          // Experience United
        </h2>
        <p className="text-[13px] leading-relaxed text-[#5C5C5C] max-w-sm">
          Five classes. Fourteen days. Feel the practice and the standard before you apply —
          membership is reviewed, not open checkout.
        </p>

        <div className="flex items-center gap-6 border-t border-neutral-200 pt-3 mt-1">
          <div className="flex flex-col gap-0.5">
            <span className="text-[22px] font-bold tracking-tight text-[#181818] leading-none">
              <CountUp value="5" reduceMotion={reduceMotion} />
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#5C5C5C]">
              Classes
            </span>
          </div>
          <div className="w-px h-8 bg-neutral-200" aria-hidden />
          <div className="flex flex-col gap-0.5">
            <span className="text-[22px] font-bold tracking-tight text-[#181818] leading-none">
              <CountUp value="14" reduceMotion={reduceMotion} />
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#5C5C5C]">
              Days
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onNav("/start-here/experience", "Experience United")}
          className="self-start mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#181818] border-b border-[#181818]/40 pb-0.5 hover:border-[#181818] transition-colors min-h-[44px] flex items-center gap-1.5"
        >
          Start Here
          <ChevronRight className="w-3 h-3" />
        </button>
      </motion.div>
    </section>
  );
}
