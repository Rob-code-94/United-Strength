import { useCallback, useEffect, useRef, useState } from "react";
import { gymPhotos } from "../../assets/images/gym";
import { gymVideos } from "../../assets/video";
import { usePageCopy, useSlot } from "./V1Kit";
import OpeningSlide from "./OpeningSlide";
import PillarsQuad from "./PillarsQuad";

const SLIDE_COUNT = 4;
/** Experience United — only slide that unlocks parent vertical scroll */
const VERTICAL_UNLOCK_INDEX = 3;

interface OpeningCarouselProps {
  /** `true` only on slide 04; unmount reports `false` */
  onVerticalScrollUnlockChange?: (unlocked: boolean) => void;
}

function findSimScrollStage(from: HTMLElement): HTMLElement | null {
  return from.closest("[data-sim-scroll]");
}

/**
 * Horizontal full-screen opening carousel (PDF §04–10).
 * Slides 01–03: horizontal only. Slide 04: vertical page scroll unlocks.
 */
export default function OpeningCarousel({
  onVerticalScrollUnlockChange,
}: OpeningCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const touchOrigin = useRef<{ x: number; y: number } | null>(null);
  const [active, setActive] = useState(0);
  const verticalLocked = active < VERTICAL_UNLOCK_INDEX;
  const { home } = usePageCopy();
  const slides = home.opening.slides;
  const poster = useSlot("openingClubPoster", gymPhotos.galleryCinematic);
  const believe = useSlot("openingBelieve", gymPhotos.spaceAtmosphere);
  const experience = useSlot("openingExperience", gymPhotos.experienceBroll);

  const syncActive = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const w = el.clientWidth || 1;
    const idx = Math.round(el.scrollLeft / w);
    setActive(Math.max(0, Math.min(SLIDE_COUNT - 1, idx)));
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => syncActive();
    el.addEventListener("scroll", onScroll, { passive: true });
    syncActive();
    return () => el.removeEventListener("scroll", onScroll);
  }, [syncActive]);

  // Report unlock from active slide — do not clear on every active cleanup
  // (that raced Strict Mode / parent and left scroll stuck locked on 04).
  useEffect(() => {
    onVerticalScrollUnlockChange?.(active === VERTICAL_UNLOCK_INDEX);
  }, [active, onVerticalScrollUnlockChange]);

  useEffect(() => {
    return () => onVerticalScrollUnlockChange?.(false);
  }, [onVerticalScrollUnlockChange]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      const el = scrollerRef.current;
      if (!el) return;
      e.preventDefault();
      const w = el.clientWidth;
      const next =
        e.key === "ArrowRight"
          ? Math.min(SLIDE_COUNT - 1, active + 1)
          : Math.max(0, active - 1);
      el.scrollTo({ left: next * w, behavior: "smooth" });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  /**
   * 01–03: block vertical wheel/touch so the page cannot escape.
   * 04: carousel is still full-viewport — browsers often do not chain
   * vertical wheel/touch to the parent, so forward delta to [data-sim-scroll].
   */
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;

      if (verticalLocked) {
        e.preventDefault();
        return;
      }

      const stage = findSimScrollStage(el);
      if (!stage) return;
      e.preventDefault();
      stage.scrollTop += e.deltaY;
    };

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      touchOrigin.current = { x: t.clientX, y: t.clientY };
    };

    const onTouchMove = (e: TouchEvent) => {
      const origin = touchOrigin.current;
      const t = e.touches[0];
      if (!origin || !t) return;
      const dx = t.clientX - origin.x;
      const dy = t.clientY - origin.y;
      if (Math.abs(dy) <= Math.abs(dx) || Math.abs(dy) <= 8) return;

      if (verticalLocked) {
        e.preventDefault();
        return;
      }

      const stage = findSimScrollStage(el);
      if (!stage) return;
      e.preventDefault();
      stage.scrollTop -= dy;
      touchOrigin.current = { x: t.clientX, y: t.clientY };
    };

    const onTouchEnd = () => {
      touchOrigin.current = null;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [verticalLocked]);

  const goTo = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: index * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full min-w-0 h-[100cqh] min-h-[100cqh] shrink-0 overflow-hidden bg-[#111111]"
      aria-roledescription="carousel"
      aria-label="United Strength opening chapters"
    >
      <div
        ref={scrollerRef}
        className="flex h-full w-full min-w-0 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-none overscroll-x-contain overscroll-y-none"
        tabIndex={0}
      >
        <OpeningSlide
          n="01"
          title={slides["01"].title}
          lede={slides["01"].lede}
          copyTitlePath="home.opening.slides.01.title"
          copyLedePath="home.opening.slides.01.lede"
          media={{
            kind: "video",
            src: gymVideos.opening01,
            poster,
            alt: "United Strength — facility",
            objectPosition: "center 40%",
          }}
        />
        <OpeningSlide
          n="02"
          title={slides["02"].title}
          lede={slides["02"].lede}
          copyTitlePath="home.opening.slides.02.title"
          copyLedePath="home.opening.slides.02.lede"
          media={{
            kind: "image",
            src: believe,
            alt: "What We Believe — atmosphere",
            objectPosition: "center center",
          }}
        />
        <PillarsQuad />
        {/* PDF §10 — visual intro only; no 5 CLASSES / 14 DAYS / pricing */}
        <OpeningSlide
          n="04"
          title={slides["04"].title}
          lede={slides["04"].lede}
          copyTitlePath="home.opening.slides.04.title"
          copyLedePath="home.opening.slides.04.lede"
          emphasizeType={false}
          cinematic
          media={{
            kind: "image",
            src: experience,
            alt: "Experience United — STRONGER mural",
            objectPosition: "18% center",
          }}
        />
      </div>

      {/* Editorial horizontal progression — carousel-01/02 DNA */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-5 pb-6 md:px-10 md:pb-8">
        <div
          className="pointer-events-auto flex items-center gap-2 md:gap-3"
          role="tablist"
          aria-label="Opening chapters"
        >
          {Array.from({ length: SLIDE_COUNT }, (_, i) => {
            const n = String(i + 1).padStart(2, "0");
            const isActive = active === i;
            return (
              <button
                key={n}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Chapter ${n}`}
                onClick={() => goTo(i)}
                className={`min-h-[44px] min-w-[44px] px-1 font-mono text-[11px] tracking-[0.18em] transition-opacity duration-500 md:text-[12px] ${
                  isActive
                    ? "text-[#F3EEE7] opacity-100"
                    : "text-[#F3EEE7]/45 opacity-100 hover:opacity-80"
                }`}
              >
                {n}
                {i < SLIDE_COUNT - 1 ? (
                  <span className="ml-2 md:ml-3 text-[#F3EEE7]/25" aria-hidden>
                    —
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
        {active === VERTICAL_UNLOCK_INDEX ? (
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#F3EEE7]/45">
            Scroll <span aria-hidden>↓</span>
          </p>
        ) : (
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            aria-label={`Swipe to chapter ${String(active + 2).padStart(2, "0")}`}
            className="pointer-events-auto inline-flex min-h-11 min-w-11 items-center justify-end gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#F3EEE7]/80"
          >
            <span aria-hidden className="h-px w-8 bg-[#F3EEE7]/70" />
            Swipe
            <span aria-hidden>→</span>
          </button>
        )}
      </div>
    </section>
  );
}
