import { useState } from "react";

export default function TutoringMenu() {
  const [activePanel, setActivePanel] = useState("school");

  const categories = [
    { key: "school", label: "GCE O Level Subjects" },
    { key: "high_school", label: "GCE A Level subjects" },
    { key: "online", label: "Online & Remote Tutors" },
  ];

  const subjects = {
    school: [
      "MATHEMATICS",
      "ENGLISH LANGUAGE",
      "FRENCH",
      "BUSINESS MATHEMATICS",
      "COMMERCE",
      "OFFICE PRACTICE",
      "ACCOUNTING",
      "MARKETING",
      "CHEMISTRY",
      "BIOLOGY",
      "PHYSICS",
      "FOOD AND NUTRITION",
      "HISTORY",
      "RELIGIOUS STUDIES",
      "GEOGRAPHY",
      "LITERATURE",
      "COMPUTER SCIENCE",
      "CITIZENSHIP",
      "ECONOMICS",
      "LOGIC",
      "SALES METHODS AND COMMUNICATION",
      "PRODUCT MASTERY",
      "OHADA FINANCIAL REPORTING",
      "OHADA FINANCIAL ACCOUNTING",
      "INTERNATIONAL FINANCIAL ACCOUNTING",
      "DIGITAL MARKETING",
      "LAW AND GOVERNMENT",
      "ENTREPRENEURSHIP",
      "ADDITIONAL MATHS",
    ],

    high_school: [
      "ICT",
      "FOOD SCIENCE",
      "PHILOSOPHY",
      "MATHEMATICS WITH STATISTICS",
      "FURTHER MATHEMATICS",
      "MATHS WITH MECHANICS",
      "FINANCIAL ACCOUNTING",
      "CORPORATE ACCOUNTING",
      "COST AND MANAGEMENT ACCOUNTING",
      "DIGITAL MARKETING",
      "MARKETING SKILLS",
      "PROFESSIONAL MARKETING PRACTICE",
      "BUSINESS MANAGEMENT",
      "COMMERCE AND FINANCE",
    ],

    online: [
      "Online Primary Tutors",
      "Online Secondary Tutors",
      "Online University Tutors",
      "Online Professional Course Tutors",
      "Online Computer Science Tutors",
      "Online Mathematics Tutors",
      "Online Language Tutors",
      "Online International Exam Prep",
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
      {/* LEFT SIDE */}
      <div className="w-[42%] min-w-[260px] border-r border-white/10 py-4">
        <div className="px-5 pb-3 text-sm font-semibold text-gray-200">
          See Subjects by Category
        </div>

        {categories.map((cat) => (
          <button
            key={cat.key}
            onMouseEnter={() => setActivePanel(cat.key)}
            className={`
              w-full text-left px-5 py-3 text-sm rounded-r-lg
              flex items-center justify-between
              transition-all
              hover:bg-white/10
              ${
                activePanel === cat.key
                  ? "bg-white/15 text-orange-300"
                  : ""
              }
            `}
          >
            <span>{cat.label}</span>
            <span className="text-xs">›</span>
          </button>
        ))}

        <div className="mt-3 border-t border-white/10 pt-3">
          <a
            href="/subjects/all" className="block px-5 py-2 text-sm text-orange-300 hover:text-orange-200"
          >
            See Full Subjects List →
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 py-5 px-7">
        <h3 className="font-semibold text-base mb-4 text-orange-300">
          {categories.find((c) => c.key === activePanel)?.label}
        </h3>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-10 text-sm">
          {subjects[activePanel].map((sub, idx) => (
            <li key={idx}>
              <a
                href={`/subjects/${activePanel}/${sub
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