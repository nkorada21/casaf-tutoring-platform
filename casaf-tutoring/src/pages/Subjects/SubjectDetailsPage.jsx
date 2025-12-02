import { Link, useParams } from "react-router-dom";

export default function SubjectDetails() {
  const { slug } = useParams();

  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="bg-white pt-20 pb-32 px-4 md:px-10">

      {/* Back to top */}
      <a href="#top" className="text-orange-500 font-semibold block mb-6">
        Back to Top
      </a>

      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-[#252952] mb-6">
        {title}
      </h1>

      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Our tutors help students achieve outstanding results. Work with the
        best {title} in the world.
      </p>

      {/* Jump To */}
      <div className="text-center text-gray-400 uppercase tracking-wide mb-8">
        Jump to:
      </div>

      {/* Example anchor buttons */}
      <div className="flex justify-center gap-8 text-orange-500 text-lg font-semibold mb-12">
        <a href="#overview">Overview</a>
        <a href="#tutors">Top Tutors</a>
        <a href="#resources">Resources</a>
      </div>

      {/* 3 Main Buttons */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <button className="bg-orange-100 py-6 rounded-2xl text-lg font-semibold text-gray-700">
          Other Subjects
        </button>
        <button className="bg-orange-400 text-white py-6 rounded-2xl text-lg font-semibold">
          Resits
        </button>
        <button className="bg-orange-100 py-6 rounded-2xl text-lg font-semibold text-gray-700">
          Online Tutors
        </button>
      </div>

      {/* NOT WHAT YOU ARE LOOKING FOR */}
      <h2 className="text-center text-2xl font-bold mb-4">
        Not what you are looking for?
      </h2>

      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-20">
        We pride ourselves on finding tutors where other companies cannot.
        Please <span className="text-orange-500 font-semibold">Contact Us</span>
        and we'll search our extended network of tutors for you.
      </p>

      {/* Dummy tutor section */}
      <div id="tutors">
        <h2 className="text-2xl font-bold mb-6">Our Top Tutors</h2>

        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          <div className="border p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-xl mb-2">Tutor Name</h3>
            <p className="text-gray-600">Tutor details go here…</p>
          </div>
        </div>
      </div>

      {/* Back to All Subjects */}
      <div className="text-center mt-20">
        <Link
          to="/subjects"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold inline-block"
        >
          See All Subjects →
        </Link>
      </div>
    </div>
  );
}