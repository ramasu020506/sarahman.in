"""
Deployment Guide PDF for sarahman.in
Clean, practical step-by-step guide for deploying the Next.js site to Vercel
and connecting the sarahman.in domain.
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import cm, mm
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, KeepTogether, ListFlowable, ListItem, HRFlowable,
)
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import os

# Register fonts
FONT_DIR = "/usr/share/fonts/truetype/english"
try:
    pdfmetrics.registerFont(TTFont("Tinos", f"{FONT_DIR}/Tinos-Regular.ttf"))
    pdfmetrics.registerFont(TTFont("Tinos-Bold", f"{FONT_DIR}/Tinos-Bold.ttf"))
    pdfmetrics.registerFont(TTFont("Tinos-Italic", f"{FONT_DIR}/Tinos-Italic.ttf"))
    pdfmetrics.registerFontFamily("Tinos", normal="Tinos", bold="Tinos-Bold", italic="Tinos-Italic")
    BODY_FONT = "Tinos"
    BODY_BOLD = "Tinos-Bold"
    BODY_ITALIC = "Tinos-Italic"
except Exception:
    BODY_FONT = "Times-Roman"
    BODY_BOLD = "Times-Bold"
    BODY_ITALIC = "Times-Italic"

try:
    pdfmetrics.registerFont(TTFont("Carlito", f"{FONT_DIR}/Carlito-Regular.ttf"))
    pdfmetrics.registerFont(TTFont("Carlito-Bold", f"{FONT_DIR}/Carlito-Bold.ttf"))
    pdfmetrics.registerFontFamily("Carlito", normal="Carlito", bold="Carlito-Bold")
    SANS_FONT = "Carlito"
    SANS_BOLD = "Carlito-Bold"
except Exception:
    SANS_FONT = "Helvetica"
    SANS_BOLD = "Helvetica-Bold"

try:
    pdfmetrics.registerFont(TTFont("Mono", "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"))
    pdfmetrics.registerFont(TTFont("Mono-Bold", "/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf"))
    MONO_FONT = "Mono"
    MONO_BOLD = "Mono-Bold"
except Exception:
    MONO_FONT = "Courier"
    MONO_BOLD = "Courier-Bold"

# Colors — match the website's blue/purple/indigo palette
PRIMARY = HexColor("#2563eb")      # blue-600
PRIMARY_DARK = HexColor("#1e3a8a") # blue-900
ACCENT = HexColor("#7c3aed")       # purple-600
INK = HexColor("#1e293b")          # slate-800
MUTED = HexColor("#64748b")        # slate-500
LIGHT = HexColor("#f1f5f9")        # slate-100
BORDER = HexColor("#e2e8f0")       # slate-200
SUCCESS = HexColor("#10b981")      # emerald-500
CODE_BG = HexColor("#1e293b")      # slate-800
CODE_FG = HexColor("#e2e8f0")      # slate-200

OUTPUT = "/home/z/my-project/download/sarahman-deployment-guide.pdf"

# ---------- Page header/footer ----------
def header_footer(canv, doc):
    canv.saveState()
    page_num = canv.getPageNumber()
    width, height = A4

    if page_num > 1:
        # Header
        canv.setFont(SANS_FONT, 9)
        canv.setFillColor(MUTED)
        canv.drawString(2*cm, height - 1.2*cm, "sarahman.in — Deployment Guide")
        canv.drawRightString(width - 2*cm, height - 1.2*cm, "Syed Abdul Rahman")
        # Header line
        canv.setStrokeColor(BORDER)
        canv.setLineWidth(0.5)
        canv.line(2*cm, height - 1.4*cm, width - 2*cm, height - 1.4*cm)

        # Footer
        canv.setFont(SANS_FONT, 9)
        canv.setFillColor(MUTED)
        canv.drawString(2*cm, 1.2*cm, "Deployment Guide")
        canv.drawRightString(width - 2*cm, 1.2*cm, f"Page {page_num}")
        canv.line(2*cm, 1.4*cm, width - 2*cm, 1.4*cm)
    canv.restoreState()


def cover_page(canv, doc):
    """Draw cover page — only on page 1."""
    canv.saveState()
    width, height = A4

    # Background gradient effect (simulated with rectangles)
    canv.setFillColor(HexColor("#0f172a"))  # slate-900
    canv.rect(0, 0, width, height, fill=1, stroke=0)

    # Decorative blob circles (like the website)
    canv.setFillColor(HexColor("#7c3aed"))
    canv.setFillAlpha(0.15)
    canv.circle(width * 0.15, height * 0.85, 5*cm, fill=1, stroke=0)
    canv.setFillColor(HexColor("#2563eb"))
    canv.setFillAlpha(0.18)
    canv.circle(width * 0.85, height * 0.7, 6*cm, fill=1, stroke=0)
    canv.setFillColor(HexColor("#4f46e5"))
    canv.setFillAlpha(0.12)
    canv.circle(width * 0.7, height * 0.15, 5.5*cm, fill=1, stroke=0)
    canv.setFillAlpha(1)

    # Top brand
    canv.setFont(SANS_BOLD, 10)
    canv.setFillColor(HexColor("#94a3b8"))
    canv.drawString(2*cm, height - 2*cm, "SARAHMAN.IN")
    canv.drawRightString(width - 2*cm, height - 2*cm, "DEPLOYMENT GUIDE")

    # Big title
    canv.setFont(BODY_BOLD, 56)
    canv.setFillColor(white)
    canv.drawString(2*cm, height * 0.62, "Host your")
    canv.drawString(2*cm, height * 0.55, "website on")
    # Gradient text effect (simulated)
    canv.setFillColor(HexColor("#60a5fa"))
    canv.drawString(2*cm, height * 0.48, "sarahman.in")
    canv.setFillColor(white)

    # Subtitle
    canv.setFont(SANS_FONT, 16)
    canv.setFillColor(HexColor("#cbd5e1"))
    canv.drawString(2*cm, height * 0.42, "A step-by-step guide from code to live website")

    # Stats row
    y_stat = height * 0.28
    stats = [
        ("~30 min", "Total time"),
        ("₹0", "Hosting cost"),
        ("Free SSL", "Auto-renewed"),
        ("Auto-deploy", "On every push"),
    ]
    x = 2*cm
    for value, label in stats:
        canv.setFont(BODY_BOLD, 22)
        canv.setFillColor(HexColor("#60a5fa"))
        canv.drawString(x, y_stat, value)
        canv.setFont(SANS_FONT, 9)
        canv.setFillColor(HexColor("#94a3b8"))
        canv.drawString(x, y_stat - 14, label.upper())
        x += 4*cm

    # Bottom strip
    canv.setFont(SANS_FONT, 10)
    canv.setFillColor(HexColor("#64748b"))
    canv.drawString(2*cm, 2.5*cm, "Prepared for")
    canv.setFont(SANS_BOLD, 14)
    canv.setFillColor(white)
    canv.drawString(2*cm, 2*cm, "Syed Abdul Rahman")
    canv.setFont(SANS_FONT, 10)
    canv.setFillColor(HexColor("#94a3b8"))
    canv.drawString(2*cm, 1.5*cm, "AI in Education Consultant · Microsoft Education Specialist")

    canv.drawRightString(width - 2*cm, 2.5*cm, "Version 1.0")
    canv.drawRightString(width - 2*cm, 2*cm, "June 2026")

    canv.restoreState()


# ---------- Styles ----------
styles = getSampleStyleSheet()

H1 = ParagraphStyle(
    "H1", parent=styles["Heading1"],
    fontName=BODY_BOLD, fontSize=22, leading=28,
    textColor=INK, spaceBefore=18, spaceAfter=10,
    keepWithNext=True,
)

H2 = ParagraphStyle(
    "H2", parent=styles["Heading2"],
    fontName=BODY_BOLD, fontSize=15, leading=20,
    textColor=PRIMARY_DARK, spaceBefore=14, spaceAfter=6,
    keepWithNext=True,
)

H3 = ParagraphStyle(
    "H3", parent=styles["Heading3"],
    fontName=SANS_BOLD, fontSize=12, leading=16,
    textColor=INK, spaceBefore=10, spaceAfter=4,
    keepWithNext=True,
)

BODY = ParagraphStyle(
    "Body", parent=styles["BodyText"],
    fontName=BODY_FONT, fontSize=10.5, leading=15,
    textColor=INK, spaceAfter=6, alignment=TA_JUSTIFY,
)

BODY_LEFT = ParagraphStyle(
    "BodyLeft", parent=BODY, alignment=TA_LEFT,
)

CALLOUT = ParagraphStyle(
    "Callout", parent=BODY,
    fontName=BODY_ITALIC, fontSize=10, leading=14,
    textColor=MUTED, leftIndent=12, rightIndent=12,
    spaceBefore=6, spaceAfter=6, alignment=TA_LEFT,
)

CODE_STYLE = ParagraphStyle(
    "Code", parent=styles["Code"],
    fontName=MONO_FONT, fontSize=9, leading=12,
    textColor=CODE_FG, backColor=CODE_BG,
    leftIndent=8, rightIndent=8, spaceBefore=4, spaceAfter=4,
    borderPadding=8, alignment=TA_LEFT,
)

STEP_NUM = ParagraphStyle(
    "StepNum", parent=BODY,
    fontName=BODY_BOLD, fontSize=24, leading=24,
    textColor=PRIMARY, alignment=TA_CENTER,
)

STEP_TITLE = ParagraphStyle(
    "StepTitle", parent=H3,
    fontSize=13, leading=17, spaceBefore=0, spaceAfter=2,
)

STEP_BODY = ParagraphStyle(
    "StepBody", parent=BODY,
    spaceAfter=4,
)

TOC_ITEM = ParagraphStyle(
    "TOC", parent=BODY,
    fontName=SANS_FONT, fontSize=11, leading=18,
    textColor=INK, spaceAfter=2, alignment=TA_LEFT,
)

TOC_NUM = ParagraphStyle(
    "TOCNum", parent=TOC_ITEM,
    fontName=SANS_BOLD, textColor=PRIMARY,
)


def code_block(text):
    """Render a code block with dark background."""
    # Escape XML special chars
    escaped = text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    # Preserve line breaks
    escaped = escaped.replace("\n", "<br/>")
    return Paragraph(escaped, CODE_STYLE)


def callout_box(text, color=LIGHT, border=PRIMARY):
    """Render an info callout box."""
    p = Paragraph(text, ParagraphStyle(
        "CalloutInner", parent=BODY_LEFT,
        fontSize=10, leading=14, textColor=INK,
    ))
    t = Table([[p]], colWidths=[16*cm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), color),
        ("BOX", (0, 0), (-1, -1), 0.5, border),
        ("LEFTPADDING", (0, 0), (-1, -1), 12),
        ("RIGHTPADDING", (0, 0), (-1, -1), 12),
        ("TOPPADDING", (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
    ]))
    return t


def step_block(num, title, body_flowables):
    """Render a numbered step with title and body content."""
    num_cell = Paragraph(f"<b>{num}</b>", STEP_NUM)
    title_p = Paragraph(title, STEP_TITLE)

    # Combine title + body into right column
    body_flow = [title_p] + body_flowables
    right_cell = body_flow

    t = Table(
        [[num_cell, right_cell]],
        colWidths=[1.5*cm, 15*cm],
    )
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("BACKGROUND", (0, 0), (0, 0), LIGHT),
        ("TEXTCOLOR", (0, 0), (0, 0), PRIMARY),
        ("ALIGN", (0, 0), (0, 0), "CENTER"),
        ("TOPPADDING", (0, 0), (0, 0), 8),
        ("BOTTOMPADDING", (0, 0), (0, 0), 8),
        ("TOPPADDING", (1, 0), (1, 0), 6),
        ("BOTTOMPADDING", (1, 0), (1, 0), 6),
        ("LEFTPADDING", (1, 0), (1, 0), 12),
        ("RIGHTPADDING", (1, 0), (1, 0), 6),
        ("LINEBEFORE", (0, 0), (0, 0), 3, PRIMARY),
    ]))
    return KeepTogether([t, Spacer(1, 8)])


def build_story():
    story = []

    # ============ Cover page (rendered by cover_page callback) ============
    # Add a placeholder paragraph to consume page 1
    story.append(Spacer(1, 1))
    story.append(PageBreak())

    # ============ Table of Contents ============
    story.append(Paragraph("Contents", H1))
    story.append(HRFlowable(width="100%", thickness=1, color=PRIMARY, spaceAfter=12))

    toc_items = [
        ("01", "Overview — what we're deploying"),
        ("02", "What you need before you start"),
        ("03", "Step 1 — Push your code to GitHub"),
        ("04", "Step 2 — Create a free Vercel account"),
        ("05", "Step 3 — Deploy your site to Vercel"),
        ("06", "Step 4 — Add sarahman.in in Vercel"),
        ("07", "Step 5 — Update DNS at your domain registrar"),
        ("08", "DNS records for popular Indian registrars"),
        ("09", "Step 6 — Verify and go live"),
        ("10", "After launch — how to update your site"),
        ("11", "Troubleshooting common issues"),
        ("12", "Quick reference — cheat sheet"),
    ]
    for num, title in toc_items:
        t = Table(
            [[Paragraph(num, TOC_NUM), Paragraph(title, TOC_ITEM)]],
            colWidths=[1.2*cm, 14.8*cm],
        )
        t.setStyle(TableStyle([
            ("VALIGN", (0, 0), (-1, -1), "TOP"),
            ("TOPPADDING", (0, 0), (-1, -1), 2),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 2),
            ("LINEBELOW", (0, 0), (-1, -1), 0.3, BORDER),
        ]))
        story.append(t)

    story.append(PageBreak())

    # ============ Section 1: Overview ============
    story.append(Paragraph("01 &nbsp; Overview — what we&rsquo;re deploying", H1))
    story.append(HRFlowable(width="100%", thickness=0.5, color=BORDER, spaceAfter=10))

    story.append(Paragraph(
        "This guide walks you through publishing your personal website — "
        "currently running locally as a Next.js project — to the public "
        "internet at <b>https://sarahman.in</b>. The deployment uses "
        "<b>Vercel</b>, the company that makes Next.js, which offers free "
        "hosting with automatic SSL certificates, global CDN delivery, and "
        "automatic redeploys whenever you update your code. The total "
        "cost is zero rupees per month for a personal site of this size, "
        "and the entire process takes about thirty minutes once you have "
        "your accounts set up.",
        BODY,
    ))

    story.append(Paragraph(
        "Your website is built with Next.js 16, TypeScript, and Tailwind "
        "CSS. It is a single-page site with eight sections — Hero, "
        "Expertise, Book, Impact, Offerings, Experience, Journal, and "
        "Contact — featuring your portrait, your book cover, your "
        "Microsoft certifications, and a working contact form. The site "
        "supports light and dark modes, mobile and desktop layouts, and "
        "loads in under two seconds on a typical 4G connection. All of "
        "this is preserved exactly as you see it in the preview.",
        BODY,
    ))

    story.append(Paragraph("How the pieces fit together", H2))
    story.append(Paragraph(
        "Three services work together to keep sarahman.in online. "
        "<b>GitHub</b> stores your code and tracks every change you make. "
        "<b>Vercel</b> reads your code from GitHub, builds it into a "
        "fast-running website, and serves it to visitors from a global "
        "network of servers. <b>Your domain registrar</b> (wherever you "
        "bought sarahman.in) holds the DNS records that tell browsers "
        "around the world that sarahman.in lives at Vercel. Once "
        "configured, the connection is permanent — you never have to "
        "touch it again unless you change hosting providers.",
        BODY,
    ))

    story.append(callout_box(
        "<b>What you get at the end:</b> A live website at "
        "https://sarahman.in with a free SSL certificate (the padlock "
        "icon), automatic HTTPS, global CDN delivery, and a workflow "
        "where editing a file on GitHub automatically updates your live "
        "site in about sixty seconds.",
        color=HexColor("#eff6ff"), border=PRIMARY,
    ))

    story.append(PageBreak())

    # ============ Section 2: Prerequisites ============
    story.append(Paragraph("02 &nbsp; What you need before you start", H1))
    story.append(HRFlowable(width="100%", thickness=0.5, color=BORDER, spaceAfter=10))

    story.append(Paragraph(
        "Before you begin, make sure you have the following four things "
        "ready. The accounts are all free and take a few minutes each to "
        "create. You do not need to install any software on your "
        "computer — everything happens in the browser.",
        BODY,
    ))

    prereq_data = [
        ["#", "What you need", "Where to get it", "Cost"],
        ["1", "Access to your website code (the project we built together)", "Provided in your workspace", "Free"],
        ["2", "A GitHub account", "https://github.com/signup", "Free"],
        ["3", "A Vercel account (sign up with your GitHub account)", "https://vercel.com/signup", "Free"],
        ["4", "Access to your domain registrar (where you bought sarahman.in)", "Email from when you purchased the domain", "Already paid"],
    ]
    t = Table(prereq_data, colWidths=[0.8*cm, 6*cm, 6.5*cm, 2.7*cm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), PRIMARY),
        ("TEXTCOLOR", (0, 0), (-1, 0), white),
        ("FONTNAME", (0, 0), (-1, 0), SANS_BOLD),
        ("FONTSIZE", (0, 0), (-1, 0), 9.5),
        ("FONTNAME", (0, 1), (-1, -1), SANS_FONT),
        ("FONTSIZE", (0, 1), (-1, -1), 9.5),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN", (0, 0), (0, -1), "CENTER"),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [white, LIGHT]),
        ("GRID", (0, 0), (-1, -1), 0.3, BORDER),
    ]))
    story.append(t)
    story.append(Spacer(1, 12))

    story.append(Paragraph(
        "If you don&rsquo;t already have a GitHub account, create one "
        "using your personal email address (rahman.rjy@outlook.com is "
        "fine). Use a strong password you can remember. When you sign up "
        "for Vercel afterwards, choose the option to <b>Continue with "
        "GitHub</b> — this links the two accounts and is what enables "
        "automatic deploys later.",
        BODY,
    ))

    story.append(callout_box(
        "<b>Not sure where you bought sarahman.in?</b> Check your email "
        "inbox for purchase confirmation from GoDaddy, BigRock, "
        "Hostinger, Namecheap, or another registrar. The email will "
        "contain a link to log in to your domain management dashboard. "
        "If you can&rsquo;t find it, search your inbox for "
        "&lsquo;sarahman.in&rsquo;.",
        color=HexColor("#fef3c7"), border=HexColor("#f59e0b"),
    ))

    story.append(PageBreak())

    # ============ Section 3: Step 1 — Push to GitHub ============
    story.append(Paragraph("03 &nbsp; Step 1 — Push your code to GitHub", H1))
    story.append(HRFlowable(width="100%", thickness=0.5, color=BORDER, spaceAfter=10))

    story.append(Paragraph(
        "GitHub is where your code lives. Vercel reads from GitHub, so "
        "the first step is to upload your project to a new GitHub "
        "repository. This is a one-time setup — once connected, every "
        "future edit you make will sync automatically.",
        BODY,
    ))

    story.append(step_block("1.1", "Create a new repository on GitHub", [
        Paragraph(
            "Go to <b>https://github.com/new</b>. In the <b>Repository "
            "name</b> field, type <font face='%s'>sarahman-in</font>. "
            "Set the visibility to <b>Private</b> (recommended) or "
            "<b>Public</b> — either works for Vercel. Tick "
            "&lsquo;Add a README file&rsquo;. Click <b>Create "
            "repository</b>." % MONO_FONT,
            STEP_BODY,
        ),
    ]))

    story.append(step_block("1.2", "Download your project files", [
        Paragraph(
            "From your workspace, download the entire project folder as "
            "a ZIP file. It should contain the <font face='%s'>src/</font>, "
            "<font face='%s'>public/</font>, and <font face='%s'>prisma/</font> "
            "directories, plus <font face='%s'>package.json</font>, "
            "<font face='%s'>next.config.ts</font>, "
            "<font face='%s'>tsconfig.json</font>, and the other config files." % (MONO_FONT, MONO_FONT, MONO_FONT, MONO_FONT, MONO_FONT, MONO_FONT),
            STEP_BODY,
        ),
    ]))

    story.append(step_block("1.3", "Upload files to GitHub", [
        Paragraph(
            "On your new repository page on GitHub, click "
            "<b>add file &rarr; upload files</b>. Drag and drop the "
            "contents of your project folder (not the folder itself, "
            "the files inside it). Scroll down, type a short commit "
            "message like &lsquo;Initial website&rsquo;, and click "
            "<b>Commit changes</b>.",
            STEP_BODY,
        ),
        Paragraph(
            "If the upload is too large for the web interface, install "
            "<b>GitHub Desktop</b> from desktop.github.com — it&rsquo;s "
            "a free app that lets you drag a folder onto it and syncs "
            "to your repository in one click.",
            STEP_BODY,
        ),
    ]))

    story.append(callout_box(
        "<b>Important:</b> Make sure to upload the <b>contents</b> of "
        "your project folder, not the folder itself. After upload, your "
        "GitHub repository should show <font face='%s'>package.json</font> "
        "directly at the top level — not nested inside another folder." % MONO_FONT,
        color=HexColor("#fef3c7"), border=HexColor("#f59e0b"),
    ))

    story.append(PageBreak())

    # ============ Section 4: Step 2 — Vercel account ============
    story.append(Paragraph("04 &nbsp; Step 2 — Create a free Vercel account", H1))
    story.append(HRFlowable(width="100%", thickness=0.5, color=BORDER, spaceAfter=10))

    story.append(Paragraph(
        "Vercel is the hosting platform. The free Hobby plan is more "
        "than enough for a personal website — it includes unlimited "
        "bandwidth, automatic SSL, global CDN, and 100GB of monthly "
        "bandwidth. You will never be charged for a site of this size.",
        BODY,
    ))

    story.append(step_block("2.1", "Sign up at Vercel", [
        Paragraph(
            "Go to <b>https://vercel.com/signup</b>. Click the "
            "<b>Continue with GitHub</b> button. Authorise Vercel to "
            "access your GitHub account when prompted. This is safe — "
            "Vercel is the company behind Next.js and is trusted by "
            "millions of developers.",
            STEP_BODY,
        ),
    ]))

    story.append(step_block("2.2", "Complete your profile", [
        Paragraph(
            "Enter your name (<b>Syed Abdul Rahman</b>), pick the "
            "<b>Hobby</b> plan (free), and skip the optional questions "
            "about your team. You&rsquo;ll land on the Vercel dashboard "
            "— a clean page that says &lsquo;Your projects&rsquo; with "
            "a button to create a new one.",
            STEP_BODY,
        ),
    ]))

    story.append(Paragraph(
        "That&rsquo;s it — your Vercel account is ready. You do not "
        "need to add a credit card or payment method. The free plan "
        "renews automatically and never expires.",
        BODY,
    ))

    story.append(PageBreak())

    # ============ Section 5: Step 3 — Deploy ============
    story.append(Paragraph("05 &nbsp; Step 3 — Deploy your site to Vercel", H1))
    story.append(HRFlowable(width="100%", thickness=0.5, color=BORDER, spaceAfter=10))

    story.append(Paragraph(
        "This is the step where your site actually goes live on the "
        "internet. Vercel will read your code from GitHub, build it, "
        "and give you a public URL within about sixty seconds.",
        BODY,
    ))

    story.append(step_block("3.1", "Create a new project", [
        Paragraph(
            "On the Vercel dashboard, click <b>Add New&hellip; &rarr; "
            "Project</b>. You&rsquo;ll see a list of your GitHub "
            "repositories. Find <font face='%s'>sarahman-in</font> and "
            "click <b>Import</b> next to it." % MONO_FONT,
            STEP_BODY,
        ),
    ]))

    story.append(step_block("3.2", "Review the build settings", [
        Paragraph(
            "Vercel auto-detects that this is a Next.js project. You "
            "should see &lsquo;Next.js&rsquo; in the Framework Preset "
            "field. Leave everything else at the defaults — do not "
            "change the Build Command, Output Directory, or Install "
            "Command. Vercel knows what to do.",
            STEP_BODY,
        ),
        Paragraph(
            "Scroll down and click the blue <b>Deploy</b> button. "
            "That&rsquo;s it — Vercel takes over from here.",
            STEP_BODY,
        ),
    ]))

    story.append(step_block("3.3", "Wait for the build to finish", [
        Paragraph(
            "You&rsquo;ll see a build log scrolling in real time. The "
            "whole process takes about sixty to ninety seconds. When "
            "it&rsquo;s done, you&rsquo;ll see a screen with confetti "
            "and a list of preview URLs.",
            STEP_BODY,
        ),
        Paragraph(
            "Click the URL that looks like "
            "<font face='%s'>sarahman-in.vercel.app</font> (or similar) "
            "to open your live site in a new tab. Take a moment to "
            "verify everything looks right — the hero, your portrait, "
            "the book cover, the contact form. If anything is broken, "
            "it&rsquo;s usually because a file wasn&rsquo;t uploaded "
            "to GitHub correctly." % MONO_FONT,
            STEP_BODY,
        ),
    ]))

    story.append(callout_box(
        "<b>Your site is now live on the internet!</b> Anyone in the "
        "world can visit your Vercel URL. The next steps connect "
        "sarahman.in to point at this Vercel-hosted site.",
        color=HexColor("#ecfdf5"), border=SUCCESS,
    ))

    story.append(PageBreak())

    # ============ Section 6: Step 4 — Add domain in Vercel ============
    story.append(Paragraph("06 &nbsp; Step 4 — Add sarahman.in in Vercel", H1))
    story.append(HRFlowable(width="100%", thickness=0.5, color=BORDER, spaceAfter=10))

    story.append(Paragraph(
        "Now you tell Vercel that you want sarahman.in (and "
        "www.sarahman.in) to be the public address of your site. "
        "Vercel will then give you the exact DNS records you need to "
        "add at your domain registrar.",
        BODY,
    ))

    story.append(step_block("4.1", "Open project settings", [
        Paragraph(
            "From the Vercel dashboard, click on your "
            "<font face='%s'>sarahman-in</font> project. Click the "
            "<b>Settings</b> tab at the top. In the left sidebar, click "
            "<b>Domains</b>." % MONO_FONT,
            STEP_BODY,
        ),
    ]))

    story.append(step_block("4.2", "Add the apex domain", [
        Paragraph(
            "In the &lsquo;Add a domain&rsquo; field, type "
            "<font face='%s'>sarahman.in</font> and press Enter. Click "
            "<b>Add</b>. Vercel may ask whether to redirect "
            "www.sarahman.in to sarahman.in or vice versa — choose "
            "<b>Redirect www.sarahman.in to sarahman.in</b>." % MONO_FONT,
            STEP_BODY,
        ),
    ]))

    story.append(step_block("4.3", "Copy the DNS records", [
        Paragraph(
            "After adding both domains, Vercel shows a screen with the "
            "DNS records you need to add at your registrar. It will "
            "look something like this:",
            STEP_BODY,
        ),
    ]))

    # DNS records table — typical Vercel setup
    dns_data = [
        ["Type", "Name", "Value", "TTL"],
        ["A", "@", "76.76.21.21", "Auto / 3600"],
        ["CNAME", "www", "cname.vercel-dns.com", "Auto / 3600"],
    ]
    t = Table(dns_data, colWidths=[2*cm, 3.5*cm, 7*cm, 3.5*cm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), PRIMARY),
        ("TEXTCOLOR", (0, 0), (-1, 0), white),
        ("FONTNAME", (0, 0), (-1, 0), SANS_BOLD),
        ("FONTSIZE", (0, 0), (-1, 0), 9.5),
        ("FONTNAME", (0, 1), (-1, -1), MONO_FONT),
        ("FONTSIZE", (0, 1), (-1, -1), 9),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN", (0, 0), (-1, -1), "LEFT"),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [white, LIGHT]),
        ("GRID", (0, 0), (-1, -1), 0.3, BORDER),
    ]))
    story.append(t)
    story.append(Spacer(1, 8))

    story.append(callout_box(
        "<b>Use the exact records Vercel shows you.</b> The IP address "
        "above (76.76.21.21) is Vercel&rsquo;s standard, but always "
        "copy what Vercel displays on your screen — it may differ "
        "slightly. Take a screenshot so you have it handy for the "
        "next step.",
        color=HexColor("#eff6ff"), border=PRIMARY,
    ))

    story.append(PageBreak())

    # ============ Section 7: Step 5 — DNS at registrar ============
    story.append(Paragraph("07 &nbsp; Step 5 — Update DNS at your domain registrar", H1))
    story.append(HRFlowable(width="100%", thickness=0.5, color=BORDER, spaceAfter=10))

    story.append(Paragraph(
        "This is the step that actually connects sarahman.in to your "
        "Vercel-hosted site. You need to log in to wherever you bought "
        "sarahman.in and add the two DNS records from the previous "
        "step. The exact screens differ by registrar, but the process "
        "is the same everywhere.",
        BODY,
    ))

    story.append(step_block("5.1", "Log in to your domain registrar", [
        Paragraph(
            "Open the website of the company where you bought "
            "sarahman.in (GoDaddy, BigRock, Hostinger, Namecheap, etc.). "
            "Log in with the email and password you used when you "
            "purchased the domain. Look for a section called "
            "<b>Domain Management</b>, <b>My Domains</b>, or "
            "<b>DNS Management</b>.",
            STEP_BODY,
        ),
    ]))

    story.append(step_block("5.2", "Find the DNS settings for sarahman.in", [
        Paragraph(
            "Click on sarahman.in in your domain list. Look for a "
            "button or tab labelled <b>DNS</b>, <b>DNS Settings</b>, "
            "<b>Manage DNS</b>, or <b>Zone File</b>. This is where you "
            "add and edit DNS records.",
            STEP_BODY,
        ),
    ]))

    story.append(step_block("5.3", "Add the A record (for sarahman.in)", [
        Paragraph(
            "Click <b>Add Record</b> or <b>Add New Record</b>. Fill "
            "in the fields exactly as shown:",
            STEP_BODY,
        ),
        callout_box(
            "<b>Record Type:</b> A<br/>"
            "<b>Name / Host:</b> @ &nbsp; (the @ symbol means &lsquo;the root domain&rsquo;)<br/>"
            "<b>Value / Points to:</b> 76.76.21.21 &nbsp; (use the IP Vercel gave you)<br/>"
            "<b>TTL:</b> Default / Automatic / 1 Hour",
            color=HexColor("#f0fdf4"), border=SUCCESS,
        ),
        Paragraph("Save the record.", STEP_BODY),
    ]))

    story.append(step_block("5.4", "Add the CNAME record (for www.sarahman.in)", [
        Paragraph(
            "Click <b>Add Record</b> again. Fill in:",
            STEP_BODY,
        ),
        callout_box(
            "<b>Record Type:</b> CNAME<br/>"
            "<b>Name / Host:</b> www<br/>"
            "<b>Value / Points to:</b> cname.vercel-dns.com<br/>"
            "<b>TTL:</b> Default / Automatic / 1 Hour",
            color=HexColor("#f0fdf4"), border=SUCCESS,
        ),
        Paragraph("Save the record.", STEP_BODY),
    ]))

    story.append(step_block("5.5", "Clean up old records (important)", [
        Paragraph(
            "If your registrar already has existing A records pointing "
            "to another host (e.g. a default parking page), you need "
            "to <b>delete or edit</b> them. Two A records with the "
            "same name (@) but different IPs will cause problems. "
            "Keep only the one pointing to Vercel&rsquo;s IP. Same for "
            "any existing www CNAME — replace it, don&rsquo;t add a "
            "duplicate.",
            STEP_BODY,
        ),
    ]))

    story.append(callout_box(
        "<b>DNS propagation:</b> After saving, it can take anywhere "
        "from 5 minutes to 60 minutes for the changes to spread "
        "across the internet. You can check progress at "
        "<b>https://dnschecker.org</b> — type sarahman.in and click "
        "Search. When you see green checkmarks across the world, "
        "you&rsquo;re live.",
        color=HexColor("#fef3c7"), border=HexColor("#f59e0b"),
    ))

    story.append(PageBreak())

    # ============ Section 8: Registrar-specific instructions ============
    story.append(Paragraph("08 &nbsp; DNS records for popular Indian registrars", H1))
    story.append(HRFlowable(width="100%", thickness=0.5, color=BORDER, spaceAfter=10))

    story.append(Paragraph(
        "The DNS records you need to add are the same everywhere — "
        "only the location of the settings page differs. Below are "
        "the specific navigation steps for the four most common "
        "registrars used to buy .in domains. Find your registrar and "
        "follow those steps.",
        BODY,
    ))

    # GoDaddy
    story.append(Paragraph("GoDaddy (godaddy.com)", H2))
    story.append(Paragraph(
        "Log in at godaddy.com. In the top-right, click your username "
        "&rarr; <b>My Products</b>. Scroll to the Domains section, "
        "find sarahman.in, and click <b>DNS</b> next to it. On the "
        "DNS Management page, click <b>Add Record</b>. Add the A "
        "record (Type: A, Name: @, Value: 76.76.21.21, TTL: 1 Hour). "
        "Click Save. Click Add Record again and add the CNAME (Type: "
        "CNAME, Name: www, Value: cname.vercel-dns.com, TTL: 1 Hour). "
        "Click Save. That&rsquo;s it — GoDaddy usually propagates "
        "within 15 minutes.",
        BODY,
    ))

    # BigRock
    story.append(Paragraph("BigRock (bigrock.in)", H2))
    story.append(Paragraph(
        "Log in at bigrock.in. Click <b>Domains</b> in the top menu, "
        "then <b>List All Orders</b>. Click on sarahman.in. On the "
        "domain details page, click the <b>DNS</b> tab, then click "
        "<b>Manage DNS</b>. Click <b>Add Record</b>. For the A record, "
        "select Type A, Host Name @, Destination IPv4 Address "
        "76.76.21.21, TTL 3600. Save. Add another record — Type "
        "CNAME, Host Name www, Destination cname.vercel-dns.com, "
        "TTL 3600. Save. BigRock typically propagates within 30 "
        "minutes.",
        BODY,
    ))

    # Hostinger
    story.append(Paragraph("Hostinger (hostinger.in)", H2))
    story.append(Paragraph(
        "Log in at hpanel.hostinger.in. On the homepage, click "
        "<b>Hosting</b> &rarr; your domain, or click <b>Domains</b> "
        "and select sarahman.in. In the left sidebar, click "
        "<b>DNS / Nameservers</b>. Click <b>Manage DNS records</b>. "
        "Click <b>Add record</b>. For A: Type A, Name @, Points to "
        "76.76.21.21, TTL 3600. Click Save. Add another — Type "
        "CNAME, Name www, Target cname.vercel-dns.com, TTL 3600. "
        "Save. Hostinger propagates within 15&ndash;30 minutes.",
        BODY,
    ))

    # Namecheap
    story.append(Paragraph("Namecheap (namecheap.com)", H2))
    story.append(Paragraph(
        "Log in at namecheap.com. Click <b>Account</b> &rarr; "
        "<b>Domain List</b>. Find sarahman.in and click "
        "<b>Manage</b>. Click the <b>Advanced DNS</b> tab. Under "
        "&lsquo;Host Records&rsquo;, click <b>Add New Record</b>. "
        "For A: Type A Record, Host @, Value 76.76.21.21, TTL Auto. "
        "Save. Add another — Type CNAME Record, Host www, Value "
        "cname.vercel-dns.com, TTL Auto. Save. While you&rsquo;re "
        "here, also delete any default parking-page records "
        "Namecheap added automatically. Namecheap propagates within "
        "30 minutes.",
        BODY,
    ))

    story.append(callout_box(
        "<b>Other registrars:</b> The steps are nearly identical. "
        "Look for &lsquo;DNS&rsquo;, &lsquo;Zone Editor&rsquo;, "
        "&lsquo;DNS Management&rsquo;, or &lsquo;Name Servers&rsquo; "
        "in your registrar&rsquo;s control panel. The two records "
        "you need are always an A record for @ pointing to "
        "76.76.21.21 and a CNAME for www pointing to "
        "cname.vercel-dns.com.",
        color=HexColor("#eff6ff"), border=PRIMARY,
    ))

    story.append(PageBreak())

    # ============ Section 9: Verify ============
    story.append(Paragraph("09 &nbsp; Step 6 — Verify and go live", H1))
    story.append(HRFlowable(width="100%", thickness=0.5, color=BORDER, spaceAfter=10))

    story.append(Paragraph(
        "Once you&rsquo;ve added the DNS records and waited for "
        "propagation, it&rsquo;s time to verify everything works. "
        "Vercel will automatically detect when your DNS is correctly "
        "configured and will issue a free SSL certificate for "
        "sarahman.in within a few minutes.",
        BODY,
    ))

    story.append(step_block("6.1", "Check Vercel domain status", [
        Paragraph(
            "Go back to your Vercel project &rarr; Settings &rarr; "
            "Domains. The status next to sarahman.in should change "
            "from &lsquo;Invalid Configuration&rsquo; (red) to "
            "&lsquo;Valid Configuration&rsquo; (green) once DNS "
            "propagates. The www version should also turn green and "
            "show a small redirect icon.",
            STEP_BODY,
        ),
    ]))

    story.append(step_block("6.2", "Visit sarahman.in in your browser", [
        Paragraph(
            "Open a new browser tab and type <b>https://sarahman.in</b> "
            "in the address bar. Press Enter. Your website should load "
            "with a padlock icon in the address bar — that means SSL "
            "is working and your connection is encrypted. Try "
            "www.sarahman.in too — it should automatically redirect "
            "to sarahman.in without the www.",
            STEP_BODY,
        ),
    ]))

    story.append(step_block("6.3", "Test on mobile and share", [
        Paragraph(
            "Open sarahman.in on your phone (make sure you&rsquo;re "
            "on mobile data, not office Wi-Fi, to test from a "
            "different network). Test the dark mode toggle in the "
            "top-right. Test the mobile menu. Submit the contact "
            "form to make sure the success state appears. Share the "
            "URL with a friend or family member and ask them to "
            "open it — if it loads for them, you&rsquo;re genuinely "
            "live on the public internet.",
            STEP_BODY,
        ),
    ]))

    story.append(callout_box(
        "<b>Congratulations — sarahman.in is now live!</b> Your "
        "website is now reachable from anywhere in the world, with "
        "free SSL, global CDN delivery, and automatic redeploys. "
        "Total monthly cost: ₹0.",
        color=HexColor("#ecfdf5"), border=SUCCESS,
    ))

    story.append(PageBreak())

    # ============ Section 10: After launch ============
    story.append(Paragraph("10 &nbsp; After launch — how to update your site", H1))
    story.append(HRFlowable(width="100%", thickness=0.5, color=BORDER, spaceAfter=10))

    story.append(Paragraph(
        "Once your site is live, updating it is even easier than the "
        "initial setup. Every change you make on GitHub automatically "
        "triggers a new Vercel deploy — typically in under sixty "
        "seconds. You never have to manually redeploy or push to a "
        "server.",
        BODY,
    ))

    story.append(Paragraph("Updating text content (e.g. your bio, services, contact info)", H2))
    story.append(Paragraph(
        "Go to your GitHub repository at "
        "<b>github.com/&lt;your-username&gt;/sarahman-in</b>. Navigate "
        "to the file you want to edit — for example "
        "<font face='%s'>src/components/site/hero.tsx</font> for the "
        "hero text, or "
        "<font face='%s'>src/components/site/contact.tsx</font> for "
        "your email and phone. Click the pencil icon in the top-right "
        "of the file view. Make your edit. Scroll down, type a commit "
        "message like &lsquo;Update phone number&rsquo;, and click "
        "<b>Commit changes</b>. Within sixty seconds, your live site "
        "at sarahman.in will reflect the change." % (MONO_FONT, MONO_FONT),
        BODY,
    ))

    story.append(Paragraph("Common files you might want to edit", H2))

    files_data = [
        ["What to change", "File path"],
        ["Hero headline, intro text, stats", "src/components/site/hero.tsx"],
        ["Your bio and portrait image", "src/components/site/about.tsx*"],
        ["Book section synopsis, themes, Amazon link", "src/components/site/book.tsx"],
        ["Testimonials and engagement descriptions", "src/components/site/impact.tsx"],
        ["Service offerings and process steps", "src/components/site/offerings.tsx"],
        ["Career timeline, education, certifications", "src/components/site/experience.tsx"],
        ["Blog/journal article titles and excerpts", "src/components/site/journal.tsx"],
        ["Contact email, phone, address, social links", "src/components/site/contact.tsx"],
        ["Footer links and brand text", "src/components/site/footer.tsx"],
        ["SEO title and description (Google search)", "src/app/layout.tsx"],
    ]
    t = Table(files_data, colWidths=[8*cm, 8*cm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), PRIMARY),
        ("TEXTCOLOR", (0, 0), (-1, 0), white),
        ("FONTNAME", (0, 0), (-1, 0), SANS_BOLD),
        ("FONTSIZE", (0, 0), (-1, 0), 9.5),
        ("FONTNAME", (0, 1), (-1, -1), SANS_FONT),
        ("FONTNAME", (1, 1), (1, -1), MONO_FONT),
        ("FONTSIZE", (0, 1), (-1, -1), 9),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [white, LIGHT]),
        ("GRID", (0, 0), (-1, -1), 0.3, BORDER),
    ]))
    story.append(t)
    story.append(Spacer(1, 8))
    story.append(Paragraph(
        "* About content is currently distributed across hero.tsx "
        "(introduction), expertise.tsx (skill cards), and "
        "experience.tsx (career timeline). Edit the appropriate file "
        "for the section you want to update.",
        CALLOUT,
    ))

    story.append(Paragraph("Replacing images", H2))
    story.append(Paragraph(
        "To replace your portrait or book cover, you need to upload "
        "the new image to the <font face='%s'>public/images/</font> "
        "folder on GitHub, then update the filename in the relevant "
        "component file. Use WebP format for portraits (smaller file "
        "size) and JPEG for the book cover. Keep the same filenames "
        "(portrait-medium.webp, book-cover.jpg) to avoid editing "
        "code." % MONO_FONT,
        BODY,
    ))

    story.append(PageBreak())

    # ============ Section 11: Troubleshooting ============
    story.append(Paragraph("11 &nbsp; Troubleshooting common issues", H1))
    story.append(HRFlowable(width="100%", thickness=0.5, color=BORDER, spaceAfter=10))

    story.append(Paragraph(
        "If something doesn&rsquo;t work, don&rsquo;t panic — most "
        "issues have simple fixes. Below are the most common problems "
        "and how to solve them.",
        BODY,
    ))

    issues = [
        {
            "problem": "Vercel build fails with &lsquo;Module not found&rsquo;",
            "cause": "One or more files weren&rsquo;t uploaded to GitHub. The build needs every file in the project.",
            "fix": "Go to your GitHub repository and compare the file list with your local project folder. Re-upload any missing files via the &lsquo;Add file &rarr; Upload files&rsquo; button. Vercel will automatically rebuild.",
        },
        {
            "problem": "sarahman.in shows &lsquo;This site can&rsquo;t be reached&rsquo;",
            "cause": "DNS hasn&rsquo;t propagated yet, or the DNS records are wrong.",
            "fix": "Check at https://dnschecker.org — type sarahman.in and search. If you see red X marks, DNS isn&rsquo;t propagated yet (wait 30 minutes). If you see wrong IPs, log back in to your registrar and double-check the A record points to 76.76.21.21.",
        },
        {
            "problem": "sarahman.in loads but shows &lsquo;Not Secure&rsquo; warning",
            "cause": "SSL certificate hasn&rsquo;t been issued yet, or you&rsquo;re visiting http:// instead of https://",
            "fix": "Wait 5&ndash;10 minutes after DNS propagates — Vercel issues SSL automatically. Try visiting https://sarahman.in explicitly (with the https://). If it still doesn&rsquo;t work, go to Vercel &rarr; Settings &rarr; Domains and the SSL status will show what&rsquo;s happening.",
        },
        {
            "problem": "www.sarahman.in doesn&rsquo;t redirect to sarahman.in",
            "cause": "The www CNAME record is missing or wrong.",
            "fix": "Go back to your registrar&rsquo;s DNS settings and confirm the CNAME record exists: Type CNAME, Name www, Value cname.vercel-dns.com. Save and wait 15 minutes.",
        },
        {
            "problem": "Images are broken on the live site but work locally",
            "cause": "The public/images folder wasn&rsquo;t uploaded to GitHub, or the filenames don&rsquo;t match.",
            "fix": "Check your GitHub repository &rarr; public &rarr; images folder. It should contain portrait-small.webp, portrait-medium.webp, portrait-large.webp, portrait.jpg, and book-cover.jpg. Re-upload any missing files.",
        },
        {
            "problem": "Contact form submits but nothing happens",
            "cause": "The form currently only shows a success message — it doesn&rsquo;t actually send an email yet. This is by design in the current version.",
            "fix": "To receive actual emails, integrate a form service like Formspree (formspree.io) or Google Sheets. Add the form action URL to contact.tsx in the handleSubmit function. This is a small code change — ask for help if needed.",
        },
        {
            "problem": "I made a typo and want to revert",
            "cause": "You edited a file on GitHub and the live site now shows the wrong thing.",
            "fix": "On GitHub, navigate to the file you edited. Click the &lsquo;History&rsquo; button. Find the previous version. Click the &hellip; menu and choose &lsquo;View file&rsquo;. Copy the old content, go back to the current file, click the pencil, paste the old content, and commit. Vercel will redeploy with the previous version.",
        },
    ]

    for issue in issues:
        story.append(Paragraph(issue["problem"], H3))
        story.append(Paragraph(f"<b>Cause:</b> {issue['cause']}", BODY))
        story.append(Paragraph(f"<b>Fix:</b> {issue['fix']}", BODY))
        story.append(Spacer(1, 4))

    story.append(PageBreak())

    # ============ Section 12: Cheat sheet ============
    story.append(Paragraph("12 &nbsp; Quick reference — cheat sheet", H1))
    story.append(HRFlowable(width="100%", thickness=0.5, color=BORDER, spaceAfter=10))

    story.append(Paragraph(
        "Pin this page to your wall. Everything you need on one page.",
        CALLOUT,
    ))

    story.append(Paragraph("Accounts", H2))
    cheat_data = [
        ["Service", "URL", "Your login"],
        ["GitHub", "github.com", "Your GitHub username"],
        ["Vercel", "vercel.com", "Continue with GitHub"],
        ["Domain registrar", "Varies (godaddy.com, bigrock.in, etc.)", "Email used to buy sarahman.in"],
        ["DNS checker", "dnschecker.org", "No login needed"],
    ]
    t = Table(cheat_data, colWidths=[3.5*cm, 5.5*cm, 7*cm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), PRIMARY),
        ("TEXTCOLOR", (0, 0), (-1, 0), white),
        ("FONTNAME", (0, 0), (-1, 0), SANS_BOLD),
        ("FONTSIZE", (0, 0), (-1, 0), 9.5),
        ("FONTNAME", (0, 1), (-1, -1), SANS_FONT),
        ("FONTSIZE", (0, 1), (-1, -1), 9.5),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [white, LIGHT]),
        ("GRID", (0, 0), (-1, -1), 0.3, BORDER),
    ]))
    story.append(t)
    story.append(Spacer(1, 12))

    story.append(Paragraph("DNS records (add at your registrar)", H2))
    dns_ref = [
        ["Type", "Name", "Value", "Purpose"],
        ["A", "@", "76.76.21.21", "Connects sarahman.in to Vercel"],
        ["CNAME", "www", "cname.vercel-dns.com", "Connects www.sarahman.in to Vercel"],
    ]
    t = Table(dns_ref, colWidths=[2*cm, 2.5*cm, 6*cm, 5.5*cm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), PRIMARY),
        ("TEXTCOLOR", (0, 0), (-1, 0), white),
        ("FONTNAME", (0, 0), (-1, 0), SANS_BOLD),
        ("FONTSIZE", (0, 0), (-1, 0), 9.5),
        ("FONTNAME", (0, 1), (-1, 1), MONO_FONT),
        ("FONTNAME", (0, 2), (-1, 2), MONO_FONT),
        ("FONTNAME", (3, 1), (3, -1), SANS_FONT),
        ("FONTSIZE", (0, 1), (-1, -1), 9),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 8),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [white, LIGHT]),
        ("GRID", (0, 0), (-1, -1), 0.3, BORDER),
    ]))
    story.append(t)
    story.append(Spacer(1, 12))

    story.append(Paragraph("Timeline (what to expect)", H2))
    timeline_data = [
        ["Time", "What happens"],
        ["0&ndash;5 min", "Push code to GitHub (one-time)"],
        ["5&ndash;10 min", "Sign up for Vercel and deploy"],
        ["10&ndash;15 min", "Add sarahman.in in Vercel domains"],
        ["15&ndash;25 min", "Add DNS records at your registrar"],
        ["25&ndash;60 min", "Wait for DNS propagation + SSL provisioning"],
        ["~60 min", "sarahman.in is live — share with the world"],
    ]
    t = Table(timeline_data, colWidths=[3*cm, 13*cm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), PRIMARY),
        ("TEXTCOLOR", (0, 0), (-1, 0), white),
        ("FONTNAME", (0, 0), (-1, 0), SANS_BOLD),
        ("FONTSIZE", (0, 0), (-1, 0), 9.5),
        ("FONTNAME", (0, 1), (0, -1), SANS_BOLD),
        ("FONTNAME", (1, 1), (1, -1), SANS_FONT),
        ("FONTSIZE", (0, 1), (-1, -1), 9.5),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [white, LIGHT]),
        ("GRID", (0, 0), (-1, -1), 0.3, BORDER),
    ]))
    story.append(t)
    story.append(Spacer(1, 16))

    story.append(callout_box(
        "<b>Need help?</b> Email me at rahman.rjy@outlook.com with "
        "screenshots of where you&rsquo;re stuck. Or search YouTube "
        "for &lsquo;deploy Next.js to Vercel&rsquo; — there are "
        "dozens of free walkthroughs. The whole process is well-trodden; "
        "you&rsquo;re not the first to do this.",
        color=HexColor("#eff6ff"), border=PRIMARY,
    ))

    story.append(Spacer(1, 24))
    story.append(HRFlowable(width="100%", thickness=0.5, color=BORDER, spaceAfter=10))
    story.append(Paragraph(
        "<i>This guide was prepared for Syed Abdul Rahman — AI in "
        "Education Consultant, Microsoft Education Specialist, and "
        "author of &lsquo;The Exhausted Educator&rsquo;. sarahman.in</i>",
        ParagraphStyle("Signoff", parent=BODY, alignment=TA_CENTER, textColor=MUTED, fontSize=9),
    ))

    return story


def main():
    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=A4,
        leftMargin=2*cm,
        rightMargin=2*cm,
        topMargin=2*cm,
        bottomMargin=2*cm,
        title="sarahman.in — Deployment Guide",
        author="Syed Abdul Rahman",
        subject="Step-by-step guide to deploy the sarahman.in website to Vercel and connect the domain",
        creator="Z.ai",
    )

    story = build_story()

    # Use a custom page template: page 1 = cover, others = header/footer
    from reportlab.platypus import PageTemplate, BaseDocTemplate, Frame
    from reportlab.lib.pagesizes import A4 as PS

    class GuideDoc(BaseDocTemplate):
        def __init__(self, filename, **kw):
            super().__init__(filename, **kw)
            # Cover frame (page 1) — full page, no margins
            cover_frame = Frame(0, 0, PS[0], PS[1], leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0, id="cover")
            # Body frame (page 2+) — with margins
            body_frame = Frame(2*cm, 1.8*cm, PS[0] - 4*cm, PS[1] - 3.8*cm, leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0, id="body")
            self.addPageTemplates([
                PageTemplate(id="cover", frames=[cover_frame], onPage=cover_page),
                PageTemplate(id="body", frames=[body_frame], onPage=header_footer),
            ])

        def handle_pageBegin(self):
            self._handle_pageBegin()
            # After page 1, switch to body template
            if self.page == 1:
                self._handle_nextPageTemplate("body")

    doc = GuideDoc(
        OUTPUT,
        pagesize=A4,
        title="sarahman.in — Deployment Guide",
        author="Syed Abdul Rahman",
        subject="Step-by-step guide to deploy the sarahman.in website to Vercel and connect the domain",
        creator="Z.ai",
    )

    doc.build(story)
    print(f"✓ PDF generated: {OUTPUT}")
    print(f"  Size: {os.path.getsize(OUTPUT) / 1024:.1f} KB")


if __name__ == "__main__":
    main()
