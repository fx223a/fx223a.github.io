// ============================================================
// 读取 public/ 下图片的真实宽高（构建时运行，页面上零开销）
// 用途：给 <img> 写上 width / height，浏览器在图片加载前就知道比例，页面不会“跳”。
// 只解析文件头（JPEG / PNG / WebP），不依赖任何图像库。
// ============================================================
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const cache = new Map<string, { width: number; height: number } | null>();

function parse(buf: Buffer): { width: number; height: number } | null {
  // PNG：IHDR 固定在第 16 字节
  if (buf.readUInt32BE(0) === 0x89504e47) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }
  // WebP：RIFF....WEBP + VP8X / VP8 / VP8L 三种格式
  if (buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') {
    const chunk = buf.toString('ascii', 12, 16);
    if (chunk === 'VP8X') {
      return { width: 1 + buf.readUIntLE(24, 3), height: 1 + buf.readUIntLE(27, 3) };
    }
    if (chunk === 'VP8 ') {
      return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
    }
    if (chunk === 'VP8L') {
      const b = buf.readUInt32LE(21);
      return { width: 1 + (b & 0x3fff), height: 1 + ((b >> 14) & 0x3fff) };
    }
  }
  // JPEG：逐个段查找 SOFn 标记
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let i = 2;
    while (i < buf.length) {
      if (buf[i] !== 0xff) return null;
      const marker = buf[i + 1];
      const len = buf.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
        return { width: buf.readUInt16BE(i + 7), height: buf.readUInt16BE(i + 5) };
      }
      i += 2 + len;
    }
  }
  return null;
}

/**
 * 响应式图片：同一张图的小图 + 大图，浏览器按屏幕大小和清晰度（视网膜屏）自动挑选
 * responsive('/images/products/yt-550-2.jpg') → { src, srcset, width, height }
 */
export function responsive(sm: string, lg: string) {
  const s = imageSize(sm);
  const l = imageSize(lg);
  return {
    src: sm,
    srcset: s && l ? `${sm} ${s.width}w, ${lg} ${l.width}w` : undefined,
    width: s?.width,
    height: s?.height,
  };
}

/** imageSize('/images/products/cutout/yt-550-2.webp') → { width: 944, height: 866 } */
export function imageSize(publicPath: string): { width: number; height: number } | null {
  if (!cache.has(publicPath)) {
    try {
      cache.set(publicPath, parse(readFileSync(join(process.cwd(), 'public', publicPath))));
    } catch {
      cache.set(publicPath, null);
    }
  }
  return cache.get(publicPath) ?? null;
}
