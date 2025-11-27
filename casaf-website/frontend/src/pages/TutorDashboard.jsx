import React from "react";

export default function TutorDashboard() {
  const name = localStorage.getItem("name") || "Tutor";

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="mb-4 text-2xl font-semibold">
          Tutor Dashboard – {name}
        </h1>
        <p className="text-sm text-slate-600">
          In the future, this dashboard can show:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
          <li>Assigned students</li>
          <li>Upcoming sessions</li>
          <li>Timesheets and payments</li>
          <li>Messages from CASAF</li>
        </ul>
      </div>
    </section>
  );
}