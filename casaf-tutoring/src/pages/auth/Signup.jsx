import { useState } from "react";
import { registerUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "tuition_client",
  });
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMsg("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const { name, email, password, role } = form;
      const res = await registerUser({ name, email, password, role });
      setMsg(res.message);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9EDE3] flex justify-center items-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-xl w-full">
        <h1 className="text-2xl font-bold text-[#252952] mb-2">
          Create your CASAF account
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          One account for tutoring and admissions support.
        </p>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        {msg && <p className="text-green-600 text-sm mb-3">{msg}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              Full Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:ring focus:ring-orange-200"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:ring focus:ring-orange-200"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring focus:ring-orange-200"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:ring focus:ring-orange-200"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              Account Type
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:ring focus:ring-orange-200"
            >
              <option value="tuition_client">Tuition Client</option>
              <option value="consultancy_client">Admissions / Consultancy</option>
              <option value="tutor">Tutor</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF8A3D] hover:bg-[#ff7a1b] text-white py-3 rounded-lg font-semibold disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-xs text-gray-500">
          By creating an account you agree to our{" "}
          <span className="text-orange-600 cursor-pointer">Terms</span> and{" "}
          <span className="text-orange-600 cursor-pointer">Privacy Policy</span>.
        </p>

        <p className="mt-4 text-xs text-gray-500">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-orange-600 hover:underline"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}