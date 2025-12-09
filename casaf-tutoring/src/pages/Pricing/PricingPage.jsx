import { useNavigate } from "react-router-dom";
import FAQSection from "./FAQSection";
import TrustpilotSlider from "./TrustpilotSlider";

export default function PricingPage() {
  const navigate = useNavigate();

  const pricing = [
    {
      title: "School Tutoring",
      desc: "Professional help from a tutor for those who need to achieve better grades at school.",
      price: "£60",
    },
    {
      title: "Undergraduate Tutoring",
      desc: "An expert tutor with many years of experience in the university system.",
      price: "£75",
    },
    {
      title: "Postgraduate Tutoring",
      desc: "A veteran tutor who is a true authority in their subject.",
      price: "£90",
    },
    {
      title: "Professional Tutoring",
      desc: "Experienced tutors helping students pass professional qualifications.",
      price: "£105",
    },
    {
      title: "Specialist Tutoring",
      desc: "Specialist tutors from prestigious institutions helping you stand out.",
      price: "£120",
    },
    {
      title: "Applications Support",
      desc: "Proven track record helping students receive offers from top universities.",
      price: "£150",
    },
  ];

  return (
    <div className="bg-[#F9F3EE] min-h-screen pb-10">

      {/* ✦ PAGE TITLE */}
      <div className="text-center pt-20">
        <h1 className="text-4xl font-bold text-[#252952]">Pricing</h1>
        <p className="text-gray-500 mt-2">
          Prices depend on your subject, level of study, and our tutors’ experience.
        </p>
      </div>

      {/* ✦ PRICING CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 px-6">
        {pricing.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition cursor-pointer"
            onClick={() => navigate("/request-tutor")}
          >
            <h2 className="text-xl font-semibold text-[#252952] mb-2">
              {item.title}
            </h2>

            <p className="text-gray-600 text-sm mb-4">{item.desc}</p>

            <div className="flex items-end gap-1">
              <div className="text-[#FF8A3D] font-bold text-3xl">{item.price}</div>
              <span className="text-gray-500 text-sm">/hour</span>
            </div>

            <div className="mt-2 text-xs text-gray-500">+ £70 Registration fee</div>
          </div>
        ))}
      </div>

      {/* ✦ DISCOUNTS */}
      <section className="mt-24">
        <h2 className="text-center text-3xl font-bold text-[#252952] mb-12">
          We Offer Discounts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

          {/* Block Bookings */}
          <div className="bg-white rounded-3xl shadow-md p-10 text-center">
            <div className="text-orange-400 text-6xl mb-4">📘</div>
            <h3 className="text-xl font-semibold mb-2">Block Bookings</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              5% off for 10 hours and 10% off for 20 hours paid upfront.
            </p>
          </div>

          {/* Group Discounts */}
          <div className="bg-white rounded-3xl shadow-md p-10 text-center">
            <div className="bg-[#252952] text-white text-6xl rounded-2xl w-24 h-24 flex items-center justify-center mx-auto mb-4">
              👥
            </div>
            <h3 className="text-xl font-semibold mb-2">Group Discounts</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Pair up with friends and learn together. Each additional student pays 50%.
            </p>
          </div>

          {/* Get £50 */}
          <div className="bg-white rounded-3xl shadow-md p-10 text-center">
            <div className="text-orange-400 text-6xl mb-4">👍</div>
            <h3 className="text-xl font-semibold mb-2">Get £50</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Refer a friend or family member who becomes a tutor — get £50 instantly!
            </p>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-6 text-sm">
          <span className="text-orange-500 underline cursor-pointer">
            <a href="tel:+237675316171">Call us</a>
          </span>{" "}
          to find out more
        </p>
      </section>

      {/* PART 2 + 3 + 4 WILL BE RENDERED HERE */}
      <FAQSection />
      <TrustpilotSlider />
    </div>
  );
}