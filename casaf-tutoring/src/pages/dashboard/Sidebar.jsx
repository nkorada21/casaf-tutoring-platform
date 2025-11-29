// src/pages/dashboard/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBook, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {
  const { pathname } = useLocation();

  const menu = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { name: "My Lessons", icon: <FaBook />, path: "/dashboard/lessons" },
    { name: "Profile", icon: <FaUser />, path: "/dashboard/profile" },
    { name: "Settings", icon: <FaCog />, path: "/dashboard/settings" },
  ];

  return (
    <aside className="w-64 bg-[#252952] text-white p-6 space-y-6">
      <h2 className="text-2xl font-bold">CASAF</h2>

      <nav className="space-y-2">
        {menu.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-md transition 
              ${pathname === item.path ? "bg-orange-500" : "hover:bg-white/10"}
            `}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <button className="flex items-center gap-3 px-4 py-2 mt-10 rounded-md bg-red-600 hover:bg-red-700 w-full">
        <FaSignOutAlt /> Logout
      </button>
    </aside>
  );
}