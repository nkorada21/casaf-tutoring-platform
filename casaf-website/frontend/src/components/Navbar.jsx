import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header className="bg-slate-900 text-slate-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          CASAF Tutors
        </Link>
        <nav className="hidden gap-4 text-sm md:flex">
          <Link to="/find-tutor">Find a Tutor</Link>
          <Link to="/request-tutor">Request a Tutor</Link>
          <Link to="/become-tutor">Become a Tutor</Link>
        </nav>

        <div className="flex items-center gap-2">
          {token ? (
            <>
              <span className="hidden text-sm text-slate-300 md:inline">
                Hi, {name}
              </span>
              {role === "student" && (
                <button
                  onClick={() => navigate("/student/dashboard")}
                  className="rounded-full bg-slate-100 px-4 py-1 text-xs font-medium text-slate-900"
                >
                  Student Dashboard
                </button>
              )}
              {role === "tutor" && (
                <button
                  onClick={() => navigate("/tutor/dashboard")}
                  className="rounded-full bg-slate-100 px-4 py-1 text-xs font-medium text-slate-900"
                >
                  Tutor Dashboard
                </button>
              )}
              <button
                onClick={handleLogout}
                className="rounded-full border border-slate-500 px-4 py-1 text-xs"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-full border border-slate-500 px-4 py-1 text-xs"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="rounded-full bg-amber-400 px-4 py-1 text-xs font-semibold text-slate-900"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}