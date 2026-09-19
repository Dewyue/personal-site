"""Compose a branded downloadable QR card. Site display still uses qr-site.svg."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
QR_SRC = ROOT / "public" / "qr-site.png"
OUT = ROOT / "public" / "qr-card.png"
FONT = "/System/Library/Fonts/PingFang.ttc"

W, H = 1080, 1360
INK = (0, 0, 0)
SURFACE = (255, 255, 255)
MUTED = (134, 134, 139)
ACCENT = (76, 134, 255)
FOREGROUND = (245, 245, 247)


def font(size: int, index: int) -> ImageFont.FreeTypeFont:
	return ImageFont.truetype(FONT, size, index=index)


def center_x(draw: ImageDraw.ImageDraw, text: str, y: int, f: ImageFont.FreeTypeFont, fill) -> None:
	bbox = draw.textbbox((0, 0), text, font=f)
	x = (W - (bbox[2] - bbox[0])) / 2
	draw.text((x, y), text, font=f, fill=fill)


def main() -> None:
	img = Image.new("RGB", (W, H), INK)
	draw = ImageDraw.Draw(img)

	sc_light = font(22, 11)
	sc_semi = font(92, 8)
	sc_reg = font(28, 2)
	sc_med = font(26, 5)
	en_med = font(30, 5)

	center_x(draw, "扫码访问", 96, sc_light, ACCENT)
	center_x(draw, "王悦", 152, sc_semi, FOREGROUND)
	center_x(draw, "Dewy", 258, en_med, MUTED)

	bar_w = 36
	draw.rectangle((W / 2 - bar_w / 2, 308, W / 2 + bar_w / 2, 312), fill=ACCENT)

	plate = 680
	plate_x = (W - plate) // 2
	plate_y = 348
	draw.rounded_rectangle(
		(plate_x, plate_y, plate_x + plate, plate_y + plate),
		radius=44,
		fill=SURFACE,
	)

	qr = Image.open(QR_SRC).convert("RGB")
	qr_size = 560
	qr = qr.resize((qr_size, qr_size), Image.Resampling.NEAREST)
	qr_x = plate_x + (plate - qr_size) // 2
	qr_y = plate_y + (plate - qr_size) // 2
	img.paste(qr, (qr_x, qr_y))

	center_x(draw, "dewyue.com", 1072, sc_med, ACCENT)
	center_x(draw, "FDE · AI Native 设计工程", 1128, sc_reg, MUTED)
	center_x(draw, "扫码直达个人主页", 1180, sc_light, MUTED)

	img.save(OUT, "PNG", optimize=True)
	print(f"wrote {OUT.relative_to(ROOT)} {img.size}")


if __name__ == "__main__":
	main()
