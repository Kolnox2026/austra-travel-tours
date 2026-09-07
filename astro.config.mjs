import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://austratravelandtours.com',
  integrations: [tailwind({ applyBaseStyles: false })],
});
