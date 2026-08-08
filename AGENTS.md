# 项目说明（engine-site）

> 说明：本文件同时是 `CLAUDE.md`（根目录的 `CLAUDE.md` 是指向本文件的软链接）。

## ⛔ 上线红线：占位内容未填完，禁止部署

网站当前含有**未填写的占位内容**（公司名、联系方式、公司简介、工厂/产能、认证资质、客户案例等），页面上以**黄色「待填」框**标出，代码里 i18n 的 `site_name` 等也是 `【待填·公司名】`。

- 所有待填项清单见根目录 **`CONTENT-TODO.md`**。
- **上线前必须把 `CONTENT-TODO.md` 里的每一项都替换成客户提供的真实内容**，否则**不得执行第 8 步部署**。
- 硬规则：在客户提供真实内容前，**绝不编造**任何看起来像真的的信息（公司名、成立年份、产能、认证、客户案例、地址、电话）。占位必须一眼可辨（`<Placeholder>` 组件 / `【待填：…】`）。
- 部署前自检：全站搜索 `待填` / `Placeholder` 应为 0 结果，方可部署。

## 📌 当前进度与下次开工（2026-07-16 暂停）

按 8 步计划：

1. ✅ 项目初始化（Astro 骨架、根路径跳转默认语言）
2. ✅ 多语言框架（ru/en/zh 启用，fa 预留，RTL 判断）
3. ✅ 全局布局与样式（BaseLayout、语言切换器、global.css）
4. ✅ 产品数据 + 列表页（`src/data/products.json`、`src/pages/[lang]/products/index.astro`）
5. ✅ 产品详情页（`src/pages/[lang]/products/[id].astro`，多角度图 + 全参数表）
6. ✅ 询价表单页（`src/pages/[lang]/inquiry/index.astro`，型号下拉自动生成，占位提交，详情页可带型号跳入）
7. ⏳ **内容填充 + 翻译校对**——**等客户提供真实资料后再做**（客户正在准备 `CONTENT-TODO.md` 里的内容；翻译校对也一起等资料齐了做）
8. ⛔ 部署上线——**被上线红线拦住**（占位未填完禁止部署）；生产构建本身已通过（30 页无错）

**下次开工从这里继续**：客户提供资料后，① 对照 `CONTENT-TODO.md` 编号逐条替换占位；② 做第 7 步翻译校对（ru/en/zh 术语一致性）；③ 部署前自检"全站搜 `待填`/`Placeholder` = 0"，再做第 8 步部署。
首页主推型号当前默认 T120/T350/T730（`src/pages/[lang]/index.astro` 的 `featuredIds`），待客户确认（CONTENT-TODO I1）。

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
