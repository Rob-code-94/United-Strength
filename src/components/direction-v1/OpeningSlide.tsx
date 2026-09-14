import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { LOOKBOOK_EASE } from "../direction-ef/lookbook/constants";

export type OpeningMedia =
  | {
      kind: "image";
      src: string;
      alt: string;
      /** CSS object-position — mobile-safe crop */
      objectPosition?: string;
    }
  | {
      kind: "video";
      src: string;
      poster: string;
      alt: string;
      objectPosition?: string;
    };

interface OpeningSlideProps {
  n: string;
  title: string;
  lede?: string;
  media: OpeningMedia;
  children?: ReactNode;
  /** Stronger scrim for busy photos; false = photo-led immersion */
  emphasizeType?: boolean;
  /** Slow cinematic scale on the media plane (Odd Ritual pacing) */
  cinematic?: boolean;
}

/**
 * Full-viewport opening carousel slide — hero-29 DNA (media plane + scaled type).
 * Video fails → poster still. prefers-reduced-motion → still only.
 * Never mount pricing / 5·14 stats here — Experience United is visual intro only.
 */
export default function OpeningSlide({
  n,
  title,
  lede,
  media,
  children,
  emphasizeType = true,
  cinematic = false,
}: OpeningSlideProps) {
  const reduceMotion = useReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);
  const showVideo =
    media.kind === "video" && !reduceMotion && !videoFailed;

  const imageSrc =
    media.kind === "image" ? media.src : media.poster;
  const alt = media.alt;
  const objectPosition = media.objectPosition ?? "center center";
  const runCinematic = cinematic && !reduceMotion;

  const mediaClassName =
    "absolute inset-0 h-full w-full object-cover";

  return (
    <article
      className="relative shrink-0 w-full min-w-full h-[100cqh] min-h-[100cqh] snap-start snap-always overflow-hidden bg-[#111111]"
      aria-label={`${n} ${title}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        {showVideo ? (
          <video
            className={mediaClassName}
            style={{ objectPosition }}
            src={media.kind === "video" ? media.src : undefined}
            poster={media.kind === "video" ? media.poster : undefined}
            autoPlay
            muted
            loop
            playsInline
            aria-label={alt}
            onError={() => setVideoFailed(true)}
          />
        ) : runCinematic ? (
          <motion.img
            src={imageSrc}
            alt={alt}
            className={mediaClassName}
            style={{ objectPosition }}
            initial={{ scale: 1.04 }}
            animate={{ scale: 1.12 }}
            transition={{
              duration: 22,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ) : (
          <img
            src={imageSrc}
            alt={alt}
            className={mediaClassName}
            style={{ objectPosition }}
          />
        )}
      </div>

      <div
        className={`absolute inset-0 pointer-events-none ${
          emphasizeType
            ? "bg-gradient-to-t from-black/75 via-black/35 to-black/25"
            : "bg-gradient-to-t from-black/55 via-black/15 to-black/10"
        }`}
      />

      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-24 pt-20 md:px-10 md:pb-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: LOOKBOOK_EASE }}
        >
          <p className="font-mono text-[42px] leading-none tracking-[-0.04em] text-[#F3EEE7] md:text-[64px]">
            {n}
          </p>
          <h2
            className="mt-3 max-w-[18ch] font-sans text-[28px] font-bold uppercase leading-[1.05] tracking-[-0.04em] text-[#F3EEE7] md:text-[40px]"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            <span className="text-[#F3EEE7]/55">// </span>
            {title}
          </h2>
          {lede ? (
            <p className="mt-5 max-w-[34ch] text-[15px] leading-relaxed tracking-[-0.01em] text-[#F3EEE7]/90 md:text-[17px]">
              {lede}
            </p>
          ) : null}
          {children}
        </motion.div>
      </div>
    </article>
  );
}
