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

// ============================================================
// 参数值的单位本地化
// products.json 里的数值型参数值用拉丁单位缩写写死（hp / kW / cc / rpm / kg / mm …）。
// 俄语买家习惯西里尔单位（л.с. / кВт / см³ / об/мин / кг / мм），
// 这里在“显示时”做替换——数据文件保持一份，不同语言各自显示各自的习惯写法。
// 英语/中文/波斯语的行业习惯就是拉丁缩写，原样返回。
// ============================================================
const ruUnitMap: [RegExp, string][] = [
  //（顺序有讲究：先长后短，避免 kW 里的 W 被单独的 W 规则先吃掉）
  [/\bhp\b/g, 'л.с.'],
  [/\bkW\b/g, 'кВт'],
  [/\bcc\b/g, 'см³'],
  [/\brpm\b/g, 'об/мин'],
  [/\bkg\b/g, 'кг'],
  [/\bmm\b/g, 'мм'],
  [/\bL\/h\b/g, 'л/ч'],
  [/\bV DC\b/g, 'В (пост. ток)'],
  [/\bV\b/g, 'В'],
  [/\bW\b/g, 'Вт'],
  [/\bg\b/g, 'г'],
];

// 把一条参数值按语言本地化单位。俄语替换，其它语言原样返回。
// 用法：localizeSpecValue('11.22 hp / 8.25 kW', 'ru') → '11.22 л.с. / 8.25 кВт'
export function localizeSpecValue(value: string, lang: string): string {
  if (lang !== 'ru') return value;
  let out = value;
  for (const [pattern, replacement] of ruUnitMap) {
    out = out.replace(pattern, replacement);
  }
  return out;
}
