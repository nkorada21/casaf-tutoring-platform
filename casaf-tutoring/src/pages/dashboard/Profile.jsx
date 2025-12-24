import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-slate-900">Profile</h2>
      <div className="mt-4 rounded-2xl border p-5">
        <div className="text-sm text-slate-500">Name</div>
        <div className="font-semibold">{user?.name || "Student"}</div>
        <div className="mt-3 text-sm text-slate-500">Role</div>
        <div className="font-semibold">{user?.role || "student"}</div>
      </div>
    </div>
  );
}