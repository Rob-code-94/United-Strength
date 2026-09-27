import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Pencil } from "lucide-react";
import { gymPhotos } from "@/assets/images/gym";
import strongerUnitedMark from "@/assets/images/brand/stronger-united.png";
import ClubCrestSVG from "@/components/direction-v1/brand/ClubCrestSVG";
import { LockedNavOverlay } from "@/components/direction-v1/LockedNavOverlay";
import { useSidebar } from "@/components/ui/sidebar";
import { V1KitValue } from "@/components/direction-v1/V1Kit";
import { HubMarkProvider } from "@/components/direction-v1/pages/V1Interior";
import V1ApplyPage from "@/components/direction-v1/pages/V1ApplyPage";
import V1ArchivePage from "@/components/direction-v1/pages/V1ArchivePage";
import V1BuildPage from "@/components/direction-v1/pages/V1BuildPage";
import V1ByDesignPage from "@/components/direction-v1/pages/V1ByDesignPage";
import V1CultivatedPage from "@/components/direction-v1/pages/V1CultivatedPage";
import V1ExperiencePage from "@/components/direction-v1/pages/V1ExperiencePage";
import V1FactsPage from "@/components/direction-v1/pages/V1FactsPage";
import V1FounderPage from "@/components/direction-v1/pages/V1FounderPage";
import V1MembershipPage from "@/components/direction-v1/pages/V1MembershipPage";
import V1MoveTheCityPage from "@/components/direction-v1/pages/V1MoveTheCityPage";
import V1PersonalTrainingPage from "@/components/direction-v1/pages/V1PersonalTrainingPage";
import V1SpacePage from "@/components/direction-v1/pages/V1SpacePage";
import V1TeamPage from "@/components/direction-v1/pages/V1TeamPage";
import {
  MEDIA_SLOTS,
  fontStack,
  type BrandKitFields,
  type MediaSlot,
} from "@/hub/brand-kit";
import { hubPage, hubPageFromHref, type HubPageId } from "@/hub/hub-pages";

const STAGE_WIDTH = 1280;
const HEX = /^#[0-9A-Fa-f]{6}$/;

type HubTab = "brand" | "type" | "media" | "footer" | null;
export type TypeRole = "mono" | "display" | "body";
type MarkId = TypeRole | "footer" | MediaSlot;

interface HubPreviewProps {
  draft: BrandKitFields;
  tab: HubTab;
  mediaSlot: MediaSlot;
  typeRole: TypeRole | null;
  pageId: HubPageId;
  onSelect: (target: PreviewTarget) => void;
  onPageChange: (pageId: HubPageId) => void;
}

export type PreviewTarget =
  | { kind: "brand" }
  | { kind: "type"; role: TypeRole }
  | { kind: "media"; slot: MediaSlot }
  | { kind: "footer" };

interface PencilAnchor {
  id: string;
  left: number;
  top: number;
}

const PILLARS: { slot: MediaSlot; title: string; fallback: string }[] = [
  { slot: "pillar1", title: "Foundation", fallback: gymPhotos.architectureRaw },
  { slot: "pillar2", title: "Reflection", fallback: gymPhotos.galleryCinematic },
  { slot: "pillar3", title: "Longevity", fallback: gymPhotos.spaceAtmosphere },
  { slot: "pillar4", title: "Move the City", fallback: gymPhotos.equipmentClose },
];

function color(value: string, fallback: string): string {
  return HEX.test(value) ? value : fallback;
}

function regionLabel(tab: HubTab, mediaSlot: MediaSlot, typeRole: TypeRole | null): string {
  if (tab === null) return "Click a pencil on the page.";
  if (tab === "brand") return "Editing brand colors";
  if (tab === "footer") return "Editing footer and copyright";
  if (tab === "type") {
    if (typeRole === "mono") return "Editing chapter number";
    if (typeRole === "display") return "Editing chapter title";
    if (typeRole === "body") return "Editing chapter text";
    return "Editing type";
  }
  const slot = MEDIA_SLOTS.find((item) => item.key === mediaSlot);
  return `Editing ${slot?.label ?? "media"}`;
}

function pencilName(id: string): string {
  if (id === "brand") return "Edit brand colors";
  if (id === "footer") return "Edit footer";
  if (id === "type-mono") return "Edit chapter number";
  if (id === "type-display") return "Edit chapter title";
  if (id === "type-body") return "Edit chapter text";
  if (id.startsWith("media-")) {
    const slot = id.slice("media-".length);
    if (isMediaSlot(slot)) return `Edit ${MEDIA_SLOTS.find((item) => item.key === slot)?.label ?? "media"}`;
  }
  return "Edit";
}

function isMediaSlot(value: string): value is MediaSlot {
  return MEDIA_SLOTS.some((item) => item.key === value);
}

export default function HubPreview({ draft, tab, mediaSlot, typeRole, pageId, onSelect, onPageChange }: HubPreviewProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [stageHeight, setStageHeight] = useState(760);
  const [anchors, setAnchors] = useState<PencilAnchor[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isMobile, setOpen, setOpenMobile } = useSidebar();
  const cream = color(draft.colors.cream, "#F3EEE7");
  const gold = color(draft.colors.gold, "#C4A35A");
  const background = color(draft.colors.background, "#111111");
  const ink = color(draft.colors.text, "#181818");
  const page = hubPage(pageId);
  const isHome = page.id === "home";

  useEffect(() => {
    const frame = frameRef.current;
    const stage = stageRef.current;
    if (!frame || !stage) return;
    const measure = () => {
      const width = frame.clientWidth;
      setScale(width > 0 ? Math.min(1, width / STAGE_WIDTH) : 1);
      setStageHeight(stage.offsetHeight);
      const frameBox = frame.getBoundingClientRect();
      const next: PencilAnchor[] = [];
      for (const node of stage.querySelectorAll<HTMLElement>("[data-hub-pencil]")) {
        const id = node.dataset.hubPencil;
        if (!id) continue;
        const box = node.getBoundingClientRect();
        if (box.width < 1 || box.height < 1) continue;
        const maxLeft = Math.max(4, frame.clientWidth - 48);
        const maxTop = Math.max(4, frame.clientHeight - 48);
        const rawLeft = id.startsWith("type-")
          ? box.right - frameBox.left + 8
          : box.left - frameBox.left + box.width / 2 - 22;
        const rawTop = box.top - frameBox.top + box.height / 2 - 22;
        next.push({
          id: `${id}::${next.length}`,
          left: Math.min(maxLeft, Math.max(4, rawLeft)),
          top: Math.min(maxTop, Math.max(4, rawTop)),
        });
      }
      setAnchors((current) => {
        const same =
          current.length === next.length &&
          current.every(
            (item, index) =>
              item.id === next[index]?.id &&
              Math.abs(item.left - (next[index]?.left ?? 0)) < 1 &&
              Math.abs(item.top - (next[index]?.top ?? 0)) < 1,
          );
        return same ? current : next;
      });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    observer.observe(stage);
    return () => observer.disconnect();
  }, [draft, tab, mediaSlot, typeRole, pageId]);

  const active = (id: MarkId) => {
    if (tab === null) return false;
    if (tab === "brand") return true;
    if (tab === "footer") return id === "footer";
    if (tab === "media") return id === mediaSlot;
    if (typeRole === null) return id === "mono" || id === "display" || id === "body";
    return id === typeRole;
  };

  const mark = (id: MarkId): CSSProperties => {
    if (tab === null || tab === "brand") return {};
    if (active(id)) {
      return { boxShadow: `inset 0 0 0 4px ${gold}`, opacity: 1, position: "relative", zIndex: 2 };
    }
    return { opacity: 0.35 };
  };

  const pressed = (id: string) => {
    if (id === "brand") return tab === "brand";
    if (id === "footer") return tab === "footer";
    if (id === "type-mono") return tab === "type" && typeRole === "mono";
    if (id === "type-display") return tab === "type" && typeRole === "display";
    if (id === "type-body") return tab === "type" && typeRole === "body";
    return tab === "media" && id === `media-${mediaSlot}`;
  };

  const openPage = (href: string) => {
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
      setMenuOpen(false);
      return;
    }
    const next = hubPageFromHref(href);
    if (next) onPageChange(next);
    setMenuOpen(false);
  };

  const choose = (id: string) => {
    setMenuOpen(false);
    if (isMobile) setOpenMobile(true);
    else setOpen(true);
    if (id === "brand") {
      onSelect({ kind: "brand" });
      return;
    }
    if (id === "footer") {
      onSelect({ kind: "footer" });
      return;
    }
    if (id === "type-mono" || id === "type-display" || id === "type-body") {
      const role = id.slice("type-".length);
      if (role === "mono" || role === "display" || role === "body") onSelect({ kind: "type", role });
      return;
    }
    if (id.startsWith("media-")) {
      const slot = id.slice("media-".length);
      if (isMediaSlot(slot)) onSelect({ kind: "media", slot });
    }
  };

  return (
    <div className="relative flex flex-col gap-2">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-foreground">Editing {page.label}</p>
        <button
          type="button"
          className="inline-flex min-h-11 items-center px-3 text-xs font-medium uppercase tracking-[0.18em]"
          onClick={() => setMenuOpen(true)}
        >
          Menu
        </button>
      </div>
      {menuOpen ? (
        <div className="sticky top-0 z-30 h-[80vh] w-full md:w-[28vw] md:min-w-[280px]">
          <div className="hub-site-menu flex h-full w-full flex-col overflow-hidden rounded-xl bg-[#111111] text-[#F3EEE7]">
            <style>{".hub-site-menu [id^='nav-section-'][class*='grid-rows-[1fr]']{grid-template-rows:auto !important}"}</style>
            <div className="flex shrink-0 justify-end px-4 pt-2">
              <button
                type="button"
                className="inline-flex min-h-11 items-center px-3 text-xs uppercase tracking-[0.18em]"
                onClick={() => setMenuOpen(false)}
              >
                Close
              </button>
            </div>
            <div className="flex min-h-0 flex-1 flex-col px-5 pb-6">
              <LockedNavOverlay variant="oddRitual" onNavigate={openPage} />
            </div>
          </div>
        </div>
      ) : null}
      <p className="text-xs text-muted-foreground">{regionLabel(tab, mediaSlot, typeRole)}</p>
      {tab === "media" && !draft.media[mediaSlot] ? (
        <p className="text-xs text-muted-foreground">Using the built-in image</p>
      ) : null}
      <div ref={frameRef} className="relative w-full" style={{ height: Math.ceil(stageHeight * scale) }}>
        <div className="absolute inset-0 overflow-hidden rounded-xl border border-border bg-neutral-200">
        <div
          ref={stageRef}
          aria-hidden
          className={`origin-top-left ${isHome ? "" : "[&_.v1-hero]:!h-[720px] [&_.v1-hero]:!min-h-[720px]"}`}
          style={{
            width: STAGE_WIDTH,
            transform: `scale(${scale})`,
            backgroundColor: background,
            color: cream,
            outline: tab === "brand" ? `4px solid ${gold}` : undefined,
            outlineOffset: tab === "brand" ? -8 : undefined,
          }}
        >
          {isHome ? (
          <div
            data-hub-pencil="brand"
            className="flex items-center justify-between px-10 py-4 text-[11px] uppercase tracking-[0.18em]"
            style={{ borderBottom: `1px solid ${cream}` }}
          >
            <span>Menu</span>
            <span>United Strength</span>
            <span>Columbus, OH</span>
          </div>
          ) : null}

          {isHome ? (
          <>
          <div className="flex h-[360px]">
            <PreviewImage
              slot="openingClubPoster"
              src={draft.media.openingClubPoster}
              fallback={gymPhotos.galleryCinematic}
              alt=""
              className="h-full w-1/2 object-cover"
              style={mark("openingClubPoster")}
              marker="openingClubPoster"
            />
            <TypeBlock draft={draft} cream={cream} gold={gold} mark={mark} title={page.title} body={page.body} />
          </div>

          <div className="grid grid-cols-2">
            <PreviewImage
              slot="openingBelieve"
              src={draft.media.openingBelieve}
              fallback={gymPhotos.spaceAtmosphere}
              alt=""
              className="h-40 w-full object-cover"
              style={mark("openingBelieve")}
              marker="openingBelieve"
            />
            <PreviewImage
              slot="openingExperience"
              src={draft.media.openingExperience}
              fallback={gymPhotos.experienceBroll}
              alt=""
              className="h-40 w-full object-cover"
              style={mark("openingExperience")}
              marker="openingExperience"
            />
          </div>

          <div className="grid grid-cols-4">
            {PILLARS.map((pillar) => (
              <div key={pillar.slot} className="relative h-44" style={mark(pillar.slot)} data-hub-pencil={`media-${pillar.slot}`}>
                <PreviewImage
                  slot={pillar.slot}
                  src={draft.media[pillar.slot]}
                  fallback={pillar.fallback}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 text-xs uppercase tracking-[0.14em] text-white">
                  {pillar.title}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2" style={{ backgroundColor: cream, color: ink }}>
            <PreviewImage
              slot="spaceLead"
              src={draft.media.spaceLead}
              fallback={gymPhotos.floorColumbus}
              alt=""
              className="h-48 w-full object-cover"
              style={mark("spaceLead")}
              marker="spaceLead"
            />
            <PreviewImage
              slot="spaceDetail"
              src={draft.media.spaceDetail}
              fallback={gymPhotos.equipmentClose}
              alt=""
              className="h-48 w-full object-cover"
              style={mark("spaceDetail")}
              marker="spaceDetail"
            />
          </div>
          </>
          ) : (
          <V1KitValue value={draft}>
            <HubMarkProvider>
              <InteriorPreview pageId={pageId} onNavigate={openPage} />
            </HubMarkProvider>
          </V1KitValue>
          )}

          {isHome ? (
          <footer className="flex items-center justify-between gap-8 px-10 py-8" style={{ backgroundColor: background, color: cream }}>
            <div className="min-w-0" style={mark("footer")} data-hub-pencil="footer">
              <p className="text-sm font-bold uppercase tracking-[0.14em]">{draft.footer.wordmark}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.12em]" style={{ color: gold }}>
                {draft.footer.addressLine} {draft.footer.postalCode}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.12em]" style={{ color: gold }}>{draft.footer.exploreLabel}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em]">{draft.footer.explore.map((link) => link.label).join(" · ")}</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.16em]">{draft.copyright}</p>
            </div>
            <div style={mark("crest")} data-hub-pencil="media-crest">
              {draft.media.crest ? (
                <PreviewImage slot="crest" src={draft.media.crest} fallback="" alt="" className="h-16 w-16 object-contain" />
              ) : (
                <ClubCrestSVG className="h-16 w-auto" color="#8A8070" />
              )}
            </div>
            <div style={mark("strongerUnited")} data-hub-pencil="media-strongerUnited">
              <PreviewImage
                slot="strongerUnited"
                src={draft.media.strongerUnited}
                fallback={strongerUnitedMark}
                alt=""
                className="h-12 w-auto max-w-[220px] object-contain"
              />
            </div>
          </footer>
          ) : null}
        </div>
        </div>
        {anchors.map((anchor) => (
          <button
            key={anchor.id}
            type="button"
            aria-label={pencilName(anchor.id.split("::")[0] ?? anchor.id)}
            aria-pressed={pressed(anchor.id.split("::")[0] ?? anchor.id)}
            className={`absolute z-10 grid size-11 place-items-center rounded-full border shadow-sm ${
              pressed(anchor.id)
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-background/90 text-muted-foreground"
            }`}
            style={{ left: anchor.left, top: anchor.top }}
            onClick={() => choose(anchor.id.split("::")[0] ?? anchor.id)}
          >
            <Pencil className="size-4" aria-hidden />
          </button>
        ))}
      </div>
    </div>
  );
}

function InteriorPreview({ pageId, onNavigate }: { pageId: HubPageId; onNavigate: (href: string, label: string) => void }) {
  const onBack = () => onNavigate("/", "Home");
  const onNav = (href: string, label: string) => onNavigate(href, label);
  switch (pageId) {
    case "home":
      return null;
    case "founder":
      return <V1FounderPage onBack={onBack} onNav={onNav} />;
    case "team":
      return <V1TeamPage onBack={onBack} onNav={onNav} />;
    case "space":
      return <V1SpacePage onBack={onBack} onNav={onNav} />;
    case "faq":
      return <V1FactsPage onBack={onBack} onNav={onNav} />;
    case "build":
      return <V1BuildPage onBack={onBack} onNav={onNav} />;
    case "personal-training":
      return <V1PersonalTrainingPage onBack={onBack} onNav={onNav} />;
    case "move-the-city":
      return <V1MoveTheCityPage onBack={onBack} onNav={onNav} />;
    case "experience":
      return <V1ExperiencePage onBack={onBack} onNav={onNav} />;
    case "apply":
      return <V1ApplyPage onBack={onBack} onNav={onNav} />;
    case "membership":
      return <V1MembershipPage onBack={onBack} onNav={onNav} />;
    case "by-design":
      return <V1ByDesignPage onBack={onBack} onNav={onNav} />;
    case "cultivated":
      return <V1CultivatedPage onBack={onBack} onNav={onNav} />;
    case "archive":
      return <V1ArchivePage onBack={onBack} onNav={onNav} />;
    default: {
      const neverPage: never = pageId;
      return neverPage;
    }
  }
}

function TypeBlock({
  draft,
  cream,
  gold,
  mark,
  title,
  body,
}: {
  draft: BrandKitFields;
  cream: string;
  gold: string;
  mark: (id: TypeRole) => CSSProperties;
  title: string;
  body: string;
}) {
  return (
    <div className="flex w-1/2 flex-col justify-end gap-4 p-10">
      <p style={mark("mono")}>
        <span
          data-hub-pencil="type-mono"
          style={{ fontFamily: fontStack(draft.type.monoFamily), fontSize: draft.type.monoSizePx, lineHeight: 1, color: color(draft.type.monoColor, cream) }}
        >
          01
        </span>
      </p>
      <p className="uppercase" style={mark("display")}>
        <span
          data-hub-pencil="type-display"
          style={{
            fontFamily: fontStack(draft.type.displayFamily),
            fontSize: draft.type.displaySizePx,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: color(draft.type.displayColor, cream),
          }}
        >
          {title}
        </span>
      </p>
      <p style={mark("body")}>
        <span
          data-hub-pencil="type-body"
          className="block max-w-[36ch]"
          style={{ fontFamily: fontStack(draft.type.bodyFamily), fontSize: draft.type.bodySizePx, color: color(draft.type.bodyColor, cream) }}
        >
          {body}
        </span>
      </p>
      <span className="block h-px w-16" style={{ backgroundColor: gold }} />
    </div>
  );
}

function PreviewImage({
  slot,
  src,
  fallback,
  alt,
  className,
  style,
  marker,
}: {
  slot: MediaSlot;
  src: string;
  fallback: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  marker?: MediaSlot;
}) {
  const [broken, setBroken] = useState(false);
  useEffect(() => {
    setBroken(false);
  }, [src]);
  const usingFallback = !src || broken;
  const chosen = usingFallback ? fallback : src;
  if (!chosen) return null;
  return (
    <img
      key={`${slot}-${usingFallback ? "fallback" : "upload"}`}
      src={chosen}
      alt={alt}
      className={className}
      style={style}
      data-hub-pencil={marker ? `media-${marker}` : undefined}
      draggable={false}
      onError={() => {
        if (!usingFallback) setBroken(true);
      }}
    />
  );
}
