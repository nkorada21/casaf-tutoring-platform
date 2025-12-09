import { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const testimonials = [
  {
    title: "Incredibly personalised...",
    text: "I had 2 weeks until my Personal Statement deadline and a mediocre draft at best.",
    name: "Ashwin Dykes",
    date: "1 day ago"
  },
  {
    title: "Excellent personal service...",
    text: "We have had great experience with this company. Firstly we were...",
    name: "Jenny W",
    date: "2 days ago"
  },
  {
    title: "Nicholas Guidance...",
    text: "Nicholas Sargent-Small was fantastic with helping me with my application...",
    name: "Sam Paterson",
    date: "5 days ago"
  },
  {
    title: "Personal Statement Guide...",
    text: "I used The Profs for guidance for my personal statement. Nicholas, my tutor, was real...",
    name: "SophiaSRM",
    date: "1 December"
  },
  {
    title: "Highly recommended...",
    text: "We found The Profs from Google search. They were very responsive and provided...",
    name: "Rina",
    date: "24 November"
  }
];

export default function TrustpilotSlider() {
  const [current, setCurrent] = useState(0);

  // Auto move every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  return (
    <div className="mt-24 bg-white py-12">
      <h2 className="text-center text-3xl font-bold text-[#252952]">
        The Cameroon's highest rated tuition company 
      </h2>

      {/* Slider Container */}
      <div className="relative max-w-6xl mx-auto overflow-hidden mt-10 px-4">
        
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-50 z-10"
          onClick={prev}
        >
          <AiOutlineLeft size={22} />
        </button>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-3 rounded-full hover:bg-gray-50 z-10"
          onClick={next}
        >
          <AiOutlineRight size={22} />
        </button>

        {/* Sliding Track */}
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((item, idx) => (
            <div key={idx} className="min-w-full px-6">
              <div className="bg-[#F7F7FF] p-6 rounded-2xl shadow-sm">

                <div className="flex items-center gap-2 mb-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/50/Trustpilot_star.png"
                    alt="star"
                    className="w-5 h-5"
                  />
                  <span className="text-green-600 font-semibold">Verified</span>
                </div>

                <h3 className="font-bold text-lg text-[#252952]">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.text}</p>

                <div className="mt-4 text-sm text-gray-400">
                  {item.name}, {item.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Row */}
        <div className="text-center mt-10 text-gray-600 text-sm">
          Rated <strong>4.9 / 5</strong> based on <strong>1,846 reviews</strong>.  
          Showing our 4 & 5 star reviews.
          <div className="mt-2">
            <img
              src=""
              alt="Trustpilot"
              className="mx-auto w-32 opacity-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
}