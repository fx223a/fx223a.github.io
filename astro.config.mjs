// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 网站正式域名（2026-08-08 客户购买 uavdroneengine.com）。
  // canonical、hreflang、Open Graph、sitemap 都基于它生成。
  // 旧地址 fx223a.github.io 会由 GitHub 自动 301 跳转到这里。
  site: 'https://uavdroneengine.com',

  // 网站根地址（/）自动跳转到默认语言（俄语 ru）。
  // 如果将来想把默认语言改成英语，把下面的 '/ru/' 改成 '/en/' 即可
  //（同时记得改 src/i18n/config.ts 里的 defaultLocale）。
  redirects: {
    '/': '/ru/',
  },

  // 自动生成 sitemap-index.xml / sitemap-0.xml（构建时）
  integrations: [sitemap()],
});
