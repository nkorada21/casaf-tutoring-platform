/* ---------------------------------------------------------
  GLOBAL INITIALIZER – runs after navbar is injected
--------------------------------------------------------- */
function initializeNavbar() {
  console.log("Navbar loaded, initializing menu toggle...");

  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!menuToggle || !mobileMenu) {
    console.warn("Navbar toggle elements not found (maybe still loading).");
    return;
  }

  // Mobile menu toggle
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Auto-close when clicking a link
  const links = mobileMenu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  console.log("Mobile navbar initialized successfully.");
}

/* ---------------------------------------------------------
  INITIALIZE FILTERS FOR FIND-TUTOR PAGE (safe)
--------------------------------------------------------- */
function initializeTutorFilters() {
  const subjectFilter = document.getElementById("filterSubject");
  const levelFilter   = document.getElementById("filterLevel");
  const langFilter    = document.getElementById("filterLanguage");
  const searchInput   = document.getElementById("searchInput");
  const tutorGrid     = document.getElementById("tutorGrid");

  // If any of these are missing → skip (page doesn't have filters)
  if (!subjectFilter || !levelFilter || !langFilter || !searchInput || !tutorGrid) {
    console.log("Tutor filter UI not found on this page.");
    return;
  }

  console.log("Initializing tutor filter system...");

  // A backup in case tutors array isn't loaded yet
  if (typeof tutors === "undefined") {
    console.error("tutors array not found. Did you include data.js?");
    return;
  }

  // Render tutors
  function renderTutors(list) {
    tutorGrid.innerHTML = "";

    list.forEach(tutor => {
      const card = document.createElement("div");
      card.className =
        "bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition";

      card.innerHTML = `
        <img src="${tutor.img}" class="w-full h-48 object-cover" />
        <div class="p-5">
          <h3 class="text-lg font-bold text-[#003366]">${tutor.name}</h3>
          <p class="text-sm text-gray-600">${tutor.hours} Hours Taught</p>
          <p class="text-sm text-gray-700">Subject: ${tutor.subject}</p>
          <a href="tutor-profile.html?id=${tutor.id}"
            class="inline-block mt-3 text-[#FF6600] font-semibold hover:underline">
            View Profile →
          </a>
        </div>
      `;
      tutorGrid.appendChild(card);
    });
  }

  renderTutors(tutors);

  // FILTERING LOGIC
  function applyFilters() {
    const s = subjectFilter.value.toLowerCase();
    const l = levelFilter.value.toLowerCase();
    const lang = langFilter.value.toLowerCase();
    const q = searchInput.value.toLowerCase();

    const filtered = tutors.filter(t => {
      const matchSubject = !s || t.subject.toLowerCase().includes(s);
      const matchLevel   = !l || (t.level && t.level.toLowerCase().includes(l));
      const matchLang    = !lang || (t.language && t.language.toLowerCase().includes(lang));
      const matchSearch  =
        t.name.toLowerCase().includes(q) ||
        t.subject.toLowerCase().includes(q);

      return matchSubject && matchLevel && matchLang && matchSearch;
    });

    renderTutors(filtered);
  }

  // EVENT LISTENERS
  subjectFilter.addEventListener("change", applyFilters);
  levelFilter.addEventListener("change", applyFilters);
  langFilter.addEventListener("change", applyFilters);
  searchInput.addEventListener("input", applyFilters);

  console.log("Tutor filters ready.");
}

/* ---------------------------------------------------------
  RUN EVERYTHING AFTER HTML + NAVBAR ARE READY
--------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });

      mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");
        });
      });
    }

  }, 300); // wait for navbar.html to finish loading
});