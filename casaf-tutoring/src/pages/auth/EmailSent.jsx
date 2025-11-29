import { useLocation, useNavigate } from "react-router-dom";

export default function EmailSent() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get("type"); // verify or reset
  const email = params.get("email");
  const navigate = useNavigate();

  const title =
    type === "reset"
      ? "Password Reset Email Sent"
      : "Verify Your Email Address";

  const message =
    type === "reset"
      ? "We’ve sent a link to reset your password. Please check your inbox."
      : "We’ve sent a verification link to your email. Please click it to activate your account.";

  return (
    <div className="min-h-screen bg-[#F9EDE3] flex justify-center items-center px-4">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-lg w-full text-center">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-[#FF8A3D]/20 flex items-center justify-center">
            <span className="text-3xl text-[#FF8A3D]">📧</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-[#252952] mb-2">
          {title}
        </h1>

        <p className="text-sm text-gray-600 mb-4">{message}</p>

        {email && (
          <p className="text-sm text-gray-700 font-medium mb-6">
            Sent to: <span className="text-[#FF8A3D]">{email}</span>
          </p>
        )}

        <button
          onClick={() => navigate("/login")}
          className="mt-4 bg-[#FF8A3D] hover:bg-[#ff7a1b] text-white font-semibold px-6 py-2 rounded-full"
        >
          Return to Login
        </button>

        <p className="text-xs text-gray-500 mt-4">
          Didn’t receive the email? Check your spam folder or try again.
        </p>
      </div>
    </div>
  );
}