import { useState } from "react";

const OPTIONS = [
  "UCAS Undergraduate",
  "UK Masters / Postgraduate",
  "Oxbridge Applications",
  "Medicine / Dentistry",
  "US University Applications",
  "Personal Statement Support",
  "Admissions Tests (e.g. BMAT, LNAT, TSA)",
  "Interview Preparation",
  "Other"
];

export default function UA_Step2_HelpType({ next, back, update }) {
  const [selected, setSelected] = useState("");

  const handleNext = () => {
    if (!selected) {
      alert("Please select an option.");
      return;
    }
    update({ applicationHelpType: selected });
    next();
  };

  return (
    <div className="bg-white rounded-3xl shadow-md p-6 md:p-8 border border-[#E6E4E0]">
      <h2 className="text-xl md:text-2xl font-bold text-[#252952] mb-4">
        What part of your university application do you need help with?
      </h2>

      <p className="text-sm text-gray-600 mb-6">
        Choose all that apply — we’ll match you with a specialist admissions tutor.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {OPTIONS.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setSelected(option)}
            className={`rounded-2xl border px-4 py-3 text-left transition-all ${
              selected === option
                ? "border-[#FF8A3D] bg-[#FFF3E9] shadow-sm"
                : "border-[#E6E4E0] bg-white hover:bg-[#FAF8F4]"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <button onClick={back} className="text-sm text-gray-500 hover:text-gray-700">← Back</button>
        <button
          onClick={handleNext}
          className="px-6 py-2.5 rounded-full bg-[#FF8A3D] text-white font-semibold"
        >
          Next →
        </button>
      </div>
    </div>
  );
}