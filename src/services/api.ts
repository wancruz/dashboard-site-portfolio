import axios from 'axios';

const api = axios.create({
  baseURL: 'https://json-server-jeqs.onrender.com',
});
export default api;
