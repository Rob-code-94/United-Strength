import strongerUnitedMark from "../../../assets/images/brand/stronger-united.png";

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
  return (
    <img
      src={strongerUnitedMark}
      alt="Stronger United"
      className={className}
      draggable={false}
    />
  );
}
