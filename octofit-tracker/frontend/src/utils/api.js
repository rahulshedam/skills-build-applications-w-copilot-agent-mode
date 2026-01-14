// Helper function to construct API URLs based on environment
export const getApiUrl = (endpoint) => {
  const baseUrl = process.env.REACT_APP_CODESPACE_NAME
    ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev`
    : 'http://localhost:8000';
  
  return `${baseUrl}/api/${endpoint}/`;
};
