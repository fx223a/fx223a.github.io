// ============================================================
// 生成网站图标全套（由 public/favicon.svg 一键生成）
// 用法：npm run images:icons
// 输出（都在 public/ 下）：
//   favicon.ico          老浏览器标签图标（内含 16/32/48 三种尺寸）
//   apple-touch-icon.png iPhone/iPad“添加到主屏幕”图标（180×180）
//   icon-192.png / icon-512.png  安卓桌面图标、结构化数据里的公司 Logo
// 换 Logo 时：只改 public/favicon.svg，再跑一次本命令。
// ============================================================
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'node:fs';

const svg = readFileSync('public/favicon.svg');
const png = (size) => sharp(svg, { density: Math.ceil((72 * size) / 64) * 2 }).resize(size, size).png().toBuffer();

// 苹果图标：iOS 会自动切圆角，四角不能透明，所以铺一层深色底
const apple = await sharp({ create: { width: 180, height: 180, channels: 4, background: '#0b0d10' } })
  .composite([{ input: await png(180) }])
  .png()
  .toBuffer();
writeFileSync('public/apple-touch-icon.png', apple);
writeFileSync('public/icon-192.png', await png(192));
writeFileSync('public/icon-512.png', await png(512));

// ICO 文件 = 一个小文件头 + 若干 PNG（Windows Vista 起所有浏览器都支持 ICO 内嵌 PNG）
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(png));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // 保留
header.writeUInt16LE(1, 2); // 类型：图标
header.writeUInt16LE(sizes.length, 4);
const dir = Buffer.alloc(16 * sizes.length);
let offset = 6 + dir.length;
sizes.forEach((s, i) => {
  const e = i * 16;
  dir.writeUInt8(s, e); // 宽
  dir.writeUInt8(s, e + 1); // 高
  dir.writeUInt8(0, e + 2); // 调色板
  dir.writeUInt8(0, e + 3);
  dir.writeUInt16LE(1, e + 4); // 色彩平面
  dir.writeUInt16LE(32, e + 6); // 位深
  dir.writeUInt32LE(images[i].length, e + 8);
  dir.writeUInt32LE(offset, e + 12);
  offset += images[i].length;
});
writeFileSync('public/favicon.ico', Buffer.concat([header, dir, ...images]));

console.log('✓ 已生成 favicon.ico / apple-touch-icon.png / icon-192.png / icon-512.png');
