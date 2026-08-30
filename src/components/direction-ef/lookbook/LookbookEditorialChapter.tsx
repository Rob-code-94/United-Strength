import LookbookNextCue from "./LookbookNextCue";
import LookbookScrollReveal from "./LookbookScrollReveal";
import LookbookStaggerBody from "./LookbookStaggerBody";

export type EditorialAlign = "media-left" | "media-right";

interface LookbookEditorialChapterProps {
  n: string;
  title: string;
  metadata?: string;
  body?: string | readonly string[];
  image?: string;
  imageAlt?: string;
  align?: EditorialAlign;
  headline?: string;
  quote?: string;
  next?: string;
  tone?: "white" | "alabaster";
}

/** Off-center 12-col editorial chapter — F layout + Odd Ritual hairlines. */
export default function LookbookEditorialChapter({
  n,
  title,
  metadata,
  body,
  image,
  imageAlt,
  align = "media-left",
  headline,
  quote,
  next,
  tone = "white",
}: LookbookEditorialChapterProps) {
  const mediaLeft = align === "media-left";
  const canvas = tone === "alabaster" ? "bg-[#F3EEE7]" : "bg-white";
  const bodyParagraphs =
    body === undefined ? [] : typeof body === "string" ? [body] : [...body];

  const media = image ? (
    <div
      className={
        mediaLeft
          ? "col-span-12 md:col-span-7"
          : "col-span-12 md:col-span-7 md:col-start-6"
      }
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
        <img
          src={image}
          alt={imageAlt ?? title}
          className="absolute inset-0 h-full w-full object-cover select-none pointer-events-none"
        />
      </div>
    </div>
  ) : null;

  const editorial = (
    <div
      className={
        media
          ? mediaLeft
            ? "col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-center gap-4 pt-6 md:pt-0"
            : "col-span-12 md:col-span-4 md:col-start-1 md:row-start-1 flex flex-col justify-center gap-4 pt-6 md:pt-0"
          : "col-span-12 flex flex-col gap-4 max-w-2xl"
      }
    >
      <span
        className="font-mono text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] leading-none tracking-tight text-[#181818]/15"
        aria-hidden
      >
        {n}
      </span>
      {metadata ? (
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5C5C]">
          {metadata}
        </p>
      ) : null}
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
        // {title}
      </p>
      {headline ? (
        <p
          className="text-[1.35rem] md:text-[1.5rem] leading-[1.22] text-[#181818]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {headline}
        </p>
      ) : null}
      {quote ? (
        <blockquote
          className="text-[1.1rem] leading-snug italic border-l-2 border-[#181818]/20 pl-4 text-[#181818]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {quote}
        </blockquote>
      ) : null}
      {bodyParagraphs.length === 1 ? (
        <p className="text-[14px] leading-relaxed text-[#5C5C5C] max-w-sm">{bodyParagraphs[0]}</p>
      ) : bodyParagraphs.length > 1 ? (
        <LookbookStaggerBody paragraphs={bodyParagraphs} className="max-w-sm" />
      ) : null}
    </div>
  );

  return (
    <section
      className={`box-border w-full px-5 py-14 md:px-8 md:py-20 border-b border-neutral-200/60 ${canvas}`}
      aria-label={`${n} ${title}`}
    >
      <LookbookScrollReveal className="mx-auto max-w-6xl grid grid-cols-12 gap-8 md:gap-12 items-stretch min-w-0">
        {media ? (
          mediaLeft ? (
            <>
              {media}
              {editorial}
            </>
          ) : (
            <>
              {editorial}
              {media}
            </>
          )
        ) : (
          editorial
        )}
      </LookbookScrollReveal>
      {next ? (
        <div className="mx-auto max-w-6xl px-0 mt-10">
          <LookbookNextCue next={next} />
        </div>
      ) : null}
    </section>
  );
}
