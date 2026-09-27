import { Forms03 } from "@/components/shadcn-space/blocks/forms-03";
import { gymPhotos } from "../../../assets/images/gym";
import { APPLY_MEMBERSHIP } from "../../../data/journey-copy";
import {
  V1Display,
  V1Heading,
  V1Hero,
  V1InteriorShell,
  V1Kicker,
  V1Prose,
  V1Section,
} from "./V1Interior";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

export default function V1ApplyPage({ onBack, onNav }: PageProps) {
  const c = APPLY_MEMBERSHIP;

  return (
    <V1InteriorShell onNav={onNav}>
      <V1Hero image={gymPhotos.spaceAtmosphere} imageAlt="" onBack={onBack} mediaSlot="applyHero">
        <V1Kicker>{c.metadata}</V1Kicker>
        <V1Display className="mt-4 max-w-[14ch]">{c.headline}</V1Display>
        <p className="mt-6 max-w-md text-[16px] leading-relaxed text-[#F3EEE7]/85">{c.lede}</p>
      </V1Hero>

      <V1Section>
        <V1Kicker>01 // Why an Application?</V1Kicker>
        <V1Prose paragraphs={c.body} />
      </V1Section>

      <V1Section className="bg-[#181818]">
        <V1Heading className="max-w-[18ch]">{c.statement[0]}</V1Heading>
        <V1Heading className="mt-4 max-w-[16ch] text-[#F3EEE7]/80">{c.statement[1]}</V1Heading>
      </V1Section>

      <V1Section>
        <V1Kicker>02 // What to Expect</V1Kicker>
        <ol className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {c.steps.map((step) => (
            <li key={step.n} className="grid grid-cols-12 gap-3 py-5">
              <span className="col-span-2 font-mono text-[12px] tracking-[0.16em] text-[#F3EEE7]/55 md:col-span-1">
                {step.n}
              </span>
              <div className="col-span-10 md:col-span-11">
                <p className="font-sans text-[18px] font-bold uppercase tracking-[-0.03em]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                  {step.title}
                </p>
                <p className="mt-1 text-[15px] text-[#F3EEE7]/75">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </V1Section>

      <V1Section>
        <p className="max-w-xl text-[16px] leading-relaxed text-[#F3EEE7]/85">{c.closing}</p>
        <div className="mt-10">
          <Forms03 />
        </div>
      </V1Section>
    </V1InteriorShell>
  );
}
