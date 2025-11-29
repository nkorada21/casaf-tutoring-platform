import { useNavigate } from "react-router-dom";

export default function ChooseLogin() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F9EDE3] flex flex-col items-center pt-20 px-4 pb-32">
      <h1 className="text-2xl md:text-3xl font-bold text-[#252952] mb-10">
        Choose Your CASAF Login Option
      </h1>

      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-10 space-y-10">

        {/* Tuition Clients */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#252952] rounded-2xl w-full max-w-md py-8 mb-4">
            <div className="text-3xl font-bold text-white">CASAF Tutors</div>
            <div className="mt-2 text-orange-300 text-sm uppercase tracking-wide">
              Tuition Platform
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-4 max-w-md">
            For school, university, professional qualification and after-school
            tutoring clients.
          </p>

          <button
            onClick={() => navigate("/login?type=tuition")}
            className="bg-[#FF8A3D] hover:bg-[#ff7a1b] text-white font-semibold py-2 px-10 rounded-full"
          >
            Login
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 uppercase tracking-wide">
            Or
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Consultancy / Admissions Clients */}
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#252952] rounded-2xl w-full max-w-md py-8 mb-4">
            <div className="text-3xl font-bold text-white">CASAF Advising</div>
            <div className="mt-2 text-orange-300 text-sm uppercase tracking-wide">
              Admissions & Careers
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-4 max-w-md">
            For university admissions guidance, scholarship support and
            career mentoring clients.
          </p>

          <button
            onClick={() => navigate("/login?type=consultancy")}
            className="bg-[#FF8A3D] hover:bg-[#ff7a1b] text-white font-semibold py-2 px-10 rounded-full"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}