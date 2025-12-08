import { useState } from "react";

const OPTIONS = [
  {
    id: "general",
    title: "School Level, University & Professional Tutoring",
    description:
      "For academic support at school, university, or professional qualification level.",
  },
  {
    id: "applications",
    title: "University Applications",
    description:
      "For help with UCAS, personal statements, admissions tests and interviews.",
  },
];

export default function Step1_Level({ next, update, setFlow }) {
  const [selected, setSelected] = useState("");

  const handleNext = () => {
    if (!selected) {
      alert("Please select an option to continue.");
      return;
    }
    setFlow(selected === "applications" ? "applications" : "general");
    update({
      levelType:
        selected === "applications"
          ? "University Applications"
          : "School / University / Professional Tutoring",
    });
    next();
  };

  return (
    <div className="bg-white rounded-3xl shadow-md p-5 md:p-8 border border-[#E6E4E0]">
      <h2 className="text-xl md:text-2xl font-bold text-[#252952] mb-4">
        What level of study do you need support with?
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Choose whether you need ongoing tutoring, or help with university applications.
      </p>

      <div className="space-y-4">
        {OPTIONS.map((opt) => (
          <button
            type="button"
            key={opt.id}
            onClick={() => setSelected(opt.id)}
            className={`w-full text-left rounded-2xl border px-4 py-4 md:px-6 md:py-5 transition-all
              ${
                selected === opt.id
                  ? "border-[#FF8A3D] bg-[#FFF3E9] shadow-sm"
                  : "border-[#E6E4E0] bg-white hover:bg-[#FAF8F4]"
              }
            `}
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-1 w-4 h-4 rounded-full border-2 ${
                  selected === opt.id ? "border-[#FF8A3D] bg-[#FF8A3D]" : "border-gray-400"
                }`}
              />
              <div>
                <div className="font-semibold text-sm md:text-base text-[#252952]">
                  {opt.title}
                </div>
                <p className="text-xs md:text-sm text-gray-600 mt-1">
                  {opt.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={handleNext}
          className="px-6 py-2.5 rounded-full bg-[#FF8A3D] text-white text-sm md:text-base font-semibold hover:bg-[#ff7a1b] transition"
        >
          Next →
        </button>
      </div>
    </div>
  );
}