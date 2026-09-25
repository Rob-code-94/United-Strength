import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

interface NumberTickerProps {
  end: number;
  start?: number;
  /** Seconds. Matches number-ticker-01 ease-out cubic. */
  duration?: number;
  /** Left-pad with zeros, e.g. 4 → `0001`. */
  pad?: number;
  /** Recount while the element stays in view. */
  loop?: boolean;
  /** Hold the landing number before a looped recount. */
  pauseMs?: number;
  className?: string;
}

/**
 * Number ticker 01 DNA — count from start to end on enter.
 * `loop` recounts while in view. Static at the target when prefers-reduced-motion.
 */
export default function NumberTicker({
  end,
  start = 0,
  duration = 1.4,
  pad = 0,
  loop = false,
  pauseMs = 900,
  className,
}: NumberTickerProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: !loop, amount: 0.6 });
  const [value, setValue] = useState(reduceMotion ? end : start);

  useEffect(() => {
    if (reduceMotion) {
      setValue(end);
      return;
    }
    if (!isInView) return;

    let frame = 0;
    let pause = 0;
    let cancelled = false;

    const run = () => {
      if (cancelled) return;
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (cancelled) return;
        if (startTime === null) startTime = timestamp;
        const percent = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - percent, 3);
        setValue(start + (end - start) * eased);
        if (percent < 1) {
          frame = requestAnimationFrame(step);
          return;
        }
        if (!loop) return;
        pause = window.setTimeout(() => {
          setValue(start);
          run();
        }, pauseMs);
      };
      frame = requestAnimationFrame(step);
    };

    run();
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      window.clearTimeout(pause);
    };
  }, [duration, end, isInView, loop, pauseMs, reduceMotion, start]);

  const shown = String(Math.round(value)).padStart(pad, "0");

  return (
    <span ref={ref} className={className}>
      {shown}
    </span>
  );
}
