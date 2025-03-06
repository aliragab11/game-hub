import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'cd28c805f2044e44aae4b7beba16e928',
  },
});

export default apiClient;
