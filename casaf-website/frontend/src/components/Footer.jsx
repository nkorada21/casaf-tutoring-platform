import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs md:flex-row">
        <span>
          © {new Date().getFullYear()} CASAF Tutors. All rights reserved.
        </span>
        <span>Built for tutoring excellence.</span>
      </div>
    </footer>
  );
}