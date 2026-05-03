# Deployment Guide — Almazar Marketing Dashboard

## Overview

This dashboard is hosted on **GitHub Pages** — a free static hosting service by GitHub. Deployments happen automatically when changes are pushed to the `main` branch.

**Live URL:** https://abdalmaged818.github.io/almazar-report/

## How GitHub Pages Deployment Works

1. You push code changes to the `main` branch on GitHub
2. GitHub detects the push and triggers an automatic build
3. The site is rebuilt and deployed (typically within 1-3 minutes)
4. The live URL updates automatically

## Deploying After Content Changes

### Option A: Edit Directly on GitHub (Recommended for data-only updates)

1. Go to https://github.com/abdalmaged818/almazar-report
2. Navigate to `scripts/data.js`
3. Click the pencil (✏️) edit icon
4. Make your changes
5. Click **"Commit changes"** with a descriptive message
6. GitHub Pages will auto-deploy within ~2 minutes

### Option B: Local Development (For code changes)

```bash
# 1. Clone the repository
git clone https://github.com/abdalmaged818/almazar-report.git
cd almazar-report

# 2. Make your changes locally
# (Use VS Code with Live Server for previewing)

# 3. Commit and push
git add .
git commit -m "fix: description of change"
git push origin main
```

## Verifying Deployment

1. Go to: https://github.com/abdalmaged818/almazar-report/deployments
2. Look for "github-pages" deployment — it should show a green checkmark
3. Click "View deployment" to open the live site

## Adding a Custom Domain

### Step 1: Purchase/Configure Domain
- Purchase a domain (e.g., `report.almazar.com`)
- OR use an existing subdomain

### Step 2: DNS Configuration

Add these DNS records at your domain registrar:

**For subdomain (e.g., report.almazar.com):**
```
Type: CNAME
Name: report
Value: abdalmaged818.github.io
TTL: 3600
```

**For apex domain (e.g., almazar.com):**
```
Type: A
Name: @
Values: 185.199.108.153
        185.199.109.153
        185.199.110.153
        185.199.111.153
```

### Step 3: Configure GitHub Pages

1. Go to repository **Settings** → **Pages**
2. Under "Custom domain", enter your domain (e.g., `report.almazar.com`)
3. Click **Save**
4. Wait for DNS propagation (up to 48 hours)

### Step 4: Update CNAME File

Edit the `CNAME` file in the repository root with your domain:
```
report.almazar.com
```

## HTTPS Setup

GitHub Pages automatically provides HTTPS via Let's Encrypt certificates.

1. After setting up your custom domain, go to **Settings** → **Pages**
2. Check **"Enforce HTTPS"** checkbox
3. HTTPS will be active within 24 hours

## Common Deployment Issues

### Issue: Site shows 404 after pushing
**Fix:** Wait 2-3 minutes. If still 404, check that the `main` branch is selected in Pages settings.

### Issue: Changes not reflecting on live site
**Fix:** 
- Hard refresh the browser (Ctrl+Shift+R or Cmd+Shift+R)
- Check deployment status at https://github.com/abdalmaged818/almazar-report/deployments

### Issue: CSS not loading (unstyled page)
**Fix:** Ensure all CSS/JS paths use relative paths (`./styles/main.css`) not absolute paths (`/styles/main.css`).

### Issue: Pages shows blank white page
**Fix:** Open browser DevTools (F12) → Console tab to see JavaScript errors.

### Issue: Custom domain not working
**Fix:** 
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records are correct
- Check that CNAME file exists with correct domain

## Rollback

To revert to a previous version:
1. Go to repository **Commits** history
2. Find the last working commit
3. Click the commit hash → click `<>` to browse that version
4. Or use git: `git revert HEAD` and push

## Environment

This is a static site with no server-side code:
- **Hosting:** GitHub Pages (free)
- **CDN:** GitHub's global CDN
- **SSL:** Let's Encrypt via GitHub Pages
- **Build process:** None (static files served directly)
