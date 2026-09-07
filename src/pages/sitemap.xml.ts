import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { primaryNav } from '../data/nav';

export const GET: APIRoute = () => {
  const entries = primaryNav
    .map((link) => `  <url>\n    <loc>${new URL(link.href, site.url).toString()}</loc>\n  </url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
