import type { LegalBlock, LegalDocument } from "../../data/legal-copy";
import V1SiteIndexFooter from "./V1SiteIndexFooter";

interface Props {
  doc: LegalDocument;
  onBack: () => void;
  onNav: (href: string, label: string) => void;
  /** Cross-link to the other legal page */
  sibling: { href: string; label: string };
}

function Blocks({ blocks }: { blocks: readonly LegalBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={`p-${i}`}
                className="text-[15px] leading-[1.7] text-[#F3EEE7]/72 md:text-[16px]"
              >
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul
                key={`l-${i}`}
                className="flex list-none flex-col gap-2 border-l border-[#C4A35A]/35 pl-4"
              >
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="text-[15px] leading-[1.65] text-[#F3EEE7]/72 md:text-[16px]"
                  >
                    <span className="mr-2 text-[#C4A35A]" aria-hidden>
                      ·
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "subsection":
            return (
              <div key={`s-${i}`} className="flex flex-col gap-3 pt-2">
                <h3
                  className="text-[13px] font-semibold tracking-[0.04em] text-[#C4A35A] md:text-[14px]"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  {block.title}
                </h3>
                <div className="flex flex-col gap-3">
                  <Blocks blocks={block.blocks} />
                </div>
              </div>
            );
          default: {
            const _exhaustive: never = block;
            return _exhaustive;
          }
        }
      })}
    </>
  );
}

/**
 * Dark editorial legal document — V1 charcoal / cream / muted gold.
 * Matches footer aesthetic for Mariana-facing permanent URLs.
 */
export default function V1LegalDocumentPage({
  doc,
  onBack,
  onNav,
  sibling,
}: Props) {
  return (
    <div className="min-h-[100dvh] bg-[#0D0D0D] text-[#F3EEE7]">
      <header className="box-border w-full border-b border-[#F3EEE7]/10 px-5 py-6 md:px-10">
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex min-h-[44px] w-fit items-center font-mono text-[10px] uppercase tracking-[0.22em] text-[#F3EEE7]/55 transition-opacity hover:text-[#F3EEE7]/90"
          >
            ← Back
          </button>
          <div className="flex flex-col gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#C4A35A]">
              Effective Date: {doc.effectiveDate}
            </p>
            <h1
              className="text-[28px] leading-[1.1] tracking-[-0.02em] text-[#F3EEE7] md:text-[40px]"
              style={{ fontFamily: "'Satoshi', sans-serif", fontWeight: 700 }}
            >
              {doc.title}
            </h1>
          </div>
        </div>
      </header>

      <article className="box-border w-full px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          <div className="flex flex-col gap-5 border-b border-[#F3EEE7]/10 pb-10">
            {doc.intro.map((p) => (
              <p
                key={p.slice(0, 48)}
                className="text-[15px] leading-[1.7] text-[#F3EEE7]/72 md:text-[16px]"
              >
                {p}
              </p>
            ))}
          </div>

          <ol className="flex list-none flex-col gap-12">
            {doc.sections.map((section) => {
              const n = String(section.number).padStart(2, "0");
              return (
                <li key={section.number} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2 border-b border-[#C4A35A]/25 pb-3 sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="font-mono text-[11px] tracking-[0.18em] text-[#C4A35A]">
                      {n}
                    </span>
                    <h2
                      className="text-[17px] tracking-[-0.01em] text-[#F3EEE7] md:text-[19px]"
                      style={{
                        fontFamily: "'Satoshi', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {section.title}
                    </h2>
                  </div>
                  <div className="flex flex-col gap-4 sm:pl-0 md:pl-[3.25rem]">
                    <Blocks blocks={section.blocks} />
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-[#F3EEE7]/10 pt-8">
            <button
              type="button"
              onClick={() => onNav(sibling.href, sibling.label)}
              className="inline-flex min-h-[44px] items-center font-mono text-[10px] uppercase tracking-[0.22em] text-[#F3EEE7]/65 transition-opacity hover:text-[#C4A35A]"
            >
              {sibling.label}
            </button>
            <button
              type="button"
              onClick={() => onNav("/contact", "Contact")}
              className="inline-flex min-h-[44px] items-center font-mono text-[10px] uppercase tracking-[0.22em] text-[#F3EEE7]/65 transition-opacity hover:text-[#C4A35A]"
            >
              Contact
            </button>
          </div>
        </div>
      </article>

      <V1SiteIndexFooter onNav={onNav} />
    </div>
  );
}
