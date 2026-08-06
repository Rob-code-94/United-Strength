import { ChevronRight } from "lucide-react";

interface SubViewProps {
  onNav: (href: string, label: string) => void;
}

const PILLARS = [
  { n: "01", title: "Train", body: "Deliberate strength as daily practice." },
  { n: "02", title: "Recover", body: "Rest as seriously as the work." },
  { n: "03", title: "Community", body: "A selective circle, not a crowd." },
  { n: "04", title: "Culture", body: "Columbus woven into everything we build." },
];

function ChapterLabel({ n, title, light = false }: { n: string; title: string; light?: boolean }) {
  return (
    <div
      className={`flex items-baseline justify-between border-b pb-3 mb-6 ${
        light ? "border-white/25" : "border-neutral-200"
      }`}
    >
      <span
        className={`font-mono text-[9px] uppercase tracking-[0.25em] ${
          light ? "text-white/55" : "text-[#5C5C5C]"
        }`}
      >
        {n}
      </span>
      <span
        className={`font-mono text-[9px] uppercase tracking-[0.2em] ${
          light ? "text-white" : "text-[#181818]"
        }`}
      >
        {title}
      </span>
    </div>
  );
}

/** Full phone-stage height inside the simulator scrollport (100cqh) */
const SECTION =
  "box-border w-full min-h-[100cqh] flex flex-col justify-center px-6 py-12 shrink-0";

/**
 * Direction D — Ritual Progression (Odd Ritual–inspired)
 * Todd Aug 2026 locked homepage: 7-section reveal.
 * Hero: full-bleed image only — no overlay copy (Todd request).
 * Each chapter fills the phone viewport (min-h-full of scroll stage).
 */
export default function ConceptDView({ onNav }: SubViewProps) {
  return (
    <div className="flex flex-col bg-white text-[#181818] animate-fade-in font-sans selection:bg-neutral-100 selection:text-neutral-900">
      {/* 01 — Hero: seamless ONE full-bleed picture, no wording */}
      <section className="relative w-full min-h-[100cqh] shrink-0 overflow-hidden" aria-label="Hero">
        <img
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=900&auto=format&fit=crop"
          alt="United Strength Club — cinematic facility"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
      </section>

      {/* 02 — What We Believe */}
      <section className={`${SECTION} bg-[#F3EEE7]`}>
        <ChapterLabel n="02" title="What We Believe" />
        <p
          className="text-[22px] leading-[1.35] text-[#181818] max-w-sm"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Strength is a culture — practiced together, held to a standard, never sold as noise.
        </p>
        <p className="mt-5 text-sm text-[#5C5C5C] leading-relaxed max-w-sm">
          Placeholder until Todd sends final copy. Private club voice only.
        </p>
      </section>

      {/* 03 — The Four Pillars */}
      <section className={`${SECTION} bg-white border-t border-neutral-100`}>
        <ChapterLabel n="03" title="The Four Pillars" />
        <div className="grid grid-cols-1 gap-0 border border-neutral-200">
          {PILLARS.map((p) => (
            <div
              key={p.n}
              className="flex gap-4 px-4 py-5 border-b border-neutral-200 last:border-b-0"
            >
              <span className="font-mono text-[10px] text-[#5C5C5C] tracking-widest shrink-0">
                {p.n}
              </span>
              <div>
                <h3 className="font-bold text-sm uppercase tracking-[-0.02em] text-[#181818]">
                  {p.title}
                </h3>
                <p className="mt-1 text-xs text-[#5C5C5C] leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — Experience United */}
      <section className={`${SECTION} bg-white border-t border-neutral-100`}>
        <ChapterLabel n="04" title="Experience United" />
        <p className="text-sm text-[#5C5C5C] leading-relaxed mb-6 max-w-sm">
          Begin with the practice. Feel the space. Then apply — membership is reviewed, not open checkout.
        </p>
        <button
          type="button"
          onClick={() => onNav("/start-here/experience", "Experience United")}
          className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#181818] hover:opacity-70 transition-opacity min-h-[44px]"
        >
          Experience United
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </section>

      {/* 05 — The Space */}
      <section className="relative w-full min-h-[100cqh] shrink-0 overflow-hidden flex flex-col justify-end">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900&auto=format&fit=crop"
          alt="The Space — facility atmosphere"
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 px-6 py-12 text-white">
          <ChapterLabel n="05" title="The Space" light />
          <p className="text-sm text-white/85 leading-relaxed max-w-xs -mt-2">
            Downtown Columbus. Cinematic stills. Atmosphere before amenities list.
          </p>
          <button
            type="button"
            onClick={() => onNav("/about/the-space", "The Space")}
            className="mt-4 self-start font-mono text-[10px] uppercase tracking-[0.2em] text-white/90 border-b border-white/40 pb-0.5 hover:border-white transition-colors min-h-[44px]"
          >
            Explore The Space
          </button>
        </div>
      </section>

      {/* 06 — Membership */}
      <section className={`${SECTION} bg-[#F3EEE7]`}>
        <ChapterLabel n="06" title="Membership" />
        <p
          className="text-[20px] leading-snug text-[#181818] max-w-sm mb-4"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Selective application. Reviewed by the team. No public pricing on this layer.
        </p>
        <p className="text-xs text-[#5C5C5C] leading-relaxed mb-8 max-w-sm">
          Placeholder — Todd will send membership framing and visual direction.
        </p>
        <button
          type="button"
          onClick={() => onNav("/membership", "Membership")}
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#181818] flex items-center gap-1.5 hover:opacity-70 min-h-[44px]"
        >
          Membership <ChevronRight className="w-3 h-3" />
        </button>
      </section>

      {/* 07 — Start Here */}
      <section className={`${SECTION} bg-white border-t border-neutral-100 gap-4`}>
        <ChapterLabel n="07" title="Start Here" />
        <a
          href="/start-here/apply"
          onClick={(e) => {
            e.preventDefault();
            onNav("/start-here/apply", "Apply for Membership");
          }}
          className="w-full bg-[#0A3C2E] text-white text-[12px] font-bold tracking-[0.12em] uppercase text-center py-4 min-h-[44px] flex items-center justify-center transition-all hover:bg-emerald-900"
        >
          Apply for Membership
        </a>
        <a
          href="/start-here/experience"
          onClick={(e) => {
            e.preventDefault();
            onNav("/start-here/experience", "Experience United");
          }}
          className="w-full text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5C5C] hover:text-[#181818] py-3 min-h-[44px] flex items-center justify-center transition-colors"
        >
          Experience United
        </a>
      </section>

      {/* Minimal footer */}
      <footer className="px-6 py-10 bg-neutral-50 border-t border-neutral-100 space-y-4 shrink-0">
        <p className="font-mono text-[10px] uppercase tracking-wider text-[#5C5C5C] leading-relaxed">
          237 Cleveland Ave
          <br />
          Columbus, Ohio 43215
        </p>
        <div className="flex justify-between font-mono text-[9px] uppercase tracking-widest text-neutral-400 border-t border-neutral-200 pt-4">
          <span>Direction D</span>
          <span>Ritual Progression</span>
        </div>
      </footer>
    </div>
  );
}
