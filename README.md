# AUSTRA TRAVEL & TOURS — website

Marketing site for AUSTRA TRAVEL & TOURS, a Ghana-based international
mobility and travel company (Kasoa, Ghana).

Built with [Astro](https://astro.build) (static site, no server runtime
required) and [Tailwind CSS](https://tailwindcss.com).

## Getting started

```bash
npm install
npm run dev       # http://localhost:4321
```

```bash
npm run build     # outputs static site to dist/
npm run preview   # serve the production build locally
```

`npm run build` also runs `astro check` (TypeScript + template diagnostics)
before building, so a broken build fails fast.

## Project structure

```
src/
  data/            # single source of truth for all site copy
    site.ts        # contact details, tagline, mission/vision — see PLACEHOLDERS.md
    nav.ts         # header/footer navigation
    services.ts    # all 6 live services
    values.ts      # core values
    promise.ts     # "Our Promise" commitments
    verification.ts# the verification framework's steps + statuses
  components/      # reusable building blocks (Header, Footer, ServiceCard,
                    # VerificationBadge, VerificationFramework, CTASection, ...)
  layouts/
    BaseLayout.astro  # <head>, SEO meta, header/footer/WhatsApp float wrapper
  pages/           # one file per route — maps directly to the sitemap below
  styles/
    global.css     # Tailwind layers + shared component classes (.btn-primary, .card, ...)
public/            # static assets served as-is (favicon, robots.txt)
```

Editing copy almost never means touching a component — change the relevant
file in `src/data/` instead. This is what "structured so a CMS could be
added later" means in practice: the data layer is already separated from
the presentation layer.

## Sitemap

| Page | Route |
| --- | --- |
| Home | `/` |
| Travel & Tours | `/travel-tours/` |
| Study Abroad | `/study-abroad/` |
| Visa Support (incl. Passport & Travel Document Assistance) | `/visa-support/` |
| Conferences & Business Travel | `/conferences-business-travel/` |
| Work Abroad | `/work-abroad/` |
| Our Promise / Trust & Compliance | `/our-promise/` |
| About Us | `/about/` |
| Contact | `/contact/` |

Note: the brief listed "Passport & Travel Document Assistance" as its own
live service, but the sitemap only allocates it a place within Visa
Support — it's included there as a feature/section rather than a separate
top-level page. Say the word if you'd rather it be split out.

## The verification framework

The Employer & Partner Verification Framework is the site's differentiator
and is deliberately given real visual weight — it's a full section on both
the homepage and the Our Promise page (`src/components/VerificationFramework.astro`),
not a footnote. It renders from `src/data/verification.ts`:

- `verificationSteps` — the 4-step process shown as numbered cards
- `sampleListings` — illustrative example partners with a status badge
  (Verified / Under Review / Rejected). These are placeholder names — see
  `PLACEHOLDERS.md` for what to do once real partners are checked.

`VerificationBadge.astro` is the reusable status pill (green/gold/red) —
reuse it anywhere a real partner or listing needs a status shown.

## Adding a contact form later

The Contact page currently offers WhatsApp and `mailto:` only (no backend
exists yet, per the brief). To add a real form later without restructuring:

1. Add a `<form>` in `src/pages/contact.astro` inside the second card (where
   the "planned for a future update" note currently sits).
2. Point its `action` at whatever you choose then (a form endpoint service,
   or an Astro API route if you add server rendering — `output: 'server'`
   or a hybrid route in `astro.config.mjs`).

No other page or component depends on Contact's internals, so this is an
isolated change.

## Deployment

This is a static site (`npm run build` → `dist/`) and can be deployed to
any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.)
with zero configuration beyond pointing the build command at
`npm run build` and the output directory at `dist`.

## Before launch

See `PLACEHOLDERS.md` for the full checklist of placeholder content
(phone, WhatsApp number, email, address, hours, social links) that needs
real data before this goes live.
