document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const tutorId = params.get("id");
  const container = document.getElementById("tutorProfile");

  if (!tutorId || !window.TUTORS) {
    container.innerHTML = `
      <div class="bg-white p-6 rounded-2xl shadow text-center text-gray-600">
        Tutor not found.
      </div>`;
    return;
  }

  const tutor = TUTORS.find(t => String(t.id) === tutorId);

  if (!tutor) {
    container.innerHTML = `
      <div class="bg-white p-6 rounded-2xl shadow text-center text-gray-600">
        Tutor not found.
      </div>`;
    return;
  }

  // Build profile layout
  container.innerHTML = `
    <div class="bg-white rounded-3xl shadow-xl overflow-hidden p-6 sm:p-10">

      <div class="flex flex-col sm:flex-row gap-8">
        
        <!-- LEFT IMAGE -->
        <div class="w-full sm:w-64 flex-shrink-0">
          <img src="${tutor.img}" 
               class="w-full h-64 object-cover rounded-3xl shadow-md" />
        </div>

        <!-- RIGHT TEXT -->
        <div class="flex-1 space-y-4">
          <h1 class="text-3xl font-bold text-[#003366]">${tutor.name}</h1>

          <p class="text-[#FF6600] font-semibold">${tutor.subject}</p>

          <p class="text-gray-700 leading-relaxed text-sm">${tutor.bio}</p>

          <div class="flex flex-wrap gap-2 text-xs pt-3">
            <span class="px-3 py-1 bg-gray-200 rounded-full">Level: ${tutor.level}</span>
            <span class="px-3 py-1 bg-orange-100 text-orange-600 rounded-full">Language: ${tutor.language}</span>
            <span class="px-3 py-1 bg-gray-200 rounded-full">Location: ${tutor.location}</span>
            <span class="px-3 py-1 bg-gray-200 rounded-full">Hours taught: ${tutor.hours}</span>
          </div>

          <div class="pt-4 flex gap-4">
            <a href="request.html?tutor=${encodeURIComponent(tutor.name)}"
               class="px-6 py-3 bg-[#FF6600] text-white rounded-full font-semibold hover:bg-[#e65a00] transition">
              Request This Tutor →
            </a>

            <a href="mailto:info@casafcameroon.org"
               class="px-6 py-3 border border-[#FF6600] text-[#FF6600] rounded-full font-semibold hover:bg-[#FFF4EB] transition">
              Contact CASAF
            </a>
          </div>
        </div>

      </div>

      <!-- EXTRA DETAILS SECTION -->
      <div class="mt-10 border-t pt-6">
        <h2 class="text-xl font-bold text-[#003366] mb-3">More About ${tutor.name}</h2>
        <p class="text-gray-600 text-sm leading-relaxed">
          ${tutor.bioLong || tutor.bio}
        </p>
      </div>

    </div>
  `;
});