import React, { useState } from "react";

export default function RequestTutor() {
  const [form, setForm] = useState({
    studentName: "",
    email: "",
    level: "",
    subject: "",
    mode: "online",
    details: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      const res = await fetch("http://localhost:5000/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (!res.ok) {
        setStatus(data.message || "Something went wrong.");
        return;
      }
      setStatus("Thanks! Our team will contact you shortly.");
      setForm({
        studentName: "",
        email: "",
        level: "",
        subject: "",
        mode: "online",
        details: ""
      });
    } catch (err) {
      console.error(err);
      setStatus("Network error.");
    }
  };

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="mb-2 text-2xl font-semibold">Request a Tutor</h1>
        <p className="mb-6 text-sm text-slate-600">
          Tell us a bit about your needs and we’ll match you with a specialist
          tutor.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Student name
              </label>
              <input
                name="studentName"
                value={form.studentName}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Contact email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                required
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Level
              </label>
              <select
                name="level"
                value={form.level}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                required
              >
                <option value="">Select level…</option>
                <option>Primary</option>
                <option>Secondary</option>
                <option>Undergraduate</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-slate-700">
                Subject
              </label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
                required
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-xs font-medium text-slate-700">
                Mode
              </label>
              <select
                name="mode"
                value={form.mode}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
              >
                <option value="online">Online</option>
                <option value="in_person">In person</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700">
              Tell us about your goals, exams, or challenges
            </label>
            <textarea
              name="details"
              rows={4}
              value={form.details}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          <button
            type="submit"
            className="rounded-full bg-amber-400 px-6 py-2 text-sm font-semibold text-slate-900"
          >
            Submit Request
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