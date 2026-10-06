import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FONT_FAMILIES, type BrandKitFields, type FontFamily } from "@/hub/brand-kit";
import type { TypeRole } from "@/hub/HubPreview";
import { cn } from "@/lib/utils";

export const BRAND_SWATCHES = ["#111111", "#F3EEE7", "#C4A35A", "#181818"] as const;

/** Seed kit defaults per role — used for “Kit default” chip hint. */
const ROLE_DEFAULT_FAMILY: Record<TypeRole, FontFamily> = {
  display: "Satoshi",
  body: "Satoshi",
  mono: "IBM Plex Mono",
};

export function ColorFields({
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
  const swatchSet = Array.from(
    new Set([...BRAND_SWATCHES, colors.background, colors.cream, colors.gold, colors.text]),
  );
  return (
    <div className="space-y-6 max-w-xl">
      <div className="space-y-1">
        <p className="text-xl font-semibold">Colors</p>
        <p className="text-sm text-muted-foreground">
          Hex colors for the V1 homepage. Use swatches for the club palette.
        </p>
      </div>
      {fields.map((field) => (
        <div key={field.key} className="grid gap-2">
          <Label htmlFor={field.key}>{field.label}</Label>
          <div className="flex flex-wrap items-center gap-2">
            <Input
              id={field.key}
              value={colors[field.key]}
              onChange={(event) => onChange({ ...colors, [field.key]: event.target.value })}
              className="h-11 min-w-0 flex-1"
              spellCheck={false}
            />
            <span
              className="size-11 shrink-0 rounded-full border border-border"
              style={{ backgroundColor: colors[field.key] }}
              aria-hidden
            />
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label={`${field.label} presets`}>
            {swatchSet.map((hex) => (
              <button
                key={`${field.key}-${hex}`}
                type="button"
                title={hex}
                aria-label={`Set ${field.label} to ${hex}`}
                className={cn(
                  "size-9 rounded-full border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  colors[field.key].toLowerCase() === hex.toLowerCase() ? "ring-2 ring-ring ring-offset-2" : "",
                )}
                style={{ backgroundColor: hex }}
                onClick={() => onChange({ ...colors, [field.key]: hex })}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function TypeFields({
  type,
  role,
  onChange,
  colors: kitColors,
  showTitle = true,
}: {
  type: BrandKitFields["type"];
  role: TypeRole;
  onChange: (type: BrandKitFields["type"]) => void;
  /** Brand kit palette — used for type color preset swatches. */
  colors: BrandKitFields["colors"];
  showTitle?: boolean;
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
  const colorFields: { key: "displayColor" | "bodyColor" | "monoColor"; role: TypeRole; label: string }[] = [
    { key: "displayColor", role: "display", label: "Display color" },
    { key: "bodyColor", role: "body", label: "Body color" },
    { key: "monoColor", role: "mono", label: "Number color" },
  ];
  const visibleSelects = selects.filter((field) => field.role === role);
  const visibleSizes = sizes.filter((field) => field.role === role);
  const visibleColors = colorFields.filter((field) => field.role === role);
  const roleName = role === "mono" ? "chapter number" : role === "display" ? "display heading" : "body paragraph";
  const kitDefaultFamily = ROLE_DEFAULT_FAMILY[role];
  const colorSwatchSet = Array.from(
    new Set([
      ...BRAND_SWATCHES,
      kitColors.background,
      kitColors.cream,
      kitColors.gold,
      kitColors.text,
      ...visibleColors.map((field) => type[field.key]).filter(Boolean),
    ]),
  );

  useEffect(() => {
    if (!role) return;
    const familyId = role === "mono" ? "monoFamily" : role === "display" ? "displayFamily" : "bodyFamily";
    const field = document.getElementById(familyId);
    field?.focus({ preventScroll: true });
    field?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }, [role]);

  return (
    <div className="space-y-6 max-w-xl">
      {showTitle ? (
        <div className="space-y-1">
          <p className="text-xl font-semibold">Type</p>
          <p className="text-sm text-muted-foreground">
            This applies to every {roleName} on the site. Use brand kit presets or pick below. Sizes are pixels.
          </p>
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          Applies to every {roleName}. Brand kit presets below. Sizes are pixels.
        </p>
      )}
      {visibleSelects.map((field) => (
        <div key={field.key} className="grid gap-2">
          <Label htmlFor={field.key}>{field.label}</Label>
          <div className="flex flex-wrap gap-2" role="group" aria-label={`${field.label} brand kit fonts`}>
            {FONT_FAMILIES.map((family) => {
              const active = type[field.key] === family;
              const isKitDefault = family === kitDefaultFamily;
              return (
                <button
                  key={family}
                  type="button"
                  aria-pressed={active}
                  aria-label={
                    isKitDefault ? `Set ${field.label} to ${family} (kit default)` : `Set ${field.label} to ${family}`
                  }
                  className={cn(
                    "min-h-[44px] rounded-lg border px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    active
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-background text-foreground",
                  )}
                  onClick={() => onChange({ ...type, [field.key]: family })}
                >
                  {family}
                  {isKitDefault ? (
                    <span className={cn("ml-1 text-[10px] uppercase tracking-wide", active ? "opacity-80" : "text-muted-foreground")}>
                      kit
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
          <select
            id={field.key}
            className="min-h-[44px] rounded-lg border border-input bg-background px-3 text-sm"
            value={type[field.key]}
            onChange={(event) => onChange({ ...type, [field.key]: event.target.value as FontFamily })}
          >
            {FONT_FAMILIES.map((family) => (
              <option key={family} value={family}>
                {family}
                {family === kitDefaultFamily ? " (kit default)" : ""}
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
                aria-label={`${field.label} picker`}
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
            <div className="flex flex-wrap gap-2" role="group" aria-label={`${field.label} brand kit colors`}>
              {colorSwatchSet.map((hex) => (
                <button
                  key={`${field.key}-${hex}`}
                  type="button"
                  title={hex}
                  aria-label={`Set ${field.label} to ${hex}`}
                  className={cn(
                    "size-9 rounded-full border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    (type[field.key] ?? "").toLowerCase() === hex.toLowerCase()
                      ? "ring-2 ring-ring ring-offset-2"
                      : "",
                  )}
                  style={{ backgroundColor: hex }}
                  onClick={() => onChange({ ...type, [field.key]: hex })}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
