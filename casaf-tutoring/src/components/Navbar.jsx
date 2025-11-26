// src/components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";

const navLinkClass =
  "px-3 py-2 text-sm font-medium hover:text-casafGold transition";

export default function Navbar() {
  return (
    <header className="bg-casafBlue text-white shadow">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight">
            CASAF Tutoring
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/tutors" className={navLinkClass}>
            Tutors
          </NavLink>
          <NavLink to="/subjects" className={navLinkClass}>
            Subjects
          </NavLink>
          <NavLink to="/request" className={navLinkClass}>
            Request a Tutor
          </NavLink>
          <NavLink to="/ai-tutor" className={navLinkClass}>
            AI Tutor
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Login button */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/login"
            className="px-3 py-1.5 text-sm font-semibold rounded-md border border-white/40 hover:bg-white hover:text-casafBlue transition"
          >
            Login
          </NavLink>
        </div>
      </div>
    </header>
  );
}