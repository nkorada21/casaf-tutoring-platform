export default function OurServices() {
  const services = [
    {
      title: "Academic Tutoring",
      desc: "We find tutors for students at all levels, providing personalised support and mentoring",
      iconBg: "bg-orange-100",
      iconEmoji: "🚀",
    },
    {
      title: "University Admissions",
      desc: "We guide students at all stages of the application process, from course choice all the way to interview preparation",
      iconBg: "bg-[#252952] text-orange-300",
      iconEmoji: "🎓",
    },
    {
      title: "Online Tutoring",
      desc: "Pioneers of online tutoring and creators of BitPaper",
      iconBg: "bg-orange-100",
      iconEmoji: "🖥️",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <h2 className="text-center text-4xl font-bold text-[#252952] mb-16">
        Our Services
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 px-6">
        {services.map((s, idx) => (
          <div key={idx} className="text-center">
            <div
              className={`w-36 h-36 mx-auto rounded-2xl flex items-center justify-center shadow-xl ${s.iconBg}`}
            >
              <span className="text-5xl">{s.iconEmoji}</span>
            </div>

            <h3 className="mt-6 text-xl font-semibold text-[#252952]">
              {s.title}
            </h3>

            <p className="mt-3 text-gray-500 leading-relaxed px-4">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}