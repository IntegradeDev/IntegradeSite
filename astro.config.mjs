import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.integrade.com.br',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
