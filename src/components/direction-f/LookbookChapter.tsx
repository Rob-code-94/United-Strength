import ScrollReveal from "./ScrollReveal";
import type { LookbookChapterData } from "./data";

interface LookbookChapterProps {
  chapter: LookbookChapterData;
}

/**
 * Asymmetrical 12-col lookbook chapter.
 * 01: media cols 1–7, text 9–12 · 02: reverse.
 * Catalog DNA: portfolio-02/04 + about-us-section-09.
 */
export default function LookbookChapter({ chapter }: LookbookChapterProps) {
  const mediaLeft = chapter.align === "media-left";

  const media = (
    <div
      className={
        mediaLeft
          ? "col-span-12 md:col-span-7"
          : "col-span-12 md:col-span-7 md:col-start-6"
      }
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-200">
        <img
          src={chapter.image}
          alt={chapter.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );

  const editorial = (
    <div
      className={
        mediaLeft
          ? "col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-center gap-4 pt-6 md:pt-0"
          : "col-span-12 md:col-span-4 md:col-start-1 md:row-start-1 flex flex-col justify-center gap-4 pt-6 md:pt-0"
      }
    >
      <span
        className="font-mono text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] leading-none tracking-tight text-zinc-900/15"
        aria-hidden
      >
        {chapter.n}
      </span>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
        {chapter.metadata}
      </p>
      <h2
        id={`f-chapter-${chapter.n}`}
        className="text-[1.75rem] md:text-[2rem] font-bold tracking-[-0.03em] uppercase text-zinc-900 leading-tight"
        style={{ fontFamily: "'Satoshi', sans-serif" }}
      >
        {chapter.title}
      </h2>
      <p className="text-[14px] leading-relaxed text-zinc-600 max-w-sm">{chapter.body}</p>
    </div>
  );

  return (
    <section
      className="box-border w-full px-5 py-14 md:px-8 md:py-20 border-b border-zinc-200/60"
      aria-labelledby={`f-chapter-${chapter.n}`}
    >
      <ScrollReveal className="mx-auto max-w-6xl grid grid-cols-12 gap-8 md:gap-12 items-stretch min-w-0">
        {mediaLeft ? (
          <>
            {media}
            {editorial}
          </>
        ) : (
          <>
            {editorial}
            {media}
          </>
        )}
      </ScrollReveal>
    </section>
  );
}
