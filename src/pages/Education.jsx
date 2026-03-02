import React from "react";
import "./Education.css";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="education">
      <div className="education-container">

        {/* Title */}
        <div className="education-header">
          <span className="education-icon">🎓</span>
          <h2>{t("education.title")}</h2>
          <p>{t("education.subtitle")}</p>
        </div>

        {/* Timeline */}
        <div className="education-timeline">

          {/* Item 1 */}
          <div className="education-item">
            <div className="education-dot"></div>

            <div className="education-card">
              <h3>{t("education.highschool.title")}</h3>
              <span className="education-date">
                {t("education.highschool.date")}
              </span>

              <p className="education-school">
                {t("education.highschool.school")}
              </p>

              <div className="education-meta">
                <span className="education-score">
                  🎓 {t("education.highschool.score")}
                </span>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="education-item">
            <div className="education-dot"></div>

            <div className="education-card">
              <h3>{t("education.university.title")}</h3>
              <span className="education-date">
                {t("education.university.date")}
              </span>

              <p className="education-school">
                {t("education.university.school")}
              </p>

              <div className="education-meta">
                <span className="education-score">
                  🎓 {t("education.university.score")}
                </span>
              </div>

              <ul className="education-focus">
                <li>{t("education.university.focus1")}</li>
                <li>{t("education.university.focus2")}</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
