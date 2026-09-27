import strongerUnitedMark from "../../../assets/images/brand/stronger-united.png";
import { useSlot } from "../V1Kit";

interface StrongerUnitedMarkProps {
  className?: string;
}

/**
 * “Stronger United” gold lockup — raster from editorial mock
 * (globe + hand-drawn oval + italic wordmark). Cleanest match until brand kit.
 */
export default function StrongerUnitedMark({
  className = "h-12 w-auto",
}: StrongerUnitedMarkProps) {
  const src = useSlot("strongerUnited", strongerUnitedMark);
  return (
    <img
      src={src}
      alt="Stronger United"
      className={className}
      draggable={false}
    />
  );
}
