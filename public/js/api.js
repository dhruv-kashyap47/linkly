// Backend API response shapes (from reading the source):
// POST /api/auth/register → { user: { id, email }, userToken }
// POST /api/auth/login    → { user: { id, email }, userToken }
// POST /api/shorten       → { originalUrl, shortCode, shortUrl }
// GET  /api/urls/my-links → { count, urls: [...Url] }
// GET  /api/urls/:code/stats         → { originalUrl, shortCode, totalClicks, createdAt }
// GET  /api/urls/:code/clicks-by-day → { shortCode, clicksByDay: [{ _id: 'YYYY-MM-DD', count }] }
// GET  /api/urls/:code/clicks-by-referrer → { shortCode, clicksByReferrer: [{ _id: 'referrer', count }] }
//
// Error responses:  { error: "message" }  (from errorHandler)
// Validation errors: { errors: [{ msg }] } (from express-validator)

const API_BASE = '/api';

const api = {
  async request(endpoint, options = {}) {
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle express-validator array errors
      if (data.errors && Array.isArray(data.errors)) {
        throw new Error(data.errors.map(e => e.msg).join('. '));
      }
      // Handle AppError single error
      throw new Error(data.error || 'Something went wrong');
    }

    return data;
  },

  auth: {
    login: (email, password) => api.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    }),
    register: (email, password) => api.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    })
  },

  urls: {
    shorten: (originalUrl) => api.request('/shorten', {
      method: 'POST',
      body: JSON.stringify({ originalUrl })
    }),
    getMyLinks: () => api.request('/urls/my-links'),
    getStats: (code) => api.request(`/urls/${code}/stats`),
    getClicksByDay: (code) => api.request(`/urls/${code}/clicks-by-day`),
    getClicksByReferrer: (code) => api.request(`/urls/${code}/clicks-by-referrer`)
  }
};
