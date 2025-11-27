import { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  const [expanded, setExpanded] = useState(false);

  return (
    <footer className="bg-[#252952] text-gray-300 pt-20 pb-10 px-6">

      {/* GRID SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

        {/* ABOUT */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">About CASAF Tutors</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-300">Who We Are</a></li>
            <li><a href="#" className="hover:text-orange-300">Mission Statement</a></li>
            <li><a href="#" className="hover:text-orange-300">Meet the Team</a></li>
            <li><a href="#" className="hover:text-orange-300">Student Testimonials</a></li>
            <li><a href="#" className="hover:text-orange-300">Awards & Recognition</a></li>
            <li><a href="#" className="hover:text-orange-300">CASAF in the Media</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-300">Tutoring Services</a></li>
            <li><a href="#" className="hover:text-orange-300">Admissions Guidance</a></li>
            <li><a href="#" className="hover:text-orange-300">How It Works</a></li>
            <li><a href="#" className="hover:text-orange-300">Top Tutors</a></li>
            <li><a href="#" className="hover:text-orange-300">Online Tutors</a></li>
            <li><a href="#" className="hover:text-orange-300">University Tutors</a></li>
          </ul>
        </div>

        {/* POPULAR LOCATIONS */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Popular Tutoring Locations</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-300">Tutoring in Douala</a></li>
            <li><a href="#" className="hover:text-orange-300">Tutoring in Yaoundé</a></li>
            <li><a href="#" className="hover:text-orange-300">Tutoring in Buea</a></li>
            <li><a href="#" className="hover:text-orange-300">Tutoring in Limbe</a></li>
            <li><a href="#" className="hover:text-orange-300">Online Tutoring (Worldwide)</a></li>
            <li><a href="#" className="hover:text-orange-300">Home Tutors</a></li>
          </ul>
        </div>

        {/* POPULAR REQUESTS */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Popular Tutoring Requests</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-300">Mathematics Tutors</a></li>
            <li><a href="#" className="hover:text-orange-300">Physics Tutors</a></li>
            <li><a href="#" className="hover:text-orange-300">Chemistry Tutors</a></li>
            <li><a href="#" className="hover:text-orange-300">Computer Science Tutors</a></li>
            <li><a href="#" className="hover:text-orange-300">Economics Tutors</a></li>
            <li><a href="#" className="hover:text-orange-300">Engineering Tutors</a></li>
          </ul>
        </div>
      </div>

      {/* SHOW MORE */}
      <div className="text-center mt-10">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-gray-300 hover:text-orange-300 text-sm transition"
        >
          {expanded ? "Show Less ▲" : "Show More ▼"}
        </button>
      </div>

      {/* EXPANDED CONTENT */}
      {expanded && (
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>Additional information, accreditation, policies, and extended resource links go here.</p>
        </div>
      )}

      {/* SOCIAL ICONS */}
      <div className="flex justify-center gap-5 text-2xl mt-10">
        <FaFacebookF className="hover:text-orange-300 cursor-pointer" />
        <FaInstagram className="hover:text-orange-300 cursor-pointer" />
        <FaLinkedinIn className="hover:text-orange-300 cursor-pointer" />
        <FaXTwitter className="hover:text-orange-300 cursor-pointer" />
        <FaYoutube className="hover:text-orange-300 cursor-pointer" />
        <FaTiktok className="hover:text-orange-300 cursor-pointer" />
      </div>

      {/* ASSOCIATION LOGO AREA */}
      <div className="text-center mt-10 text-sm">
        <p className="mb-3 text-gray-400">Tutors Association Member</p>
        <img
          src="/assets/tutor-association.png"
          alt="Tutors Association"
          className="mx-auto h-16 opacity-90"
        />
      </div>

      {/* COPYRIGHT */}
      <div className="text-center mt-8 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} CASAF Tutors — All Rights Reserved · Privacy Policy · Terms & Conditions
      </div>
    </footer>
  );
}
