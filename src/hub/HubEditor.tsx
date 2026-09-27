import { useEffect, useRef, useState } from "react";
import { Save } from "lucide-react";
import AppSidebar from "@/components/shadcn-space/blocks/dashboard-shell-03/app-sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import FileUpload02 from "@/hub/FileUpload02";
import HubPreview, { type PreviewTarget, type TypeRole } from "@/hub/HubPreview";
import {
  FONT_FAMILIES,
  MEDIA_SLOTS,
  type BrandKitFields,
  type FontFamily,
  type MediaSlot,
} from "@/hub/brand-kit";
import type { HubPageId } from "@/hub/hub-pages";

interface EditorState {
  draft: BrandKitFields;
  draftUpdatedAt: string;
}

interface HubEditorProps {
  initial: EditorState;
  onChange: (next: EditorState) => void;
}

/**
 * Donor: @shadcn-space/dashboard-shell-03 (Pro).
 * Settings stay in the fixed sidebar. The preview column scrolls on its own.
 */
export default function HubEditor({ initial, onChange }: HubEditorProps) {
const [tab, setTab] = useState<"brand" | "type" | "media" | "footer" | null>(null);
  const [draft, setDraft] = useState(initial.draft);
  const [expected, setExpected] = useState(initial.draftUpdatedAt);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [mediaSlot, setMediaSlot] = useState<MediaSlot>("strongerUnited");
  const [typeRole, setTypeRole] = useState<TypeRole | null>(null);
  const [pageId, setPageId] = useState<HubPageId>("home");
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (previewRef.current) previewRef.current.scrollTop = 0;
  }, [pageId]);

  useEffect(() => {
    const section = document.getElementById(`hub-settings-${tab}`);
    section?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [tab, typeRole, mediaSlot]);

  const applyResponse = (payload: EditorState & { error?: string }) => {
    if (payload.draft && payload.draftUpdatedAt) {
      setDraft(payload.draft);
      setExpected(payload.draftUpdatedAt);
      onChange({ draft: payload.draft, draftUpdatedAt: payload.draftUpdatedAt });
    }
  };

  const save = async () => {
    setPending(true);
    setError(null);
    setMessage(null);
    try {
      const response = await fetch("/api/brand-kit", {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ kit: draft, expectedUpdatedAt: expected }),
      });
      const payload = (await response.json()) as EditorState & { error?: string };
      if (response.status === 409) {
        applyResponse(payload);
        setError(payload.error ?? "This kit was updated elsewhere. Reload and try again.");
        return;
      }
      if (!response.ok) {
        setError(payload.error ?? "Brand kit could not be saved.");
        return;
      }
      applyResponse(payload);
      setMessage("Draft saved. Publish when you want the live site to change.");
    } catch {
      setError("Brand kit could not be saved. Try again.");
    } finally {
      setPending(false);
    }
  };

  const act = async (action: "publish" | "revert") => {
    setPending(true);
    setError(null);
    setMessage(null);
    try {
      const response = await fetch("/api/brand-kit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ action }),
      });
      const payload = (await response.json()) as EditorState & { error?: string };
      if (!response.ok) {
        setError(payload.error ?? "That action failed.");
        return;
      }
      applyResponse(payload);
      setMessage(action === "publish" ? "Published. The live V1 site uses this kit." : "Draft reverted to the published kit.");
    } catch {
      setError("That action failed. Try again.");
    } finally {
      setPending(false);
    }
  };

  const logout = async () => {
    await fetch("/api/hub-session", { method: "DELETE" });
    window.location.assign("/hub");
  };

  const slotLabel = MEDIA_SLOTS.find((slot) => slot.key === mediaSlot)?.label ?? "Image";

  const sidebar = (
    <div className="flex flex-col gap-8 pb-4">
      {tab === null ? (
        <p className="text-sm text-muted-foreground">Click a pencil on the page.</p>
      ) : null}
      {tab === "brand" ? (
        <div id="hub-settings-brand">
          <ColorFields colors={draft.colors} onChange={(colors) => setDraft({ ...draft, colors })} />
        </div>
      ) : null}
      {tab === "type" && typeRole ? (
        <div id="hub-settings-type">
          <TypeFields type={draft.type} role={typeRole} onChange={(type) => setDraft({ ...draft, type })} />
        </div>
      ) : null}
      {tab === "media" ? (
        <div id="hub-settings-media" className="space-y-6">
          <div className="space-y-1">
            <p className="text-xl font-semibold">{slotLabel}</p>
            <p className="text-sm text-muted-foreground">Upload stays on the draft until you publish.</p>
          </div>
          {draft.media[mediaSlot] ? (
            <p className="text-xs text-muted-foreground break-all">Current draft: {draft.media[mediaSlot]}</p>
          ) : (
            <p className="text-xs text-muted-foreground">Using the built-in image for this slot.</p>
          )}
          <FileUpload02
            key={mediaSlot}
            slot={mediaSlot}
            onUploaded={() => {
              void fetch("/api/brand-kit")
                .then((response) => response.json())
                .then((payload: EditorState) => applyResponse(payload));
            }}
          />
        </div>
      ) : null}
      {tab === "footer" ? (
        <div id="hub-settings-footer">
          <FooterFields
            footer={draft.footer}
            copyright={draft.copyright}
            onFooter={(footer) => setDraft({ ...draft, footer })}
            onCopyright={(copyright) => setDraft({ ...draft, copyright })}
          />
        </div>
      ) : null}
      {error ? (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      {message ? (
        <p className="text-sm text-foreground" role="status">
          {message}
        </p>
      ) : null}
      <div className="flex flex-col gap-2">
        <Button type="button" disabled={pending} className="min-h-[44px]" onClick={() => void save()}>
          <Save className="size-4" />
          Save draft
        </Button>
        <Button type="button" disabled={pending} className="min-h-[44px]" onClick={() => void act("publish")}>
          Publish
        </Button>
        <Button type="button" variant="outline" disabled={pending} className="min-h-[44px]" onClick={() => void act("revert")}>
          Revert
        </Button>
        <Button type="button" variant="ghost" className="min-h-[44px]" onClick={() => void logout()}>
          Log out
        </Button>
      </div>
    </div>
  );

  return (
    <AppSidebar sidebar={sidebar}>
      <div ref={previewRef} className="h-full overflow-y-auto p-4 md:p-6">
        <HubPreview
          draft={draft}
          tab={tab}
          mediaSlot={mediaSlot}
          typeRole={typeRole}
          pageId={pageId}
          onPageChange={setPageId}
          onSelect={(target: PreviewTarget) => {
            if (target.kind === "brand") {
              setTab("brand");
              setTypeRole(null);
              return;
            }
            if (target.kind === "footer") {
              setTab("footer");
              setTypeRole(null);
              return;
            }
            if (target.kind === "media") {
              setTab("media");
              setMediaSlot(target.slot);
              setTypeRole(null);
              return;
            }
            setTab("type");
            setTypeRole(target.role);
          }}
        />
      </div>
    </AppSidebar>
  );
}

function ColorFields({
  colors,
  onChange,
}: {
  colors: BrandKitFields["colors"];
  onChange: (colors: BrandKitFields["colors"]) => void;
}) {
  const fields: { key: keyof BrandKitFields["colors"]; label: string }[] = [
    { key: "background", label: "Background" },
    { key: "cream", label: "Cream type" },
    { key: "gold", label: "Gold" },
    { key: "text", label: "Text on cream" },
  ];
  return (
    <div className="space-y-6 max-w-xl">
      <div className="space-y-1">
        <p className="text-xl font-semibold">Brand</p>
        <p className="text-sm text-muted-foreground">Hex colors for the V1 homepage.</p>
      </div>
      {fields.map((field) => (
        <div key={field.key} className="grid gap-2">
          <Label htmlFor={field.key}>{field.label}</Label>
          <Input
            id={field.key}
            value={colors[field.key]}
            onChange={(event) => onChange({ ...colors, [field.key]: event.target.value })}
            className="h-11"
            spellCheck={false}
          />
        </div>
      ))}
    </div>
  );
}

function TypeFields({
  type,
  role,
  onChange,
}: {
  type: BrandKitFields["type"];
  role: TypeRole;
  onChange: (type: BrandKitFields["type"]) => void;
}) {
  const selects: { key: "displayFamily" | "bodyFamily" | "monoFamily"; role: TypeRole; label: string }[] = [
    { key: "displayFamily", role: "display", label: "Display" },
    { key: "bodyFamily", role: "body", label: "Body" },
    { key: "monoFamily", role: "mono", label: "Numbers" },
  ];
  const sizes: { key: "displaySizePx" | "bodySizePx" | "monoSizePx"; role: TypeRole; label: string }[] = [
    { key: "displaySizePx", role: "display", label: "Display size" },
    { key: "bodySizePx", role: "body", label: "Body size" },
    { key: "monoSizePx", role: "mono", label: "Number size" },
  ];
  const colors: { key: "displayColor" | "bodyColor" | "monoColor"; role: TypeRole; label: string }[] = [
    { key: "displayColor", role: "display", label: "Display color" },
    { key: "bodyColor", role: "body", label: "Body color" },
    { key: "monoColor", role: "mono", label: "Number color" },
  ];
  const visibleSelects = selects.filter((field) => field.role === role);
  const visibleSizes = sizes.filter((field) => field.role === role);
  const visibleColors = colors.filter((field) => field.role === role);
  const roleName = role === "mono" ? "chapter number" : role === "display" ? "display heading" : "body paragraph";

  useEffect(() => {
    if (!role) return;
    const familyId = role === "mono" ? "monoFamily" : role === "display" ? "displayFamily" : "bodyFamily";
    const field = document.getElementById(familyId);
    field?.focus({ preventScroll: true });
    field?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [role]);

  return (
    <div className="space-y-6 max-w-xl">
      <div className="space-y-1">
        <p className="text-xl font-semibold">Type</p>
        <p className="text-sm text-muted-foreground">
          This applies to every {roleName} on the site. Approved families only. Sizes are pixels.
        </p>
      </div>
      {visibleSelects.map((field) => (
        <div key={field.key} className="grid gap-2">
          <Label htmlFor={field.key}>{field.label}</Label>
          <select
            id={field.key}
            className="min-h-[44px] rounded-lg border border-input bg-background px-3 text-sm"
            value={type[field.key]}
            onChange={(event) => onChange({ ...type, [field.key]: event.target.value as FontFamily })}
          >
            {FONT_FAMILIES.map((family) => (
              <option key={family} value={family}>
                {family}
              </option>
            ))}
          </select>
        </div>
      ))}
      {visibleSizes.map((field) => (
        <div key={field.key} className="grid gap-2">
          <Label htmlFor={field.key}>{field.label}</Label>
          <Input
            id={field.key}
            type="number"
            min={10}
            max={96}
            value={type[field.key]}
            onChange={(event) => onChange({ ...type, [field.key]: Number(event.target.value) })}
            className="h-11"
          />
        </div>
      ))}
      {visibleColors.map((field) => {
        const swatch = /^#[0-9A-Fa-f]{6}$/.test(type[field.key] ?? "") ? type[field.key] : "#F3EEE7";
        return (
          <div key={field.key} className="grid gap-2">
            <Label htmlFor={field.key}>{field.label}</Label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                aria-label={`${field.label} swatch`}
                value={swatch}
                onChange={(event) => onChange({ ...type, [field.key]: event.target.value })}
                className="size-11 shrink-0 cursor-pointer rounded-lg border border-input bg-background p-1"
              />
              <Input
                id={field.key}
                value={type[field.key] ?? "#F3EEE7"}
                onChange={(event) => onChange({ ...type, [field.key]: event.target.value })}
                className="h-11"
                spellCheck={false}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function FooterFields({
  footer,
  copyright,
  onFooter,
  onCopyright,
}: {
  footer: BrandKitFields["footer"];
  copyright: string;
  onFooter: (footer: BrandKitFields["footer"]) => void;
  onCopyright: (value: string) => void;
}) {
  return (
    <div className="space-y-6 max-w-2xl">
      <div className="space-y-1">
        <p className="text-xl font-semibold">Footer</p>
        <p className="text-sm text-muted-foreground">Links, address, and the copyright line.</p>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="copyright">Copyright</Label>
        <Input id="copyright" value={copyright} onChange={(event) => onCopyright(event.target.value)} className="h-11" />
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="wordmark">Wordmark</Label>
          <Input id="wordmark" value={footer.wordmark} onChange={(event) => onFooter({ ...footer, wordmark: event.target.value })} className="h-11" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" value={footer.addressLine} onChange={(event) => onFooter({ ...footer, addressLine: event.target.value })} className="h-11" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="zip">Postal code</Label>
          <Input id="zip" value={footer.postalCode} onChange={(event) => onFooter({ ...footer, postalCode: event.target.value })} className="h-11" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" value={footer.email} onChange={(event) => onFooter({ ...footer, email: event.target.value })} className="h-11" />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="instagram">Instagram URL</Label>
        <Input id="instagram" value={footer.instagramUrl} onChange={(event) => onFooter({ ...footer, instagramUrl: event.target.value })} className="h-11" />
      </div>
      <p className="text-sm font-medium">{footer.exploreLabel}</p>
      {footer.explore.map((link, index) => (
        <div key={index} className="grid gap-2 sm:grid-cols-2">
          <Input
            aria-label={`Link ${index + 1} label`}
            value={link.label}
            onChange={(event) => {
              const explore = footer.explore.slice();
              explore[index] = { ...link, label: event.target.value };
              onFooter({ ...footer, explore });
            }}
            className="h-11"
          />
          <Input
            aria-label={`Link ${index + 1} href`}
            value={link.href}
            onChange={(event) => {
              const explore = footer.explore.slice();
              explore[index] = { ...link, href: event.target.value };
              onFooter({ ...footer, explore });
            }}
            className="h-11"
          />
        </div>
      ))}
    </div>
  );
}
