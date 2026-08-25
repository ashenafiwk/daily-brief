"""Render the app icons as PNG (iOS home-screen needs PNG, not SVG).

Run from the repo root:  python assets/make_icons.py
Draws at 4x then downsamples for clean antialiased edges.
"""
from PIL import Image, ImageDraw

S = 512
X = 4                      # supersample factor
BG     = (13, 17, 23, 255)     # #0d1117
GREEN  = (63, 185, 80, 255)    # #3fb950
GOLD   = (210, 153, 34, 255)   # #d29922


def draw_icon(size, rounded=True):
    n = size * X
    img = Image.new("RGBA", (n, n), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    radius = int(n * 112 / 512) if rounded else 0
    d.rounded_rectangle([0, 0, n - 1, n - 1], radius=radius, fill=BG)

    def pt(x, y):
        return (x / 512 * n, y / 512 * n)

    w = int(30 / 512 * n)

    # rising trend line
    d.line([pt(96, 340), pt(176, 260), pt(240, 300), pt(336, 176)],
           fill=GREEN, width=w, joint="curve")
    # arrow head
    d.line([pt(286, 168), pt(350, 168), pt(350, 232)],
           fill=GREEN, width=w, joint="curve")
    # round the caps by hand
    for c in (pt(96, 340), pt(336, 176), pt(286, 168), pt(350, 232)):
        r = w / 2
        d.ellipse([c[0] - r, c[1] - r, c[0] + r, c[1] + r], fill=GREEN)

    # accent dot
    cx, cy = pt(392, 368)
    r = 34 / 512 * n
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=GOLD)

    return img.resize((size, size), Image.LANCZOS)


if __name__ == "__main__":
    import os
    here = os.path.dirname(os.path.abspath(__file__))
    for size in (180, 192, 512):
        # maskable icons want the art inside a safe zone, so keep the full
        # square background and let the platform crop the corners
        icon = draw_icon(size, rounded=(size == 180))
        path = os.path.join(here, "icon-%d.png" % size)
        icon.save(path, "PNG", optimize=True)
        print("wrote", path)
