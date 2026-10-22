// ============================================================
// 产品数据工具
// products.json 里的参数是“给人看的文字”（如 '49.62 hp / 37 kW'）。
// 图表、对比表、数字动画需要“纯数字”，这里统一负责解析，页面里直接用。
// ★ 只做解析和换算，绝不编造数据：某型号缺哪项参数，这里就返回 null，页面显示“—”。
// ============================================================
import raw from '../data/products.json';

export type Spec = { key: string; value: string };
export type Product = (typeof raw)[number];

export const products: Product[] = raw;

/** 按 key 取某型号的参数原文；没有返回 undefined */
export function specValue(p: Product, key: string): string | undefined {
  return p.specs.find((s) => s.key === key)?.value;
}

/** 取字符串里的第一个数字：'26.5 kg' → 26.5 */
function firstNumber(v?: string): number | null {
  if (!v) return null;
  const m = v.match(/-?\d+(?:\.\d+)?/);
  return m ? Number(m[0]) : null;
}

/** 区间：'1300–7500 rpm' → [1300, 7500] */
function parseRange(v?: string): [number, number] | null {
  if (!v) return null;
  const nums = v.match(/\d+(?:\.\d+)?/g);
  if (!nums || nums.length < 2) return null;
  return [Number(nums[0]), Number(nums[1])];
}

/** 尺寸：'430 × 340 × 400 mm' → [430, 340, 400] */
function parseDims(v?: string): [number, number, number] | null {
  if (!v) return null;
  const nums = v.match(/\d+(?:\.\d+)?/g);
  if (!nums || nums.length < 3) return null;
  return [Number(nums[0]), Number(nums[1]), Number(nums[2])];
}

/** 功率：'49.62 hp / 37 kW' → { hp: 49.62, kw: 37 } */
function parsePower(v?: string): { hp: number | null; kw: number | null } {
  if (!v) return { hp: null, kw: null };
  const hp = v.match(/(\d+(?:\.\d+)?)\s*hp/);
  const kw = v.match(/(\d+(?:\.\d+)?)\s*kW/);
  return { hp: hp ? Number(hp[1]) : null, kw: kw ? Number(kw[1]) : null };
}

export interface Metrics {
  kw: number | null;
  hp: number | null;
  cc: number | null;
  thrust100: number | null;
  thrust1800: number | null;
  mtow: number | null;
  /** 重量（kg）。YT-222CC 只有「主机重量」（单位 g），换算成 kg，并记下用的是哪个参数 */
  weight: number | null;
  weightKey: 'weight' | 'main_machine_weight' | null;
  rpm: [number, number] | null;
  idle: number | null;
  fuelCarb: number | null;
  fuelEfi: number | null;
  dims: [number, number, number] | null;
}

export function metrics(p: Product): Metrics {
  const power = parsePower(specValue(p, 'power'));
  let weight = firstNumber(specValue(p, 'weight'));
  let weightKey: Metrics['weightKey'] = weight !== null ? 'weight' : null;
  if (weight === null) {
    const main = specValue(p, 'main_machine_weight');
    const n = firstNumber(main);
    if (n !== null) {
      weight = main && /\bg\b/.test(main) && !/kg/.test(main) ? n / 1000 : n;
      weightKey = 'main_machine_weight';
    }
  }
  return {
    kw: power.kw,
    hp: power.hp,
    cc: firstNumber(specValue(p, 'displacement')),
    thrust100: firstNumber(specValue(p, 'static_thrust_100m')),
    thrust1800: firstNumber(specValue(p, 'static_thrust_1800m')),
    mtow: firstNumber(specValue(p, 'max_takeoff_weight')),
    weight,
    weightKey,
    rpm: parseRange(specValue(p, 'speed_range')),
    idle: firstNumber(specValue(p, 'idle_speed')),
    fuelCarb: firstNumber(specValue(p, 'fuel_consumption_carburetor')),
    fuelEfi: firstNumber(specValue(p, 'fuel_consumption_efi')),
    dims: parseDims(specValue(p, 'dimensions')),
  };
}

/** 整条产品线的范围（用于图表比例尺、“全系 8.25–47.3 kW”之类的汇总） */
export function lineupStats() {
  const all = products.map(metrics);
  const pick = (f: (m: Metrics) => number | null) =>
    all.map(f).filter((v): v is number => v !== null);
  const span = (vals: number[]) => [Math.min(...vals), Math.max(...vals)] as [number, number];
  return {
    count: products.length,
    cc: span(pick((m) => m.cc)),
    kw: span(pick((m) => m.kw)),
    thrust: span(pick((m) => m.thrust100)),
    mtow: span(pick((m) => m.mtow)),
    rpmMax: Math.max(...pick((m) => (m.rpm ? m.rpm[1] : null))),
  };
}

/** 卡片上的序号：01、02 … */
export function indexLabel(p: Product): string {
  return String(products.indexOf(p) + 1).padStart(2, '0');
}

/**
 * 透明背景抠图版（scripts/cutout_products.py 生成，已做 AI 超分辨率）
 *   cutout('/images/products/yt-550-2.jpg')        → '/images/products/cutout/yt-550-2.webp'    大图（约 1000px）
 *   cutout('/images/products/yt-550-2.jpg', 'sm')  → '/images/products/cutout/yt-550-2-sm.webp' 小图（520px）
 */
export function cutout(src: string, size: 'lg' | 'sm' = 'lg'): string {
  return src
    .replace('/images/products/', '/images/products/cutout/')
    .replace(/\.jpe?g$/i, size === 'sm' ? '-sm.webp' : '.webp');
}

/** 型号简称（去掉 YT- 前缀和 CC 后缀）：'YT-T350CC' → 'T350' */
export function shortModel(p: Product): string {
  return p.model.replace(/^YT-/, '').replace(/CC$/i, '');
}

// ------------------------------------------------------------
// 详情页参数分组：把 20 多项参数按“性能 / 发动机本体 / 燃油与点火 / 重量与尺寸 / 选件”归类展示。
// 不在列表里的参数自动归入“其它”，保证一项都不会漏显示。
// ------------------------------------------------------------
export const SPEC_GROUPS: { id: string; keys: string[] }[] = [
  {
    id: 'performance',
    keys: ['power', 'static_thrust_100m', 'static_thrust_1800m', 'max_takeoff_weight', 'recommended_propeller', 'speed_range', 'idle_speed'],
  },
  {
    id: 'engine',
    keys: ['displacement', 'diameter_stroke', 'compression_ratio', 'engine_stroke', 'layout_form', 'crankshaft', 'piston', 'cylinder', 'firing_order'],
  },
  {
    id: 'fuel',
    keys: ['lubrication_ratio', 'carburetor_efi', 'fuel_consumption_carburetor', 'fuel_consumption_efi', 'ignition', 'ignition_voltage', 'spark_plug_model', 'generator'],
  },
  {
    id: 'physical',
    keys: ['weight', 'main_machine_weight', 'exhaust_pipe_weight', 'igniter_weight', 'dimensions'],
  },
  {
    id: 'options',
    keys: ['option', 'starter'],
  },
];

export function groupedSpecs(p: Product): { id: string; specs: Spec[] }[] {
  const used = new Set<string>();
  const groups = SPEC_GROUPS.map((g) => {
    const specs = g.keys
      .map((k) => p.specs.find((s) => s.key === k))
      .filter((s): s is Spec => Boolean(s));
    specs.forEach((s) => used.add(s.key));
    return { id: g.id, specs };
  });
  const rest = p.specs.filter((s) => !used.has(s.key));
  if (rest.length) groups.push({ id: 'other', specs: rest });
  return groups.filter((g) => g.specs.length > 0);
}
