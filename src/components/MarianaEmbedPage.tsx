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

import { useEffect, useRef, useState } from "react";

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

function marianaTenant(): string {
  return (
    import.meta.env.VITE_MARIANA_TENANT?.trim() || "unitedstrength.sandbox"
  );
}

function buildEmbedSrc(kind: EmbedKind): string {
  const tenant = marianaTenant();
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

/** Sandbox tenant currently denies framing — prefer new-tab handoff. */
function prefersExternalHandoff(tenant: string): boolean {
  return tenant.includes("sandbox");
}

/**
 * Minimal chrome around Mariana iframe — white page, back to club site.
 * When the tenant refuses framing (X-Frame-Options), offer open-in-new-tab.
 */
export default function MarianaEmbedPage({ kind, onBack }: MarianaEmbedPageProps) {
  const tenant = marianaTenant();
  const externalFirst = prefersExternalHandoff(tenant);
  const [loadState, setLoadState] = useState<"loading" | "ready" | "blocked">(
    () => (externalFirst ? "blocked" : "loading"),
  );
  const [frameKey, setFrameKey] = useState(0);
  const [forceEmbed, setForceEmbed] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const title = TITLES[kind];
  const src = buildEmbedSrc(kind);
  const showFrame = !externalFirst || forceEmbed;

  useEffect(() => {
    if (!showFrame) {
      setLoadState("blocked");
      return;
    }
    setLoadState("loading");
    setFrameKey((k) => k + 1);
  }, [kind, showFrame]);

  /** Framing denial still fires load; detect chrome-error / blank when readable. */
  const onFrameLoad = () => {
    const frame = iframeRef.current;
    if (!frame) {
      setLoadState("ready");
      return;
    }
    try {
      const href = frame.contentWindow?.location?.href ?? "";
      if (
        !href ||
        href === "about:blank" ||
        href.startsWith("chrome-error:") ||
        href.startsWith("chrome-untrusted:")
      ) {
        setLoadState("blocked");
        return;
      }
      setLoadState("ready");
    } catch {
      // Opaque cross-origin — usually a successful frame; sandbox often lies.
      // If tenant is sandbox, keep offering handoff via header Open↗.
      setLoadState(externalFirst ? "blocked" : "ready");
    }
  };

  const retry = () => {
    setForceEmbed(true);
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
        <a
          href={src}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-end font-mono text-[10px] uppercase tracking-[0.18em] text-[#0A3C2E] underline-offset-4 hover:underline"
        >
          Open ↗
        </a>
      </header>

      <div className="relative flex-1 min-h-[70vh] w-full bg-white">
        {loadState === "loading" ? (
          <p className="absolute inset-x-0 top-8 z-10 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C5C5C]">
            Loading member tools…
          </p>
        ) : null}

        {loadState === "blocked" || !showFrame ? (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-white px-6 text-center">
            <p
              className="font-sans text-[16px] font-bold uppercase tracking-[-0.03em] text-[#181818]"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              Open member tools
            </p>
            <p className="max-w-[40ch] text-[14px] leading-relaxed text-[#5C5C5C]">
              This Mariana page can&apos;t be shown inside the club site yet
              (framing is blocked on the current tenant). Open it in a new tab
              to buy, book, or manage your account.
            </p>
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center bg-[#0A3C2E] px-6 font-mono text-[11px] uppercase tracking-[0.22em] text-[#F3EEE7]"
            >
              Continue to {title} →
            </a>
            <button
              type="button"
              onClick={retry}
              className="min-h-[44px] px-5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#5C5C5C] underline-offset-4 hover:underline"
            >
              Retry embed
            </button>
          </div>
        ) : (
          <iframe
            ref={iframeRef}
            key={frameKey}
            title={`United Strength — ${title}`}
            src={src}
            className="absolute inset-0 h-full w-full border-0"
            allow="payment *; clipboard-write *"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={onFrameLoad}
            onError={() => setLoadState("blocked")}
          />
        )}
      </div>

      <p className="px-5 py-3 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-[#5C5C5C]">
        Member tools powered by Mariana Tek · Use Open if the frame stays blank
      </p>
    </div>
  );
}
