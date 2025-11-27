export default function HeroProfs() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE — TEXT */}
        <div>
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B1B1B] leading-tight">
            CASAF Tutors{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-[#D6FF8F] rotate-[-2deg] px-1 py-1 rounded-md"></span>
              <span className="relative">Get Results</span>
            </span>
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            Our tutors help students achieve <strong>life-changing success.</strong>
            We help reduce your stress, increase your confidence, accelerate your
            learning and improve your grades. <strong>Over 90%</strong> of our students
            achieve their target grades and enter their preferred universities.
          </p>

          {/* Buttons */}
          <div className="flex gap-5 mt-8">
            <a
              href="/find-tutors"
              className="bg-gray-100 hover:bg-gray-200 transition px-6 py-3 rounded-full font-semibold text-gray-700 flex items-center gap-2"
            >
              Find Tutors →
            </a>

            <a
              href="/request-tutor"
              className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full font-semibold text-white flex items-center gap-2"
            >
              Request Tutor →
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — FLOATING TUTOR CARD STACK */}
        <div className="relative flex justify-center md:justify-end">
          
          {/* Card behind */}
          <div className="absolute top-8 right-10 w-64 h-80 bg-white rounded-2xl shadow-xl rotate-[-8deg] z-0 opacity-80"></div>

          {/* Card middle */}
          <div className="absolute top-4 right-4 w-64 h-80 bg-white rounded-2xl shadow-xl rotate-[4deg] z-10 opacity-90"></div>

          {/* Main Card */}
          <div className="relative w-72 bg-white rounded-2xl shadow-2xl overflow-hidden z-20">
            <img
              src="/images/tutor1.jpg"
              alt="Tutor"
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-bold">Dr. Bianca</h3>

              <div className="flex items-center gap-1 mt-1 text-orange-500 font-semibold">
                5 ★
              </div>

              <p className="text-gray-600 text-sm mt-2">
                2621 Hours Taught
              </p>

              <p className="text-gray-500 text-sm mt-1">
                Experienced university lecturer with a PhD in Health Sciences.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}