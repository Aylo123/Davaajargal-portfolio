import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Personal from "./pages/Personal";
import Footer from "./pages/Footer";
import Projects from "./pages/Projects";
import ContactModal from "./components/ContactModal";
import { useTranslation } from "react-i18next";


const App = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Navbar />
      <Hero onContactClick={() => setContactOpen(true)} />

      <About />
      <Education />
      <Projects />
      <Personal />
      {/* ✅ Footer → popup нээнэ */}
      <Footer onContactClick={() => setContactOpen(true)} />

      {/* ✅ Contact Popup */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      {/* Router (хэрвээ Home тусдаа route хэрэгтэй бол) */}
      <main className="pt-16 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
