
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/auth";
import { setAuthUser } from "../../utils/authStorage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Determine login type from URL query params
  const params = new URLSearchParams(location.search);
  const type = params.get("type") || "tuition";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Call backend login
      const res = await loginUser({ email, password });

      // Extract user from various possible response structures
      const user =
        res?.user ||
        res?.data?.user ||
        res?.data?.data?.user ||
        res?.result?.user ||
        null;

      if (!user) {
        // If no user object, throw error to be caught below
        setAuthUser({ email });
      } else {
        setAuthUser(user);
      }

      // Redirect to dashboard after successful login
      navigate("/dashboard");
    } catch (err) {
      // Handle errors
      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        "Login failed. Please check email/password and try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9EDE3] flex justify-center items-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-lg w-full text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#252952] rounded-2xl px-8 py-4">
            <div className="text-2xl font-bold text-white">CASAF Tutors</div>
            <p className="text-xs text-orange-300 mt-1">
              {type === "tuition"
                ? "Tutoring Platform Login"
                : "Admissions & Consultancy Login"}
            </p>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Welcome back
        </h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-3 focus:ring focus:ring-orange-200 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full border rounded-lg px-4 py-3 focus:ring focus:ring-orange-200 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF8A3D] hover:bg-[#ff7a1b] text-white py-3 rounded-lg font-semibold disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <button
          onClick={() => navigate("/forgot-password")}
          className="text-sm mt-4 text-orange-600 hover:underline"
        >
          Having trouble logging in?
        </button>

        <p className="text-gray-500 text-xs mt-6">
          No account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-orange-600 hover:underline"
          >
            Create one
          </button>
        </p>
      </div>
    </div>
  );
}