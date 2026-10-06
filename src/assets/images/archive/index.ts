/**
 * Archive note covers — from `US EDITORIAL Post/` (Issue 001 stills).
 * Facility library stays in `gym/`; do not mix.
 * Used by Archive UI only — never import from hub/API data modules.
 */
import note01 from "./note-01.jpg";
import note02 from "./note-02.jpg";

export const archiveCovers = {
  note01,
  note02,
} as const;

export type ArchiveCoverKey = keyof typeof archiveCovers;

export function archiveCoverUrl(key: ArchiveCoverKey | string | undefined): string {
  if (key === "note01" || key === "note02") return archiveCovers[key];
  return "";
}
