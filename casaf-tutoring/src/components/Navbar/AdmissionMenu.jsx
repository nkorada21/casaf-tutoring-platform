import { useState } from "react";

export default function AdmissionsMenu() {
  const [activePanel, setActivePanel] = useState("cameroon");

  const categories = [
    { key: "cameroon", label: "Cameroon Admissions" },
    { key: "universities", label: "Cameroon University Admissions" },
    { key: "professional", label: "Professional & Competitive Exams" },
    { key: "international", label: "International Admissions" },
    { key: "support", label: "Scholarship & Application Support" },
  ];

  const subjects = {
    cameroon: [
      "General Cameroon Admissions Guidance",
      "Course & University Selection",
      "Application Strategy Planning",
      "Document & Requirements Checklist",
      "Exam Timetable & Deadline Tracking",
      "Parent & Guardian Consultations",
    ],

    universities: [
      "UB University of Buea Admissions",
      "UY1 University of Yaoundé I Admissions",
      "UY2 University of Yaoundé II Admissions",
      "University of Bamenda (UBa) Admissions",
      "ENS Entrance & Teacher Training Colleges",
      "Polytech / Engineering School Admissions",
      "Medical School Admissions (MBBS / Nursing)",
      "Private University Admissions (e.g. Catholic, IUG, SIANTOU)",
    ],

    professional: [
      "ENS Entrance Exam Preparation",
      "Nursing School Entrance Exam Prep",
      "Polytech Entrance Prep",
      "Public Service / Concours Preparation",
      "Professional Masters Admissions",
      "MBA & Business School Admissions",
    ],

    international: [
      "USA University Admissions",
      "UK University Admissions",
      "Canada University Admissions",
      "Europe (EU) University Admissions",
      "Personal Statement / Essay Coaching",
      "Recommendation Letter Strategy",
      "Standardized Test Planning (SAT, GRE, GMAT)",
      "Visa Interview Preparation",
    ],

    support: [
      "Scholarship Search & Shortlisting",
      "Motivation Letter Writing Support",
      "CV / Resume for Applications",
      "Study Plan & Gap Explanation Help",
      "Application Portal Guidance (online forms)",
      "Offer Letter & Deferral Advice",
      "Pre-departure Orientation & Checklist",
    ],
  };

  return (
    <div
      className="
        absolute top-full left-0 mt-3
        bg-[#252952] text-white
        flex
        rounded-2xl shadow-2xl
        overflow-hidden
        w-[820px]
      "
      onClick={(e) => e.stopPropagation()}
    >
      {/* LEFT COLUMN – CATEGORY LIST */}
      <div className="w-[42%] min-w-[260px] border-r border-white/10 py-4">
        <div className="px-5 pb-3 text-sm font-semibold text-gray-200">
          Choose Admissions Area
        </div>

        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActivePanel(cat.key)}
            className={`
              w-full text-left px-5 py-3 text-sm rounded-r-lg
              flex items-center justify-between
              transition-all
              hover:bg-white/10
              ${activePanel === cat.key ? "bg-white/15 text-orange-300" : ""}
            `}
          >
            <span>{cat.label}</span>
            <span className="text-xs">›</span>
          </button>
        ))}
      </div>

      {/* RIGHT COLUMN – ADMISSIONS DETAILS */}
      <div className="flex-1 py-5 px-7">
        <h3 className="font-semibold text-base mb-4 text-orange-300">
          {categories.find((c) => c.key === activePanel)?.label}
        </h3>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-10 text-sm">
          {subjects[activePanel].map((sub, idx) => (
            <li key={idx}>
              <a
                href={`/admissions/${activePanel}/${sub
                  .toLowerCase()
                  .replace(/ & /g, "-and-")
                  .replace(/[^a-z0-9]+/g, "-")}`}
                className="hover:text-orange-300 transition-colors"
              >
                {sub}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}