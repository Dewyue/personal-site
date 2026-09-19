"""Light and dark QR cards with avatar in the code. Does not overwrite qr-card.png."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parents[1]
QR_LIGHT = ROOT / "public" / "qr-site.png"
AVATAR_SRC = ROOT / "public" / "avatar.webp"
FONT = "/System/Library/Fonts/PingFang.ttc"

W, H = 1080, 1360

LIGHT = {
	"out": ROOT / "public" / "qr-card-light.png",
	"bg": (255, 255, 255),
	"title": (29, 29, 31),
	"muted": (110, 110, 115),
	"dim": (142, 142, 147),
	"line": (210, 210, 215),
	"pad": (255, 255, 255),
	"qr": QR_LIGHT,
	"invert_avatar": False,
}


def font(size: int, index: int) -> ImageFont.FreeTypeFont:
	return ImageFont.truetype(FONT, size, index=index)


def center_x(draw: ImageDraw.ImageDraw, text: str, y: int, f: ImageFont.FreeTypeFont, fill) -> None:
	bbox = draw.textbbox((0, 0), text, font=f)
	x = (W - (bbox[2] - bbox[0])) / 2
	draw.text((x, y), text, font=f, fill=fill)


def avatar_mark(size: int, invert: bool) -> Image.Image:
	im = Image.open(AVATAR_SRC).convert("RGB")
	if invert:
		im = ImageOps.invert(im)
	return im.resize((size, size), Image.Resampling.LANCZOS)


def with_center_mark(qr: Image.Image, mark: Image.Image, pad_color: tuple[int, int, int]) -> Image.Image:
	pad = 16
	box = mark.width + pad * 2
	plate = Image.new("RGB", (box, box), pad_color)
	plate.paste(mark, (pad, pad))
	x = (qr.width - box) // 2
	y = (qr.height - box) // 2
	qr.paste(plate, (x, y))
	return qr


def render(theme: dict) -> None:
	img = Image.new("RGB", (W, H), theme["bg"])
	draw = ImageDraw.Draw(img)

	sc_light = font(22, 11)
	sc_semi = font(92, 8)
	sc_reg = font(28, 2)
	sc_med = font(26, 5)
	en_med = font(30, 5)

	center_x(draw, "扫码访问", 96, sc_light, theme["dim"])
	center_x(draw, "王悦", 152, sc_semi, theme["title"])
	center_x(draw, "Dewy", 258, en_med, theme["muted"])

	qr_size = 560
	qr = Image.open(theme["qr"]).convert("RGB").resize((qr_size, qr_size), Image.Resampling.NEAREST)
	qr = with_center_mark(qr, avatar_mark(int(qr_size * 0.20), theme["invert_avatar"]), theme["pad"])

	frame = 28
	plate_size = qr_size + frame * 2
	plate_x = (W - plate_size) // 2
	plate_y = 348
	draw.rounded_rectangle(
		(plate_x, plate_y, plate_x + plate_size, plate_y + plate_size),
		radius=36,
		outline=theme["line"],
		width=1,
	)
	img.paste(qr, (plate_x + frame, plate_y + frame))

	center_x(draw, "dewyue.com", 1072, sc_med, theme["title"])
	center_x(draw, "FDE · AI Native 设计工程", 1128, sc_reg, theme["muted"])
	center_x(draw, "扫码直达个人主页", 1180, sc_light, theme["dim"])

	img.save(theme["out"], "PNG", optimize=True)
	print(f"wrote {theme['out'].relative_to(ROOT)} {img.size}")


def render_plain() -> Image.Image:
	qr_size = 1024
	margin = 96
	qr = Image.open(QR_LIGHT).convert("RGB").resize((qr_size, qr_size), Image.Resampling.NEAREST)
	qr = with_center_mark(qr, avatar_mark(int(qr_size * 0.20), False), (255, 255, 255))
	canvas = Image.new("RGB", (qr_size + margin * 2, qr_size + margin * 2), (255, 255, 255))
	canvas.paste(qr, (margin, margin))
	return canvas


def main() -> None:
	render(LIGHT)
	plain = render_plain()
	plain_path = ROOT / "public" / "qr-plain.png"
	plain.save(plain_path, "PNG", optimize=True)
	print(f"wrote {plain_path.relative_to(ROOT)} {plain.size}")


if __name__ == "__main__":
	main()
