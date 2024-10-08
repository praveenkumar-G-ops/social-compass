import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NODE_ENV === "development" ? import.meta.env.VITE_BACKEND_BASE_URL : "/api",
    withCredentials: true
});

export default axiosInstance;