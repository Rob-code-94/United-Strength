import { gymPhotos } from "../../../assets/images/gym";
import { APPLY_MEMBERSHIP } from "../../../data/journey-copy";
import { usePageCopy } from "../V1Kit";
import {
  HubCopyText,
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

const TYPEFORM_URL = String(import.meta.env.VITE_TYPEFORM_APPLY_URL || "").trim();

/** Convert share/admin Typeform URLs to an embeddable form URL when needed. */
function typeformEmbedSrc(url: string): string {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("typeform.com") && !parsed.pathname.includes("/to/")) {
      return url;
    }
    return url;
  } catch {
    return url;
  }
}

export default function V1ApplyPage({ onBack, onNav }: PageProps) {
  const c = usePageCopy().apply;
  const beginHref = TYPEFORM_URL || APPLY_MEMBERSHIP.mailto;
  const embedSrc = TYPEFORM_URL ? typeformEmbedSrc(TYPEFORM_URL) : "";

  return (
    <V1InteriorShell onNav={onNav}>
      <V1Hero image={gymPhotos.spaceAtmosphere} imageAlt="" onBack={onBack} mediaSlot="applyHero">
        <V1Kicker>{APPLY_MEMBERSHIP.metadata}</V1Kicker>
        <V1Display copyPath="apply.headline" className="mt-4 max-w-[14ch]">
          {c.headline}
        </V1Display>
        <p className="mt-6 max-w-md text-[16px] leading-relaxed text-[#F3EEE7]/85">
          <HubCopyText path="apply.lede">{c.lede}</HubCopyText>
        </p>
      </V1Hero>

      <V1Section>
        <V1Kicker>01 // Why an Application?</V1Kicker>
        <V1Prose
          paragraphs={c.body}
          copyPaths={c.body.map((_, index) => `apply.body.${index}`)}
        />
      </V1Section>

      <V1Section className="bg-[#181818]">
        <V1Heading copyPath="apply.statement.0" className="max-w-[18ch]">
          {c.statement[0]}
        </V1Heading>
        <V1Heading copyPath="apply.statement.1" className="mt-4 max-w-[16ch] text-[#F3EEE7]/80">
          {c.statement[1]}
        </V1Heading>
      </V1Section>

      <V1Section>
        <V1Kicker>02 // What to Expect</V1Kicker>
        <ol className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {c.steps.map((step, index) => (
            <li key={step.n} className="grid grid-cols-12 gap-3 py-5">
              <span className="col-span-2 font-mono text-[12px] tracking-[0.16em] text-[#F3EEE7]/55 md:col-span-1">
                <HubCopyText path={`apply.steps.${index}.n`}>{step.n}</HubCopyText>
              </span>
              <div className="col-span-10 md:col-span-11">
                <p
                  className="font-sans text-[18px] font-bold uppercase tracking-[-0.03em]"
                  style={{ fontFamily: "'Satoshi', sans-serif" }}
                >
                  <HubCopyText path={`apply.steps.${index}.title`}>{step.title}</HubCopyText>
                </p>
                <p className="mt-1 text-[15px] text-[#F3EEE7]/75">
                  <HubCopyText path={`apply.steps.${index}.body`}>{step.body}</HubCopyText>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </V1Section>

      <V1Section label="Begin application">
        <p className="max-w-xl text-[16px] leading-relaxed text-[#F3EEE7]/85">
          <HubCopyText path="apply.closing">{c.closing}</HubCopyText>
        </p>

        {TYPEFORM_URL ? (
          <div className="mt-10 overflow-hidden border border-white/15 bg-[#111111]">
            <iframe
              title="Membership application"
              src={embedSrc}
              className="min-h-[70vh] w-full border-0 bg-[#111111]"
              loading="lazy"
              allow="camera; microphone; autoplay; encrypted-media; fullscreen; clipboard-write"
            />
          </div>
        ) : (
          <div className="mt-10">
            <a
              href={beginHref}
              className="inline-flex min-h-[44px] items-center bg-[#0A3C2E] px-6 font-mono text-[11px] uppercase tracking-[0.22em] text-[#F3EEE7]"
            >
              <HubCopyText path="apply.beginApplicationLabel">{c.beginApplicationLabel}</HubCopyText> →
            </a>
          </div>
        )}
      </V1Section>
    </V1InteriorShell>
  );
}
