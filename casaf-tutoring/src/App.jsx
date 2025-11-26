import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import TutorsPage from "./pages/TutorPage.jsx";
import SubjectsPage from "./pages/SubjectsPage.jsx";
import RequestTutorPage from "./pages/RequestTutorPage.jsx";
import AiTutorPage from "./pages/AiTutorPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tutors" element={<TutorsPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/request" element={<RequestTutorPage />} />
        <Route path="/ai-tutor" element={<AiTutorPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Layout>
  );
}