async function loadTutors() {
const response = await fetch("/data/tutors.json");
const tutors = await response.json();

  window.allTutors = tutors; // store globally for filtering purposes
    renderTutors(tutors);
}

function renderTutors(tutors) {
const grid = document.getElementById("tutorGrid");
grid.innerHTML = "";

if (tutors.length === 0) {
    grid.innerHTML = `
        <p class="text-center text-gray-600 col-span-full">
        No tutors found. Try changing the filters.
        </p>`;
    return;
}

tutors.forEach(tutor => {
    grid.innerHTML += `
    <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-4">
        <img src="${tutor.image}" class="h-52 w-full object-cover rounded-xl mb-4" />
        
        <h3 class="text-xl font-bold text-[#003366]">${tutor.name}</h3>
        <p class="text-sm text-gray-600">
            ${tutor.subject} | ${tutor.level} | ${tutor.language}
        </p>

        <p class="text-sm text-gray-700 mt-2">${tutor.bio}</p>

        <button onclick="window.location='tutor-profile.html?id=${tutor.id}'"
        class="mt-4 bg-[#FF6600] text-white px-4 py-2 rounded-xl hover:bg-[#e85a00]">
        View Profile → </button>
    </div>
    `;
    });
}

document.addEventListener("DOMContentLoaded", loadTutors);