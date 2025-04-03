export const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:5005",
  itemsPerPage: Number(import.meta.env.VITE_ITEMS_PER_PAGE) || 12,
  autoRefreshInterval:
    Number(import.meta.env.VITE_AUTO_REFRESH_INTERVAL) || 60000,
  debounceDelay: Number(import.meta.env.VITE_DEBOUNCE_DELAY) || 500,
} as const;
