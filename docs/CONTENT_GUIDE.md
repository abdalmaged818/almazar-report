# Content Update Guide — Almazar Marketing Dashboard

## Overview

All report data lives in a single file: **`scripts/data.js`**

To update the monthly report, you only need to edit this one file.

## Data File Structure

```javascript
export const REPORT_DATA = {
  meta: { ... },        // Report metadata (month, year, period)
  sales: { ... },       // Sales performance data
  tiktok: { ... },      // TikTok analytics
  instagram: { ... },   // Instagram analytics  
  googleMaps: { ... },  // Google Maps/Business data
  campaign: { ... },    // Lunch campaign data
  comparison: { ... },  // Month-over-month comparison
  production: { ... },  // Content production stats
  management: { ... },  // Account management notes
  operations: { ... }   // Operational achievements
}
```

## Step-by-Step: Updating for a New Month

### Step 1: Update Report Metadata

```javascript
meta: {
  month: "مايو",          // Arabic month name
  monthEn: "May",         // English month name
  year: 2026,
  period: "1 - 31 مايو 2026",  // Date range in Arabic
  restaurant: { ... }     // Restaurant info (usually unchanged)
}
```

### Step 2: Update Sales Data

```javascript
sales: {
  april: {               // RENAME: change to current month
    total: 379724,       // Total revenue in SAR
    invoices: 4713,      // Number of invoices
    dailyAvg: 12657,     // Daily average revenue
    period: "أبريل 2026" // Period label
  },
  march: {               // RENAME: change to previous month
    total: 333527,       // Previous month total
    invoices: 4809,
    dailyAvg: 10758,
    period: "مارس 2026"
  },
  // ...
}
```

### Step 3: Update TikTok Data

```javascript
tiktok: {
  overview: {
    views: 362000,          // Total views this month
    likes: 3800,            // Total likes
    comments: 409,          // Total comments
    shares: 2100,           // Total shares
    profileVisits: 9300,    // Profile visits
    followers: 3300,        // Current follower count
    followersGained: 73     // New followers this month
  },
  // Update top videos, influencers, etc.
}
```

### Step 4: Update Influencer Data

Each influencer entry looks like:
```javascript
{
  rank: 1,
  tier: "hero",           // "hero", "star", or "default"
  name: "اسم المؤثر",
  handle: "@handle",
  initial: "م",           // First letter of name (for avatar)
  visitDate: "1 مايو",
  publishDate: "2 مايو",
  views: 89000,           // Video view count
  likes: 2100,
  shares: 450,
  saves: 89,
  published: true,        // true or false
  videoUrl: "https://www.tiktok.com/@handle/video/..."
}
```

**Influencer tiers:**
- `"hero"` — Top performer (highlighted in gold)
- `"star"` — Second tier (silver highlight)
- `"default"` — Standard performer (no special styling)

### Step 5: Update Instagram Data

```javascript
instagram: {
  overview: {
    totalViews: 331724,     // Total reel/post views
    reach: 92167,           // Unique accounts reached
    interactions: 10478,    // Total interactions
    profileVisits: 8078,    // Profile visits
    linkClicks: 1459,       // Bio link clicks
    followers: 1729         // Current follower count
  }
}
```

### Step 6: Update Google Maps Data

```javascript
googleMaps: {
  searches: 3237,          // Google searches showing the restaurant
  calls: 1255,             // Phone calls from Google Maps
  direction: 1421,         // Direction requests
  websiteClicks: 561,      // Website clicks
  rating: 4.5,             // Current Google rating
  totalReviews: 138,       // Total reviews count
  newReviews: 101,         // New reviews this period
  fiveStars: 73            // Number of 5-star reviews
}
```

## How to Add a New Month's Report

1. **Rename keys** in the `sales` and `comparison` objects:
   - `april` → `may` (or the current month)
   - `march` → `april` (previous month becomes comparison)

2. **Update all metrics** with the new month's actual data

3. **Add new influencer entries** with the new month's campaigns

4. **Update dates** in all `period` and `visitDate` fields

5. **Update the `meta` object** with the new month name and period

## Common Edits

### Changing a KPI number
Find the specific key in `data.js`:
```javascript
// Before:
views: 362000,
// After:
views: 485000,
```

### Adding a new influencer
Copy an existing entry and modify:
```javascript
{ rank: 8, tier: "default", name: "محمد أحمد", handle: "@mohamad", 
  initial: "م", visitDate: "15 مايو", views: 5200, likes: 310, 
  shares: 95, saves: 28, published: true,
  videoUrl: "https://www.tiktok.com/@mohamad/video/..." }
```

### Updating the achievement notes
Find the `operations.achievements` array and add/modify entries.

## Data Validation Checklist

Before committing, verify:
- [ ] All numbers are realistic (no extra zeros or missing digits)
- [ ] Date ranges are correct for the new month
- [ ] All influencer video URLs are valid TikTok links
- [ ] `meta.month` and `meta.monthEn` are updated
- [ ] `meta.period` matches the actual reporting period
- [ ] `sales.invoices` is a whole number (no decimals)

## File Location

```
almazar-report/
└── scripts/
    └── data.js     ← EDIT THIS FILE ONLY
```

Never edit the page HTML files in `pages/` directly for data changes — all data flows from `data.js`.
