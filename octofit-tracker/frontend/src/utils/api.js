/**
 * Get the base API URL based on the environment
 * @returns {string} The base URL for API requests
 */
export const getBaseUrl = () => {
  return process.env.REACT_APP_CODESPACE_NAME 
    ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev` 
    : 'http://localhost:8000';
};
