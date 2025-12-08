import { useState } from "react";

const OPTIONS = [
  "Primary",
  "Secondary",
  "GCSE / IGCSE",
  "A Level",
  "IB",
  "Undergraduate",
  "Postgraduate",
  "Professional Qualifications",
];

export default function Step2_HelpType({ next, back, update }) {
  const [selected, setSelected] = useState("");

  const handleNext = () => {
    if (!selected) {
      alert("Please select an option.");
      return;
    }
    update({ helpType: selected });
    next();
  };

  return (
    <div className="bg-white rounded-3xl shadow-md p-5 md:p-8 border border-[#E6E4E0]">
      <h2 className="text-xl md:text-2xl font-bold text-[#252952] mb-4">
        What do you need help with?
      </h2>
      <p className="text-sm text-gray-600 mb-6">
        Select the level or area of study that best matches your needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {OPTIONS.map((option) => (
          <button
            type="button"
            key={option}
            onClick={() => setSelected(option)}
            className={`rounded-2xl border px-4 py-3 text-sm md:text-base text-left transition-all
              ${
                selected === option
                  ? "border-[#FF8A3D] bg-[#FFF3E9] shadow-sm"
                  : "border-[#E6E4E0] bg-white hover:bg-[#FAF8F4]"
              }
            `}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={back}
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="px-6 py-2.5 rounded-full bg-[#FF8A3D] text-white text-sm md:text-base font-semibold hover:bg-[#ff7a1b]"
        >
          Next →
        </button>
      </div>
    </div>
  );
}