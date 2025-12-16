import { useState } from "react";

export default function AdmissionsMenu() {
  const [activePanel, setActivePanel] = useState("cameroon");

  const categories = [
    { key: "cameroon", label: "Cameroon Admissions" },
    { key: "state_universities", label: "Cameroon State University Admissions" },
    {  key: "private_universities", label: "Private University Admissions" },
    { key: "institutes", label: "Pan-African Universities and Institutes" },
    { key: "international", label: "International Admissions" },
    { key: "professional", label: "Professional & Competitive Exams" },
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

    state_universities: [
      "University of Buea",
      "University of Bamenda",
      "University of Douala",
      "University of Dschang",
      "University of Maroua",
      "University of Ngaoundere",
      "University of Yaounde 1",
      "University of Yaounde 2",
      "University of Bertoua",
      "University of Ebolowa",
      "University of Garoua ¹ ² ³",
    ],

    private_universities: [
      "University Institute of the Diocese of Buea (affiliated to University of Buea)",
      "Catholic University of Central Africa (affiliated to University of Yaounde 1)",
      "St. Monica the American University, Cameroon, Buea (affiliated to University of Buea)",
      "International University, Bamenda (affiliated to University of Bamenda)",
      "National Polytechnic Bambui (affiliated to University of Bamenda)",
      "St. Jerome University Douala (affiliated to University of Douala)",
      "Catholic University of Cameroon, Bamenda",
      "Cosendai Adventist University, Nanga Eboko",
      "ICT University, Yaounde",
      "University of Montagnes, Bangangte* ¹ ² ³",
    ],

    institutes: [
      "Pan African University Institute for Governance, Humanities and Social Sciences (PAUGHSS)",
      "Pan African Institute for Development – West Africa (PAID-WA)",
      "University of Yaoundé I",
      "University of Buea",
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
      "Catholic University of Central Africa (UCAC)",
      "International University, Bamenda",
      "Saint Monica University",
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