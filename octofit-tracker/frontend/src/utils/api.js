const getApiUrl = (endpoint) => {
  const codespace = process.env.REACT_APP_CODESPACE_NAME;
  const baseUrl = codespace 
    ? `https://${codespace}-8000.app.github.dev`
    : 'http://localhost:8000';
  return `${baseUrl}/api/${endpoint}/`;
};

export default getApiUrl;
