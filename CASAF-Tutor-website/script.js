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