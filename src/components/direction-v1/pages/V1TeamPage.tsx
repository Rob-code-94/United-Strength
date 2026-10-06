import { useEffect, useState } from "react";
import { gymPhotos } from "../../../assets/images/gym";
import { teamPhotos, type TeamPhotoKey } from "../../../assets/images/team";
import { usePageCopy } from "../V1Kit";
import {
  HubCopyText,
  V1Display,
  V1Hero,
  V1InteriorShell,
  V1Section,
} from "./V1Interior";
import V1TeamPortrait from "./V1TeamPortrait";
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

function coachIdFromHash(hash: string, memberIds: readonly string[]): string | null {
  const raw = hash.replace(/^#/, "");
  if (!raw.startsWith("coach-")) return null;
  const id = raw.slice("coach-".length);
  return memberIds.includes(id) ? id : null;
}

export default function V1TeamPage({ onBack, onNav }: PageProps) {
  const { team } = usePageCopy();
  const { intro, members } = team;
  const memberIds = members.map((member) => member.id);

  const [openId, setOpenId] = useState<string | null>(() =>
    typeof window !== "undefined" ? coachIdFromHash(window.location.hash, memberIds) : null,
  );

  useEffect(() => {
    const applyHash = () => {
      const id = coachIdFromHash(window.location.hash, memberIds);
      if (!id) return;
      setOpenId(id);
      // Sim stage scrolls its own container; rAF + short delay beat route scroll resets.
      window.setTimeout(() => {
        document.getElementById(`coach-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [memberIds.join("|")]);

  return (
    <V1InteriorShell onNav={onNav}>
      <V1Hero image={gymPhotos.experienceBroll} imageAlt="" onBack={onBack} mediaSlot="teamHero">
        <V1Display className="max-w-[12ch]" copyPath="team.intro.headline">
          {intro.headline}
        </V1Display>
      </V1Hero>

      <V1Section label="Team profiles">
        <ul className="flex flex-col gap-12">
          {members.map((member, index) => {
            const photoKey = PHOTO_BY_ID[member.id];
            const open = openId === member.id;
            const flip = index % 2 === 1;
            const panelId = `team-bio-${member.id}`;
            const base = `team.members.${index}`;
            return (
              <li
                key={member.id}
                id={`coach-${member.id}`}
                className={`scroll-mt-24 grid items-start gap-6 md:grid-cols-2 ${flip ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                {photoKey ? (
                  <V1TeamPortrait
                    slot={SLOT_BY_ID[member.id] ?? "teamTodd"}
                    src={teamPhotos[photoKey]}
                    alt={member.name}
                  />
                ) : (
                  <div className="aspect-[4/5] w-full border border-white/15 bg-[#181818]" />
                )}
                <div>
                  <HubCopyText
                    path={`${base}.name`}
                    as="h2"
                    className="font-sans text-[28px] font-bold uppercase tracking-[-0.04em]"
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                  >
                    {member.name}
                  </HubCopyText>
                  <HubCopyText
                    path={`${base}.role`}
                    as="p"
                    className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#F3EEE7]/60"
                  >
                    {member.role}
                  </HubCopyText>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[#F3EEE7]/55">
                    Focus
                  </p>
                  <HubCopyText
                    path={`${base}.focus`}
                    as="p"
                    className="mt-1.5 max-w-md text-[15px] leading-relaxed text-[#F3EEE7]/90"
                  >
                    {member.focus}
                  </HubCopyText>
                  <HubCopyText
                    path={`${base}.lede`}
                    as="p"
                    className="mt-4 max-w-md text-[16px] leading-relaxed text-[#F3EEE7]/85"
                  >
                    {member.lede}
                  </HubCopyText>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="mt-4 inline-flex min-h-[44px] items-center font-mono text-[11px] uppercase tracking-[0.2em] text-[#F3EEE7]"
                    onClick={() => setOpenId(open ? null : member.id)}
                  >
                    {open ? "Close bio" : "Read bio"}
                  </button>
                  {open ? (
                    <div id={panelId} className="mt-5 max-w-md border-t border-white/15 pt-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F3EEE7]/55">
                        Credentials
                      </p>
                      <ul className="mt-3 flex flex-col">
                        {member.credentials.map((line, credIndex) => (
                          <li
                            key={`${base}.credentials.${credIndex}`}
                            className="border-t border-white/10 py-2.5 font-mono text-[12px] uppercase tracking-[0.12em] text-[#F3EEE7]/80 first:border-t-0 first:pt-0"
                          >
                            <HubCopyText path={`${base}.credentials.${credIndex}`}>{line}</HubCopyText>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-[#F3EEE7]/55">
                        Perspective
                      </p>
                      <HubCopyText
                        path={`${base}.perspective`}
                        as="p"
                        className="mt-3 text-[15px] leading-relaxed text-[#F3EEE7]/80"
                      >
                        {member.perspective}
                      </HubCopyText>
                    </div>
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
