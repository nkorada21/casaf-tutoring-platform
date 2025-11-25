document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("casafLoginForm");
  const msg = document.getElementById("loginMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    // ⚠️ TEMPORARY DEMO LOGIN (no backend)
    if (email === "" || password === "") {
      msg.textContent = "Please fill all fields.";
      msg.className = "text-center text-red-600 mt-3";
      msg.classList.remove("hidden");
      return;
    }

    // Simulate login success
    msg.textContent = "Login successful! Redirecting…";
    msg.className = "text-center text-green-600 mt-3";
    msg.classList.remove("hidden");

    setTimeout(() => {
      // Redirect to dashboard later
      window.location.href = "index.html";
    }, 1200);
  });
});