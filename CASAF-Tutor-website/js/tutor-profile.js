async function loadTutorProfile() {
  const urlParams = new URLSearchParams(window.location.search);
  const tutorId = parseInt(urlParams.get("id"));

  

  const response = await fetch("data/tutors.json");
  const tutors = await response.json();

  const tutor = tutors.find(t => t.id === tutorId);

  if (!tutor) {
    document.body.innerHTML = "<h1 class='text-center mt-20 text-2xl text-red-500'>Tutor Not Found</h1>";
    return;
  }

  // Fill page with dynamic data
  document.getElementById("profileName").textContent = tutor.name;
  document.getElementById("profileSubject").textContent = tutor.subject;
  document.getElementById("profileImage").src = tutor.image;
  document.getElementById("profileHours").textContent = `${tutor.hours} Hours Taught`;
  document.getElementById("profileBio").textContent = tutor.bio;
  document.getElementById("profileLevel").textContent = tutor.level;
  document.getElementById("profileLanguage").textContent = tutor.language;

  // RELATED TUTORS
  const related = tutors.filter(t =>
    t.subject === tutor.subject && t.id !== tutor.id
  );

  const container = document.getElementById("relatedTutors");

  if (related.length === 0) {
    container.innerHTML = "<p class='text-gray-500'>No related tutors available.</p>";
    return;
  }

  related.forEach(t => {
    container.innerHTML += `
      <a href="tutor-profile.html?id=${t.id}"
         class="bg-white p-4 rounded-xl shadow hover:shadow-xl transition block">
        <img src="${t.image}" class="rounded-lg h-40 w-full object-cover mb-3" />
        <h3 class="font-bold text-[#003366]">${t.name}</h3>
        <p class="text-sm text-gray-600">${t.subject} | ${t.level}</p>
      </a>
    `;
  });
}

document.addEventListener("DOMContentLoaded", loadTutorProfile);