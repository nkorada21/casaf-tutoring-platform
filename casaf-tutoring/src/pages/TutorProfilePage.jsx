import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function TutorProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Demo tutor data (later replace with API call using id)
  const tutor = useMemo(() => {
    return {
      id,
      name:
        id?.charAt(0)?.toUpperCase() + id?.slice(1)?.replace(/-/g, " ") || "Tutor",
      rating: 5,
      reviews: 1842,
      hours: 2150,
      tagline: "Experienced tutor with a results-focused approach.",
      headline:
        "Highly experienced tutor helping students improve grades with structured support.",
      image:
        "https://images.unsplash.com/photo-1520975682031-ae900b0fd78f?w=1200&auto=format&fit=crop&q=60",
      badges: ["Background Checked", "Fast Response Time", "Online / Face to Face"],
      subjects: ["Mathematics", "Biology", "Chemistry"],
      levels: ["GCE O Level", "GCE A Level", "University"],
      about:
        "I focus on clear explanations, step-by-step practice, and exam strategy. Sessions are personalised to your level, goals, and timeline.",
      approach: [
        "Short diagnostic to find gaps",
        "Weekly plan + practice sets",
        "Exam techniques + time management",
        "Progress tracking + feedback",
      ],
      education: ["University of Sheffield", "University of Bath"],
      availability: ["Weekdays (Evenings)", "Saturday", "Online (Flexible)"],
    };
  }, [id]);

  const onRequestTutor = () => {
    // send to request tutor page, with tutor id so you can prefill later
    navigate(`/request-tutor?tutor=${encodeURIComponent(tutor.id)}`);
  };

  return (
    <main className="bg-slate-50 px-4 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        {/* Back */}
        <div className="mb-5">
          <Link
            to={-1}
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700"
          >
            ← Back
          </Link>
        </div>

        {/* Header Card */}
        <section className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden">
          <div className="grid md:grid-cols-[320px_1fr]">
            {/* Left: Image */}
            <div className="p-6 md:p-8">
              <img
                src={tutor.image}
                alt={tutor.name}
                className="h-64 w-full rounded-2xl object-cover ring-1 ring-slate-200"
              />

              {/* Quick stats */}
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-3">
                  <div className="text-xs text-slate-500">Rating</div>
                  <div className="mt-1 font-extrabold text-slate-900">
                    {tutor.rating}★
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-3">
                  <div className="text-xs text-slate-500">Reviews</div>
                  <div className="mt-1 font-extrabold text-slate-900">
                    {tutor.reviews}
                  </div>
                </div>
                <div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-3">
                  <div className="text-xs text-slate-500">Hours</div>
                  <div className="mt-1 font-extrabold text-slate-900">
                    {tutor.hours}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Details */}
            <div className="p-6 md:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                    {tutor.name}
                  </h1>
                  <p className="mt-2 text-slate-600">{tutor.tagline}</p>

                  {/* badges */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tutor.badges.map((b) => (
                      <span
                        key={b}
                        className="inline-flex items-center rounded-full bg-slate-50 ring-1 ring-slate-200 px-3 py-1 text-xs font-semibold text-slate-700"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA box */}
                <div className="w-full lg:w-[320px] rounded-3xl bg-slate-50 ring-1 ring-slate-200 p-5">
                  <div className="text-sm font-semibold text-slate-900">
                    Ready to start?
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    Request this tutor and we’ll confirm availability.
                  </p>

                  <button
                    onClick={onRequestTutor}
                    className="mt-4 w-full rounded-2xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition"
                  >
                    Request This Tutor
                  </button>

                  <Link
                    to="/request-tutor"
                    className="mt-3 block w-full text-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
                  >
                    Contact Us
                  </Link>

                  <div className="mt-3 text-xs text-slate-500">
                    Tutor ID: <span className="font-semibold">{tutor.id}</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-8">
                <h2 className="text-lg font-extrabold text-slate-900">
                  Overview
                </h2>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {tutor.headline}
                </p>
              </div>

              {/* Two columns sections */}
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-white ring-1 ring-slate-200 p-6">
                  <h3 className="font-extrabold text-slate-900">Subjects</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tutor.subjects.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-6 font-extrabold text-slate-900">Levels</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {tutor.levels.map((l) => (
                      <li key={l}>• {l}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl bg-white ring-1 ring-slate-200 p-6">
                  <h3 className="font-extrabold text-slate-900">Approach</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {tutor.approach.map((a) => (
                      <li key={a}>• {a}</li>
                    ))}
                  </ul>

                  <h3 className="mt-6 font-extrabold text-slate-900">
                    Availability
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {tutor.availability.map((t) => (
                      <li key={t}>• {t}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* About */}
              <div className="mt-8 rounded-3xl bg-white ring-1 ring-slate-200 p-6">
                <h3 className="font-extrabold text-slate-900">About</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {tutor.about}
                </p>

                <div className="mt-6">
                  <div className="font-extrabold text-slate-900">Attended</div>
                  <div className="mt-2 text-sm text-slate-600">
                    {tutor.education.map((e) => (
                      <div key={e}>{e}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-10 rounded-3xl bg-white ring-1 ring-slate-200 p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Want to improve your grades faster?
              </h3>
              <p className="mt-2 text-slate-600">
                Tell us your subject + level and we’ll match you with the best tutor.
              </p>
            </div>
            <Link
              to="/request-tutor"
              className="inline-flex justify-center rounded-2xl bg-orange-500 px-7 py-4 text-sm font-semibold text-white hover:bg-orange-600 transition"
            >
              Request Tutor →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}