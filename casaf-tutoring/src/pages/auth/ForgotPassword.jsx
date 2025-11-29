import { useState } from "react";
import { forgotPassword } from "../../api/auth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setError("");
    try {
      const res = await forgotPassword({ email });
      setMsg(res.data.message);
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F9EDE3] flex justify-center items-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-[#252952] mb-2">
          Reset Your Password
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Enter your email address and we’ll send you a reset link.
        </p>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        {msg && <p className="text-green-600 text-sm mb-3">{msg}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-3 focus:ring focus:ring-orange-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF8A3D] hover:bg-[#ff7a1b] text-white py-3 rounded-lg font-semibold"
          >
            Send Reset Email
          </button>
        </form>
      </div>
    </div>
  );
}