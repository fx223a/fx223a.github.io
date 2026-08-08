// ============================================================
// 语言总配置文件
// 这是整个多语言系统的“开关面板”。
// 未来要新增或调整语言，基本只改这个文件。
// ============================================================

// 【已启用的语言】俄语(ru)、英语(en)、中文(zh)、波斯语(fa，2026-08-08 启用，面向伊朗客户，RTL 从右到左)。
export const locales = ['ru', 'en', 'zh', 'fa'] as const;

// 【默认语言】用户访问网站根地址（例如 example.com）时，会自动跳转到这个语言。
// 想改默认语言，改这里 + astro.config.mjs 里的跳转地址即可。
export const defaultLocale = 'ru';

// 语言代码的类型（给编辑器做自动补全用，新手可以忽略这一行）
export type Locale = (typeof locales)[number];

// 【语言显示名称】在页面右上角“语言切换器”里显示的名字，用各语言自己的写法。
// fa（波斯语）虽然还没启用，但名字先备好，将来启用时无需再加。
export const localeNames: Record<string, string> = {
  ru: 'Русский',   // 俄语
  en: 'English',   // 英语
  zh: '中文',      // 中文
  fa: 'فارسی',     // 波斯语（已预留，暂未启用）
};

// 【从右到左(RTL)的语言列表】波斯语是从右到左排版的。
// 页面会根据这个列表，自动给对应语言加上 dir="rtl"，实现整页左右镜像。
export const rtlLocales = ['fa'];

// 判断某个语言是否为 RTL（从右到左）
export function isRtl(locale: string): boolean {
  return rtlLocales.includes(locale);
}

// 返回某语言的排版方向：'rtl'（从右到左）或 'ltr'（从左到右）
export function dir(locale: string): 'rtl' | 'ltr' {
  return isRtl(locale) ? 'rtl' : 'ltr';
}
