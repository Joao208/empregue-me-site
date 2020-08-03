import axios from 'axios';

const api = axios.create({
  baseURL:process.env.KEY_URL_BACKEND
});

api.interceptors.request.use(async config => {
  const token = sessionStorage.getItem('token') 

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})


export default api;
