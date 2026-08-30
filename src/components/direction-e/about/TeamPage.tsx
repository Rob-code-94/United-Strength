import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import DirectionEPageShell from "../DirectionEPageShell";
import oliverImg from "../../../assets/images/coach_oliver_ritchie_1783396078996.jpg";
import elenaImg from "../../../assets/images/coach_elena_rostova_1783396092845.jpg";
import marcusImg from "../../../assets/images/coach_marcus_vance_1783396102693.jpg";
import sophiaImg from "../../../assets/images/coach_sophia_mercer_1783396112437.jpg";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

interface Coach {
  id: number;
  name: string;
  role: string;
  specialty: string;
  image: string;
  bio: string;
}

const FEATURED_COACHES: Coach[] = [
  {
    id: 1,
    name: "Oliver Ritchie",
    role: "Head of Strength",
    specialty: "Barbell mastery & powerlifting",
    image: oliverImg,
    bio: "Oliver views physical strength as a gateway to daily self-mastery — deliberate mechanics, structural resilience, no spectacle.",
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "Olympic Weightlifting",
    specialty: "Kinetic precision & power",
    image: elenaImg,
    bio: "Elena specializes in Olympic weightlifting — power, speed, and joint integrity held to a quiet standard.",
  },
  {
    id: 3,
    name: "Marcus Vance",
    role: "Conditioning & Recovery",
    specialty: "Energy systems",
    image: marcusImg,
    bio: "Marcus programs conditioning with recovery in mind — capacity, longevity, restorative movement.",
  },
  {
    id: 4,
    name: "Sophia Mercer",
    role: "Mobility & Longevity",
    specialty: "Movement restoration",
    image: sophiaImg,
    bio: "Sophia focuses on movement restoration and joint longevity so members can train hard for years.",
  },
];

const OTHER_TEAM = [
  { name: "Jonas Keller", role: "Strength & Mobility" },
  { name: "Rachel Vance", role: "Athletic Conditioning" },
  { name: "Derek Cross", role: "Barbell & Powerlifting" },
  { name: "Chloe Chen", role: "Active Recovery" },
];

/** Meet the Team — DNA: team-03 portrait grid + Odd Ritual chrome */
export default function TeamPage({ onBack, onNav }: PageProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <DirectionEPageShell title="Meet the Team" onBack={onBack}>
      <section className="px-6 py-10 bg-[#F3EEE7] border-b border-neutral-200/40">
        <p
          className="text-[22px] leading-snug text-[#181818] max-w-sm"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Practitioners of the discipline — guiding the collective pursuit of strength in Columbus.
        </p>
      </section>

      <section className="px-6 py-10">
        <div className="flex justify-between items-baseline mb-6 border-b border-neutral-100 pb-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#5C5C5C]">
            Featured
          </span>
          <span className="font-mono text-[9px] text-neutral-400">04</span>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-8">
          {FEATURED_COACHES.map((coach) => {
            const open = expandedId === coach.id;
            return (
              <div key={coach.id} className="flex flex-col">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover grayscale contrast-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#5C5C5C] mt-3">
                  {coach.role}
                </span>
                <h3 className="font-bold text-sm uppercase tracking-tight text-[#181818] mt-0.5">
                  {coach.name}
                </h3>
                <p className="text-[10px] text-[#5C5C5C] mt-1 italic line-clamp-1">
                  {coach.specialty}
                </p>
                <button
                  type="button"
                  onClick={() => setExpandedId(open ? null : coach.id)}
                  className="mt-2 font-mono text-[9px] uppercase tracking-wider text-[#181818] flex items-center gap-1 self-start min-h-[44px]"
                >
                  {open ? "Hide" : "Bio"}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-2 text-[11px] text-[#5C5C5C] leading-relaxed border-t border-neutral-100">
                        {coach.bio}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-10 bg-[#F3EEE7] border-y border-neutral-200/40">
        <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#5C5C5C] block mb-5">
          Also on our team
        </span>
        <div className="flex flex-col">
          {OTHER_TEAM.map((m) => (
            <div
              key={m.name}
              className="flex justify-between items-baseline py-3 border-b border-neutral-300/40 last:border-0 gap-3"
            >
              <span className="font-bold text-xs uppercase tracking-wider text-[#181818]">
                {m.name}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#5C5C5C] text-right">
                {m.role}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 flex flex-col items-center text-center">
        <p className="text-sm text-[#5C5C5C] mb-5 max-w-xs">
          Limited membership. Reviewed by the team.
        </p>
        <button
          type="button"
          onClick={() => onNav("/start-here/apply", "Apply for Membership")}
          className="w-full max-w-[280px] bg-[#0A3C2E] text-white text-[12px] font-bold tracking-[0.12em] uppercase py-4 min-h-[44px] hover:bg-emerald-900 transition-colors"
        >
          Apply for Membership
        </button>
      </section>
    </DirectionEPageShell>
  );
}
