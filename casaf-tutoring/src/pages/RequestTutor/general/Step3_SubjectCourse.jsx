import { useMemo, useState } from "react";
import { subjects } from "../../Subjects/subjectsData"; // ⬅️ path important!

export default function Step3_SubjectCourse({ next, back, update }) {
  const [subject, setSubject] = useState("");
  const [courseDetails, setCourseDetails] = useState("");

  // Flatten A–Z subjects into one array
  const allSubjects = useMemo(
    () => Object.values(subjects).flat(),
    []
  );

  const filtered = allSubjects.filter((s) =>
    s.toLowerCase().includes(subject.toLowerCase())
  );

  const handleNext = () => {
    if (!subject) {
      alert("Please enter or select a subject / course.");
      return;
    }
    update({ subject, courseDetails });
    next();
  };

  return (
    <div className="bg-white rounded-3xl shadow-md p-5 md:p-8 border border-[#E6E4E0]">
      <h2 className="text-xl md:text-2xl font-bold text-[#252952] mb-4">
        What subject or course do you need help with?
      </h2>

      <div className="mb-4">
        <label className="block text-xs font-semibold text-gray-600 mb-1">
          Subject / Course <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="e.g. A Level Mathematics, Undergraduate Economics…"
          className="w-full border border-[#E6E4E0] rounded-2xl px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#FF8A3D]/40"
        />
      </div>

      {subject && (
        <div className="max-h-40 overflow-y-auto border border-[#E6E4E0] rounded-2xl mb-4">
          {filtered.length === 0 && (
            <div className="px-4 py-2 text-xs text-gray-500">
              No matches – you can still type your subject manually.
            </div>
          )}
          {filtered.map((s) => (
            <button
              type="button"
              key={s}
              onClick={() => setSubject(s)}
              className="w-full text-left px-4 py-2 text-xs md:text-sm hover:bg-[#FAF8F4]"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="mb-4">
        <label className="block text-xs font-semibold text-gray-600 mb-1">
          Additional course info (optional)
        </label>
        <textarea
          value={courseDetails}
          onChange={(e) => setCourseDetails(e.target.value)}
          rows={3}
          className="w-full border border-[#E6E4E0] rounded-2xl px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#FF8A3D]/40"
          placeholder="Exam board, university name, module code, or any relevant details…"
        />
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