// ============================================================
// 中文(zh) 翻译文件
// 用途：主要给中国工程师审阅内容，也可面向中文客户。
// 说明：参数标签(spec_ 开头)直接采用「参数型号.pdf」里厂家资料的原始中文说法，保持一致。
// 中文是从左到右(LTR)，不涉及 RTL；本文件的 key（冒号左边）必须和 en.ts / ru.ts 完全一致。
// ============================================================
export default {
  // ===== 品牌 / 通用 =====
  site_name: '【待填·公司名】',                        // ⚠️占位：公司名/品牌名，见 CONTENT-TODO A1（上线前必须替换）
  site_tagline: '二冲程航空发动机',                    // 品牌标语（真实产品定位；可按 CONTENT-TODO A3 调整）

  // ===== 顶部导航栏 =====
  nav_main_label: '主导航',                           // 主导航区的无障碍标签（页面上不可见，读屏软件用）
  nav_home: '首页',                                  // 导航：首页
  nav_products: '产品',                              // 导航：产品列表
  nav_inquiry: '询价',                               // 导航：询价

  // ===== 语言切换器 =====
  language_label: '语言',                            // “语言”文字标签
  skip_to_content: '跳到主内容',                      // 无障碍跳转链接（键盘 Tab 第一个焦点）

  // ===== 首页：顶部大区块(hero) =====（已按真实产品重写）
  home_hero_title: '二冲程航空发动机，120cc–730cc',   // 首页大标题
  home_hero_subtitle: '双缸/四缸、风冷/水冷发动机，适用于无人机与轻型飞行器——配套螺旋桨、静推力与最大起飞重量数据齐全。', // 首页副标题
  home_hero_cta: '浏览发动机',                        // 首页主按钮

  // ===== 首页：主力型号展示区 =====
  home_featured_title: '主力型号',                    // 板块标题
  home_featured_subtitle: '产品线中的部分型号——点击进入可查看完整参数。', // 板块副标题
  home_view_all: '查看全部型号',                      // “查看全部型号”按钮

  // ===== 首页：为什么选择我们（真实产品优势）=====
  home_why_title: '为什么选择我们的发动机',            // 板块标题
  home_strength_range_title: '全功率覆盖',                              // 优势1标题
  home_strength_range_text: '从 120cc 到 730cc 完整型号线，覆盖从轻型到大起飞重量的需求。', // 优势1正文
  home_strength_config_title: '多种配置',                              // 优势2标题
  home_strength_config_text: '双缸/四缸、风冷/水冷可选——匹配你的机型。', // 优势2正文
  home_strength_fuel_title: '化油器或电喷',                            // 优势3标题
  home_strength_fuel_text: '多数型号提供化油器款与电喷（EFI）款。',      // 优势3正文

  // ===== 首页：其它板块标题（正文为占位，见 CONTENT-TODO）=====
  home_about_title: '关于我们',                       // 关于我们
  home_factory_title: '工厂与产能',                   // 工厂与产能
  home_cert_title: '质量与资质',                      // 质量与资质
  home_applications_title: '应用场景',                // 应用场景
  home_cases_title: '客户与案例',                     // 客户案例（CONTENT-TODO G1/G2）
  home_contact_title: '获取报价',                     // 联系/询价引导
  home_contact_text: '告诉我们你的机型和目标起飞重量，我们会推荐合适型号。', // 询价引导正文

  // ===== 页脚 =====
  footer_contact_title: '联系方式',                   // 页脚联系区标题
  footer_rights: '保留所有权利。',                    // 页脚版权

  // ===== 产品列表页：页面文字 =====
  products_title: '我们的发动机',                     // 产品列表页大标题
  products_intro: '120cc 到 730cc 的二冲程航空发动机，风冷与水冷可选。', // 产品列表页副标题
  label_cylinders: '缸',                             // 缸数单位词（如“2 缸”）
  product_image_alt: '二冲程航空发动机',              // 产品图 alt：与型号名组合，如“ZT-T120 — 二冲程航空发动机”
  view_details: '查看详情',                          // 列表卡片：查看详情

  // ===== 询价表单页 =====
  inquiry_title: '询价',                             // 询价页大标题
  inquiry_intro: '填写下面的表单，我们会尽快回复您报价和详情。', // 询价页副标题
  form_name: '姓名',                                 // 姓名
  form_company: '公司',                              // 公司
  form_email: '邮箱',                                // 邮箱
  form_phone: '电话',                                // 电话
  form_model: '感兴趣的型号',                         // 感兴趣的型号
  form_model_placeholder: '— 请选择型号 —',           // 型号下拉占位
  form_quantity: '数量',                             // 数量
  form_message: '留言',                              // 留言
  form_submit: '提交询价',                           // 提交按钮
  form_sending: '发送中…',                           // 提交按钮的进行中状态
  form_success: '谢谢！您的询价已发送，我们会尽快回复您。', // 提交成功提示
  form_error: '提交失败，请稍后重试，或直接通过页脚的联系方式找到我们。', // 提交失败提示
  form_error_network: '网络异常，发送未成功。请检查网络后重试，或直接通过页脚的联系方式找到我们。', // 网络错误提示
  form_required_hint: '带 * 为必填项',                // 必填说明
  form_privacy_note: '我们只会用这些信息回复您的询价。', // 表单底部隐私说明
  inquiry_success_title: '询价已发送',                // 无 JS 成功页标题
  inquiry_success_body: '感谢您的询价！我们会尽快通过邮箱或电话回复您。', // 无 JS 成功页正文
  inquiry_success_back: '返回首页',                   // 无 JS 成功页返回链接

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
