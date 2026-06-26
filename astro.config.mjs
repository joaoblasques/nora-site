import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://nora-bennett.com',
  vite: { plugins: [tailwind()] },
});
