import React, { useEffect, useState } from "react";

export default function StudentDashboard() {
  const [requests, setRequests] = useState([]);
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");

  useEffect(() => {
    fetch("http://localhost:5000/api/requests/my", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then(setRequests)
      .catch(console.error);
  }, [token]);

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-5xl px-4">
        <h1 className="mb-4 text-2xl font-semibold">
          Student Dashboard{ name ? ` – ${name}` : "" }
        </h1>
        <h2 className="mb-2 text-lg font-medium">Your tutor requests</h2>
        {requests.length === 0 ? (
          <p className="text-sm text-slate-600">
            You haven't submitted any requests yet.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {requests.map((r) => (
              <article
                key={r._id}
                className="rounded-xl bg-white p-4 shadow-sm"
              >
                <h3 className="text-sm font-semibold">{r.subject}</h3>
                <p className="mt-1 text-xs text-slate-500">{r.level}</p>
                <p className="mt-2 text-xs">{r.details}</p>
                <p className="mt-2 text-xs text-slate-500">
                  Status: <span className="font-medium">{r.status}</span>
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}