document.addEventListener("DOMContentLoaded", () => {

// DOM elements
const resultsGrid = document.getElementById("resultsGrid");
const resultsCount = document.getElementById("resultsCount");

const searchName = document.getElementById("searchName");
const filterSubject = document.getElementById("filterSubject");
const filterLevel = document.getElementById("filterLevel");
const filterLanguage = document.getElementById("filterLanguage");
const filterLocation = document.getElementById("filterLocation");

const applyBtn = document.getElementById("applyFilters");
const resetBtn = document.getElementById("resetFilters");


// ========== RENDER TUTORS (CARD GRID) ==========
function renderTutors(list) {
  resultsGrid.innerHTML = "";

  if (list.length === 0) {
    resultsGrid.innerHTML =
      `<p class="text-center text-gray-600 py-6">No tutors found.</p>`;
    resultsCount.textContent = "0 tutors found";
    return;
  }

  list.forEach(tutor => {
    const card = `
      <div class="bg-white rounded-3xl shadow-md hover:shadow-xl transition
                  p-5 flex flex-col">

        <img src="${tutor.img}" 
              class="w-full h-40 object-cover rounded-2xl mb-4" />

        <h3 class="text-lg font-bold text-[#003366]">${tutor.name}</h3>
        <p class="text-sm text-[#FF6600]">${tutor.subject}</p>

        <p class="text-xs text-gray-600 mt-1">
          ${tutor.level}
        </p>
        <p class="text-xs text-gray-500">
          ${tutor.language}
        </p>

        <div class="mt-4 text-xs text-gray-600">
          <p>📍 ${tutor.location}</p>
          <p>⏱ ${tutor.hours} hours taught</p>
        </div>

        <div class="mt-4 flex gap-2">
          <a href="tutor.html?id=${tutor.id}"
              class="flex-1 text-center px-3 py-2 border border-[#FF6600] 
                    text-[#FF6600] rounded-full text-xs font-semibold">
            View Profile
          </a>

          <a href="request.html"
              class="flex-1 text-center px-3 py-2 bg-[#FF6600] text-white
                    rounded-full text-xs font-semibold">
            Request
          </a>
        </div>

      </div>
    `;

    resultsGrid.innerHTML += card;
  });

  resultsCount.textContent = `${list.length} tutors found`;
}


// ========== FILTER LOGIC ==========
function applyFiltersFunc() {
  let filtered = TUTORS;

  const keyword = searchName.value.toLowerCase();

  if (keyword) {
    filtered = filtered.filter(t =>
      t.name.toLowerCase().includes(keyword) ||
      t.subject.toLowerCase().includes(keyword)
    );
  }

  if (filterSubject.value) {
    filtered = filtered.filter(t => t.subject === filterSubject.value);
  }

  if (filterLevel.value) {
    filtered = filtered.filter(t => t.level === filterLevel.value);
  }

  if (filterLanguage.value) {
    filtered = filtered.filter(t => t.language === filterLanguage.value);
  }

  if (filterLocation.value) {
    filtered = filtered.filter(t =>
      t.location.toLowerCase().includes(filterLocation.value.toLowerCase())
    );
  }

  renderTutors(filtered);
}


// ========== RESET FILTERS ==========
function resetFiltersFunc() {
  searchName.value = "";
  filterSubject.value = "";
  filterLevel.value = "";
  filterLanguage.value = "";
  filterLocation.value = "";
  renderTutors(TUTORS);
}


// EVENTS
applyBtn.addEventListener("click", applyFiltersFunc);
resetBtn.addEventListener("click", resetFiltersFunc);

// FIRST RENDER
renderTutors(TUTORS);

});