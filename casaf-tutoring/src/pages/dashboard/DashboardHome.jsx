import { Link } from "react-router-dom";

export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-slate-900">
        Welcome to your Dashboard
      </h1>
      <p className="mt-2 text-slate-600">
        Choose a learning path, track lessons, and communicate with your tutor.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl border p-5">
          <h3 className="font-bold text-slate-900">Choose Learning Path</h3>
          <p className="text-sm text-slate-600 mt-1">
            Pick your subject and level to get matched faster.
          </p>
          <Link to="/find-tutors" className="text-orange-600 font-semibold text-sm mt-3 inline-block">
            Select subject →
          </Link>
        </div>

        <div className="rounded-2xl border p-5">
          <h3 className="font-bold text-slate-900">My Lessons</h3>
          <p className="text-sm text-slate-600 mt-1">
            See upcoming lessons and history.
          </p>
          <Link to="/dashboard/lessons" className="text-orange-600 font-semibold text-sm mt-3 inline-block">
            View lessons →
          </Link>
        </div>

        <div className="rounded-2xl border p-5">
          <h3 className="font-bold text-slate-900">Request Tutor</h3>
          <p className="text-sm text-slate-600 mt-1">
            Send your requirements and get matched.
          </p>
          <Link to="/request-tutor" className="text-orange-600 font-semibold text-sm mt-3 inline-block">
            Request now →
          </Link>
        </div>
      </div>
    </div>
  );
}