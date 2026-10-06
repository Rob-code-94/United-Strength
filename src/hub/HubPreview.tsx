import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Pencil } from "lucide-react";
import ConceptV1View from "@/components/ConceptV1View";
import { LockedNavOverlay } from "@/components/direction-v1/LockedNavOverlay";
import { useSidebar } from "@/components/ui/sidebar";
import { V1KitValue } from "@/components/direction-v1/V1Kit";
import { HubMarkProvider, inferTypeRoleFromPath } from "@/components/direction-v1/pages/V1Interior";
import V1ApplyPage from "@/components/direction-v1/pages/V1ApplyPage";
import V1ArchivePage from "@/components/direction-v1/pages/V1ArchivePage";
import V1BuildPage from "@/components/direction-v1/pages/V1BuildPage";
import V1BurnPage from "@/components/direction-v1/pages/V1BurnPage";
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
import { PhilosophyPage as EfPhilosophyPage } from "@/components/direction-ef/about";
import { MEDIA_SLOTS, type BrandKitFields, type MediaSlot } from "@/hub/brand-kit";
import { hubPage, hubPageFromHref, type HubPageId } from "@/hub/hub-pages";

const STAGE_WIDTH = 1280;
const HEX = /^#[0-9A-Fa-f]{6}$/;

type HubTab = "brand" | "type" | "media" | "footer" | "faq" | "copy" | null;
export type TypeRole = "mono" | "display" | "body";

interface HubPreviewProps {
  draft: BrandKitFields;
  tab: HubTab;
  mediaSlot: MediaSlot;
  typeRole: TypeRole | null;
  copyPath: string | null;
  pageId: HubPageId;
  onSelect: (target: PreviewTarget) => void;
  onPageChange: (pageId: HubPageId) => void;
}

export type PreviewTarget =
  | { kind: "brand" }
  | { kind: "type"; role: TypeRole }
  | { kind: "media"; slot: MediaSlot }
  | { kind: "footer" }
  | { kind: "faq" }
  | { kind: "copy"; path: string; typeRole?: TypeRole };

interface PencilAnchor {
  id: string;
  typeRole?: TypeRole;
  left: number;
  top: number;
  area: number;
}

const OVERLAP_PX = 40;

/** Skip marks inside hidden/inert ancestors, but stop at the preview stage
 *  (the stage itself is always aria-hidden for a11y and must not wipe all pencils). */
function isHiddenFromPencil(node: HTMLElement, stage: HTMLElement): boolean {
  let cur: HTMLElement | null = node;
  while (cur && cur !== stage) {
    if (cur.getAttribute("aria-hidden") === "true") return true;
    if (cur.hasAttribute("inert")) return true;
    cur = cur.parentElement;
  }
  return false;
}

function centerInFrame(
  box: DOMRect,
  frameBox: DOMRect,
  pad = 8,
): boolean {
  const cx = box.left + box.width / 2;
  const cy = box.top + box.height / 2;
  return (
    cx >= frameBox.left - pad &&
    cx <= frameBox.right + pad &&
    cy >= frameBox.top - pad &&
    cy <= frameBox.bottom + pad
  );
}

function pencilPriority(id: string): number {
  if (id.startsWith("copy-section:")) return 50;
  if (id.startsWith("media-")) return 40;
  if (id === "footer" || id === "faq" || id === "brand") return 30;
  if (id.startsWith("copy:")) return 20;
  if (id.startsWith("type-")) return 10;
  return 0;
}

/** Collapse anchors whose centers are within OVERLAP_PX (keep highest priority / largest area). */
function collapseOverlapping(anchors: PencilAnchor[]): PencilAnchor[] {
  const sorted = [...anchors].sort((a, b) => {
    const byPri = pencilPriority(b.id.split("::")[0] ?? "") - pencilPriority(a.id.split("::")[0] ?? "");
    if (byPri !== 0) return byPri;
    return b.area - a.area;
  });
  const kept: PencilAnchor[] = [];
  for (const anchor of sorted) {
    const hits = kept.some(
      (other) => Math.hypot(other.left - anchor.left, other.top - anchor.top) < OVERLAP_PX,
    );
    if (!hits) kept.push(anchor);
  }
  return kept.sort((a, b) => a.top - b.top || a.left - b.left);
}

function color(value: string, fallback: string): string {
  return HEX.test(value) ? value : fallback;
}

function regionLabel(
  tab: HubTab,
  mediaSlot: MediaSlot,
  typeRole: TypeRole | null,
  copyPath: string | null,
): string {
  if (tab === null) return "Click a pencil on the page.";
  if (tab === "brand") return "Editing brand colors";
  if (tab === "footer") return "Editing footer and copyright";
  if (tab === "faq") return "Editing FAQ questions and answers";
  if (tab === "copy") return copyPath ? `Editing copy · ${copyPath}` : "Editing page copy";
  if (tab === "type") {
    if (typeRole === "mono") return "Editing chapter number type";
    if (typeRole === "display") return "Editing title type";
    if (typeRole === "body") return "Editing body type";
    return "Editing type";
  }
  const slot = MEDIA_SLOTS.find((item) => item.key === mediaSlot);
  return `Editing ${slot?.label ?? "media"}`;
}

function pencilName(id: string): string {
  if (id === "brand") return "Edit brand colors";
  if (id === "footer") return "Edit footer";
  if (id === "faq") return "Edit FAQ copy";
  if (id === "type-mono") return "Edit chapter number type";
  if (id === "type-display") return "Edit title type";
  if (id === "type-body") return "Edit body type";
  if (id.startsWith("copy-section:")) {
    const path = id.slice("copy-section:".length);
    const belief = path.match(/\.beliefs\.(\d+)$/);
    if (belief) {
      const n = String(Number(belief[1]) + 1).padStart(2, "0");
      return `Edit belief ${n} copy`;
    }
    const leaf = path.split(".").slice(-2).join(" ") || path;
    return `Edit ${leaf} section`;
  }
  if (id.startsWith("copy:")) {
    const path = id.slice("copy:".length);
    const leaf = path.split(".").pop() ?? "copy";
    return `Edit ${leaf}`;
  }
  if (id.startsWith("media-")) {
    const slot = id.slice("media-".length);
    if (isMediaSlot(slot)) return `Edit ${MEDIA_SLOTS.find((item) => item.key === slot)?.label ?? "media"}`;
  }
  return "Edit";
}

function isMediaSlot(value: string): value is MediaSlot {
  return MEDIA_SLOTS.some((item) => item.key === value);
}

export default function HubPreview({
  draft,
  tab,
  mediaSlot,
  typeRole,
  copyPath,
  pageId,
  onSelect,
  onPageChange,
}: HubPreviewProps) {
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
      const collected: PencilAnchor[] = [];
      for (const node of stage.querySelectorAll<HTMLElement>("[data-hub-pencil]")) {
        const id = node.dataset.hubPencil;
        if (!id) continue;
        if (isHiddenFromPencil(node, stage)) continue;
        const box = node.getBoundingClientRect();
        if (box.width < 1 || box.height < 1) continue;
        if (!centerInFrame(box, frameBox)) continue;
        const maxLeft = Math.max(4, frame.clientWidth - 48);
        const maxTop = Math.max(4, frame.clientHeight - 48);
        const rawLeft = id.startsWith("type-")
          ? box.right - frameBox.left + 8
          : box.left - frameBox.left + box.width / 2 - 22;
        const rawTop = box.top - frameBox.top + box.height / 2 - 22;
        // Only soft-clamp for tiny overflow; do not drag off-stage marks onto the edge.
        if (rawLeft < -24 || rawLeft > frame.clientWidth + 24) continue;
        if (rawTop < -24 || rawTop > frame.clientHeight + 24) continue;
        const rawRole = node.dataset.hubTypeRole;
        const typeRole: TypeRole | undefined =
          rawRole === "display" || rawRole === "body" || rawRole === "mono" ? rawRole : undefined;
        collected.push({
          id: `${id}::${collected.length}`,
          typeRole,
          left: Math.min(maxLeft, Math.max(4, rawLeft)),
          top: Math.min(maxTop, Math.max(4, rawTop)),
          area: box.width * box.height,
        });
      }
      const next = collapseOverlapping(collected);
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
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(frame);
    resizeObserver.observe(stage);
    // Carousel / inert toggles change which marks are visible without resizing.
    const mutationObserver = new MutationObserver(measure);
    mutationObserver.observe(stage, {
      attributes: true,
      attributeFilter: ["aria-hidden", "inert"],
      subtree: true,
      childList: true,
    });
    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [draft, tab, mediaSlot, typeRole, copyPath, pageId]);

  const pressed = (id: string) => {
    if (id === "brand") return tab === "brand";
    if (id === "footer") return tab === "footer";
    if (id === "faq") return tab === "faq";
    if (id.startsWith("copy-section:")) {
      return tab === "copy" && copyPath === id.slice("copy-section:".length);
    }
    if (id.startsWith("copy:")) return tab === "copy" && copyPath === id.slice("copy:".length);
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

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const choose = (id: string, anchorRole?: TypeRole) => {
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
    if (id === "faq") {
      onSelect({ kind: "faq" });
      return;
    }
    if (id.startsWith("copy-section:")) {
      const path = id.slice("copy-section:".length).trim();
      if (path) {
        onSelect({
          kind: "copy",
          path,
          typeRole: anchorRole ?? inferTypeRoleFromPath(path),
        });
      }
      return;
    }
    if (id.startsWith("copy:")) {
      const path = id.slice("copy:".length).trim();
      if (path) {
        onSelect({
          kind: "copy",
          path,
          typeRole: anchorRole ?? inferTypeRoleFromPath(path),
        });
      }
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
    <div
      className="relative flex flex-col gap-2"
      onWheelCapture={menuOpen ? (event) => event.preventDefault() : undefined}
    >
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
      <p className="text-xs text-muted-foreground">{regionLabel(tab, mediaSlot, typeRole, copyPath)}</p>
      {tab === "media" && !draft.media[mediaSlot] ? (
        <p className="text-xs text-muted-foreground">Using the built-in image</p>
      ) : null}
      <div
        ref={frameRef}
        className={`relative w-full ${menuOpen ? "pointer-events-none overflow-hidden" : ""}`}
        style={{ height: Math.ceil(stageHeight * scale) }}
        inert={menuOpen ? true : undefined}
      >
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
          <V1KitValue value={draft}>
            <HubMarkProvider>
              <InteriorPreview pageId={pageId} onNavigate={openPage} />
            </HubMarkProvider>
          </V1KitValue>
        </div>
        </div>
        {anchors.map((anchor) => (
          <button
            key={anchor.id}
            type="button"
            aria-label={pencilName(anchor.id.split("::")[0] ?? anchor.id)}
            aria-pressed={pressed(anchor.id.split("::")[0] ?? anchor.id)}
            className={`absolute z-10 grid size-11 place-items-center rounded-full border shadow-sm ${
              pressed(anchor.id.split("::")[0] ?? anchor.id)
                ? "border-foreground bg-foreground text-background"
                : "border-border bg-background/90 text-muted-foreground"
            }`}
            style={{ left: anchor.left, top: anchor.top }}
            onClick={() => choose(anchor.id.split("::")[0] ?? anchor.id, anchor.typeRole)}
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
      return <ConceptV1View skipKitProvider onNav={onNav} />;
    case "founder":
      return <V1FounderPage onBack={onBack} onNav={onNav} />;
    case "philosophy":
      return <EfPhilosophyPage onBack={onBack} onNav={onNav} />;
    case "team":
      return <V1TeamPage onBack={onBack} onNav={onNav} />;
    case "space":
      return <V1SpacePage onBack={onBack} onNav={onNav} />;
    case "faq":
      return <V1FactsPage onBack={onBack} onNav={onNav} />;
    case "build":
      return <V1BuildPage onBack={onBack} onNav={onNav} />;
    case "burn":
      return <V1BurnPage onBack={onBack} onNav={onNav} />;
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
