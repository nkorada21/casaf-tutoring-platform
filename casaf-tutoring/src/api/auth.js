import axios from "axios";

// Backend URL from .env
const API = import.meta.env.VITE_BACKEND_URL + "/api";

// Axios instance
const api = axios.create({
  baseURL: API,
  withCredentials: true,
});

// REGISTER
export const registerUser = async (userData) => {
  const response = await api.post("/api/auth/register", userData);
  return response.data;
};

// LOGIN
export const loginUser = async (userData) => {
  const response = await api.post("/api/auth/login", userData);
  return response.data;
};

// LOGOUT
export const logoutUser = async () => {
  const response = await api.post("/api/auth/logout");
  return response.data;
};

// CHECK AUTH STATUS
export const checkAuth = async () => {
  const response = await api.get("/api/auth/status");
  return response.data;
};

// FORGOT PASSWORD
export const forgotPassword = async (email) => {
  const response = await api.post("/api/auth/forgot-password", { email });
  return response.data;
};

// RESET PASSWORD
export const resetPassword = async (token, newPassword) => {
  const response = await api.post(`/api/auth/reset-password/${token}`, {
    newPassword,
  });
  return response.data;
};