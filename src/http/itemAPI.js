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

export const createItem = async (item) => {
  const {data} = await $authHost.post('/items', item);
  return data;
};

export const fetchBrands = async () => {
  const {data} = await $host.get('/brands');
  return data;
};

export const fetchItems = async (typeId, brandId, page, limit = 5) => {
  const {data} = await $host.get('/items', { params: {
      typeId, brandId, page, limit
    }
  });
  return data;
};

export const fetchOneItem = async (id) => {
  const {data} = await $host.get(`/items/${id}`);
  return data;
};