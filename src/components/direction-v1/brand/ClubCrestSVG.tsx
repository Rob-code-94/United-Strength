interface ClubCrestSVGProps {
  className?: string;
  /** Stroke / fill color — mock uses muted gold-gray */
  color?: string;
}

/**
 * Four-quadrant club crest stand-in until Todd brand kit lands.
 * Quadrants: tree · profile · hourglass · winged foot · central U · bottom stars.
 * Swap this file for an official SVG/PNG without changing footer layout.
 */
export default function ClubCrestSVG({
  className = "w-28 h-auto",
  color = "#8A8070",
}: ClubCrestSVGProps) {
  return (
    <svg
      viewBox="0 0 200 240"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Outer shield */}
      <path
        d="M100 8
           C128 18 162 22 186 28
           L186 110
           C186 168 148 208 100 232
           C52 208 14 168 14 110
           L14 28
           C38 22 72 18 100 8 Z"
        stroke={color}
        strokeWidth="1.4"
      />
      {/* Inner shield */}
      <path
        d="M100 22
           C124 30 152 34 172 40
           L172 108
           C172 158 140 192 100 212
           C60 192 28 158 28 108
           L28 40
           C48 34 76 30 100 22 Z"
        stroke={color}
        strokeWidth="0.9"
        opacity="0.75"
      />
      {/* Cross dividers */}
      <line x1="100" y1="40" x2="100" y2="168" stroke={color} strokeWidth="0.8" opacity="0.7" />
      <line x1="40" y1="104" x2="160" y2="104" stroke={color} strokeWidth="0.8" opacity="0.7" />

      {/* TL — tree */}
      <g stroke={color} strokeWidth="1.1" fill="none" transform="translate(52 52)">
        <path d="M24 48 L24 36" />
        <path d="M18 48 L30 48" />
        <path d="M24 8 L8 32 L40 32 Z" />
        <path d="M24 18 L12 36 L36 36 Z" opacity="0.85" />
      </g>

      {/* TR — profile head */}
      <g stroke={color} strokeWidth="1.1" fill="none" transform="translate(112 54)">
        <path d="M18 8 C28 8 36 16 36 26 C36 36 30 42 22 44 L18 52 L14 44 C8 42 4 34 6 24 C8 14 12 8 18 8 Z" />
        <path d="M22 22 L28 20" opacity="0.6" />
      </g>

      {/* BL — hourglass */}
      <g stroke={color} strokeWidth="1.1" fill="none" transform="translate(54 118)">
        <path d="M10 8 L38 8 L24 28 L38 48 L10 48 L24 28 Z" />
        <line x1="14" y1="12" x2="34" y2="12" opacity="0.5" />
        <line x1="14" y1="44" x2="34" y2="44" opacity="0.5" />
      </g>

      {/* BR — winged foot */}
      <g stroke={color} strokeWidth="1.1" fill="none" transform="translate(112 120)">
        <path d="M28 40 C20 38 12 32 10 24 C18 26 26 30 32 36 Z" />
        <path d="M8 18 C16 10 28 8 38 12 C30 16 20 20 10 22 Z" />
        <path d="M6 24 C14 20 24 18 34 20" opacity="0.7" />
        <path d="M22 36 L30 44" />
      </g>

      {/* Central multi-line U */}
      <g stroke={color} strokeWidth="1.6" fill="none">
        <path d="M78 72 L78 118 C78 132 88 142 100 142 C112 142 122 132 122 118 L122 72" />
        <path
          d="M84 76 L84 116 C84 128 91 136 100 136 C109 136 116 128 116 116 L116 76"
          opacity="0.55"
        />
      </g>

      {/* Bottom stars (3) */}
      <g fill={color} opacity="0.85">
        <path d="M100 186 l1.8 5.2 5.4.2-4.2 3.4 1.5 5.2-4.5-3-4.5 3 1.5-5.2-4.2-3.4 5.4-.2 z" />
        <path d="M84 198 l1.3 3.8 4 .15-3.1 2.5 1.1 3.8-3.3-2.2-3.3 2.2 1.1-3.8-3.1-2.5 4-.15 z" />
        <path d="M116 198 l1.3 3.8 4 .15-3.1 2.5 1.1 3.8-3.3-2.2-3.3 2.2 1.1-3.8-3.1-2.5 4-.15 z" />
      </g>
    </svg>
  );
}
