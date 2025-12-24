import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const itemBase =
  "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition";

export default function DashboardLayout() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
          {/* Sidebar */}
          <aside className="rounded-3xl bg-[#252952] text-white p-5 shadow-sm">
            <div className="text-2xl font-extrabold mb-6">CASAF</div>

            <nav className="space-y-2">
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `${itemBase} ${
                    isActive ? "bg-orange-500 text-white" : "hover:bg-white/10"
                  }`
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/dashboard/lessons"
                className={({ isActive }) =>
                  `${itemBase} ${
                    isActive ? "bg-orange-500 text-white" : "hover:bg-white/10"
                  }`
                }
              >
                My Lessons
              </NavLink>

              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  `${itemBase} ${
                    isActive ? "bg-orange-500 text-white" : "hover:bg-white/10"
                  }`
                }
              >
                Profile
              </NavLink>

              <NavLink
                to="/dashboard/settings"
                className={({ isActive }) =>
                  `${itemBase} ${
                    isActive ? "bg-orange-500 text-white" : "hover:bg-white/10"
                  }`
                }
              >
                Settings
              </NavLink>
            </nav>

            <div className="mt-8 rounded-2xl bg-white/10 p-4">
              <div className="text-sm font-semibold">Account</div>
              <div className="text-xs text-white/70 mt-1">
                Role: {user?.role || "student"}
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="rounded-3xl bg-white p-6 md:p-8 shadow-sm ring-1 ring-slate-200">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}