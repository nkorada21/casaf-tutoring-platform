// Get ID from URL
const params = new URLSearchParams(window.location.search);
const tutorId = parseInt(params.get("id"));

// Get container
const container = document.getElementById("profileContainer");

// If tutorId doesn't exist
if (!tutorId) {
  container.innerHTML = `<h2 class="text-red-600 text-lg">Invalid tutor profile</h2>`;
  throw new Error("No tutor ID found in URL.");
}

// Check tutors available
if (!Array.isArray(tutors)) {
  container.innerHTML = `<h2 class="text-red-600 text-lg">Data not loaded. Check data.js</h2>`;
  throw new Error("tutors array does not exist");
}

// Find tutor object
const tutor = tutors.find(t => t.id === tutorId);

// If no match
if (!tutor) {
  container.innerHTML = `<h2 class="text-red-600 text-lg">Tutor not found.</h2>`;
  throw new Error("Tutor not found in data.js");
}

// Render the profile
container.innerHTML = `
  <div class="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">

    <img src="${tutor.img}" class="w-full md:w-1/2 h-80 object-cover">

    <div class="p-8 md:w-1/2">
      <h2 class="text-3xl font-bold text-gray-900">${tutor.name}</h2>
      <p class="text-lg text-sky-700 mt-1">${tutor.subject}</p>
      <p class="text-gray-700 mt-4">${tutor.bio}</p>
      <p class="mt-3 text-gray-600 text-sm"><strong>Hours taught:</strong> ${tutor.hours}</p>

      <a href="request.html"
         class="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-full text-lg hover:bg-orange-600">
         Request This Tutor →
      </a>
    </div>

  </div>
`;