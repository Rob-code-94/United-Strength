import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

interface NumberTickerProps {
  end: number;
  start?: number;
  /** Seconds. Matches number-ticker-01 ease-out cubic for `count` mode. */
  duration?: number;
  /** Left-pad with zeros, e.g. 4 → `0001`. */
  pad?: number;
  /** Recount while the element stays in view. */
  loop?: boolean;
  /** Hold the landing number before a looped recount. */
  pauseMs?: number;
  /** Count on mount instead of waiting until the number scrolls into view. */
  immediate?: boolean;
  /** Printed before the digits, e.g. `$`. */
  prefix?: string;
  /**
   * `count` — ease from start to end.
   * `glitch` — brief random-digit flicker, then hard settle (~immediate).
   */
  mode?: "count" | "glitch";
  className?: string;
}

/**
 * Number ticker 01 DNA — count from start to end on enter.
 * `glitch` mode flicks digits then lands. Static at the target when prefers-reduced-motion.
 */
export default function NumberTicker({
  end,
  start = 0,
  duration = 1.4,
  pad = 0,
  loop = false,
  pauseMs = 900,
  immediate = false,
  prefix = "",
  mode = "count",
  className,
}: NumberTickerProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: !loop, amount: 0.6 });
  const [value, setValue] = useState(reduceMotion ? end : start);
  const shouldPlay = immediate || isInView;

  useEffect(() => {
    if (reduceMotion) {
      setValue(end);
      return;
    }
    if (!shouldPlay) return;

    let frame = 0;
    let pause = 0;
    let cancelled = false;

    const formatLanded = () => end;

    const runCount = () => {
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
          runCount();
        }, pauseMs);
      };
      frame = requestAnimationFrame(step);
    };

    const runGlitch = () => {
      if (cancelled) return;
      const glitchMs = Math.min(Math.max(duration * 1000, 180), 400);
      const started = performance.now();
      const span = Math.max(end, 10);

      const step = (timestamp: number) => {
        if (cancelled) return;
        const elapsed = timestamp - started;
        if (elapsed < glitchMs) {
          const flicker = Math.floor(Math.random() * (span + 1));
          setValue(flicker);
          frame = requestAnimationFrame(step);
          return;
        }
        setValue(formatLanded());
        if (!loop) return;
        pause = window.setTimeout(() => {
          setValue(start);
          runGlitch();
        }, pauseMs);
      };
      frame = requestAnimationFrame(step);
    };

    if (mode === "glitch") {
      runGlitch();
    } else {
      runCount();
    }

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      window.clearTimeout(pause);
    };
  }, [duration, end, loop, mode, pauseMs, reduceMotion, shouldPlay, start]);

  const shown = `${prefix}${String(Math.round(value)).padStart(pad, "0")}`;
  const landed = `${prefix}${String(end).padStart(pad, "0")}`;

  return (
    <span ref={ref} className={className}>
      <span aria-hidden>{shown}</span>
      <span className="sr-only">{landed}</span>
    </span>
  );
}
