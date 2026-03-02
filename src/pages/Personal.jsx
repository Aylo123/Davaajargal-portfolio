import "./Personal.css";
import { useTranslation } from "react-i18next";

const Personal = () => {
  const { t } = useTranslation();

  return (
    <section className="personal-section" id="personal">
      <div className="personal-container">
        
        <h2 className="personal-title">
          {t("personal.title")}
        </h2>

        <p className="personal-intro">
          {t("personal.intro")}
        </p>

        <div className="personal-grid">

          {/* Soft Skills */}
          <div className="personal-card">
            <h3>{t("personal.softSkillsTitle")}</h3>
            <ul>
              <li>{t("personal.soft1")}</li>
              <li>{t("personal.soft2")}</li>
            </ul>
          </div>
                    {/* Interests */}
          <div className="personal-card">
            <h3>{t("personal.interestsTitle")}</h3>
            <ul>
              <li>{t("personal.interest1")}</li>
              <li>{t("personal.interest2")}</li>
              <li>{t("personal.interest3")}</li>
              <li>{t("personal.interest4")}</li>
            </ul>
          </div>

          {/* Strengths */}
          <div className="personal-card">
            <h3>{t("personal.strengthsTitle")}</h3>
            <ul>
              <li>{t("personal.strength1")}</li>
              <li>{t("personal.strength2")}</li>
              <li>{t("personal.strength3")}</li>
              <li>{t("personal.strength4")}</li>
            </ul>
          </div>



        </div>
      </div>
    </section>
  );
};

export default Personal;
