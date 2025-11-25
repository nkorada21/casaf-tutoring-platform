export default function Dashboard() {
  return (
    <div className="p-4 md:p-10">
      <h1 className="text-3xl font-bold">Welcome to your Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6 mt-6">

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Profile</h2>
          <p>Update your personal details and preferences.</p>
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Book Sessions</h2>
          <p>Schedule a tutoring session with your preferred tutor.</p>
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Resources</h2>
          <p>Access learning materials uploaded by tutors.</p>
        </div>

      </div>
    </div>
  );
}
