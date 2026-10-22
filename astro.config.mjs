// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // 网站正式域名（2026-08-08 客户购买 uavdroneengine.com）。
  // canonical、hreflang、Open Graph、sitemap 都基于它生成。
  // 旧地址 fx223a.github.io 会由 GitHub 自动 301 跳转到这里。
  site: 'https://uavdroneengine.com',

  // 网站根地址（/）跳转到默认语言首页：由 src/pages/index.astro 负责（带分享卡片信息），
  // 跳到哪种语言跟随 src/i18n/config.ts 的 defaultLocale（2026-10-23 起为英语 en）。

  // 自动生成 sitemap-index.xml / sitemap-0.xml（构建时）
  // i18n：在站点地图里标明“同一页面的四种语言版本”（hreflang 互链），帮助 Google / Yandex 正确收录各语言页面
  // lastmod：每次构建的日期，告诉搜索引擎内容更新过
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en', // 与 src/i18n/config.ts 的 defaultLocale 保持一致
        locales: { ru: 'ru', en: 'en', zh: 'zh', fa: 'fa' },
      },
      lastmod: new Date(),
      // 根地址 / 只是跳转到默认语言首页，不放进站点地图
      filter: (page) => page !== 'https://uavdroneengine.com/',
    }),
  ],
});
