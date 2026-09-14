# v6 — V1 Edits homepage

**Registered:** 2026-09-02  
**Status:** Production default homepage (code) — Todd public sign-off still open in fix-backlog  
**Code default:** Direction V1 · EF = frozen lookbook fallback  
**Source:** [US EDITS FROM V1.pdf](../../../US%20EDITS%20FROM%20%20V1.pdf)  
**Wireframe:** [home-direction-v1.md](../../wireframes/home-direction-v1.md)  
**Space donors:** canvas `v1-edits-space-comparison.canvas.tsx`

## Descriptor

Dark-first editorial homepage: horizontal four-chapter opening carousel, ALD-style left nav drawer, concise vertical spine (Offer → Space → Membership passport preview → Start Here), simplified dark footer.

## Naming note

Aesthetic **v1** in this table is still *High-Octane Industrial Sanctuary* (frozen). This entry is **v6**, labeled **V1 Edits** after the client PDF — not a revive of Industrial Sanctuary.

## Simulator

| Control | Value |
|---------|--------|
| Tab | `V1` (next to `E+F` in DEV) |
| `workingDirection` | `"V1"` |
| Composer | `ConceptV1View` · `src/components/direction-v1/*` |
| Default | `"V1"` (EF reachable in local DEV switcher only) |

## Hard rules

- Do **not** mutate frozen EF home files (`ConceptEFView`, `ChapterIntro`, `PillarsSection`, `ExperienceSection`, `Act2LookbookStack`, `BelieveSection`).
- V1 chrome (date format, left drawer) applies only when `workingDirection === "V1"`.
- Shared lookbook primitives / `gymPhotos` / interior routes: import-only.

## Progression

```
OPENING CAROUSEL 01→04 (horizontal)
↓
WHAT WE OFFER
↓
THE SPACE / EXPERIENCE
↓
MEMBERSHIP (passport preview)
↓
START HERE (dual CTAs)
↓
DARK FOOTER
```

## Promote later

Replacing EF as default requires explicit client sign-off — separate decision from this parallel build.
