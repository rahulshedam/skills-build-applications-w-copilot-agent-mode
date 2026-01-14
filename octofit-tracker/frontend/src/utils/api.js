// API utility functions

/**
 * Get the base URL for API calls based on environment
 * @returns {string} The base URL (Codespaces URL or localhost)
 */
export const getApiBaseUrl = () => {
  return process.env.REACT_APP_CODESPACE_NAME 
    ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev`
    : 'http://localhost:8000';
};

/**
 * Get the full API endpoint URL
 * @param {string} endpoint - The API endpoint path (e.g., '/api/activities/')
 * @returns {string} The complete API URL
 */
export const getApiUrl = (endpoint) => {
  return `${getApiBaseUrl()}${endpoint}`;
};
