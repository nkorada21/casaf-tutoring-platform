import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (!res.ok) {
        setStatus(data.message || "Invalid credentials.");
        return;
      }

      // In a real app, decode token; here we'll just fetch role from backend later.
      localStorage.setItem("token", data.token);

      // Quick trick: fetch profile? For now we'll keep it simple:
      // assume student by default (or you can store role in token's payload and decode on frontend).
      // To keep this example short:
      localStorage.setItem("role", "student");
      localStorage.setItem("name", form.email.split("@")[0]);

      navigate("/student/dashboard");
    } catch (err) {
      console.error(err);
      setStatus("Network error.");
    }
  };

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-md px-4">
        <h1 className="mb-2 text-2xl font-semibold">Login</h1>
        <p className="mb-4 text-sm text-slate-600">
          Access your dashboard and tutoring requests.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-slate-50"
          >
            Login
          </button>
          {status && (
            <p className="text-sm text-slate-700" aria-live="polite">
              {status}
            </p>
          )}
        </form>
        <p className="mt-3 text-xs text-slate-600">
          New here?{" "}
          <Link to="/signup" className="font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}