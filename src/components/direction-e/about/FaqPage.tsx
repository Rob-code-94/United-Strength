import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import DirectionEPageShell from "../DirectionEPageShell";

interface PageProps {
  onBack: () => void;
}

const FAQ_ITEMS = [
  {
    q: "What should I expect on my first visit?",
    a: "Arrive early. Meet the space and the standard. Experience United is the recommended first step — feel the practice before you apply.",
  },
  {
    q: "How does membership work?",
    a: "Membership is selective and reviewed by the team. There is no open checkout on the marketing site. Apply when you are ready; we will follow up.",
  },
  {
    q: "What is Experience United?",
    a: "A short entry path — classes over a set window — so you can feel the club before committing. Details live on Start Here → Experience United.",
  },
  {
    q: "Do you publish monthly prices here?",
    a: "No. Public monthly pricing is not shown on this layer. Belonging and community come first; pricing is discussed in the application process.",
  },
  {
    q: "Where are you located?",
    a: "237 Cleveland Ave, Columbus, Ohio 43215 — downtown. The Space page shows the atmosphere; a visit tells the rest.",
  },
  {
    q: "How do I get in touch?",
    a: "Use info@unitedstrengthgym.com for general questions, or apply through Start Here when you are ready to join.",
  },
] as const;

/** FAQ — DNA: faq-02 numbered accordion */
export default function FaqPage({ onBack }: PageProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <DirectionEPageShell title="FAQ" onBack={onBack}>
      <section className="px-6 py-10 bg-[#F3EEE7] border-b border-neutral-200/40">
        <p
          className="text-[22px] leading-snug text-[#181818] max-w-sm"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Questions, answered without the noise.
        </p>
        <p className="mt-3 text-sm text-[#5C5C5C] leading-relaxed max-w-sm">
          Placeholder answers in private-club voice until Todd sends finals.
        </p>
      </section>

      <section className="px-4 py-6">
        <div className="flex flex-col border border-neutral-200">
          {FAQ_ITEMS.map((item, i) => {
            const n = String(i + 1).padStart(2, "0");
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="border-b border-neutral-200 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start gap-3 px-4 py-4 text-left min-h-[56px] group"
                >
                  <span className="font-mono text-[10px] tracking-widest text-[#5C5C5C] pt-0.5 shrink-0">
                    {n}
                  </span>
                  <span className="flex-1 text-[14px] font-bold uppercase tracking-[-0.01em] text-[#181818] leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#5C5C5C] shrink-0 mt-0.5 transition-transform duration-300 ${
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
                      <p className="px-4 pl-11 pb-5 text-sm text-[#5C5C5C] leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </DirectionEPageShell>
  );
}
