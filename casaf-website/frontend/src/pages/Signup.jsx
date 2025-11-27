import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student"
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (!res.ok) {
        setStatus(data.message || "Something went wrong.");
        return;
      }

      // decode token? For now, store role & name from form
      localStorage.setItem("token", data.token);
      localStorage.setItem("name", form.name);
      localStorage.setItem("role", form.role);

      navigate(
        form.role === "tutor" ? "/tutor/dashboard" : "/student/dashboard"
      );
    } catch (err) {
      console.error(err);
      setStatus("Network error.");
    }
  };

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-md px-4">
        <h1 className="mb-2 text-2xl font-semibold">Create your account</h1>
        <p className="mb-4 text-sm text-slate-600">
          Join CASAF Tutors as a student or tutor.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-700">
              Full name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              required
            />
          </div>
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
              Password (min 6 characters)
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              minLength={6}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700">
              I am a…
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            >
              <option value="student">Student</option>
              <option value="tutor">Tutor</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-amber-400 px-6 py-2 text-sm font-semibold text-slate-900"
          >
            Sign Up
          </button>
          {status && (
            <p className="text-sm text-slate-700" aria-live="polite">
              {status}
            </p>
          )}
        </form>
        <p className="mt-3 text-xs text-slate-600">
          Already have an account?{" "}
          <Link to="/login" className="font-semibold">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}