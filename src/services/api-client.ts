import axios from 'axios';

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: API_KEY,
  },
});

export default apiClient;
