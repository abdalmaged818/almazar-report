/* scripts/main.js — App entry point */
import { requireAuth, logout } from './auth.js';
import { initRouter } from './router.js';

/**
 * Initialize the dashboard app
 */
function initApp() {
  // Check authentication
  if (!requireAuth()) return;
  
  // Show the app
  const app = document.getElementById('app');
  if (app) app.classList.add('show');
  
  // Initialize router (handles page navigation)
  initRouter();
  
  // Set up mobile menu toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const sidebar = document.getElementById('sidebar');
  
  if (mobileBtn && sidebar) {
    mobileBtn.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
    
    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 900 && 
          !sidebar.contains(e.target) && 
          !mobileBtn.contains(e.target) &&
          sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
      }
    });
  }
  
  // Set up logout button
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', handleLogout);
  }
  
  // Update sidebar meta with report period
  updateSidebarMeta();
}

/**
 * Handle logout
 */
function handleLogout() {
  logout();
  window.location.href = './index.html';
}

/**
 * Update sidebar with report data
 */
function updateSidebarMeta() {
  // Dynamic import of data to keep main.js clean
  import('./data.js').then(({ REPORT_DATA }) => {
    const period = document.getElementById('reportPeriod');
    if (period) {
      period.textContent = REPORT_DATA.meta.monthEn.toUpperCase() + ' ' + REPORT_DATA.meta.year;
    }
  }).catch(() => {});
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
