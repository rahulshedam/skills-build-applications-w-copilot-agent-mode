/**
 * Constructs the base API URL based on the environment.
 * In Codespaces, uses the REACT_APP_CODESPACE_NAME environment variable.
 * Otherwise, falls back to localhost.
 */
export const getApiBaseUrl = () => {
  return process.env.REACT_APP_CODESPACE_NAME 
    ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev`
    : 'http://localhost:8000';
};

/**
 * Constructs the full API URL for a given endpoint.
 * @param {string} endpoint - The API endpoint (e.g., '/api/teams/')
 * @returns {string} The full API URL
 */
export const getApiUrl = (endpoint) => {
  return `${getApiBaseUrl()}${endpoint}`;
};
