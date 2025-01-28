// src/axiosInstance.js
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://popularitypredictor-backend-production.up.railway.app/api', // Replace with your backend URL
  headers: {
    'Content-Type': 'multipart/form-data', // Default header for file uploads
  },
});

export default axiosInstance;
