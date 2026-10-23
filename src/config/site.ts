// ============================================================
// 站点级配置常量：公司品牌、联系方式（全部为客户/用户提供的真实信息）
// 询价流程：优先引导客户到 WhatsApp 私聊（价格不放网站，聊天里谈）。
// 改联系方式只改这个文件，全站（页眉、页脚、询价页、打印参数单、结构化数据）自动更新。
// ============================================================

// 公司品牌与工厂数据（2026-10-23 用户提供）
// - YT = 远拓：产品型号前缀 YT-xxx 就是这个品牌。显示在 Logo、首页顶部小标签、“为什么选择 YT”、
//   “关于 YT”名片、页脚、结构化数据（JSON-LD）。
// - nameLatin 是“远拓”的汉语拼音；如果营业执照上有正式英文公司名，改这里即可，全站自动更新。
// - monthlyOutput：月产量 1000 台以上（显示为“1,000+”），首页大数字、工厂实力卡片、产品页顶部都读这里。
//   分享预览图（scripts/make-og.mjs）里是写死的同一数字，改这里时记得一起改并重跑 npm run images:og。
export const COMPANY = {
  brand: 'YT',
  nameZh: '远拓',
  nameLatin: 'Yuantuo',
  monthlyOutput: 1000,
};

// 公司主联系方式（客户 2026-08-08 提供）
export const CONTACT = {
  // 主号联系人：用户的外贸名（2026-10-23 用户确认：主号 WhatsApp/Telegram 和邮箱就是 Allen 本人在用）。
  // 显示位置：询价页首张卡片（即主号 WhatsApp 卡片）、全站页脚、详情页打印参数单、结构化数据。
  // 不放进下面的 SALES：同一号码若再单独做一张卡片，页面上会重复出现。
  person: 'Allen',
  // WhatsApp 官方私聊短链（客户提供）
  whatsappLink: 'https://wa.me/message/6XD3Z2WOCRP4L1',
  // 展示用号码（WhatsApp 与 Telegram 同号）
  phoneDisplay: '+86 157 0518 6291',
  // 纯数字号码：用于 wa.me/<号码>?text=... 预填询价消息
  phoneDigits: '8615705186291',
  // Telegram 按号码直达链接
  telegramLink: 'https://t.me/+8615705186291',
  // 业务邮箱
  email: 'fashe250598617@163.com',
};

// 销售人员（2026-10-23 用户提供）。只有 WhatsApp 和邮箱，没有 Telegram。
// 显示位置：询价页“销售人员”卡片（带二维码，排在 Allen 的主号卡片之后）、全站页脚、详情页打印参数单、结构化数据。
// 以后加销售人员（有自己的号码）：在数组里照格式再加一项即可。
export const SALES = [
  {
    name: 'Adalind',
    phoneDisplay: '+86 177 0514 3104',
    phoneDigits: '8617705143104',
    whatsappLink: 'https://wa.me/8617705143104',
    email: 'Chris.uavengine@gmail.com', // 按用户提供原样填写
  },
];
