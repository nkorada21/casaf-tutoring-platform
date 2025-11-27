export default function TopBar() {
  return (
    <div>
      {/* ORANGE CALL BAR */}
      <div className="bg-orange-400 text-white text-center py-2 font-semibold text-sm">
        Call anytime: <span className="font-bold">+237 675 31 61 71</span>
      </div>

      {/* RATING BAR */}
      <div className="bg-white text-gray-800 text-center py-2 border-b border-gray-200 text-xs md:text-sm">
        <span className="mr-1">Our customers say</span>
        <span className="font-bold">Excellent</span>

        {/* Star Rating */}
        <span className="inline-flex items-center mx-2">
          ⭐⭐⭐⭐⭐
        </span>

        <span className="text-gray-600">
          4.9 out of 5 based on 1,842 reviews
        </span>

        <span className="text-green-600 font-bold ml-2">★ Trustpilot</span>
      </div>
    </div>
  );
}