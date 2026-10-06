import { useCallback, useMemo, useState } from "react";
import { useDropzone, type FileRejection } from "react-dropzone";
import { CloudUpload, Loader2, Search, Trash2, X } from "lucide-react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import type { BrandKitFields, MediaLibraryItem, MediaSlot } from "@/hub/brand-kit";

export interface LibraryEditorPayload {
  draft: BrandKitFields;
  draftUpdatedAt: string;
  library: MediaLibraryItem[];
}

interface HubLibraryPanelProps {
  library: MediaLibraryItem[];
  /** When set, shows “Use for {slot}” on each tile. */
  activeSlot?: MediaSlot;
  slotLabel?: string;
  onSync: (payload: LibraryEditorPayload) => void;
  onError: (message: string) => void;
}

/**
 * Pro fidelity (promoted):
 * - gallery-02: thumbnail card = relative overflow-hidden image + bottom title overlay
 * - empty-state-05: Card + InputGroup search + Empty / EmptyMedia / title / description / reset CTA
 * - file-upload-02: dashed dropzone + Browse File
 */
export default function HubLibraryPanel({
  library,
  activeSlot,
  slotLabel,
  onSync,
  onError,
}: HubLibraryPanelProps) {
  const [query, setQuery] = useState("");
  const [uploading, setUploading] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return library;
    return library.filter(
      (item) => item.name.toLowerCase().includes(q) || item.id.toLowerCase().includes(q),
    );
  }, [library, query]);

  const uploadFile = useCallback(
    async (file: File) => {
      setUploading(true);
      onError("");
      try {
        const dataUrl = await readAsDataUrl(file);
        const dataBase64 = dataUrl.split(",")[1] ?? "";
        const response = await fetch("/api/brand-kit/library", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            contentType: file.type,
            dataBase64,
            name: file.name,
          }),
        });
        const payload = (await response.json()) as LibraryEditorPayload & { error?: string };
        if (!response.ok) {
          onError(payload.error ?? "Upload failed. Try again.");
          return;
        }
        onSync(payload);
      } catch {
        onError("Upload failed. Try again.");
      } finally {
        setUploading(false);
      }
    },
    [onError, onSync],
  );

  const onDrop = useCallback(
    (accepted: File[], rejected: FileRejection[]) => {
      if (rejected.length > 0) {
        const tooBig = rejected.some((item) => item.errors.some((error) => error.code === "file-too-large"));
        onError(tooBig ? "Stills must be under 3 MB; GIFs under 5 MB." : "Use a JPEG, PNG, WebP, or GIF image.");
        return;
      }
      const file = accepted[0];
      if (!file) return;
      const maxBytes = file.type === "image/gif" ? 5_000_000 : 3_000_000;
      if (file.size > maxBytes) {
        onError(file.type === "image/gif" ? "GIF must be under 5 MB." : "Image must be under 3 MB.");
        return;
      }
      void uploadFile(file);
    },
    [onError, uploadFile],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    disabled: uploading,
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
      "image/webp": [".webp"],
      "image/gif": [".gif"],
    },
    maxSize: 5_000_000,
  });

  const assign = async (libraryId: string) => {
    if (!activeSlot) return;
    setBusyId(libraryId);
    onError("");
    try {
      const response = await fetch("/api/brand-kit", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ action: "assignMedia", slot: activeSlot, libraryId }),
      });
      const payload = (await response.json()) as LibraryEditorPayload & { error?: string };
      if (!response.ok) {
        onError(payload.error ?? "Could not assign that image.");
        return;
      }
      onSync(payload);
    } catch {
      onError("Could not assign that image.");
    } finally {
      setBusyId(null);
    }
  };

  const remove = async (libraryId: string) => {
    if (!window.confirm("Delete this image from the library?")) return;
    setBusyId(libraryId);
    onError("");
    try {
      const response = await fetch("/api/brand-kit/library", {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id: libraryId }),
      });
      const payload = (await response.json()) as LibraryEditorPayload & { error?: string };
      if (!response.ok) {
        onError(payload.error ?? "Could not delete that image.");
        return;
      }
      onSync(payload);
    } catch {
      onError("Could not delete that image.");
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <p className="text-xl font-semibold">Media library</p>
        <p className="text-sm text-muted-foreground">
          Upload once, then search and reuse on any slot. Library stays after Revert.
          {activeSlot && slotLabel ? ` Assigning to ${slotLabel}.` : ""}
        </p>
      </div>

      <Card className="w-full py-4">
        <CardContent className="space-y-4 px-4">
          <InputGroup>
            <InputGroupInput
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search library…"
              aria-label="Search media library"
            />
            <InputGroupAddon>
              <Search className="size-4 text-muted-foreground" />
            </InputGroupAddon>
            {query ? (
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  size="icon-xs"
                  variant="ghost"
                  onClick={() => setQuery("")}
                  className="cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="size-3.5" />
                </InputGroupButton>
              </InputGroupAddon>
            ) : null}
          </InputGroup>

          {library.length === 0 ? (
            <Empty className="border border-dashed py-8">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <CloudUpload />
                </EmptyMedia>
                <EmptyTitle>No images in the library yet</EmptyTitle>
                <EmptyDescription>Upload JPEG, PNG, WebP, or GIF files to reuse across pages.</EmptyDescription>
              </EmptyHeader>
            </Empty>
          ) : filtered.length === 0 ? (
            <Empty className="border border-dashed py-8">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <Search />
                </EmptyMedia>
                <EmptyTitle>{`No matches for "${query.trim()}"`}</EmptyTitle>
                <EmptyDescription>Try a different keyword or clear the search.</EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button type="button" variant="outline" className="min-h-[44px]" onClick={() => setQuery("")}>
                  Reset search
                </Button>
              </EmptyContent>
            </Empty>
          ) : (
            <ul className="grid grid-cols-2 gap-3">
              {filtered.map((item) => (
                <li key={item.id} className="space-y-2">
                  {/* gallery-02 card DNA: relative overflow image + bottom title */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-muted">
                    <img src={item.url} alt="" className="size-full object-cover" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-2 pb-2 pt-8">
                      <p className="truncate text-xs font-medium text-white">{item.name}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {activeSlot ? (
                      <Button
                        type="button"
                        size="sm"
                        className="min-h-[44px] w-full"
                        disabled={busyId === item.id}
                        onClick={() => void assign(item.id)}
                      >
                        {busyId === item.id ? <Loader2 className="size-3.5 animate-spin" /> : null}
                        Use for slot
                      </Button>
                    ) : null}
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      className="min-h-[44px] w-full"
                      disabled={busyId === item.id}
                      onClick={() => void remove(item.id)}
                    >
                      <Trash2 className="size-3.5" />
                      Delete
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      <Card className="w-full py-6">
        <CardContent className="px-6">
          <div
            {...getRootProps()}
            className={cn(
              "relative group cursor-pointer overflow-hidden rounded-xl border-2 border-dashed transition-all duration-200",
              "flex flex-col items-center justify-center gap-4 p-8 text-center",
              isDragActive && "border-primary bg-primary/5 shadow-inner",
              uploading && "pointer-events-none opacity-70",
            )}
          >
            <Input {...getInputProps()} />
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed text-muted-foreground transition-colors group-hover:text-foreground">
              {uploading ? <Loader2 size={20} className="animate-spin" /> : <CloudUpload size={20} />}
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">
                {uploading ? "Uploading…" : isDragActive ? "Drop files here" : "Add to library"}
              </p>
              <p className="text-xs text-muted-foreground">JPEG, PNG, WebP (3 MB) · GIF still or loop (5 MB)</p>
            </div>
            <Button type="button" variant="outline" className="min-h-[44px] rounded-md px-6 font-medium leading-none">
              Browse File
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function readAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : "");
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}
