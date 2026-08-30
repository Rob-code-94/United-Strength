import ScrollReveal from "./ScrollReveal";
import { heroCopy } from "./data";

/**
 * Typographic / minimal hero — Awake airy canvas + bold title beside mono metadata.
 * Catalog DNA: hero-04 / hero-26 (stripped).
 */
export default function TypographicHero() {
  return (
    <section
      className="box-border w-full px-5 pt-20 pb-16 md:px-8 md:pt-24 md:pb-20 border-b border-zinc-200/60"
      aria-labelledby="f-hero-heading"
    >
      <ScrollReveal className="mx-auto max-w-6xl grid grid-cols-12 gap-6 md:gap-12 items-end min-w-0">
        <div className="col-span-12 md:col-span-8 min-w-0">
          <h1
            id="f-hero-heading"
            className="text-[1.85rem] sm:text-[2.25rem] md:text-[3.25rem] font-bold tracking-[-0.04em] uppercase leading-[0.95] text-zinc-900 break-words"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            {heroCopy.title}
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-zinc-600">
            {heroCopy.lede}
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 md:text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            {heroCopy.metadata}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
