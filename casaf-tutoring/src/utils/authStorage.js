const USER_KEY = "casaf_user";
const LOGIN_KEY = "isLoggedIn";

/**
 * Get authenticated user safely
 */
export const getAuthUser = () => {
  try {
    const raw = localStorage.getItem(USER_KEY);
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

  localStorage.setItem(USER_KEY, JSON.stringify(user));
  localStorage.setItem(LOGIN_KEY, "true");

  // notify Navbar / app instantly
  window.dispatchEvent(new Event("authChanged"));
};

/**
 * Clear authentication completely and notify app
 */
export const clearAuthUser = () => {
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(LOGIN_KEY);

  // notify Navbar / app instantly
  window.dispatchEvent(new Event("authChanged"));
};

/**
 * Simple helper (optional but useful)
 */
export const isLoggedIn = () => {
  return localStorage.getItem(LOGIN_KEY) === "true";
};