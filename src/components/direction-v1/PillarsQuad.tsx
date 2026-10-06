import {
  motion,
  useReducedMotion,
} from "motion/react";
import { gymPhotos } from "../../assets/images/gym";
import { LOOKBOOK_EASE } from "../direction-ef/lookbook";
import { usePageCopy, useSlot } from "./V1Kit";
import { HubCopyText } from "./pages/V1Interior";

const PILLAR_IMAGES = [
  gymPhotos.architectureRaw,
  gymPhotos.galleryCinematic,
  gymPhotos.spaceAtmosphere,
  gymPhotos.equipmentClose,
] as const;

/**
 * Carousel slide 03 — four equal vertical quarters + OpeningSlide-matched chapter chrome.
 * Mid-column US / index / title intentionally overlaps the chapter band; nudged up so
 * matched type sizes don’t collide. Sticky runway parked: `.cursor/fix-backlog.md`.
 */
export default function PillarsQuad() {
  const reduceMotion = useReducedMotion();
  const { home } = usePageCopy();
  const slideTitle = home.opening.slides["03"].title;
  const images = [
    useSlot("pillar1", gymPhotos.architectureRaw),
    useSlot("pillar2", gymPhotos.galleryCinematic),
    useSlot("pillar3", gymPhotos.spaceAtmosphere),
    useSlot("pillar4", gymPhotos.equipmentClose),
  ];
  const pillars = home.opening.pillars.map((pillar, index) => ({
    ...pillar,
    image: images[index] ?? PILLAR_IMAGES[index] ?? gymPhotos.architectureRaw,
  }));

  return (
    <article
      className="relative shrink-0 w-full min-w-full h-[100cqh] min-h-[100cqh] snap-start snap-always overflow-hidden bg-[#111111]"
      aria-label="03 The Four Pillars"
    >
      <div className="absolute inset-0 grid h-full grid-cols-2 grid-rows-2 md:flex md:flex-row">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.n}
            className={`relative h-full min-h-0 min-w-0 border-white/20 md:h-full md:flex-1 ${
              index % 2 === 0 ? "border-r md:border-r-0" : ""
            } ${index < 2 ? "border-b md:border-b-0" : ""} ${
              index > 0 ? "md:border-l" : ""
            }`}
            style={{ zIndex: index + 1 }}
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 28,
                    scale: 0.94,
                  }
            }
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{
              duration: 0.7,
              delay: 0.06 + index * 0.1,
              ease: LOOKBOOK_EASE,
            }}
          >
            <img
              src={pillar.image}
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25" />

            {/* Mid labels — higher than chapter chrome so overlap stays soft */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-1.5 sm:px-2 md:inset-x-0 md:inset-auto md:bottom-[48%]">
              <span
                className="mb-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-[#F3EEE7]/35 text-[9px] font-mono tracking-[0.14em] text-[#F3EEE7]/90 md:mb-2 md:h-8 md:w-8 md:text-[10px]"
                aria-hidden
              >
                US
              </span>
              <p className="font-mono text-[8px] tracking-[0.2em] text-[#F3EEE7]/55 md:text-[9px]">
                <HubCopyText path={`home.opening.pillars.${index}.n`}>{pillar.n}</HubCopyText>
              </p>
              <p
                className="mt-1 text-center font-sans text-[10px] font-bold uppercase leading-tight tracking-[-0.02em] text-[#F3EEE7] sm:text-[11px] md:text-[13px]"
                style={{ fontFamily: "'Satoshi', sans-serif" }}
              >
                <HubCopyText path={`home.opening.pillars.${index}.title`}>{pillar.title}</HubCopyText>
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Same type + padding as OpeningSlide so 03 matches 01 / 02 / 04 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
        <div className="relative z-10 flex flex-col justify-end px-5 pb-16 pt-8 md:px-10 md:pb-28 md:pt-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.35, ease: LOOKBOOK_EASE }}
          >
            <p className="font-mono text-[28px] leading-none tracking-[-0.04em] text-[#F3EEE7] md:text-[64px]">
              03
            </p>
            <h2
              className="mt-3 max-w-[18ch] font-sans text-[28px] font-bold uppercase leading-[1.05] tracking-[-0.04em] text-[#F3EEE7] md:text-[40px]"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              <span className="text-[#F3EEE7]/55">// </span>
              <HubCopyText path="home.opening.slides.03.title">{slideTitle}</HubCopyText>
            </h2>
          </motion.div>
        </div>
      </div>
    </article>
  );
}
