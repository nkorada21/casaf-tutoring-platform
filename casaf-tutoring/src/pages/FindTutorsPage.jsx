
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { subjects as subjectsData } from "./Subjects/subjectsData"; // adjust if needed

// ---------- Helpers ----------
function slugify(text = "") {
  return text
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Level mapping
const LEVEL_TO_CATEGORY = {
  "All Levels": "university",
  Undergraduate: "university",
  "Master's": "university",
  PhD: "university",
  Lecturer: "university",
  "Professional Qualification": "university",
  "International Baccalaureate": "ib",
  "A Level": "alevel",
  GCSE: "gcse",
  "Key Stage 3": "online",
  "Common Entrance": "online",
};

const LEVEL_OPTIONS = Object.keys(LEVEL_TO_CATEGORY);

// ---------- Dropdown ----------
function useOutsideClick(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler();
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler]);
}

function Dropdown({ label, value, options, onChange }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  useOutsideClick(wrapRef, () => setOpen(false));

  return (
    <div ref={wrapRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between rounded-2xl bg-white/80 backdrop-blur border border-slate-200 px-4 py-3 shadow-sm hover:shadow-md transition"
      >
        <div className="text-left">
          <div className="text-[11px] uppercase tracking-wider text-slate-400">
            {label}
          </div>
          <div className="font-semibold text-slate-900 truncate">{value}</div>
        </div>
        <span className="ml-3 text-xl text-slate-400">{open ? "▴" : "▾"}</span>
      </button>

      {open && (
        <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
          <div className="max-h-72 overflow-y-auto">
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-3 text-sm hover:bg-slate-50 transition ${
                  opt === value ? "bg-slate-50 font-semibold" : ""
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ---------- Main Page ----------
function StatPill({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white shadow-sm">
      <div className="text-xs text-white/70">{title}</div>
      <div className="text-lg font-extrabold">{value}</div>
    </div>
  );
}

export default function FindTutorsPage() {
  const navigate = useNavigate();

  // Filters
  const [q, setQ] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");

  // Subjects list for dropdown
  const subjectOptions = useMemo(() => {
    const set = new Set();
    Object.values(subjectsData).forEach((list) => list.forEach((name) => set.add(name)));
    return ["All Subjects", ...Array.from(set).sort()];
  }, []);

  // All items (subjects) to show as cards
  // We flatten the subjectsData into unique subject names
  const allItems = useMemo(() => {

    const set = new Set();
    Object.values(subjectsData).forEach((list) => list.forEach((name) => set.add(name)));

    // Create cards
    return Array.from(set).sort().map((subjectName) => ({
      subjectName,
      subjectSlug: slugify(subjectName),
      // optional tags/badges
      badge:
        subjectName.toLowerCase().includes("math")
          ? "Top demand"
          : subjectName.toLowerCase().includes("english")
          ? "Popular"
          : "Available",
    }));
  }, []);

  const filteredItems = useMemo(() => {
    const query = q.trim().toLowerCase();

    return allItems.filter((item) => {
      // Subject dropdown filter
      if (selectedSubject !== "All Subjects" && item.subjectName !== selectedSubject) {
        return false;
      }

      // Search filter
      if (query) {
        const hay = item.subjectName.toLowerCase();
        if (!hay.includes(query)) return false;
      }

      // Level filter
      // (Assuming all subjects are available for all levels in this demo.
      return true;
    });
  }, [allItems, q, selectedSubject, selectedLevel]);

  const clearFilters = () => {
    setQ("");
    setSelectedLevel("All Levels");
    setSelectedSubject("All Subjects");
  };

  // Navigate to subject page
  const goToSubject = (subjectSlug) => {
    const levelSlug = LEVEL_TO_CATEGORY[selectedLevel] || "all";
    
    const url = selectedSubject !== "All Subjects" || q.trim()
      ? `/tutoring/${levelSlug}?subject=${encodeURIComponent(subjectSlug)}`
      : `/tutoring/${levelSlug}`;

    navigate(url);
    navigate(`/tutoring/${subjectSlug}?level=${levelSlug}`)
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#252952] via-[#252952] to-[#1a1d3b]" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 md:pt-16 md:pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 border border-white/15">
                <span className="text-yellow-300">★★★★★</span>
                Trusted by students • Verified tutors
              </p>

              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Find the right tutor for{" "}
                <span className="block mt-3">
                <span className="bg-lime-200 text-[#252952] px-2 rounded-md">
                  your level & subject
                </span>
                </span>
              </h1>

              <p className="mt-4 text-white/75 text-base md:text-lg max-w-2xl">
                Search by subject, pick your level, and explore top tutoring options.
                When you’re ready, request a tutor in one click.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/request-tutor"
                  className="rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600 transition text-center"
                >
                  Request a Tutor
                </Link>
                <Link
                  to="/pricing"
                  className="rounded-2xl bg-white/10 px-6 py-3 font-semibold text-white hover:bg-white/15 transition text-center border border-white/15"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-3 gap-3">
                <StatPill title="Tutor Match" value="Fast" />
                <StatPill title="Rating" value="4.9/5" />
                <StatPill title="Support" value="24/7" />
              </div>

              <div className="mt-4 rounded-3xl border border-white/15 bg-white/10 p-4 text-white shadow-sm">
                <div className="text-sm font-semibold">Quick Tip</div>
                <p className="mt-1 text-sm text-white/75">
                  Use the search box for quick results (e.g., “math”, “biology”, “accounting”).
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 pb-20">
        <section className="rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            {/* Search */}
            <div className="md:col-span-6">
              <label className="text-[11px] uppercase tracking-wider text-slate-400">
                Search
              </label>
              <div className="mt-1 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-orange-400">
                <span className="text-slate-400">⌕</span>
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search subjects (e.g., Mathematics, Biology, ICT)"
                  className="w-full outline-none text-slate-900 placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="md:col-span-3">
              <Dropdown
                label="Level"
                value={selectedLevel}
                options={LEVEL_OPTIONS}
                onChange={setSelectedLevel}
              />
            </div>

            <div className="md:col-span-3">
              <Dropdown
                label="Subject"
                value={selectedSubject}
                options={subjectOptions}
                onChange={setSelectedSubject}
              />
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-sm text-slate-600">
              Showing{" "}
              <span className="font-semibold text-slate-900">
                {filteredItems.length}
              </span>{" "}
              results
              {selectedLevel !== "All Levels" ? (
                <>
                  {" "}
                  for <span className="font-semibold">{selectedLevel}</span>
                </>
              ) : null}
              {selectedSubject !== "All Subjects" ? (
                <>
                  {" "}
                  • <span className="font-semibold">{selectedSubject}</span>
                </>
              ) : null}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={clearFilters}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                Clear filters
              </button>
              <Link
                to="/request-tutor"
                className="rounded-2xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition text-center"
              >
                Request Tutor
              </Link>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mt-8">
          {filteredItems.length === 0 ? (
            <div className="rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-slate-200">
              <div className="text-2xl font-extrabold text-slate-900">
                No results found
              </div>
              <p className="mt-2 text-slate-600">
                Try a different subject name or clear filters.
              </p>
              <button
                onClick={clearFilters}
                className="mt-5 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
              >
                Reset
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredItems.map((item) => (
                <button
                  key={item.subjectSlug}
                  type="button"
                  onClick={() => goToSubject(item.subjectSlug)}
                  className="group text-left rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-400">
                        {selectedLevel === "All Levels" ? "All Levels" : selectedLevel}
                      </div>
                      <h3 className="mt-1 text-lg font-extrabold text-[#252952] group-hover:text-orange-600 transition">
                        {item.subjectName}
                      </h3>
                    </div>
                    <span className="shrink-0 rounded-full bg-orange-50 text-orange-700 border border-orange-100 px-3 py-1 text-xs font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-slate-600">
                    Get matched with a verified tutor for{" "}
                    <span className="font-semibold">{item.subjectName}</span>. Fast response and
                    personalised support.
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-orange-600 group-hover:text-orange-700">
                      View tutors →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </section>

        {/* Trust block */}
        <section className="mt-14 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-xl md:text-2xl font-extrabold text-[#252952]">
                The highest-rated tutoring company on TrustPilot
              </h2>
              <p className="mt-2 text-slate-600">
                9 out of 10 clients recommend CASAF. Work with experienced tutors and get
                measurable progress.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/request-tutor"
                  className="rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600 transition text-center"
                >
                  Request Tutor
                </Link>
                <Link
                  to="/resources"
                  className="rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 hover:bg-slate-50 transition text-center"
                >
                  Explore Resources
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-semibold text-slate-900">Excellent</div>
                <div className="mt-2 text-yellow-400 text-xl">★★★★★</div>
                <div className="mt-2 text-sm text-slate-600">
                  4.9 out of 5 • Based on 1,842 reviews
                </div>
                <div className="mt-4 text-xs text-slate-500">
                  (You can later connect this to real TrustPilot widget.)
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}