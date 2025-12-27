
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getAuthUser, setAuthUser, clearAuthUser } from "../utils/authStorage";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // load user from localStorage immediately
  const [user, setUser] = useState(() => getAuthUser());
  const [loading, setLoading] = useState(true);

  // finish initial load (prevents Navbar flicker)
  useEffect(() => {
    setLoading(false);
  }, []);

  // keep app in sync without refresh
  // - authChanged: dispatched by authStorage.js after login/logout
  // - storage: sync across tabs/windows
  useEffect(() => {
    const sync = () => setUser(getAuthUser());

    sync();
    window.addEventListener("authChanged", sync);
    window.addEventListener("storage", sync);

    return () => {
      window.removeEventListener("authChanged", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  // login method used by Login.jsx
  const login = (userObj) => {
    setUser(userObj);
    setAuthUser(userObj); // also dispatches authChanged
  };

  // logout method used by Navbar.jsx
  const logout = () => {
    setUser(null);
    clearAuthUser(); // also dispatches authChanged

    // Optional: if you store tokens anywhere
    localStorage.removeItem("casaf_token");
  };

  const value = useMemo(
    () => ({
      user,
      isLoggedIn: !!user,
      loading, // important for Navbar (avoid flashing)
      login,
      logout,
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider />");
  return ctx;
}