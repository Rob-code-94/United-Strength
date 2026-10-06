import type { MediaSlot } from "@/hub/brand-kit";
import { useV1Kit } from "../V1Kit";
import { useHubPencil } from "./V1Interior";

interface V1TeamPortraitProps {
  slot: MediaSlot;
  src: string;
  alt: string;
  className?: string;
}

function isVideoUrl(url: string): boolean {
  return /\.(mp4|webm|mov)(\?|$)/i.test(url);
}

const GRAIN =
  `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

/**
 * Editorial coach portrait — B&W + grain.
 * GIF-ready via `<img>`; hub video URLs (mp4/webm) use muted loop `<video>`.
 */
export default function V1TeamPortrait({ slot, src, alt, className = "" }: V1TeamPortraitProps) {
  const kit = useV1Kit();
  const pencil = useHubPencil(`media-${slot}`);
  const media = (kit.media[slot] || src).trim();
  const video = isVideoUrl(media);

  return (
    <div
      className={`relative aspect-[4/5] w-full overflow-hidden border border-white/15 bg-[#181818] ${className}`}
      {...pencil}
    >
      {video ? (
        <video
          src={media}
          className="absolute inset-0 h-full w-full object-cover object-[center_20%] grayscale contrast-125 brightness-90"
          autoPlay
          muted
          loop
          playsInline
          aria-label={alt}
        />
      ) : (
        <img
          src={media}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover object-[center_20%] grayscale contrast-125 brightness-90 select-none"
          draggable={false}
        />
      )}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
        style={{ backgroundImage: GRAIN }}
        aria-hidden
      />
    </div>
  );
}
