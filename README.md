# engine-site — UAV Drone Engine 官网

YT（远拓）无人机二冲程发动机的多语言展示网站（网站名 UAV Drone Engine），含询价（WhatsApp 优先），不接支付、不放价格。
公司品牌、月产量在 `src/config/site.ts` 的 `COMPANY`；文案不写死型号数量（其它排量可按需提供）。
目标市场：俄罗斯、乌克兰、伊朗（网站默认语言：英语，2026-10-23 起）。正式域名：https://uavdroneengine.com

## 技术栈

- [Astro 7](https://docs.astro.build) 静态站（构建产物为纯静态文件，部署在 GitHub Pages）
- 纯 CSS（无 Tailwind），深色设计系统见 `src/styles/global.css` 顶部变量；全程逻辑属性，支持波斯语 RTL
- 字体自托管（`@fontsource-variable/*`：Manrope / JetBrains Mono / Vazirmatn），图标 `@lucide/astro`（构建时内联，无运行时 JS）
- 产品数据：`src/data/products.json`（7 个型号）；解析工具 `src/lib/products.ts`
- 多语言：en（默认）/ ru / zh / fa（RTL）；默认语言在 `src/i18n/config.ts` 的 `defaultLocale`

## 常用命令

| 命令 | 作用 |
|---|---|
| `npm run dev` | 启动开发服务器（`npx astro dev --background` 可后台运行） |
| `npm run build` | 生产构建到 `dist/` |
| `npm run preview` | 本地预览构建产物 |
| `npm run check:placeholders` | 部署前自检：全站搜「待填」/Placeholder，非 0 即拦截 |
| `npm run check:i18n` | 多语言自检：四种语言条目和 `{占位变量}` 必须一致 |
| `npm run deploy:check` | 两项自检 + 构建一条龙（上线前必须全绿） |
| `npm run images:icons` | 由 `public/favicon.svg` 生成全套网站图标 |
| `npm run images:og` | 生成分享预览图（`public/og/`） |
| `python scripts/cutout_products.py` | 产品图 AI 超分辨率 + 抠图（需先装 `rembg[cpu]`，见脚本说明） |

## 重要文件

- `CLAUDE.md`（→ `AGENTS.md`）— 项目规则、设计系统与进度（**硬规则：绝不编造数据、价格不上网站**）
- `CONTENT-TODO.md` — 待客户提供的真实内容清单
- `src/i18n/config.ts` — 语言总开关；`src/i18n/*.ts` — 四种语言文案
- `src/config/site.ts` — 联系方式（WhatsApp / Telegram / 邮箱）
- `src/components/` — 页眉、页脚、Logo、产品卡片、询价横幅等组件

## 部署

push 到 `main` 分支即自动部署（`.github/workflows/deploy.yml`：先跑占位自检和多语言自检，再构建发布）。
