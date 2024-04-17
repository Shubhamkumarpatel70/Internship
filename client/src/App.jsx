import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import Userlogin from "./components/Userlogin";
import Adminlogin from "./components/Adminlogin";
import Signup from "./pages/Signup";
import UserPannel from "./pages/UserPannel";
import AdminPannel from "./pages/AdminPannel";
import ContactUs from "./pages/ContactUs";
import InternshipDomain from "./pages/InternshipDomain";
import Notification from "./pages/Notification";

export default function App() {
  return (
    <BrowserRouter>
      < Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/userlogin" element={<Userlogin />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adminpannel" element={<AdminPannel />} />
        <Route path="/userpannel" element={<UserPannel />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/internshipdomain" element={<InternshipDomain />} />
        <Route path="/notification" element={<Notification />} />



      </Routes>
      < Footer />
   </BrowserRouter>
  );
}
