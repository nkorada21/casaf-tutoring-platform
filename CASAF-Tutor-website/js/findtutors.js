const tutorGrid = document.getElementById("tutorGrid");
const searchInput = document.getElementById("searchInput");
const subjectFilter = document.getElementById("subjectFilter");
const levelFilter = document.getElementById("levelFilter");
const languageFilter = document.getElementById("languageFilter");

// Populate subject dropdown dynamically
const subjects = [...new Set(tutors.map(t => t.subject))];
subjects.forEach(sub => {
  const opt = document.createElement("option");
  opt.value = sub;
  opt.textContent = sub;
  subjectFilter.appendChild(opt);
});

function displayTutors(list) {
  tutorGrid.innerHTML = "";

  if (list.length === 0) {
    tutorGrid.innerHTML = `<p class="text-gray-600 text-lg">No tutors found.</p>`;
    return;
  }

  list.forEach((tutor) => {
    const card = document.createElement("div");

    card.className =
      "bg-white shadow-lg hover:shadow-xl transition rounded-3xl overflow-hidden cursor-pointer";

    card.innerHTML = `
      <img src="${tutor.img}"
           class="w-full h-48 object-cover"
           alt="${tutor.name}">

      <div class="p-5">
        <h3 class="text-xl font-bold text-[#003366]">${tutor.name}</h3>
        <p class="text-sm text-gray-500">${tutor.subject}</p>
        <p class="text-sm mt-1 text-gray-600">${tutor.hours}+ Hours Taught</p>
        <p class="text-xs mt-2 text-gray-500 leading-snug">${tutor.bio}</p>

        <a href="tutor.html?id=${tutor.id}"
           class="inline-block mt-3 text-[#FF6600] font-semibold hover:underline">
          View Profile →
        </a>
      </div>
    `;

    tutorGrid.appendChild(card);
  });
}

function filterTutors() {
  const search = searchInput.value.toLowerCase();
  const subject = subjectFilter.value;
  const level = levelFilter.value;
  const lang = languageFilter.value;

  const filtered = tutors.filter((t) => {
    return (
      (t.name.toLowerCase().includes(search) ||
       t.subject.toLowerCase().includes(search)) &&
      (subject === "all" || t.subject === subject) &&
      (level === "all" || t.level === level) &&
      (lang === "all" || t.language === lang)
    );
  });

  displayTutors(filtered);
}

// Events
searchInput.addEventListener("input", filterTutors);
subjectFilter.addEventListener("change", filterTutors);
levelFilter.addEventListener("change", filterTutors);
languageFilter.addEventListener("change", filterTutors);

// Initial load
displayTutors(tutors);