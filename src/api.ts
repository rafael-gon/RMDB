import axios from 'axios';

const apiKey = '8820f597ad57ecd4cdb03eda10adcbeb';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['api_key'] = apiKey;
  return config;
});

export default api;
