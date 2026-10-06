import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { gymPhotos } from "../../../assets/images/gym";
import { V1_FACTS } from "../../../data/v1-interior-copy";
import { mergeFaq } from "@/hub/brand-kit";
import { useV1Kit } from "../V1Kit";
import {
  V1BackButton,
  V1Display,
  V1InteriorShell,
  V1Kicker,
  V1MediaImg,
  V1Section,
  useHubPencil,
} from "./V1Interior";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

export default function V1FactsPage({ onBack, onNav }: PageProps) {
  const kit = useV1Kit();
  const faq = mergeFaq(kit.faq);
  const faqPencil = useHubPencil("faq");
  const [open, setOpen] = useState<string | null>(null);
  const byN = new Map(faq.items.map((item) => [item.n, item]));

  return (
    <V1InteriorShell onNav={onNav}>
      <section className="relative border-b border-white/10 px-5 pb-16 pt-24 md:px-10 md:pt-28">
        <V1BackButton onBack={onBack} />
        <div className="mx-auto max-w-6xl" {...faqPencil}>
          <V1Kicker>FAQ</V1Kicker>
          <V1Display className="mt-6 max-w-[16ch] text-[34px] md:text-[56px]">{faq.intro}</V1Display>
        </div>
      </section>

      {V1_FACTS.map((group, groupIndex) => (
        <div key={group.id}>
          <V1Section id={group.id} label={group.title}>
            <V1Kicker>// {group.title}</V1Kicker>
            <ul className="mt-6 border-t border-white/10">
              {group.items.map((item) => {
                const kitItem = byN.get(item.n);
                const question = kitItem?.q?.trim() || item.q;
                const answer = kitItem?.a?.trim() ?? "";
                const active = open === item.n;
                const panelId = `faq-answer-${item.n}`;
                return (
                  <li key={item.n} className="border-b border-white/10">
                    {answer ? (
                      <>
                        <button
                          type="button"
                          aria-expanded={active}
                          aria-controls={panelId}
                          className="flex min-h-[44px] w-full items-baseline gap-4 py-4 text-left"
                          onClick={() => setOpen(active ? null : item.n)}
                        >
                          <span
                            className="w-8 shrink-0 font-mono text-[12px] tracking-[0.14em]"
                            style={{
                              color: active ? "var(--v1-highlight)" : "rgba(243,238,231,0.45)",
                            }}
                          >
                            {item.n}
                          </span>
                          <span className="flex-1 text-[16px] text-[#F3EEE7]">{question}</span>
                          <ChevronDown
                            className={`mt-0.5 h-4 w-4 shrink-0 text-[#F3EEE7]/55 transition-transform duration-500 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] ${
                              active ? "rotate-180" : ""
                            }`}
                            strokeWidth={1.25}
                            aria-hidden
                          />
                        </button>
                        {active ? (
                          <p
                            id={panelId}
                            className="pb-4 pl-12 pr-8 text-[15px] leading-relaxed text-[#F3EEE7]/80 md:pl-12"
                          >
                            {answer}
                          </p>
                        ) : null}
                      </>
                    ) : (
                      <div className="flex min-h-[44px] w-full items-baseline gap-4 py-4">
                        <span className="w-8 shrink-0 font-mono text-[12px] tracking-[0.14em] text-[#F3EEE7]/45">
                          {item.n}
                        </span>
                        <span className="text-[16px] text-[#F3EEE7]">{question}</span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </V1Section>
          {groupIndex === 1 ? (
            <section aria-label="FAQ photograph">
              <V1MediaImg
                slot="factsPhoto"
                src={gymPhotos.architectureRaw}
                alt=""
                className="aspect-[16/7] w-full object-cover"
              />
            </section>
          ) : null}
        </div>
      ))}
    </V1InteriorShell>
  );
}
