import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { LOOKBOOK_EASE } from "../direction-ef/lookbook/constants";

interface PassportDigitReelProps {
  /** Digits only — e.g. `0147` or `01` */
  value: string;
  className?: string;
  /** Base delay before first digit (seconds) */
  delay?: number;
}

const DIGIT_STRIP = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;

/**
 * Mechanical flip/slot reel for V1 membership passport (about-us-13 DNA + Odd Ritual easing).
 * Each digit scrolls the 0–9 strip into place; click replays. Static when prefers-reduced-motion.
 */
export default function PassportDigitReel({
  value,
  className = "",
  delay = 0,
}: PassportDigitReelProps) {
  const digitChars = value.replace(/\D/g, "");
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLButtonElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.45 });
  const [playKey, setPlayKey] = useState(0);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setArmed(true);
      return;
    }
    if (!isInView && playKey === 0) return;
    setArmed(false);
    const id = window.setTimeout(() => setArmed(true), 30);
    return () => window.clearTimeout(id);
  }, [delay, digitChars, isInView, playKey, reduceMotion]);

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => {
        if (reduceMotion) return;
        setPlayKey((k) => k + 1);
      }}
      className={`inline-flex items-center gap-1 tabular-nums touch-manipulation cursor-pointer ${className}`}
      aria-label={`${value} — activate to replay`}
    >
      {digitChars.split("").map((char, i) => {
        const target = parseInt(char, 10) || 0;
        return (
          <span
            key={`${digitChars}-${i}-${playKey}`}
            className="relative inline-block h-[1.2em] w-[0.72ch] overflow-hidden border-b border-[#F3EEE7]/30"
            aria-hidden
          >
            {reduceMotion || !armed ? (
              <span className="absolute inset-x-0 top-0 flex h-[1.2em] items-center justify-center">
                {char}
              </span>
            ) : (
              <motion.span
                className="absolute inset-x-0 top-0 flex flex-col"
                initial={{ y: 0 }}
                animate={{ y: `-${target * 1.2}em` }}
                transition={{
                  duration: 1.05 + target * 0.04,
                  delay: delay + i * 0.14,
                  ease: LOOKBOOK_EASE,
                }}
              >
                {DIGIT_STRIP.map((d) => (
                  <span
                    key={d}
                    className="flex h-[1.2em] shrink-0 items-center justify-center"
                  >
                    {d}
                  </span>
                ))}
              </motion.span>
            )}
          </span>
        );
      })}
      <span className="sr-only">{value}</span>
    </button>
  );
}
