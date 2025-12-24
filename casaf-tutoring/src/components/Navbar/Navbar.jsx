import { useState, useRef, useEffect, useCallback } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import TutoringMenu from "./TutoringMenu";
import AdmissionsMenu from "./AdmissionMenu";
import TopBar from "./TopBar";
import { logoutUser } from "../../api/auth";

// Make sure this path is correct.
import { useAuth } from "../../context/AuthContext.jsx";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null); // "tutoring" | "admissions" | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();

  // Auth context
  const { user, logout } = useAuth();

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus after navigation
  const closeAllMenus = useCallback(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, []);

  // Logout handler
  const onLogout = useCallback(async () => {
    try {
      await logoutUser(); // Call backend logout
    } catch (e) {
      console.error("Logout failed (backend). Logging out locally.", e);
    } finally {
      // Always logout locally
      logout();
      closeAllMenus();
      navigate("/");
    }
  }, [logout, closeAllMenus, navigate]);

  const baseLink = "hover:text-orange-300 transition-colors text-sm font-semibold";
  const activeLink = ({ isActive }) => `${baseLink} ${isActive ? "text-orange-300" : ""}`;

  return (
    <div ref={navRef} className="w-full">
      {/* TOP BAR */}
      <TopBar />

      {/* MAIN NAVBAR */}
      <nav className="bg-[#252952] text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-6 px-4 md:px-6 py-3 md:py-4">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2" onClick={closeAllMenus}>
            <div className="bg-orange-400 w-10 h-10 rounded-full flex items-center justify-center font-bold">
              CT
            </div>
            <div className="leading-tight hidden sm:block">
              <div className="font-bold text-lg">Tascam Co Ltd</div>
              <div className="text-xs text-gray-200">
                Tutors After School Cameroon Limited
              </div>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center justify-center gap-6 xl:gap-7 text-sm min-w-0">
            {/* TUTORING DROPDOWN */}
            <li className="relative">
              <button
                type="button"
                onClick={() => setOpenMenu(openMenu === "tutoring" ? null : "tutoring")}
                className="flex items-center gap-1 hover:text-orange-300"
              >
                Tutoring <span>▾</span>
              </button>

              {openMenu === "tutoring" && (
                <div className="absolute left-0 top-full pt-3" onClick={(e) => e.stopPropagation()}>
                  {/* TutoringMenu close navbar after click */}
                  <TutoringMenu onNavigate={closeAllMenus} />
                </div>
              )}
            </li>

            {/* UNIVERSITY ADMISSIONS DROPDOWN */}
            <li className="relative">
              <button
                type="button"
                onClick={() => setOpenMenu(openMenu === "admissions" ? null : "admissions")}
                className="flex items-center gap-1 hover:text-orange-300"
              >
                University Admissions <span>▾</span>
              </button>

              {openMenu === "admissions" && (
                <div className="absolute left-0 top-full pt-3" onClick={(e) => e.stopPropagation()}>
                  <AdmissionsMenu onNavigate={closeAllMenus} />
                </div>
              )}
            </li>

            {/* NORMAL LINKS */}
            <li>
              <NavLink to="/resources" className={activeLink} onClick={closeAllMenus}>
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink to="/find-tutors" className={activeLink} onClick={closeAllMenus}>
                Find Tutors
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing" className={activeLink} onClick={closeAllMenus}>
                Pricing
              </NavLink>
            </li>

            {/* RIGHT ACTIONS (keeps buttons aligned + not cut off) */}
            <div className="hidden lg:flex items-center gap-3 justify-end">
              {/* AUTH LINKS */}
              {!user ? (
                <li>
                  <NavLink to="/choose-login" className={activeLink} onClick={closeAllMenus}>
                  Log In
                </NavLink>
              </li>
              ) : (
              <>
                <li>
                  <NavLink to="/dashboard" className={activeLink} onClick={closeAllMenus}>
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={onLogout}
                    className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700 transition"
                  >
                    Logout
                  </button>
                </li>
              </> 
              )}
              <li>
              <NavLink
                to="/signup"
                className="text-orange-300 hover:text-orange-200 text-sm font-semibold"
                onClick={closeAllMenus}
              >
                Become a Tutor
              </NavLink> 
              </li>
              
              <li>
              <NavLink
                to="/request-tutor"
                className="bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold"
                onClick={closeAllMenus}
              >
                Request Tutor
              </NavLink>
              </li>
            </div>
          </ul>

          {/* MOBILE HAMBURGER */}
          <button
            className="lg:hidden text-2xl focus:outline-none"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU PANEL */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#252952]">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3 text-sm">
              <details>
                <summary className="flex items-center justify-between cursor-pointer py-2">
                  <span>Tutoring</span>
                  <span>▾</span>
                </summary>
                <div className="mt-2 pl-3 text-xs text-gray-200 space-y-1">
                  <Link to="/subjects/all" onClick={closeAllMenus}>
                    See Full Subjects List →
                  </Link>
                  <Link to="/tutoring/university" onClick={closeAllMenus}>
                    University Tutors
                  </Link>
                  <Link to="/tutoring/online" onClick={closeAllMenus}>
                    Online Tutors
                  </Link>
                </div>
              </details>

              <details>
                <summary className="flex items-center justify-between cursor-pointer py-2">
                  <span>University Admissions</span>
                  <span>▾</span>
                </summary>
                <div className="mt-2 pl-3 text-xs text-gray-200 space-y-1">
                  <Link to="/admissions/undergraduate" onClick={closeAllMenus}>
                    Undergraduate
                  </Link>
                  <Link to="/admissions/postgraduate" onClick={closeAllMenus}>
                    Postgraduate
                  </Link>
                  <Link to="/admissions/us" onClick={closeAllMenus}>
                    US Admissions
                  </Link>
                </div>
              </details>

              <NavLink to="/resources" className={activeLink} onClick={closeAllMenus}>
                Resources
              </NavLink>

              <NavLink to="/find-tutors" className={activeLink} onClick={closeAllMenus}>
                Find Tutors
              </NavLink>

              <NavLink to="/pricing" className={activeLink} onClick={closeAllMenus}>
                Pricing
              </NavLink>

              {!user ? (
                <NavLink to="/choose-login" className={activeLink} onClick={closeAllMenus}>
                  Log In
                </NavLink>
              ) : (
                <>
                  <NavLink to="/dashboard" className={activeLink} onClick={closeAllMenus}>
                    Dashboard
                  </NavLink>
                  <button
                    type="button"
                    onClick={onLogout}
                    className="rounded-2xl bg-red-600 px-4 py-2 text-left text-sm font-semibold text-white hover:bg-red-700 transition"
                  >
                    Logout
                  </button>
                </>
              )}

              <NavLink
                to="/signup"
                className="text-orange-300 hover:text-orange-200 text-sm font-semibold"
                onClick={closeAllMenus}
              >
                Become a Tutor
              </NavLink>

              <NavLink
                to="/request-tutor"
                className="mt-2 bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-full text-center text-sm font-semibold"
                onClick={closeAllMenus}
              >
                Request Tutor
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}