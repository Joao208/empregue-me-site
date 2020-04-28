import axios from 'axios';

const api = axios.create({
  baseURL:'https://empregue-me-backend.herokuapp.com'
});

export default api;
