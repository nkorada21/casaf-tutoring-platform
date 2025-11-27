import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Tutoring Pages */}
        <Route path="/tutoring/university" element={<h1>University Tutors</h1>} />
        <Route path="/tutoring/gcse" element={<h1>GCSE Tutors</h1>} />
        <Route path="/tutoring/alevel" element={<h1>A-Level Tutors</h1>} />
        <Route path="/tutoring/ib" element={<h1>IB Tutors</h1>} />
        <Route path="/tutoring/dissertation" element={<h1>Dissertation Tutors</h1>} />
        <Route path="/tutoring/online" element={<h1>Online Tutors</h1>} />

        {/* Admissions Pages */}
        <Route path="/admissions/oxbridge" element={<h1>Oxbridge Admissions</h1>} />
        <Route path="/admissions/undergraduate" element={<h1>Undergraduate Admissions</h1>} />
        <Route path="/admissions/postgraduate" element={<h1>Postgraduate Admissions</h1>} />
        <Route path="/admissions/medical" element={<h1>Medical Admissions</h1>} />
        <Route path="/admissions/us" element={<h1>US Admissions</h1>} />

        {/* Other Pages */}
        <Route path="/login" element={<h1>Login Page</h1>} />
        <Route path="/signup" element={<h1>Signup Page</h1>} />
        <Route path="/pricing" element={<h1>Pricing</h1>} />
        <Route path="/find-tutors" element={<h1>Find Tutors</h1>} />
      </Routes>
      <Footer />
      </>
  );
}