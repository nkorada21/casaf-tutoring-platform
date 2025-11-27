import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import FindTutor from "./pages/FindTutor.jsx";
import RequestTutor from "./pages/RequestTutor.jsx";
import BecomeTutor from "./pages/BecomeTutor.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";
import TutorDashboard from "./pages/TutorDashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-tutor" element={<FindTutor />} />
          <Route path="/request-tutor" element={<RequestTutor />} />
          <Route path="/become-tutor" element={<BecomeTutor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/student/dashboard"
            element={
              <ProtectedRoute allowedRoles={["student"]}>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tutor/dashboard"
            element={
              <ProtectedRoute allowedRoles={["tutor"]}>
                <TutorDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}