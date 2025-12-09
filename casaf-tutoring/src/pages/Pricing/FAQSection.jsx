import { useState } from "react";

export default function FAQSection() {
  const tabs = ["All", "Pricing", "Tutor Prices By Subject", "Tuition Delivery Method", "Tutoring Level"];
  const [active, setActive] = useState("All");

  const faqs = [
    {
      q: "Private Tutor Prices",
      a: "Private tutor rates begin at £60 for school tutoring and go up to £120 for specialist tutors.",
    },
    {
      q: "PhD Tutors Prices",
      a: "PhD private tuition rates start at £90 per hour.",
    },
    {
      q: "University Tutor Prices",
      a: "University tutor rates start from £75 for undergraduates and £90 for postgraduates.",
    },
    {
      q: "A Level Tutor Rates",
      a: "A Level tutoring rates start at £60 per hour.",
    },
  ];

  return (
    <div className="mt-24 max-w-6xl mx-auto px-6 pb-20">
      <h2 className="text-center text-3xl font-bold text-[#252952] mb-2">
        General FAQs
      </h2>
      <p className="text-center text-orange-400 tracking-wide text-sm mb-10">
        SOME OF OUR MOST FREQUENTLY ASKED QUESTIONS
      </p>

      {/* Tabs */}
      <div className="flex gap-6 justify-center mb-8">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`pb-2 text-sm font-semibold ${
              active === t ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-500"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 cursor-pointer group"
          >
            <summary className="text-lg font-semibold text-[#252952] flex justify-between items-center">
              {faq.q}
              <span className="text-orange-500 text-2xl group-open:rotate-180 transition">↓</span>
            </summary>
            <p className="text-gray-600 mt-3">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}