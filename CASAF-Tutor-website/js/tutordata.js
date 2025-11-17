const tutors = [
    {
      name: "Dr. Alicia Fernandez",
      subject: "Physics & Engineering",
      img: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?auto=format&fit=crop&w=800&q=80",
      bio: "Expert in applied physics with 8+ years of teaching experience.",
      hours: 1987
    },
    {
      name: "Mr. James Carter",
      subject: "Mathematics & Statistics",
      img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=800&q=80",
      bio: "Specialist in statistics and data analysis, helping students master numbers.",
      hours: 2415
    },
    {
      name: "Ms. Claire Wong",
      subject: "Business & Economics",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      bio: "Business strategist with 10+ years mentoring MBA students.",
      hours: 1732
    },
    {
      name: "Mr. David Mensah",
      subject: "Computer Science",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
      bio: "Full-stack developer helping students master programming fundamentals.",
      hours: 2140
    },
    {
      name: "Dr. Rose Mboko",
      subject: "Biology & Chemistry",
      img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80",
      bio: "PhD holder in Biology with passion for lab-based learning.",
      hours: 1899
    },
    {
      name: "Ms. Lila Osei",
      subject: "English & Writing",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      bio: "Helping students improve communication and academic writing.",
      hours: 2010
    }
  ];

  // Function to Display Tutors
  const tutorGrid = document.getElementById("tutorGrid");

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
        </div>
      `;
      tutorGrid.appendChild(card);
    });
  }

  // Initial Load
  displayTutors(tutors);

  // Search Filter
  document.getElementById("searchInput").addEventListener("input", (e) => {
    const search = e.target.value.toLowerCase();
    const filtered = tutors.filter(
      (tutor) =>
        tutor.name.toLowerCase().includes(search) ||
        tutor.subject.toLowerCase().includes(search)
    );
    displayTutors(filtered);
  });