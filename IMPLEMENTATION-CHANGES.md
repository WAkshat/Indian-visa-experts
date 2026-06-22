# Implementation Changes — India Visa Experts

This document records the functionality scan, what was implemented, the bug fixed,
the contact details applied, and what was deliberately **not** implemented (with reasons).

---

## 1. Contact details applied (as requested)

Centralized into a single source of truth — **`data/contact.ts`** — and propagated everywhere:

| Field | Value |
|---|---|
| Phone | `+91 98183 85663` (tel: `+919818385663`) |
| WhatsApp | `919818385663` (with pre-filled chat message) |
| Email | `consult.us@indiavisaexperts.com` |
| Address | Urban Square by Pioneer Urban, Golf Course Extension Road, Gurgaon |

> Note: corrected the typo "Golf coure extension road" → "Golf Course Extension Road", and added "Haryana" as the region in the JSON-LD address schema. No postal code was provided, so it was omitted rather than guessed.

**Files updated with the new details:** `data/contact.ts` (new), `lib/seo.ts` (schema: telephone, email, streetAddress, region, sameAs), `components/layout/Header.tsx`, `components/layout/Footer.tsx`, `app/contact/page.tsx`, `components/widgets/WhatsAppButton.tsx`, `components/sections/ServicePageTemplate.tsx`, `app/blog/[slug]/page.tsx`, `app/privacy-policy/page.tsx`, `app/disclaimer/page.tsx`, `README.md`.

Verified in the production build: the new phone/email/WhatsApp/address appear across all 25 rendered pages, and **zero** old placeholders (`919876543210`, `123 456 7890`, `info@…`, "New Delhi & Mumbai") remain.

---

## 2. Functionality scan — what was NOT working before

| # | Item | Previous state |
|---|---|---|
| 1 | Contact form | Showed a "thank you" but **sent nothing** anywhere |
| 2 | Footer newsletter | `onSubmit` was a no-op (`preventDefault`) |
| 3 | Blog newsletter | Plain `<form>` with no handler |
| 4 | Contact "Get Free PDF" form | No handler, no PDF |
| 5 | Blog search bar | Decorative input — no filtering |
| 6 | Blog category filter | Buttons with no click handler |
| 7 | Social media links | Pointed to platform home pages, not real profiles |
| 8 | Contact details | Placeholder phone/email/WhatsApp/address |
| 9 | Blog post tables | **Bug:** `<table><tr>` with no `<tbody>` → hydration error |

---

## 3. Changes MADE (implemented)

### Forms made functional (no backend required — via `mailto:`)
- **Contact form** (`components/forms/ContactForm.tsx`) — on submit, builds a fully-formatted email (name, email, nationality, phone, service, message) and opens the visitor's mail app pre-addressed to `consult.us@indiavisaexperts.com`. Success state updated to reflect this and to show the direct email as a fallback.
- **Reusable `NewsletterForm`** (`components/forms/NewsletterForm.tsx`, new) — client component with email validation, `mailto:` submission, and a success state. Styling and copy are passed per call site.
- **Footer newsletter** — now uses `NewsletterForm` (dark theme).
- **Blog newsletter** — now uses `NewsletterForm`.
- **Contact "Get Free PDF" lead magnet** — now uses `NewsletterForm`, requesting the checklist by email.

### Blog made interactive
- **`BlogExplorer`** (`components/blog/BlogExplorer.tsx`, new) — client component providing **live search** (title/excerpt/category) and a working **category filter**, with a results count, an empty state, and a "Clear filters" action. `app/blog/page.tsx` was refactored to a thin server wrapper (keeps metadata) that renders it.

### Bug fix
- **Blog post table hydration error** (`app/blog/[slug]/page.tsx`) — the markdown→table renderer emitted `<tr>` directly inside `<table>`. Split into `<thead>` + `<tbody>` (striping preserved). This removes the React hydration error shown in dev.

### Contact centralization
- **`data/contact.ts`** (new) — single source of truth + `whatsappLink()` and `mailtoLink()` helpers. All contact touchpoints now read from it, so future changes are one-file edits.

### Security (carried over from prior pass)
- JSON-LD output escapes `<` to prevent any `</script>` breakout.

---

## 4. Changes NOT made (and why)

| Item | Why not | What it needs |
|---|---|---|
| **Automated lead capture / real email delivery** | Requires an email provider + secret API key, which can't be set from the codebase alone. `mailto:` is the working no-secret bridge. | Swap the `mailto:` for a POST to **Web3Forms / Formspree / Resend**, or a Cloudflare email worker. |
| **Newsletter subscriber storage** | No mailing-list provider connected. | **Mailchimp / ConvertKit / Brevo** API + key. |
| ~~Social media profile URLs~~ | Done — LinkedIn is the only social, set to the real company page (`https://www.linkedin.com/company/india-visa-experts/about/`). Facebook, X, Instagram & YouTube were removed per request. | — |
| **Downloadable checklist PDF** | No PDF asset exists in the project. The lead form now requests it by email instead. | A real PDF in `public/` + link it from the success flow. |
| **YouTube consultation video** | Intentionally optional — the homepage section falls back to a static image. | Set `media.youtube.consultationVideoId` in `data/media.ts`. |
| **Postal code in address schema** | Not provided. | The 6-digit PIN code for the Gurgaon office. |

---

## 5. Verification

- `npx tsc --noEmit` → **clean (exit 0)**
- `npx next build` → **exit 0** (all routes prerendered)
- Built HTML: new contact details present on all pages; **0** old placeholders; JSON-LD has the new `telephone` + `streetAddress`; blog tables now wrapped in `<tbody>`.
