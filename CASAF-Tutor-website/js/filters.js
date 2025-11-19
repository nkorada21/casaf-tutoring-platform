document.addEventListener("DOMContentLoaded", () => {

  const resultsGrid = document.getElementById("resultsGrid");
  const resultsCount = document.getElementById("resultsCount");

  // FILTER INPUTS
  const searchName = document.getElementById("searchName");
  const filterSubject = document.getElementById("filterSubject");
  const filterLevel = document.getElementById("filterLevel");
  const filterLanguage = document.getElementById("filterLanguage");
  const filterLocation = document.getElementById("filterLocation");

  // BUTTONS
  const applyBtn = document.getElementById("applyFilters");
  const resetBtn = document.getElementById("resetFilters");


  // ========== RENDER TUTORS ==========
  function renderTutors(list) {
    resultsGrid.innerHTML = "";

    if (list.length === 0) {
      resultsGrid.innerHTML = `
        <p class="text-center text-gray-600 py-6">No tutors found. Try adjusting your filters.</p>
      `;
      resultsCount.textContent = "0 tutors found";
      return;
    }

    list.forEach(tutor => {
      const card = `
        <div class="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition">

          <div class="flex gap-4 items-center">
            <img 
              src="${tutor.img}" 
              alt="${tutor.name}" 
              class="w-20 h-20 object-cover rounded-2xl"
            />
            
            <div>
              <h3 class="font-bold text-[#003366]">${tutor.name}</h3>
              <p class="text-sm text-gray-600">${tutor.subject}</p>
              <p class="text-xs text-gray-500">${tutor.level} • ${tutor.language}</p>
            </div>
          </div>

          <div class="mt-4 text-xs text-gray-500">
            <p>📍 ${tutor.location}</p>
            <p>⏱ ${tutor.hours} hours taught</p>
          </div>

        </div>
      `;
      resultsGrid.innerHTML += card;
    });

    resultsCount.textContent = `${list.length} tutors found`;
  }


  // ========== FILTER FUNCTION ==========
  function applyFiltersFunc() {
    let filtered = TUTORS;

    // SEARCH
    const keyword = searchName.value.toLowerCase();
    if (keyword) {
      filtered = filtered.filter(t =>
        t.name.toLowerCase().includes(keyword) ||
        t.subject.toLowerCase().includes(keyword)
      );
    }

    // SUBJECT
    if (filterSubject.value) {
      filtered = filtered.filter(t => t.subject === filterSubject.value);
    }

    // LEVEL
    if (filterLevel.value) {
      filtered = filtered.filter(t => t.level === filterLevel.value);
    }

    // LANGUAGE
    if (filterLanguage.value) {
      filtered = filtered.filter(t => t.language === filterLanguage.value);
    }

    // LOCATION
    if (filterLocation.value) {
      filtered = filtered.filter(t =>
        t.location.toLowerCase().includes(filterLocation.value.toLowerCase())
      );
    }

    renderTutors(filtered);
  }


  // ========== RESET ==========
  function resetFiltersFunc() {
    searchName.value = "";
    filterSubject.value = "";
    filterLevel.value = "";
    filterLanguage.value = "";
    filterLocation.value = "";
    renderTutors(TUTORS);
  }


  // BUTTON EVENTS
  applyBtn.addEventListener("click", applyFiltersFunc);
  resetBtn.addEventListener("click", resetFiltersFunc);

  // FIRST LOAD
  renderTutors(TUTORS);

});