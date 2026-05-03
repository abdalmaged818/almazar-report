/* scripts/auth.js — Authentication module */

const CREDENTIALS = { username: 'almazar', password: 'Almazar2026' };
const SESSION_KEY = 'almazar_auth';

/**
 * Check if user is authenticated
 */
export function isAuthenticated() {
  return sessionStorage.getItem(SESSION_KEY) === 'true';
}

/**
 * Authenticate user with credentials
 * Returns true if successful, false otherwise
 */
export function login(username, password) {
  if (username === CREDENTIALS.username && password === CREDENTIALS.password) {
    sessionStorage.setItem(SESSION_KEY, 'true');
    return true;
  }
  return false;
}

/**
 * Log out user
 */
export function logout() {
  sessionStorage.removeItem(SESSION_KEY);
}

/**
 * Guard function - redirect to login if not authenticated
 */
export function requireAuth() {
  if (!isAuthenticated()) {
    window.location.href = '/index.html';
    return false;
  }
  return true;
}

/**
 * Initialize auth on login page
 */
export function initLoginPage() {
  const form = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const errorMsg = document.getElementById('errorMsg');
  const loginBtn = document.getElementById('loginBtn');

  // If already authenticated, go to dashboard
  if (isAuthenticated()) {
    window.location.href = '/dashboard.html';
    return;
  }

  function handleLogin() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (login(username, password)) {
      window.location.href = '/dashboard.html';
    } else {
      errorMsg.classList.add('show');
      setTimeout(() => errorMsg.classList.remove('show'), 2500);
    }
  }

  if (loginBtn) {
    loginBtn.addEventListener('click', handleLogin);
  }

  if (passwordInput) {
    passwordInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleLogin();
    });
  }

  if (usernameInput) {
    usernameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') passwordInput && passwordInput.focus();
    });
  }
}
