import { useState, useRef, useEffect } from "react";
import TutoringMenu from "./TutoringMenu";
import AdmissionsMenu from "./AdmissionMenu";
import TopBar from "./TopBar";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef();

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={navRef}>
      <TopBar />

      <nav className="bg-[#252952] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="bg-orange-400 w-10 h-10 rounded-full flex items-center justify-center font-bold">
              CT
            </div>
            <div className="leading-tight">
              <div className="font-bold text-lg">CASAF Tutors</div>
              <div className="text-xs text-gray-200">Cameroon After School</div>
            </div>
          </a>

          {/* -------- DESKTOP MENU -------- */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-semibold">

            {/* ===== TUTORING MENU ===== */}
            <li
              className="relative"
              onClick={() => setOpenMenu(openMenu === "tutoring" ? null : "tutoring")
                }
            >
              <button className="hover:text-orange-300 flex items-center gap-1">
                Tutoring ▾
              </button>

              {openMenu === "tutoring" && (
                <div className="absolute left-0 top-full pt-3" onClick={(e) => e.stopPropagation()}>
                  <TutoringMenu />
                </div>
              )}
            </li>

            {/* ===== UNIVERSITY ADMISSIONS MENU ===== */}
            <li
              className="relative"
              onClick={() => setOpenMenu(openMenu === "admissions" ? null : "admissions")
                }
            >
              <button className="hover:text-orange-300 flex items-center gap-1">
                University Admissions ▾
              </button>

              {openMenu === "admissions" && (
                <div className="absolute left-0 top-full pt-3" onClick={(e) => e.stopPropagation()}>
                  <AdmissionsMenu />
                </div>
              )}
            </li>

            {/* Regular links */}
            <li><a href="/resources" className="hover:text-orange-300">Resources</a></li>
            <li><a href="/find-tutors" className="hover:text-orange-300">Find Tutors</a></li>
            <li><a href="/pricing" className="hover:text-orange-300">Pricing</a></li>
            <li><a href="/login" className="hover:text-orange-300">Log In</a></li>

            <li>
              <a href="/signup" className="text-orange-300 hover:text-orange-200">
                Become a Tutor
              </a>
            </li>

            <li>
              <a
                href="/request-tutor"
                className="bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-full"
              >
                Request Tutor
              </a>
            </li>
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button className="lg:hidden text-2xl">☰</button>
        </div>
      </nav>
    </div>
  );
}