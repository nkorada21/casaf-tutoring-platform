import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

// Auth pages
import ChooseLogin from "./pages/auth/ChooseLogin";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import EmailSent from "./pages/auth/EmailSent";
import WhatsAppWidget from "./components/WhatsAppWidget";
import AIBotWidget from "./components/AIBotWidget";

// Dashboard
import Dashboard from "./pages/dashboard/Dashboard";
import SubjectsPage from "./pages/Subjects/SubjectsPage";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Subjects Page Route */}
        <Route path="/subjects/all" element={<SubjectsPage />} />

        {/* Tutoring */}
        <Route path="/tutoring/university" element={<h1>University Tutors</h1>} />
        <Route path="/tutoring/gcse" element={<h1>GCSE Tutors</h1>} />
        <Route path="/tutoring/alevel" element={<h1>A-Level Tutors</h1>} />
        <Route path="/tutoring/ib" element={<h1>IB Tutors</h1>} />
        <Route path="/tutoring/dissertation" element={<h1>Dissertation Tutors</h1>} />
        <Route path="/tutoring/online" element={<h1>Online Tutors</h1>} />

        {/* Admissions */}
        <Route path="/admissions/oxbridge" element={<h1>Oxbridge Admissions</h1>} />
        <Route path="/admissions/undergraduate" element={<h1>Undergraduate Admissions</h1>} />
        <Route path="/admissions/postgraduate" element={<h1>Postgraduate Admissions</h1>} />
        <Route path="/admissions/medical" element={<h1>Medical Admissions</h1>} />
        <Route path="/admissions/us" element={<h1>US Admissions</h1>} />

        {/* Auth */}
        <Route path="/choose-login" element={<ChooseLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/email-sent" element={<EmailSent />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />

      <WhatsAppWidget /> {/* Floating WhatsApp chat */}
      <AIBotWidget />     {/* AI Chatbot */}
      </>
  );
}