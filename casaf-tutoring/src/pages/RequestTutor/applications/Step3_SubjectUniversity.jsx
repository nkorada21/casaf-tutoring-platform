import { useState } from "react";

export default function UA_Step3_SubjectUniversity({ next, back, update }) {
  const [universities, setUniversities] = useState("");
  const [courses, setCourses] = useState("");
  const [stage, setStage] = useState("");

  const STAGES = [
    "Researching options",
    "Preparing personal statement",
    "Completing application",
    "Preparing for admissions tests",
    "Preparing for interviews",
    "Waiting for offers",
    "Other",
  ];

  const handleNext = () => {
    if (!universities.trim()) {
      alert("Please enter at least one target university.");
      return;
    }
    if (!courses.trim()) {
      alert("Please enter your course choices.");
      return;
    }

    update({
      universityChoices: universities,
      courseChoices: courses,
      applicationStage: stage,
    });

    next();
  };

  return (
    <div className="bg-white rounded-3xl shadow-md p-6 md:p-8 border border-[#E6E4E0]">

      <h2 className="text-xl md:text-2xl font-bold text-[#252952] mb-4">
        Which universities and courses are you applying for?
      </h2>

      {/* University field */}
      <label className="block text-xs font-semibold text-gray-600 mb-1">
        Target Universities <span className="text-red-500">*</span>
      </label>
      <textarea
        value={universities}
        onChange={(e) => setUniversities(e.target.value)}
        rows={3}
        placeholder="e.g. University of Cambridge, Imperial College London, University of Toronto…"
        className="w-full border border-[#E6E4E0] rounded-2xl px-4 py-3 mb-5"
      />

      {/* Courses field */}
      <label className="block text-xs font-semibold text-gray-600 mb-1">
        Target Courses <span className="text-red-500">*</span>
      </label>
      <textarea
        value={courses}
        onChange={(e) => setCourses(e.target.value)}
        rows={3}
        placeholder="e.g. Engineering, Computer Science, Medicine, PPE…"
        className="w-full border border-[#E6E4E0] rounded-2xl px-4 py-3 mb-5"
      />

      {/* Stage dropdown */}
      <label className="block text-xs font-semibold text-gray-600 mb-1">
        What stage of your application are you currently at?
      </label>
      <select
        value={stage}
        onChange={(e) => setStage(e.target.value)}
        className="w-full border border-[#E6E4E0] rounded-2xl px-4 py-3 text-sm mb-6"
      >
        <option value="">Select one…</option>
        {STAGES.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

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