import HeroProfs from "../components/home/HeroProfs";
import TrustBanner from "../components/home/TrustBanner";
import SubjectsIntro from "../components/home/SubjectsIntro";
import SubjectsGrid from "../components/home/SubjectsGrid";
import OurServices from "../components/home/OurServices";
import SupportTeam from "../components/home/SupportTeam";

export default function Home() {
  return (
    <>
    <HeroProfs />
    <TrustBanner />
    <SubjectsGrid />
    <main className="bg-gray-50 min-h-screen">
      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#252952] mb-2">
          How CASAF Tutoring Works
        </h2>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          We combine local understanding with global academic standards to support
          students at every stage of their learning journey.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="text-orange-400 font-bold text-xl mb-2">1</div>
            <h3 className="font-semibold mb-2 text-[#252952]">
              Tell us what you need
            </h3>
            <p className="text-sm text-gray-600">
              Share your subject, level, preferred schedule and goals. The more detail
              you give, the better we can match you.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="text-orange-400 font-bold text-xl mb-2">2</div>
            <h3 className="font-semibold mb-2 text-[#252952]">
              We match you with a tutor
            </h3>
            <p className="text-sm text-gray-600">
              Our team reviews your request and finds an experienced tutor from our
              network who fits your subject and style.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="text-orange-400 font-bold text-xl mb-2">3</div>
            <h3 className="font-semibold mb-2 text-[#252952]">
              Start lessons & track progress
            </h3>
            <p className="text-sm text-gray-600">
              Study online or in-person. Get regular feedback, progress updates and
              exam-focused support when needed.
            </p>
          </div>
        </div>
      </section>


    <OurServices />
    <SupportTeam />

      

      

      {/* TESTIMONIALS */}
      <section className="bg-[#252952] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            What Students & Parents Say
          </h2>
          <p className="text-gray-200 mb-8 text-sm md:text-base max-w-2xl">
            CASAF Tutors has helped learners improve grades, build confidence and secure
            places at leading universities.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="mb-3 text-gray-100">
                “My tutor explained difficult concepts in a simple way. I went from
                struggling to feeling confident before exams.”
              </p>
              <div className="text-xs text-gray-300">
                — Final-year student, Computer Science
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="mb-3 text-gray-100">
                “CASAF helped my daughter stay on track with school work while preparing
                for university. The support was personal and reliable.”
              </p>
              <div className="text-xs text-gray-300">
                — Parent of A-level student
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="mb-3 text-gray-100">
                “The admissions guidance made a huge difference to my personal statement
                and interview preparation.”
              </p>
              <div className="text-xs text-gray-300">
                — Undergraduate applicant
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-[#252952] mb-2">
              Ready to get started with CASAF Tutoring?
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Request a tutor or apply to become one. Our team will follow up with you
              to discuss the best options for your goals.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/request-tutor"
              className="bg-orange-400 hover:bg-orange-500 text-white font-semibold text-sm md:text-base px-5 py-2.5 rounded-full"
            >
              Request a Tutor
            </a>
            <a
              href="/signup"
              className="border border-orange-400 text-orange-400 hover:bg-orange-50 font-semibold text-sm md:text-base px-5 py-2.5 rounded-full"
            >
              Become a Tutor
            </a>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}