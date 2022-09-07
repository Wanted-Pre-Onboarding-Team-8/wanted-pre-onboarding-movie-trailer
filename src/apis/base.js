import axios from 'axios';
import { BASE_URL } from '../consts/net';

const customAxios = axios.create({
  baseURL: BASE_URL,
  method: 'get',
  params: { api_key: process.env.REACT_APP_API_KEY },
  headers: {
    'Content-Type': 'application/json',
  },
});

export default customAxios;
