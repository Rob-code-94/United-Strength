# Hub vs Dev — Todd editable matrix

United Strength final handoff. After login, the hub shows **two tiles**: **Brand kit** (colors, fonts, logos, photo library) and **Edit website** (page preview + copy/media/footer/FAQ pencils).

**Live hub:** `/hub` · Draft auto-saves · **Publish** pushes the kit to the public site · **Revert** restores the last published kit (library catalog is kept).

## Hub home (after login)

| Tile | Opens | What Todd does |
|---|---|---|
| **Brand kit** | Always-visible Colors · Type · Logos & photos | Set club colors/swatches, font family/size/color per role, upload to Media library, assign to slots (crest, marks, page images) |
| **Edit website** | Page preview with pencils | Edit marketing copy, footer, FAQ, assign images to slots from the library |

Both modes have **Hub home** to return to the tiles. Website mode also has a **Brand kit** shortcut (sidebar + header).

## Hub can edit

| Area | What Todd changes | Where |
|---|---|---|
| **Colors** | Background, cream, gold, text · club palette swatches (`#111111` · `#F3EEE7` · `#C4A35A` · `#181818` + current values) | **Brand kit** (primary) — not pencil-gated |
| **Type** | Font family, size, color for display · body · mono (global roles). Preset chips for approved families + brand kit color swatches (club palette + draft Brand colors). | **Brand kit** Type tabs (primary). Website copy sidebar also shows Type for the active role |
| **Copy** | Marketing headlines, kickers, body paragraphs, CTAs, membership tiers, Archive titles, Philosophy place/manifesto/close/beliefs, home chapters, etc. Copy sidebar also shows **font family / size / color** for the global type role that styles that text (display · body · mono — site-wide, not per string). | **Edit website** · field pencils (`copy:…`) or section pencils (`copy-section:…`) |
| **Media / Library** | Upload once, search, assign to any slot, delete unused (blocked while assigned). Draft **auto-saves** (~800ms) | **Brand kit** Logos & photos · or Website media pencils |
| **Footer** | Wordmark, Explore links, Connect (Instagram / email / phone), address, copyright | **Edit website** · footer pencil · Connect email defaults to **info@** (general). Membership / Apply / Experience United / Run Club forms always go to **membership@unitedstrengthgym.com** |
| **FAQ** | Intro line + all 20 Q&A rows | **Edit website** · pencil on FAQ intro |

### Save vs Publish

1. After login, pick **Brand kit** or **Edit website**.
2. Edits **auto-save** to draft (status: “Saved draft”). Manual **Save draft** still available.
3. **Publish** — live marketing pages that read the brand kit show the new kit (including page copy).
4. Until Publish, the live site stays on the last published kit.
5. **Revert** restores draft fields to the last published kit; the **Media library catalog is kept**.

### Pages with copy pencils

Home (real V1 home) · Philosophy · Founder · Team · Space · FAQ (Q&A) · Build · Burn · Personal Training · Run Club · By Design · Cultivated · Archive · Experience United · Apply · Membership.

**Dense clusters (section pencils):** Philosophy beliefs / place / manifesto / close · Founder story & community — one pencil opens all fields for that prefix. Hidden carousel slides do not add pencils.

## Dev-only (ask us)

| Area | Why |
|---|---|
| Nav structure / overlay labels / routes | App chrome |
| Layout, section order, motion, page recipes | Design system — no add/remove sections in hub |
| Form field labels & env URLs (Typeform, Mariana) | Integration |
| Header / drawer crest reading hub `crest` | Still bundled SVG; footer uses hub slot |
| Cultivated looping **MP4** hero video | Code asset — kit has still/poster + type art only |
| Mariana / Triib embeds (`/buy`, `/schedule`, `/account`) | Gym software |
| New pages or sitemap changes | Build work |

## Media notes for Todd

| Surface | Hub slots |
|---|---|
| Philosophy | `philosophyHero`, `philosophyPlace` |
| Archive | `archiveFeatured`, `archiveIssue1`, `archiveIssue2` |
| Run Club maps | `runRouteMonday`, `runRouteThursday` (JPEG/PNG/WebP only — not SVG) |
| Membership | Photography-free by design — `membershipHero` unused |
| Team portraits | Still or GIF per coach slot |
| Footer crest | `crest` — **footer only**; header mark is Dev until wired |
| Stronger United | `strongerUnited` |

**Upload formats:** JPEG / PNG / WebP ≤ 3 MB · GIF ≤ 5 MB. Hub rejects SVG, PDF, AI, EPS, and fonts.

**Type families in hub:** Satoshi · Instrument Serif · IBM Plex Mono · Tangier · Neue Haas Grotesk · Bookmania · Field Gothic · Roboto Mono · Gotham (pack OTFs in `public/fonts/brand/`).

### Final brand pack (in repo)

Full Todd pack lives at [`brand-assets/United_Strength_Final_Brand_Assets/`](brand-assets/United_Strength_Final_Brand_Assets/) with a slot map in [`brand-assets/README.md`](brand-assets/README.md). Use PNG exports from that folder for `crest` / `strongerUnited`. Colors: type hexes from `Color/`. Pack fonts are loaded from `public/fonts/brand/` and selectable in hub Type.

## Inboxes (do not mix)

| Channel | Address | Used for |
|---|---|---|
| General | `info@unitedstrengthgym.com` | Footer Connect icon · general questions |
| Membership | `membership@unitedstrengthgym.com` | Apply form (`/api/apply`) · Apply mailto · Experience United CTA · Run Club signup (`/api/run-club`) |
| Training | `training@unitedstrengthgym.com` | Personal training inquire |

On Vercel: leave `APPLY_TO_EMAIL` **empty** so To = membership@. Only override if Todd asks.

## Ops checklist

- [x] Matrix written for Todd reply (this doc)
- [x] Save draft / Publish / FAQ + **page Copy** hub-editable called out above
- [x] Membership inbox documented (Apply / Experience / Run Club → membership@)
- Remaining Todd-provides: Typeform URL · go-live date · page assets still missing from the brand pack (founder collage, run maps, coach GIFs, Cultivated type art, reviews)
- Brand pack (crests / colors / fonts / pillar marks) is in-repo under `docs/client/brand-assets/` — GitHub/Vercel accounts already confirmed
- Mailchimp disregarded 10/06/2026 — not required for handoff
- Confirm Vercel: `APPLY_TO_EMAIL` empty or `membership@unitedstrengthgym.com`
