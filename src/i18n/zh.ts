// ============================================================
// 中文(zh) 翻译文件
// 用途：主要给中国工程师审阅内容，也可面向中文客户。
// 说明：参数标签(spec_ 开头)直接采用「参数型号.pdf」里厂家资料的原始中文说法，保持一致。
// 中文是从左到右(LTR)，不涉及 RTL；本文件的 key（冒号左边）必须和 en.ts / ru.ts 完全一致。
// 文案里的 {model}、{n} 这类花括号是“占位变量”，程序会替换成具体值，翻译时原样保留。
// ★ 硬规则：只写客户提供过的真实信息，绝不编造。
// ============================================================
export default {
  // ===== 品牌 / 通用 =====
  site_name: 'UAV Drone Engine',                     // 公司/品牌名（客户 2026-08-08 确认，四语统一用拉丁写法）
  site_tagline: '二冲程航空发动机',                    // 品牌标语（真实产品定位；可按 CONTENT-TODO A3 调整）

  // ===== 顶部导航栏 =====
  nav_main_label: '主导航',                           // 主导航区的无障碍标签（页面上不可见，读屏软件用）
  nav_home: '首页',                                  // 导航：首页
  nav_products: '产品',                              // 导航：产品列表
  nav_inquiry: '询价',                               // 导航：询价
  nav_about: '关于我们',                              // 导航：关于我们（跳到首页“关于我们”板块）
  nav_service: '服务',                               // 导航：服务（跳到首页“服务与保障”板块）
  nav_faq: '常见问题',                                // 导航：常见问题
  nav_menu: '菜单',                                  // 手机端菜单按钮（读屏用）
  nav_products_toggle: '展开发动机型号',               // 产品下拉菜单的展开按钮（读屏用）
  nav_all_engines: '全部发动机',                       // 下拉菜单：全部发动机
  nav_all_engines_desc: '7 款型号参数对比',            // 下拉菜单：全部发动机的说明
  nav_models_label: '发动机型号',                      // 手机菜单里的小标题

  // ===== 语言切换器 =====
  language_label: '语言',                            // “语言”文字标签
  skip_to_content: '跳到主内容',                      // 无障碍跳转链接（键盘 Tab 第一个焦点）
  lang_suggest_text: '本网站提供中文版本。',                              // 语言建议提示（用该语言自己的文字）
  lang_suggest_cta: '切换到中文',
  lang_suggest_close: '关闭',

  // ===== 通用按钮 / 联系方式 =====
  cta_whatsapp: 'WhatsApp',
  cta_chat_whatsapp: 'WhatsApp 咨询',
  cta_telegram: 'Telegram',
  cta_email: '邮箱',
  float_whatsapp_label: '通过 WhatsApp 联系我们',      // 右下角悬浮按钮（读屏用）
  back_to_top: '回到顶部',

  // ===== 首页：顶部大区块(hero) =====
  hero_eyebrow: '无人机二冲程发动机 · 120–730cc',       // 大标题上方的小标签
  hero_title_a: '二冲程航空发动机',                    // 大标题第一行
  hero_title_b: '专为无人机打造',                      // 大标题第二行（红色渐变；保持短句，避免中文在词中间断行）
  home_hero_title: '二冲程航空发动机，120cc–730cc',   // 旧版大标题（保留）
  home_hero_subtitle: '双缸/四缸、风冷/水冷发动机，适用于无人机与轻型飞行器——配套螺旋桨、静推力与最大起飞重量数据齐全。', // 首页副标题
  home_hero_cta: '浏览发动机',                        // 首页主按钮
  hero_stat_years: '年无人机发动机制造经验',                 // 数字：10 年
  hero_stat_units: '台累计产量',                      // 数字：60,000+
  hero_stat_models: '款无人机发动机',                  // 数字：7 款
  hero_stat_warranty: '个月整机质保',                  // 数字：12 个月
  stage_label: '发动机互动展示',                       // 发动机展台（读屏用）
  stage_tabs_label: '选择型号',                       // 型号切换按钮组（读屏用）
  stage_rpm_label: '转速范围',                        // 转速表圆环说明
  stage_rpm_unit: '×1000 rpm',                       // 转速表刻度单位
  stage_view: '查看型号详情',                          // 展台：查看该型号

  // 短标签（卡片、展台读数等空间小的地方用）
  short_power: '功率',
  short_thrust: '静推力',
  short_thrust_100: '推力 · 100 米',
  short_thrust_1800: '推力 · 1800 米',
  short_displacement: '排量',
  short_weight: '重量',
  short_weight_main: '主机重量',
  short_mtow: '最大起飞重量',
  short_rpm: '转速范围',

  // ===== 首页：滚动字幕条（全部为真实卖点）=====
  ticker_1: '120–730cc 全系列',
  ticker_2: '双缸 / 四缸',
  ticker_3: '风冷 / 水冷',
  ticker_4: '化油器 / 电喷',
  ticker_5: '累计生产 60,000+ 台',
  ticker_6: '整机质保 12 个月',
  ticker_7: '推式 / 拉式安装',
  ticker_8: '100 米与 1800 米推力数据',

  // ===== 首页：产品线 =====
  home_lineup_eyebrow: '产品线',
  home_lineup_title: '七款发动机，120–730cc',
  home_lineup_desc: '双缸与四缸二冲程发动机，风冷或水冷可选。每款型号页面都有完整的厂家参数。',
  home_featured_title: '主力型号',                    // 板块标题（旧版，保留）
  home_featured_subtitle: '产品线中的部分型号——点击进入可查看完整参数。', // 板块副标题（旧版，保留）
  home_view_all: '查看全部型号',                      // “查看全部型号”按钮

  // ===== 首页：性能对比图 =====
  chart_eyebrow: '性能一览',
  chart_title: '全系列性能对比',
  chart_desc: '七款型号的厂家数据。选择对比指标：',
  chart_metric_label: '指标',
  chart_metric_thrust: '静推力',
  chart_metric_power: '功率',
  chart_metric_mtow: '最大起飞重量',
  chart_legend_100: '海拔 100 米',
  chart_legend_1800: '海拔 1800 米',
  chart_no_data: '未标注',                            // 某型号缺这项数据时显示（目前 7 款都有数据；YT-222CC 的最大起飞重量 110 kg 已于 2026-10-23 补上）
  chart_table_caption: '各型号静推力、功率与最大起飞重量',
  chart_show_table: '以表格查看',

  // ===== 首页：为什么选择我们（真实产品优势）=====
  home_why_eyebrow: '我们的优势',
  home_why_title: '为什么选择我们的发动机',            // 板块标题
  home_why_desc: '集成商选型所需的数据与配置，一应俱全。',
  home_strength_range_title: '全功率覆盖',                              // 优势1标题
  home_strength_range_text: '从 120cc 到 730cc 完整型号线，覆盖从轻型到大起飞重量的需求。', // 优势1正文
  home_strength_config_title: '多种配置',                              // 优势2标题
  home_strength_config_text: '双缸/四缸、风冷/水冷可选——匹配你的机型。', // 优势2正文
  home_strength_fuel_title: '化油器或电喷',                            // 优势3标题
  home_strength_fuel_text: '多数型号提供化油器款与电喷（EFI）款。',      // 优势3正文
  home_strength_altitude_title: '两个海拔的推力数据',                   // 优势4（数据：每款都有 100m/1800m 推力）
  home_strength_altitude_text: '每款型号都标注了海拔 100 米和 1800 米的静推力，便于高原工况选型。',
  home_strength_mount_title: '推式或拉式',                              // 优势5（数据：每款都支持推式/拉式）
  home_strength_mount_text: '全部发动机均支持推式和拉式安装。',
  home_strength_prop_title: '匹配螺旋桨',                               // 优势6（数据：每款都有推荐螺旋桨）
  home_strength_prop_text: '每款型号都给出推荐的螺旋桨规格。',

  // ===== 首页：关于我们 =====
  home_about_title: '关于我们',                       // 关于我们（小标签）
  home_about_heading: '十年无人机发动机制造经验',            // 关于我们大标题
  home_about_text: '我们在中国从事无人机发动机制造已有十年，拥有多年发动机研发与制造经验。累计生产发动机超过 60,000 台。', // 公司简介（客户 2026-08-08 提供；2026-10-23 按用户要求由“十年摩托车发动机”改为“十年无人机发动机”，删除“2024 年起供无人机”）
  about_stat_years: '年无人机发动机研发与制造',
  about_stat_units: '累计生产发动机（台）',
  about_stat_warranty: '个月整机质保',
  about_stat_models: '款无人机发动机',
  about_tl_1_title: '无人机发动机',
  about_tl_1_text: '120–730cc 二冲程发动机，双缸与四缸、风冷与水冷可选。',
  about_tl_2_title: '研发与制造',
  about_tl_2_text: '在中国从事无人机发动机研发与制造十年。',
  about_tl_3_title: '服务',
  about_tl_3_text: '整机质保 12 个月，每台发动机都提供技术支持与定制服务。',
  home_factory_title: '工厂与产能',                   // 工厂与产能（板块暂未上线，等客户资料）
  home_cert_title: '质量与资质',                      // 质量与资质（板块暂未上线）
  home_applications_title: '应用场景',                // 应用场景（板块暂未上线）
  home_cases_title: '客户与案例',                     // 客户案例（板块暂未上线）

  // ===== 首页：服务与保障（真实内容，来自客户报价单，价格已剔除）=====
  home_service_eyebrow: '服务',
  home_service_title: '服务与保障',
  home_service_desc: '我们供应的每一台发动机，都有质保、交期与技术支持保障。',
  home_service_warranty_title: '质保',
  home_service_warranty_text: '整机质保 12 个月，易损件（火花塞、密封圈等）质保 3 个月。',
  home_service_delivery_title: '交付',
  home_service_delivery_text: '常规型号现货供应，定制配置 7–15 个工作日交付。',
  home_service_support_title: '技术支持',
  home_service_support_text: '提供全程技术支持：安装调试、故障排查、维护保养培训。',
  home_service_custom_title: '定制服务',
  home_service_custom_text: '支持定制改装输出轴、定制安装法兰等；推式/拉式安装均可。',

  // ===== 首页：下单流程 =====
  process_eyebrow: '下单流程',
  process_title: '从询价到装机',
  process_1_title: '发送需求',
  process_1_text: '通过 WhatsApp、Telegram 或邮件告诉我们机型、目标起飞重量和数量。',
  process_2_title: '获取推荐与报价',
  process_2_text: '我们推荐合适的型号，并私下发送价格。',
  process_3_title: '确认配置',
  process_3_text: '化油器或电喷、推式或拉式安装、定制法兰与输出轴。',
  process_4_title: '交付',
  process_4_text: '常规型号现货供应；定制配置 7–15 个工作日交付。',
  process_5_title: '持续支持',
  process_5_text: '安装调试、故障排查、维护保养培训，整机质保 12 个月。',

  // ===== 首页：常见问题（答案全部来自客户提供的信息和产品参数）=====
  faq_eyebrow: '常见问题',
  faq_title: '常见问题解答',
  faq_1_q: '为什么网站上没有价格？',
  faq_1_a: '我们针对每个询价单独报价。通过 WhatsApp 或 Telegram 告诉我们型号和数量，我们会回复价格。',
  faq_2_q: '质保政策是什么？',
  faq_2_a: '整机质保 12 个月；易损件（火花塞、密封圈等）质保 3 个月。',
  faq_3_q: '交货期多久？',
  faq_3_a: '常规型号现货供应，定制配置 7–15 个工作日交付。',
  faq_4_q: '能否根据我的机型定制？',
  faq_4_a: '可以——支持定制输出轴、安装法兰等；推式和拉式安装均可。',
  faq_5_q: '有化油器款和电喷款吗？',
  faq_5_a: '多数型号同时提供化油器款和电喷（EFI）款，两种版本的油耗都列在型号页面中。',
  faq_6_q: '发动机使用什么燃油混合比？',
  faq_6_a: '全部为二冲程、混合气润滑发动机。燃油/机油混合比因型号而异（20:1 到 50:1），详见各型号参数。',
  faq_7_q: '如何选择合适的发动机？',
  faq_7_a: '在型号页面对比最大起飞重量、海拔 100 米与 1800 米静推力和推荐螺旋桨；或者告诉我们机型和目标起飞重量，由我们推荐型号。',
  faq_8_q: '提供技术支持吗？',
  faq_8_a: '提供。包括安装调试、故障排查和维护保养培训。',

  // ===== 询价 CTA 横幅（首页 / 产品页 / 详情页共用）=====
  cta_eyebrow: '获取报价',
  cta_title: '告诉我们您的项目',
  home_contact_title: '获取报价',                     // 联系/询价引导（旧版标题，保留）
  home_contact_text: '告诉我们你的机型和目标起飞重量，我们会推荐合适型号。', // 询价引导正文
  cta_note: '价格在私聊中沟通。',
  cta_scan: '扫码通过 WhatsApp 咨询',

  // ===== 页脚 =====
  footer_about: '120–730cc 二冲程航空发动机，适用于无人机与轻型飞行器。',
  footer_engines: '发动机',
  footer_company: '公司',
  footer_contact_title: '联系方式',                   // 页脚联系区标题
  footer_rights: '保留所有权利。',                    // 页脚版权

  // ===== 产品列表页 =====
  products_eyebrow: '产品中心',
  products_title: '我们的发动机',                     // 产品列表页大标题
  products_intro: '120cc 到 730cc 的二冲程航空发动机，风冷与水冷可选。', // 产品列表页副标题
  products_stat_models: '款型号',
  products_stat_cc: '排量',
  products_stat_power: '功率',
  products_stat_thrust: '静推力',
  filter_label: '筛选发动机',
  filter_all: '全部',
  filter_twin: '双缸',
  filter_four: '四缸',
  filter_air: '风冷',
  filter_water: '水冷',
  sort_label: '排序',
  sort_cc: '按排量',
  sort_power: '按功率',
  sort_thrust: '按推力',
  sort_weight: '按重量',
  results_count: '显示 {n} / {total} 款型号',
  compare_eyebrow: '参数对比',
  compare_title: '全部型号对比',
  compare_desc: '全系列主要厂家参数。',
  compare_scroll_hint: '左右滑动查看全部型号',
  compare_model: '型号',
  compare_cylinders: '缸数',
  compare_cooling: '冷却方式',
  label_cylinders: '缸',                             // 缸数单位词（如“2 缸”）
  product_image_alt: '二冲程航空发动机',              // 产品图 alt：与型号名组合，如“YT-120CC — 二冲程航空发动机”
  view_details: '查看详情',                          // 列表卡片：查看详情

  // ===== 产品详情页 =====
  detail_intro: '{model} 是一款{cyl}{cool}二冲程发动机，功率 {power}，海拔 100 米静推力 {thrust}。',
  detail_intro_mtow: '最大起飞重量 {mtow}。',
  detail_cyl_2: '双缸',
  detail_cyl_4: '四缸',
  detail_cool_air: '风冷',
  detail_cool_water: '水冷',
  detail_cta_whatsapp: '咨询这款发动机',
  detail_print: '打印参数单',
  detail_trust_warranty: '整机质保 12 个月',
  detail_trust_delivery: '常规型号现货',
  detail_trust_support: '全程技术支持',
  wa_prefill: '您好！我对 {model} 发动机感兴趣，请发送报价。', // 打开 WhatsApp 时预填的消息
  gallery_label: '产品图片',
  gallery_prev: '上一张',
  gallery_next: '下一张',
  gallery_zoom: '放大查看',
  gallery_close: '关闭',
  perf_eyebrow: '性能',
  perf_title: '性能数据',
  perf_rpm_title: '工作转速范围',
  perf_rpm_idle: '怠速 {rpm}',
  perf_alt_title: '不同海拔的静推力',
  perf_alt_note: '海拔 1800 米时保持 100 米推力的 {p}%',          // 由两项真实参数计算得出
  perf_fuel_title: '油耗',
  perf_fuel_carb: '化油器款',
  perf_fuel_efi: '电喷款',
  perf_fuel_note: '电喷款油耗低 {p}%',                            // 由两项真实参数计算得出
  perf_lineup_title: '在产品线中的位置',
  perf_lineup_note: '以产品线中功率最大的型号（{max}）为参照。',
  specs_eyebrow: '参数',
  specs_title: '完整参数',
  specs_note: '以上数据均为厂家参数。',
  specs_group_performance: '性能',
  specs_group_engine: '发动机本体',
  specs_group_fuel: '燃油与点火',
  specs_group_physical: '重量与尺寸',
  specs_group_options: '选件',
  specs_group_other: '其它',
  dims_eyebrow: '尺寸',
  dims_title: '安装尺寸',
  dims_desc: '外形尺寸（长 × 宽 × 高），便于机体集成。',
  dims_length: '长',
  dims_width: '宽',
  dims_height: '高',
  related_eyebrow: '更多发动机',
  related_title: '产品线中的其它型号',
  print_contact: '联系方式',

  // ===== 询价页 =====
  inquiry_eyebrow: '联系我们',
  inquiry_title: '询价',                             // 询价页大标题
  inquiry_intro: '价格与详情私聊洽谈——直接在 WhatsApp 或 Telegram 上联系我们，回复最快。', // 询价页副标题（价格不放网站，客户要求）
  inquiry_whatsapp_cta: '在 WhatsApp 上联系我们',      // WhatsApp 主按钮
  channel_wa_desc: '回复最快——价格与细节在聊天中沟通。',
  channel_tg_desc: '与 WhatsApp 同一号码。',
  channel_mail_desc: '适合详细需求和文件往来。',
  channel_open: '打开聊天',
  channel_write: '写邮件',
  channel_scan: '用手机扫码',
  sales_role: '销售',  // 销售人员（2026-10-23 新增）：职位名
  sales_desc: '直接通过 WhatsApp 或邮件联系我们的销售人员。',  // 销售人员卡片说明
  sales_chat: '联系 {name}',  // 销售人员 WhatsApp 按钮，{name} 是姓名
  inquiry_tips_title: '询价时请告诉我们',
  inquiry_tip_1: '机型类型',
  inquiry_tip_2: '目标起飞重量',
  inquiry_tip_3: '发动机型号或所需推力',
  inquiry_tip_4: '数量与收货国家',
  inquiry_tip_5: '化油器或电喷偏好',
  form_title: '询价表单',
  inquiry_or_form: '填写以下信息——我们会自动生成一条询价消息，发到我们的 WhatsApp。', // 表单引导
  form_submit_whatsapp: '在 WhatsApp 中发送询价',      // 表单提交按钮（打开 WhatsApp 预填消息）
  form_submit_email: '通过邮件发送',
  form_copy: '复制文本',
  form_copied: '已复制',
  form_preview: '消息预览',
  form_whatsapp_opened: '正在打开 WhatsApp…若没有自动打开，请点击上方的 WhatsApp 按钮直接联系我们。', // 提交后提示
  form_email_subject: '发动机询价',
  msg_header: '询价',                                // 生成的询价消息第一行
  form_name: '姓名',                                 // 姓名
  form_company: '公司',                              // 公司
  form_country: '国家',                              // 国家
  form_email: '邮箱',                                // 邮箱
  form_phone: '电话',                                // 电话
  form_model: '感兴趣的型号',                         // 感兴趣的型号
  form_model_placeholder: '— 请选择型号 —',           // 型号下拉占位
  form_quantity: '数量',                             // 数量
  form_fuel: '燃油系统',
  form_fuel_any: '不确定',
  form_fuel_carb: '化油器',
  form_fuel_efi: '电喷',
  form_message: '留言',                              // 留言
  form_submit: '提交询价',                           // 提交按钮（旧版后端表单用，保留）
  form_sending: '发送中…',                           // 提交按钮的进行中状态（旧版，保留）
  form_success: '谢谢！您的询价已发送，我们会尽快回复您。', // 提交成功提示（旧版，保留）
  form_error: '提交失败，请稍后重试，或直接通过页脚的联系方式找到我们。', // 提交失败提示（旧版，保留）
  form_error_network: '网络异常，发送未成功。请检查网络后重试，或直接通过页脚的联系方式找到我们。', // 网络错误提示（旧版，保留）
  form_required_hint: '带 * 为必填项',                // 必填说明
  form_privacy_note: '我们只会用这些信息回复您的询价。', // 表单底部隐私说明
  inquiry_success_title: '询价已发送',                // 无 JS 成功页标题（旧版，保留）
  inquiry_success_body: '感谢您的询价！我们会尽快通过邮箱或电话回复您。', // 无 JS 成功页正文（旧版，保留）
  inquiry_success_back: '返回首页',                   // 无 JS 成功页返回链接（旧版，保留）

  // ===== 参数标签（spec_ 开头，采用 PDF 原始中文）=====
  spec_power: '功率',                                // Power
  spec_static_thrust_100m: '静推力（海拔 100 米）',    // Static thrust (100 m)。统一用「静推力」，与首页文案一致（厂家 PDF 原文写「拉力」，同一概念）
  spec_static_thrust_1800m: '静推力（海拔 1800 米）',  // Static thrust (1800 m)
  spec_max_takeoff_weight: '最大起飞重量',            // Max take-off weight
  spec_recommended_propeller: '推荐螺旋桨规格',        // Recommended propeller。四语统一为「推荐」口径
  spec_diameter_stroke: '缸径 × 行程',               // Diameter × Stroke
  spec_displacement: '排量',                         // Displacement
  spec_weight: '重量',                               // Weight
  spec_crankshaft: '曲轴',                           // Crankshaft
  spec_speed_range: '转速范围',                       // Speed range
  spec_lubrication_ratio: '燃油/机油混合比',           // Fuel/oil mix ratio（值形如 25:1，指燃油与机油的混合比例）
  spec_ignition_voltage: '点火器电压',                // Ignition voltage
  spec_generator: '发电机',                          // Generator
  spec_fuel_consumption_carburetor: '油耗（化油器款）', // Fuel consumption (carburetor)
  spec_fuel_consumption_efi: '油耗（电喷款）',         // Fuel consumption (EFI)
  spec_dimensions: '尺寸（长×宽×高）',                // Dimensions (L×W×H)
  spec_idle_speed: '怠速',                           // Idle speed
  spec_spark_plug_model: '适用火花塞型号',            // Spark plug model
  spec_compression_ratio: '压缩比',                   // Compression ratio
  spec_main_machine_weight: '主机重量',               // Main unit weight
  spec_exhaust_pipe_weight: '排气管重量',             // Exhaust pipe weight
  spec_igniter_weight: '点火器重量',                  // Igniter weight
  spec_ignition: '点火系统',                          // Ignition system
  spec_carburetor_efi: '化油器 / 电喷',               // Carburetor / EFI
  spec_option: '选件',                               // Options
  spec_firing_order: '点火次序',                      // Firing order
  spec_piston: '活塞',                               // Piston
  spec_cylinder: '缸体',                             // Cylinder
  spec_engine_stroke: '发动机冲程',                   // Engine stroke
  spec_layout_form: '布局形式',                       // Layout
  spec_starter: '启动器',                            // Starter

  // ===== 特性标签（feature_ 开头，采用 PDF 原始中文）=====
  feature_twin_cylinders: '双缸',                    // Twin cylinders
  feature_four_cylinders: '四缸',                    // Four cylinders
  feature_air_cooled: '风冷',                        // Air-cooled
  feature_water_cooled: '水冷',                      // Water-cooled
  feature_two_stroke: '二冲程',                      // Two-stroke
  feature_auto_cdi_ignition: '自动进角CDI点火',       // Automatic CDI ignition
  feature_dc_cdi_ignition: '直流CDI电子点火',         // DC CDI electronic ignition
  feature_solid_state_magneto_ignition: '固态磁电机点火', // Solid-state magneto ignition
  feature_mixture_lubrication: '混合气润滑',          // Mixture lubrication
  feature_push_pull_devices: '推式和拉式装置',        // Push and pull devices

  // ===== 参数值翻译（specval_ 开头，采用 PDF 原始中文）=====
  // 说明：文字描述型的参数值在 products.json 里存 specval_ token，这里翻译。纯数字+单位的值不走这里。
  specval_three_ball_bearings: '三滚珠轴承',                     // Three ball bearings
  specval_three_bearing_crankshaft: '三轴承曲轴',               // Three-bearing crankshaft
  specval_high_strength_alloy_steel: '高强度合金钢',            // High strength alloy steel
  specval_forging_seven_piece: '锻造，七件组合体',              // Forging, seven-piece set
  specval_dc_cdi_electronic_ignition: '直流CDI电子点火',        // DC CDI electronic ignition
  specval_cdi_automatic_angle_ignition: 'CDI自动进角点火器',    // CDI automatic angle ignition
  specval_carb_allround_choke: '全方位化油器，带阻风门',         // All-round carburettor with choke
  specval_carb_two_diaphragm: '2个薄膜式全方位化油器，不带阻风门/喷油口', // Two diaphragm-type all-around carburetors...
  specval_option_starter_24v: '启动器 24V/可选配电启动',        // Starter 24V / optional electric start
  specval_option_exhaust_starter_generator: '排气接管 启动器 发电机', // Exhaust pipe, starter, generator
  specval_piston_oval_alloy: '椭圆形磨削，铝合金铸造',           // Oval grinding, aluminum alloy casting
  specval_cylinder_alloy_ceramic: '铝合金铸造，内壁陶瓷镍硅硬化镀层', // Cast aluminum alloy, ceramic nickel-silicon coating
  specval_two_stroke: '二冲程',                                // Two-stroke
  specval_layout_h_opposed_4: '水平对置，4缸',                  // Horizontally opposed, 4 cylinders
  specval_optional: '可选件',                                  // Optional
  specval_firing_opposed_500: '对置两缸同步点火，500 rpm 时自动转换', // Opposed two-cylinder synchronous ignition, auto switching at 500 rpm（转速单位全站统一用 rpm）
};
