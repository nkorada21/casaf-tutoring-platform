import { useState } from "react";
import { subjects } from "./subjectsData";

export default function SubjectsPage() {
  const [search, setSearch] = useState("");

  const alphabet = Object.keys(subjects);

  const filteredData = Object.fromEntries(
    Object.entries(subjects).map(([letter, list]) => [
      letter,
      list.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      ),
    ])
  );

  return (
    <div className="min-h-screen bg-white pt-20 pb-32 px-4 md:px-16">

      {/* Page Title */}
      <h1 className="text-center text-4xl font-bold text-[#252952] mb-4">
        Select Your Subject
      </h1>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        From Anthropology to Zoology — browse our A–Z list of tutoring subjects.
      </p>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Looking for something?"
          className="border border-gray-300 rounded-l-xl px-4 py-3 w-64 md:w-96"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="bg-orange-500 text-white px-6 rounded-r-xl">
          Search
        </button>
      </div>

      {/* Jump To */}
      <div className="text-center text-gray-500 uppercase text-sm mb-3">
        Jump to:
      </div>

      {/* Alphabet Navigation */}
      <div className="flex justify-center gap-6 flex-wrap mb-14 text-lg">
        {alphabet.map((letter) => (
          <a
            key={letter}
            href={`#section-${letter}`}
            className="text-[#ff7a1b] font-semibold hover:underline"
          >
            {letter}
          </a>
        ))}
      </div>

      {/* Subjects A–Z */}
      <div className="max-w-7xl mx-auto">
        {alphabet.map((letter) => (
          <div key={letter} id={`section-${letter}`} className="mb-20">

            <h2 className="text-2xl font-bold mb-6 text-[#6b6dfa]">
              {letter}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredData[letter].map((subj, i) => (
                <div
                  key={i}
                  className="
                    w-full py-5 bg-[#f7f9fb] border border-gray-200 rounded-2xl
                    text-center text-gray-800 font-medium shadow-sm
                    hover:bg-white hover:shadow-lg hover:-translate-y-1
                    transition-all duration-200 cursor-pointer
                  "
                >
                  {subj}
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      <div className="text-center mb-10">
        <a href="#top" className="text-orange-600 font-semibold underline">
          Back to Top
        </a>
      </div>

      {/* 3 BIG BUTTONS */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 my-20">
        <button className="bg-orange-100 py-6 rounded-2xl text-gray-700 font-semibold">
          Other Subjects
        </button>
        <button className="bg-orange-400 text-white py-6 rounded-2xl font-semibold">
          Resits
        </button>
        <button className="bg-orange-100 py-6 rounded-2xl text-gray-700 font-semibold">
          Online Tutors
        </button>
      </div>

      {/* Not what you are looking for */}
      <h2 className="text-center text-2xl font-bold mb-4">
        Not what you are looking for?
      </h2>

      <p className="text-center text-gray-500 max-w-2xl mx-auto mb-20">
        We pride ourselves on finding tutors where other companies cannot.
        Please <span className="text-orange-500 font-semibold">
            <a href="mailto:info@casafcameroon.org" rel="noopener noreferrer"> Contact Us </a></span>
        and we’ll search our extended network of tutors for you.
      </p>

    </div>
  );
}