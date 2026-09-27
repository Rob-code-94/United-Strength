import { useCallback, useState } from "react";
import { useDropzone, type FileRejection } from "react-dropzone";
import {
  CheckCircle2,
  CloudUpload,
  FileIcon,
  FileImage,
  Loader2,
  Trash2,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import type { MediaSlot } from "@/hub/brand-kit";

interface FileWithProgress {
  id: string;
  file: File;
  progress: number;
  status: "uploading" | "completed" | "error";
  errorMessage?: string;
  totalSizeText?: string;
}

interface FileUpload02Props {
  slot: MediaSlot;
  onUploaded: (slot: MediaSlot, url: string) => void;
}

/**
 * Donor: @shadcn-space/file-upload-02 (Pro).
 * Demo PDF rows removed. Drop writes the chosen brand-kit slot.
 */
export default function FileUpload02({ slot, onUploaded }: FileUpload02Props) {
  const [files, setFiles] = useState<FileWithProgress[]>([]);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  };

  const onDrop = useCallback(
    (acceptedFiles: File[], rejected: FileRejection[]) => {
      if (rejected.length > 0) {
        const tooBig = rejected.some((item) => item.errors.some((error) => error.code === "file-too-large"));
        setFiles([
          {
            id: "rejected",
            file: new File([], rejected[0]?.errors[0]?.code ?? "file"),
            progress: 0,
            status: "error",
            errorMessage: tooBig ? "Image must be under 3 MB." : "Use a JPEG, PNG, WebP, or GIF image.",
            totalSizeText: "0 KB",
          },
        ]);
        return;
      }
      const file = acceptedFiles[0];
      if (!file) return;
      const id = Math.random().toString(36).slice(2);
      const row: FileWithProgress = {
        id,
        file,
        progress: 5,
        status: "uploading",
        totalSizeText: formatFileSize(file.size),
      };
      setFiles([row]);
      const reader = new FileReader();
      reader.onload = () => {
        const result = typeof reader.result === "string" ? reader.result : "";
        const dataBase64 = result.split(",")[1] ?? "";
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/api/brand-kit/media");
        xhr.setRequestHeader("content-type", "application/json");
        xhr.upload.onprogress = (event) => {
          if (!event.lengthComputable) return;
          const progress = Math.min(95, Math.round((event.loaded / event.total) * 100));
          setFiles((prev) => prev.map((item) => (item.id === id ? { ...item, progress } : item)));
        };
        xhr.onload = () => {
          let payload: { error?: string; url?: string } = {};
          try {
            payload = JSON.parse(xhr.responseText) as { error?: string; url?: string };
          } catch {
            payload = {};
          }
          if (xhr.status >= 200 && xhr.status < 300 && payload.url) {
            setFiles((prev) =>
              prev.map((item) =>
                item.id === id ? { ...item, progress: 100, status: "completed" } : item,
              ),
            );
            onUploaded(slot, payload.url);
            return;
          }
          setFiles((prev) =>
            prev.map((item) =>
              item.id === id
                ? {
                    ...item,
                    status: "error",
                    errorMessage: payload.error ?? "Upload failed. Try again.",
                  }
                : item,
            ),
          );
        };
        xhr.onerror = () => {
          setFiles((prev) =>
            prev.map((item) =>
              item.id === id ? { ...item, status: "error", errorMessage: "Upload failed. Try again." } : item,
            ),
          );
        };
        xhr.send(JSON.stringify({ slot, contentType: file.type, dataBase64 }));
      };
      reader.readAsDataURL(file);
    },
    [onUploaded, slot],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
      "image/webp": [".webp"],
      "image/gif": [".gif"],
    },
    maxSize: 3_000_000,
  });

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="w-full py-6">
        <CardContent className="px-6">
          <div className="space-y-5">
            <div
              {...getRootProps()}
              className={cn(
                "relative group cursor-pointer overflow-hidden rounded-xl border-2 border-dashed transition-all duration-200",
                "flex flex-col items-center justify-center p-8 gap-4 text-center",
                isDragActive && "border-primary bg-primary/5 shadow-inner",
              )}
            >
              <Input {...getInputProps()} />
              <div className="text-muted-foreground group-hover:text-foreground transition-colors h-10 w-10 border-2 border-dashed rounded-full flex items-center justify-center">
                <CloudUpload size={20} />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">
                  {isDragActive ? "Drop files here" : "Choose a file or drag & drop it here"}
                </p>
                <p className="text-xs text-muted-foreground">JPEG, PNG, WebP, and GIF, up to 3 MB.</p>
              </div>
              <Button type="button" variant="outline" className="min-h-[44px] rounded-md font-medium px-6 leading-none cursor-pointer">
                Browse File
              </Button>
            </div>
            {files.length > 0 ? (
              <div className="space-y-3">
                {files.map((fileObj) => (
                  <div key={fileObj.id} className="group relative flex items-center gap-4 p-4 rounded-xl border bg-muted/20">
                    <div className="shrink-0">
                      {fileObj.file.type.includes("image") ? (
                        <FileImage size={24} className="text-blue-500" />
                      ) : (
                        <FileIcon size={24} className="text-muted-foreground" />
                      )}
                    </div>
                    <div className={cn("flex-1 min-w-0", fileObj.status === "uploading" && "space-y-1")}>
                      <p className="text-sm font-medium text-foreground leading-normal truncate">
                        {fileObj.file.name || "Image"}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <span>{fileObj.totalSizeText}</span>
                        <span>·</span>
                        <span
                          className={cn(
                            "flex items-center gap-1.5 font-medium",
                            fileObj.status === "completed" && "text-teal-500",
                            fileObj.status === "error" && "text-red-600",
                          )}
                        >
                          {fileObj.status === "uploading" ? <Loader2 className="size-3 animate-spin text-blue-500" /> : null}
                          {fileObj.status === "completed" ? <CheckCircle2 className="size-3.5 text-teal-500" /> : null}
                          {fileObj.status === "error"
                            ? fileObj.errorMessage
                            : fileObj.status === "uploading"
                              ? "Uploading..."
                              : "Completed"}
                        </span>
                      </div>
                      {fileObj.status === "uploading" ? <Progress value={fileObj.progress} /> : null}
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => removeFile(fileObj.id)}
                      className="absolute right-3.5 top-4 min-h-[44px] min-w-[44px] rounded-full cursor-pointer"
                      aria-label="Remove file"
                    >
                      {fileObj.status === "completed" ? <Trash2 size={16} /> : <X size={16} />}
                    </Button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No replacement yet. The live site keeps the current image until you upload and publish.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
