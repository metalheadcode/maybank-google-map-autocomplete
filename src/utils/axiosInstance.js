import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_GOOGLE_MAP_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});
