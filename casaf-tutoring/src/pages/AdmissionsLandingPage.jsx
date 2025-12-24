import { Link, useParams } from "react-router-dom";

const SAMPLE_TESTIMONIALS = [
  {
    name: "Student A",
    text: "CASAF guided my full application and helped me improve my confidence for interviews.",
  },
  {
    name: "Student B",
    text: "Clear strategy + weekly review sessions made the process easy and structured.",
  },
];

export default function AdmissionsLandingPage() {
  const { _category, slug } = useParams();

  const title = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase())
    : "University Admissions";

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="px-4 pt-10 pb-12">
        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              {title} <span className="bg-lime-200 px-2 rounded">Support</span>
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              We help you plan your strategy, prepare documents, and stay on track from start to finish.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/find-tutors"
                className="rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-200"
              >
                Find Tutors →
              </Link>
              <Link
                to="/request-tutor"
                className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600"
              >
                Contact Us →
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="rounded-3xl overflow-hidden shadow-sm ring-1 ring-slate-200">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80"
              alt="University admissions"
              className="h-[420px] md:h-[560px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* STAGES / PROCESS */}
      <section className="px-4 py-14 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center">
            Get Assistance With Every Stage Of The <span className="bg-lime-200 px-2 rounded">Application Process</span>
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 items-start">
            {/* Left “path” placeholder */}
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <p className="text-slate-700 font-semibold">Your step-by-step journey</p>
              <ol className="mt-5 space-y-4 text-slate-600 text-sm">
                <li>1) Course selection</li>
                <li>2) Personal statement</li>
                <li>3) Profile building</li>
                <li>4) Test preparation</li>
                <li>5) Interview support</li>
              </ol>

              <Link
                to="/request-tutor"
                className="mt-6 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600"
              >
                Request Tutor →
              </Link>
            </div>

            {/* Right cards */}
            <div className="space-y-4">
              {[
                {
                  h: "Course Selection",
                  p: "We review your goals and recommend the best course + university options.",
                },
                {
                  h: "Personal Statement Development",
                  p: "We help you write a standout statement with structure, clarity, and impact.",
                },
                {
                  h: "Profile & Experience",
                  p: "We strengthen your profile with projects, activities, and evidence of interest.",
                },
                {
                  h: "Admissions Test Preparation",
                  p: "Practice and feedback to improve time management and performance.",
                },
                {
                  h: "Interview Support",
                  p: "Mock interviews + targeted feedback to prepare for real questions.",
                },
              ].map((card) => (
                <div
                  key={card.h}
                  className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
                >
                  <h3 className="font-bold text-slate-900">{card.h}</h3>
                  <p className="mt-2 text-sm text-slate-600">{card.p}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-slate-600">
            90% of our students receive an offer from their first or second choice university.
          </p>
        </div>
      </section>

      {/* WHAT SETS US APART */}
      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center">
            What Sets Us Apart?
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Expertly Vetted", "Only experienced tutors with quality checks and proven results."],
              ["Related Experience", "Admissions experts who understand your target universities."],
              ["Insider Knowledge", "Practical guidance on what reviewers actually look for."],
              ["Proven Track Record", "Structured plans with measurable progress each week."],
              ["Progress Tracking", "Regular updates so you always know what’s next."],
              ["Get Started Today", "Quick onboarding, clear roadmap, and fast support."],
            ].map(([h, p]) => (
              <div
                key={h}
                className="rounded-3xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-200"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-slate-900">{h}</h3>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-700 font-bold">
                    ✓
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-600">{p}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/request-tutor"
              className="rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white hover:bg-orange-600"
            >
              Talk to us →
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-4 py-14 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center">
            Student Testimonials
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {SAMPLE_TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
              >
                <p className="text-slate-700 leading-relaxed">“{t.text}”</p>
                <p className="mt-4 text-sm font-bold text-slate-900">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}