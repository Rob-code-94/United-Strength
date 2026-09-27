import { useState } from "react";
import { gymPhotos } from "../../../assets/images/gym";
import { V1_FACTS, V1_FACTS_ANSWERS, V1_FACTS_INTRO } from "../../../data/v1-interior-copy";
import {
  V1BackButton,
  V1Display,
  V1InteriorShell,
  V1Kicker,
  V1MediaImg,
  V1Section,
} from "./V1Interior";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

export default function V1FactsPage({ onBack, onNav }: PageProps) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <V1InteriorShell onNav={onNav}>
      <section className="relative border-b border-white/10 px-5 pb-16 pt-24 md:px-10 md:pt-28">
        <V1BackButton onBack={onBack} />
        <div className="mx-auto max-w-6xl">
          <V1Kicker>Facts</V1Kicker>
          <V1Display className="mt-6 max-w-[16ch] text-[34px] md:text-[56px]">{V1_FACTS_INTRO}</V1Display>
        </div>
      </section>

      {V1_FACTS.map((group, groupIndex) => (
        <div key={group.id}>
          <V1Section id={group.id} label={group.title}>
            <V1Kicker>// {group.title}</V1Kicker>
            <ul className="mt-6 border-t border-white/10">
              {group.items.map((item) => {
                const answer = V1_FACTS_ANSWERS[item.n]?.trim() ?? "";
                const active = open === item.n;
                return (
                  <li key={item.n} className="border-b border-white/10">
                    {answer ? (
                      <button
                        type="button"
                        aria-expanded={active}
                        className="flex min-h-[44px] w-full items-baseline gap-4 py-4 text-left"
                        onClick={() => setOpen(active ? null : item.n)}
                      >
                        <span
                          className="font-mono text-[12px] tracking-[0.14em]"
                          style={{ color: active ? "var(--v1-highlight)" : "rgba(243,238,231,0.45)" }}
                        >
                          {item.n}
                        </span>
                        <span className="text-[16px] text-[#F3EEE7]">{item.q}</span>
                      </button>
                    ) : (
                      <div className="flex min-h-[44px] w-full items-baseline gap-4 py-4">
                        <span className="font-mono text-[12px] tracking-[0.14em] text-[#F3EEE7]/45">
                          {item.n}
                        </span>
                        <span className="text-[16px] text-[#F3EEE7]">{item.q}</span>
                      </div>
                    )}
                    {answer && active ? (
                      <p className="pb-4 pl-10 text-[15px] text-[#F3EEE7]/80">{answer}</p>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </V1Section>
          {groupIndex === 1 ? (
            <section aria-label="Facts photograph">
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
