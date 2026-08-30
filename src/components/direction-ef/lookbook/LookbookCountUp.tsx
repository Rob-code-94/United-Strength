import { useEffect, useRef, useState } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import { LOOKBOOK_EASE } from "./constants";

interface LookbookCountUpProps {
  /** Display target — e.g. `5`, `14`, `$75` */
  value: string;
  className?: string;
  /** Stagger delay before count starts (seconds) */
  delay?: number;
}

function parseStat(value: string): { prefix: string; num: number; suffix: string } {
  const match = value.match(/^([^0-9]*)(\d+)(.*)$/);
  if (!match) return { prefix: "", num: 0, suffix: value };
  return {
    prefix: match[1] ?? "",
    num: parseInt(match[2] ?? "0", 10) || 0,
    suffix: match[3] ?? "",
  };
}

/**
 * about-us-13 CountUp DNA — counts on enter; click replays.
 * Calm `LOOKBOOK_EASE`; static when `prefers-reduced-motion`.
 */
export default function LookbookCountUp({
  value,
  className = "",
  delay = 0,
}: LookbookCountUpProps) {
  const { prefix, num, suffix } = parseStat(value);
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLButtonElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.45 });
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(reduceMotion ? num : 0);
  const [playKey, setPlayKey] = useState(0);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(num);
      return;
    }
    if (!isInView && playKey === 0) return;

    motionValue.set(0);
    setDisplay(0);
    const controls = animate(motionValue, num, {
      duration: 1.35,
      delay,
      ease: LOOKBOOK_EASE,
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [delay, isInView, motionValue, num, playKey, reduceMotion]);

  const label = `${prefix}${display}${suffix}`;

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => {
        if (reduceMotion) return;
        setPlayKey((k) => k + 1);
      }}
      className={`tabular-nums text-left cursor-pointer touch-manipulation ${className}`}
      aria-label={`${value} — activate to replay count`}
    >
      <span aria-hidden>{label}</span>
      <span className="sr-only">{value}</span>
    </button>
  );
}
