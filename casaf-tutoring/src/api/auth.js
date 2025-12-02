import axios from "axios";

// Vite exposes env variables ONLY through import.meta.env
const API_BASE = import.meta.env.VITE_BACKEND_URL;

console.log("API BASE =", API_BASE); // <-- this should print correctly after deploy

const api = axios.create({
  baseURL: `${API_BASE}/api`,
  withCredentials: true,
});

// AUTH ROUTES
export const registerUser = (data) => api.post("/auth/register", data);
export const loginUser = (data) => api.post("/auth/login", data);
export const logoutUser = () => api.post("/auth/logout");
export const forgotPassword = (data) => api.post("/auth/forgot-password", data);
export const resetPassword = (data) => api.post("/auth/reset-password", data);
export const fetchMe = () => api.get("/auth/me");
