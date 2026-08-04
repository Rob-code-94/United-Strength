import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ArrowRight, X, ChevronDown, Check } from "lucide-react";

// Import Vite assets
// @ts-ignore
import oliverImg from "../assets/images/coach_oliver_ritchie_1783396078996.jpg";
// @ts-ignore
import elenaImg from "../assets/images/coach_elena_rostova_1783396092845.jpg";
// @ts-ignore
import marcusImg from "../assets/images/coach_marcus_vance_1783396102693.jpg";
// @ts-ignore
import sophiaImg from "../assets/images/coach_sophia_mercer_1783396112437.jpg";

interface SubViewProps {
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
    role: "HEAD OF STRENGTH",
    specialty: "Barbell Mastery & Powerlifting",
    image: oliverImg,
    bio: "Oliver views pure physical strength as the ultimate gateway to daily self-mastery. Over the last decade, he has refined his barbell teaching methods downtown, helping select members build bulletproof mechanics and structural resilience."
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "OLYMPIC WEIGHTLIFTING",
    specialty: "Kinetic Precision & Power",
    image: elenaImg,
    bio: "Elena specializes in Olympic weightlifting mechanics, focusing on power output, speed, and flawless joint integrity. Her training methodology emphasizes patience, absolute balance, and raw athletic grace."
  },
  {
    id: 3,
    name: "Marcus Vance",
    role: "CONDITIONING & RECOVERY",
    specialty: "High-Threshold Energy Systems",
    image: marcusImg,
    bio: "Marcus combines intense conditioning intervals with modern active recovery techniques. He programs tailored energy-system plans centered on cardiovascular capacity, muscle longevity, and restorative movement."
  },
  {
    id: 4,
    name: "Sophia Mercer",
    role: "MOBILITY & LONGEVITY",
    specialty: "Movement Restoration & Joint Health",
    image: sophiaImg,
    bio: "Sophia focuses on movement restoration, addressing modern postural compensations, and fostering joint longevity. Her practice helps members maintain high training intensity while safeguarding physical longevity."
  }
];

const OTHER_TEAM = [
  { name: "Jonas Keller", role: "Strength & Mobility Coach" },
  { name: "Rachel Vance", role: "Athletic Conditioning" },
  { name: "Derek Cross", role: "Barbell & Powerlifting Specialist" },
  { name: "Chloe Chen", role: "Active Recovery Specialist" }
];

export default function ConceptTeamView({ onNav }: SubViewProps) {
  const [expandedBioId, setExpandedBioId] = useState<number | null>(null);
  // Track face glitch trigger for touch screens
  const [activeGlitchId, setActiveGlitchId] = useState<number | null>(null);

  const toggleBio = (id: number) => {
    setExpandedBioId(expandedBioId === id ? null : id);
  };

  const handlePortraitTouch = (id: number) => {
    setActiveGlitchId(activeGlitchId === id ? null : id);
  };

  return (
    <div className="flex-1 flex flex-col bg-white text-[#181818] font-satoshi selection:bg-neutral-100 selection:text-[#181818]">
      
      {/* 1. Page Hero Section */}
      <div className="px-6 pt-16 pb-12 bg-[#F3EEE7] flex flex-col gap-3 border-b border-neutral-200/40">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#181818]"></span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#5C5C5C] font-semibold">
            COMMUNITY
          </span>
        </div>
        
        <h1 className="font-satoshi font-black text-4xl uppercase tracking-tight text-[#181818]">
          Meet our<br />coaches
        </h1>
        
        <p className="text-xs text-[#5C5C5C] font-medium leading-relaxed max-w-xs mt-1">
          Our coaches are practitioners of the discipline, guiding the collective pursuit of strength in Columbus, Ohio.
        </p>
      </div>

      {/* 2. Featured Coaches Grid Section */}
      <div className="px-6 py-12">
        <div className="flex justify-between items-center mb-8 border-b border-neutral-100 pb-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5C5C]">
            Featured Practitioners
          </span>
          <span className="font-mono text-[9px] text-neutral-400">
            [04 / ACTIVE]
          </span>
        </div>

        {/* 2-column Grid for Mobile Portrait */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-10">
          {FEATURED_COACHES.map((coach) => {
            const isExpanded = expandedBioId === coach.id;
            const isGlitchActive = activeGlitchId === coach.id;

            return (
              <div 
                key={coach.id} 
                className="flex flex-col col-span-1 group"
              >
                {/* Image Portrait Container with Signature Art Glitch on Hover / Touch */}
                <div 
                  onClick={() => handlePortraitTouch(coach.id)}
                  className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 cursor-pointer select-none"
                  title="Hover or Tap to view glitch overlay"
                >
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover grayscale contrast-110 brightness-[1.02] transition-transform duration-500 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Art-directed glitched face overlay (triggered on desktop hover or mobile tap) */}
                  <div 
                    className={`absolute top-[18%] left-[25%] w-[50%] h-[50%] border border-white/30 overflow-hidden transition-all duration-300 pointer-events-none shadow-2xl ${
                      isGlitchActive ? "opacity-100 scale-105" : "opacity-0 group-hover:opacity-100 group-hover:scale-100"
                    }`}
                  >
                    {/* Double exposure / glitch duplicate of the avatar inside the mask */}
                    <img
                      src={coach.image}
                      alt={`${coach.name} portrait overlay`}
                      className="absolute top-[-36%] left-[-50%] w-[200%] h-[200%] max-w-none object-cover grayscale contrast-[1.6] brightness-[1.45] saturate-150 blur-[1.5px] scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {/* Fine technical lens hairline markings and frame details */}
                    <div className="absolute inset-0 border border-white/20"></div>
                    <div className="absolute top-1.5 left-1.5 text-[7px] font-mono text-white/90 leading-none">USC_0{coach.id}</div>
                    <div className="absolute bottom-1 right-1.5 text-[6px] font-mono text-white/60 uppercase">Glitch_On</div>
                  </div>
                </div>

                {/* Role (IBM Plex Mono Uppercase Eyebrow 10px) */}
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#5C5C5C] font-semibold mt-4 block leading-tight">
                  {coach.role}
                </span>

                {/* Coach Name in bold tracked Satoshi */}
                <h3 className="font-satoshi font-black text-base uppercase tracking-tight text-[#181818] mt-1 leading-tight">
                  {coach.name}
                </h3>

                {/* Specialty Line (Max 1 line) */}
                <p className="text-[10px] text-[#5C5C5C] mt-1 leading-normal italic line-clamp-1">
                  {coach.specialty}
                </p>

                {/* Tap View Bio Toggle */}
                <button
                  onClick={() => toggleBio(coach.id)}
                  className="mt-3 font-mono text-[9px] uppercase tracking-wider text-[#181818] font-bold hover:text-neutral-500 transition-colors flex items-center gap-1 self-start"
                >
                  <span>{isExpanded ? "Hide Bio" : "View Bio"}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                </button>

                {/* Expandable Bio Area (Secondary to Portrait) */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2.5 pt-2.5 border-t border-neutral-100 text-[10px] text-[#5C5C5C] leading-relaxed font-medium">
                        {coach.bio}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. "Also on our team" Section */}
      <div className="px-6 py-12 bg-[#F3EEE7] border-y border-neutral-200/40">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#5C5C5C] block mb-6 font-semibold">
          ALSO ON OUR TEAM
        </span>

        <div className="flex flex-col gap-4">
          {OTHER_TEAM.map((member, i) => (
            <div 
              key={i} 
              className="flex justify-between items-baseline py-2.5 border-b border-neutral-300/30 last:border-0"
            >
              <span className="font-satoshi font-bold text-xs uppercase tracking-wider text-[#181818]">
                {member.name}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-[#5C5C5C]">
                {member.role}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Footer CTA Link to memberships (GREEN ONLY, as per requirements) */}
      <div className="px-6 py-16 flex flex-col items-center justify-center text-center bg-white">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#5C5C5C] mb-3">
          Interested in Joining?
        </span>
        
        <p className="font-satoshi font-black text-lg uppercase tracking-tight text-[#181818] mb-6 max-w-xs leading-tight">
          We operate on a limited membership model.
        </p>

        {/* Dedicated Green CTA Link */}
        <a
          href="/memberships"
          onClick={(e) => {
            e.preventDefault();
            onNav("/memberships", "Apply for Membership");
          }}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0A3C2E] text-white font-satoshi font-bold text-xs uppercase tracking-widest hover:bg-[#082e23] transition-all rounded-xs shadow-md"
        >
          <span>Apply for membership</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
}
