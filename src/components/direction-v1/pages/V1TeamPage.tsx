import { useState } from "react";
import { gymPhotos } from "../../../assets/images/gym";
import { TEAM_MEMBERS } from "../../../data/about-copy";
import { teamPhotos, type TeamPhotoKey } from "../../../assets/images/team";
import {
  V1Display,
  V1Hero,
  V1InteriorShell,
  V1MediaImg,
  V1Section,
} from "./V1Interior";
import type { MediaSlot } from "@/hub/brand-kit";

interface PageProps {
  onBack: () => void;
  onNav: (href: string, label: string) => void;
}

const PHOTO_BY_ID: Record<string, TeamPhotoKey> = {
  "todd-johnson": "toddJohnson",
  "jenna-farkas": "jennaFarkas",
  "jason-katz": "jasonKatz",
  "kara-shaffer": "karaShaffer",
};

const SLOT_BY_ID: Record<string, MediaSlot> = {
  "todd-johnson": "teamTodd",
  "jenna-farkas": "teamJenna",
  "jason-katz": "teamJason",
  "kara-shaffer": "teamKara",
};

export default function V1TeamPage({ onBack, onNav }: PageProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <V1InteriorShell onNav={onNav}>
      <V1Hero image={gymPhotos.experienceBroll} imageAlt="" onBack={onBack} mediaSlot="teamHero">
        <V1Display className="max-w-[12ch]">Meet the Team</V1Display>
      </V1Hero>

      <V1Section label="Team profiles">
        <ul className="flex flex-col gap-12">
          {TEAM_MEMBERS.map((member, index) => {
            const photoKey = PHOTO_BY_ID[member.id];
            const open = openId === member.id;
            const flip = index % 2 === 1;
            return (
              <li key={member.id} className={`grid items-start gap-6 md:grid-cols-2 ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
                {photoKey ? (
                  <V1MediaImg
                    slot={SLOT_BY_ID[member.id] ?? "teamTodd"}
                    src={teamPhotos[photoKey]}
                    alt={member.name}
                    className="aspect-[4/5] w-full object-cover grayscale contrast-125"
                    style={{ objectPosition: "center 20%" }}
                  />
                ) : (
                  <div className="aspect-[4/5] w-full bg-[#181818]" />
                )}
                <div>
                  <h2 className="font-sans text-[28px] font-bold uppercase tracking-[-0.04em]" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                    {member.name}
                  </h2>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#F3EEE7]/60">{member.role}</p>
                  <p className="mt-4 max-w-md text-[16px] leading-relaxed text-[#F3EEE7]/85">{member.lede}</p>
                  <button
                    type="button"
                    aria-expanded={open}
                    className="mt-4 inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.2em]"
                    onClick={() => setOpenId(open ? null : member.id)}
                  >
                    {open ? "Close bio" : "Read bio"}
                  </button>
                  {open ? (
                    <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#F3EEE7]/80">{member.bio}</p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </V1Section>
    </V1InteriorShell>
  );
}
