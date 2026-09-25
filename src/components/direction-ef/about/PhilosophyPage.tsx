import { ChevronLeft } from "lucide-react";
import { gymPhotos } from "../../../assets/images/gym";
import { PHILOSOPHY_CHAPTERS } from "../../../data/about-copy";
import V1SiteIndexFooter from "../../direction-v1/V1SiteIndexFooter";
import {
  LookbookAboutPageShell,
  LookbookManifestoSplit,
  LookbookStaggerBody,
} from "../lookbook";
import PhilosophyBeliefStrip from "./PhilosophyBeliefStrip";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

/** Philosophy — Todd's sequence on the dark canvas, with the V1 home footer. */
export default function PhilosophyPage({ onBack, onNav }: PageProps) {
  const { hero, place, manifesto, close } = PHILOSOPHY_CHAPTERS;

  return (
    <LookbookAboutPageShell
      onNav={onNav}
      className="bg-[#111111] text-[#F3EEE7] selection:bg-white/15 selection:text-[#F3EEE7]"
      footer={<V1SiteIndexFooter onNav={onNav} />}
    >
      <section className="relative h-[100cqh] min-h-[520px] w-full overflow-hidden bg-[#111111]">
        <img
          src={gymPhotos.heroFullBleed}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 40%" }}
        />
        <div className="absolute inset-0 bg-[#111111]/45" />
        <button
          type="button"
          onClick={onBack}
          className="absolute left-4 top-4 z-10 flex min-h-[44px] min-w-[44px] items-center gap-1 text-[#F3EEE7] transition-opacity hover:opacity-70 md:left-8 md:top-6"
          aria-label="Back to home"
        >
          <ChevronLeft className="h-5 w-5 shrink-0" />
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#F3EEE7]/70">
            Back
          </span>
        </button>
        <h1
          className="absolute bottom-16 left-5 right-5 z-10 max-w-[12ch] font-sans text-[40px] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-[#F3EEE7] md:bottom-20 md:left-10 md:text-[64px]"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          {hero.headline}
        </h1>
      </section>

      <section
        className="border-b border-white/10 bg-[#111111] px-5 py-16 md:px-10 md:py-24"
        aria-labelledby="philosophy-believe-heading"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#F3EEE7]/60">
              {place.n} // {place.title}
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.28em] text-[#F3EEE7]/60">
              // {place.kicker}
            </p>
            <h2
              id="philosophy-believe-heading"
              className="mt-6 font-sans text-[28px] font-bold uppercase leading-[1.05] tracking-[-0.04em] md:text-[36px]"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              {place.headline}
            </h2>
            <LookbookStaggerBody
              paragraphs={place.body}
              onDark
              className="mt-6 max-w-md"
            />
          </div>
          <div className="md:col-span-7">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#181818] md:aspect-[5/4]">
              <img
                src={gymPhotos.spaceAtmosphere}
                alt="United Strength — atmosphere in the club"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: "center 40%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-b border-white/10 bg-[#181818] px-5 py-16 md:px-10 md:py-24"
        aria-label="Manifesto"
      >
        <div className="mx-auto max-w-6xl">
          <LookbookManifestoSplit
            n=""
            title={manifesto.title}
            headline={manifesto.headline}
            body={manifesto.body}
            onDark
          />
        </div>
      </section>

      <PhilosophyBeliefStrip />

      <section
        className="bg-[#111111] px-5 py-32 md:px-10 md:py-48"
        aria-labelledby="philosophy-close-heading"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-4">
          <h2
            id="philosophy-close-heading"
            className="max-w-[16ch] font-sans text-[32px] font-bold uppercase leading-[1.05] tracking-[-0.04em] md:text-[48px]"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            {close.lines[0]}
          </h2>
          <p
            className="max-w-[18ch] font-sans text-[32px] font-bold uppercase leading-[1.05] tracking-[-0.04em] text-[#F3EEE7] md:text-[48px]"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            {close.lines[1]}
          </p>
          <p
            className="mt-16 font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-[#F3EEE7]/80 md:mt-24 md:text-[15px]"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            {close.lines[2]}
          </p>
        </div>
      </section>
    </LookbookAboutPageShell>
  );
}
