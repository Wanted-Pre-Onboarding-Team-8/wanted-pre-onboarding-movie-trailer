import axios from 'axios';
import { BASE_URL, HTTP_METHODS } from '../consts';

const customAxios = axios.create({
  baseURL: BASE_URL,
  params: { api_key: '88a9e902a5cfd8c9c19a18181208f960', language: 'ko-KR' },
  headers: {
    'Content-Type': 'application/json',
  },
});

const createApiMethod = (axiosInstance, methodType) => (config) => {
  return axiosInstance({ ...config, method: methodType });
};

export default {
  get: createApiMethod(customAxios, HTTP_METHODS.GET),
};
