# 项目说明（engine-site）

> 说明：本文件同时是 `CLAUDE.md`（根目录的 `CLAUDE.md` 是指向本文件的软链接）。

## ✅ 上线红线已解除（2026-08-08）——但硬规则永久有效

2026-08-08 客户提供了真实内容（公司名 UAV Drone Engine、简介、联系方式、报价单），占位内容已全部替换或按客户要求删除板块，`npm run check:placeholders` 通过，**网站已部署上线**。

**永久硬规则**（后续补内容时同样适用）：
- **绝不编造**任何看起来像真的的信息（成立年份、产能、认证、客户案例、地址）。只写客户明确提供的。
- **价格绝不上网站**（客户要求）：询价引导到 WhatsApp 私聊。报价单 xlsx 已加入 `.gitignore`（含价格，绝不进公开仓库）。
- 每次部署前 CI 会自动跑 `npm run check:placeholders`（`.github/workflows/deploy.yml`），有「待填」即拒绝部署。

## ▶ 当前状态与下一步（2026-10-23 更新）

- **2026-10-23：改版已上线**（commit 21721c7：全站视觉升级 + 公司简介改为十年无人机发动机 + 新增销售 Adalind + 222CC 最大起飞重量 110 kg）；同日追加：主号标注联系人 Allen（见下）。
- **以后每次上线的步骤**：
  1. `npm run deploy:check`（占位自检 + 多语言自检 + 构建，必须全绿）
  2. `git add -A` → `git commit`（提交说明用中文）→ `git push origin main`
  3. GitHub Actions 自动构建发布（约 1–2 分钟）：`gh run list --limit 3` 看状态，或到仓库 Actions 页确认绿色
  4. 打开 https://uavdroneengine.com/ru/ 、/en/ 、/zh/ 、/fa/ 抽查；在 WhatsApp/Telegram 里发一个产品链接，确认分享卡片显示发动机大图
- **推送权限**：这台 Windows 电脑上 git 借用 GitHub CLI（`gh`）的登录令牌推送，账号是 **fx223a**（网站仓库所有者）。2026-10-23 已给令牌补上 `workflow` 权限，可以推送对 `.github/workflows/` 的修改（缺这项权限时 GitHub 会拒绝任何改动工作流文件的推送）。注意：用户浏览器里常登录的是另一个账号 **BowenZg**（对仓库只有只读权限）。以后若要重新授权（`gh auth refresh -h github.com -s …` 设备码流程），先让用户在浏览器里切到 fx223a，否则会报 “received credentials for BowenZg”、授权不生效。
- **这台电脑的 git 没配置提交者姓名/邮箱**（`git config user.name` 为空）：提交时用 `git -c user.name=… -c user.email=… commit`，填与历史提交相同的身份（`git log -1 --format='%an <%ae>'`）；或经用户同意后用 `git config --global` 配好。
- 本地预览：`npm run dev` → http://localhost:4321
- `package.json` 里的 `allowScripts` 字段是本次改版**之前**就存在的改动（npm 11 安装脚本白名单，列的是 esbuild；升级到 Vite 8 后依赖树里已没有 esbuild，此项目前不起作用，留着无害）
- AI 图片处理用到的 Python 虚拟环境和模型（约 1GB）放在会话临时目录，**不在项目里**；以后要重跑 `scripts/cutout_products.py`，按脚本开头的说明重新安装（模型首次运行自动下载）

### 2026-10-23 用户追加的内容修改（已完成）
- **公司简介改为“在中国从事无人机发动机制造十年”**（原为“十年摩托车发动机 + 2024 年起供无人机”）。与新说法矛盾的“2024 年起才做无人机”已全部删除：首页“关于我们”的 2024 数字卡片换成“12 个月整机质保”，时间线改成三条要点（无人机发动机 / 研发与制造 / 服务）。四种语言同步修改。
- **YT-222CC 补上最大起飞重量 110 kg**（用户提供；此前 PDF 资料里缺这一项）。已写入 `src/data/products.json`，首页对比图、产品对比表、222 详情页介绍和参数表自动更新；现在 7 款型号的最大起飞重量都有数据（60/80/110/150/150/220/270 kg）。
- **新增销售人员**：Adalind，WhatsApp +86 177 0514 3104，邮箱 Chris.uavengine@gmail.com（用户原样提供）。数据在 `src/config/site.ts` 的 `SALES` 数组；显示在询价页（独立卡片 + 二维码）、全站页脚、详情页打印参数单、结构化数据（JSON-LD contactPoint）。以后加销售人员只需往数组里加一项。
- **主号标注联系人 Allen**（用户的外贸名；用户确认主号 WhatsApp/Telegram +86 157 0518 6291 和邮箱 fashe250598617@163.com 就是他本人在用）。数据在 `src/config/site.ts` 的 `CONTACT.person`。询价页首张卡片（原“WhatsApp”主卡片）改成 Allen 的名片式卡片（保留主入口绿色强调，头像用 WhatsApp 绿以区分 Adalind 的红色头像——两人首字母都是 A），职位与 Adalind 相同（`sales_role`，中文“销售”），按钮“联系 Allen”；全站页脚、打印参数单、结构化数据同步标注；Telegram 卡片说明改为“与 Allen 的 WhatsApp 同一号码”。**刻意没放进 `SALES`**：同一号码再单独做一张卡片，页面上会重复出现。原主按钮文案 `inquiry_whatsapp_cta` 已无用处，四种语言一并删除。

### 当前全部真实信息（只能写这些，其它一律不写）
- 公司：UAV Drone Engine；在中国从事无人机发动机制造十年，有多年发动机研发与制造经验；累计生产发动机超过 60 000 台
- 产品：7 款二冲程发动机 YT-120CC / 170CC / 222CC / 350CC / T350CC（水冷）/ 550CC / 730CC，参数见 `src/data/products.json`
- 服务：整机质保 12 个月、易损件 3 个月；常规型号现货、定制 7–15 个工作日；全程技术支持（安装调试、故障排查、维护培训）；可定制输出轴、安装法兰，推式/拉式安装
- 联系：公司 WhatsApp/Telegram +86 157 0518 6291（WhatsApp 短链 wa.me/message/6XD3Z2WOCRP4L1），邮箱 fashe250598617@163.com——主号联系人 Allen（用户的外贸名）；销售 Adalind（见上）
- 价格：不上网站，私聊报价

## 🎨 2026-10-22 全站视觉升级（深色高级版）——2026-10-23 提交上线

用户反馈旧版“太简单、不专业”，参考竞品 fqengine.com（深色科技风）做了整站重设计。**刻意不用竞品的青蓝色**（两家卖同一套型号、面向同一批客户，撞色会被当成同一家/抄袭），沿用本站原有品牌红，升级为「黑 · 银 · 赛车红」。

**设计系统**（全部在 `src/styles/global.css` 顶部 `:root` 变量里）：
- 换品牌色只改「品牌色」那一组变量（`--accent*`、`--grad-*`）；图表色 `--chart-1/2` 已用 dataviz 校验脚本验证过深色背景对比度
- 字体**全部自托管**（npm 包 `@fontsource-variable/*`，不连谷歌，俄/伊访问稳）：Manrope（标题+正文，含西里尔）、JetBrains Mono（参数数字/工程风小标签）、Vazirmatn（波斯语专用）
- 带翻译文字的“工程风小标签”用 `var(--font-label)`：波斯语自动换成 Vazirmatn（等宽字体没有波斯字母，硬用会把连写字母拆开）；中文自动回落雅黑/苹方（否则会变宋体）
- 波斯语字间距必须为 0（`--tracking-*` 在 `:lang(fa)` 下已归零）

**页面与组件**：
- `src/components/`：`Header`（吸顶毛玻璃、产品下拉菜单带缩略图、语言下拉、手机全屏菜单——下拉和手机菜单都用原生 `<details>`，不开 JS 也能用）、`Footer`、`Logo`（**临时品牌标识**，客户给正式 Logo 后替换此组件 + `public/favicon.svg`）、`ProductCard`、`SectionHead`、`CtaBand`（含 WhatsApp 二维码）、`Ticker`（滚动卖点条）、`QrCode`（构建时生成 SVG）、`BrandIcon`（WhatsApp/Telegram 图标）
- 首页：仪表盘式展台（转速表圆环高亮该型号**真实**转速范围、型号切换、参数数字滚动）→ 卖点条 → 7 张产品卡 → 全系性能对比图（静推力/功率/起飞重量可切换，附表格视图）→ 优势 → 关于我们（大数字+时间线）→ 服务 → 下单流程 → FAQ → 询价横幅
- 产品页：筛选（缸数/冷却）+ 排序 + 全系参数对比表；详情页：画廊（可放大）、性能可视化（转速范围、海拔推力保持率、化油器 vs 电喷油耗、全系功率位置——**百分比全部由两项真实参数计算**）、参数分组、等轴测尺寸图、相关型号、打印参数单
- 询价页：WhatsApp/Telegram/邮箱卡片（电脑端带二维码）+ 消息生成器（实时预览，可发 WhatsApp / 邮件 / 复制）
- `src/lib/products.ts`：参数解析（功率/推力/尺寸等转数字）、参数分组；`src/lib/image-size.ts`：构建时读图片宽高 + 响应式 srcset
- SEO：每页 OG 分享图（`public/og/`，WhatsApp/Telegram 里发链接显示大图+参数）、JSON-LD（Organization / WebSite / Product / BreadcrumbList / FAQPage / ItemList）

**图片流水线**（脚本都在 `scripts/`）：
- `cutout_products.py`：AI 超分辨率（Real-ESRGAN，BSD-3）放大 2 倍 → AI 抠图（BiRefNet，MIT）去白底 → 输出 `public/images/products/cutout/<名>.webp`（约 1000px）和 `<名>-sm.webp`（520px）。需要 Python + `rembg[cpu]==2.0.85`（见脚本开头说明）；客户给高清原图后同名覆盖 JPG 再跑一次
- `make-icons.mjs`（`npm run images:icons`）：由 `public/favicon.svg` 生成 favicon.ico / apple-touch-icon / icon-192/512
- `make-og.mjs`（`npm run images:og`）：生成分享图（字体用 `scripts/og-fonts/` 里的 Manrope 静态版，OFL）
- **改了产品数据或图片后**：先跑 cutout（如需）→ 再跑 `npm run images:og`

**新增检查**：`npm run check:i18n`（四种语言条目与 `{占位变量}` 必须完全一致，已加入 CI）；`npm run deploy:check` = 占位自检 + 多语言自检 + 构建。

**Astro 7 注意事项**（依赖已升到 astro 7.3.8，修复了旧版的安全漏洞）：
- `compressHTML` 默认 `'jsx'`：**跨行的文字和标签之间不会自动加空格**，需要空格时写在同一行或用 `{' '}`
- 新的 Rust 编译器对 HTML 嵌套更严格（`<p>` 里不能放 `<div>`、标签必须闭合）

**验证结果**：构建 41 页零错误；构建产物体检（未翻译 key / 重复 id / 缺 alt / 站内死链）全部为 0；axe-core 无障碍检测（WCAG 2 AA + 最佳实践）各语言抽查页面 0 问题；手机 390px 宽度、波斯语 RTL 逐页检查过。

## 📌 历史进度（2026-08-08）

按 8 步计划：

1. ✅ 项目初始化（Astro 骨架、根路径跳转默认语言）
2. ✅ 多语言框架（ru/en/zh/fa 四语，fa 为 RTL）
3. ✅ 全局布局与样式（2026-10-22 已整体重设计，见上节）
4. ✅ 产品数据 + 列表页（`src/data/products.json`、`src/pages/[lang]/products/index.astro`）
5. ✅ 产品详情页（`src/pages/[lang]/products/[id].astro`）
6. ✅ 询价页（WhatsApp 优先，消息生成器，无后端）
7. 🔶 内容填充——术语校对已完成；工厂/资质/应用/案例四板块**等客户资料**
8. ✅ 部署上线（GitHub Pages，域名 uavdroneengine.com）

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
- **首页板块**：关于我们（当时的简介：十年摩托车发动机、2024 起供无人机、累计 6 万台+；**2026-10-23 已按用户要求改为“十年无人机发动机”**，见顶部“当前状态”）+ 新增「服务与保障」（质保/交付/技术支持/定制，来自报价单，价格已剔除）；工厂产能/质量资质/应用场景/客户案例四个板块**按客户要求暂删**，资料齐了加回（i18n 标题 key 都保留着）
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

- **原图位置**：`public/images/products/`，命名 `型号id-序号.jpg`（如 `yt-550-2.jpg`），每个型号 3 张（不同角度），**主图用 `-2`**。
- **来源与分辨率**：从根目录 `参数型号.pdf` 每页里**裁剪**出来的（约 300–500px，PDF 里就只有这么大）。
- **网站实际显示的是处理后的版本**：`public/images/products/cutout/`（AI 超分辨率 2 倍 + AI 抠图去白底的透明 WebP，大图约 1000px、`-sm` 小图 520px），由 `scripts/cutout_products.py` 生成。
- **将来替换高清图**：拿到原始高清照片后，用**同名文件**覆盖 `public/images/products/` 下的 JPG，再运行 `scripts/cutout_products.py`（原图够清晰时加 `--no-upscale`）和 `npm run images:og`；`products.json` 和页面代码都**不用改**。

## 3. 多语言（i18n）

- **已启用**：俄语 `ru`（默认）、英语 `en`、中文 `zh`、波斯语 `fa`（RTL，从右到左）。
- **新增文案时**：四个语言文件（`src/i18n/ru.ts`、`en.ts`、`zh.ts`、`fa.ts`）必须**同时**加同一个 key，`npm run check:i18n` 会检查；文案里的 `{model}` 这类占位变量要原样保留。
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

## 5. 进度

见本文件顶部「🎨 2026-10-22 全站视觉升级」和「📌 历史进度」两节（此处旧的 8 步清单已过时，删除以免混淆）。

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
