# Before launch — replace these placeholders

All placeholder content lives in one file: **`src/data/site.ts`**. Update the
values there and every page on the site updates automatically.

## Must replace before going live

- [ ] `contact.phoneDisplay` / `contact.phoneHref` — real phone number
- [ ] `contact.whatsappNumber` — real WhatsApp number, digits only, country
      code first, no `+` or spaces (e.g. `233241234567`)
- [ ] `contact.email` — real business email
- [ ] `contact.address.line1` — street address / building name in Kasoa
- [ ] `contact.officeHours` — confirm real office visiting hours
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
- **Money-back / refund guarantee**: not yet on the site. Before this can be
  published as a stated policy (e.g. on `our-promise.astro` or a service
  page), we need the exact terms in writing: what gets refunded if a service
  doesn't succeed — government/embassy fees, our service fee, or both — any
  percentage kept, the conditions that trigger it, and the timeline. This is
  a binding commercial commitment once it's on the site, so it should say
  exactly what the business will actually honor.
- **Homepage video** (`src/components/VideoSpotlight.astro`): currently
  shows a "Video coming soon" placeholder. Once you have a short intro
  video, upload it to YouTube (unlisted is fine) and pass its video ID —
  the part after `v=` in the URL — as the `youtubeId` prop where
  `<VideoSpotlight />` is used in `src/pages/index.astro`. It'll swap in a
  click-to-play thumbnail automatically.
- **Service page visuals** (`src/components/ServiceVisual.astro`): each
  service page has an icon-based visual band in place of real photography,
  since none was supplied. Swap in real photos of the office, team, or
  client documents (with permission) when available for a more personal
  feel — this component is the one place per service page to replace.
- **Testimonials** (`src/data/testimonials.ts`): live with 4 confirmed
  quotes (Nana M., Edmund Cudjo, Eyram Mensah, Anore Dankwa). To add more —
  Isaac Saki, Jessica, and anyone else — the same two conditions apply:
  (1) the quote reflects their own words, not just a paraphrase, and
  (2) they've confirmed they're OK with their name and quote being public.
  Add new entries to the `testimonials` array (`name`, `quote`, optional
  `service`) and they render automatically — no other file to touch.

## Not required before launch, but worth knowing

- `astro.config.mjs` → `site` is set to `https://www.austratravelandtours.com`
  for canonical URLs and sitemap generation — update it if the final domain
  differs.
- Social icons in the footer are plain letter badges (F / I / L), not brand
  logos — swap in real icons/SVGs when you have brand assets to work with.
