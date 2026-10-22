// ============================================================
// 翻译工具函数
// 这个文件提供几个帮手：
//   1) getLangFromUrl —— 从网址里认出当前是哪种语言
//   2) useTranslations —— 给一个语言，返回一个“翻译函数 t”，用来取文字
//      t('key', { model: 'YT-550CC' }) 还能把文案里的 {model} 替换成具体值
//   3) localizeSpecValue / localizeUnit —— 参数值、单位按语言习惯显示（俄语用 кг、см³ 等）
//   4) formatNumber / formatStat —— 数字按语言习惯显示（俄语小数用逗号、千位用空格）
// 一般情况下这个文件不用改。
// ============================================================
import ru from './ru';
import en from './en';
import zh from './zh';
import fa from './fa';
import { defaultLocale, locales, type Locale } from './config';

// 把所有语言的翻译放进一张总表，按语言代码查找。
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

// 同一个页面的另一种语言版本的地址：/en/products/yt-550/ + 'ru' → /ru/products/yt-550/
export function localizedPath(url: URL, targetLang: string): string {
  const segments = url.pathname.split('/').filter(Boolean);
  segments.shift(); // 去掉语言段
  return segments.length ? `/${targetLang}/${segments.join('/')}/` : `/${targetLang}/`;
}

// 传入语言代码，返回一个“翻译函数 t”。
// 用法：const t = useTranslations('en'); t('nav_home') → 'Home'
//       t('wa_prefill', { model: 'YT-550CC' }) → 文案里的 {model} 被替换
export function useTranslations(lang: string = defaultLocale) {
  const dict = dictionaries[lang] ?? dictionaries[defaultLocale];
  return function t(key: string, params?: Record<string, string | number>): string {
    // 取词顺序：当前语言 → 找不到就退回默认语言 → 再找不到就把 key 原样显示
    //（把 key 显示出来是故意的，方便你一眼发现哪条漏翻译了）
    const text = dict[key] ?? dictionaries[defaultLocale][key] ?? key;
    if (!params) return text;
    return text.replace(/\{(\w+)\}/g, (m, name) => (name in params ? String(params[name]) : m));
  };
}

// ============================================================
// 参数值的单位本地化
// products.json 里的数值型参数值用拉丁单位缩写写死（hp / kW / cc / rpm / kg / mm …）。
// 俄语买家习惯西里尔单位（л.с. / кВт / см³ / об/мин / кг / мм），小数点习惯用逗号，
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

// 把一条参数值按语言本地化单位。俄语替换（含小数逗号），其它语言原样返回。
// 用法：localizeSpecValue('11.22 hp / 8.25 kW', 'ru') → '11,22 л.с. / 8,25 кВт'
export function localizeSpecValue(value: string, lang: string): string {
  if (lang !== 'ru') return value;
  let out = value.replace(/(\d)\.(\d)/g, '$1,$2');
  for (const [pattern, replacement] of ruUnitMap) {
    out = out.replace(pattern, replacement);
  }
  return out;
}

// 单独的单位文字（用在“37 kW”这种数字和单位分开排版的地方）
// 用法：localizeUnit('kW', 'ru') → 'кВт'
export function localizeUnit(unit: string, lang: string): string {
  return localizeSpecValue(unit, lang);
}

// 技术参数数字的显示：俄语用小数逗号；波斯语参数保持拉丁数字（与参数表一致）
const numberLocale: Record<string, string> = { ru: 'ru-RU', en: 'en-US', zh: 'zh-CN', fa: 'en-US' };
export function numberLocaleOf(lang: string): string {
  return numberLocale[lang] ?? 'en-US';
}
export function formatNumber(n: number, lang: string, decimals?: number): string {
  const d = decimals ?? (Number.isInteger(n) ? 0 : String(n).split('.')[1]?.length ?? 0);
  return new Intl.NumberFormat(numberLocaleOf(lang), {
    minimumFractionDigits: d,
    maximumFractionDigits: d,
    useGrouping: false,
  }).format(n);
}

// 宣传数字（如 60 000+）：按各语言习惯分组；波斯语用波斯数字
const statLocale: Record<string, string> = { ru: 'ru-RU', en: 'en-US', zh: 'zh-CN', fa: 'fa-IR' };
export function formatStat(n: number, lang: string): string {
  return new Intl.NumberFormat(statLocale[lang] ?? 'en-US').format(n);
}

// Open Graph 需要的 locale 格式（ru_RU 这种）
export const ogLocale: Record<string, string> = { ru: 'ru_RU', en: 'en_US', zh: 'zh_CN', fa: 'fa_IR' };
