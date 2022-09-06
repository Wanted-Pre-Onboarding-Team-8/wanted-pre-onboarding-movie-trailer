import axios from 'axios';
import { BASE_URL } from '../consts';

const customAxios = axios.create({
  baseURL: BASE_URL,
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default customAxios;
