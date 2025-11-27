import React, { useState } from "react";

export default function BecomeTutor() {
  const [form, setForm] = useState({
    subjects: "",
    levels: "",
    bio: "",
    location: "",
    hourlyRate: ""
  });
  const [status, setStatus] = useState("");

  const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!token) {
      setStatus("Please login as a tutor to submit an application.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/tutors/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          ...form,
          subjects: form.subjects.split(",").map((s) => s.trim()),
          levels: form.levels.split(",").map((l) => l.trim())
        })
      });

      const data = await res.json();
      if (!res.ok) {
        setStatus(data.message || "Something went wrong.");
        return;
      }
      setStatus("Thanks! Your tutor application has been submitted.");
    } catch (err) {
      console.error(err);
      setStatus("Network error.");
    }
  };

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="mb-2 text-2xl font-semibold">Become a Tutor</h1>
        <p className="mb-6 text-sm text-slate-600">
          Share your expertise with students. Complete the form below and our
          team will review your application.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-700">
              Subjects (comma separated)
            </label>
            <input
              name="subjects"
              value={form.subjects}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700">
              Levels (e.g. Primary, Secondary, Undergraduate)
            </label>
            <input
              name="levels"
              value={form.levels}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700">
              Location
            </label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700">
              Hourly rate (USD)
            </label>
            <input
              type="number"
              name="hourlyRate"
              value={form.hourlyRate}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700">
              Short bio
            </label>
            <textarea
              name="bio"
              rows={4}
              value={form.bio}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-amber-400 px-6 py-2 text-sm font-semibold text-slate-900"
          >
            Submit Application
          </button>
          {status && (
            <p className="text-sm text-slate-700" aria-live="polite">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}