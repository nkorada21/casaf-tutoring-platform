// src/components/Navbar/Navbar.jsx
import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import TutoringMenu from "./TutoringMenu";
import AdmissionsMenu from "./AdmissionMenu";
import TopBar from "./TopBar";
import { getAuthUser, clearAuthUser } from "../../utils/authStorage";
import { logoutUser } from "../../api/auth";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null); // "tutoring" | "admissions" | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState(null);
  
  const navRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const syncAuth = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };
    syncAuth();
    window.addEventListener("storage", syncAuth);
    return () => window.removeEventListener("storage", syncAuth);
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (e) {
      console.error("Logout failed", e);
    } finally {
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
      setMobileOpen(false);
      navigate("/login");
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Load auth user
  useEffect(() => {
    setUser(getAuthUser());
  }, []);

  const onLogout = async () => {
    try {
      // If backend supports cookie-based logout
      await logoutUser();
    } catch (e) {
      console.error("Logout failed", e);
    } finally {
      clearAuthUser();
      setUser(null);
      navigate("/");
    }
  };

  const baseLink =
    "hover:text-orange-300 transition-colors text-sm font-semibold";

  const activeLink = ({ isActive }) =>
    `${baseLink} ${isActive ? "text-orange-300" : ""}`;

  return (
    <div ref={navRef} className="w-full">
      {/* TOP BAR */}
      <TopBar />

      {/* MAIN NAVBAR */}
      <nav className="bg-[#252952] text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-orange-400 w-10 h-10 rounded-full flex items-center justify-center font-bold">
              CT
            </div>
            <div className="leading-tight hidden sm:block">
              <div className="font-bold text-lg">Tascam Co Ltd</div>
              <div className="text-xs text-gray-200">Tutors After School Cameroon Limited</div>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-7 text-sm">
            {/* TUTORING DROPDOWN */}
            <li
              className="relative"
              onClick={() =>
                setOpenMenu(openMenu === "tutoring" ? null : "tutoring")
              }
            >
              <button className="flex items-center gap-1 hover:text-orange-300">
                Tutoring <span>▾</span>
              </button>

              {openMenu === "tutoring" && (
                <div
                  className="absolute left-0 top-full pt-3"
                  onClick={(e) => e.stopPropagation()}
                >
                  <TutoringMenu />
                </div>
              )}
            </li>

            {/* UNIVERSITY ADMISSIONS DROPDOWN */}
            <li
              className="relative"
              onClick={() =>
                setOpenMenu(openMenu === "admissions" ? null : "admissions")
              }
            >
              <button className="flex items-center gap-1 hover:text-orange-300">
                University Admissions <span>▾</span>
              </button>

              {openMenu === "admissions" && (
                <div
                  className="absolute left-0 top-full pt-3"
                  onClick={(e) => e.stopPropagation()}
                >
                  <AdmissionsMenu />
                </div>
              )}
            </li>

            {/* NORMAL LINKS */}
            <li>
              <NavLink to="/resources" className={activeLink}>
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink to="/find-tutors" className={activeLink}>
                Find Tutors
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing" className={activeLink}>
                Pricing
              </NavLink>
            </li>

            {/* - Auth links - */}
            {!user ? (
            <li><NavLink to="/choose-login" className={activeLink}>
                Log In
              </NavLink>
              </li>
              ) : (
                <>
                <li><NavLink to="/dashboard" className={activeLink}> Dashboard </NavLink></li>
                <li> <button onClick={onLogout}
                className= {`${baseLink} text-red-200 hover:text-red-100`} > Logout </button> </li>
                </>
              )}

            <li>
              <NavLink
                to="/signup"
                className="text-orange-300 hover:text-orange-200 text-sm font-semibold"
              >
                Become a Tutor
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/request-tutor"
                className="bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold"
              >
                Request Tutor
              </NavLink>
            </li>
          </ul>

          {/* MOBILE HAMBURGER */}
          <button
            className="lg:hidden text-2xl focus:outline-none"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu">
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MOBILE MENU PANEL */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 bg-[#252952]">
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3 text-sm">
              {/* Simple collapsible sections instead of mega menu */}
              <details>
                <summary className="flex items-center justify-between cursor-pointer py-2">
                  <span>Tutoring</span>
                  <span>▾</span>
                </summary>
                <div className="mt-2 pl-3 text-xs text-gray-200 space-y-1">
                  <Link to="/subjects" onClick={() => setMobileOpen(false)}>
                    See All Subjects →
                  </Link>
                  <Link
                    to="/tutoring/university"
                    onClick={() => setMobileOpen(false)}
                  >
                    University Tutors
                  </Link>
                  <Link
                    to="/tutoring/online"
                    onClick={() => setMobileOpen(false)}
                  >
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
                  <Link
                    to="/admissions/undergraduate"
                    onClick={() => setMobileOpen(false)}
                  >
                    Undergraduate
                  </Link>
                  <Link
                    to="/admissions/postgraduate"
                    onClick={() => setMobileOpen(false)}
                  >
                    Postgraduate
                  </Link>
                  <Link
                    to="/admissions/us"
                    onClick={() => setMobileOpen(false)}
                  >
                    US Admissions
                  </Link>
                </div>
              </details>

              <NavLink
                to="/resources"
                className={activeLink}
                onClick={() => setMobileOpen(false)}
              >
                Resources
              </NavLink>

              <NavLink
                to="/find-tutors"
                className={activeLink}
                onClick={() => setMobileOpen(false)}
              >
                Find Tutors
              </NavLink>

              <NavLink
                to="/pricing"
                className={activeLink}
                onClick={() => setMobileOpen(false)}
              >
                Pricing
              </NavLink>

              {!user ? (
              <NavLink
                to="/choose-login"
                className={activeLink}
                onClick={() => setMobileOpen(false)}
              >
                Log In
              </NavLink>
              ) : (
                <>
                <NavLink to="/dashboard" className={activeLink} onClick={() => setMobileOpen(false)}> Dashboard </NavLink>
                <button onClick={() => {setMobileOpen(false); onLogout(); }}
                className="text-left text-red-200 hover:text-red-100 font-semibold" > Logout </button>
                </>
              )}

              <NavLink
                to="/signup"
                className="text-orange-300 hover:text-orange-200 text-sm font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Become a Tutor
              </NavLink>

              <NavLink
                to="/request-tutor"
                className="mt-2 bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-full text-center text-sm font-semibold"
                onClick={() => setMobileOpen(false)}
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