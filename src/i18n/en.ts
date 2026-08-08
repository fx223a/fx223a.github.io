// ============================================================
// 英语(en) 翻译文件
// 改文字时，只改每行冒号“:”右边引号里的内容，注释和 key 不要动。
// 注意：这份文件的 key（冒号左边）必须和 ru.ts 完全一致，只有右边的文字不同。
// ============================================================
export default {
  // ===== 品牌 / 通用 =====
  site_name: '【待填·公司名】',                        // ⚠️占位：公司名/品牌名，见 CONTENT-TODO A1（上线前必须替换）
  site_tagline: 'Two-stroke aircraft engines',       // 品牌标语（真实产品定位；可按 CONTENT-TODO A3 调整）

  // ===== 顶部导航栏 =====
  nav_home: 'Home',                                  // 导航：首页
  nav_products: 'Products',                          // 导航：产品列表
  nav_inquiry: 'Request a Quote',                    // 导航：询价

  // ===== 语言切换器 =====
  language_label: 'Language',                        // “语言”文字标签

  // ===== 首页：顶部大区块(hero) =====（已按真实产品重写）
  home_hero_title: 'Two-stroke aircraft engines, 120cc–730cc', // 首页大标题
  home_hero_subtitle: 'Twin- and four-cylinder, air- and water-cooled engines for UAVs and light aircraft — with matched propellers, static thrust and take-off-weight data.', // 首页副标题
  home_hero_cta: 'Browse engines',                   // 首页主按钮

  // ===== 首页：主力型号展示区 =====
  home_featured_title: 'Featured engines',           // 板块标题
  home_featured_subtitle: 'A selection from our lineup — full specifications on each model page.', // 板块副标题
  home_view_all: 'View all engines',                 // “查看全部型号”按钮

  // ===== 首页：为什么选择我们（真实产品优势）=====
  home_why_title: 'Why choose our engines',          // 板块标题
  home_strength_range_title: 'Full power range',                                   // 优势1标题
  home_strength_range_text: 'A complete lineup from 120cc to 730cc, from light to heavy take-off weights.', // 优势1正文
  home_strength_config_title: 'Multiple configurations',                           // 优势2标题
  home_strength_config_text: 'Twin- and four-cylinder, air- or water-cooled — matched to your airframe.', // 优势2正文
  home_strength_fuel_title: 'Carburetor or EFI',                                   // 优势3标题
  home_strength_fuel_text: 'Carburetor and electronic fuel injection (EFI) versions available on most models.', // 优势3正文

  // ===== 首页：其它板块标题（正文为占位，见 CONTENT-TODO）=====
  home_about_title: 'About us',                      // 关于我们
  home_factory_title: 'Manufacturing',              // 工厂与产能
  home_cert_title: 'Quality & certifications',       // 质量与资质
  home_applications_title: 'Applications',           // 应用场景
  home_contact_title: 'Get a quote',                 // 联系/询价引导
  home_contact_text: 'Tell us your airframe and target take-off weight — we will recommend a model.', // 询价引导正文

  // ===== 页脚 =====
  footer_contact_title: 'Contact',                   // 页脚联系区标题
  footer_rights: 'All rights reserved.',             // 页脚版权：保留所有权利

  // ===== 产品列表页：页面文字 =====
  products_title: 'Our engines',                     // 产品列表页大标题
  products_intro: 'Two-stroke aircraft engines from 120cc to 730cc, air- and water-cooled.', // 产品列表页副标题
  label_cylinders: 'cylinders',                      // 缸数单位词（如“2 cylinders”）
  product_image_alt: 'two-stroke aircraft engine',   // 产品图 alt：与型号名组合，如“ZT-T120 — two-stroke aircraft engine”
  view_details: 'View details',                      // 列表卡片：查看详情

  // ===== 询价表单页 =====
  inquiry_title: 'Request a Quote',                  // 询价页大标题
  inquiry_intro: 'Fill in the form and we will get back to you with a price and details.', // 询价页副标题
  form_name: 'Name',                                 // 表单字段：姓名
  form_company: 'Company',                           // 表单字段：公司
  form_email: 'Email',                               // 表单字段：邮箱
  form_phone: 'Phone',                               // 表单字段：电话
  form_model: 'Model of interest',                   // 表单字段：感兴趣的型号
  form_model_placeholder: '— Select a model —',      // 型号下拉的占位提示
  form_quantity: 'Quantity',                         // 表单字段：数量
  form_message: 'Message',                           // 表单字段：留言
  form_submit: 'Send request',                       // 提交按钮
  form_success: 'Thank you! Your request has been recorded (demo only — no email is sent yet).', // 提交后的占位提示

  // ===== 参数标签（spec_ 开头）=====
  // 说明：这些是参数表里“字段名”的翻译。参数的“数值”（如 11.22hp）不随语言变，直接存在 products.json 里。
  spec_power: 'Power',                               // 功率
  spec_static_thrust_100m: 'Static thrust (100 m)',  // 拉力（海拔 100 米）
  spec_static_thrust_1800m: 'Static thrust (1800 m)',// 拉力（海拔 1800 米）
  spec_max_takeoff_weight: 'Max take-off weight',    // 最大起飞重量
  spec_recommended_propeller: 'Recommended propeller',// 适用螺旋桨规格
  spec_diameter_stroke: 'Diameter × Stroke',         // 缸径 × 行程
  spec_displacement: 'Displacement',                 // 排量
  spec_weight: 'Weight',                             // 重量
  spec_crankshaft: 'Crankshaft',                     // 曲轴
  spec_speed_range: 'Speed range',                   // 转速范围
  spec_lubrication_ratio: 'Lubrication ratio',       // 燃油/润滑比例
  spec_ignition_voltage: 'Ignition voltage',         // 点火器电压
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
  spec_engine_stroke: 'Engine stroke',               // 发动机冲程
  spec_layout_form: 'Layout',                        // 布局形式
  spec_starter: 'Starter',                           // 启动器

  // ===== 特性标签（feature_ 开头）=====
  // 说明：产品卡片上的“亮点标签/徽章”，来自 products.json 里每个型号的 features 列表。
  feature_twin_cylinders: 'Twin cylinders',          // 双缸
  feature_four_cylinders: 'Four cylinders',          // 四缸
  feature_air_cooled: 'Air-cooled',                  // 风冷
  feature_water_cooled: 'Water-cooled',              // 水冷
  feature_two_stroke: 'Two-stroke',                  // 二冲程
  feature_auto_cdi_ignition: 'Automatic CDI ignition', // 自动进角 CDI 点火
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
  specval_cdi_automatic_angle_ignition: 'CDI automatic angle ignition',  // CDI自动进角点火器
  specval_carb_allround_choke: 'All-round carburettor with choke',       // 全方位化油器，带阻风门
  specval_carb_two_diaphragm: 'Two diaphragm-type all-around carburetors, without choke / injector nozzles', // 2个薄膜式全方位化油器，不带阻风门/喷油口
  specval_option_starter_24v: 'Starter 24V / optional electric start',   // 启动器 24V/可选配电启动
  specval_option_exhaust_starter_generator: 'Exhaust pipe, starter, generator', // 排气接管 启动器 发电机
  specval_piston_oval_alloy: 'Oval grinding, aluminum alloy casting',    // 椭圆形磨削，铝合金铸造
  specval_cylinder_alloy_ceramic: 'Cast aluminum alloy, with ceramic nickel-silicon hardened coating on the inner wall', // 铝合金铸造，内壁陶瓷镍硅硬化镀层
  specval_two_stroke: 'Two-stroke',                                      // 二冲程
  specval_layout_h_opposed_4: 'Horizontally opposed, 4 cylinders',       // 水平对置，4缸
  specval_optional: 'Optional',                                          // 可选件
  specval_firing_opposed_500: 'Opposed two-cylinder synchronous ignition, automatic switching at 500 rpm', // 对置两缸同步点火，500转自动转换
};
