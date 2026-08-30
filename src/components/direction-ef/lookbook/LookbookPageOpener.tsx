import { ChevronLeft } from "lucide-react";
import LookbookScrollReveal from "./LookbookScrollReveal";

interface LookbookPageOpenerProps {
  title: string;
  lede: string;
  metadata: string;
  onBack: () => void;
  tone?: "white" | "alabaster";
}

/** Typographic page opener — off-center F grid + minimal back row. */
export default function LookbookPageOpener({
  title,
  lede,
  metadata,
  onBack,
  tone = "white",
}: LookbookPageOpenerProps) {
  const canvas = tone === "alabaster" ? "bg-[#F3EEE7]" : "bg-white";

  return (
    <section
      className={`box-border w-full px-5 pt-16 pb-14 md:px-8 md:pt-20 md:pb-16 border-b border-neutral-200/60 ${canvas}`}
      aria-labelledby="lookbook-page-opener-title"
    >
      <button
        type="button"
        onClick={onBack}
        className="min-h-[44px] min-w-[44px] flex items-center gap-1 -ml-1 mb-6 text-[#181818] hover:opacity-70 transition-opacity"
        aria-label="Back to home"
      >
        <ChevronLeft className="w-5 h-5 shrink-0" />
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#5C5C5C]">
          Back
        </span>
      </button>

      <LookbookScrollReveal className="mx-auto max-w-6xl grid grid-cols-12 gap-6 md:gap-12 items-end min-w-0">
        <div className="col-span-12 md:col-span-8 min-w-0">
          <h1
            id="lookbook-page-opener-title"
            className="text-[1.75rem] sm:text-[2.1rem] md:text-[2.75rem] font-bold tracking-[-0.04em] uppercase leading-[0.95] text-[#181818] break-words"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            {title}
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#5C5C5C]">{lede}</p>
        </div>
        <div className="col-span-12 md:col-span-4 md:text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5C5C]">
            {metadata}
          </p>
        </div>
      </LookbookScrollReveal>
    </section>
  );
}
