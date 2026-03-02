import React from "react";
import { useTranslation } from "react-i18next";
import "./Projects.css";

import Thesis1 from "../assets/Thesis1.pdf";
import Thesis2 from "../assets/Thesis2.pdf";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="projects-section" id="projects">

      <h2 className="projects-title">
        {t("projects.title")}
      </h2>

      <div className="projects-grid">

        {/* ================= Project 1 ================= */}
        <div className="project-card">

          <h3 className="project-title">
            {t("projects.project1.title")}
          </h3>

          <p className="project-desc">
            {t("projects.project1.desc")}
          </p>

          {/* 🔥 PDF Button */}
          <a
            href={Thesis1}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            📄 PDF 
          </a>

        </div>

        {/* ================= Project 2 ================= */}
        <div className="project-card">

          <h3 className="project-title">
            {t("projects.project2.title")}
          </h3>

          <p className="project-desc">
            {t("projects.project2.desc")}
          </p>

          {/* 🔥 PDF Button */}
          <a
            href={Thesis2}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            📄 PDF 
          </a>

        </div>

      </div>

    </section>
  );
};

export default Projects;