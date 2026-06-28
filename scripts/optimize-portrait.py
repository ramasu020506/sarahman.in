"""Optimize portrait photo for web — create multiple sizes."""
from PIL import Image, ImageOps
import os

SRC = "/home/z/my-project/upload/PXL_20250523_082123629.PORTRAIT.jpg"
OUT_DIR = "/home/z/my-project/public/images"
os.makedirs(OUT_DIR, exist_ok=True)

img = Image.open(SRC)
print(f"Source: {img.size} {img.mode}")

# Auto-orient based on EXIF
img = ImageOps.exif_transpose(img)
print(f"After EXIF fix: {img.size}")

# Convert to RGB if needed
if img.mode != "RGB":
    img = Image.convert("RGB")

# Calculate centered 4:5 portrait crop
w, h = img.size
target_ratio = 4 / 5  # 0.8
current_ratio = w / h

if current_ratio > target_ratio:
    # Too wide — crop width
    new_w = int(h * target_ratio)
    left = (w - new_w) // 2
    img = img.crop((left, 0, left + new_w, h))
else:
    # Too tall — crop height
    new_h = int(w / target_ratio)
    top = (h - new_h) // 2
    img = img.crop((0, top, w, top + new_h))

print(f"After crop: {img.size}")

# Generate multiple sizes
sizes = [
    ("portrait-small.webp", 400),
    ("portrait-medium.webp", 800),
    ("portrait-large.webp", 1200),
]

for name, target_w in sizes:
    out_path = os.path.join(OUT_DIR, name)
    resized = img.resize(
        (target_w, int(target_w / 0.8)),
        Image.Resampling.LANCZOS,
    )
    resized.save(out_path, "WEBP", quality=82, method=6)
    size_kb = os.path.getsize(out_path) / 1024
    print(f"  Saved {name}: {resized.size} ({size_kb:.1f} KB)")

# Also save a full-quality JPEG as fallback
jpeg_path = os.path.join(OUT_DIR, "portrait.jpg")
img.resize((800, 1000), Image.Resampling.LANCZOS).save(
    jpeg_path, "JPEG", quality=88, optimize=True, progressive=True
)
print(f"  Saved portrait.jpg: {os.path.getsize(jpeg_path)/1024:.1f} KB")
