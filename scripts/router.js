/* scripts/router.js — Hash-based SPA router */
import { initCharts, destroyCharts } from './charts.js';

const PAGES = ['dashboard', 'tiktok', 'instagram', 'googlemap', 'campaign', 'comparison', 'production', 'management', 'operations'];
let currentPage = null;
let chartsInitialized = false;

/**
 * Navigate to a page
 */
export function navigateTo(pageId) {
  if (!PAGES.includes(pageId)) pageId = 'dashboard';
  
  // Update URL hash
  window.location.hash = pageId;
  
  // Load and display the page
  showPage(pageId);
}

/**
 * Show a specific page
 */
function showPage(pageId) {
  // Update nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === pageId);
  });

  // Load page content via fetch
  loadPageContent(pageId).then(() => {
    // Update page title
    const pageTitle = getPageTitle(pageId);
    document.title = `${pageTitle} — المزار الدمشقي`;
    
    // Init charts for this page
    if (!chartsInitialized) {
      chartsInitialized = true;
    }
    initCharts(pageId);
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    currentPage = pageId;
  });
}

/**
 * Load page fragment content
 */
async function loadPageContent(pageId) {
  const container = document.getElementById('page-content');
  if (!container) return;
  
  // Destroy existing charts before loading new page
  destroyCharts();
  
  try {
    const response = await fetch(`/pages/${pageId}.html`);
    if (!response.ok) throw new Error(`Failed to load ${pageId}`);
    const html = await response.text();
    container.innerHTML = html;
  } catch (error) {
    console.error('Failed to load page:', pageId, error);
    container.innerHTML = `<div style="padding:40px;text-align:center;">
      <h2>تعذّر تحميل الصفحة</h2>
      <p style="color:var(--text-secondary);margin-top:8px;">حاول تحديث الصفحة</p>
    </div>`;
  }
}

/**
 * Get page title by ID
 */
function getPageTitle(pageId) {
  const titles = {
    dashboard: 'الملخص التنفيذي',
    tiktok: 'تيك توك',
    instagram: 'إنستقرام',
    googlemap: 'جوجل ماب',
    campaign: 'حملة عرض الغداء',
    comparison: 'مقارنة مارس / أبريل',
    production: 'الإنتاج المرئي',
    management: 'إدارة الحسابات',
    operations: 'إنجازات تشغيلية'
  };
  return titles[pageId] || 'لوحة التحكم';
}

/**
 * Initialize router
 */
export function initRouter() {
  // Set up nav item click handlers
  document.querySelectorAll('.nav-item[data-page]').forEach(item => {
    item.addEventListener('click', () => {
      const page = item.dataset.page;
      navigateTo(page);
      
      // Close mobile sidebar if open
      if (window.innerWidth <= 900) {
        document.getElementById('sidebar')?.classList.remove('open');
      }
    });
  });

  // Handle browser back/forward
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    if (hash && PAGES.includes(hash)) {
      showPage(hash);
    }
  });

  // Handle initial page load
  const initialHash = window.location.hash.slice(1);
  const initialPage = PAGES.includes(initialHash) ? initialHash : 'dashboard';
  showPage(initialPage);
}

/**
 * Tab switching within pages
 */
export function showTab(tabId, btn) {
  const parent = btn.parentElement;
  parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  
  const container = parent.parentElement;
  container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');
  
  // Re-init charts in new tab
  initCharts(currentPage);
}

// Expose showTab globally for inline buttons
window.showTab = showTab;
