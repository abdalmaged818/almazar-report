# Setup Guide — Almazar Marketing Dashboard

## Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code recommended)
- Git (optional, for local development)
- A GitHub account with access to the repository

## Quick Start (View-Only)

No installation needed! Just open the live URL:
**https://abdalmaged818.github.io/almazar-report/**

Login: `almazar` / `Almazar2026`

## Local Development Setup

### Method 1: VS Code Live Server (Recommended)

1. Install [VS Code](https://code.visualstudio.com/)
2. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
3. Clone the repository:
   ```bash
   git clone https://github.com/abdalmaged818/almazar-report.git
   cd almazar-report
   ```
4. Open the folder in VS Code: `code .`
5. Right-click on `index.html` → **"Open with Live Server"**
6. Browser opens at `http://localhost:5500`

### Method 2: Python HTTP Server

```bash
# Python 3
cd almazar-report
python3 -m http.server 8080
# Open http://localhost:8080
```

### Method 3: Node.js HTTP Server

```bash
# Install serve globally
npm install -g serve

# Run from project directory
cd almazar-report
serve .
# Open http://localhost:3000
```

## File Organization

```
almazar-report/
├── index.html              # Login page (entry point)
├── dashboard.html          # Main dashboard shell (SPA container)
├── .nojekyll               # Disables Jekyll processing on GitHub Pages
├── CNAME                   # Custom domain configuration
├── LICENSE                 # Proprietary license
├── README.md               # Project overview
├── .gitignore              # Git ignore rules
│
├── assets/
│   ├── images/
│   │   ├── logo.svg        # Restaurant logo
│   │   ├── favicon.svg     # Browser tab icon (SVG)
│   │   ├── favicon.ico     # Browser tab icon (legacy)
│   │   ├── og-image.svg    # Social sharing preview image
│   │   └── pattern-damascus.svg  # Login background pattern
│   └── icons/
│       ├── icons.svg       # SVG sprite (all nav icons)
│       └── dashboard.svg   # Individual dashboard icon
│
├── styles/
│   ├── main.css            # Imports all CSS partials (entry point)
│   ├── _variables.css      # Design tokens (colors, fonts, spacing)
│   ├── _reset.css          # CSS reset / normalize
│   ├── _typography.css     # Font size, weight, line-height
│   ├── _layout.css         # App layout, sidebar, grid
│   ├── _components.css     # UI components (cards, charts, tables)
│   ├── _charts.css         # Chart container styles
│   ├── _login.css          # Login page styles
│   ├── _animations.css     # Keyframe animations
│   └── _responsive.css     # Media queries for mobile/tablet
│
├── scripts/
│   ├── main.js             # App entry point and initialization
│   ├── auth.js             # Authentication (login/logout/guard)
│   ├── router.js           # Hash-based SPA navigation
│   ├── charts.js           # Chart.js configurations and rendering
│   ├── data.js             # All report data (edit monthly)
│   └── utils.js            # Helper functions (format numbers, etc.)
│
├── pages/                  # Page content fragments (loaded by router)
│   ├── dashboard.html      # Executive summary page
│   ├── tiktok.html         # TikTok analytics page
│   ├── instagram.html      # Instagram analytics page
│   ├── googlemap.html      # Google Maps page
│   ├── campaign.html       # Lunch campaign page
│   ├── comparison.html     # March vs April comparison
│   ├── production.html     # Visual production stats
│   ├── management.html     # Account management notes
│   └── operations.html     # Operational achievements
│
└── docs/
    ├── SETUP.md            # This file
    ├── DEPLOYMENT.md       # How to deploy
    └── CONTENT_GUIDE.md    # How to update monthly data
```

## Browser Compatibility

| Browser | Minimum Version | Notes |
|---------|----------------|-------|
| Chrome | 80+ | Fully supported |
| Firefox | 75+ | Fully supported |
| Safari | 13+ | Fully supported |
| Edge | 80+ | Fully supported |
| IE 11 | Not supported | ES6 modules not supported |

The dashboard uses ES6 modules (`type="module"`) which require a modern browser and HTTPS (or localhost).

## Coding Conventions

### CSS
- All design tokens defined in `styles/_variables.css`
- Use CSS custom properties: `var(--primary)`, `var(--space-md)`
- BEM-like class names: `.card`, `.card-title`, `.card-value`
- RTL support via `dir="rtl"` on `<html>`

### JavaScript
- ES6 modules (import/export)
- No build tools required
- No external dependencies except Chart.js (via CDN)
- All data in `scripts/data.js`
- Functions exported from modules

### HTML
- Arabic content with `lang="ar" dir="rtl"`
- Semantic elements (`<main>`, `<nav>`, `<aside>`)
- ARIA labels for accessibility

## Making Changes

1. Edit the relevant file
2. Refresh browser (or Live Server auto-reloads)
3. Test in browser DevTools for errors
4. Commit and push to deploy

## Debugging

Open DevTools (F12) and check:
- **Console** tab for JavaScript errors
- **Network** tab for failed resource loads (404s)
- **Elements** tab for CSS issues

## Important Notes

- The auth system uses `sessionStorage` — sessions expire when the browser tab closes
- All paths are relative (e.g., `./styles/main.css`) for GitHub Pages compatibility
- Charts use Chart.js 4.4.0 loaded from Cloudflare CDN
- Arabic fonts loaded from Google Fonts (requires internet connection)
