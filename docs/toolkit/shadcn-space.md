# Shadcn Space — agent / CLI notes for this Vite repo
#
# Resolution order: MCP (user-shadcnspace-mcp) → CLI → ArmorATD offline catalog.
#
# Before Pro installs:
#   set -a && source "/Users/iwc/Development Apps/IW Capital/.secrets/shadcn-space.env" && set +a
#
# Then (npm / package-lock → use npx):
#   npx shadcn@latest add @shadcn-space/<block-name>
#
# Style in components.json is base-nova → use Base install path (not @shadcn-space/radix/...).
# Direction E homepage still adapts catalog DNA without CLI-installing full blocks into the phone stage
# unless you explicitly ask to install.
