import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/auth";
import { useAuth } from "../../context/AuthContext.jsx";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submittingRef = useRef(false); // hard lock
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();

  const params = new URLSearchParams(location.search);
  const type = params.get("type") || "tuition"; // keep if backend uses it

  const handleSubmit = async (e) => {
    e.preventDefault();

    // prevents double submit 100%
    if (submittingRef.current) return;
    submittingRef.current = true;

    setError("");
    setLoading(true);

    try {
      const res = await loginUser({ email, password, type });

      // normalize response safely
      const userObj = res?.user || res?.data?.user || res?.data || null;

      if (!userObj) {
        throw new Error("Login succeeded but user data was missing.");
      }

      // only ONE source of truth: AuthContext
      login(userObj);

      navigate("/dashboard");
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        err?.message ||
        "Login failed. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
      submittingRef.current = false; // unlock
    }
  };

  return (
    <div className="min-h-screen bg-[#F9EDE3] flex justify-center items-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-lg w-full text-center">
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
          disabled={loading}
        >
          Having trouble logging in?
        </button>

        <p className="text-gray-500 text-xs mt-6">
          No account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-orange-600 hover:underline"
            disabled={loading}
          >
            Create one
          </button>
        </p>
      </div>
    </div>
  );
}