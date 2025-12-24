export default function SubjectsGrid() {
  const subjects = [
    // GCE
    "GCE O-Level",
    "GCE A-Level",
    "Primary Level Tutors",
    "Secondary Level Tutors",

    // SCHOOL SUBJECTS
    "MATHEMATICS",
      "ENGLISH LANGUAGE",
      "FRENCH",
      "BUSINESS MATHEMATICS",
      "COMMERCE",
      "OFFICE PRACTICE",
      "ACCOUNTING",
      "MARKETING",
      "CHEMISTRY",
      "BIOLOGY",
      "PHYSICS",
      "FOOD AND NUTRITION",
      "HISTORY",
      "RELIGIOUS STUDIES",
      "GEOGRAPHY",
      "LITERATURE",
      "COMPUTER SCIENCE",
      "CITIZENSHIP",
      "ECONOMICS",
      "LOGIC",
      "SALES METHODS AND COMMUNICATION",
      "PRODUCT MASTERY",
      "OHADA FINANCIAL REPORTING",
      "OHADA FINANCIAL ACCOUNTING",
      "INTERNATIONAL FINANCIAL ACCOUNTING",
      "DIGITAL MARKETING",
      "LAW AND GOVERNMENT",
      "ENTREPRENEURSHIP",
      "ADDITIONAL MATHS",

      // HIGH SCHOOL SUBJECTS
      "ICT",
      "FOOD SCIENCE",
      "PHILOSOPHY",
      "MATHEMATICS WITH STATISTICS",
      "FURTHER MATHEMATICS",
      "MATHS WITH MECHANICS",
      "FINANCIAL ACCOUNTING",
      "CORPORATE ACCOUNTING",
      "COST AND MANAGEMENT ACCOUNTING",
      "DIGITAL MARKETING",
      "MARKETING SKILLS",
      "PROFESSIONAL MARKETING PRACTICE",
      "BUSINESS MANAGEMENT",
      "COMMERCE AND FINANCE",

    // ONLINE
      "Online Primary Tutors",
      "Online Secondary Tutors",
      "Online Mathematics Tutors",
      "Online Language Tutors",
  ];

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1B1B1B]">
          We Cover All Subjects
        </h2>

        <p className="text-center text-gray-500 mb-10 text-lg">
          From Primary School to University and Professional Courses — we’ve got you covered.
        </p>

        {/* GRID */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-5
        ">
          {subjects.map((sub, idx) => (
            <a
              key={idx}
              href={`/subjects/${sub.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="
                block
                text-center
                py-4
                px-5
                rounded-2xl
                bg-white
                shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                hover:shadow-[0_4px_28px_rgba(0,0,0,0.1)]
                border border-gray-100
                font-semibold
                text-[#1B1B1B]
                hover:bg-orange-50
                transition
              "
            >
              {sub}
            </a>
          ))}
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-12 text-center text-sm text-gray-400 italic">
          CASAF Tutors prides itself on covering all subjects across Cameroon —  
          <a href="/contact" className="text-orange-500 hover:underline ml-1">
            don’t believe us? Contact us!
          </a>
        </div>

      </div>
    </section>
  );
}