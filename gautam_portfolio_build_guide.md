# Gautam Choudhary — Portfolio Website Build Guide
> A complete, step-by-step specification for building a personal portfolio from scratch.

---

## 1. Project Overview

Build a **single-page portfolio website** for Gautam Choudhary — a Web Developer based in Jaipur, Rajasthan with expertise in React.js, Next.js, WordPress, and UI/UX design. The site should feel modern, developer-forward, and visually distinctive — not a generic template.

**Goal:** Impress recruiters and clients at a glance, showcase work, and make it easy to get in touch.

---

## 2. Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | **Next.js 14 (App Router)** | Fast, SEO-friendly, matches Gautam's skill set |
| Styling | **Tailwind CSS** | Utility-first, already in his skill set |
| Animations | **Framer Motion** | Smooth page transitions and scroll effects |
| Icons | **Lucide React** | Clean, consistent icon set |
| Fonts | **Google Fonts** — `Space Mono` (headings) + `DM Sans` (body) | Developer aesthetic with readability |
| Deployment | **Vercel** | Free tier, seamless Next.js support |

---

## 3. Color Palette & Design System

### Theme: Dark Developer Aesthetic with Neon Green Accent

```css
:root {
  --bg-primary: #0a0a0a;         /* Near-black background */
  --bg-secondary: #111111;       /* Card/section background */
  --bg-card: #1a1a1a;            /* Elevated card surface */
  --text-primary: #f0f0f0;       /* Main text */
  --text-secondary: #888888;     /* Muted text, labels */
  --accent: #39ff14;             /* Neon green — primary accent */
  --accent-dim: #1a7a00;         /* Dimmed accent for hover states */
  --border: #2a2a2a;             /* Subtle borders */
  --border-accent: #39ff14;      /* Accent borders */
}
```

### Typography Scale
```css
/* Headings — Space Mono */
h1: 64px / font-weight 700
h2: 40px / font-weight 700
h3: 24px / font-weight 600

/* Body — DM Sans */
body: 16px / line-height 1.7
small/label: 13px / letter-spacing 0.08em / uppercase
```

---

## 4. Site Structure & Pages

This is a **single-page site** with smooth anchor scroll navigation.

```
/
├── #hero          → Name, tagline, CTA buttons
├── #about         → Short bio + skills grid
├── #experience    → Timeline of work history
├── #projects      → Project cards with tags
├── #contact       → Contact form + social links
```

---

## 5. Component Breakdown (Step-by-Step)

---

### STEP 1 — Project Setup

```bash
# 1. Create Next.js app
npx create-next-app@latest gautam-portfolio --typescript --tailwind --app

# 2. Install dependencies
cd gautam-portfolio
npm install framer-motion lucide-react

# 3. Install Google Fonts
# Add to app/layout.tsx via next/font/google
```

**File structure to create:**
```
app/
  layout.tsx          ← Root layout with fonts + metadata
  page.tsx            ← Main page that assembles all sections
  globals.css         ← CSS variables + base styles
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Experience.tsx
  Projects.tsx
  Contact.tsx
  Footer.tsx
  ui/
    Badge.tsx         ← Skill/tech tag pill
    SectionTitle.tsx  ← Reusable section heading
```

---

### STEP 2 — Global Styles (`globals.css`)

Set up CSS variables, base resets, and scrollbar styling.

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600&display=swap');

:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --bg-card: #1a1a1a;
  --text-primary: #f0f0f0;
  --text-secondary: #888888;
  --accent: #39ff14;
  --accent-dim: #1a7a00;
  --border: #2a2a2a;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'DM Sans', sans-serif;
}

h1, h2, h3 {
  font-family: 'Space Mono', monospace;
}

/* Custom scrollbar */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: var(--bg-primary); }
::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 2px; }

/* Neon glow utility */
.glow {
  text-shadow: 0 0 20px rgba(57, 255, 20, 0.5);
}
```

---

### STEP 3 — Root Layout (`app/layout.tsx`)

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gautam Choudhary — Web Developer",
  description: "Portfolio of Gautam Choudhary, Web Developer specializing in React.js, Next.js, and modern web technologies.",
  keywords: ["Web Developer", "React", "Next.js", "Jaipur", "Frontend"],
  openGraph: {
    title: "Gautam Choudhary — Web Developer",
    description: "Building modern web experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

### STEP 4 — Main Page (`app/page.tsx`)

Assemble all sections in order.

```tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
```

---

### STEP 5 — Navbar (`components/Navbar.tsx`)

**Behavior:** Sticky top bar. Logo left, nav links right. On scroll, adds a backdrop blur + border bottom. On mobile, collapses into a hamburger menu.

**Content:**
- Logo: `GC` monogram in accent color (neon green) using Space Mono
- Links: About · Experience · Projects · Contact
- Optional: "Hire Me" CTA button with accent border

**Design details:**
- Height: 64px
- Background: transparent → `rgba(10,10,10,0.85)` with `backdrop-filter: blur(12px)` on scroll
- Active link: underline in accent color
- Mobile: hamburger icon (Lucide `Menu`), full-screen overlay menu

---

### STEP 6 — Hero Section (`components/Hero.tsx`)

**Layout:** Full viewport height, vertically centered content.

**Content:**
```
[small label]  Hi, I'm
[large heading] Gautam Choudhary
[subtitle]     Web Developer · UI/UX · React & Next.js

[tagline]      Building fast, accessible, and beautiful web experiences
               from Jaipur, Rajasthan.

[CTA buttons]  [View My Work ↓]   [Download Resume]
[social icons] GitHub · LinkedIn · Email
```

**Design details:**
- Animated text: Name appears with a stagger-in animation (Framer Motion)
- Accent color on "Gautam Choudhary" with neon glow effect
- Background: subtle grid pattern (CSS `background-image` with dots or lines)
- Blinking cursor `|` after name using CSS animation
- Scroll indicator arrow at bottom center

**Grid background CSS:**
```css
background-image: radial-gradient(circle, #2a2a2a 1px, transparent 1px);
background-size: 32px 32px;
```

---

### STEP 7 — About Section (`components/About.tsx`)

**Layout:** Two-column grid on desktop (60/40 split), stacked on mobile.

**Left column — Bio text:**
```
I'm a web developer with 2+ years of experience building 
modern, performant web applications. I specialize in React.js 
and Next.js for frontend development, and bring a strong 
eye for design using Figma and Tailwind CSS.

Currently at ITXITPro in Jaipur, where I own end-to-end 
project delivery and mentor junior developers. Previously 
at Drift Point Technologies, where I shipped 10+ client 
websites.
```

**Right column — Skills Grid:**

Organize skills into categories as badge pills:

| Category | Skills |
|---|---|
| **Frontend** | JavaScript, React.js, Next.js, TypeScript, HTML/CSS |
| **Styling** | Tailwind CSS, Bootstrap, Material UI |
| **Backend / DB** | PHP, Laravel, MySQL, MongoDB |
| **Design** | Figma, Photoshop |
| **Tools** | Git, GitHub, VS Code, Google Analytics |
| **AI Tools** | GitHub Copilot, Claude, Cursor, ChatGPT |

**Badge design:** Dark pill with accent border + accent text. Subtle hover glow.

---

### STEP 8 — Experience Section (`components/Experience.tsx`)

**Layout:** Vertical timeline. Left side: timeline line with dots. Right side: cards.

**Timeline Data:**

#### Job 1 — ITXITPro
- **Title:** Web Developer
- **Period:** Sep 2025 – Present
- **Location:** Jaipur, Rajasthan
- **Points:**
  - End-to-end project delivery: requirements → development → deployment
  - Technical lead for junior team members on architecture and standards
  - Recommended tech stacks and implementation approaches for new projects

#### Job 2 — Drift Point Technologies Pvt. Ltd.
- **Title:** Web Developer
- **Period:** Mar 2024 – Sep 2025
- **Location:** Jaipur, Rajasthan
- **Points:**
  - Delivered 10+ client websites using WordPress with responsive design
  - Designed templates and branding assets in Figma and Photoshop
  - Built frontend features for the TestNHire platform using React.js and Next.js
  - Created reusable UI components for scalability across projects

**Design details:**
- Timeline line: 2px solid `var(--border)` with accent-colored dots at each entry
- Cards: `var(--bg-card)` background, `var(--border)` border, hover lifts with subtle box-shadow
- "Present" badge in accent color on current job
- Animate cards in on scroll using Framer Motion `whileInView`

---

### STEP 9 — Projects Section (`components/Projects.tsx`)

**Layout:** 3-column card grid on desktop, 2-column tablet, 1-column mobile.

**Project Data:**

#### Project 1 — Hyku Consulting
- **Description:** Mentored 15 students toward acceptance at top US boarding schools. Achieved 100% success rate by designing a collaborative learning ecosystem.
- **Tags:** Trello · Miro · Google Suite · Education
- **Highlight:** 100% acceptance rate

#### Project 2 — Minimal Icon Pack
- **Description:** Designed and released 100+ minimal iOS and Android icons from scratch. Marketed on YouTube and sold on Gumroad.
- **Tags:** Figma · Procreate · Design · iOS · Android
- **Highlight:** $250+ in sales · 100+ icons

#### Project 3 — CommonIntern
- **Description:** Python script to automatically apply to jobs on Glassdoor using web scraping. Gained significant open-source traction.
- **Tags:** Python · BeautifulSoup · Selenium · Automation
- **Highlight:** 500 GitHub stars · Featured on Hackaday · Front page of r/python

**Card design:**
- Dark card with border, project name in Space Mono
- Tags as small accent-colored pills at the bottom
- Highlight stat displayed prominently (e.g., "⭐ 500 GitHub Stars")
- Hover: card lifts, border turns accent color
- Optional: GitHub/external link icon in top-right corner

---

### STEP 10 — Contact Section (`components/Contact.tsx`)

**Layout:** Centered, max-width 600px.

**Content:**
```
Section title: Let's Work Together

Subtitle: Have a project in mind or want to collaborate? 
          I'd love to hear from you.

[Contact Form]
  - Name (text input)
  - Email (email input)
  - Message (textarea, 5 rows)
  - [Send Message →] button

[OR divider]

[Direct Contact]
  📧 codergautam7@gmail.com
  📍 Jaipur, Rajasthan, India
  🔗 LinkedIn: Gautam Choudhary
```

**Form design:**
- Inputs: Dark background, accent-colored border on focus, smooth transition
- Button: Full-width, accent background, black text, hover scales slightly
- Form submission: Use `mailto:` link or a free service like **Formspree** (`https://formspree.io`)

**Formspree setup:**
```
1. Go to https://formspree.io
2. Create a free account
3. Create a form → copy the endpoint URL
4. Set form action to the Formspree URL
5. No backend needed
```

---

### STEP 11 — Footer (`components/Footer.tsx`)

**Content:**
```
[Logo: GC]

Made with ♥ in Jaipur, Rajasthan

[Social Links: GitHub · LinkedIn · Email]

© 2025 Gautam Choudhary. All rights reserved.
```

**Design:** Minimal, 80px height, centered text, muted color, social icons with hover accent color.

---

## 6. Animations Specification (Framer Motion)

Use these animation patterns consistently throughout:

### Page Load (Hero)
```tsx
// Stagger children in from below
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
```

### Scroll-triggered Sections
```tsx
// Wrap each section content with:
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
```

### Card Hover
```tsx
<motion.div
  whileHover={{ y: -4, borderColor: "var(--accent)" }}
  transition={{ duration: 0.2 }}
>
```

---

## 7. Reusable UI Components

### `Badge.tsx` — Skill/Tech Tag
```tsx
interface BadgeProps {
  label: string;
}

export const Badge = ({ label }: BadgeProps) => (
  <span className="badge">{label}</span>
);

/* CSS */
.badge {
  display: inline-block;
  padding: 4px 12px;
  border: 1px solid var(--accent-dim);
  color: var(--accent);
  font-size: 12px;
  letter-spacing: 0.05em;
  border-radius: 4px;
  font-family: 'Space Mono', monospace;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.badge:hover {
  border-color: var(--accent);
  box-shadow: 0 0 8px rgba(57, 255, 20, 0.3);
}
```

### `SectionTitle.tsx` — Reusable Section Heading
```tsx
interface SectionTitleProps {
  label: string;  // small label above (e.g. "02. EXPERIENCE")
  title: string;  // main heading
}

export const SectionTitle = ({ label, title }: SectionTitleProps) => (
  <div>
    <p className="section-label">{label}</p>
    <h2 className="section-title">{title}</h2>
    <div className="section-line" />
  </div>
);

/* CSS */
.section-label {
  color: var(--accent);
  font-size: 13px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-family: 'Space Mono', monospace;
  margin-bottom: 8px;
}

.section-title {
  font-size: 40px;
  font-family: 'Space Mono', monospace;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.section-line {
  width: 60px;
  height: 3px;
  background: var(--accent);
  margin-bottom: 48px;
}
```

---

## 8. Responsive Breakpoints

| Breakpoint | Width | Changes |
|---|---|---|
| Mobile | < 640px | Single column, smaller fonts, hamburger nav |
| Tablet | 640–1024px | 2-column grids, visible nav |
| Desktop | > 1024px | Full layout as designed |

Use Tailwind's built-in breakpoints: `sm:`, `md:`, `lg:`, `xl:`

---

## 9. SEO & Meta Tags

Add to `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Gautam Choudhary — Web Developer | React & Next.js",
  description: "Portfolio of Gautam Choudhary, a Web Developer from Jaipur specializing in React.js, Next.js, WordPress, and modern UI/UX.",
  keywords: ["Web Developer", "React Developer", "Next.js", "Frontend Developer", "Jaipur", "Portfolio"],
  authors: [{ name: "Gautam Choudhary" }],
  creator: "Gautam Choudhary",
  openGraph: {
    title: "Gautam Choudhary — Web Developer",
    description: "Building fast, accessible, and beautiful web experiences.",
    url: "https://gautamchoudhary.dev",     // update with actual domain
    type: "website",
  },
};
```

---

## 10. Deployment (Vercel)

**Step-by-step:**

```bash
# 1. Push code to GitHub
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gautam-portfolio.git
git push -u origin main

# 2. Deploy on Vercel
# - Go to https://vercel.com
# - Click "Add New Project"
# - Import your GitHub repo
# - Framework: Next.js (auto-detected)
# - Click Deploy → Done!
```

**Custom domain (optional):**
1. Buy a domain (e.g., `gautamchoudhary.dev`) from Namecheap or Google Domains
2. In Vercel dashboard → Project → Settings → Domains
3. Add your domain and follow DNS instructions

---

## 11. Performance Checklist

Before going live, verify these:

- [ ] All images use `next/image` with proper `width`, `height`, and `alt` attributes
- [ ] Fonts loaded with `next/font/google` (not raw `<link>`)
- [ ] No unused imports or dependencies
- [ ] `framer-motion` animations use `viewport={{ once: true }}` so they don't re-run
- [ ] Tailwind CSS purges unused styles in production (default with Next.js)
- [ ] `metadata` export in `layout.tsx` is filled out completely
- [ ] Contact form has proper validation (non-empty fields, valid email format)
- [ ] Site tested on Chrome, Firefox, Safari, and mobile
- [ ] Run Lighthouse audit (target: Performance > 90, Accessibility > 95)

---

## 12. Optional Enhancements (After Launch)

| Feature | Tool | Effort |
|---|---|---|
| Blog / Writing | MDX + next-mdx-remote | Medium |
| Dark/Light toggle | next-themes | Low |
| Page transition animations | Framer Motion `AnimatePresence` | Low |
| Analytics | Vercel Analytics (free) | Very Low |
| Cursor custom effect | CSS + JS | Low |
| Noise/grain texture overlay | CSS pseudo-element | Very Low |
| "Currently playing" Spotify widget | Spotify API | High |

---

## 13. Final Folder Structure (Complete)

```
gautam-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ui/
│       ├── Badge.tsx
│       └── SectionTitle.tsx
├── public/
│   ├── resume.pdf          ← Gautam's resume for download button
│   └── favicon.ico
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

*Built for Gautam Choudhary | Web Developer | Jaipur, Rajasthan*
*Contact: codergautam7@gmail.com | LinkedIn: Gautam Choudhary*
