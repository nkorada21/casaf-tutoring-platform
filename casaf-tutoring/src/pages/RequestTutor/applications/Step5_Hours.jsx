import { useState } from "react";

const OPTIONS = [
  "1–2 hours total",
  "Short-term support (1–4 weeks)",
  "Help until application is submitted",
  "Long-term support (admissions tests + interviews)",
  "Not sure yet",
];

export default function UA_Step5_Hours({ next, back, update }) {
  const [selected, setSelected] = useState("");

  const handleNext = () => {
    if (!selected) {
      alert("Please select an option.");
      return;
    }
    update({ applicationHours: selected });
    next();
  };

  return (
    <div className="bg-white rounded-3xl shadow-md p-6 md:p-8 border border-[#E6E4E0]">

      <h2 className="text-xl md:text-2xl font-bold text-[#252952] mb-4">
        How much support do you need?
      </h2>

      <div className="space-y-3 mb-6">
        {OPTIONS.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => setSelected(o)}
            className={`w-full text-left rounded-2xl border px-4 py-3 text-sm md:text-base transition-all ${
              selected === o
                ? "border-[#FF8A3D] bg-[#FFF3E9] shadow-sm"
                : "border-[#E6E4E0] bg-white hover:bg-[#FAF8F4]"
            }`}
          >
            {o}
          </button>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <button onClick={back} className="text-sm text-gray-500 hover:text-gray-700">
          ← Back
        </button>
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