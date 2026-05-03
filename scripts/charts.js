/* scripts/charts.js — Chart.js configurations */
import { REPORT_DATA } from './data.js';

const COLORS = {
  primary: '#8B3A2B', primaryLight: '#A65A4A', olive: '#6F7F6A',
  beige: '#E8E1D9', success: '#2E7D32', warning: '#F9A825',
  danger: '#C62828', info: '#1565C0', text: '#1F1F1F', textLight: '#6B6B6B',
};

const chartRegistry = {};

function setChartDefaults() {
  if (typeof Chart === 'undefined') return;
  Chart.defaults.font.family = "'Tajawal', sans-serif";
  Chart.defaults.color = COLORS.textLight;
  Chart.defaults.borderColor = '#EAE6E1';
}

function destroyChart(id) {
  if (chartRegistry[id]) {
    chartRegistry[id].destroy();
    delete chartRegistry[id];
  }
}

export function destroyCharts() {
  Object.keys(chartRegistry).forEach(destroyChart);
}

function createChart(id, config) {
  const canvas = document.getElementById(id);
  if (!canvas) return;
  destroyChart(id);
  chartRegistry[id] = new Chart(canvas, config);
  return chartRegistry[id];
}

function baseLineOptions(extra = {}) {
  return {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: false, grid: { color: '#F0EDE8' } },
      x: { grid: { display: false } }
    }, ...extra
  };
}

function baseBarOptions(extra = {}) {
  return {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, grid: { color: '#F0EDE8' } },
      x: { grid: { display: false } }
    }, ...extra
  };
}

/* === DASHBOARD === */
function initSalesOverviewChart() {
  const days = Array.from({length: 30}, (_, i) => i + 1);
  const salesData = days.map(d => {
    const base = 12000;
    const variance = Math.sin(d * 0.4) * 2500 + Math.cos(d * 0.7) * 1500;
    return Math.round(base + variance + (Math.random() * 1500 - 750));
  });
  createChart('salesOverviewChart', {
    type: 'line',
    data: {
      labels: days.map(d => d + ' أبريل'),
      datasets: [{ label: 'المبيعات اليومية', data: salesData, borderColor: COLORS.primary, backgroundColor: 'rgba(139,58,43,0.1)', fill: true, tension: 0.4, pointRadius: 3, pointBackgroundColor: COLORS.primary, pointBorderColor: '#fff', pointBorderWidth: 2 }]
    },
    options: baseLineOptions()
  });
}

/* === TIKTOK === */
function initTikTokCharts() {
  const { demographics } = REPORT_DATA.tiktok;

  createChart('ttGenderChart', {
    type: 'doughnut',
    data: { labels: ['إناث', 'ذكور', 'أخرى'], datasets: [{ data: [demographics.gender.female, demographics.gender.male, demographics.gender.other], backgroundColor: [COLORS.primary, COLORS.olive, COLORS.beige], borderWidth: 0 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { padding: 16, usePointStyle: true } } }, cutout: '60%' }
  });

  createChart('ttAgeChart', {
    type: 'bar',
    data: { labels: demographics.age.map(a => a.range), datasets: [{ data: demographics.age.map(a => a.pct), backgroundColor: COLORS.primary, borderRadius: 8, barThickness: 36 }] },
    options: { ...baseBarOptions(), plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: '#F0EDE8' }, ticks: { callback: v => v + '%' } }, x: { grid: { display: false } } } }
  });
}

/* === INSTAGRAM === */
function initInstagramCharts() {
  const { contentDistribution, audienceHours, stories } = REPORT_DATA.instagram;

  createChart('igContentChart', {
    type: 'doughnut',
    data: { labels: ['الريلز', 'الستوريز', 'المنشورات'], datasets: [{ data: [contentDistribution.reels, contentDistribution.stories, contentDistribution.posts], backgroundColor: [COLORS.primary, COLORS.primaryLight, COLORS.olive], borderWidth: 0 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { padding: 16, usePointStyle: true } } }, cutout: '60%' }
  });

  createChart('igHoursChart', {
    type: 'line',
    data: { labels: audienceHours.map(h => h.time), datasets: [{ label: 'النشاط', data: audienceHours.map(h => h.count), borderColor: COLORS.primary, backgroundColor: 'rgba(139,58,43,0.1)', fill: true, tension: 0.4, pointRadius: 5, pointBackgroundColor: COLORS.primary, pointBorderColor: '#fff', pointBorderWidth: 2 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, grid: { color: '#F0EDE8' } }, x: { grid: { display: false } } } }
  });

  createChart('igStoriesChart', {
    type: 'bar',
    data: { labels: stories.top10Views.map((_, i) => String(i + 1)), datasets: [{ label: 'مشاهدات', data: stories.top10Views, backgroundColor: COLORS.primary, borderRadius: 6 }] },
    options: baseBarOptions()
  });
}

/* === GOOGLE MAPS === */
function initGoogleMapsCharts() {
  const { ratings, weeklyBreakdown } = REPORT_DATA.googleMaps;

  createChart('gmRatingChart', {
    type: 'bar',
    data: { labels: ['5 نجوم', '4 نجوم', '3 نجوم', '2 نجوم', '1 نجمة'], datasets: [{ data: [ratings.fiveStars, ratings.fourStars, ratings.threeStars, ratings.twoStars, ratings.oneStar], backgroundColor: [COLORS.success, COLORS.olive, COLORS.warning, COLORS.primaryLight, COLORS.danger], borderRadius: 8 }] },
    options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true, grid: { color: '#F0EDE8' } }, y: { grid: { display: false } } } }
  });

  createChart('gmWeeklyChart', {
    type: 'bar',
    data: {
      labels: weeklyBreakdown.map(w => w.week),
      datasets: [
        { label: '5 نجوم', data: weeklyBreakdown.map(w => w.five), backgroundColor: COLORS.success, borderRadius: 4 },
        { label: '4 نجوم', data: weeklyBreakdown.map(w => w.four), backgroundColor: COLORS.olive, borderRadius: 4 },
        { label: '3 نجوم', data: weeklyBreakdown.map(w => w.three), backgroundColor: COLORS.warning, borderRadius: 4 },
        { label: '2 نجوم', data: weeklyBreakdown.map(w => w.two), backgroundColor: COLORS.primaryLight, borderRadius: 4 },
        { label: '1 نجمة', data: weeklyBreakdown.map(w => w.one), backgroundColor: COLORS.danger, borderRadius: 4 }
      ]
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } }, scales: { y: { beginAtZero: true, stacked: true, grid: { color: '#F0EDE8' } }, x: { stacked: true, grid: { display: false } } } }
  });
}

/* === CAMPAIGN === */
function initCampaignCharts() {
  const { lunch } = REPORT_DATA.sales;
  createChart('campaignSalesChart', {
    type: 'bar',
    data: { labels: ['قبل الحملة', 'الأسبوع الأول', 'شهر أبريل كامل'], datasets: [{ label: 'متوسط مبيعات الغداء اليومي (ريال)', data: [lunch.before.daily, lunch.firstWeek.daily, lunch.full.daily], backgroundColor: [COLORS.textLight, COLORS.warning, COLORS.success], borderRadius: 12, barThickness: 80 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ctx.parsed.y.toLocaleString() + ' ريال' } } }, scales: { y: { beginAtZero: true, grid: { color: '#F0EDE8' }, ticks: { callback: v => v.toLocaleString() } }, x: { grid: { display: false } } } }
  });
}

/* === COMPARISON === */
function initComparisonCharts() {
  const { april, march } = REPORT_DATA.sales;
  const tt = REPORT_DATA.tiktok;
  const gm = REPORT_DATA.googleMaps;

  createChart('compSalesChart', {
    type: 'bar',
    data: { labels: ['إجمالي المبيعات', 'عدد الفواتير (×100)', 'المتوسط اليومي'], datasets: [{ label: 'مارس', data: [march.total, march.invoices * 100, march.dailyAvg], backgroundColor: COLORS.textLight, borderRadius: 8 }, { label: 'أبريل', data: [april.total, april.invoices * 100, april.dailyAvg], backgroundColor: COLORS.primary, borderRadius: 8 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } }, scales: { y: { beginAtZero: true, grid: { color: '#F0EDE8' } }, x: { grid: { display: false } } } }
  });

  createChart('compTiktokChart', {
    type: 'bar',
    data: { labels: ['المشاهدات (×1000)', 'اللايكات', 'التعليقات', 'المشاركات'], datasets: [{ label: 'مارس', data: [tt.marchComparison.views/1000, tt.marchComparison.likes, tt.marchComparison.comments, tt.marchComparison.shares], backgroundColor: COLORS.textLight, borderRadius: 6 }, { label: 'أبريل', data: [tt.overview.views/1000, tt.overview.likes, tt.overview.comments, tt.overview.shares], backgroundColor: COLORS.primary, borderRadius: 6 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } }, scales: { y: { beginAtZero: true, grid: { color: '#F0EDE8' } }, x: { grid: { display: false } } } }
  });

  createChart('compGoogleChart', {
    type: 'bar',
    data: { labels: ['التفاعلات', 'الاتجاهات', 'المكالمات', 'زيارات الموقع', 'مشاهدات القائمة'], datasets: [{ label: 'مارس', data: [gm.marchComparison.totalInteractions, gm.marchComparison.directions, gm.marchComparison.calls, gm.marchComparison.websiteVisits, gm.marchComparison.menuViews], backgroundColor: COLORS.textLight, borderRadius: 6 }, { label: 'أبريل', data: [gm.overview.totalInteractions, gm.overview.directions, gm.overview.calls, gm.overview.websiteVisits, gm.overview.menuViews], backgroundColor: COLORS.primary, borderRadius: 6 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } }, scales: { y: { beginAtZero: true, grid: { color: '#F0EDE8' } }, x: { grid: { display: false } } } }
  });
}

/* === PRODUCTION === */
function initProductionCharts() {
  const { weekly } = REPORT_DATA.production;
  createChart('prodWeeklyChart', {
    type: 'bar',
    data: { labels: weekly.map(w => w.week), datasets: [{ label: 'تيك توك', data: weekly.map(w => w.tiktok), backgroundColor: COLORS.primary, borderRadius: 6 }, { label: 'إنستقرام', data: weekly.map(w => w.instagram), backgroundColor: COLORS.olive, borderRadius: 6 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } }, scales: { y: { beginAtZero: true, grid: { color: '#F0EDE8' } }, x: { grid: { display: false } } } }
  });
}

/* === MANAGEMENT === */
function initManagementCharts() {
  const { weeklyTikTok, weeklyInstagram } = REPORT_DATA.management;
  createChart('mgmtTtChart', {
    type: 'line',
    data: { labels: weeklyTikTok.map(w => w.week), datasets: [{ label: 'تعليقات', data: weeklyTikTok.map(w => w.comments), borderColor: COLORS.primary, tension: 0.4, fill: false, pointRadius: 5 }, { label: 'محادثات', data: weeklyTikTok.map(w => w.conversations), borderColor: COLORS.olive, tension: 0.4, fill: false, pointRadius: 5 }, { label: 'ستوريز', data: weeklyTikTok.map(w => w.stories), borderColor: COLORS.primaryLight, tension: 0.4, fill: false, pointRadius: 5 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } }, scales: { y: { beginAtZero: true, grid: { color: '#F0EDE8' } }, x: { grid: { display: false } } } }
  });

  createChart('mgmtIgChart', {
    type: 'line',
    data: { labels: weeklyInstagram.map(w => w.week), datasets: [{ label: 'تعليقات', data: weeklyInstagram.map(w => w.comments), borderColor: COLORS.primary, tension: 0.4, fill: false, pointRadius: 5 }, { label: 'محادثات', data: weeklyInstagram.map(w => w.conversations), borderColor: COLORS.olive, tension: 0.4, fill: false, pointRadius: 5 }, { label: 'ريلز', data: weeklyInstagram.map(w => w.reels), borderColor: COLORS.warning, tension: 0.4, fill: false, pointRadius: 5 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } }, scales: { y: { beginAtZero: true, grid: { color: '#F0EDE8' } }, x: { grid: { display: false } } } }
  });
}

const PAGE_CHARTS = {
  dashboard: initSalesOverviewChart,
  tiktok: initTikTokCharts,
  instagram: initInstagramCharts,
  googlemap: initGoogleMapsCharts,
  campaign: initCampaignCharts,
  comparison: initComparisonCharts,
  production: initProductionCharts,
  management: initManagementCharts,
};

export function initCharts(pageId) {
  if (typeof Chart === 'undefined') return;
  setChartDefaults();
  
  const initFn = PAGE_CHARTS[pageId];
  if (initFn) {
    setTimeout(() => {
      try { initFn(); } catch(e) { console.error('Chart init error:', e); }
    }, 100);
  }
}
