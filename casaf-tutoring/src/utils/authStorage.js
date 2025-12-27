const USER_KEY = "casaf_user";

/**
 * Get authenticated user safely
 * Uses sessionStorage → auto logout when tab/browser closes
 */
export const getAuthUser = () => {
  try {
    const raw = sessionStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.error("Failed to parse auth user:", err);
    return null;
  }
};

/**
 * Save authenticated user and notify app
 */
export const setAuthUser = (user) => {
  if (!user) return;

  sessionStorage.setItem(USER_KEY, JSON.stringify(user));

  // Notify Navbar / AuthContext immediately
  window.dispatchEvent(new Event("authChanged"));
};

/**
 * Clear authentication completely and notify app
 */
export const clearAuthUser = () => {
  sessionStorage.removeItem(USER_KEY);

  // Notify Navbar / AuthContext immediately
  window.dispatchEvent(new Event("authChanged"));
};

/**
 * Helper: derive login state from user
 */
export const isLoggedIn = () => {
  return !!getAuthUser();
};