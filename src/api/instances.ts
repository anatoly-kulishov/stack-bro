import axios from 'axios';

import { API_BASE_PATH, API_KEY } from '../constants/api';

export const authInstance = axios.create({
  withCredentials: true,
  baseURL: API_BASE_PATH,
});

export const baseInstance = axios.create({
  withCredentials: true,
  baseURL: API_BASE_PATH,
  headers: {
    'API-KEY': API_KEY,
  },
});
