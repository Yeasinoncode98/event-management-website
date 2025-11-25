// .....vercel

// lib/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
// here we added baseURL to easily connected the backend server with Frontends Part
