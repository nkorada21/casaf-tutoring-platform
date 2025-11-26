// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs">
          © {new Date().getFullYear()} CASAF Tutoring. All rights reserved.
        </p>
        <p className="text-xs">
          Need help? Call{" "}
          <span className="font-semibold text-casafGold">
            (+237) 675 31 61 71
          </span>
        </p>
      </div>
    </footer>
  );
}