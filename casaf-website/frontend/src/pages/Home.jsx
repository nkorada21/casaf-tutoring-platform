import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tutors/public")
      .then((res) => res.json())
      .then(setTutors)
      .catch(console.error);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-800 py-12 text-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 md:flex-row md:items-start">
          <div className="flex-1">
            <h1 className="mb-4 text-3xl font-semibold md:text-4xl">
              World-class tutoring for every learner.
            </h1>
            <p className="mb-6 text-sm text-slate-200 md:text-base">
              CASAF Tutors connects students with carefully vetted tutors across
              primary, secondary and university levels — online and in person.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/request-tutor"
                className="rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-slate-900"
              >
                Request a Tutor
              </Link>
              <Link
                to="/find-tutor"
                className="rounded-full border border-slate-500 px-5 py-2 text-sm"
              >
                Browse Tutors
              </Link>
            </div>
          </div>
          <div className="flex-1 rounded-2xl bg-slate-900/40 p-6 shadow-lg">
            <h2 className="mb-3 text-sm font-semibold text-slate-200">
              How it works
            </h2>
            <ol className="space-y-3 text-sm text-slate-200">
              <li>1. Tell us what you need help with.</li>
              <li>2. We match you with a specialist tutor.</li>
              <li>3. Start lessons online or in person.</li>
              <li>4. Track progress with clear feedback.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* FEATURED TUTORS */}
      <section className="bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-xl font-semibold">Featured Tutors</h2>
          {tutors.length === 0 ? (
            <p className="text-sm text-slate-500">
              No tutors approved yet. Check back soon.
            </p>
          ) : (
            <div className="grid gap-4 md:grid-cols-3">
              {tutors.map((tutor) => (
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

      {/* TESTIMONIALS */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-xl font-semibold">What students say</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm">
                “CASAF Tutors helped my daughter move from struggling to
                confident in maths in just a term.”
              </p>
              <p className="mt-2 text-xs text-slate-500">Parent, Secondary</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm">
                “The one-to-one sessions are focused, flexible and really
                supportive.”
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Undergraduate, Computer Science
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}