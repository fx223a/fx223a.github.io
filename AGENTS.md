# 项目说明（engine-site）

> 说明：本文件同时是 `CLAUDE.md`（根目录的 `CLAUDE.md` 是指向本文件的软链接）。

## ✅ 上线红线已解除（2026-08-08）——但硬规则永久有效

2026-08-08 客户提供了真实内容（公司名 UAV Drone Engine、简介、联系方式、报价单），占位内容已全部替换或按客户要求删除板块，`npm run check:placeholders` 通过，**网站已部署上线**。

**永久硬规则**（后续补内容时同样适用）：
- **绝不编造**任何看起来像真的的信息（成立年份、产能、认证、客户案例、地址）。只写客户明确提供的。
- **价格绝不上网站**（客户要求）：询价引导到 WhatsApp 私聊。报价单 xlsx 已加入 `.gitignore`（含价格，绝不进公开仓库）。
- 每次部署前 CI 会自动跑 `npm run check:placeholders`（`.github/workflows/deploy.yml`），有「待填」即拒绝部署。

## 📌 当前进度与下次开工（2026-08-08 更新）

按 8 步计划：

1. ✅ 项目初始化（Astro 骨架、根路径跳转默认语言）
2. ✅ 多语言框架（ru/en/zh 启用，fa 预留，RTL 判断）
3. ✅ 全局布局与样式（BaseLayout、语言切换器、global.css）
4. ✅ 产品数据 + 列表页（`src/data/products.json`、`src/pages/[lang]/products/index.astro`）
5. ✅ 产品详情页（`src/pages/[lang]/products/[id].astro`，多角度图 + 全参数表）
6. ✅ 询价表单页（真实化改造完成：POST 提交、三态 UI、蜜罐防垃圾、无 JS 成功页；**接口地址待填** `src/config/site.ts`）
7. 🔶 内容填充 + 翻译校对——**术语校对已完成**（四语 20 条术语修正 + 俄语单位本地化 л.с./см³/об/мин）；**内容填充等客户资料**
8. ⛔ 部署上线——被上线红线拦住（占位未填完禁止部署）；构建 34 页无错；SEO 架子已搭好（域名填入 `astro.config.mjs` 的 `site` 后 canonical/hreflang/OG 自动激活）

### 2026-08-08 已完成的技术工作

- **git 已初始化**（此前无版本控制），基线提交 + 本轮改动提交
- **询价表单真实化**：修掉「无 action 时 JS 失效会 GET 泄露客户资料到地址栏」的隐私 bug；三态 UI（提交中/成功/失败）+ `role="status"`/`role="alert"` + 焦点管理；蜜罐 + 时间戳防垃圾；autocomplete；`/[lang]/inquiry/success/` 无 JS 成功页；「演示占位」文案已全部移除
- **SEO**：meta description、favicon link、theme-color 即时生效；canonical/hreflang(含 x-default)/Open Graph 已写好、依赖 `site` 配置（域名定了自动激活）
- **四语术语校对**：Bore × stroke、Engine cycle、CDI with automatic spark advance、静推力统一、燃油/机油混合比、俄语补 опережение/зажигание、波斯语 جرقه‌زنی 词族统一等 20 条
- **俄语单位本地化**：`localizeSpecValue()`（`src/i18n/utils.ts`），俄语页面显示 л.с./кВт/см³/об/мин/кг/мм
- **补齐坑位**：A3 标语已渲染进页脚、B5 工作时间、E3 质检流程、G1/G2 客户案例整个 section（新 i18n key `home_cases_title` 四语齐）
- **a11y**：skip-link、主导航 aria-label + 当前页高亮、语言切换器 `<nav>` + aria-current + lang 属性
- **RTL**：三处方向箭头改 `.dir-arrow`（RTL 自动镜像）
- **其它**：404 页（三语并列+按来路排序）、robots.txt、`npm run check:placeholders` 防呆脚本、`prebuild` 清 .DS_Store、README 重写

### 已定的部署决策（2026-08-08 调研，含真实探针实测）

- **托管**：**GitHub Pages**（三国实测中与 Vercel 并列最优，且无商用限制）。**排除**：Cloudflare Pages/代理DNS/Turnstile（俄罗斯 16KB 节流+ECH 封锁，免费版无解）、Netlify（伊朗 DNS 投毒）、Vercel Hobby（禁商用）、Yandex Cloud 主站（乌克兰制裁封锁）
- **询价接口**：独立 Vercel 小项目（约 80 行），Resend 发邮件 + 服务端调 Telegram Bot API（**`api.telegram.org` 在俄/伊被封，绝不能前端直调**）+ 可选企业微信机器人（用户在国内收不到 Telegram）
- **域名**：`.com`（Porkbun 注册，DNS 不接 Cloudflare）；**`.ru` 不买**——俄罗斯 2026-09-01 起强制 Gosuslugi 身份验证，外国主体无通道
- 上线后用 Globalping 实测真实域名在俄/乌/伊的可达性（含 >16KB 文件节流测试），再决定要不要加俄罗斯镜像（Timeweb）

### 2026-08-08 晚间：正式上线

客户提供真实内容并拍板，当天完成上线：

- **公司名**：UAV Drone Engine（四语统一拉丁写法）
- **型号改名**：ZT-T 系列 → 报价单的 **YT 系列**（YT-120CC/170CC/222CC/350CC/T350CC水冷/550CC/730CC），客户拍板。产品图同步改名 `yt-<型号>-<序号>.jpg`（将来替换高清图用新文件名同名覆盖）
- **转速修正**：按报价单（客户确认报价单为准）：120CC→1300–6500、170CC→1100–6500、222CC 补 1200–6500
- **询价流程改为 WhatsApp 优先**（客户要求，价格私聊谈）：询价页 = WhatsApp 主按钮（wa.me/message/6XD3Z2WOCRP4L1）+ Telegram + 邮箱直连；表单变成“消息生成器”——填完打开 WhatsApp 预填询价消息，**无任何后端**。之前设计的 Resend+Telegram 接口方案不再需要
- **联系方式**（`src/config/site.ts` 的 `CONTACT`）：WhatsApp/Telegram 同号 +86 157 0518 6291，邮箱 fashe250598617@163.com
- **首页板块**：关于我们（真实简介：十年摩托车发动机、2024 起供无人机、累计 6 万台+）+ 新增「服务与保障」（质保/交付/技术支持/定制，来自报价单，价格已剔除）；工厂产能/质量资质/应用场景/客户案例四个板块**按客户要求暂删**，资料齐了加回（i18n 标题 key 都保留着）
- **部署**：GitHub Pages（`fx223a/fx223a.github.io`），GitHub Actions 自动构建（push 到 main 即部署，CI 里先跑占位自检）
- **正式域名（2026-08-08 深夜启用）：https://uavdroneengine.com**（Porkbun 注册，DNS 4 条 A 记录指 GitHub Pages + www CNAME）。强制 HTTPS 已开启；www 与旧地址 fx223a.github.io 均 301 到主域名。换域名只需改 `astro.config.mjs` 的 site + robots.txt
- Placeholder 组件与无 JS 成功页已删除（不再需要）

**后续待办**：① 工厂/资质/应用/案例四板块等客户资料加回；② 自定义 `.com` 域名（换域名只改 `astro.config.mjs` 的 site + robots.txt 一行）；③ 波斯语上线（fa 翻译全部完成，加一行配置即生效，上线前先实测 RTL）；④ 高清产品图替换；⑤ 上线后用 Globalping 实测俄/乌/伊可达性。

## 1. 项目背景

- **产品**：发动机产品展示网站 + 询价（询盘）表单。
- **不接支付**：网站只做产品展示和收集询价，**不涉及任何在线支付**。客户看到产品后通过表单留下联系方式，线下跟进成交。
- **目标客户**：主要来自**俄罗斯、乌克兰、伊朗**。因此语言优先级为俄语 > 英语 > 波斯语。

## 2. 技术方案

- **框架**：[Astro](https://docs.astro.build)（静态站点，构建后是纯静态文件，便于部署、加载快）。
- **样式**：**纯 CSS**（不使用 Tailwind 等框架），全局样式在 `src/styles/global.css`。
- **数据**：产品等内容用 **JSON 数据文件**管理（如 `src/data/products.json`），不接数据库。
- **无后端**：目前是纯前端静态站；询价表单的提交后续用第三方表单服务或轻量接口处理（不引入自建后端数据库）。

## 产品图片

- **位置**：`public/images/products/`，命名 `型号id-序号.jpg`（如 `zt-t120-1.jpg`），每个型号 3 张（不同角度），**主图用 `-2`**。
- **来源与分辨率**：目前是从根目录 `参数型号.pdf` 每页里**裁剪**出来的（PDF 每页是整页一张大图，照片嵌在里面）。分辨率约 **300–500px**——**够卡片缩略图用，但详情页大图放大会偏软**。这是源文件决定的，无法凭空提升清晰度。
- **将来替换高清图**：若拿到原始高清照片，直接用**同名文件**覆盖 `public/images/products/` 下对应图片即可，`products.json` 和页面代码都**不用改**。

## 3. 多语言（i18n）

- **已启用**：俄语 `ru`（默认）、英语 `en`。
- **预留**：波斯语 `fa`——名称、RTL 方向、翻译文件位置都已备好，正式上线时只需把 `'fa'` 加入 `src/i18n/config.ts` 的 `locales` 数组即可自动生成整套波斯语页面。
- **RTL 布局**：波斯语是从右到左（RTL）。**布局从设计之初就必须支持 RTL**——写 CSS 时优先用逻辑属性（`margin-inline-start` 等）而不是写死 `left/right`，避免将来启用 `fa` 时布局错乱。
- **关键文件**：
  - `src/i18n/config.ts`——语言总开关（启用列表、默认语言、显示名、RTL 判断）。
  - `src/i18n/ru.ts`、`en.ts`、`fa.ts`——各语言文案。
  - `src/i18n/utils.ts`——翻译取值工具（`useTranslations`）。
  - `src/pages/[lang]/`——用 `[lang]` 动态段，一份页面自动生成各语言版本。

## 4. 协作方式

- **用户是编程新手**：请**全程用中文沟通**。
- **每完成一步就停下来**，用通俗的中文解释：我改了什么、为什么这么改、这一步的效果是什么，再继续下一步。
- 引入新概念时先解释清楚，不默认用户已懂专业术语。
- 改动尽量小步、可验证，方便用户跟上节奏。

## 5. 进度与后续计划（8 步）

> ⚠️ 以下 8 步是根据当前代码状态**重新整理**的，请用户核对是否与之前商定的一致。

1. ✅ 项目初始化：Astro 骨架、基础配置（`astro.config.mjs` 根路径跳转到默认语言 `/ru/`）。
2. ✅ 多语言框架：`ru`/`en` 双语，`fa` 预留，RTL 判断函数（`src/i18n/config.ts`）。
3. ✅ 全局布局与样式：`BaseLayout`、语言切换器、`global.css`（含 RTL 基础支持）。
4. ⏳ **产品数据 + 产品列表页**（进行中）：完善 `products.json` 数据结构，新建 `/[lang]/products/` 列表页（首页按钮已指向此页，页面尚未创建）。
5. ⬜ 产品详情页：`/[lang]/products/[id]/`，展示单个发动机的参数（数据源：根目录 `参数型号.pdf`）。
6. ⬜ 询价表单页：`/[lang]/inquiry/`，收集客户联系方式与意向型号（不接支付）。
7. ⬜ 内容填充与翻译校对：录入真实型号/参数，校对 ru/en 文案。
8. ⬜ 构建与部署上线：`astro build` 后部署到静态托管。

**当前所处：第 4 步（产品列表页）。**

## 6. 开发命令

启动开发服务器请用**后台模式**：

```
astro dev --background
```

管理后台服务器：`astro dev stop`、`astro dev status`、`astro dev logs`。

## 7. 参考文档

Astro 官方文档：https://docs.astro.build

相关任务开工前建议先查：

- [新增页面 / 动态路由 / 中间件](https://docs.astro.build/en/guides/routing/)
- [Astro 组件用法](https://docs.astro.build/en/basics/astro-components/)
- [使用 React/Vue/Svelte 等框架组件](https://docs.astro.build/en/guides/framework-components/)
- [内容管理](https://docs.astro.build/en/guides/content-collections/)
- [样式与 Tailwind](https://docs.astro.build/en/guides/styling/)
- [多语言支持](https://docs.astro.build/en/guides/internationalization/)
