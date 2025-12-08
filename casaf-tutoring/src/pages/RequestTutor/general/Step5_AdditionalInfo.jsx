import { useState } from "react";

export default function Step5_AdditionalInfo({ next, back, update }) {
  const [info, setInfo] = useState("");

  const handleNext = () => {
    update({ additionalInfo: info });
    next();
  };

  return (
    <div className="bg-white rounded-3xl shadow-md p-5 md:p-8 border border-[#E6E4E0]">
      <h2 className="text-xl md:text-2xl font-bold text-[#252952] mb-4">
        Please provide any additional information
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        The more detail you can give us, the better match we can find (current grades,
        goals, exam boards, learning style, etc.).
      </p>

      <textarea
        value={info}
        onChange={(e) => setInfo(e.target.value)}
        rows={6}
        className="w-full border border-[#E6E4E0] rounded-3xl px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#FF8A3D]/40"
        placeholder="e.g. I am struggling with mechanics in A Level Physics and need help before my exam in June."
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