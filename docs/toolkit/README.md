# High-End Website Builder Stack

Reusable Cursor toolkit for any website project. United Strength is the first validation run.

## Two-layer architecture

| Layer | Location | Purpose |
|-------|----------|---------|
| **Personal skills** (reuse forever) | `~/.cursor/skills/website-brand-foundation/` · `~/.cursor/skills/website-frontend-build/` | Generic foundation + build workflow for any client |
| **Project context** (per client) | `.cursor/skills/{client-slug}-brand/SKILL.md` · `.cursor/rules/brand-tokens.mdc` | Approved palette, type, voice for this project only |
| **Deliverables** | `canvases/`, `moodboard.html`, `docs/brand-foundation-notion-export.md`, `.firecrawl/` | Review artifacts before code |

Full plan: [.cursor/plans/high-end-website-builder-stack.plan.md](../../.cursor/plans/high-end-website-builder-stack.plan.md)

## MCP stack (permanent)

| Tool | Role |
|------|------|
| **cursor-ide-browser** | Inspo extraction, CSS inspection, screenshots |
| **plugin-browse-browser** | Fallback browser |
| **Firecrawl CLI** | Scrape when browser blocked — `~/.npm-global/bin/firecrawl` (v1.19.18+) |
| **plugin-notion-workspace-notion** | Client deliverables, decision logs |
| **cursor-app-control** | `create_project` + `move_agent_to_root` before new project work |
| **user-shadcnspace-mcp** | Discover / install Shadcn Space blocks — see [shadcn-space.md](shadcn-space.md) |

Optional at build phase only: Figma MCP, Firebase MCP.

## Personal skills

### Foundation phase — `website-brand-foundation`

Triggers: palette, moodboard, inspo analysis, creative brief, look-and-feel before code.

**Gate:** No npm dev or framework scaffold until direction is approved.

Starter prompt:

```
Use website-brand-foundation. Here is my creative brief and inspo URLs:

[paste brief]

Extract design signals from the top 5 inspo sites. Propose 3 aesthetic directions plus a recommended hybrid. Build a Brand Direction Canvas at canvases/{client-slug}-brand-direction.canvas.tsx. Create the project brand skill at .cursor/skills/{client-slug}-brand/SKILL.md and brand-tokens.mdc. Do not scaffold a website or run npm dev.
```

### Build phase — `website-frontend-build`

Triggers: build site, create pages, run npm dev — after foundation is locked.

Starter prompt:

```
Use website-frontend-build. Read .cursor/skills/{client-slug}-brand/SKILL.md. Build the homepage per the approved sitemap and aesthetic. Enforce brand-tokens.mdc. No generic AI UI.
```

## United Strength validation outputs

| Deliverable | Path |
|-------------|------|
| Project brand skill | [.cursor/skills/united-strength-brand/SKILL.md](../../.cursor/skills/united-strength-brand/SKILL.md) |
| Brand tokens rule | [.cursor/rules/brand-tokens.mdc](../../.cursor/rules/brand-tokens.mdc) |
| Static moodboard | [moodboard.html](../../moodboard.html) |
| Inspo extraction | [.firecrawl/extraction-summary.md](../../.firecrawl/extraction-summary.md) |
| Notion export | [docs/brand-foundation-notion-export.md](../brand-foundation-notion-export.md) |
| Templates (new clients) | [.cursor/skills/_templates/](../../.cursor/skills/_templates/) |

**Recommended hybrid:** The Quiet Club — alabaster `#F3EEE7`, charcoal `#1A1A1A`, forest `#0A3C2E`, Cormorant Garamond + Work Sans.

**Note:** This repo's live preview may still use aesthetic v2 (Light Performance Bold) or v3 (Editorial Private Club) in `src/app/globals.css`. The foundation skill output is the club-direction baseline; merge into the brand kit when client approves.

## Next client

1. Run `website-brand-foundation` with brief + inspo URLs.
2. Review canvas + moodboard; iterate or approve.
3. Run `website-frontend-build` to implement.

Parallel validation build (Quiet Club stack) also lives at `/Users/cherobinson/Projects/united-strength` on `main`.

## Optional: AI Studio prototype bridge (United Strength beta)

Culture Club UX/UI exploration runs in Google AI Studio; Cursor ports approved patterns into `src/`.

| Surface | URL |
|---------|-----|
| AI Studio app | https://aistudio.google.com/apps/f0b0ce5b-993b-4c03-9e60-d6063c477bd2 |
| Live preview | https://ais-pre-fewk45ctma7odjkgzbjqcl-20545025737.us-east1.run.app |
| Studio code | https://github.com/Rob-code-94/US-google-Studio |

Full workflow: [ai-studio-cursor-bridge.md](ai-studio-cursor-bridge.md) · Prompts: [../client/ai-studio-brief.md](../client/ai-studio-brief.md)
