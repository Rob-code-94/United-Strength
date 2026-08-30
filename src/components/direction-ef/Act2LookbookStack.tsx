/**
 * Odd Ritual–style asymmetrical raw photo deck (EF only).
 * Tall track + sticky viewport · prints stack ON TOP (rising z-index).
 * Mobile: longer runway + dwell per print · Safari-safe sticky frame · free-scroll hysteresis.
 * Culture Club tokens · gymPhotos · no card frames / ghost shells.
 */
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { gymPhotos } from "../../assets/images/gym";
import { LOOKBOOK_EASE } from "./lookbook";

interface SubViewProps {
  onNav: (href: string, label: string) => void;
  /** When true, parent scrollport should drop snap + scroll-smooth */
  onFreeScrollZoneChange?: (active: boolean) => void;
}

const CREST_OFFSET = "4.5rem";
const MD_QUERY = "(min-width: 768px)";
/** Mobile track multiplier — longer runway so each print can dwell before the next */
const MOBILE_RUNWAY_PER_PRINT = 1.45;
const DESKTOP_RUNWAY_PER_PRINT = 1.05;

interface PhotoPrint {
  id: string;
  label: string;
  image: string;
  imageAlt: string;
  /** Desktop / wide */
  widthPct: number;
  /** Mobile-first (narrow) — larger so prints fill the deck */
  widthPctMobile: number;
  aspect: string;
  xPct: number;
  yPct: number;
  /** Slightly tighter offsets on mobile so large prints stay in frame */
  xPctMobile: number;
  yPctMobile: number;
  rotateDeg: number;
  membership?: boolean;
}

const PHOTOS: PhotoPrint[] = [
  {
    id: "architecture",
    label: "Architecture",
    image: gymPhotos.architectureRaw,
    imageAlt: "United Strength — architecture",
    widthPct: 42,
    widthPctMobile: 78,
    aspect: "3 / 4",
    xPct: -28,
    yPct: -12,
    xPctMobile: -8,
    yPctMobile: 4,
    rotateDeg: -2,
  },
  {
    id: "light",
    label: "Light",
    image: gymPhotos.spaceAtmosphere,
    imageAlt: "United Strength — natural light",
    widthPct: 58,
    widthPctMobile: 88,
    aspect: "16 / 9",
    xPct: 18,
    yPct: 22,
    xPctMobile: 6,
    yPctMobile: 18,
    rotateDeg: 1,
  },
  {
    id: "equipment",
    label: "Equipment",
    image: gymPhotos.galleryCinematic,
    imageAlt: "United Strength — equipment bay",
    widthPct: 52,
    widthPctMobile: 82,
    aspect: "4 / 5",
    xPct: -8,
    yPct: 8,
    xPctMobile: -4,
    yPctMobile: 12,
    rotateDeg: -1,
  },
  {
    id: "membership",
    label: "Membership",
    image: gymPhotos.heroFullBleed,
    imageAlt: "United Strength Club — membership",
    widthPct: 62,
    widthPctMobile: 90,
    aspect: "16 / 10",
    xPct: -4,
    yPct: -4,
    xPctMobile: 0,
    yPctMobile: 8,
    rotateDeg: 0,
    membership: true,
  },
];

function findScrollContainer(el: HTMLElement | null): HTMLElement | null {
  let node: HTMLElement | null = el?.parentElement ?? null;
  while (node) {
    const { overflowY } = getComputedStyle(node);
    if (overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay") {
      return node;
    }
    node = node.parentElement;
  }
  return null;
}

function useIsMdUp() {
  const [isMd, setIsMd] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(MD_QUERY).matches : false,
  );

  useEffect(() => {
    const mq = window.matchMedia(MD_QUERY);
    const onChange = () => setIsMd(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isMd;
}

/**
 * Enter + dwell: settle opacity/y before the next print’s enterStart
 * so print N is fully readable before N+1 covers it.
 */
function printEnterWindows(i: number, n: number) {
  const segment = 1 / n;
  const enterStart = i * segment;
  const settleEnd = Math.min(1, enterStart + segment * 0.38);
  const fadeInEnd = Math.min(1, enterStart + segment * 0.22);
  return { enterStart, settleEnd, fadeInEnd };
}

function PrintPlate({
  print,
  i,
  n,
  progress,
  reduceMotion,
  isMd,
  onNav,
}: {
  print: PhotoPrint;
  i: number;
  n: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
  isMd: boolean;
  onNav: (href: string, label: string) => void;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const { enterStart, settleEnd, fadeInEnd } = printEnterWindows(i, n);

  const slideY = useTransform(
    progress,
    i === 0 ? [0, 1] : [enterStart, settleEnd],
    i === 0 ? [0, 0] : [72, 0],
  );
  const opacity = useTransform(
    progress,
    i === 0 ? [0, 1] : [enterStart, fadeInEnd, settleEnd],
    i === 0 ? [1, 1] : [0, 1, 1],
  );

  const widthPct = isMd ? print.widthPct : print.widthPctMobile;
  const xPct = isMd ? print.xPct : print.xPctMobile;
  const yPct = isMd ? print.yPct : print.yPctMobile;

  if (imgFailed) return null;

  return (
    <div
      className="absolute origin-center pointer-events-none"
      style={{
        zIndex: (i + 1) * 10,
        width: `${widthPct}%`,
        aspectRatio: print.aspect,
        left: "50%",
        top: isMd ? "50%" : "52%",
        transform: `translate(calc(-50% + ${xPct}%), calc(-50% + ${yPct}%)) rotate(${print.rotateDeg}deg)`,
      }}
    >
      <motion.div
        className="relative h-full w-full overflow-hidden shadow-[0_12px_40px_rgba(24,24,24,0.18)] pointer-events-auto"
        style={reduceMotion ? { opacity: 1 } : { y: slideY, opacity }}
      >
        <img
          src={print.image}
          alt={print.imageAlt}
          className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none bg-transparent"
          onError={() => setImgFailed(true)}
        />
        <span className="absolute bottom-3 left-3 z-10 font-mono text-[9px] uppercase tracking-[0.28em] text-white/90 drop-shadow-sm">
          {print.label}
        </span>
        {print.membership ? (
          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-2 p-4 bg-gradient-to-t from-black/70 via-black/25 to-transparent pt-16">
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/70">
              ( Membership )
            </span>
            <p
              className="text-[13px] font-bold tracking-[-0.02em] uppercase text-white leading-tight max-w-[16rem]"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              Belonging before transaction
            </p>
            <button
              type="button"
              onClick={() => onNav("/start-here/apply", "Apply for Membership")}
              className="self-start min-h-[44px] px-4 py-2 bg-[#0A3C2E] text-white text-[10px] font-bold tracking-[0.12em] uppercase hover:bg-emerald-900 transition-colors"
            >
              Apply for Membership
            </button>
          </div>
        ) : null}
      </motion.div>
    </div>
  );
}

/**
 * Act 2 close — asymmetric OR photo deck + sparse Start Here chrome.
 */
export default function Act2LookbookStack({ onNav, onFreeScrollZoneChange }: SubViewProps) {
  const reduceMotion = useReducedMotion();
  const isMd = useIsMdUp();
  const trackRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const [scrollBound, setScrollBound] = useState(false);
  /** Bumps when Safari chrome / viewport size changes so sticky + progress remeasure */
  const [layoutEpoch, setLayoutEpoch] = useState(0);
  const freeScrollActive = useRef(false);

  const rebindScroller = () => {
    const next = findScrollContainer(trackRef.current);
    scrollContainerRef.current = next;
    setScrollBound(Boolean(next));
    setLayoutEpoch((e) => e + 1);
  };

  useLayoutEffect(() => {
    rebindScroller();

    const onViewportChange = () => {
      rebindScroller();
    };

    window.addEventListener("resize", onViewportChange);
    window.visualViewport?.addEventListener("resize", onViewportChange);
    window.visualViewport?.addEventListener("scroll", onViewportChange);

    return () => {
      window.removeEventListener("resize", onViewportChange);
      window.visualViewport?.removeEventListener("resize", onViewportChange);
      window.visualViewport?.removeEventListener("scroll", onViewportChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- bind once; rebind via listeners
  }, []);

  /**
   * Free-scroll handoff with hysteresis:
   * ON early as deck approaches; OFF only after it fully leaves below (or above).
   * Prevents snap flicker / “stuck” feel on mobile mid-gesture.
   */
  useEffect(() => {
    const track = trackRef.current;
    const scroller = scrollContainerRef.current;
    if (!track || !scroller) return;

    const setFreeScroll = (free: boolean) => {
      if (freeScrollActive.current === free) return;
      freeScrollActive.current = free;
      onFreeScrollZoneChange?.(free);
    };

    const sync = () => {
      const scrollerRect = scroller.getBoundingClientRect();
      const trackRect = track.getBoundingClientRect();
      /** Engage before heavy scrub — drop snap while Experience hands off */
      const approaching =
        trackRect.top < scrollerRect.bottom + scrollerRect.height * 0.2;
      const peeking = trackRect.top < scrollerRect.bottom - 8;
      const fullyBelow = trackRect.top > scrollerRect.bottom + 80;
      const fullyAbove = trackRect.bottom < scrollerRect.top - 40;

      if (!freeScrollActive.current && (approaching || peeking)) {
        setFreeScroll(true);
      } else if (freeScrollActive.current && (fullyBelow || fullyAbove)) {
        setFreeScroll(false);
      }
    };

    sync();
    scroller.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    window.visualViewport?.addEventListener("resize", sync);
    return () => {
      scroller.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
      window.visualViewport?.removeEventListener("resize", sync);
      if (freeScrollActive.current) {
        freeScrollActive.current = false;
        onFreeScrollZoneChange?.(false);
      }
    };
  }, [scrollBound, layoutEpoch, onFreeScrollZoneChange]);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    container: scrollBound ? scrollContainerRef : undefined,
    offset: ["start start", "end end"],
  });

  const count = PHOTOS.length;
  const runwayPer = isMd ? DESKTOP_RUNWAY_PER_PRINT : MOBILE_RUNWAY_PER_PRINT;

  /** Mobile sticky frame: dynamic viewport + safe-area so Safari chrome doesn’t clip prints */
  const stickyHeight = isMd
    ? `calc(100cqh - ${CREST_OFFSET})`
    : `calc(100dvh - ${CREST_OFFSET} - env(safe-area-inset-bottom, 0px))`;

  return (
    <section
      ref={trackRef}
      className="relative w-full shrink-0 bg-white border-t border-neutral-100 snap-none"
      style={{ height: `${count * runwayPer * 100}cqh` }}
      aria-label="Photo deck"
      data-layout-epoch={layoutEpoch}
    >
      <div
        ref={stickyRef}
        className="sticky w-full overflow-hidden flex flex-col bg-white"
        style={{
          top: CREST_OFFSET,
          height: stickyHeight,
          maxHeight: stickyHeight,
        }}
      >
        <header className="relative z-20 shrink-0 bg-white px-5 pt-3 pb-3 flex flex-col border-b border-neutral-100 md:pt-4 md:pb-3">
          <motion.div
            initial={reduceMotion ? false : { y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: LOOKBOOK_EASE }}
            className="flex flex-wrap items-center gap-x-4 gap-y-1"
          >
            <button
              type="button"
              onClick={() => onNav("/start-here/experience", "Experience United")}
              className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#181818] border-b border-[#181818]/40 pb-0.5 min-h-[44px] flex items-center"
            >
              [ Begin Trial ]
            </button>
            <button
              type="button"
              onClick={() => onNav("/start-here/apply", "Apply for Membership")}
              className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#0A3C2E] border-b border-[#0A3C2E]/50 pb-0.5 min-h-[44px] flex items-center"
            >
              [ Apply ]
            </button>
            <button
              type="button"
              onClick={() => onNav("/about/the-space", "The Space")}
              className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#5C5C5C] border-b border-[#5C5C5C]/35 pb-0.5 min-h-[44px] flex items-center gap-1"
            >
              Explore the Space
              <ChevronRight className="w-3 h-3" />
            </button>
          </motion.div>
        </header>

        {/* isolate traps print z-index so they cannot paint over chrome */}
        <div className="relative z-0 isolate flex-1 min-h-0 w-full overflow-hidden pt-2 md:pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom,0px))]">
          {PHOTOS.map((print, i) => (
            <PrintPlate
              key={print.id}
              print={print}
              i={i}
              n={count}
              progress={scrollYProgress}
              reduceMotion={!!reduceMotion}
              isMd={isMd}
              onNav={onNav}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
