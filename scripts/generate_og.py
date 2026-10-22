import os
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = r"c:\Users\chaitu\Downloads\portfolio\my-portfolio"
OUT = os.path.join(ROOT, "public")
PIC_PATH = os.path.join(OUT, "PIC.png")
OG_PATH = os.path.join(OUT, "og.jpg")

W, H = 1200, 630
paper = (244, 242, 238)  # #f4f2ee
ink = (13, 13, 13)       # #0d0d0d
ink_muted = (112, 110, 106)
accent_line = (220, 218, 212)

img = Image.new("RGB", (W, H), paper)
draw = ImageDraw.Draw(img)

# Subtle background framing border
draw.rectangle((24, 24, W - 25, H - 25), outline=accent_line, width=1)
draw.rectangle((28, 28, W - 29, H - 29), outline=(235, 233, 227), width=1)

def font(names, size):
    for name in names:
        try:
            return ImageFont.truetype(name, size)
        except OSError:
            pass
    return ImageFont.load_default()

font_title = font(["arialbd.ttf", "segoeuib.ttf", "DejaVuSans-Bold.ttf"], 68)
font_role = font(["georgiaz.ttf", "timesi.ttf", "georgiai.ttf", "ariali.ttf"], 44)
font_meta = font(["arial.ttf", "segoeui.ttf", "DejaVuSans.ttf"], 24)
font_sub = font(["arial.ttf", "segoeui.ttf", "DejaVuSans.ttf"], 20)
font_mono = font(["consola.ttf", "cour.ttf", "DejaVuSansMono.ttf"], 18)

# Tag on top left
draw.rectangle((72, 80, 240, 114), fill=(230, 227, 220))
draw.text((86, 88), "PORTFOLIO // 2026", font=font_mono, fill=ink_muted)

# Title & Role
draw.text((72, 145), "Chaitanya Kumar", font=font_title, fill=ink)
draw.text((72, 225), "Batchu", font=font_title, fill=ink)

draw.text((72, 320), "Full Stack Developer", font=font_role, fill=ink_muted)

# Company & highlights
draw.line((72, 395, 620, 395), fill=accent_line, width=2)
draw.text((72, 420), "IBM  ·  Client: Nestle, Europe", font=font_meta, fill=ink)
draw.text((72, 465), "Next.js  ·  React  ·  TypeScript  ·  NestJS  ·  PostgreSQL", font=font_sub, fill=ink_muted)
draw.text((72, 510), "4.8 Years Designing Scalable Enterprise Web Apps", font=font_sub, fill=ink_muted)

# Right side: Portrait photo
if os.path.exists(PIC_PATH):
    pic = Image.open(PIC_PATH).convert("RGBA")
    # Make portrait card
    card_w, card_h = 380, 480
    pic = ImageOps.fit(pic, (card_w, card_h), Image.Resampling.LANCZOS)
    
    # Rounded corners mask
    mask = Image.new("L", (card_w, card_h), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.rounded_rectangle((0, 0, card_w, card_h), radius=28, fill=255)
    
    # Shadow under card
    shadow = Image.new("RGBA", (card_w + 24, card_h + 24), (0, 0, 0, 0))
    shadow_draw = ImageDraw.Draw(shadow)
    shadow_draw.rounded_rectangle((12, 12, card_w + 12, card_h + 12), radius=30, fill=(0, 0, 0, 25))
    
    # Position
    pos_x = W - card_w - 80
    pos_y = (H - card_h) // 2
    
    # Paste shadow then card
    img_rgba = img.convert("RGBA")
    img_rgba.paste(shadow, (pos_x - 12, pos_y - 8), shadow)
    img_rgba.paste(pic, (pos_x, pos_y), mask)
    
    # Add subtle border around the photo
    border_img = Image.new("RGBA", (card_w, card_h), (0, 0, 0, 0))
    b_draw = ImageDraw.Draw(border_img)
    b_draw.rounded_rectangle((0, 0, card_w - 1, card_h - 1), radius=28, outline=(220, 218, 212, 255), width=2)
    img_rgba.paste(border_img, (pos_x, pos_y), border_img)
    
    img = img_rgba.convert("RGB")

img.save(OG_PATH, "JPEG", quality=95)
print(f"Successfully generated {OG_PATH} ({W}x{H})")
