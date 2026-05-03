# 🍽 المزار الدمشقي — تقرير الأداء التسويقي
## Almazar Aldimashqi — Monthly Marketing Report Dashboard

> لوحة تحكم تقارير الأداء التسويقي الشهري لمطعم المزار الدمشقي بالمدينة المنورة
> Monthly Marketing Report Dashboard for Almazar Aldimashqi Restaurant, Madinah, Saudi Arabia

## 📊 Live Demo
https://abdalmaged818.github.io/almazar-report/

## 🔐 Access
- **Username:** almazar
- **Password:** Almazar2026

> ⚠️ This is client-side authentication for a private dashboard. Not intended for sensitive data protection.

## 🏗 Project Structure
```
almazar-report/
├── index.html              # Login page (entry point)
├── dashboard.html          # Main dashboard shell
├── .nojekyll              # Disable Jekyll on GitHub Pages
├── CNAME                  # Custom domain (placeholder)
├── README.md
├── .gitignore
├── assets/                # Images, fonts, icons
├── styles/                # CSS modules
│   ├── main.css           # Imports all partials
│   ├── _variables.css     # Design tokens
│   ├── _reset.css         # CSS reset
│   ├── _typography.css    # Font styles
│   ├── _layout.css        # Grid & layout
│   ├── _components.css    # UI components
│   ├── _charts.css        # Chart containers
│   ├── _login.css         # Login page
│   ├── _animations.css    # Keyframes
│   └── _responsive.css    # Media queries
├── scripts/               # JavaScript modules
│   ├── main.js            # App entry point
│   ├── auth.js            # Authentication
│   ├── router.js          # SPA navigation
│   ├── charts.js          # Chart.js configs
│   ├── data.js            # All report data
│   └── utils.js           # Helper functions
└── pages/                 # Page fragments (loaded dynamically)
    ├── dashboard.html     # Executive summary
    ├── tiktok.html        # TikTok analytics
    ├── instagram.html     # Instagram analytics
    ├── googlemap.html     # Google Maps
    ├── campaign.html      # Lunch campaign
    ├── comparison.html    # March vs April
    ├── production.html    # Visual production
    ├── management.html    # Account management
    └── operations.html    # Operational achievements
```

## 🚀 Local Development
Just open `index.html` in a browser, or use VS Code Live Server extension.

## 📦 Deployment to GitHub Pages
1. Push to GitHub
2. Go to **Settings → Pages**
3. Source: **Deploy from branch → main → / (root)**
4. Click **Save**
5. Wait ~2 minutes for deployment

## 🔄 Updating Monthly Data
1. Open `scripts/data.js`
2. Update the `meta` object (month, year, period)
3. Update all metrics with new numbers
4. Commit and push → auto-deploys

## 🎨 Customization
All colors are in `styles/_variables.css`:
```css
--primary: #8B3A2B;      /* Main brand color */
--olive: #6F7F6A;         /* Secondary accent */
```

## 🛠 Tech Stack
- **Vanilla HTML5 / CSS3 / ES6+ JavaScript** — no build tools required
- **Chart.js 4.4** — via CDN, lazy loaded
- **Google Fonts** — Tajawal (Arabic), Playfair Display (Display numbers)
- **GitHub Pages** — static hosting

## 📄 License
Proprietary — Property of Almazar Aldimashqi Restaurant.
All rights reserved.

## 👤 Maintained By
Marketing team — Almazar Aldimashqi Restaurant, Madinah, Saudi Arabia
