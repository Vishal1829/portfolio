# Vishal Gupta — Personal Portfolio

A premium, fully responsive developer portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

---

## ✨ Features

- **Dark terminal-luxury aesthetic** — Obsidian backgrounds, amber gold accents, Playfair Display + JetBrains Mono typography
- **Custom cursor** with magnetic follower effect
- **Typing animation** cycling through role titles
- **Scroll-triggered animations** on every section (Framer Motion)
- **Staggered list animations** for timeline items and skills
- **Glassmorphism** cards with hover states and micro-interactions
- **Sticky navbar** with active section indicator
- **Mobile responsive** with animated hamburger menu
- **Noise texture overlay** for premium depth
- **Terminal-style contact panel**
- **Light/dark mode toggle**

---

## 🗂 Folder Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── resume.js          ← All portfolio content lives here
    ├── hooks/
    │   └── useInView.js
    └── components/
        ├── Cursor.jsx
        ├── Navbar.jsx
        ├── SectionHeader.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Experience.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Education.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Navigate into the project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
npm run preview   # preview the production build
```

---

## 📝 Customization

All content is centralized in **`src/data/resume.js`**. To update:
- Change job details, tech stacks, or achievements → edit `experience` array
- Add/remove skills → edit `skills` object
- Update contact links → edit `contact` object
- Add projects → add objects to `projects` array

---

## 📦 Libraries Used

| Library | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 5 | Build tool / dev server |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion 11 | Animations & transitions |
| Lucide React | Icons |
| Google Fonts | Playfair Display, JetBrains Mono, DM Sans |

---

## 🌐 Deployment

Deploy to **Vercel** (recommended):
```bash
npm i -g vercel
vercel
```

Or **Netlify**:
```bash
npm run build
# Drag dist/ folder to netlify.com/drop
```
