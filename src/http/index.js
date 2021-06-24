import axios from 'axios';

const API_URL = process.env.REACT_APP_API_SCHEME + process.env.REACT_APP_API_HOST + process.env.REACT_APP_API_BASE_PATH;

const $host = axios.create({
  baseURL: API_URL
});

const $authHost = axios.create({
  baseURL: API_URL
});

const authInterceptor = config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
}

$authHost.interceptors.request.use(authInterceptor);

export {
  $host,
  $authHost
}