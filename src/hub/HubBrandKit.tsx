import { useState } from "react";
import { ArrowLeft, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ColorFields, TypeFields } from "@/hub/BrandKitFormFields";
import HubLibraryPanel from "@/hub/HubLibraryPanel";
import { MEDIA_SLOTS, type MediaSlot } from "@/hub/brand-kit";
import type { TypeRole } from "@/hub/HubPreview";
import { useKitDraft, type KitEditorState } from "@/hub/useKitDraft";
import { cn } from "@/lib/utils";

interface HubBrandKitProps {
  initial: KitEditorState;
  onChange: (next: KitEditorState) => void;
  onGoHome: () => void;
  onGoWebsite: () => void;
}

const TYPE_ROLES: { id: TypeRole; label: string }[] = [
  { id: "display", label: "Display" },
  { id: "body", label: "Body" },
  { id: "mono", label: "Numbers" },
];

/**
 * Always-visible Brand kit: colors, type (all roles), media library.
 */
export default function HubBrandKit({ initial, onChange, onGoHome, onGoWebsite }: HubBrandKitProps) {
  const {
    draft,
    setDraft,
    library,
    message,
    setMessage,
    error,
    setError,
    pending,
    applyResponse,
    save,
    act,
    logout,
  } = useKitDraft(initial, onChange);

  const [typeRole, setTypeRole] = useState<TypeRole>("display");
  const [mediaSlot, setMediaSlot] = useState<MediaSlot>("crest");
  const slotLabel = MEDIA_SLOTS.find((slot) => slot.key === mediaSlot)?.label ?? "Image";

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col gap-8 px-4 py-8 pb-24 md:py-12">
      <div className="flex flex-wrap items-center gap-2">
        <Button type="button" variant="outline" className="min-h-[44px]" onClick={onGoHome}>
          <ArrowLeft className="size-4" />
          Hub home
        </Button>
        <Button type="button" variant="ghost" className="min-h-[44px]" onClick={onGoWebsite}>
          Edit website
        </Button>
      </div>

      <div className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight">Brand kit</h1>
        <p className="text-sm text-muted-foreground">
          Logos, photos, fonts, and colors. Changes auto-save to draft — Publish when ready for the live site.
        </p>
      </div>

      <section className="space-y-4 border-t border-border pt-8">
        <ColorFields colors={draft.colors} onChange={(colors) => setDraft({ ...draft, colors })} />
      </section>

      <section className="space-y-4 border-t border-border pt-8">
        <div className="space-y-1">
          <p className="text-xl font-semibold">Type</p>
          <p className="text-sm text-muted-foreground">Font family, size, and color for each role site-wide.</p>
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Type role">
          {TYPE_ROLES.map((role) => (
            <button
              key={role.id}
              type="button"
              role="tab"
              aria-selected={typeRole === role.id}
              className={cn(
                "min-h-[44px] rounded-lg border px-4 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                typeRole === role.id
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background text-foreground",
              )}
              onClick={() => setTypeRole(role.id)}
            >
              {role.label}
            </button>
          ))}
        </div>
        <TypeFields
          type={draft.type}
          role={typeRole}
          colors={draft.colors}
          showTitle={false}
          onChange={(type) => setDraft({ ...draft, type })}
        />
      </section>

      <section className="space-y-4 border-t border-border pt-8">
        <div className="space-y-1">
          <p className="text-xl font-semibold">Logos & photos</p>
          <p className="text-sm text-muted-foreground">
            Upload once to the library, then assign to a slot (crest, marks, page images).
          </p>
        </div>
        <div className="grid gap-2 max-w-xl">
          <Label htmlFor="brand-kit-slot">Assign to slot</Label>
          <select
            id="brand-kit-slot"
            className="min-h-[44px] rounded-lg border border-input bg-background px-3 text-sm"
            value={mediaSlot}
            onChange={(event) => setMediaSlot(event.target.value as MediaSlot)}
          >
            {MEDIA_SLOTS.map((slot) => (
              <option key={slot.key} value={slot.key}>
                {slot.label}
              </option>
            ))}
          </select>
        </div>
        {draft.media[mediaSlot] ? (
          <img
            src={draft.media[mediaSlot]}
            alt=""
            className="aspect-video max-w-xl rounded-xl border border-border object-cover"
          />
        ) : (
          <div className="flex aspect-video max-w-xl items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-sm text-muted-foreground">
            No custom image — using the built-in slot image until you assign one.
          </div>
        )}
        <HubLibraryPanel
          library={library}
          activeSlot={mediaSlot}
          slotLabel={slotLabel}
          onSync={(payload) => {
            applyResponse(payload);
            setMessage("Saved draft");
          }}
          onError={(msg) => setError(msg || null)}
        />
      </section>

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

      <div className="flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:flex-wrap">
        <Button type="button" disabled={pending} className="min-h-[44px]" onClick={() => void save()}>
          <Save className="size-4" />
          Save draft
        </Button>
        <Button type="button" disabled={pending} className="min-h-[44px]" onClick={() => void act("publish")}>
          Publish
        </Button>
        <Button
          type="button"
          variant="outline"
          disabled={pending}
          className="min-h-[44px]"
          onClick={() => void act("revert")}
        >
          Revert
        </Button>
        <Button type="button" variant="ghost" className="min-h-[44px]" onClick={() => void logout()}>
          Log out
        </Button>
      </div>
    </div>
  );
}
