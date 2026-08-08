// ============================================================
// 波斯语(fa) 翻译文件 —— 【已预留，暂未启用】
// 说明：这份文件已经写好，但因为 config.ts 的 locales 里还没有加入 'fa'，
//       所以网站暂时不会生成波斯语页面。
//       未来只要在 config.ts 的 locales 数组里加上 'fa'，波斯语（含从右到左布局）就会自动生效。
// 波斯语是从右到左(RTL)排版，config.ts 里已把 fa 标记为 RTL。
// ============================================================
export default {
  // ===== 品牌 / 通用 =====
  site_name: '【待填·公司名】',                                  // ⚠️占位：公司名/品牌名，见 CONTENT-TODO A1（上线前必须替换）
  site_tagline: 'موتورهای هواپیمای دو زمانه',                   // 品牌标语（真实产品定位；可按 CONTENT-TODO A3 调整）

  // ===== 顶部导航栏 =====
  nav_home: 'خانه',                                            // 导航：首页
  nav_products: 'محصولات',                                     // 导航：产品列表
  nav_inquiry: 'درخواست قیمت',                                 // 导航：询价

  // ===== 语言切换器 =====
  language_label: 'زبان',                                      // “语言”文字标签

  // ===== 首页：顶部大区块(hero) =====（已按真实产品重写）
  home_hero_title: 'موتورهای هواپیمای دو زمانه، ۱۲۰ تا ۷۳۰ سی‌سی', // 首页大标题
  home_hero_subtitle: 'موتورهای دو و چهار سیلندر، خنک‌کاری هوا و آب، برای پهپادها و هواپیماهای سبک — همراه با پروانه متناسب، نیروی رانش ایستا و داده‌های وزن برخاست.', // 首页副标题
  home_hero_cta: 'مشاهده موتورها',                             // 首页主按钮

  // ===== 首页：主力型号展示区 =====
  home_featured_title: 'مدل‌های شاخص',                         // 板块标题
  home_featured_subtitle: 'بخشی از مجموعه ما — مشخصات کامل در صفحه هر مدل.', // 板块副标题
  home_view_all: 'همه موتورها',                                // “查看全部型号”按钮

  // ===== 首页：为什么选择我们（真实产品优势）=====
  home_why_title: 'چرا موتورهای ما',                           // 板块标题
  home_strength_range_title: 'گستره کامل توان',                                   // 优势1标题
  home_strength_range_text: 'مجموعه کامل از ۱۲۰ تا ۷۳۰ سی‌سی، از وزن‌های برخاست سبک تا سنگین.', // 优势1正文
  home_strength_config_title: 'پیکربندی‌های متنوع',                               // 优势2标题
  home_strength_config_text: 'دو و چهار سیلندر، خنک‌کاری هوا یا آب — متناسب با بدنه پرنده شما.', // 优势2正文
  home_strength_fuel_title: 'کاربراتور یا انژکتور',                               // 优势3标题
  home_strength_fuel_text: 'برای بیشتر مدل‌ها نسخه کاربراتوری و انژکتوری (EFI) موجود است.', // 优势3正文

  // ===== 首页：其它板块标题（正文为占位，见 CONTENT-TODO）=====
  home_about_title: 'درباره ما',                               // 关于我们
  home_factory_title: 'تولید',                                 // 工厂与产能
  home_cert_title: 'کیفیت و گواهینامه‌ها',                     // 质量与资质
  home_applications_title: 'کاربردها',                         // 应用场景
  home_contact_title: 'دریافت قیمت',                           // 联系/询价引导
  home_contact_text: 'بدنه پرنده و وزن برخاست هدف خود را بگویید تا مدل مناسب را پیشنهاد دهیم.', // 询价引导正文

  // ===== 页脚 =====
  footer_contact_title: 'تماس',                                // 页脚联系区标题
  footer_rights: 'تمام حقوق محفوظ است.',                       // 页脚版权：保留所有权利

  // ===== 产品列表页：页面文字 =====
  products_title: 'موتورهای ما',                               // 产品列表页大标题
  products_intro: 'موتورهای هواپیمای دو زمانه از ۱۲۰ تا ۷۳۰ سی‌سی، با خنک‌کاری هوا و آب.', // 产品列表页副标题
  label_cylinders: 'سیلندر',                                   // 缸数单位词（如“2 سیلندر”）
  product_image_alt: 'موتور هواپیمای دو زمانه',                // 产品图 alt：与型号名组合，如“ZT-T120 — موتور هواپیمای دو زمانه”
  view_details: 'مشاهده جزئیات',                               // 列表卡片：查看详情

  // ===== 询价表单页 =====
  inquiry_title: 'درخواست قیمت',                               // 询价页大标题
  inquiry_intro: 'فرم زیر را پر کنید تا با قیمت و جزئیات با شما تماس بگیریم.', // 询价页副标题
  form_name: 'نام',                                            // 姓名
  form_company: 'شرکت',                                        // 公司
  form_email: 'ایمیل',                                         // 邮箱
  form_phone: 'تلفن',                                          // 电话
  form_model: 'مدل موردنظر',                                   // 感兴趣的型号
  form_model_placeholder: '— یک مدل انتخاب کنید —',            // 型号下拉占位
  form_quantity: 'تعداد',                                      // 数量
  form_message: 'پیام',                                        // 留言
  form_submit: 'ارسال درخواست',                                // 提交按钮
  form_success: 'متشکریم! درخواست شما ثبت شد (نسخه نمایشی — هنوز ایمیلی ارسال نمی‌شود).', // 提交后占位提示

  // ===== 参数标签（spec_ 开头）=====
  // 说明：这些是参数表里“字段名”的翻译。参数的“数值”（如 11.22hp）不随语言变，直接存在 products.json 里。
  spec_power: 'قدرت',                                          // 功率
  spec_static_thrust_100m: 'نیروی رانش ایستا (۱۰۰ متر)',       // 拉力（海拔 100 米）
  spec_static_thrust_1800m: 'نیروی رانش ایستا (۱۸۰۰ متر)',     // 拉力（海拔 1800 米）
  spec_max_takeoff_weight: 'حداکثر وزن برخاست',                // 最大起飞重量
  spec_recommended_propeller: 'پروانه پیشنهادی',               // 适用螺旋桨规格
  spec_diameter_stroke: 'قطر × کورس',                          // 缸径 × 行程
  spec_displacement: 'حجم موتور',                              // 排量
  spec_weight: 'وزن',                                          // 重量
  spec_crankshaft: 'میل‌لنگ',                                  // 曲轴
  spec_speed_range: 'محدوده دور موتور',                        // 转速范围
  spec_lubrication_ratio: 'نسبت روغن‌کاری',                    // 燃油/润滑比例
  spec_ignition_voltage: 'ولتاژ جرقه',                         // 点火器电压
  spec_generator: 'ژنراتور',                                   // 发电机
  spec_fuel_consumption_carburetor: 'مصرف سوخت (کاربراتور)',   // 油耗（化油器款）
  spec_fuel_consumption_efi: 'مصرف سوخت (انژکتور)',            // 油耗（电喷款）
  spec_dimensions: 'ابعاد (طول×عرض×ارتفاع)',                   // 尺寸（长×宽×高）
  spec_idle_speed: 'دور آرام',                                 // 怠速
  spec_spark_plug_model: 'مدل شمع',                            // 适用火花塞型号
  spec_compression_ratio: 'نسبت تراکم',                        // 压缩比
  spec_main_machine_weight: 'وزن دستگاه اصلی',                 // 主机重量
  spec_exhaust_pipe_weight: 'وزن لوله اگزوز',                  // 排气管重量
  spec_igniter_weight: 'وزن جرقه‌زن',                          // 点火器重量
  spec_ignition: 'سیستم جرقه',                                 // 点火系统
  spec_carburetor_efi: 'کاربراتور / انژکتور',                  // 化油器 / 电喷
  spec_option: 'گزینه‌ها',                                     // 选件
  spec_firing_order: 'ترتیب احتراق',                           // 点火次序
  spec_piston: 'پیستون',                                       // 活塞
  spec_cylinder: 'سیلندر',                                     // 缸体
  spec_engine_stroke: 'کورس موتور',                            // 发动机冲程
  spec_layout_form: 'آرایش',                                   // 布局形式
  spec_starter: 'استارت',                                      // 启动器

  // ===== 特性标签（feature_ 开头）=====
  // 说明：产品卡片上的“亮点标签/徽章”，来自 products.json 里每个型号的 features 列表。
  feature_twin_cylinders: 'دو سیلندر',                         // 双缸
  feature_four_cylinders: 'چهار سیلندر',                       // 四缸
  feature_air_cooled: 'خنک‌کاری هوا',                          // 风冷
  feature_water_cooled: 'خنک‌کاری آبی',                        // 水冷
  feature_two_stroke: 'دو زمانه',                              // 二冲程
  feature_auto_cdi_ignition: 'جرقه خودکار CDI',                // 自动进角 CDI 点火
  feature_dc_cdi_ignition: 'جرقه الکترونیکی CDI جریان مستقیم', // 直流 CDI 电子点火
  feature_solid_state_magneto_ignition: 'جرقه مگنتوی حالت جامد', // 固态磁电机点火
  feature_mixture_lubrication: 'روغن‌کاری مخلوط',              // 混合气润滑
  feature_push_pull_devices: 'دستگاه‌های فشاری و کششی',        // 推式和拉式装置

  // ===== 参数值翻译（specval_ 开头）=====
  // 说明：文字描述型的参数值在 products.json 里存 specval_ token，这里翻译。纯数字+单位的值不走这里。
  specval_three_ball_bearings: 'سه بلبرینگ ساچمه‌ای',                            // 三滚珠轴承
  specval_three_bearing_crankshaft: 'میل‌لنگ سه‌یاتاقانه',                        // 三轴承曲轴
  specval_high_strength_alloy_steel: 'فولاد آلیاژی با استحکام بالا',             // 高强度合金钢
  specval_forging_seven_piece: 'آهنگری، مجموعه هفت‌تکه',                          // 锻造，七件组合体
  specval_dc_cdi_electronic_ignition: 'جرقه الکترونیکی CDI جریان مستقیم',         // 直流CDI电子点火
  specval_cdi_automatic_angle_ignition: 'جرقه CDI با آوانس خودکار',              // CDI自动进角点火器
  specval_carb_allround_choke: 'کاربراتور همه‌کاره با ساسات',                    // 全方位化油器，带阻风门
  specval_carb_two_diaphragm: 'دو کاربراتور دیافراگمی همه‌کاره، بدون ساسات / نازل انژکتور', // 2个薄膜式全方位化油器，不带阻风门/喷油口
  specval_option_starter_24v: 'استارت ۲۴ ولت / استارت برقی اختیاری',             // 启动器 24V/可选配电启动
  specval_option_exhaust_starter_generator: 'لوله اگزوز، استارت، ژنراتور',        // 排气接管 启动器 发电机
  specval_piston_oval_alloy: 'سنگ‌زنی بیضوی، ریخته‌گری آلیاژ آلومینیوم',           // 椭圆形磨削，铝合金铸造
  specval_cylinder_alloy_ceramic: 'ریخته‌گری آلیاژ آلومینیوم، با پوشش سخت سرامیکی نیکل-سیلیکون در دیواره داخلی', // 铝合金铸造，内壁陶瓷镍硅硬化镀层
  specval_two_stroke: 'دو زمانه',                                               // 二冲程
  specval_layout_h_opposed_4: 'افقی مقابل، ۴ سیلندر',                            // 水平对置，4缸
  specval_optional: 'اختیاری',                                                 // 可选件
  specval_firing_opposed_500: 'جرقه همزمان دو سیلندر مقابل، تعویض خودکار در ۵۰۰ دور', // 对置两缸同步点火，500转自动转换
};
