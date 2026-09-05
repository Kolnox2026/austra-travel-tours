import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.austratravelandtours.com',
  integrations: [tailwind({ applyBaseStyles: false })],
});
