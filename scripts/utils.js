/* scripts/utils.js — Helper utilities */

/**
 * Format a number with locale-specific thousands separator
 */
export function formatNumber(num) {
  if (num === null || num === undefined) return '—';
  return Number(num).toLocaleString('ar-SA');
}

/**
 * Format as currency (SAR)
 */
export function formatCurrency(num) {
  if (num === null || num === undefined) return '—';
  return Number(num).toLocaleString('ar-SA') + ' ريال';
}

/**
 * Format percentage
 */
export function formatPercent(num, decimals = 1) {
  if (num === null || num === undefined) return '—';
  return Number(num).toFixed(decimals) + '%';
}

/**
 * Format large numbers with K/M suffix
 */
export function formatCompact(num) {
  if (num === null || num === undefined) return '—';
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
  return String(num);
}

/**
 * Calculate percentage change
 */
export function calcChange(current, previous) {
  if (!previous) return null;
  return ((current - previous) / previous * 100).toFixed(1);
}

/**
 * Get trend class (up/down/neutral)
 */
export function getTrendClass(change) {
  const n = Number(change);
  if (n > 0) return 'up';
  if (n < 0) return 'down';
  return 'neutral';
}

/**
 * Get trend arrow
 */
export function getTrendArrow(change) {
  const n = Number(change);
  if (n > 0) return '▲';
  if (n < 0) return '▼';
  return '—';
}

/**
 * Create trend badge HTML
 */
export function trendBadge(current, previous, suffix = '') {
  if (!previous) return '';
  const change = calcChange(current, previous);
  const cls = getTrendClass(change);
  const arrow = getTrendArrow(change);
  const sign = change > 0 ? '+' : '';
  return `<span class="trend-${cls}">${arrow} ${sign}${change}%</span> ${suffix}`;
}

/**
 * Safely get nested object property
 */
export function get(obj, path, fallback = '—') {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : fallback), obj);
}
