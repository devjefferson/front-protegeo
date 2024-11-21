import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://front-protegeo.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  
  },
});