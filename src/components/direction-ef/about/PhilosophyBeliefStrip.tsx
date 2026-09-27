import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { gymPhotos } from "../../../assets/images/gym";
import { PHILOSOPHY_HEALTH_AREAS } from "../../../data/about-copy";

type Place = "bottom-left" | "top-right" | "center-left" | "bottom-right" | "top-left";

const FRAMES: { image: string; position: string; place: Place }[] = [
  { image: gymPhotos.floorColumbus, position: "center 45%", place: "bottom-left" },
  { image: gymPhotos.equipmentClose, position: "72% 40%", place: "top-right" },
  { image: gymPhotos.architectureRaw, position: "center 18%", place: "center-left" },
  { image: gymPhotos.rackWeights, position: "28% center", place: "bottom-right" },
  { image: gymPhotos.experienceBroll, position: "center 35%", place: "top-left" },
];

function placeClass(place: Place): string {
  switch (place) {
    case "bottom-left":
      return "md:items-end md:justify-start md:text-left";
    case "top-right":
      return "md:items-start md:justify-end md:text-right";
    case "center-left":
      return "md:items-center md:justify-start md:text-left";
    case "bottom-right":
      return "md:items-end md:justify-end md:text-right";
    case "top-left":
      return "md:items-start md:justify-start md:text-left";
    default: {
      const unreachable: never = place;
      return unreachable;
    }
  }
}

function BeliefPanel({
  index,
  hidden,
  stacked,
}: {
  index: number;
  hidden: boolean;
  stacked: boolean;
}) {
  const area = PHILOSOPHY_HEALTH_AREAS[index];
  const frame = FRAMES[index];
  if (!area || !frame) return null;

  return (
    <article
      className={`relative w-full overflow-hidden ${stacked ? "min-h-[100cqh]" : "h-full"}`}
      aria-label={`${area.n} // ${area.title}`}
      aria-hidden={hidden || undefined}
      inert={hidden || undefined}
    >
      <img
        src={frame.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: frame.position }}
      />
      <div className="absolute inset-0 bg-[#111111]/55" />
      <div
        className={`relative flex h-full items-end justify-start px-5 py-16 text-left md:px-10 md:py-20 ${placeClass(frame.place)}`}
      >
        <div className="max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#F3EEE7]/70">
            {area.n} // {area.title}
          </p>
          <div className="mt-5 flex flex-col gap-4">
            {area.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-[15px] leading-relaxed text-[#F3EEE7] md:text-[17px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/** Stay on the current belief until the scroll is 8% of a panel past the midpoint. */
const SWITCH_MARGIN = 0.08;

function settledIndex(exact: number, previous: number, count: number): number {
  const nearest = Math.min(count - 1, Math.max(0, Math.round(exact)));
  const distance = Math.abs(exact - nearest);
  if (distance < 0.5 - SWITCH_MARGIN) return nearest;
  return previous;
}

/**
 * Vertical scroll drives a full-screen belief strip inside the simulator scroller.
 * The frame follows the scroll position and stops when the scroll stops.
 * Reduced motion stacks the five beliefs instead of translating them.
 */
export default function PhilosophyBeliefStrip() {
  const reduceMotion = useReducedMotion();
  const runwayRef = useRef<HTMLDivElement>(null);
  const settledRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [settled, setSettled] = useState(0);
  const [viewHeight, setViewHeight] = useState(0);
  const count = PHILOSOPHY_HEALTH_AREAS.length;

  const read = () => {
    const node = runwayRef.current;
    const scroller = node?.closest("[data-sim-scroll]");
    if (!node || !(scroller instanceof HTMLElement)) return;
    const height = scroller.clientHeight;
    if (height <= 0) return;
    setViewHeight(height);
    const start = node.getBoundingClientRect().top - scroller.getBoundingClientRect().top;
    const distance = Math.max(height * (count - 1), 1);
    const nextProgress = Math.min(1, Math.max(0, -start / distance));
    setProgress(nextProgress);
    const nextSettled = settledIndex(nextProgress * (count - 1), settledRef.current, count);
    if (nextSettled !== settledRef.current) {
      settledRef.current = nextSettled;
      setSettled(nextSettled);
    }
  };

  const readRef = useRef(read);
  readRef.current = read;

  useLayoutEffect(() => {
    if (reduceMotion) return;
    readRef.current();
  }, [reduceMotion, viewHeight]);

  useEffect(() => {
    if (reduceMotion) return;
    const runway = runwayRef.current;
    const scroller = runway?.closest("[data-sim-scroll]");
    if (!(scroller instanceof HTMLElement) || !runway) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => readRef.current());
    };

    const observer = new ResizeObserver(() => readRef.current());
    observer.observe(scroller);
    observer.observe(runway);
    readRef.current();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      scroller.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <section aria-label="Core beliefs" className="bg-[#111111]">
        {PHILOSOPHY_HEALTH_AREAS.map((area, index) => (
          <BeliefPanel key={area.n} index={index} hidden={false} stacked />
        ))}
      </section>
    );
  }

  const port = viewHeight > 0 ? viewHeight : undefined;
  const offset = progress * (count - 1) * (100 / count);

  return (
    <section
      ref={runwayRef}
      aria-label="Core beliefs"
      className="relative bg-[#111111]"
      style={port ? { height: port * count } : { height: `${count * 100}cqh` }}
    >
      <div
        className="sticky top-0 overflow-hidden"
        style={port ? { height: port } : { height: "100cqh" }}
      >
        <div
          className="flex h-full"
          style={{
            width: `${count * 100}%`,
            transform: `translate3d(-${offset}%, 0, 0)`,
          }}
        >
          {PHILOSOPHY_HEALTH_AREAS.map((area, index) => (
            <div key={area.n} className="h-full" style={{ width: `${100 / count}%` }}>
              <BeliefPanel index={index} hidden={index !== settled} stacked={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
