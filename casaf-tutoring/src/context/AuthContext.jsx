import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // { id, name, email, role }

  useEffect(() => {
    const saved = localStorage.getItem("casaf_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (userObj) => {
    setUser(userObj);
    localStorage.setItem("casaf_user", JSON.stringify(userObj));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("casaf_user");
    localStorage.removeItem("casaf_token"); // also clear token on logout
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}