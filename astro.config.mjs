// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 网站根地址（/）自动跳转到默认语言（俄语 ru）。
  // 如果将来想把默认语言改成英语，把下面的 '/ru/' 改成 '/en/' 即可
  //（同时记得改 src/i18n/config.ts 里的 defaultLocale）。
  redirects: {
    '/': '/ru/',
  },
});
