function applyFilters() {
  const level = document.getElementById("filterLevel").value;
  const subject = document.getElementById("filterSubject").value;
  const language = document.getElementById("filterLanguage").value;

  const filtered = window.allTutors.filter(tutor => {
    return (
      (level === "all" || tutor.level === level) &&
      (subject === "all" || tutor.subject.includes(subject)) &&
      (language === "all" || tutor.language === language)
    );
  });

  renderTutors(filtered);
}

// Dropdown listeners
document.getElementById("filterLevel").addEventListener("change", applyFilters);
document.getElementById("filterSubject").addEventListener("change", applyFilters);
document.getElementById("filterLanguage").addEventListener("change", applyFilters);

// Level button listeners
document.querySelectorAll(".filter-level-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("filterLevel").value = btn.innerText.trim();
    applyFilters();
  });
});