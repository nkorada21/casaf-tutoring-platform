import axios from "axios";

// Take backend base URL from Vercel env variable
const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL;

// Create axios instance
const api = axios.create({
  baseURL: `${API_BASE}/api`,   // Example: https://casaftutoring.onrender.com/api
  withCredentials: true,        // Only needed if you use cookies
});

// AUTH ROUTES
export const registerUser = (data) => api.post("/auth/register", data);
export const loginUser = (data) => api.post("/auth/login", data);
export const logoutUser = () => api.post("/auth/logout");

export const forgotPassword = (data) => api.post("/auth/forgot-password", data);
export const resetPassword = (data) => api.post("/auth/reset-password", data);

export const fetchMe = () => api.get("/auth/me");