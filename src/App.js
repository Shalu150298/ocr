import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Register/Signup";
import Navigation from "./components/Landing Page/navigation";
import Header from "./components/Landing Page/Header";
import Services from "./components/Landing Page/Services";
import About from "./components/Landing Page/About";
import Footer from "./components/Landing Page/Footer";
import AdminLayout from "./components/ProductAi/Layout/AdminLayout";
import Contact from "./components/Landing Page/Contact";
import Counter from "./components/Landing Page/counter";
import Features from "./components/Landing Page/Features";
import Testimonials from "./components/Landing Page/Testimonials";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<AdminLayout />} />
      </Routes>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Services />
      <Counter />
      <Features />
      {/* <Testimonials /> */}
      {/* <CarouselItem /> */}
      {/* <Team /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
