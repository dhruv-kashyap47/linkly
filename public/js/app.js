// app.js — shared state, toast system, auth guard
// Loaded before page-specific scripts on every page.

// ── State ─────────────────────────────────────────────
let currentUser = null;

(function init() {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (payload.exp * 1000 > Date.now()) {
        currentUser = { id: payload.id };
      } else {
        // token expired
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    } catch (e) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }
  updateNav();
})();

function updateNav() {
  const authLinks = document.getElementById('auth-links');
  const userLinks = document.getElementById('user-links');
  const logoutBtn = document.getElementById('logout-btn');

  if (currentUser) {
    authLinks && authLinks.classList.add('hidden');
    userLinks && userLinks.classList.remove('hidden');
  } else {
    authLinks && authLinks.classList.remove('hidden');
    userLinks && userLinks.classList.add('hidden');
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      showToast('Logged out. See you soon!', 'info');
      setTimeout(() => { window.location.href = '/'; }, 900);
    });
  }
}

// ── Toast System ──────────────────────────────────────
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const icons = { success: '✓', error: '✕', info: '→' };

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type] || '→'}</span><span>${message}</span>`;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('show'));
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 500);
  }, 3500);
}

// ── Form helpers ──────────────────────────────────────
function showError(elementId, message) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.textContent = message;
  el.classList.remove('hidden');
}

function hideError(elementId) {
  const el = document.getElementById(elementId);
  if (el) el.classList.add('hidden');
}
