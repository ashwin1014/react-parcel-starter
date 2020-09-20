const environment = process.env.REACT_APP_ENVIRONMENT;

const API_BASE_URL = {
  development: process.env.REACT_APP_API_BASE_URL_DEV,
  production: process.env.REACT_APP_API_BASE_URL_PROD
};

const CONFIG_HEADER = {
  development: {
    API_URL: API_BASE_URL[environment]
  },
  production: {
    API_URL: API_BASE_URL[environment]
  }
};

const apiConfig = Object.freeze({
  API_BASE_URL: API_BASE_URL[environment],
  HEADERS: CONFIG_HEADER[environment]
});

export default apiConfig;
