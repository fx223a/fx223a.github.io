# ============================================================
# 产品图处理流水线：AI 超分辨率（放大 2 倍）→ AI 抠图（去白底）→ 透明 WebP（大小两种尺寸）
#
# 为什么需要它：
#   1) 现有产品图是从 PDF 里裁出来的，只有约 450px，详情页大图、高清屏上会发虚。
#      用开源超分辨率模型 Real-ESRGAN 先放大 4 倍再缩到 2 倍（约 900px），边缘更锐利、噪点更少。
#   2) 网站是深色设计，白底照片放上去会是一块块“白方框”。用开源抠图模型 BiRefNet 去掉白底，
#      发动机就能“浮”在深色背景上。
#
# 输出到 public/images/products/cutout/：
#   yt-550-2.webp      大图（最长边约 1000px）：首页展台、详情页大图、放大查看
#   yt-550-2-sm.webp   小图（最长边 520px）：产品卡片、缩略图、下拉菜单
#
# 以后客户给了高清原图：同名覆盖 public/images/products/ 下的 JPG，再跑一次本脚本即可，页面代码不用改。
#   （原图已经够清晰时，可加 --no-upscale 跳过超分辨率）
#
# 运行环境（一次性准备；首次运行会自动下载两个模型，共约 1GB）：
#   python -m venv .venv-cutout
#   .venv-cutout\Scripts\python -m pip install "rembg[cpu]==2.0.85"     （Mac/Linux：.venv-cutout/bin/python）
#   .venv-cutout\Scripts\python scripts/cutout_products.py
#
# 模型与协议（都允许商用）：
#   - Real-ESRGAN x4plus（BSD-3），使用高通 AI Hub 官方导出的 ONNX 版本
#   - BiRefNet（MIT），通过 rembg（MIT）调用
# ============================================================
import os
import sys
import urllib.request
import zipfile
from pathlib import Path

import numpy as np
import onnxruntime as ort
from PIL import Image
from rembg import new_session, remove

ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = ROOT / 'public' / 'images' / 'products'
OUT_DIR = SRC_DIR / 'cutout'
CACHE = Path(os.environ.get('CUTOUT_CACHE', Path.home() / '.cache' / 'engine-site'))
CUTOUT_MODEL = os.environ.get('CUTOUT_MODEL', 'birefnet-general')
ESRGAN_URL = (
    'https://qaihub-public-assets.s3.us-west-2.amazonaws.com/qai-hub-models/models/'
    'real_esrgan_x4plus/releases/v0.65.0/real_esrgan_x4plus-onnx-float.zip'
)

LARGE = 1000      # 大图最长边
SMALL = 520       # 小图最长边
PAD_RATIO = 0.04  # 四周留边比例
ALPHA_FLOOR = 0.03


# ------------------------------------------------------------
# 1) 超分辨率：模型输入固定 128×128，所以把图片切成小块逐块放大再拼回去。
#    每块四周多带 16px “上下文”，拼接时只取中间部分，避免出现接缝。
# ------------------------------------------------------------
def esrgan_session():
    model = CACHE / 'real_esrgan_x4plus-onnx-float' / 'real_esrgan_x4plus.onnx'
    if not model.exists():
        CACHE.mkdir(parents=True, exist_ok=True)
        zip_path = CACHE / 'real_esrgan_x4plus-onnx-float.zip'
        print('Downloading Real-ESRGAN model (~60MB)...')
        urllib.request.urlretrieve(ESRGAN_URL, zip_path)
        zipfile.ZipFile(zip_path).extractall(CACHE)
    return ort.InferenceSession(str(model), providers=['CPUExecutionProvider'])


def upscale_x2(img: Image.Image, sess) -> Image.Image:
    tile, margin = 128, 16
    core = tile - 2 * margin
    arr = np.asarray(img.convert('RGB'), np.float32) / 255.0
    h, w = arr.shape[:2]
    ph, pw = (core - h % core) % core, (core - w % core) % core
    padded = np.pad(arr, ((margin, margin + ph), (margin, margin + pw), (0, 0)), mode='edge')
    out = np.zeros(((h + ph) * 4, (w + pw) * 4, 3), np.float32)
    for y in range(0, h + ph, core):
        for x in range(0, w + pw, core):
            block = np.ascontiguousarray(padded[y:y + tile, x:x + tile].transpose(2, 0, 1)[None])
            res = sess.run(None, {'image': block})[0][0].transpose(1, 2, 0)
            out[y * 4:(y + core) * 4, x * 4:(x + core) * 4] = res[margin * 4:(margin + core) * 4, margin * 4:(margin + core) * 4]
    big = Image.fromarray((np.clip(out[:h * 4, :w * 4], 0, 1) * 255).round().astype(np.uint8))
    # 4 倍结果再缩到 2 倍：比直接用 4 倍更自然，细节也足够
    return big.resize((w * 2, h * 2), Image.LANCZOS)


# ------------------------------------------------------------
# 2) 抠图 + 去白边
# ------------------------------------------------------------
def cutout(img: Image.Image, session) -> Image.Image:
    img = img.convert('RGB')
    mask = remove(img, session=session, only_mask=True)
    a = np.asarray(mask, dtype=np.float32) / 255.0
    a[a < ALPHA_FLOOR] = 0.0

    rgb = np.asarray(img, dtype=np.float32)
    # 照片背景是纯白，边缘半透明像素可以精确“去白边”：观测色 = a·发动机色 + (1-a)·白
    safe_a = np.maximum(a, 1e-3)[..., None]
    fg = np.clip((rgb - (1.0 - a)[..., None] * 255.0) / safe_a, 0, 255)
    fg = np.where(a[..., None] >= 0.98, rgb, fg)  # 不透明区域保持原色

    out = Image.fromarray(np.dstack([fg, a * 255.0]).round().astype(np.uint8), 'RGBA')
    bbox = out.getchannel('A').point(lambda v: 255 if v > 12 else 0).getbbox()
    if bbox:
        out = out.crop(bbox)
    w, h = out.size
    pad = round(max(w, h) * PAD_RATIO)
    canvas = Image.new('RGBA', (w + pad * 2, h + pad * 2), (0, 0, 0, 0))
    canvas.paste(out, (pad, pad))
    return canvas


def fit(img: Image.Image, longest: int) -> Image.Image:
    scale = longest / max(img.size)
    if scale >= 1:
        return img
    return img.resize((round(img.width * scale), round(img.height * scale)), Image.LANCZOS)


def main() -> None:
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    use_upscale = '--no-upscale' not in sys.argv
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    sr = esrgan_session() if use_upscale else None
    session = new_session(CUTOUT_MODEL)
    files = sorted(p for p in SRC_DIR.iterdir() if p.suffix.lower() in ('.jpg', '.jpeg'))
    for path in files:
        if args and path.name not in args:  # 可选：只处理指定文件名，如 yt-550-3.jpg
            continue
        img = Image.open(path)
        if sr is not None:
            img = upscale_x2(img, sr)
        result = cutout(img, session)
        large = fit(result, LARGE)
        small = fit(result, SMALL)
        large.save(OUT_DIR / f'{path.stem}.webp', 'WEBP', quality=86, method=6, exact=True)
        small.save(OUT_DIR / f'{path.stem}-sm.webp', 'WEBP', quality=88, method=6, exact=True)
        # 只打印 ASCII：中文 Windows 控制台是 GBK 编码，打印特殊符号会报错
        print(f'OK  {path.name} -> {large.size[0]}x{large.size[1]} + {small.size[0]}x{small.size[1]}', flush=True)


if __name__ == '__main__':
    main()
