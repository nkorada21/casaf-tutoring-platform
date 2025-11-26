// src/pages/SubjectsPage.jsx
export default function SubjectsPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Subjects We Cover</h1>
      <p className="text-gray-700 mb-2">
        Mathematics, Physics, Chemistry, Biology, English, French, Computer
        Science, and more.
      </p>
      <p className="text-gray-700">
        Later we’ll pull these from Firestore and allow filtering by grade,
        curriculum, and country.
      </p>
    </section>
  );
}