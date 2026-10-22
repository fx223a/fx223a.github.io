// ============================================================
// 生成“分享预览图”（Open Graph 图，1200×630）
// 用法：npm run images:og
// 用途：在 WhatsApp / Telegram / 微信里发网站链接时，聊天里显示的那张大图。
//   public/og/default.jpg   首页 / 询价页
//   public/og/products.jpg  产品列表页
//   public/og/yt-550.jpg …  每个型号一张：型号 + 三项关键参数 + 抠图发动机
// 数据直接读 src/data/products.json；产品图用抠图版（scripts/cutout_products.py 生成）。
// 字体：scripts/og-fonts/ 里的 Manrope（与网站标题字体一致，OFL 开源协议）。
// ============================================================
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

// 让图像库只用我们自带的字体（必须在加载 sharp 之前设置）
const fontDir = resolve('scripts/og-fonts');
const confDir = join(tmpdir(), 'engine-site-og-fonts');
mkdirSync(confDir, { recursive: true });
const conf = join(confDir, 'fonts.conf');
writeFileSync(
  conf,
  `<?xml version="1.0"?><!DOCTYPE fontconfig SYSTEM "fonts.dtd"><fontconfig><dir>${fontDir}</dir><cachedir>${join(confDir, 'cache')}</cachedir></fontconfig>`,
);
process.env.FONTCONFIG_FILE = conf;
const { default: sharp } = await import('sharp');

const products = JSON.parse(readFileSync('src/data/products.json', 'utf8'));
const W = 1200;
const H = 630;
mkdirSync('public/og', { recursive: true });

const spec = (p, key) => p.specs.find((s) => s.key === key)?.value ?? '';
const kw = (p) => (spec(p, 'power').match(/([\d.]+)\s*kW/) ?? [])[1];
const thrust = (p) => (spec(p, 'static_thrust_100m').match(/[\d.]+/) ?? [])[0];
const cc = (p) => (spec(p, 'displacement').match(/\d+/) ?? [])[0];
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const cutout = (p) => p.image.replace('/images/products/', 'public/images/products/cutout/').replace(/\.jpe?g$/i, '.webp');

// 背景：深色 + 右侧红色光晕 + 网格 + 转速表圆弧（与网站首页展台呼应）
function background() {
  const cx = 880;
  const cy = 330;
  const r = 250;
  const arc = (from, to) => {
    const a = (d) => (d * Math.PI) / 180;
    const [x1, y1] = [cx + r * Math.cos(a(from)), cy + r * Math.sin(a(from))];
    const [x2, y2] = [cx + r * Math.cos(a(to)), cy + r * Math.sin(a(to))];
    return `M${x1.toFixed(1)} ${y1.toFixed(1)} A${r} ${r} 0 ${to - from > 180 ? 1 : 0} 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`;
  };
  const ticks = Array.from({ length: 33 }, (_, i) => {
    const d = ((135 + (i / 32) * 270) * Math.PI) / 180;
    const len = i % 4 === 0 ? 16 : 8;
    const r1 = r - 16 - len;
    const r2 = r - 16;
    return `<line x1="${(cx + r1 * Math.cos(d)).toFixed(1)}" y1="${(cy + r1 * Math.sin(d)).toFixed(1)}" x2="${(cx + r2 * Math.cos(d)).toFixed(1)}" y2="${(cy + r2 * Math.sin(d)).toFixed(1)}" stroke="rgba(255,255,255,${i % 4 === 0 ? 0.5 : 0.2})" stroke-width="2"/>`;
  }).join('');
  return `
    <defs>
      <radialGradient id="glow" cx="0.74" cy="0.5" r="0.55">
        <stop offset="0" stop-color="#ff3c23" stop-opacity="0.34"/>
        <stop offset="1" stop-color="#ff3c23" stop-opacity="0"/>
      </radialGradient>
      <radialGradient id="disc" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stop-color="#ffffff" stop-opacity="0.08"/>
        <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="acc" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" stop-color="#e3171c"/><stop offset="0.6" stop-color="#ff4b3a"/><stop offset="1" stop-color="#ff9a4a"/>
      </linearGradient>
      <linearGradient id="steel" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#ffffff"/><stop offset="0.5" stop-color="#e6e8ec"/><stop offset="1" stop-color="#9da3ad"/>
      </linearGradient>
      <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
        <path d="M48 0H0V48" fill="none" stroke="rgba(255,255,255,0.045)" stroke-width="1"/>
      </pattern>
      <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#07080a" stop-opacity="1"/><stop offset="0.45" stop-color="#07080a" stop-opacity="0.2"/><stop offset="1" stop-color="#07080a" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="#07080a"/>
    <rect width="${W}" height="${H}" fill="url(#grid)"/>
    <rect width="${W}" height="${H}" fill="url(#fade)"/>
    <rect width="${W}" height="${H}" fill="url(#glow)"/>
    <circle cx="${cx}" cy="${cy}" r="${r - 30}" fill="url(#disc)"/>
    <path d="${arc(135, 405)}" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="3"/>
    <path d="${arc(170, 380)}" fill="none" stroke="url(#acc)" stroke-width="6" stroke-linecap="round"/>
    ${ticks}
    <rect x="0" y="${H - 6}" width="${W}" height="6" fill="url(#acc)"/>`;
}

// 左上角品牌（与网站 Logo 相同图形）
const brand = `
  <g transform="translate(64 58)">
    <rect x="0" y="0" width="52" height="52" rx="14" fill="#16191e" stroke="rgba(255,255,255,0.16)"/>
    <circle cx="26" cy="26" r="18" fill="none" stroke="url(#acc)" stroke-width="1.5" stroke-dasharray="2 3.4" opacity="0.6"/>
    <g fill="url(#acc)">
      <path transform="rotate(38 26 26)" d="M26 26C23.8 21.3 24 13.8 25.2 8.7c.4-1.4 2-1.5 2.3-.1 1.8 5.3 1.6 12.7-1.5 17.4Z"/>
      <path transform="rotate(218 26 26)" d="M26 26C23.8 21.3 24 13.8 25.2 8.7c.4-1.4 2-1.5 2.3-.1 1.8 5.3 1.6 12.7-1.5 17.4Z"/>
    </g>
    <circle cx="26" cy="26" r="4" fill="#f4f5f7"/>
    <text x="70" y="24" font-family="Manrope" font-weight="800" font-size="22" letter-spacing="1.5" fill="#f4f5f7">UAV DRONE</text>
    <text x="71" y="45" font-family="Manrope" font-weight="600" font-size="12" letter-spacing="6" fill="#8a909a">ENGINE</text>
  </g>`;

const footer = `<text x="64" y="${H - 44}" font-family="Manrope" font-weight="600" font-size="20" letter-spacing="1" fill="#8a909a">uavdroneengine.com</text>`;

function statBlock(x, value, unit, label) {
  return `
    <g transform="translate(${x} 0)">
      <text x="0" y="0" font-family="Manrope" font-weight="800" font-size="46" fill="#f4f5f7">${esc(value)}<tspan font-size="24" fill="#8a909a" dx="6">${esc(unit)}</tspan></text>
      <text x="0" y="32" font-family="Manrope" font-weight="600" font-size="15" letter-spacing="2" fill="#8a909a">${esc(label)}</text>
    </g>`;
}

async function render(file, textSvg, enginePath, engineBox = { left: 640, top: 70, size: 500 }) {
  const svg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">${background()}${brand}${textSvg}${footer}</svg>`);
  const layers = [];
  if (enginePath) {
    const engine = await sharp(enginePath).resize(engineBox.size, engineBox.size, { fit: 'inside' }).toBuffer();
    const meta = await sharp(engine).metadata();
    // 发动机脚下的阴影
    const shadow = Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${meta.width}" height="60"><defs><radialGradient id="s"><stop offset="0" stop-color="#000" stop-opacity="0.75"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient></defs><ellipse cx="${meta.width / 2}" cy="30" rx="${meta.width * 0.38}" ry="18" fill="url(#s)"/></svg>`,
    );
    const left = Math.round(engineBox.left + (engineBox.size - meta.width) / 2);
    const top = Math.round(engineBox.top + (engineBox.size - meta.height) / 2);
    layers.push({ input: shadow, left, top: top + meta.height - 36 });
    layers.push({ input: engine, left, top });
  }
  await sharp(svg).composite(layers).jpeg({ quality: 86, mozjpeg: true, chromaSubsampling: '4:4:4' }).toFile(file);
  console.log('✓', file);
}

// ---- 每个型号一张 ----
for (const p of products) {
  const cyl = p.cylinders === 4 ? 'FOUR-CYLINDER' : 'TWIN-CYLINDER';
  const cool = p.cooling === 'water' ? 'WATER-COOLED' : 'AIR-COOLED';
  const text = `
    <text x="64" y="232" font-family="Manrope" font-weight="600" font-size="17" letter-spacing="3.5" fill="#ff7a6b">${cyl} · ${cool} · TWO-STROKE</text>
    <text x="60" y="352" font-family="Manrope" font-weight="800" font-size="118" letter-spacing="-3" fill="url(#steel)">${esc(p.model)}</text>
    <g transform="translate(64 455)">
      ${statBlock(0, kw(p), 'kW', 'POWER')}
      ${statBlock(190, thrust(p), 'kg', 'STATIC THRUST')}
      ${statBlock(400, cc(p), 'cc', 'DISPLACEMENT')}
    </g>`;
  await render(`public/og/${p.id}.jpg`, text, cutout(p));
}

// ---- 首页 / 询价页 ----
const flagship = products.find((p) => p.id === 'yt-730') ?? products[products.length - 1];
await render(
  'public/og/default.jpg',
  `
    <text x="64" y="214" font-family="Manrope" font-weight="600" font-size="17" letter-spacing="3.5" fill="#ff7a6b">TWO-STROKE UAV ENGINES · 120–730 CC</text>
    <text x="60" y="306" font-family="Manrope" font-weight="800" font-size="68" letter-spacing="-2.5" fill="url(#steel)">Two-stroke engines</text>
    <text x="60" y="384" font-family="Manrope" font-weight="800" font-size="68" letter-spacing="-2.5" fill="url(#acc)">for UAVs</text>
    <g transform="translate(64 490)">
      ${statBlock(0, '7', '', 'MODELS')}
      ${statBlock(130, '60 000+', '', 'ENGINES PRODUCED')}
      ${statBlock(400, '12', 'mo', 'WARRANTY')}
    </g>`,
  cutout(flagship),
  { left: 690, top: 90, size: 470 },
);

// ---- 产品列表页：三台发动机错落排列 ----
const trio = ['yt-120', 'yt-350', 'yt-730'].map((id) => products.find((p) => p.id === id)).filter(Boolean);
const listSvg = `
    <text x="64" y="214" font-family="Manrope" font-weight="600" font-size="17" letter-spacing="3.5" fill="#ff7a6b">PRODUCT RANGE</text>
    <text x="60" y="312" font-family="Manrope" font-weight="800" font-size="76" letter-spacing="-2.5" fill="url(#steel)">7 engine models</text>
    <text x="60" y="396" font-family="Manrope" font-weight="800" font-size="76" letter-spacing="-2.5" fill="url(#acc)">120–730 cc</text>
    <g transform="translate(64 490)">
      ${statBlock(0, '8.25–47.3', 'kW', 'POWER')}
      ${statBlock(330, '26.5–75', 'kg', 'STATIC THRUST')}
    </g>`;
const base = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">${background()}${brand}${listSvg}${footer}</svg>`);
const placed = [
  { p: trio[0], left: 650, top: 250, size: 250 },
  { p: trio[1], left: 900, top: 270, size: 260 },
  { p: trio[2], left: 740, top: 60, size: 330 },
];
const layers = [];
for (const item of placed) {
  const buf = await sharp(cutout(item.p)).resize(item.size, item.size, { fit: 'inside' }).toBuffer();
  layers.push({ input: buf, left: item.left, top: item.top });
}
await sharp(base).composite(layers).jpeg({ quality: 86, mozjpeg: true, chromaSubsampling: '4:4:4' }).toFile('public/og/products.jpg');
console.log('✓ public/og/products.jpg');
