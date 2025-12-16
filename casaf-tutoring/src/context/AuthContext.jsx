import { createContext, useContext, useEffect, useState } from "react";
import { logoutUser } from "../api/auth";
import axios from "axios";

const AuthContext = createContext(null);

const API = import.meta.env.VITE_BACKEND_URL;

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  const fetchMe = async () => {
    try {
      const res = await axios.get(`${API}/api/auth/me`, { withCredentials: true });
      setUser(res.data);
    } catch {
      setUser(null);
    } finally {
      setLoadingAuth(false);
    }
  };

  useEffect(() => {
    fetchMe();
  }, []);

  const logout = async () => {
    await logoutUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loadingAuth, fetchMe, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);