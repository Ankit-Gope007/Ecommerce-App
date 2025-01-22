const api = axios.create({
    baseURL: 'https://ecommerce-app-backend-kyd3.onrender.com',
    withCredentials: true
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
