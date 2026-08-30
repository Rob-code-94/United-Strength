import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { FAQ_INTRO, FAQ_ITEMS, type FaqItem } from "../../../data/about-copy";
import {
  LookbookAboutPageShell,
  LookbookPageOpener,
  LookbookScrollReveal,
} from "../lookbook";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

const SECTION_LABELS: Record<FaqItem["section"], string> = {
  general: "General",
  offerings: "Offerings",
  memberships: "Membership",
  location: "Location",
};

const SECTION_ORDER: FaqItem["section"][] = [
  "general",
  "offerings",
  "memberships",
  "location",
];

/**
 * FAQ — full-width index / faq-02 feel.
 * Lighter opener · cream intro band · numbered accordion without card chrome.
 */
export default function FaqPage({ onBack, onNav }: PageProps) {
  const [open, setOpen] = useState<number | null>(0);

  const bySection = SECTION_ORDER.map((section) => ({
    section,
    items: FAQ_ITEMS.map((item, i) => ({ item, i })).filter(
      ({ item }) => item.section === section,
    ),
  })).filter((g) => g.items.length > 0);

  return (
    <LookbookAboutPageShell onNav={onNav}>
      <LookbookPageOpener
        title={FAQ_INTRO.headline}
        lede={FAQ_INTRO.lede}
        metadata="( Index )"
        onBack={onBack}
      />

      {/* Cream index band — section jump labels */}
      <section className="px-5 md:px-8 py-8 md:py-10 bg-[#F3EEE7] border-b border-neutral-200/60">
        <LookbookScrollReveal className="mx-auto max-w-6xl flex flex-col gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {bySection.map(({ section }) => (
              <a
                key={section}
                href={`#faq-${section}`}
                className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#181818] min-h-[44px] inline-flex items-center hover:opacity-55 transition-opacity"
              >
                {SECTION_LABELS[section]}
              </a>
            ))}
          </div>
        </LookbookScrollReveal>
      </section>

      <section className="px-5 md:px-8 py-10 md:py-16 bg-white border-b border-neutral-200/60">
        <div className="mx-auto max-w-6xl flex flex-col gap-12">
          {bySection.map(({ section, items }) => (
            <div key={section} id={`faq-${section}`} className="scroll-mt-24">
              <LookbookScrollReveal>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#5C5C5C] pb-4 border-b border-neutral-200">
                  // {SECTION_LABELS[section]}
                </p>
              </LookbookScrollReveal>
              <div className="flex flex-col">
                {items.map(({ item, i }) => {
                  const n = String(i + 1).padStart(2, "0");
                  const isOpen = open === i;

                  return (
                    <div key={item.q} className="border-b border-neutral-200">
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="w-full flex items-start gap-4 py-5 text-left min-h-[56px] group"
                      >
                        <span className="font-mono text-[11px] tracking-widest text-[#5C5C5C] pt-0.5 shrink-0 w-8">
                          {n}
                        </span>
                        <span
                          className="flex-1 text-[15px] font-bold tracking-[-0.01em] text-[#181818] leading-snug"
                          style={{ fontFamily: "'Satoshi', sans-serif" }}
                        >
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#5C5C5C] shrink-0 mt-1 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="pl-12 pr-8 pb-5 text-[14px] leading-relaxed text-[#5C5C5C] max-w-2xl">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </LookbookAboutPageShell>
  );
}
