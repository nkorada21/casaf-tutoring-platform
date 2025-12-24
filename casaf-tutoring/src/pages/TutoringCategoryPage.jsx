import { Link, useParams, useSearchParams } from "react-router-dom";

const toTitle = (slug = "") =>
  slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

function RatingStars({ value = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < value ? "text-orange-400" : "text-slate-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function TutorCardWide({ tutor }) {
  return (
    <div className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden">
      <div className="p-6 md:p-8 grid gap-6 md:grid-cols-[220px_1fr]">
        <img
          src={tutor.image}
          alt={tutor.name}
          className="h-44 w-44 md:h-48 md:w-48 rounded-2xl object-cover ring-1 ring-slate-200"
        />

        <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div className="flex items-center gap-3">
              <h3 className="text-3xl font-extrabold text-slate-900">
                {tutor.name}
              </h3>
              <RatingStars value={tutor.rating} />
            </div>
            <div className="text-sm font-semibold text-slate-700">
              {tutor.hours} Hours Taught
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">
            {tutor.badges?.map((b) => (
              <span key={b} className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-slate-300" />
                {b}
              </span>
            ))}
          </div>

          <div className="mt-4 text-sm font-semibold text-slate-900">
            {tutor.headline}
          </div>

          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            {tutor.bio}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="text-sm text-slate-600">
              <div className="font-semibold text-slate-900">Attended:</div>
              {tutor.attended?.map((a) => (
                <div key={a}>{a}</div>
              ))}
            </div>

            <Link
              to={`/tutor/${tutor.id}`}
              className="inline-flex justify-center rounded-2xl bg-orange-400 px-7 py-3 text-sm font-semibold text-white hover:bg-orange-500 transition"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TutoringCategoryPage() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const subject = searchParams.get("subject"); 

  const categoryTitle = toTitle(category); // university / gcse / alevel / ib / online
const subjectTitle = subject ? toTitle(subject) : categoryTitle;

// If subject exists: Online {Category} {Subject} Tutors
// If no subject: Online {Category} Tutors
const _headline = subject
  ? `Online ${categoryTitle} ${subjectTitle} Tutors`
  : `Online ${categoryTitle} Tutors`;

  // Sample tutors data (in real app, fetch from API or context)
  const tutors = [
    {
      id: "arjun",
      name: "Arjun",
      rating: 5,
      hours: 6890,
      badges: ["Award Winning Tutor", "Background Checked", "Face to Face or online", "Fast Response Time"],
      headline:
        "Highly experienced Mathematics, Statistics and admissions test tutor with a PhD",
      bio:
        "Supports students with structured learning plans, clear explanations, and focused practice. Experienced with exam strategy and building confidence.",
      attended: ["University of Sheffield", "University of Bath"],
      image:
        "https://images.unsplash.com/photo-1520975682031-ae900b0fd78f?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: "tormod",
      name: "Tormod",
      rating: 5,
      hours: 5357,
      badges: ["Background Checked", "Face to Face or online", "Fast Response Time"],
      headline:
        "Trained Anthropologist and highly experienced Humanities tutor",
      bio:
        "Helps students improve academic performance through personalised learning and consistent feedback. Strong focus on clarity and results.",
      attended: ["Roehampton University"],
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=800&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <main className="bg-white">
      {/* =======================
          HERO (Image #1 style)
         ======================= */}
      <section className="px-4">
        <div className="mx-auto max-w-6xl pt-12 md:pt-16 pb-10">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            {/* Left */}
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
                Online{" "}
                <span className="bg-lime-200 px-2">{categoryTitle}</span>{" "}
                {subject ? (
                  <span className="bg-lime-200 px-2">{subjectTitle}</span>) : null}{" "}
                Tutors
              </h1>

              <p className="mt-4 text-lg text-slate-600 max-w-xl">
                CASAF finds expert tutors in any subject and for all levels of
                study. Our students achieve their target grades with consistent,
                structured support.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-4">
                {/* Find a Tutor → Find Tutors Page */}
                <Link
                  to="/find-tutors"
                  className="inline-flex items-center justify-center rounded-full bg-slate-100 px-7 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-200 transition"
                >
                  Find A Tutor <span className="ml-2">→</span>
                </Link>

                {/* Contact Us → Request Tutor Page */}
                <Link
                  to="/request-tutor"
                  className="inline-flex items-center justify-center rounded-full bg-orange-400 px-7 py-3 text-sm font-semibold text-white hover:bg-orange-500 transition"
                >
                  Contact Us <span className="ml-2">→</span>
                </Link>
              </div>

              <div className="mt-6 text-sm text-slate-500 flex items-center gap-2">
                <span className="text-orange-400">★</span>
                4.9/5 based on 1,842 reviews (Trustpilot)
              </div>
            </div>

            {/* Right (Tutor stack card) */}
            <div className="relative">
              <div className="relative mx-auto w-full max-w-md">
                {/* “Stack” effect */}
                <div className="absolute -top-4 -right-6 h-[340px] w-[260px] rounded-3xl bg-slate-100 rotate-6" />
                <div className="absolute -top-2 -right-3 h-[340px] w-[260px] rounded-3xl bg-slate-200 rotate-3" />

                <div className="relative rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden">
                  <img
                    className="h-56 w-full object-cover"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&auto=format&fit=crop&q=60"
                    alt="Tutor"
                  />
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-extrabold text-slate-900">
                        Joe
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-900 font-semibold">5</span>
                        <span className="text-orange-400">★</span>
                      </div>
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-800">
                      2150 Hours Taught
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
                      Experienced Science, Medicine and exam-prep tutor with a
                      PhD…
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA pill (like Image #2 top pill) */}
          <div className="mt-10 flex justify-center">
            <Link
              to="/request-tutor"
              className="inline-flex items-center justify-center rounded-full bg-slate-100 px-10 py-4 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition"
            >
              I want to increase my grades <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =======================
          STATS SECTION (Image #1 second row)
         ======================= */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-2 items-center">
          <img
            className="rounded-3xl w-full object-cover"
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&auto=format&fit=crop&q=60"
            alt="Students studying"
          />

          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
              92% of our surveyed students achieved a{" "}
              <span className="bg-lime-200 px-2">grade increase</span>*
            </h2>
            <p className="mt-4 text-slate-600">
              On average, students achieved higher results after working with
              CASAF Tutors.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              * Data based on respondents to CASAF Client Feedback Survey 2025
            </p>
          </div>
        </div>
      </section>

      {/* =======================
          CONNECT + AWARDS (Image #2 layout)
         ======================= */}
      <section className="px-4 py-12 bg-slate-50">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Connect with the{" "}
              <span className="bg-lime-200 px-2">best</span>{" "}
              <span className="bg-lime-200 px-2">{subjectTitle}</span> Tutors
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl">
              Most of our academic team are postgraduates; many hold advanced
              degrees and bring 10+ years of teaching experience.
            </p>

            <div className="mt-7">
              <Link
                to="/find-tutors"
                className="inline-flex items-center justify-center rounded-full bg-slate-100 px-10 py-4 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition"
              >
                Find My Tutor <span className="ml-2">→</span>
              </Link>
            </div>
          </div>

          <img
            className="rounded-3xl w-full h-[520px] md:h-[620px] object-cover shadow-xl ring-1 ring-slate-200"
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1400&auto=format&fit=crop&q=60"
            alt="Tutor"
          />
        </div>

        <div className="mx-auto max-w-6xl mt-12 grid gap-10 md:grid-cols-2 items-center">
          <img
            className="rounded-3xl w-full object-cover"
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1400&auto=format&fit=crop&q=60"
            alt="Team"
          />

          <div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Multi <span className="bg-lime-200 px-2">award-Winning</span>{" "}
              tutoring provider
            </h3>

            <div className="mt-6 space-y-4 text-slate-700">
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-white ring-1 ring-slate-200" />
                <div>
                  <div className="font-semibold">Private Tutoring Provider of the Year 2025</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-white ring-1 ring-slate-200" />
                <div>
                  <div className="font-semibold">Best Tuition Business & Best Delivery 2023</div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-white ring-1 ring-slate-200" />
                <div>
                  <div className="font-semibold">Best Customer Service 2022</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/request-tutor"
                className="inline-flex items-center justify-center rounded-full bg-slate-100 px-10 py-4 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition"
              >
                Contact Us <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          TRUSTPILOT (Image #3 layout)
         ======================= */}
      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 items-start">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-2xl">★★★★★</span>
            </div>
            <h3 className="mt-3 text-4xl md:text-5xl font-extrabold text-slate-900">
              The <span className="bg-lime-200 px-2">highest-rated</span>{" "}
              tutoring company on TrustPilot since 2016
            </h3>
            <p className="mt-5 text-slate-600">
              9 out of 10 customers said they would recommend us to a friend
              (and they do!)
            </p>
          </div>

          {/* Trustpilot widget style card */}
          <div className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-extrabold text-slate-900">Excellent</div>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-green-600">★★★★★</span>
                  <span className="text-sm text-slate-600">Based on 1,854 reviews</span>
                </div>
              </div>
              <div className="text-sm font-semibold text-slate-700">Verified</div>
            </div>

            <div className="mt-6 text-sm text-slate-600">
              “A couple of weeks ago I joined…” <br />
              <span className="text-xs text-slate-500">Showing our 4 & 5 star reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          GET STARTED FORM (Image #3 big form)
         ======================= */}
      <section className="px-4 py-14 bg-gradient-to-b from-white to-orange-50">
        <div className="mx-auto max-w-6xl text-center">
          <div className="text-xs tracking-[0.35em] text-orange-500 font-semibold">
            GET STARTED
          </div>
          <h3 className="mt-5 text-4xl md:text-5xl font-extrabold text-slate-900">
            Find My Online University {subjectTitle} Tutors
          </h3>

          <div className="mt-6 text-sm text-slate-600">
            Or fill in the form below and we will call you:
          </div>

          <div className="mt-10 rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 p-6 md:p-10 text-left">
            <div className="h-1 w-32 bg-green-400 rounded-full mb-6" />
            <div className="text-xl font-extrabold text-slate-900">
              What level of study?
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Link
                to="/request-tutor"
                className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 px-6 py-6 text-center font-semibold text-slate-700 hover:bg-slate-100"
              >
                School Level, University, & Professional Tutoring
              </Link>
              <Link
                to="/request-tutor"
                className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 px-6 py-6 text-center font-semibold text-slate-700 hover:bg-slate-100"
              >
                University Applications
              </Link>
            </div>

            <div className="mt-8 text-xs text-slate-500 text-center">
              We do not facilitate cheating or academic misconduct in any way.
            </div>
          </div>
        </div>
      </section>

      {/* =======================
          TOP TUTORS (Image #4 list)
         ======================= */}
      <section className="px-4 py-14 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-xs tracking-[0.35em] text-orange-500 font-semibold">
              FIND YOUR TUTOR
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900">
              Our Top University {subjectTitle} Tutors
            </h2>
          </div>

          <div className="mt-10 space-y-8">
            {tutors.map((t) => (
              <TutorCardWide key={t.id} tutor={t} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}