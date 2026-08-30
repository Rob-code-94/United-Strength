import ScrollReveal from "./ScrollReveal";
import { footerColumns } from "./data";

interface SiteIndexFooterProps {
  onNav: (href: string, label: string) => void;
}

/**
 * Magazine-style site index footer.
 * Catalog DNA: footer-01 / footer-05 — multi-column + hairline borders.
 */
export default function SiteIndexFooter({ onNav }: SiteIndexFooterProps) {
  return (
    <footer className="box-border w-full px-5 py-12 md:px-8 md:py-16 bg-[#fafafa]">
      <ScrollReveal className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {footerColumns.map((col) => (
            <div key={col.title} className="border-t border-zinc-200/60 pt-4">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-3">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("mailto:") || link.href === "#" ? (
                      <a
                        href={link.href === "#" ? undefined : link.href}
                        className="text-[13px] text-zinc-900 hover:opacity-70 transition-opacity min-h-[44px] inline-flex items-center"
                        onClick={
                          link.href === "#"
                            ? (e) => {
                                e.preventDefault();
                              }
                            : undefined
                        }
                      >
                        {link.label}
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onNav(link.href, link.label)}
                        className="text-[13px] text-zinc-900 hover:opacity-70 transition-opacity min-h-[44px] inline-flex items-center text-left"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-200/60 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
            Designed and Made Locally
          </p>
          <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">
            Direction F · Awake Lookbook
          </p>
        </div>
      </ScrollReveal>
    </footer>
  );
}
