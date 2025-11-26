// src/pages/HomePage.jsx
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="grid gap-8 md:grid-cols-2 items-center">
      <div>
        <p className="text-sm font-semibold text-casafBlue mb-2">
          Community Action Scheme Africa (CASAF)
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          1-to-1 expert tutoring for students across Africa.
        </h1>
        <p className="text-gray-700 mb-6">
          Connect with verified tutors, get homework help, and use our AI Tutor
          to practice questions 24/7 – all in one platform.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/request"
            className="px-5 py-2.5 rounded-md bg-casafBlue text-white font-semibold text-sm hover:bg-blue-900 transition"
          >
            Request a Tutor
          </Link>
          <Link
            to="/ai-tutor"
            className="px-5 py-2.5 rounded-md border border-gray-300 text-sm font-semibold hover:border-casafBlue hover:text-casafBlue transition"
          >
            Try AI Tutor
          </Link>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-xl p-5 border border-gray-200">
        <h2 className="text-lg font-semibold mb-3">
          Why students choose CASAF Tutoring
        </h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• Handpicked tutors from top universities and schools</li>
          <li>• Flexible online sessions that fit your schedule</li>
          <li>• AI-powered practice and instant explanations</li>
          <li>• Progress tracking for parents and students</li>
        </ul>
      </div>
    </section>
  );
}