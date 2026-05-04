import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // あなたのGitHubのURL
  site: 'https://AliceIndex.github.io',

  // リポジトリ名が alice-portfolio の場合、末尾のスラッシュを忘れずに
  base: '/alice-portfolio',

  vite: {
    plugins: [tailwindcss()],
  },
});