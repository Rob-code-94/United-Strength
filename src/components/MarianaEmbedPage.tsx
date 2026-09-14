/**
 * Mariana Tek embed shell — Buy / Schedule / Account.
 * Light canvas required (Mariana cannot sit on dark backgrounds).
 * No Buy/Reserve in marketing nav — deep-link / post-login only.
 *
 * Env (see `.env.example`):
 * - VITE_MARIANA_TENANT (default unitedstrength.sandbox)
 * - VITE_MARIANA_LOCATION_ID (default 48730)
 * - VITE_MARIANA_REGION_ID (optional, default 48547)
 */

import { useEffect, useState } from "react";

type EmbedKind = "buy" | "schedule" | "account";

interface MarianaEmbedPageProps {
  kind: EmbedKind;
  onBack: () => void;
}

const TITLES: Record<EmbedKind, string> = {
  buy: "Buy",
  schedule: "Schedule",
  account: "My Account",
};

function buildEmbedSrc(kind: EmbedKind): string {
  const tenant =
    import.meta.env.VITE_MARIANA_TENANT?.trim() || "unitedstrength.sandbox";
  const locationId =
    import.meta.env.VITE_MARIANA_LOCATION_ID?.trim() || "48730";
  const regionId = import.meta.env.VITE_MARIANA_REGION_ID?.trim() || "48547";

  const base = `https://${tenant}.marianatek.com`;
  const qs = new URLSearchParams({
    location: locationId,
    region: regionId,
  });

  switch (kind) {
    case "buy":
      return `${base}/buy?${qs.toString()}`;
    case "schedule":
      return `${base}/schedule?${qs.toString()}`;
    case "account":
      return `${base}/account?${qs.toString()}`;
    default: {
      const _exhaustive: never = kind;
      return _exhaustive;
    }
  }
}

/**
 * Minimal chrome around Mariana iframe — white page, back to club site.
 */
export default function MarianaEmbedPage({ kind, onBack }: MarianaEmbedPageProps) {
  const [loadState, setLoadState] = useState<"loading" | "ready" | "error">(
    "loading",
  );
  const [frameKey, setFrameKey] = useState(0);
  const title = TITLES[kind];
  const src = buildEmbedSrc(kind);

  useEffect(() => {
    setLoadState("loading");
    setFrameKey((k) => k + 1);
  }, [kind]);

  const retry = () => {
    setLoadState("loading");
    setFrameKey((k) => k + 1);
  };

  return (
    <div className="flex min-h-[100cqh] flex-col bg-white text-[#181818]">
      <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-black/[0.06] bg-white/95 px-5 py-3 backdrop-blur-md">
        <button
          type="button"
          onClick={onBack}
          className="min-h-[44px] min-w-[44px] font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C5C5C] transition-opacity hover:opacity-60"
        >
          ← Club site
        </button>
        <p
          className="font-sans text-[12px] font-bold uppercase tracking-[-0.03em] text-[#181818]"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          {title}
        </p>
        <span className="w-11 shrink-0" aria-hidden />
      </header>

      <div className="relative flex-1 min-h-[70vh] w-full bg-white">
        {loadState === "loading" ? (
          <p className="absolute inset-x-0 top-8 z-10 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C5C5C]">
            Loading member tools…
          </p>
        ) : null}

        {loadState === "error" ? (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-white px-6 text-center">
            <p
              className="font-sans text-[16px] font-bold uppercase tracking-[-0.03em] text-[#181818]"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              Member tools unavailable
            </p>
            <p className="max-w-[36ch] text-[14px] leading-relaxed text-[#5C5C5C]">
              We couldn&apos;t load this page. Check your connection and try again,
              or return to the club site.
            </p>
            <button
              type="button"
              onClick={retry}
              className="min-h-[44px] px-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#0A3C2E] underline-offset-4 hover:underline"
            >
              Retry
            </button>
          </div>
        ) : (
          <iframe
            key={frameKey}
            title={`United Strength — ${title}`}
            src={src}
            className="absolute inset-0 h-full w-full border-0"
            allow="payment *; clipboard-write *"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => setLoadState("ready")}
            onError={() => setLoadState("error")}
          />
        )}
      </div>

      <p className="px-5 py-3 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-[#5C5C5C]">
        Member tools powered by Mariana Tek · Sandbox until Oct 1 cutover
      </p>
    </div>
  );
}
