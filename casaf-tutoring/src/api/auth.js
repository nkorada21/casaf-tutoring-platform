
import axios from "axios";

// Backend URL from .env
const API = import.meta.env.VITE_BACKEND_URL;

if (!API) {
  // Ensure the backend URL is set
  throw new Error("VITE_BACKEND_URL is missing in your .env file");
}

// Axios instance
const api = axios.create({
  baseURL: API, // e.g. https://casaf-tutoring-backend.vercel.app
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Response interceptor for error handling
api.interceptors.response.use(
  (res) => res,
  (err) => {
    const status = err?.response?.status;
    const msg = err?.response?.data?.message || err?.message;
    console.error("API ERROR:", status, msg, err?.response?.data);
    return Promise.reject(err);
  }
);

// REGISTER
export const registerUser = async (userData) => {
  const response = await api.post("/api/auth/register", userData);
  return response.data;
};

// LOGIN
export const loginUser = async ({ email, password }) => {
  const response = await api.post("/api/auth/login", { email, password });
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
export const resetPassword = async ({ email, token, newPassword }) => {
  const response = await api.post("/api/auth/reset-password", {
    email,
    token,
    newPassword,
  });
  return response.data;
};