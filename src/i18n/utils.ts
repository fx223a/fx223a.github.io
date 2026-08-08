// ============================================================
// 翻译工具函数
// 这个文件提供两个帮手：
//   1) getLangFromUrl —— 从网址里认出当前是哪种语言
//   2) useTranslations —— 给一个语言，返回一个“翻译函数 t”，用来取文字
// 一般情况下这个文件不用改。
// ============================================================
import ru from './ru';
import en from './en';
import zh from './zh';
import fa from './fa';
import { defaultLocale, locales, type Locale } from './config';

// 把所有语言的翻译放进一张总表，按语言代码查找。
// fa 虽然还没启用，但也放进来，方便将来直接使用。
const dictionaries: Record<string, Record<string, string>> = { ru, en, zh, fa };

// 从网址里解析出当前语言。
// 例如访问 /en/products/ → 返回 'en'；网址里没有合法语言时 → 返回默认语言。
export function getLangFromUrl(url: URL): Locale {
  const [, maybeLang] = url.pathname.split('/');
  if (locales.includes(maybeLang as Locale)) {
    return maybeLang as Locale;
  }
  return defaultLocale;
}

// 传入语言代码，返回一个“翻译函数 t”。
// 用法：const t = useTranslations('en'); t('nav_home') → 'Home'
export function useTranslations(lang: string = defaultLocale) {
  const dict = dictionaries[lang] ?? dictionaries[defaultLocale];
  return function t(key: string): string {
    // 取词顺序：当前语言 → 找不到就退回默认语言 → 再找不到就把 key 原样显示
    //（把 key 显示出来是故意的，方便你一眼发现哪条漏翻译了）
    return dict[key] ?? dictionaries[defaultLocale][key] ?? key;
  };
}
