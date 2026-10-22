// ============================================================
// 英语(en) 翻译文件
// 改文字时，只改每行冒号“:”右边引号里的内容，注释和 key 不要动。
// 注意：这份文件的 key（冒号左边）必须和 ru.ts 完全一致，只有右边的文字不同。
//      （npm run check:i18n 会自动检查四种语言的 key 是否一致）
// 文案里的 {model}、{n} 这类花括号是“占位变量”，程序会替换成具体值，翻译时原样保留。
// ★ 硬规则：只写客户提供过的真实信息（十年无人机发动机经验、6 万台、质保等），绝不编造。
// ============================================================
export default {
  // ===== 品牌 / 通用 =====
  site_name: 'UAV Drone Engine',                     // 公司/品牌名（客户 2026-08-08 确认，四语统一用拉丁写法）
  site_tagline: 'Two-stroke aircraft engines',       // 品牌标语（真实产品定位；可按 CONTENT-TODO A3 调整）

  // ===== 顶部导航栏 =====
  nav_main_label: 'Main navigation',                 // 主导航区的无障碍标签（页面上不可见，读屏软件用）
  nav_home: 'Home',                                  // 导航：首页
  nav_products: 'Products',                          // 导航：产品列表
  nav_inquiry: 'Request a quote',                    // 导航：询价（全站统一句首大写风格）
  nav_about: 'About',                                // 导航：关于我们（跳到首页“关于我们”板块）
  nav_service: 'Service',                            // 导航：服务（跳到首页“服务与保障”板块）
  nav_faq: 'FAQ',                                    // 导航：常见问题
  nav_menu: 'Menu',                                  // 手机端菜单按钮（读屏用）
  nav_products_toggle: 'Show engine models',         // 产品下拉菜单的展开按钮（读屏用）
  nav_all_engines: 'All engines',                    // 下拉菜单：全部发动机
  nav_all_engines_desc: 'Compare 7 models side by side', // 下拉菜单：全部发动机的说明
  nav_models_label: 'Engine models',                 // 手机菜单里的小标题

  // ===== 语言切换器 =====
  language_label: 'Language',                        // “语言”文字标签
  skip_to_content: 'Skip to main content',           // 无障碍跳转链接（键盘 Tab 第一个焦点）
  lang_suggest_text: 'This website is available in English.',          // 语言建议提示（用该语言自己的文字）
  lang_suggest_cta: 'Switch to English',
  lang_suggest_close: 'Close',

  // ===== 通用按钮 / 联系方式 =====
  cta_whatsapp: 'WhatsApp',
  cta_chat_whatsapp: 'Chat on WhatsApp',
  cta_telegram: 'Telegram',
  cta_email: 'Email',
  float_whatsapp_label: 'Chat with us on WhatsApp',  // 右下角悬浮按钮（读屏用）
  back_to_top: 'Back to top',

  // ===== 首页：顶部大区块(hero) =====
  hero_eyebrow: 'Two-stroke UAV engines · 120–730 cc',   // 大标题上方的小标签
  hero_title_a: 'Two-stroke engines',                    // 大标题第一行
  hero_title_b: 'for UAVs and light aircraft',           // 大标题第二行（红色渐变）
  home_hero_title: 'Two-stroke aircraft engines, 120cc–730cc', // 旧版大标题（保留作页面标题等用途）
  home_hero_subtitle: 'Twin- and four-cylinder, air- and water-cooled engines for UAVs and light aircraft — with matched propellers, static thrust and take-off-weight data.', // 首页副标题
  home_hero_cta: 'Browse engines',                   // 首页主按钮
  hero_stat_years: 'years of UAV engine manufacturing',  // 数字：10 年
  hero_stat_units: 'engines produced',               // 数字：60 000+
  hero_stat_models: 'UAV engine models',             // 数字：7 款
  hero_stat_warranty: 'months warranty',             // 数字：12 个月
  stage_label: 'Interactive engine showcase',        // 发动机展台（读屏用）
  stage_tabs_label: 'Choose a model',                // 型号切换按钮组（读屏用）
  stage_rpm_label: 'Speed range',                    // 转速表圆环说明
  stage_rpm_unit: '×1000 rpm',                       // 转速表刻度单位
  stage_view: 'View model',                          // 展台：查看该型号

  // 短标签（卡片、展台读数等空间小的地方用）
  short_power: 'Power',
  short_thrust: 'Static thrust',
  short_thrust_100: 'Thrust · 100 m',
  short_thrust_1800: 'Thrust · 1800 m',
  short_displacement: 'Displacement',
  short_weight: 'Weight',
  short_weight_main: 'Main unit weight',
  short_mtow: 'Max take-off weight',
  short_rpm: 'Speed range',

  // ===== 首页：滚动字幕条（全部为真实卖点）=====
  ticker_1: '120–730 cc lineup',
  ticker_2: 'Twin & four-cylinder',
  ticker_3: 'Air & water cooling',
  ticker_4: 'Carburetor or EFI',
  ticker_5: '60,000+ engines produced',
  ticker_6: '12-month warranty',
  ticker_7: 'Pusher & tractor mounting',
  ticker_8: 'Thrust data at 100 m & 1800 m',

  // ===== 首页：产品线 =====
  home_lineup_eyebrow: 'Engine lineup',
  home_lineup_title: 'Seven engines, 120 to 730 cc',
  home_lineup_desc: 'Twin- and four-cylinder two-stroke engines, air- or water-cooled. Full manufacturer specifications on every model page.',
  home_featured_title: 'Featured engines',           // 板块标题（旧版，保留）
  home_featured_subtitle: 'A selection from our lineup — full specifications on each model page.', // 板块副标题（旧版，保留）
  home_view_all: 'View all engines',                 // “查看全部型号”按钮

  // ===== 首页：性能对比图 =====
  chart_eyebrow: 'Performance at a glance',
  chart_title: 'Compare the whole lineup',
  chart_desc: 'Manufacturer data for all seven models. Choose a metric:',
  chart_metric_label: 'Metric',
  chart_metric_thrust: 'Static thrust',
  chart_metric_power: 'Power',
  chart_metric_mtow: 'Max take-off weight',
  chart_legend_100: 'At 100 m altitude',
  chart_legend_1800: 'At 1800 m altitude',
  chart_no_data: 'not specified',                    // 某型号缺这项数据时显示（目前 7 款都有数据；YT-222CC 的最大起飞重量 110 kg 已于 2026-10-23 补上）
  chart_table_caption: 'Static thrust, power and max take-off weight by model',
  chart_show_table: 'Show as table',

  // ===== 首页：为什么选择我们（真实产品优势）=====
  home_why_eyebrow: 'Why our engines',
  home_why_title: 'Why choose our engines',          // 板块标题
  home_why_desc: 'The data and options an integrator needs to choose an engine with confidence.',
  home_strength_range_title: 'Full power range',                                   // 优势1标题
  home_strength_range_text: 'A complete lineup from 120cc to 730cc, from light to heavy take-off weights.', // 优势1正文
  home_strength_config_title: 'Multiple configurations',                           // 优势2标题
  home_strength_config_text: 'Twin- and four-cylinder, air- or water-cooled — matched to your airframe.', // 优势2正文
  home_strength_fuel_title: 'Carburetor or EFI',                                   // 优势3标题
  home_strength_fuel_text: 'Carburetor and electronic fuel injection (EFI) versions available on most models.', // 优势3正文
  home_strength_altitude_title: 'Thrust data at two altitudes',                    // 优势4（数据：每款都有 100m/1800m 推力）
  home_strength_altitude_text: 'Static thrust is specified at 100 m and at 1800 m for every model — plan for high-altitude operation.',
  home_strength_mount_title: 'Pusher or tractor',                                  // 优势5（数据：每款都支持推式/拉式）
  home_strength_mount_text: 'Every engine supports both pusher and tractor installation.',
  home_strength_prop_title: 'Matched propellers',                                  // 优势6（数据：每款都有推荐螺旋桨）
  home_strength_prop_text: 'Recommended propeller sizes are listed for each model.',

  // ===== 首页：关于我们 =====
  home_about_title: 'About us',                      // 关于我们（小标签）
  home_about_heading: 'A decade of UAV engine manufacturing', // 关于我们大标题
  home_about_text: 'We have been manufacturing UAV engines in China for ten years, with extensive engine R&D and production experience. To date we have produced over 60,000 engines.', // 公司简介（客户 2026-08-08 提供；2026-10-23 按用户要求由“十年摩托车发动机”改为“十年无人机发动机”，删除“2024 年起供无人机”）
  about_stat_years: 'years of UAV engine R&D and production',
  about_stat_units: 'engines produced to date',
  about_stat_warranty: 'months warranty on complete engines',
  about_stat_models: 'UAV engine models',
  about_tl_1_title: 'UAV engines',
  about_tl_1_text: 'Two-stroke engines from 120 to 730 cc — twin- and four-cylinder, air- and water-cooled.',
  about_tl_2_title: 'R&D and manufacturing',
  about_tl_2_text: 'Ten years of UAV engine development and manufacturing in China.',
  about_tl_3_title: 'Service',
  about_tl_3_text: '12-month warranty, technical support and customization for every engine we supply.',
  home_factory_title: 'Manufacturing & capacity',   // 工厂与产能（板块暂未上线，等客户资料）
  home_cert_title: 'Quality & certifications',       // 质量与资质（板块暂未上线）
  home_applications_title: 'Applications',           // 应用场景（板块暂未上线）
  home_cases_title: 'Customers & references',        // 客户案例（板块暂未上线）

  // ===== 首页：服务与保障（真实内容，来自客户报价单，价格已剔除）=====
  home_service_eyebrow: 'Service',
  home_service_title: 'Service & support',
  home_service_desc: 'Warranty, delivery times and technical support for every engine we supply.',
  home_service_warranty_title: 'Warranty',
  home_service_warranty_text: '12-month warranty on complete engines; 3 months on wear parts (spark plugs, seals, etc.).',
  home_service_delivery_title: 'Delivery',
  home_service_delivery_text: 'Standard models in stock; custom configurations delivered in 7–15 business days.',
  home_service_support_title: 'Technical support',
  home_service_support_text: 'Full technical support: installation, commissioning, troubleshooting and maintenance training.',
  home_service_custom_title: 'Customization',
  home_service_custom_text: 'Custom output shaft adapters, mounting flanges and more; both pusher and tractor mounting supported.',

  // ===== 首页：下单流程 =====
  process_eyebrow: 'How to order',
  process_title: 'From inquiry to installation',
  process_1_title: 'Send your requirements',
  process_1_text: 'Tell us your airframe, target take-off weight and quantity via WhatsApp, Telegram or email.',
  process_2_title: 'Get a recommendation and quote',
  process_2_text: 'We suggest a suitable model and send you the price privately.',
  process_3_title: 'Confirm the configuration',
  process_3_text: 'Carburetor or EFI, pusher or tractor mounting, custom flanges and output shafts.',
  process_4_title: 'Delivery',
  process_4_text: 'Standard models ship from stock; custom configurations take 7–15 business days.',
  process_5_title: 'Ongoing support',
  process_5_text: 'Installation, commissioning, troubleshooting and maintenance training, plus a 12-month warranty.',

  // ===== 首页：常见问题（答案全部来自客户提供的信息和产品参数）=====
  faq_eyebrow: 'FAQ',
  faq_title: 'Frequently asked questions',
  faq_1_q: 'Why are there no prices on the website?',
  faq_1_a: 'We quote every inquiry individually. Message us on WhatsApp or Telegram with the model and quantity, and we will reply with a price.',
  faq_2_q: 'What warranty do you provide?',
  faq_2_a: '12 months on the complete engine and 3 months on wear parts such as spark plugs and seals.',
  faq_3_q: 'How long does delivery take?',
  faq_3_a: 'Standard models are in stock. Custom configurations are delivered in 7–15 business days.',
  faq_4_q: 'Can the engine be customized for my airframe?',
  faq_4_a: 'Yes — custom output shaft adapters, mounting flanges and more. Both pusher and tractor installation are supported.',
  faq_5_q: 'Carburetor or EFI — which versions are available?',
  faq_5_a: 'Most models are available in both carburetor and electronic fuel injection (EFI) versions. Fuel consumption for each version is listed on the model page.',
  faq_6_q: 'What fuel mixture do the engines use?',
  faq_6_a: 'All engines are two-stroke with mixture lubrication. The fuel/oil ratio depends on the model — from 20:1 to 50:1 — and is listed in each model’s specifications.',
  faq_7_q: 'How do I choose the right engine?',
  faq_7_a: 'Compare max take-off weight, static thrust at 100 m and 1800 m, and the recommended propellers on each model page — or tell us your airframe and target take-off weight and we will recommend a model.',
  faq_8_q: 'Do you provide technical support?',
  faq_8_a: 'Yes. We support installation and commissioning, help with troubleshooting and provide maintenance training.',

  // ===== 询价 CTA 横幅（首页 / 产品页 / 详情页共用）=====
  cta_eyebrow: 'Get a quote',
  cta_title: 'Tell us about your project',
  home_contact_title: 'Get a quote',                 // 联系/询价引导（旧版标题，保留）
  home_contact_text: 'Tell us your airframe and target take-off weight — we will recommend a model.', // 询价引导正文
  cta_note: 'Prices are discussed privately in chat.',
  cta_scan: 'Scan to chat on WhatsApp',

  // ===== 页脚 =====
  footer_about: 'Two-stroke aircraft engines from 120 to 730 cc for UAVs and light aircraft.',
  footer_engines: 'Engines',
  footer_company: 'Company',
  footer_contact_title: 'Contact',                   // 页脚联系区标题
  footer_rights: 'All rights reserved.',             // 页脚版权：保留所有权利

  // ===== 产品列表页 =====
  products_eyebrow: 'Product range',
  products_title: 'Our engines',                     // 产品列表页大标题
  products_intro: 'Two-stroke aircraft engines from 120cc to 730cc, air- and water-cooled.', // 产品列表页副标题
  products_stat_models: 'models',
  products_stat_cc: 'displacement',
  products_stat_power: 'power',
  products_stat_thrust: 'static thrust',
  filter_label: 'Filter engines',
  filter_all: 'All',
  filter_twin: 'Twin-cylinder',
  filter_four: 'Four-cylinder',
  filter_air: 'Air-cooled',
  filter_water: 'Water-cooled',
  sort_label: 'Sort by',
  sort_cc: 'Displacement',
  sort_power: 'Power',
  sort_thrust: 'Static thrust',
  sort_weight: 'Weight',
  results_count: 'Showing {n} of {total} models',
  compare_eyebrow: 'Side by side',
  compare_title: 'Compare all models',
  compare_desc: 'Key manufacturer specifications for the whole lineup.',
  compare_scroll_hint: 'Swipe sideways to see all models',
  compare_model: 'Model',
  compare_cylinders: 'Cylinders',
  compare_cooling: 'Cooling',
  label_cylinders: 'cylinders',                      // 缸数单位词（如“2 cylinders”）
  product_image_alt: 'two-stroke aircraft engine',   // 产品图 alt：与型号名组合，如“YT-120CC — two-stroke aircraft engine”
  view_details: 'View details',                      // 列表卡片：查看详情

  // ===== 产品详情页 =====
  // detail_intro 由参数自动拼出一句介绍（只用真实参数，不加任何主观宣传）
  detail_intro: '{model} is a {cyl}, {cool} two-stroke engine with {power} of power and {thrust} of static thrust at 100 m altitude.',
  detail_intro_mtow: 'Max take-off weight: {mtow}.',
  detail_cyl_2: 'twin-cylinder',
  detail_cyl_4: 'four-cylinder',
  detail_cool_air: 'air-cooled',
  detail_cool_water: 'water-cooled',
  detail_cta_whatsapp: 'Ask about this engine',
  detail_print: 'Print spec sheet',
  detail_trust_warranty: '12-month warranty',
  detail_trust_delivery: 'Standard models in stock',
  detail_trust_support: 'Technical support',
  wa_prefill: 'Hello! I am interested in the {model} engine. Please send me a quote.', // 打开 WhatsApp 时预填的消息
  gallery_label: 'Product photos',
  gallery_prev: 'Previous photo',
  gallery_next: 'Next photo',
  gallery_zoom: 'Enlarge photo',
  gallery_close: 'Close',
  perf_eyebrow: 'Performance',
  perf_title: 'Performance data',
  perf_rpm_title: 'Operating speed range',
  perf_rpm_idle: 'Idle {rpm}',
  perf_alt_title: 'Static thrust at altitude',
  perf_alt_note: '{p}% of the 100 m thrust is retained at 1800 m',   // 由两项真实参数计算得出
  perf_fuel_title: 'Fuel consumption',
  perf_fuel_carb: 'Carburetor',
  perf_fuel_efi: 'EFI',
  perf_fuel_note: 'The EFI version uses {p}% less fuel',             // 由两项真实参数计算得出
  perf_lineup_title: 'Position in the lineup',
  perf_lineup_note: 'Compared with the most powerful model in the lineup ({max}).',
  specs_eyebrow: 'Specifications',
  specs_title: 'Full specifications',
  specs_note: 'All figures are manufacturer data.',
  specs_group_performance: 'Performance',
  specs_group_engine: 'Engine',
  specs_group_fuel: 'Fuel & ignition',
  specs_group_physical: 'Weight & dimensions',
  specs_group_options: 'Options',
  specs_group_other: 'Other',
  dims_eyebrow: 'Dimensions',
  dims_title: 'Installation envelope',
  dims_desc: 'Overall dimensions (L × W × H) for airframe integration.',
  dims_length: 'Length',
  dims_width: 'Width',
  dims_height: 'Height',
  related_eyebrow: 'More engines',
  related_title: 'Other models in the lineup',
  print_contact: 'Contact',

  // ===== 询价页 =====
  inquiry_eyebrow: 'Contact',
  inquiry_title: 'Request a quote',                  // 询价页大标题
  inquiry_intro: 'Pricing and details are discussed in chat — message us directly on WhatsApp or Telegram for the fastest reply.', // 询价页副标题（价格不放网站，客户要求）
  channel_wa_desc: 'Fastest reply — prices and details in chat.',
  channel_tg_desc: 'Same number as {name}’s WhatsApp.',  // Telegram 卡片说明，{name} 是主号联系人（Allen）
  channel_mail_desc: 'For detailed requests and documents.',
  channel_open: 'Open chat',
  channel_write: 'Write an email',
  channel_scan: 'Scan with your phone',
  sales_role: 'Sales representative',  // 销售人员（2026-10-23 新增）：职位名
  sales_desc: 'Contact our sales representative directly on WhatsApp or by email.',  // 销售人员卡片说明
  sales_chat: 'Chat with {name}',  // 销售人员 WhatsApp 按钮，{name} 是姓名
  inquiry_tips_title: 'What to include in your inquiry',
  inquiry_tip_1: 'Airframe type',
  inquiry_tip_2: 'Target take-off weight',
  inquiry_tip_3: 'Engine model or required thrust',
  inquiry_tip_4: 'Quantity and destination country',
  inquiry_tip_5: 'Carburetor or EFI preference',
  form_title: 'Inquiry form',
  inquiry_or_form: 'Fill in the fields — we will compose an inquiry message to our WhatsApp.', // 表单引导
  form_submit_whatsapp: 'Send inquiry via WhatsApp',  // 表单提交按钮（打开 WhatsApp 预填消息）
  form_submit_email: 'Send by email',
  form_copy: 'Copy text',
  form_copied: 'Copied',
  form_preview: 'Message preview',
  form_whatsapp_opened: 'Opening WhatsApp… If it did not open, use the WhatsApp button above to contact us directly.', // 提交后提示
  form_email_subject: 'Engine inquiry',
  msg_header: 'Inquiry',                             // 生成的询价消息第一行
  form_name: 'Name',                                 // 表单字段：姓名
  form_company: 'Company',                           // 表单字段：公司
  form_country: 'Country',                           // 表单字段：国家
  form_email: 'Email',                               // 表单字段：邮箱
  form_phone: 'Phone',                               // 表单字段：电话
  form_model: 'Model of interest',                   // 表单字段：感兴趣的型号
  form_model_placeholder: '— Select a model —',      // 型号下拉的占位提示
  form_quantity: 'Quantity',                         // 表单字段：数量
  form_fuel: 'Fuel system',
  form_fuel_any: 'Not sure',
  form_fuel_carb: 'Carburetor',
  form_fuel_efi: 'EFI',
  form_message: 'Message',                           // 表单字段：留言
  form_submit: 'Send request',                       // 提交按钮（旧版后端表单用，保留）
  form_sending: 'Sending…',                          // 提交按钮的进行中状态（旧版，保留）
  form_success: 'Thank you! Your request has been sent — we will get back to you shortly.', // 提交成功提示（旧版，保留）
  form_error: 'Submission failed. Please try again, or contact us directly via the details in the footer.', // 提交失败提示（旧版，保留）
  form_error_network: 'Network error — your request was not sent. Please check your connection and try again, or contact us via the details in the footer.', // 网络错误提示（旧版，保留）
  form_required_hint: 'Fields marked * are required', // 必填说明
  form_privacy_note: 'We only use this information to reply to your inquiry.', // 表单底部隐私说明
  inquiry_success_title: 'Request sent',             // 无 JS 成功页标题（旧版，保留）
  inquiry_success_body: 'Thank you for your inquiry! We will reply by email or phone shortly.', // 无 JS 成功页正文（旧版，保留）
  inquiry_success_back: 'Back to home',              // 无 JS 成功页返回链接（旧版，保留）

  // ===== 参数标签（spec_ 开头）=====
  // 说明：这些是参数表里“字段名”的翻译。参数的“数值”（如 11.22hp）不随语言变，直接存在 products.json 里。
  spec_power: 'Power',                               // 功率
  spec_static_thrust_100m: 'Static thrust (100 m altitude)',  // 静推力（海拔 100 米）
  spec_static_thrust_1800m: 'Static thrust (1800 m altitude)',// 静推力（海拔 1800 米）
  spec_max_takeoff_weight: 'Max take-off weight',    // 最大起飞重量
  spec_recommended_propeller: 'Recommended propeller',// 适用螺旋桨规格
  spec_diameter_stroke: 'Bore × stroke',             // 缸径 × 行程（缸径的行业标准词是 bore，不是 diameter）
  spec_displacement: 'Displacement',                 // 排量
  spec_weight: 'Weight',                             // 重量
  spec_crankshaft: 'Crankshaft',                     // 曲轴
  spec_speed_range: 'Speed range',                   // 转速范围
  spec_lubrication_ratio: 'Fuel/oil mix ratio',      // 燃油/机油混合比（值形如 25:1）
  spec_ignition_voltage: 'Igniter supply voltage',   // 点火器供电电压（6.0–8.4 V DC 是供电电压，不是次级高压）
  spec_generator: 'Generator',                       // 发电机
  spec_fuel_consumption_carburetor: 'Fuel consumption (carburetor)', // 油耗（化油器款）
  spec_fuel_consumption_efi: 'Fuel consumption (EFI)', // 油耗（电喷款）
  spec_dimensions: 'Dimensions (L×W×H)',             // 尺寸（长×宽×高）
  spec_idle_speed: 'Idle speed',                     // 怠速
  spec_spark_plug_model: 'Spark plug model',         // 适用火花塞型号
  spec_compression_ratio: 'Compression ratio',       // 压缩比
  spec_main_machine_weight: 'Main unit weight',      // 主机重量
  spec_exhaust_pipe_weight: 'Exhaust pipe weight',   // 排气管重量
  spec_igniter_weight: 'Igniter weight',             // 点火器重量
  spec_ignition: 'Ignition system',                  // 点火系统
  spec_carburetor_efi: 'Carburetor / EFI',           // 化油器 / 电喷
  spec_option: 'Options',                            // 选件
  spec_firing_order: 'Firing order',                 // 点火次序
  spec_piston: 'Piston',                             // 活塞
  spec_cylinder: 'Cylinder',                         // 缸体
  spec_engine_stroke: 'Engine cycle',                // 发动机冲程（避免与上面的 stroke=活塞行程混淆，值是 Two-stroke）
  spec_layout_form: 'Layout',                        // 布局形式
  spec_starter: 'Starter',                           // 启动器

  // ===== 特性标签（feature_ 开头）=====
  // 说明：产品卡片上的“亮点标签/徽章”，来自 products.json 里每个型号的 features 列表。
  feature_twin_cylinders: 'Twin cylinders',          // 双缸
  feature_four_cylinders: 'Four cylinders',          // 四缸
  feature_air_cooled: 'Air-cooled',                  // 风冷
  feature_water_cooled: 'Water-cooled',              // 水冷
  feature_two_stroke: 'Two-stroke',                  // 二冲程
  feature_auto_cdi_ignition: 'CDI ignition with automatic advance', // 自动进角 CDI 点火（补上「进角/advance」）
  feature_dc_cdi_ignition: 'DC CDI electronic ignition', // 直流 CDI 电子点火
  feature_solid_state_magneto_ignition: 'Solid-state magneto ignition', // 固态磁电机点火
  feature_mixture_lubrication: 'Mixture lubrication',// 混合气润滑
  feature_push_pull_devices: 'Push and pull devices',// 推式和拉式装置

  // ===== 参数值翻译（specval_ 开头）=====
  // 说明：有些参数的“值”是文字描述（非纯数字），这类值在 products.json 里存的是 specval_ 开头的 token，
  //       由这里翻译成各语言。纯数字+单位的值（如 120 cc）不走这里。
  specval_three_ball_bearings: 'Three ball bearings',                     // 三滚珠轴承
  specval_three_bearing_crankshaft: 'Three-bearing crankshaft',          // 三轴承曲轴
  specval_high_strength_alloy_steel: 'High strength alloy steel',        // 高强度合金钢
  specval_forging_seven_piece: 'Forging, seven-piece set',               // 锻造，七件组合体
  specval_dc_cdi_electronic_ignition: 'DC CDI electronic ignition',      // 直流CDI电子点火
  specval_cdi_automatic_angle_ignition: 'CDI with automatic spark advance', // CDI自动进角点火器（行业标准说法）
  specval_carb_allround_choke: 'All-round carburetor with choke',        // 全方位化油器，带阻风门（全站统一美式拼写 carburetor）
  specval_carb_two_diaphragm: 'Two diaphragm-type all-round carburetors, without choke / injector nozzles', // 2个薄膜式全方位化油器，不带阻风门/喷油口（统一 all-round 写法）
  specval_option_starter_24v: 'Starter 24V / optional electric start',   // 启动器 24V/可选配电启动
  specval_option_exhaust_starter_generator: 'Exhaust pipe, starter, generator', // 排气接管 启动器 发电机
  specval_piston_oval_alloy: 'Oval grinding, aluminum alloy casting',    // 椭圆形磨削，铝合金铸造
  specval_cylinder_alloy_ceramic: 'Cast aluminum alloy, with ceramic nickel-silicon hardened coating on the inner wall', // 铝合金铸造，内壁陶瓷镍硅硬化镀层
  specval_two_stroke: 'Two-stroke',                                      // 二冲程
  specval_layout_h_opposed_4: 'Horizontally opposed, 4 cylinders',       // 水平对置，4缸
  specval_optional: 'Optional',                                          // 可选件
  specval_firing_opposed_500: 'Opposed two-cylinder synchronous ignition, automatic switching at 500 rpm', // 对置两缸同步点火，500转自动转换
};
