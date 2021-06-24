import { $host, $authHost } from './index';
import jwtDecode from 'jwt-decode';

export const registration = async (email, password) => {
  const {data} = await $host.post('/users/registration', { email, password, role: 'admin' })
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
};

export const login = async (email, password) => {
  const {data} = await $host.post('/users/login', { email, password, role: 'admin' })
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
};

export const check = async () => {
  const {data} = await $authHost.get('/users/auth');
  localStorage.setItem('token', data.token);
  return jwtDecode(data.token);
};