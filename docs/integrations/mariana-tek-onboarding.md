# Mariana Tek web integration — onboarding notes

**Source:** Email from Nick (Mariana Tek), forwarded via Todd — received Aug 2026.  
**Contact:** Nick (Mariana Tek onboarding / web integration)  
**Launch target:** Migration day **October 1, 2026** (maintenance morning, go-live evening)

---

## What this is

Mariana Tek provides the **booking, buy, and member account** experience. Your job as site developer is to:

1. Build marketing pages that **embed Mariana iframes** on Buy, Schedule, and My Account routes.
2. Style those embed pages so they match United Strength brand (fonts, colors, light background).
3. Publish **Privacy Policy** and **Terms of Service** pages (required for app store approval and SMS compliance).
4. Deliver **staging URLs** for Mariana QA before launch.
5. Be available on **migration day** for maintenance mode and evening cutover.

This aligns with the project default: marketing on the custom site; gym software via embed — no custom member auth or billing in v1.

---

## Deliverables & due dates

| Item | Due | Notes |
|------|-----|-------|
| CSS styling assets & font links | **Sep 3, 2026** | Up to 2 fonts + primary/secondary colors (Mariana pulls app colors too) |
| Privacy Policy & Terms of Service URLs | **Sep 3, 2026** | Live pages; must include Twilio/SMS compliance copy (below) |
| Staging links (Buy, Schedule, Account) | **Sep 17, 2026** | Direct links; password-protected OK; include location navigation preference |
| Email domain authentication | **Sep 17, 2026** | DNS records for Xplor Growth marketing email (after account is created) |
| Maintenance mode | **Oct 1, 2026 — 8:00 AM EST** | Put site in maintenance; coordinate copy with Todd |
| Launch / go-live | **Oct 1, 2026 — evening (TBD)** | Swap sandbox → production Mariana params; remove maintenance |

---

## Pages to build

Mariana web integration drops onto three routes (1 studio / single location):

| Route | Purpose |
|-------|---------|
| Buy | Memberships, packs, retail checkout |
| Schedule | Class schedule + booking |
| My Account | Profile, card on file, history |

Embed pages use **site header/footer only** — minimal chrome around the iframe.

### Location navigation

United Strength is **single location** (Columbus, OH). Nick recommends:

- **Disable location navigation** (no region/location dropdown on Buy/Schedule).
- Use location-specific pages only if multiple locations with different pricing/owners and no reciprocity.

**Action:** Confirm with Nick that location nav is disabled for United Strength.

---

## Sandbox parameters (testing)

Use these until production values are issued before launch:

| Parameter | Sandbox value |
|-----------|---------------|
| Subdomain (tenant) | `unitedstrength.sandbox` |
| Location ID | `48730` |
| Region ID | `48547` (optional) |

**Resources:**

- Developer tools (copy-paste embed code, sandbox pre-filled):  
  https://unitedstrength.sandbox.marianatools.com/developer
- Preview of finished iframe UI:  
  https://unitedstrength.sandbox.marianatools.com
- Platform integration docs (where to place embed on Next.js, etc.): Mariana web integration documentation (link in Nick’s email)

**Before launch:** Replace sandbox tenant/location/region IDs with production values from Mariana.

---

## CSS styling assets to send Nick (by Sep 3)

Mariana auto-applies **primary and secondary colors** from the customer-facing app config. Additionally send:

### Fonts (max 2)

Mariana needs CSS link(s) + font family names.

| Role | Font | CSS URL (current site) |
|------|------|------------------------|
| Primary | **Satoshi** | `https://api.fontshare.com/v2/css?f[]=satoshi@300,301,400,401,500,501,700,701,900,901&display=swap` |
| Secondary | **IBM Plex Mono** (captions) *or* **Instrument Serif** (editorial) | Plex: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap` · Serif: Google Fonts Instrument Serif if approved |

**Decision needed with Todd:** Mariana allows only **two** fonts. Marketing uses Satoshi + Instrument Serif + IBM Plex Mono — pick two for Mariana embeds (recommend **Satoshi + IBM Plex Mono** for functional UI parity, or **Satoshi + Instrument Serif** if embed should feel more editorial).

### Colors (confirm against brand kit)

From Culture Club tokens — verify with Todd before sending:

| Token | Hex | Usage |
|-------|-----|--------|
| Primary text / UI | `#181818` | Body, buttons |
| Background | `#FFFFFF` | **Required** — iframes must sit on white or light background |
| Secondary surface | `#F3EEE7` | Optional page bg around iframe |
| Accent | `#0A3C2E` | CTAs (membership green) |

**Constraint:** Mariana iframes **cannot** sit on dark backgrounds today. Buy/Schedule/Account page wrappers must use light/white canvas even if marketing pages use dark sections elsewhere.

---

## Privacy Policy — required Twilio verbiage

Include in Privacy Policy (exact or equivalent):

> No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.

---

## Terms of Service — required SMS program copy

Include in Terms (customize bracketed fields for United Strength):

### 1. Program Description

By opting in, you agree to receive recurring automated text messages from **United Strength Club** ("we," "us," "our") at the mobile number you provided. Messages may include **appointment reminders, class updates, account alerts, promotional offers, and customer support follow-ups**. Consent to receive these messages is not a condition of any purchase.

### 2. Message Frequency

You may receive up to **[X] messages per [week/month]**. Message frequency may vary depending on your activity and interactions with us.

### 3. Message and Data Rates

Message and data rates may apply. Charges are billed by and payable to your mobile service provider. Please contact your wireless carrier for details about your messaging plan.

### 4. How to Opt Out and Get Help

You can unsubscribe from the SMS service at any time by replying **STOP** to any message we send you. After you send STOP, you will receive a one-time confirmation message, and no further messages will be sent. If you want to rejoin, you can sign up again using the original opt-in method or reply **START**. For help or more information at any time, reply **HELP** to any of our messages. You can also contact our support team directly at **[SUPPORT EMAIL]** or **[SUPPORT PHONE]**.

### 5. Carrier Liability Disclaimer

Carriers are not liable for any delayed or undelivered messages.

**Link to Privacy Policy:** `<https://yoursite.com/privacy>` (use production URL)

**Draft support contacts (confirm with Todd):**

- Email: `info@unitedstrengthgym.com` (or dedicated support inbox)
- Phone: TBD

**Open items:** Message frequency cap `[X]`, support phone number.

---

## Staging links (by Sep 17)

Send Nick direct URLs to:

- Buy page
- Schedule page
- Account / login page

Can be password-protected or unlinked from main nav until launch. Mariana uses these for QA ~2 weeks before migration.

**Also specify:** Location navigation disabled (single studio).

---

## Email domain authentication (by Sep 17)

After **Xplor Growth** account is created (Mariana’s marketing email platform):

- Authenticate sending domain (e.g. `@unitedstrengthgym.com`) via DNS (SPF/DKIM/etc.).
- Must use **domain email**, not Gmail/Yahoo.
- DNS records provided when Xplor account is live.
- Optional: Mariana partner setup for ~$29 if client prefers not to DIY.

**Owner:** Likely you (web dev) or whoever manages DNS for unitedstrengthgym.com.

---

## Migration day — October 1, 2026

| Time | Task |
|------|------|
| **8:00 AM EST** | Enable **maintenance mode** on marketing site; agree maintenance copy with Todd |
| **Evening (TBD)** | Launch: swap Mariana params to production, disable maintenance, final QA |

**Post-launch recommendation from Mariana:**

- Homepage banner: prompt members to **reset passwords** and **update card on file**.
- Password reset: `/auth/password_reset_email/` (Mariana-provided path on their auth).
- “Update card” link → My Account page.

---

## Technical constraints & QA notes

- **Mobile styling:** Review embed pages at ~375px; iframe layout is Mariana-controlled but page wrapper is yours.
- **Light background only** under iframes (no dark embed chrome).
- **Pick-a-spot maps:** Add realistic sandbox data in Mariana admin to style/test map UI.
- Footer already references `/terms` and `/privacy` in `src/App.tsx` — pages must exist and be linked before Sep 3.

---

## Related project files

- Footer links: `src/App.tsx` → `FOOTER_LINKS` (`/terms`, `/privacy`)
- Fonts: `src/index.css` (Fontshare Satoshi, Google IBM Plex Mono)
- Nav guardrails: `.cursor/rules/todd-nav-preferences.mdc` — no Buy/Reserve in public nav

---

## Changelog

| Date | Note |
|------|------|
| 2026-08-25 | Initial capture from Nick onboarding email |
