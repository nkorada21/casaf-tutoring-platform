export default function SupportTeam() {
  return (
    <section className="py-28 bg-[#fef7f2] relative overflow-hidden">
      <h3 className="text-center text-sm tracking-[0.3em] text-[#7a74ff] mb-8">
        STOP YOUR SEARCH
      </h3>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE — FLOATING TEAM CARDS */}
        <div className="relative">
          
          {/* Rebecca */}
          <div className="absolute left-0 top-0 bg-white shadow-xl px-4 py-2 rounded-xl flex items-center gap-3">
            <div className="text-orange-400 text-2xl">👩‍💼</div>
            <div className="text-sm">
              <div className="font-semibold">Rebecca Thompson</div>
              <div className="text-gray-500 text-xs">Senior Client Manager</div>
            </div>
          </div>

          {/* Big Circle */}
          <div className="w-60 h-60 bg-orange-200 rounded-full mx-auto"></div>

          {/* Richard */}
          <div className="absolute right-0 top-40 bg-white shadow-xl px-4 py-2 rounded-xl flex items-center gap-3">
            <div className="text-orange-400 text-2xl">👨‍🏫</div>
            <div className="text-sm">
              <div className="font-semibold">Richard Evans</div>
              <div className="text-gray-500 text-xs">Founder & Education Expert</div>
            </div>
          </div>

          {/* Josh */}
          <div className="absolute left-10 bottom-0 bg-white shadow-xl px-4 py-2 rounded-xl flex items-center gap-3">
            <div className="text-orange-400 text-2xl">👨‍💼</div>
            <div className="text-sm">
              <div className="font-semibold">Josh Bedford</div>
              <div className="text-gray-500 text-xs">Client Manager</div>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE — TEXT BLOCK */}
        <div>
          <div className="text-[#7a74ff] text-sm mb-2 font-medium">24/7 Support</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#252952] mb-6">
            We're Here To Help
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We know our tutors personally, meaning we can find the perfect tutor for you.
            Our team is available anytime to support your learning journey.
          </p>

          <button className="bg-orange-400 px-8 py-4 rounded-full text-white font-semibold hover:bg-orange-500 transition">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}