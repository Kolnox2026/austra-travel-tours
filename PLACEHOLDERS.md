# Before launch — replace these placeholders

All placeholder content lives in one file: **`src/data/site.ts`**. Update the
values there and every page on the site updates automatically.

## Must replace before going live

- [ ] `contact.phoneDisplay` / `contact.phoneHref` — real phone number
- [ ] `contact.whatsappNumber` — real WhatsApp number, digits only, country
      code first, no `+` or spaces (e.g. `233241234567`)
- [ ] `contact.email` — real business email
- [ ] `contact.address.line1` — street address / building name in Kasoa
- [ ] `contact.hours` — confirm real office hours
- [ ] `social.*` — real Facebook / Instagram / LinkedIn / TikTok URLs (or
      remove the ones that don't apply in `src/components/Footer.astro`)

## Content decisions worth revisiting with the client

- The verification framework's "How a status looks, once published" section
  (`src/data/verification.ts` → `sampleListings`) currently shows
  **illustrative, generic examples** (e.g. "Sample Partner University") —
  intentionally not real partner names, since none were supplied. Replace
  these with real, named partners and their actual status as soon as the
  first verification checks are complete. This section is the site's core
  differentiator, so keeping it populated with real, current data matters
  more here than anywhere else on the site.
- No trust stats like "X years in business" or "X clients served" were
  added, since no real figures were supplied and invented numbers would be
  misleading marketing claims. Add them to `TrustBar.astro` / `about.astro`
  once you have real figures — the competitor benchmark (Secure Travel and
  Tours) uses exactly this kind of stat effectively.
- `contact.astro` currently offers WhatsApp + email only ("a booking/enquiry
  form is planned for a future update"). See "Adding a contact form later"
  in `README.md` for how to wire one up without restructuring the page.

## Not required before launch, but worth knowing

- `astro.config.mjs` → `site` is set to `https://www.austratravelandtours.com`
  for canonical URLs and sitemap generation — update it if the final domain
  differs.
- Social icons in the footer are plain letter badges (F / I / L), not brand
  logos — swap in real icons/SVGs when you have brand assets to work with.
