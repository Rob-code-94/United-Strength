/**
 * Catalog DNA: Shadcn Space `card-22` — Smooth stacked cards
 * Restored: dedicated viewport + Lenis + scale ranges + `-5vh + i*16px` cascade.
 * Kept: large rectangular cards (~70% viewport height, near-full width) + snap per pillar.
 */
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import Lenis from "lenis";
import { pillars } from "./data";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;
const STACK_OFFSET_PX = 16;

function StickyPillarCard({
  pillar,
  i,
  progress,
  range,
  targetScale,
  onNav,
  reduceMotion,
}: {
  pillar: (typeof pillars)[number];
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onNav: (href: string, label: string) => void;
  reduceMotion: boolean;
}) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-0 flex h-[min(36rem,78cqh)] w-full snap-start snap-always items-center justify-center px-3">
      <motion.button
        type="button"
        onClick={() => onNav(pillar.href, pillar.title)}
        style={
          reduceMotion
            ? { top: `${i * STACK_OFFSET_PX}px` }
            : {
                scale,
                top: `calc(-5vh + ${i * STACK_OFFSET_PX}px)`,
              }
        }
        className="group relative flex h-[72%] w-full origin-top flex-col overflow-hidden rounded-2xl border border-zinc-200/60 bg-zinc-900 text-left shadow-xl min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
      >
        <img
          src={pillar.image}
          alt={pillar.imageAlt}
          className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(24,24,24,0.9) 0%, rgba(24,24,24,0.35) 42%, rgba(24,24,24,0.12) 100%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 mt-auto flex flex-col gap-1.5 p-5 text-white">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[1.5rem] tracking-tight tabular-nums text-white/85">
              {pillar.n}
            </span>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
              {pillar.metadata}
            </p>
          </div>
          <h3
            className="text-xl font-bold tracking-[-0.02em] uppercase leading-tight"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            {pillar.title}
          </h3>
          <p className="text-[13px] leading-relaxed text-white/80 line-clamp-3 max-w-md">
            {pillar.body}
          </p>
        </div>
      </motion.button>
    </div>
  );
}

interface PillarsLookbookProps {
  onNav: (href: string, label: string) => void;
}

/**
 * Chapter 03 — Four Pillars: card-22 Lenis smooth stack + large snap cards.
 */
export default function PillarsLookbook({ onNav }: PillarsLookbookProps) {
  const reduceMotion = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollReady, setScrollReady] = useState(false);

  useEffect(() => {
    setScrollReady(true);
  }, []);

  const { scrollYProgress } = useScroll({
    container: scrollReady ? viewportRef : undefined,
  });

  useEffect(() => {
    if (reduceMotion) return;
    const wrapper = viewportRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    const lenis = new Lenis({
      wrapper,
      content,
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, [reduceMotion, scrollReady]);

  const count = pillars.length;

  return (
    <section
      className="relative w-full shrink-0 bg-[#fafafa] border-b border-zinc-200/60 snap-start"
      aria-labelledby="f-pillars-heading"
    >
      <header className="relative z-10 px-5 pt-8 pb-4">
        <motion.div
          initial={reduceMotion ? false : { y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col gap-0.5"
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">
            ( The Four Pillars )
          </p>
          <div className="flex items-baseline gap-2">
            <span
              className="font-mono text-[1.75rem] leading-none tracking-tight text-zinc-900/15"
              aria-hidden
            >
              03
            </span>
            <h2
              id="f-pillars-heading"
              className="text-[1.25rem] font-bold tracking-[-0.03em] uppercase text-zinc-900 leading-tight"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              The Four Pillars
            </h2>
          </div>
          <p className="mt-1 text-[12px] leading-relaxed text-zinc-600">
            Scroll the stack — each pillar layers over the last.
          </p>
        </motion.div>
      </header>

      {/* card-22: Lenis + sticky scale stack in a dedicated viewport */}
      <div
        ref={viewportRef}
        className="relative mx-auto h-[min(36rem,78cqh)] w-full snap-y snap-mandatory overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div
          ref={contentRef}
          className="relative flex flex-col items-center py-10"
          style={{ minHeight: `calc(${count} * min(36rem, 78cqh))` }}
        >
          {pillars.map((pillar, i) => {
            const targetScale = Math.max(0.5, 1 - (count - i - 1) * 0.1);
            return (
              <div
                key={pillar.n}
                className="relative w-full"
                style={{ height: "min(36rem, 78cqh)" }}
              >
                <StickyPillarCard
                  pillar={pillar}
                  i={i}
                  progress={scrollYProgress}
                  range={[i / count, 1]}
                  targetScale={targetScale}
                  onNav={onNav}
                  reduceMotion={!!reduceMotion}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
