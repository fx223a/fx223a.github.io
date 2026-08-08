# engine-site — 发动机产品展示 + 询价网站

二冲程航空发动机（120–730cc，无人机/轻型飞行器用）的多语言展示网站，含询价表单，不接支付。
目标市场：俄罗斯（默认语言）、乌克兰、伊朗。

## 技术栈

- [Astro](https://docs.astro.build) 静态站（构建产物为纯静态文件）
- 纯 CSS（无 Tailwind），全程使用逻辑属性以支持 RTL（波斯语预留）
- 产品数据：`src/data/products.json`（7 个型号），无数据库、无自建后端
- 多语言：ru（默认）/ en / zh 已启用，fa（波斯语，RTL）翻译已完成待启用

## 常用命令

| 命令 | 作用 |
|---|---|
| `npm run dev` | 启动开发服务器（`astro dev --background` 可后台运行） |
| `npm run build` | 生产构建到 `dist/` |
| `npm run preview` | 本地预览构建产物 |
| `npm run check:placeholders` | **部署前自检**：全站搜「待填」/Placeholder，非 0 即拦截 |
| `npm run deploy:check` | 自检 + 构建一条龙（上线前必须全绿） |

## 重要文件

- `CLAUDE.md`（→ `AGENTS.md`）— 项目规则与进度，含**上线红线**
- `CONTENT-TODO.md` — 所有待客户提供的真实内容清单
- `src/i18n/config.ts` — 语言总开关（启用 fa 只需把 `'fa'` 加入 `locales`）
- `src/config/site.ts` — 询价接口地址（部署接口后填入）

## ⛔ 上线红线

占位内容未填完禁止部署。`npm run check:placeholders` 必须通过才能上线，详见 `CLAUDE.md`。
