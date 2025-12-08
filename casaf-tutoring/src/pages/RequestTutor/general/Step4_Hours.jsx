import { useState } from "react";

const OPTIONS = [
  "A one-off session",
  "Short-term (1–4 weeks)",
  "Medium-term (1–3 months)",
  "Long-term (3+ months)",
  "Not sure yet",
];

export default function Step4_Hours({ next, back, update }) {
  const [selected, setSelected] = useState("");
  const [comments, setComments] = useState("");

  const handleNext = () => {
    if (!selected) {
      alert("Please select one option.");
      return;
    }
    update({ tutoringAmount: selected, tutoringComments: comments });
    next();
  };

  return (
    <div className="bg-white rounded-3xl shadow-md p-5 md:p-8 border border-[#E6E4E0]">
      <h2 className="text-xl md:text-2xl font-bold text-[#252952] mb-4">
        How much tutoring do you need?
      </h2>

      <div className="space-y-3 mb-5">
        {OPTIONS.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => setSelected(o)}
            className={`w-full text-left rounded-2xl border px-4 py-3 text-sm md:text-base transition-all
              ${
                selected === o
                  ? "border-[#FF8A3D] bg-[#FFF3E9] shadow-sm"
                  : "border-[#E6E4E0] bg-white hover:bg-[#FAF8F4]"
              }
            `}
          >
            {o}
          </button>
        ))}
      </div>

      <label className="block text-xs font-semibold text-gray-600 mb-1">
        Any timing info or deadlines? (optional)
      </label>
      <textarea
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        rows={3}
        className="w-full border border-[#E6E4E0] rounded-2xl px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#FF8A3D]/40"
        placeholder="Upcoming exam dates, coursework deadlines, availability, etc."
      />

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