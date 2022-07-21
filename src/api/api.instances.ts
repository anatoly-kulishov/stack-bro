import axios from 'axios';

import { API_BASE_PATH, API_KEY } from '../configs/constants';

export const authInstance = axios.create({
  withCredentials: true,
  baseURL: API_BASE_PATH,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const baseInstance = axios.create({
  withCredentials: true,
  baseURL: API_BASE_PATH,
  headers: {
    'API-KEY': API_KEY,
    'Content-Type': 'application/json',
  },
});
