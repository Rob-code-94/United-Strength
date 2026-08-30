import { ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";

interface DirectionEPageShellProps {
  /** e.g. "01" */
  chapterN?: string;
  /** e.g. "ABOUT" */
  chapterTitle?: string;
  /** Page H1 */
  title: string;
  onBack: () => void;
  children: ReactNode;
  /** Default light canvas; dark for photo-led pages */
  tone?: "light" | "dark";
  /** Hide footer strip */
  hideFooter?: boolean;
}

/**
 * Shared interior chrome for Direction E About (and future) pages.
 * Spec: docs/wireframes/about-direction-e.md · odd-ritual skill
 */
export default function DirectionEPageShell({
  chapterN = "01",
  chapterTitle = "ABOUT",
  title,
  onBack,
  children,
  tone = "light",
  hideFooter = false,
}: DirectionEPageShellProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={`flex flex-col min-h-full animate-fade-in font-sans ${
        isDark
          ? "bg-[#181818] text-white selection:bg-white/20"
          : "bg-white text-[#181818] selection:bg-neutral-100 selection:text-neutral-900"
      }`}
    >
      <header
        className={`sticky top-0 z-20 px-4 pt-3 pb-3 border-b backdrop-blur-md ${
          isDark
            ? "bg-[#181818]/95 border-white/10"
            : "bg-white/95 border-neutral-100"
        }`}
      >
        <div className="flex items-center gap-2 min-h-[44px]">
          <button
            type="button"
            onClick={onBack}
            className={`min-h-[44px] min-w-[44px] flex items-center justify-center -ml-1 transition-opacity hover:opacity-70 ${
              isDark ? "text-white" : "text-[#181818]"
            }`}
            aria-label="Back to home"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 min-w-0">
            <p
              className={`font-mono text-[9px] uppercase tracking-[0.22em] ${
                isDark ? "text-white/45" : "text-[#5C5C5C]"
              }`}
            >
              {chapterN} // {chapterTitle}
            </p>
            <h1 className="text-[17px] font-bold tracking-[-0.02em] uppercase truncate leading-tight mt-0.5">
              {title}
            </h1>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col">{children}</div>

      {!hideFooter && (
        <footer
          className={`px-6 py-8 border-t shrink-0 ${
            isDark
              ? "bg-[#141414] border-white/10 text-white/45"
              : "bg-neutral-50 border-neutral-100 text-[#5C5C5C]"
          }`}
        >
          <p className="font-mono text-[10px] uppercase tracking-wider leading-relaxed">
            237 Cleveland Ave
            <br />
            Columbus, Ohio 43215
          </p>
        </footer>
      )}
    </div>
  );
}
