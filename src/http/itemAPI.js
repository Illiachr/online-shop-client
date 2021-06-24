import { $host, $authHost } from './index';
import jwtDecode from 'jwt-decode';

export const createType = async (type) => {
  const {data} = await $authHost.post('/types', type);
  return data;
};

export const fetchTypes = async () => {
  const {data} = await $host.get('/types');
  return data;
};

export const createBrand = async (brand) => {
  const {data} = await $authHost.post('/brands', brand);
  return data;
};

export const fetchBrands = async () => {
  const {data} = await $host.get('/brands');
  return data;
};

export const fetchItems = async () => {
  const {data} = await $host.get('/items');
  return data;
};

export const fetchOneItem = async (id) => {
  const {data} = await $host.get(`/items/${id}`);
  return data;
};