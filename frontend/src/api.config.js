import axios from 'axios'
const api = axios.create({
    baseURL: 'https://ecommerce-app-backend-kyd3.onrender.com',
    withCredentials: true
});
const apip = axios.create({
    baseURL: 'https://ecommerce-app-backend-kyd3.onrender.com',
    withCredentials: true,
    productData, 
    headers: {
            'Content-Type': 'multipart/form-data',
        }
});
// Add this interceptor
api.interceptors.request.use(function (config) {
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});
export default api;
export default apip;
