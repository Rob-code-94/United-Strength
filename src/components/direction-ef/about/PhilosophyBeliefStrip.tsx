import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { gymPhotos } from "../../../assets/images/gym";
import { PHILOSOPHY_HEALTH_AREAS } from "../../../data/about-copy";
import { LOOKBOOK_EASE } from "../lookbook/constants";

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

/**
 * Vertical scroll drives a full-screen belief strip inside the simulator scroller.
 * Reduced motion stacks the five beliefs instead of translating them.
 */
export default function PhilosophyBeliefStrip() {
  const reduceMotion = useReducedMotion();
  const runwayRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [viewHeight, setViewHeight] = useState(0);
  const count = PHILOSOPHY_HEALTH_AREAS.length;
  const active = Math.min(count - 1, Math.round(progress * (count - 1)));

  useEffect(() => {
    if (reduceMotion) return;
    const runway = runwayRef.current;
    const scroller = runway?.closest("[data-sim-scroll]");
    const scrollTarget: HTMLElement | Window =
      scroller instanceof HTMLElement ? scroller : window;

    const measure = () => {
      const height =
        scroller instanceof HTMLElement ? scroller.clientHeight : window.innerHeight;
      setViewHeight(height);
    };

    const update = () => {
      const node = runwayRef.current;
      if (!node) return;
      const viewTop =
        scroller instanceof HTMLElement ? scroller.getBoundingClientRect().top : 0;
      const height =
        scroller instanceof HTMLElement ? scroller.clientHeight : window.innerHeight;
      const start = node.getBoundingClientRect().top - viewTop;
      const distance = Math.max(node.offsetHeight - height, 1);
      setProgress(Math.min(1, Math.max(0, -start / distance)));
    };

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    measure();
    update();
    window.addEventListener("resize", measure);
    scrollTarget.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", measure);
      scrollTarget.removeEventListener("scroll", onScroll);
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
            transform: `translate3d(-${active * (100 / count)}%, 0, 0)`,
            transition: `transform 0.7s cubic-bezier(${LOOKBOOK_EASE.join(",")})`,
          }}
        >
          {PHILOSOPHY_HEALTH_AREAS.map((area, index) => (
            <div key={area.n} className="h-full" style={{ width: `${100 / count}%` }}>
              <BeliefPanel index={index} hidden={index !== active} stacked={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
