"""Generate a GoDaddy DNS quick-reference card as a PNG image."""
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.font_manager as fm
from matplotlib.patches import FancyBboxPatch, Rectangle, Circle
from matplotlib.patches import FancyArrowPatch
import os

# Register fonts
fm.fontManager.addfont('/usr/share/fonts/truetype/english/Carlito-Regular.ttf')
fm.fontManager.addfont('/usr/share/fonts/truetype/english/Carlito-Bold.ttf')
fm.fontManager.addfont('/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf')

plt.rcParams['font.family'] = 'Carlito'
plt.rcParams['font.sans-serif'] = ['Carlito', 'DejaVu Sans']

# Colors matching the website
BG = "#0f172a"           # slate-900
CARD_BG = "#1e293b"      # slate-800
PRIMARY = "#3b82f6"      # blue-500
PRIMARY_DARK = "#2563eb" # blue-600
ACCENT = "#8b5cf6"       # violet-500
SUCCESS = "#10b981"      # emerald-500
WARNING = "#f59e0b"      # amber-500
TEXT = "#f1f5f9"         # slate-100
MUTED = "#94a3b8"        # slate-400
CODE_BG = "#0f172a"
BORDER = "#334155"       # slate-700

OUTPUT = "/home/z/my-project/download/sarahman-godaddy-dns-card.png"

fig = plt.figure(figsize=(11, 17), dpi=150, facecolor=BG)
fig.patch.set_facecolor(BG)

# Full-bleed ax
ax = fig.add_axes([0, 0, 1, 1])
ax.set_xlim(0, 11)
ax.set_ylim(0, 17)
ax.axis("off")
ax.set_facecolor(BG)

# ---------- Decorative blobs ----------
for (cx, cy, r, color, alpha) in [
    (1.2, 15.5, 1.8, ACCENT, 0.18),
    (9.8, 14.0, 2.2, PRIMARY, 0.22),
    (0.8, 2.0, 1.6, ACCENT, 0.15),
    (10.0, 4.0, 1.9, PRIMARY, 0.15),
]:
    circle = Circle((cx, cy), r, color=color, alpha=alpha, zorder=0)
    ax.add_patch(circle)

# ---------- Header ----------
ax.text(0.7, 16.2, "SARAHMAN.IN", fontsize=10, color=MUTED, fontweight="bold")
ax.text(10.3, 16.2, "GODADDY DNS SETUP", fontsize=10, color=MUTED, fontweight="bold", ha="right")

ax.text(0.7, 15.5, "Connect sarahman.in", fontsize=32, color=TEXT, fontweight="bold")
ax.text(0.7, 14.85, "to Vercel via GoDaddy", fontsize=32, color="#60a5fa", fontweight="bold")

ax.text(0.7, 14.25, "Keep this open while you do the DNS step. ~10 minutes.", fontsize=12, color=MUTED, style="italic")

# ---------- DNS Records Card (the key info) ----------
card_y = 11.0
card_h = 2.7
card = FancyBboxPatch(
    (0.7, card_y), 9.6, card_h,
    boxstyle="round,pad=0.02,rounding_size=0.15",
    facecolor=CARD_BG, edgecolor=PRIMARY, linewidth=2, zorder=2,
)
ax.add_patch(card)

# Header bar
header_bar = Rectangle(
    (0.7, card_y + card_h - 0.55), 9.6, 0.55,
    facecolor=PRIMARY, edgecolor="none", zorder=3,
)
ax.add_patch(header_bar)
# Round the top corners by overlaying — matplotlib FancyBbox already rounds, but header bar is sharp. Add small mask circles at top corners of header
ax.text(0.95, card_y + card_h - 0.27, "DNS RECORDS TO ADD IN GODADDY", fontsize=11, color="white", fontweight="bold", zorder=4)

# Two records side by side
rec_y = card_y + 0.4

# Record 1: A record
ax.text(1.0, rec_y + 1.65, "RECORD 1 — A record (for sarahman.in)", fontsize=10, color="#60a5fa", fontweight="bold", zorder=4)

# Table headers
headers = ["Type", "Name", "Value", "TTL"]
x_pos = [1.0, 2.2, 3.5, 7.3]
for i, h in enumerate(headers):
    ax.text(x_pos[i], rec_y + 1.3, h, fontsize=8, color=MUTED, fontweight="bold", zorder=4)

# Row
ax.text(x_pos[0], rec_y + 0.95, "A", fontsize=11, color=TEXT, fontweight="bold", family="DejaVu Sans Mono", zorder=4)
ax.text(x_pos[1], rec_y + 0.95, "@", fontsize=11, color=TEXT, fontweight="bold", family="DejaVu Sans Mono", zorder=4)
ax.text(x_pos[2], rec_y + 0.95, "76.76.21.21", fontsize=11, color=SUCCESS, fontweight="bold", family="DejaVu Sans Mono", zorder=4)
ax.text(x_pos[3], rec_y + 0.95, "1 Hour", fontsize=11, color=TEXT, family="DejaVu Sans Mono", zorder=4)

# Divider
ax.plot([1.0, 10.0], [rec_y + 0.55, rec_y + 0.55], color=BORDER, linewidth=0.5, zorder=4)

# Record 2: CNAME
ax.text(1.0, rec_y + 0.25, "RECORD 2 — CNAME record (for www.sarahman.in)", fontsize=10, color="#60a5fa", fontweight="bold", zorder=4)

# Row
ax.text(x_pos[0], rec_y - 0.10, "CNAME", fontsize=11, color=TEXT, fontweight="bold", family="DejaVu Sans Mono", zorder=4)
ax.text(x_pos[1], rec_y - 0.10, "www", fontsize=11, color=TEXT, fontweight="bold", family="DejaVu Sans Mono", zorder=4)
ax.text(x_pos[2], rec_y - 0.10, "cname.vercel-dns.com", fontsize=10, color=SUCCESS, fontweight="bold", family="DejaVu Sans Mono", zorder=4)
ax.text(x_pos[3], rec_y - 0.10, "1 Hour", fontsize=11, color=TEXT, family="DejaVu Sans Mono", zorder=4)

# ---------- GoDaddy step-by-step ----------
ax.text(0.7, 10.4, "GoDaddy — step by step", fontsize=20, color=TEXT, fontweight="bold")

steps = [
    ("1", "Log in", "Go to godaddy.com → click Sign In (top right) → log in with the email and password you used to buy sarahman.in."),
    ("2", "Open your domains", "Hover over your username (top right) → click 'My Products'. Scroll down to the 'Domains' section."),
    ("3", "Find sarahman.in", "In the Domains list, locate 'sarahman.in'. Click the 'DNS' button next to it (or the three dots → Manage DNS)."),
    ("4", "Add the A record", "On the DNS Management page, click 'Add Record'. Set Type=A, Name=@, Value=76.76.21.21, TTL=1 Hour. Click Save."),
    ("5", "Add the CNAME record", "Click 'Add Record' again. Set Type=CNAME, Name=www, Value=cname.vercel-dns.com, TTL=1 Hour. Click Save."),
    ("6", "Delete old parking records", "If you see existing A records for @ pointing to GoDaddy's parking page (e.g. 50.63.202.x), delete them — keep only your new Vercel one."),
    ("7", "Wait for propagation", "Go to dnschecker.org → type sarahman.in → Search. When you see green checkmarks worldwide (5–60 min), you're live."),
]

y = 9.8
for num, title, body in steps:
    # Number circle
    circle = Circle((1.0, y), 0.28, facecolor=PRIMARY, edgecolor="none", zorder=3)
    ax.add_patch(circle)
    ax.text(1.0, y, num, fontsize=14, color="white", fontweight="bold", ha="center", va="center", zorder=4)

    # Title
    ax.text(1.5, y + 0.05, title, fontsize=13, color=TEXT, fontweight="bold", va="center", zorder=3)

    # Body (wrap manually)
    # Split body into lines if too long
    max_chars = 75
    words = body.split()
    lines = []
    current = ""
    for w in words:
        if len(current) + len(w) + 1 <= max_chars:
            current = (current + " " + w).strip()
        else:
            lines.append(current)
            current = w
    if current:
        lines.append(current)

    line_y = y - 0.32
    for line in lines:
        ax.text(1.5, line_y, line, fontsize=10, color=MUTED, va="center", zorder=3)
        line_y -= 0.28

    y = line_y - 0.35

# ---------- Important callout ----------
callout_y = y - 0.1
callout = FancyBboxPatch(
    (0.7, callout_y - 1.2), 9.6, 1.2,
    boxstyle="round,pad=0.02,rounding_size=0.1",
    facecolor="#fef3c7", edgecolor=WARNING, linewidth=2, zorder=2, alpha=0.95,
)
ax.add_patch(callout)

ax.text(0.95, callout_y - 0.25, "!  IMPORTANT — clean up duplicates", fontsize=11, color="#92400e", fontweight="bold", zorder=4)
ax.text(0.95, callout_y - 0.6, "GoDaddy adds default 'parking' A records when you buy a domain. If you don't delete them,", fontsize=9.5, color="#78350f", zorder=4)
ax.text(0.95, callout_y - 0.85, "two A records for @ will conflict and sarahman.in won't load. Keep ONLY the Vercel one (76.76.21.21).", fontsize=9.5, color="#78350f", zorder=4)

# ---------- Footer ----------
ax.text(0.7, 0.5, "sarahman.in · Deployment quick-reference", fontsize=9, color=MUTED)
ax.text(10.3, 0.5, "Vercel + GoDaddy · v1.0", fontsize=9, color=MUTED, ha="right")

plt.savefig(OUTPUT, dpi=150, facecolor=BG, bbox_inches=None, pad_inches=0)
plt.close()

print(f"✓ Quick-reference card saved: {OUTPUT}")
print(f"  Size: {os.path.getsize(OUTPUT) / 1024:.1f} KB")
