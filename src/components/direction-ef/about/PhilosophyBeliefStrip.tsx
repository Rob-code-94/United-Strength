import { useCallback, useRef, useState, type KeyboardEvent, type PointerEvent as ReactPointerEvent } from "react";
import { useReducedMotion } from "motion/react";
import { gymPhotos } from "../../../assets/images/gym";
import { usePageCopy } from "../../direction-v1/V1Kit";
import { HubCopySection, HubCopyText } from "../../direction-v1/pages/V1Interior";
import { LOOKBOOK_EASE } from "../lookbook";

type Place = "bottom-left" | "top-right" | "center-left" | "bottom-right" | "top-left";

const FRAMES: { image: string; position: string; place: Place }[] = [
  { image: gymPhotos.floorColumbus, position: "center 45%", place: "bottom-left" },
  { image: gymPhotos.equipmentClose, position: "72% 40%", place: "top-right" },
  { image: gymPhotos.architectureRaw, position: "center 18%", place: "center-left" },
  { image: gymPhotos.rackWeights, position: "28% center", place: "bottom-right" },
  { image: gymPhotos.experienceBroll, position: "center 35%", place: "top-left" },
];

const SWIPE_THRESHOLD = 48;
const EASE_CSS = `cubic-bezier(${LOOKBOOK_EASE.join(",")})`;

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
  area,
}: {
  index: number;
  hidden: boolean;
  area: { n: string; title: string; body: string[] };
}) {
  const frame = FRAMES[index];
  if (!frame) return null;
  const base = `philosophy.beliefs.${index}`;

  return (
    <article
      className="relative h-full w-full overflow-hidden"
      aria-label={`${area.n} // ${area.title}`}
      aria-hidden={hidden || undefined}
      inert={hidden || undefined}
    >
      <img
        src={frame.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: frame.position }}
        draggable={false}
      />
      <div className="absolute inset-0 bg-[#111111]/55" />
      <div
        className={`relative flex h-full items-end justify-start px-5 pb-36 pt-16 text-left md:px-10 md:pb-40 md:pt-20 ${placeClass(frame.place)}`}
      >
        <HubCopySection prefix={base} className="max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#F3EEE7]/70">
            <HubCopyText path={`${base}.n`} pencil={false}>
              {area.n}
            </HubCopyText>
            {" // "}
            <HubCopyText path={`${base}.title`} pencil={false}>
              {area.title}
            </HubCopyText>
          </p>
          <div className="mt-5 flex flex-col gap-4">
            {area.body.map((paragraph, pIndex) => (
              <HubCopyText
                key={`${base}.body.${pIndex}`}
                path={`${base}.body.${pIndex}`}
                as="p"
                className="text-[15px] leading-relaxed text-[#F3EEE7] md:text-[17px]"
                pencil={false}
              >
                {paragraph}
              </HubCopyText>
            ))}
          </div>
        </HubCopySection>
      </div>
    </article>
  );
}

/**
 * Click/tap belief carousel — one full panel at a time.
 * Prev/Next arrows + swipe step; no sticky vertical-scroll scrub.
 */
export default function PhilosophyBeliefStrip() {
  const reduceMotion = useReducedMotion();
  const beliefs = usePageCopy().philosophy.beliefs;
  const count = beliefs.length;
  const [index, setIndex] = useState(0);
  const pointerStartX = useRef<number | null>(null);
  const pointerId = useRef<number | null>(null);

  const goTo = useCallback(
    (next: number) => {
      setIndex(Math.min(count - 1, Math.max(0, next)));
    },
    [count],
  );

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    }
  };

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if ((event.target as HTMLElement | null)?.closest?.("button")) return;
    pointerStartX.current = event.clientX;
    pointerId.current = event.pointerId;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (pointerId.current !== event.pointerId || pointerStartX.current === null) return;
    const delta = event.clientX - pointerStartX.current;
    pointerStartX.current = null;
    pointerId.current = null;
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      /* already released */
    }
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    if (delta < 0) goTo(index + 1);
    else goTo(index - 1);
  };

  const onPointerCancel = () => {
    pointerStartX.current = null;
    pointerId.current = null;
  };

  const label = String(index + 1).padStart(2, "0");
  const total = String(count).padStart(2, "0");
  const atStart = index <= 0;
  const atEnd = index >= count - 1;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Core beliefs"
      tabIndex={0}
      onKeyDown={onKeyDown}
      className="relative bg-[#111111] outline-none focus-visible:ring-1 focus-visible:ring-[#F3EEE7]/40 focus-visible:ring-inset"
    >
      <div
        className="relative min-h-[100cqh] overflow-hidden touch-pan-y"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        <div
          className="flex h-[100cqh] min-h-[100cqh] will-change-transform"
          style={{
            width: `${count * 100}%`,
            transform: `translate3d(-${index * (100 / count)}%, 0, 0)`,
            transition: reduceMotion ? "none" : `transform 0.7s ${EASE_CSS}`,
          }}
        >
          {beliefs.map((area, i) => (
            <div key={area.n} className="h-full shrink-0" style={{ width: `${100 / count}%` }}>
              <BeliefPanel index={i} hidden={i !== index} area={area} />
            </div>
          ))}
        </div>

        {/* Lookbook control bar — hairline frames · typographic arrows · // index */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-[#111111]/90 via-[#111111]/55 to-transparent px-5 pb-8 pt-16 md:px-10 md:pb-10">
          <div className="mx-auto flex max-w-lg items-stretch justify-between gap-4 border-t border-[#F3EEE7]/25 pt-5">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              disabled={atStart}
              aria-label="Previous belief"
              className="pointer-events-auto inline-flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1 border border-[#F3EEE7]/35 px-3 text-[#F3EEE7] transition-[opacity,border-color] duration-500 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] hover:border-[#F3EEE7]/70 disabled:pointer-events-none disabled:opacity-25"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#F3EEE7]/55">
                Prev
              </span>
              <span className="text-[18px] leading-none" aria-hidden>
                ←
              </span>
            </button>

            <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-1.5 px-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#F3EEE7]/45">
                Belief
              </span>
              <p
                className="font-mono text-[13px] uppercase tracking-[0.22em] text-[#F3EEE7] md:text-[14px]"
                aria-live="polite"
              >
                <span>{label}</span>
                <span className="mx-2 text-[#F3EEE7]/40">//</span>
                <span className="text-[#F3EEE7]/55">{total}</span>
              </p>
            </div>

            <button
              type="button"
              onClick={() => goTo(index + 1)}
              disabled={atEnd}
              aria-label="Next belief"
              className="pointer-events-auto inline-flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1 border border-[#F3EEE7]/35 px-3 text-[#F3EEE7] transition-[opacity,border-color] duration-500 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] hover:border-[#F3EEE7]/70 disabled:pointer-events-none disabled:opacity-25"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#F3EEE7]/55">
                Next
              </span>
              <span className="text-[18px] leading-none" aria-hidden>
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
