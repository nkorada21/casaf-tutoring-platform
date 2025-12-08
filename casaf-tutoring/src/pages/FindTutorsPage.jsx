// src/pages/FindTutorsPage.jsx
import { useMemo, useState } from "react";
import { subjects as subjectsData } from "./Subjects/subjectsData"; // adjust path if needed

// --- Level options (same as TheProfs) ---
const LEVEL_OPTIONS = [
  "All Levels",
  "Undergraduate",
  "Master's",
  "PhD",
  "Lecturer",
  "Professional Qualification",
  "International Baccalaureate",
  "A Level",
  "GCSE",
  "Key Stage 3",
  "Common Entrance",
];

// --- Some sample tutor categories / cards ---
// You can later connect this to real data / backend.
const TUTOR_CATEGORIES = [
  {
    id: 1,
    label: "Undergraduate Tutors",
    level: "Undergraduate",
    description: "Expert support for undergraduate coursework and exams.",
  },
  {
    id: 2,
    label: "Master's Tutors",
    level: "Master's",
    description: "Specialist tutors for postgraduate & thesis support.",
  },
  {
    id: 3,
    label: "PhD Tutors",
    level: "PhD",
    description: "Research, methodology and viva preparation support.",
  },
  {
    id: 4,
    label: "A Level Tutors",
    level: "A Level",
    description: "Top A-Level tutors for all major exam boards.",
  },
  {
    id: 5,
    label: "GCSE Tutors",
    level: "GCSE",
    description: "GCSE subject specialists for outstanding grades.",
  },
  {
    id: 6,
    label: "International Baccalaureate Tutors",
    level: "International Baccalaureate",
    description: "IB tutors for HL, SL and EE support.",
  },
];

// Simple dropdown component reused for Level + Subjects
function Dropdown({ label, value, options, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full max-w-xs">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between bg-[#f5f5f7] border border-gray-200 rounded-2xl px-5 py-3 text-left text-gray-700 shadow-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
      >
        <span className="text-sm text-gray-400 mr-2">{label}</span>
        <span className="flex-1 text-base font-medium truncate">{value}</span>
        <span className="ml-3 text-xl text-gray-400">▾</span>
      </button>

      {open && (
        <div className="absolute z-30 mt-2 max-h-72 w-full overflow-y-auto rounded-2xl bg-white shadow-xl border border-gray-100">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm md:text-base hover:bg-gray-100 ${
                opt === value ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FindTutorsPage() {
  // Selected filter state
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");

  // Build subjects list from your subjectsData.js
  const subjectOptions = useMemo(() => {
    const set = new Set();

    Object.values(subjectsData).forEach((list) => {
      list.forEach((name) => set.add(name));
    });

    return ["All Subjects", ...Array.from(set).sort()];
  }, []);

  // Filtered tutor categories (basic demo: filter by level only)
  const filteredCategories = useMemo(() => {
    if (selectedLevel === "All Levels") return TUTOR_CATEGORIES;
    return TUTOR_CATEGORIES.filter((c) => c.level === selectedLevel);
  }, [selectedLevel]);

  return (
    <div className="bg-white min-h-screen">
      {/* Top banner (optional TrustPilot strip like TheProfs) */}
      <div className="w-full bg-[#ff9040] text-center text-white text-xs md:text-sm py-2 font-medium">
        Call anytime: <span className="font-bold">+237 675 31 61 71</span>
      </div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
        {/* Hero title */}
        <section className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-[#252952] mb-4">
            Find A Tutor
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            A small showcase of some of our thousands of professional online
            tutors. Use the filters to find tutors by level and subject.
          </p>
        </section>

        {/* Filters row */}
        <section className="flex flex-col md:flex-row gap-6 items-center justify-center mb-12">
          <Dropdown
            label="Level"
            value={selectedLevel}
            options={LEVEL_OPTIONS}
            onChange={setSelectedLevel}
          />
          <Dropdown
            label="Subject"
            value={selectedSubject}
            options={subjectOptions}
            onChange={setSelectedSubject}
          />
        </section>

        {/* Or select by level */}
        <section className="mb-12 md:mb-16">
          <p className="text-center text-xl md:text-2xl font-semibold text-[#252952] mb-6">
            Or select by <span className="text-[#6b6dfa]">level</span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {LEVEL_OPTIONS.filter((l) => l !== "All Levels").map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setSelectedLevel(level)}
                className={`rounded-3xl px-6 py-4 text-center text-sm md:text-base font-semibold shadow-sm border transition-all ${
                  selectedLevel === level
                    ? "bg-[#252952] text-white border-[#252952]"
                    : "bg-[#f7f9fb] text-gray-800 border-gray-200 hover:bg-white hover:shadow-md"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </section>

        {/* Category cards */}
        <section className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-[#252952] mb-5">
            Popular tutoring categories
          </h2>

          {filteredCategories.length === 0 ? (
            <p className="text-gray-500">
              No categories match your current filters yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map((cat) => (
                <div
                  key={cat.id}
                  className="rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all p-5 flex flex-col justify-between"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">
                      {cat.level}
                    </p>
                    <h3 className="text-lg font-semibold text-[#252952] mb-2">
                      {cat.label}
                    </h3>
                    <p className="text-sm text-gray-500">{cat.description}</p>
                  </div>
                  <button className="mt-4 text-sm font-semibold text-[#ff7a1b] hover:text-[#ff5c00] self-start">
                    View tutors →
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* TrustPilot style section */}
        <section className="mb-16 text-center">
          <p className="text-sm md:text-base font-semibold text-[#252952] mb-3">
            The highest-rated tutoring company on TrustPilot
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            9 out of 10 CASAF clients would recommend us to a friend.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-white border border-gray-100 rounded-2xl px-4 py-2 shadow-sm">
            <span className="text-xs uppercase tracking-wide text-gray-400">
              Rated
            </span>
            <span className="text-sm font-semibold text-[#252952]">Excellent</span>
            <span className="text-yellow-400 text-base">★★★★★</span>
          </div>
        </section>

        {/* Partners / banner */}
        <section className="mb-20 text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-[#ff7a1b] mb-3">
            Our Partners
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-[#252952] mb-3">
            We are proud partners of leading schools & organisations
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
            CASAF Tutors collaborates with universities and learning centres to
            deliver personalised academic support for students across Cameroon
            and beyond.
          </p>
        </section>
      </main>
    </div>
  );
}