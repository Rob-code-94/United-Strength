import { cn } from "@/lib/utils";

/** Donor: file-upload-02 progress track. */
export function Progress({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  return (
    <div className={cn("h-1.5 w-full overflow-hidden rounded-full bg-muted", className)}>
      <div
        data-slot="progress-indicator"
        className="h-full bg-blue-500 transition-[width]"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}
