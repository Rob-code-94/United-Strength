import type { ReactNode } from "react";
import LookbookIndex from "./LookbookIndex";
import LookbookStaggerBody from "./LookbookStaggerBody";

interface LookbookManifestoSplitProps {
  n: string;
  title: string;
  metadata?: string;
  headline?: string;
  body?: readonly string[];
  quote?: string;
  onDark?: boolean;
  footer?: ReactNode;
}

/** about-us-09/13 DNA — index + serif headline left, stagger body right (stack on mobile). */
export default function LookbookManifestoSplit({
  n,
  title,
  metadata,
  headline,
  body,
  quote,
  onDark = false,
  footer,
}: LookbookManifestoSplitProps) {
  return (
    <div className="flex flex-col gap-8 max-w-sm md:max-w-none md:grid md:grid-cols-2 md:gap-10 pt-4">
      <div className="flex flex-col gap-6">
        <LookbookIndex n={n} title={title} metadata={metadata} onDark={onDark} />
        {headline ? (
          <p
            className={`text-[24px] md:text-[26px] leading-[1.22] ${
              onDark ? "text-white" : "text-[#181818]"
            }`}
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {headline}
          </p>
        ) : null}
        {quote ? (
          <blockquote
            className={`text-[20px] leading-snug italic border-l-2 pl-4 ${
              onDark
                ? "text-white/90 border-white/20"
                : "text-[#181818] border-[#181818]/20"
            }`}
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {quote}
          </blockquote>
        ) : null}
      </div>
      <div className="flex flex-col gap-6 md:pt-8">
        {body && body.length > 0 ? (
          <LookbookStaggerBody paragraphs={body} onDark={onDark} />
        ) : null}
        {footer}
      </div>
    </div>
  );
}
