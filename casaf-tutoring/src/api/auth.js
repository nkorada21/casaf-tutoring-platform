import axios from "axios";

const API = import.meta.env.VITE_BACKEND_URL;

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