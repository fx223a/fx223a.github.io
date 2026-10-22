// ============================================================
// 构建前清理：删除 public/ 里 macOS 自动生成的 .DS_Store 文件（避免被发布到网站上）
// 原来用的是 `find public -name .DS_Store -delete`，只能在 Mac/Linux 上运行；
// 改成 Node 脚本后，Windows / Mac / Linux 都能用。
// ============================================================
import { readdirSync, rmSync, statSync } from 'node:fs';
import { join } from 'node:path';

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (name === '.DS_Store') rmSync(p);
    else if (statSync(p).isDirectory()) walk(p);
  }
}
walk('public');
