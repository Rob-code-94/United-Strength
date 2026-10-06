# United Strength — final brand assets (hand-off pack)

**Location in repo:** [`United_Strength_Final_Brand_Assets/`](United_Strength_Final_Brand_Assets/)  
**Source:** Todd pack `United_Strength_Final_Brand_Assets` (copied 10/06/2026 for GitHub transfer).  
**Do not delete this folder** — it survives ownership transfer with the repo.

This pack is **reference + hub-ready PNGs**. Nothing here is auto-wired into the live site. Todd (or Dev) uploads chosen files through **`/hub` → Media** (or types hexes in Brand).

Full hub rules: [hub-editable-matrix.md](../hub-editable-matrix.md).

---

## Upload rules (hub Media)

| Allowed | Limit |
|---|---|
| JPEG / PNG / WebP | ≤ **3 MB** each |
| GIF (still or loop) | ≤ **5 MB** each |

**Not accepted by hub:** SVG, PDF, AI, EPS, OTF/TTF/WOFF. Export or pick a **PNG** from the pack before upload.

Workflow: pencil on the preview image → Media tab → drop PNG → **Save draft** → **Publish** when ready.

---

## Colors

| Pack file | Hub action |
|---|---|
| `Color/United_Strength_color.jpg` (or `.pdf` / `.ai`) | Open as reference → Hub → **Brand** → enter hex for Background, Cream, Gold, Text |

Default kit hexes today: background `#111111` · cream `#F3EEE7` · gold `#C4A35A` · text `#181818`. Match from the color sheet when Todd finalizes.

---

## Fonts

Pack OTFs from `z_Fonts/` (+ Gotham in `z_master file/`) are installed for the site/hub:

| Hub family | Source file |
|---|---|
| Tangier | `z_Fonts/Tangier_Medium.otf` |
| Neue Haas Grotesk | `z_Fonts/Neue_Haas_Grotesk_Pro55_roman.otf` |
| Bookmania | `z_Fonts/Bookmania_Regular_italic.otf` |
| Field Gothic | `z_Fonts/Field_Gothic_84_xwide.otf` |
| Roboto Mono | `z_Fonts/Roboto_Mono_Medium.otf` |
| Gotham | `z_master file/.../Gotham-Bold.otf` |

Served from `public/fonts/brand/` with `@font-face` in `src/index.css`.

Hub **Type** also still offers web defaults:

- **Satoshi** (Fontshare)
- **Instrument Serif**
- **IBM Plex Mono**

Pick any of these in Brand kit or the copy sidebar Type chips.

---

## Marks → hub media slots

Use **PNG** paths below (prefer dark/cream-friendly: white or yellow on charcoal).

| Hub slot | Suggested PNG (from this pack) | Notes |
|---|---|---|
| `crest` | `Marks/Shield Crest/PNG/US_shield_white.png` or `US_shield_yellow.png` · or `Marks/Modern Crest/PNG/US_modern_crest_white.png` | **Footer crest only.** Header / drawer watermark still uses the built-in SVG until Dev wires the header to this slot. |
| `strongerUnited` | `Marks/z_other/Stronger United w Globe/PNG/US_Stronger_United_white.png` (or yellow / black) | Footer Stronger United lockup. |
| `pillar1` … `pillar4` | **Not** the small pillar icons | Those slots replace **full-bleed Opening 03 photos**, not icon marks. Keep built-in photos unless swapping photography. Pillar icon PNGs under `Marks/1_Move The City`, `2_Foundation`, `3_Longevity`, `4_Reflection` are for print/future pages — ask Dev before forcing them into `pillar*` slots. |

Other marks (`United Stack`, `EST 2021`, stars, Roman numerals, GPS, cards) have no dedicated hub slots today. Keep them in this folder for print / future Dev work.

---

## What’s in this pack

| Folder | Contents |
|---|---|
| `Color/` | Color sheet (jpg / pdf / ai) |
| `z_Fonts/` | Brand OTFs (reference) |
| `Marks/Shield Crest` · `Modern Crest` | Crest masters (PNG/SVG/PDF/AI/EPS) |
| `Marks/1_Move The City` … `4_Reflection` | Pillar marks + cards |
| `Marks/z_other/` | Stronger United, stacks, stars, EST, numerals, GPS |
| `z_master file/` | Illustrator master + Gotham |

---

## Not in this pack (still Todd-provides for hub)

Upload when ready via the matching Media slots:

- Founder collage / mid-page photo → `founderHero`, `founderPortrait`
- Run Club route maps → `runRouteMonday`, `runRouteThursday` (**PNG/JPEG**, not SVG)
- Coach stills or GIFs → `teamTodd`, `teamJenna`, `teamJason`, `teamKara`
- Cultivated type artwork → `cultivatedTypeArt` (looping MP4 hero stays Dev-only)
- Cultivated / Archive / Experience photography as needed

---

## Dev-only (not hub)

- Header crest / monogram reading the hub `crest` slot
- SVG media uploads
- Pillar icon marks as dedicated logo slots
- Nav, layout, Mariana embeds, Typeform / env URLs
