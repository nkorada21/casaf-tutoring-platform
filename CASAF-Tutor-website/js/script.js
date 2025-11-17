document.addEventListener("DOMContentLoaded", () => {
  // ----- MOBILE MENU TOGGLE -----
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuToggle && mobileMenu) {
    // Open / close when clicking hamburger
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Close menu when clicking any mobile link
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // ----- CONTACT FORM SUBMISSION -----
  const form = document.getElementById("casafForm");
  const formMessage = document.getElementById("formMessage");

  if (form && formMessage) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const endpoint = form.action;

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        // Reset message color first
        formMessage.classList.remove("text-red-600");
        formMessage.classList.add("text-green-600");

        if (response.ok) {
          formMessage.textContent = "Message sent successfully!";
          formMessage.classList.remove("hidden");
          form.reset();
        } else {
          formMessage.textContent = "Something went wrong. Try again later.";
          formMessage.classList.remove("hidden");
          formMessage.classList.remove("text-green-600");
          formMessage.classList.add("text-red-600");
        }

        // Hide the message after 4 seconds
        setTimeout(() => {
          formMessage.classList.add("hidden");
        }, 4000);
      } catch (error) {
        formMessage.textContent = "Network error. Please try again.";
        formMessage.classList.remove("hidden");
        formMessage.classList.remove("text-green-600");
        formMessage.classList.add("text-red-600");

        setTimeout(() => {
          formMessage.classList.add("hidden");
        }, 4000);
      }
    });
  }
});

// Access HTML Elements
const tutorGrid = document.getElementById("tutorGrid");
const searchInput = document.getElementById("searchInput");

// Function to Display Tutors
function displayTutors(list) {
  tutorGrid.innerHTML = "";
  list.forEach((tutor) => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-1 transition transform";
    card.innerHTML = `
      <img src="${tutor.img}" alt="${tutor.name}" class="w-full h-56 object-cover">
      <div class="p-6 text-left">
        <h3 class="text-lg font-bold text-gray-900">${tutor.name}</h3>
        <p class="text-sm text-gray-600 mb-1">${tutor.hours} Hours Taught</p>
        <p class="text-sm text-gray-700 mb-1"><strong>Subject:</strong> ${tutor.subject}</p>
        <p class="text-sm text-gray-700">${tutor.bio}</p>
        <a href="tutor.html?id=${tutor.id}" 
           class="inline-block mt-3 text-[#FF6600] font-semibold hover:underline">
           View Profile →
        </a>
      </div>
    `;
    tutorGrid.appendChild(card);
  });
}

// Initial Load
displayTutors(tutors);

// Search Filter
searchInput.addEventListener("input", (e) => {
  const search = e.target.value.toLowerCase();
  const filtered = tutors.filter(
    (tutor) =>
      tutor.name.toLowerCase().includes(search) ||
      tutor.subject.toLowerCase().includes(search)
  );
  displayTutors(filtered);
});
