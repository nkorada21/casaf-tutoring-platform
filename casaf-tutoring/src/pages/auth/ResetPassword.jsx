import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../../api/auth";

export default function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const token = params.get("token");
  const email = params.get("email");

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setError("");

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await resetPassword({ email, token, password });
      setMsg(res.data.message);
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Could not reset password.");
    }
  };

  if (!token || !email) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Invalid password reset link.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9EDE3] flex justify-center items-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-[#252952] mb-2">
          Choose a new password
        </h1>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        {msg && <p className="text-green-600 text-sm mb-3">{msg}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              New Password
            </label>
            <input
              type="password"
              className="w-full border rounded-lg px-4 py-3 focus:ring focus:ring-orange-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full border rounded-lg px-4 py-3 focus:ring focus:ring-orange-200"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF8A3D] hover:bg-[#ff7a1b] text-white py-3 rounded-lg font-semibold"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}