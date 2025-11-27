import React, { useState, useEffect } from "react";

export default function FindTutor() {
  const [tutors, setTutors] = useState([]);
  const [subjectFilter, setSubjectFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/tutors/public")
      .then((res) => res.json())
      .then(setTutors)
      .catch(console.error);
  }, []);

  const filtered = tutors.filter((tutor) =>
    subjectFilter
      ? tutor.subjects.some((s) =>
          s.toLowerCase().includes(subjectFilter.toLowerCase())
        )
      : true
  );

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="mb-4 text-2xl font-semibold">Find a Tutor</h1>
        <div className="mb-4 flex gap-2">
          <input
            type="text"
            placeholder="Search by subject…"
            className="w-full rounded-full border border-slate-300 px-4 py-2 text-sm"
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
          />
        </div>
        {filtered.length === 0 ? (
          <p className="text-sm text-slate-500">No tutors found.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {filtered.map((tutor) => (
              <article
                key={tutor._id}
                className="rounded-xl bg-white p-4 shadow-sm"
              >
                <h3 className="text-sm font-semibold">
                  {tutor.user?.name || "Tutor"}
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  {tutor.subjects.join(", ")}
                </p>
                <p className="mt-2 text-xs">
                  {tutor.bio?.slice(0, 90) || "Experienced subject tutor."}
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  {tutor.location || "Online"}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}