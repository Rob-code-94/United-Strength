import { gymPhotos } from "../../../assets/images/gym";
import { PRIVATE_GROUP, TRAINING_CTA } from "../../../data/training-copy";
import {
  LookbookAboutPageShell,
  LookbookPageOpener,
  LookbookScrollReveal,
  LookbookStaggerBody,
} from "../lookbook";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

/** Private Group — inquiry-forward band (cta-08 DNA). No prices. */
export default function PrivateGroupPage({ onBack, onNav }: PageProps) {
  const c = PRIVATE_GROUP;

  return (
    <LookbookAboutPageShell onNav={onNav}>
      <LookbookPageOpener
        title={c.headline}
        lede={c.lede}
        metadata={c.metadata}
        onBack={onBack}
      />

      <section className="box-border w-full px-5 py-14 md:px-8 md:py-20 border-b border-neutral-200/60 bg-white">
        <LookbookScrollReveal className="mx-auto max-w-xl flex flex-col gap-6">
          <span
            className="font-mono text-[3.5rem] sm:text-[4.5rem] leading-none tracking-tight text-[#181818]/15"
            aria-hidden
          >
            {c.n}
          </span>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#5C5C5C]">
            // {c.title}
          </p>
          <LookbookStaggerBody paragraphs={c.body} />
        </LookbookScrollReveal>
      </section>

      {/* Inquiry band — image statement, no Book/Buy */}
      <section
        className="relative box-border w-full min-h-[50vh] flex flex-col justify-end border-b border-neutral-200/60 overflow-hidden"
        aria-label="Inquire"
      >
        <img
          src={gymPhotos.architectureRaw}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.78) 100%)",
          }}
        />
        <LookbookScrollReveal className="relative z-10 px-5 md:px-8 py-14 md:py-16 mx-auto max-w-6xl w-full flex flex-col gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
            ( Inquire )
          </p>
          <p
            className="text-[1.5rem] sm:text-[2rem] leading-snug text-white max-w-md"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Bring your group into the room.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
            <a
              href={TRAINING_CTA.inquireHref}
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-white min-h-[44px] inline-flex items-center hover:opacity-70 transition-opacity"
            >
              [ {TRAINING_CTA.inquireLabel} ]
            </a>
            <button
              type="button"
              onClick={() => onNav(TRAINING_CTA.applyHref, TRAINING_CTA.applyLabel)}
              className="font-mono text-[10px] uppercase tracking-[0.22em] min-h-[44px] inline-flex items-center hover:opacity-70 transition-opacity"
              style={{ color: "#0A3C2E", background: "rgba(255,255,255,0.92)", padding: "0 12px" }}
            >
              [ {TRAINING_CTA.applyLabel} ]
            </button>
          </div>
        </LookbookScrollReveal>
      </section>
    </LookbookAboutPageShell>
  );
}
