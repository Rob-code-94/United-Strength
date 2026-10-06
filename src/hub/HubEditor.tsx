import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Save } from "lucide-react";
import AppSidebar from "@/components/shadcn-space/blocks/dashboard-shell-03/app-sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ColorFields, TypeFields } from "@/hub/BrandKitFormFields";
import HubLibraryPanel from "@/hub/HubLibraryPanel";
import HubPreview, { type PreviewTarget, type TypeRole } from "@/hub/HubPreview";
import {
  MEDIA_SLOTS,
  getCopyPath,
  listCopyPaths,
  mergeFaq,
  setCopyPath as patchCopyPath,
  type BrandKitFields,
  type FaqKit,
  type MediaSlot,
  type PageCopyKit,
} from "@/hub/brand-kit";
import type { HubPageId } from "@/hub/hub-pages";
import { useKitDraft, type KitEditorState } from "@/hub/useKitDraft";
import { V1_FACTS } from "@/data/v1-interior-copy";
import { inferTypeRoleFromPath } from "@/components/direction-v1/pages/V1Interior";

interface HubEditorProps {
  initial: KitEditorState;
  onChange: (next: KitEditorState) => void;
  onGoHome: () => void;
  onGoBrandKit: () => void;
}

/**
 * Donor: @shadcn-space/dashboard-shell-03 (Pro).
 * Settings stay in the fixed sidebar. The preview column scrolls on its own.
 */
export default function HubEditor({ initial, onChange, onGoHome, onGoBrandKit }: HubEditorProps) {
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

  const [tab, setTab] = useState<"brand" | "type" | "media" | "footer" | "faq" | "copy" | null>(null);
  const [mediaSlot, setMediaSlot] = useState<MediaSlot>("strongerUnited");
  const [typeRole, setTypeRole] = useState<TypeRole | null>(null);
  const [copyPath, setCopyPath] = useState<string | null>(null);
  const [pageId, setPageId] = useState<HubPageId>("home");
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (previewRef.current) previewRef.current.scrollTop = 0;
  }, [pageId]);

  useEffect(() => {
    const section = document.getElementById(`hub-settings-${tab}`);
    section?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [tab, typeRole, mediaSlot, copyPath]);

  useEffect(() => {
    if (tab !== "copy" || !copyPath) return;
    const field = document.getElementById(`hub-copy-field-${copyPath.replace(/\./g, "-")}`);
    field?.scrollIntoView({ block: "nearest", inline: "nearest" });
    if (field instanceof HTMLTextAreaElement || field instanceof HTMLInputElement) {
      field.focus();
    }
  }, [tab, copyPath]);

  const slotLabel = MEDIA_SLOTS.find((slot) => slot.key === mediaSlot)?.label ?? "Image";

  const sidebar = (
    <div className="flex flex-col gap-8 pb-4">
      <div className="flex flex-col gap-2">
        <Button type="button" variant="outline" className="min-h-[44px]" onClick={onGoHome}>
          <ArrowLeft className="size-4" />
          Hub home
        </Button>
        <Button type="button" variant="secondary" className="min-h-[44px]" onClick={onGoBrandKit}>
          Brand kit
        </Button>
      </div>
      {tab === null ? (
        <p className="text-sm text-muted-foreground">
          Click a pencil on the page to edit copy, images, footer, or FAQ. For fonts and colors, open Brand kit.
        </p>
      ) : null}
      {tab === "brand" ? (
        <div id="hub-settings-brand">
          <ColorFields colors={draft.colors} onChange={(colors) => setDraft({ ...draft, colors })} />
        </div>
      ) : null}
      {tab === "type" && typeRole ? (
        <div id="hub-settings-type">
          <TypeFields
            type={draft.type}
            role={typeRole}
            colors={draft.colors}
            onChange={(type) => setDraft({ ...draft, type })}
          />
        </div>
      ) : null}
      {tab === "media" ? (
        <div id="hub-settings-media" className="space-y-6">
          <div className="space-y-1">
            <p className="text-xl font-semibold">{slotLabel}</p>
            <p className="text-sm text-muted-foreground">Assign from the library or upload a new image.</p>
          </div>
          {draft.media[mediaSlot] ? (
            <img
              src={draft.media[mediaSlot]}
              alt=""
              className="aspect-video w-full rounded-xl border border-border object-cover"
            />
          ) : (
            <div className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-border bg-muted/40 text-sm text-muted-foreground">
              No image yet — using the built-in slot image until you assign one.
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
      {tab === "faq" ? (
        <div id="hub-settings-faq">
          <FaqFields faq={draft.faq} onChange={(faq) => setDraft({ ...draft, faq })} />
        </div>
      ) : null}
      {tab === "copy" && copyPath ? (
        <div id="hub-settings-copy" className="space-y-8">
          <CopyFields
            pages={draft.pages}
            path={copyPath}
            onChange={(pages) => setDraft({ ...draft, pages })}
            onFocusPath={(path) => {
              setCopyPath(path);
              setTypeRole(inferTypeRoleFromPath(path));
            }}
          />
          {typeRole ? (
            <div className="border-t border-border pt-6">
              <TypeFields
                type={draft.type}
                role={typeRole}
                colors={draft.colors}
                onChange={(type) => setDraft({ ...draft, type })}
              />
              <p className="mt-3 text-xs text-muted-foreground">
                Type applies to every {typeRole === "mono" ? "chapter number" : typeRole === "display" ? "display heading" : "body paragraph"}{" "}
                on the site — not only this field.
              </p>
            </div>
          ) : null}
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
    <AppSidebar
      sidebar={sidebar}
      headerActions={
        <>
          <Button type="button" variant="outline" size="sm" className="min-h-[44px] hidden md:inline-flex" onClick={onGoHome}>
            Hub home
          </Button>
          <Button type="button" variant="secondary" size="sm" className="min-h-[44px] hidden md:inline-flex" onClick={onGoBrandKit}>
            Brand kit
          </Button>
        </>
      }
    >
      <div ref={previewRef} className="h-full overflow-y-auto p-4 md:p-6">
        <div className="mb-4 flex flex-wrap gap-2 md:hidden">
          <Button type="button" variant="outline" size="sm" className="min-h-[44px]" onClick={onGoHome}>
            Hub home
          </Button>
          <Button type="button" variant="secondary" size="sm" className="min-h-[44px]" onClick={onGoBrandKit}>
            Brand kit
          </Button>
        </div>
        <HubPreview
          draft={draft}
          tab={tab}
          mediaSlot={mediaSlot}
          typeRole={typeRole}
          copyPath={copyPath}
          pageId={pageId}
          onPageChange={setPageId}
          onSelect={(target: PreviewTarget) => {
            if (target.kind === "brand") {
              onGoBrandKit();
              return;
            }
            if (target.kind === "footer") {
              setTab("footer");
              setTypeRole(null);
              setCopyPath(null);
              return;
            }
            if (target.kind === "faq") {
              setTab("faq");
              setTypeRole(null);
              setCopyPath(null);
              return;
            }
            if (target.kind === "media") {
              setTab("media");
              setMediaSlot(target.slot);
              setTypeRole(null);
              setCopyPath(null);
              return;
            }
            if (target.kind === "copy") {
              setTab("copy");
              setCopyPath(target.path);
              setTypeRole(target.typeRole ?? inferTypeRoleFromPath(target.path));
              return;
            }
            setTab("type");
            setTypeRole(target.role);
            setCopyPath(null);
          }}
        />
      </div>
    </AppSidebar>
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
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone (call / text)</Label>
          <Input
            id="phone"
            type="tel"
            inputMode="tel"
            placeholder="Optional — hides Connect icon when empty"
            value={footer.phone ?? ""}
            onChange={(event) => onFooter({ ...footer, phone: event.target.value })}
            className="h-11"
          />
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

function CopyFields({
  pages,
  path,
  onChange,
  onFocusPath,
}: {
  pages: PageCopyKit;
  path: string;
  onChange: (pages: PageCopyKit) => void;
  onFocusPath: (path: string) => void;
}) {
  // Section pencils pass a prefix (e.g. philosophy.beliefs.0); field pencils pass a leaf path.
  const underPrefix = listCopyPaths(pages).filter(
    (item) => item === path || item.startsWith(`${path}.`),
  );
  const paths = (underPrefix.length > 0 ? underPrefix : [path]).slice(0, 40);
  const isSection = underPrefix.length > 1 || getCopyPath(pages, path) === undefined;

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="space-y-1">
        <p className="text-xl font-semibold">{isSection ? "Section copy" : "Page copy"}</p>
        <p className="text-sm text-muted-foreground">
          {isSection
            ? "Edit every field in this section. Font, size, and color for this type role are below."
            : "Edit the words, then font, size, and color for this type role below."}
        </p>
        <p className="text-xs text-muted-foreground break-all">{path}</p>
      </div>
      {paths.map((itemPath) => {
        const value = getCopyPath(pages, itemPath) ?? "";
        const id = `hub-copy-field-${itemPath.replace(/\./g, "-")}`;
        const multiline = value.length > 80 || itemPath.includes("body") || itemPath.includes("perspective");
        return (
          <div key={itemPath} className="grid gap-2 border-t border-border pt-4">
            <Label htmlFor={id} className="break-all text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {itemPath}
            </Label>
            {multiline ? (
              <Textarea
                id={id}
                value={value}
                rows={4}
                onFocus={() => onFocusPath(itemPath)}
                onChange={(event) => onChange(patchCopyPath(pages, itemPath, event.target.value))}
              />
            ) : (
              <Input
                id={id}
                value={value}
                className="h-11"
                onFocus={() => onFocusPath(itemPath)}
                onChange={(event) => onChange(patchCopyPath(pages, itemPath, event.target.value))}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function FaqFields({ faq, onChange }: { faq: FaqKit; onChange: (faq: FaqKit) => void }) {
  const items = mergeFaq(faq).items;
  const groupFor = (n: string) =>
    V1_FACTS.find((group) => group.items.some((item) => item.n === n))?.title ?? "FAQ";

  return (
    <div className="space-y-6 max-w-2xl">
      <div className="space-y-1">
        <p className="text-xl font-semibold">FAQ</p>
        <p className="text-sm text-muted-foreground">
          Twenty questions and answers. Save draft, then publish for the live site.
        </p>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="faq-intro">Intro</Label>
        <Input
          id="faq-intro"
          value={faq.intro}
          onChange={(event) => onChange({ ...faq, intro: event.target.value })}
          className="h-11"
        />
      </div>
      {items.map((item, index) => (
        <div key={item.n} className="space-y-3 border-t border-border pt-4">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {item.n} · {groupFor(item.n)}
          </p>
          <div className="grid gap-2">
            <Label htmlFor={`faq-q-${item.n}`}>Question</Label>
            <Input
              id={`faq-q-${item.n}`}
              value={item.q}
              onChange={(event) => {
                const next = items.slice();
                next[index] = { ...item, q: event.target.value };
                onChange({ ...faq, items: next });
              }}
              className="h-11"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor={`faq-a-${item.n}`}>Answer</Label>
            <Textarea
              id={`faq-a-${item.n}`}
              value={item.a}
              rows={4}
              onChange={(event) => {
                const next = items.slice();
                next[index] = { ...item, a: event.target.value };
                onChange({ ...faq, items: next });
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
