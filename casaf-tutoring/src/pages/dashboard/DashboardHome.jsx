// src/pages/dashboard/DashboardHome.jsx
export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
      <p className="text-gray-600 mt-2">
        Here you can manage your lessons, view progress, update your profile, and more.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-xl font-semibold">Upcoming Lessons</h2>
          <p className="text-gray-500 mt-1">No lessons scheduled.</p>
        </div>

        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-xl font-semibold">Payments</h2>
          <p className="text-gray-500 mt-1">Track your payment history.</p>
        </div>

        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-xl font-semibold">Messages</h2>
          <p className="text-gray-500 mt-1">Stay in touch with your tutors.</p>
        </div>

      </div>
    </div>
  );
}