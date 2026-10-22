// ============================================================
// 多语言自检：四种语言（ru / en / zh / fa）的翻译条目必须一模一样多，
// 文案里的占位变量（如 {model}）也必须一致，否则报错退出（部署会被拦住）。
// 用法：npm run check:i18n
// 为什么需要：漏翻一条，页面上就会直接显示英文 key（如 hero_title_a），很难看。
// ============================================================
import { readFileSync } from 'node:fs';

const LANGS = ['ru', 'en', 'zh', 'fa'];

// 简单解析：逐行找 `key: '值',` 形式（翻译文件格式固定，够用且不依赖 TypeScript 编译）
function load(lang) {
  const text = readFileSync(`src/i18n/${lang}.ts`, 'utf8');
  const map = new Map();
  for (const line of text.split('\n')) {
    const m = line.match(/^\s*([a-z0-9_]+):\s*'((?:[^'\\]|\\.)*)'/i);
    if (m) map.set(m[1], m[2]);
  }
  return map;
}

const dicts = Object.fromEntries(LANGS.map((l) => [l, load(l)]));
const allKeys = new Set(LANGS.flatMap((l) => [...dicts[l].keys()]));
const problems = [];

for (const key of allKeys) {
  const missing = LANGS.filter((l) => !dicts[l].has(key));
  if (missing.length) {
    problems.push(`缺翻译  ${key}  → 缺少语言：${missing.join(', ')}`);
    continue;
  }
  const vars = (s) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(',');
  const ref = vars(dicts.en.get(key));
  for (const l of LANGS) {
    if (vars(dicts[l].get(key)) !== ref) {
      problems.push(`占位变量不一致  ${key}  (${l}: {${vars(dicts[l].get(key))}} vs en: {${ref}})`);
    }
  }
}

if (problems.length) {
  console.error(`✗ 多语言自检发现 ${problems.length} 个问题：\n`);
  for (const p of problems) console.error('  ' + p);
  process.exit(1);
} else {
  console.log(`✓ 多语言自检通过：${LANGS.length} 种语言各 ${allKeys.size} 条，key 与占位变量完全一致。`);
}
