import React from "react";
import profile_img from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";
import "./Hero.css";
import { useTranslation } from "react-i18next";

const Hero = ({ onContactClick }) => {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero">
      
      <img 
        src={profile_img} 
        alt="Profile" 
        className="hero-img"
      />

      <h1>
        {t("hero.greeting")} {t("hero.name")}
      </h1>

      <p className="hero-title">
        {t("hero.title")}
      </p>

      <div className="hero-action">

        {/* Contact button (popup) */}
        <button
          className="hero-connected"
          onClick={onContactClick}
        >
          {t("hero.contactBtn")}
        </button>

        {/* Resume button (PDF new tab) */}
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume"
        >
          {t("hero.cvBtn")}
        </a>

      </div>

    </section>
  );
};

export default Hero;