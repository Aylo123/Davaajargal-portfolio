import React from "react";
import "./About.css";
import { useTranslation } from "react-i18next";
import avatar from "../assets/avatar.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">

          <img src={avatar} alt="Profile" className="about-avatar" />

          <h2>{t("about.title")}</h2>


          <p className="about-role">
            {t("about.role")}
          </p>

          <p className="about-description">
            {t("about.desc")}
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">

          <div className="about-card">
            <h3>{t("about.skillsTitle")}</h3>
            <ul className="two-column">
              <li>{t("about.skills1")}</li>
              <li>{t("about.skills2")}</li>
              <li>{t("about.skills3")}</li>
              <li>{t("about.skills4")}</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>{t("about.strengthsTitle")}</h3>
            <ul className="two-column">
              <li>{t("about.strength1")}</li>
              <li>{t("about.strength2")}</li>
              <li>{t("about.strength3")}</li>
              <li>{t("about.strength4")}</li>
            </ul>
          </div>

          <div className="about-card">
            <h3>{t("about.goalTitle")}</h3>
            <p>{t("about.goalDesc")}</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;