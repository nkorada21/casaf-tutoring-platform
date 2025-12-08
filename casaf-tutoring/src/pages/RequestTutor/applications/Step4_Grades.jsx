import { useState } from "react";

export default function UA_Step4_Grades({ next, back, update }) {
  const [current, setCurrent] = useState("");
  const [predicted, setPredicted] = useState("");
  const [target, setTarget] = useState("");

  const handleNext = () => {
    if (!current.trim() || !predicted.trim() || !target.trim()) {
      alert("Please fill in all grade fields.");
      return;
    }

    update({
      currentGrades: current,
      predictedGrades: predicted,
      targetGrades: target,
    });

    next();
  };

  return (
    <div className="bg-white rounded-3xl shadow-md p-6 md:p-8 border border-[#E6E4E0]">

      <h2 className="text-xl md:text-2xl font-bold text-[#252952] mb-4">
        What grades are you working with?
      </h2>

      <div className="space-y-6">

        {/* Current grades */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Current Grades <span className="text-red-500">*</span>
          </label>
          <textarea
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
            rows={2}
            placeholder="e.g. AAB, 38 IB points, GPA 3.5…"
            className="w-full border border-[#E6E4E0] rounded-2xl px-4 py-3"
          />
        </div>

        {/* Predicted */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Predicted Grades <span className="text-red-500">*</span>
          </label>
          <textarea
            value={predicted}
            onChange={(e) => setPredicted(e.target.value)}
            rows={2}
            placeholder="e.g. AAA, 40 IB points, GPA 3.8…"
            className="w-full border border-[#E6E4E0] rounded-2xl px-4 py-3"
          />
        </div>

        {/* Target */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">
            Target Grades <span className="text-red-500">*</span>
          </label>
          <textarea
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            rows={2}
            placeholder="Grades you aim to achieve for your chosen course."
            className="w-full border border-[#E6E4E0] rounded-2xl px-4 py-3"
          />
        </div>

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