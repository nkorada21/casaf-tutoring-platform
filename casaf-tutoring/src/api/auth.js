import axios from "axios";

/**
 * Backend URL from .env
 * Example: VITE_BACKEND_URL=https://casaf-tutoring-backend.vercel.app
 */
const RAW_API = import.meta.env.VITE_BACKEND_URL;

// Don’t crash app at import time.
// Remove trailing slash to avoid double-slash bugs.
const API = (RAW_API || "").trim().replace(/\/+$/, "");

// Create Axios instance
const api = axios.create({
  baseURL: API,              // e.g. https://... (no trailing slash)
  withCredentials: true,     // ok even if you don't use cookies
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Helper: readable error
const getErrorMessage = (err) => {
  const data = err?.response?.data;
  const msg = data?.message || data?.error || err?.message || "Unknown API error";
  return typeof msg === "string" ? msg : JSON.stringify(msg);
};

// Request interceptor: fail only when request is made
api.interceptors.request.use((config) => {
  if (!API) {
    throw new Error("VITE_BACKEND_URL is missing in your .env file");
  }
  return config;
});

// Response interceptor: clean logs
api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("API ERROR:", err?.response?.status, getErrorMessage(err), err?.response?.data);
    return Promise.reject(err);
  }
);

/**
 * Normalize backend response so frontend always gets user consistently.
 */
const normalizeUser = (payload) => {
  if (!payload) return null;
  return payload.user || payload.data?.user || payload.result?.user || null;
};

// REGISTER
export const registerUser = async (userData) => {
  const res = await api.post("/api/auth/register", userData);
  return res.data;
};

// LOGIN (PRODUCTION-SAFE FOR VERCEL)
export const loginUser = async ({ email, password, type }) => {
  const body = { email, password, type };

  try {
    // First attempt
    const res = await api.post("/api/auth/login", body);
    const payload = res.data;

    return {
      ...payload,
      user: normalizeUser(payload),
    };
  } catch (err) {
    const status = err?.response?.status;

    // Retry ONCE if backend is cold (500 / 502 / 503)
    if (status >= 500) {
      await new Promise((resolve) => setTimeout(resolve, 800));

      const retryRes = await api.post("/api/auth/login", body);
      const retryPayload = retryRes.data;

      return {
        ...retryPayload,
        user: normalizeUser(retryPayload),
      };
    }

    // Any other error (400, 401, etc.)
    throw err;
  }
};

// LOGOUT
export const logoutUser = async () => {
  const res = await api.post("/api/auth/logout");
  return res.data;
};

// CHECK AUTH STATUS
export const checkAuth = async () => {
  const res = await api.get("/api/auth/status");
  const payload = res.data;

  return {
    ...payload,
    user: normalizeUser(payload),
  };
};

// FORGOT PASSWORD
export const forgotPassword = async (email) => {
  const res = await api.post("/api/auth/forgot-password", { email });
  return res.data;
};

// RESET PASSWORD
export const resetPassword = async ({ email, token, newPassword }) => {
  const res = await api.post("/api/auth/reset-password", {
    email,
    token,
    newPassword,
  });
  return res.data;
};

export default api;