export default function ProgressBar({ step, flow }) {
  // Both flows have 7 steps
  const totalSteps = 7;
  const percent = Math.min((step / totalSteps) * 100, 100);

  return (
    <div className="mb-6 md:mb-8">
      <div className="flex justify-between text-xs md:text-sm text-gray-600 mb-2">
        <span>
          Step {step} of {totalSteps}
        </span>
        <span>
          {flow === "applications"
            ? "University Applications"
            : flow === "general"
            ? "School / University / Professional Tutoring"
            : "Choose your level"}
        </span>
      </div>
      <div className="w-full h-2 bg-[#E6E4E0] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#FF8A3D] transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}