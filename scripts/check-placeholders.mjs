// ============================================================
// 部署前自检：全站搜「待填」/ Placeholder，必须为 0 才允许上线。
// 用法：npm run check:placeholders
// 对应 CLAUDE.md 的「上线红线」——之前这条规则只写在文档里靠人记，
// 现在做成脚本防呆：还有占位就报错退出（退出码 1），部署流程会被拦住。
// 说明：只扫会进入构建产物/页面的目录（src、public），
//       文档（CONTENT-TODO.md、AGENTS.md）里的“待填”字样不算。
// ============================================================
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOTS = ['src', 'public'];
const PATTERNS = [/待填/, /Placeholder/];
// Placeholder 组件本体与其引用在内容填完后会被整体移除；在那之前它们本来就该被算作“未完成”。

const hits = [];

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) {
      walk(p);
    } else if (/\.(astro|ts|js|mjs|json|css|txt|html|md|svg)$/.test(name)) {
      const lines = readFileSync(p, 'utf8').split('\n');
      lines.forEach((line, i) => {
        if (PATTERNS.some((re) => re.test(line))) {
          hits.push(`${p}:${i + 1}: ${line.trim().slice(0, 80)}`);
        }
      });
    }
  }
}

for (const root of ROOTS) walk(root);

if (hits.length > 0) {
  console.error(`✗ 发现 ${hits.length} 处未填写的占位内容，禁止部署：\n`);
  for (const h of hits) console.error('  ' + h);
  console.error('\n请对照 CONTENT-TODO.md 填入真实内容后再部署（详见 CLAUDE.md 上线红线）。');
  process.exit(1);
} else {
  console.log('✓ 占位自检通过：全站没有「待填」/ Placeholder，允许部署。');
}
