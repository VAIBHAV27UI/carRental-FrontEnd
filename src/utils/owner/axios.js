import axios from 'axios'

const API = axios.create({
    baseURL: "https://car-rental-back-end-rho.vercel.app/api"
    
})


API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export default API