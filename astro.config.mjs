// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon({
      include: {
        devicon: ["*"],
        lucide: ["*"]
      }
    })
  ],
  devToolbar: {
    enabled: false
  },
  server: {
    port: 3000,
    host: true
  }
});
