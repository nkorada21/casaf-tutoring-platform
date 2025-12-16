
export const getAuthUser = () => {
    try {
        return JSON.parse(localStorage.getItem("casaf_user")) || null;
    } catch {
        return null;
    }
};

export const setAuthUser = (user) => {
    localStorage.setItem("casaf_user", JSON.stringify(user));
};

export const clearAuthUser = () => {
    localStorage.removeItem("casaf_user");
};