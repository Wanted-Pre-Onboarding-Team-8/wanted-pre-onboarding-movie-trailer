import axios from 'axios';
import { BASE_URL, HTTP_METHODS } from '../consts';

const customAxios = axios.create({
  baseURL: BASE_URL,
  params: { api_key: process.env.REACT_APP_API_KEY },
  headers: {
    'Content-Type': 'application/json',
  },
});

const createApiMethod = (axiosInstance, methodType) => {
  return axiosInstance({ method: methodType });
};

export default {
  get: createApiMethod(customAxios, HTTP_METHODS.GET),
};
