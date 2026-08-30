# Mariana Tek — developer checklist

Quick action list derived from [mariana-tek-onboarding.md](./mariana-tek-onboarding.md).

> **Todd V1 delivery:** Marketing UI review first. Do **not** hook up `/buy`, `/schedule`, or `/account` embeds until Todd approves the EF club site. Privacy/Terms lookbook shells ship in the beta for counsel review; SMS phone/caps still need Todd before Sep 3 handoff to Nick.

---

## By Sep 3, 2026

- [ ] **Send Nick font CSS links** (max 2) + font family names  
  - Primary: Satoshi — `https://api.fontshare.com/v2/css?f[]=satoshi@300,301,400,401,500,501,700,701,900,901&display=swap`  
  - Secondary: *pick one with Todd* — IBM Plex Mono or Instrument Serif
- [ ] **Confirm primary/secondary hex colors** with Todd; ensure Mariana app colors match
- [ ] **Publish `/privacy`** with Twilio mobile-data paragraph (see onboarding doc)
- [ ] **Publish `/terms`** with full SMS program sections 1–5 + link to privacy
- [ ] **Todd to fill:** support phone, SMS frequency cap, exact message types list
- [ ] **Reply to Nick** with privacy + terms URLs and styling assets

---

## By Sep 17, 2026

- [ ] **Build embed routes** with sandbox params:
  - Tenant: `unitedstrength.sandbox`
  - Location ID: `48730`
  - Region ID: `48547` (if needed)
- [ ] **White/light page background** on `/buy`, `/schedule`, `/account` (Mariana requirement)
- [ ] **Confirm location navigation disabled** with Nick (single Columbus studio)
- [ ] **Send staging URLs** to Nick (buy, schedule, account/login) — password OK
- [ ] **Email domain auth:** add DNS records when Xplor Growth account is live  
  - Domain: `@unitedstrengthgym.com` (not personal Gmail)

---

## Oct 1, 2026 — migration day

- [ ] **8:00 AM EST** — maintenance mode on site (copy agreed with Todd)
- [ ] **Evening** — replace sandbox Mariana IDs with production values
- [ ] **Evening** — disable maintenance; smoke-test buy, schedule, account on mobile
- [ ] **Post-launch** — optional homepage banner: password reset + update card on file

---

## Not your job (but coordinate)

| Item | Owner |
|------|--------|
| Mariana admin / sandbox data for maps & classes | Todd / studio ops |
| Xplor Growth account creation | Mariana / Todd |
| Apple/Google app submissions | Mariana (uses your privacy/terms URLs) |
| Twilio SMS approval | Later in onboarding; terms copy prepares for it |
| Production location/tenant IDs | Mariana (before launch) |

---

## Blockers to resolve with Todd

1. Which **second font** to register with Mariana (2-font limit).
2. **Support phone number** for SMS terms.
3. **SMS volume** — “up to X messages per week/month.”
4. **Maintenance page copy** for Oct 1 morning.
5. Who owns **DNS** for email authentication (you vs. their IT/host).
