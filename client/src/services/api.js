import axios from 'axios';

const api = axios.create({
  baseURL: 'http://hoove.herokuapp.com',
});

export default api;
