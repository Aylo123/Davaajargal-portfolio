import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { t, i18n } = useTranslation();

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* ===== Menu ===== */}
        <ul className="nav-menu">

          <li className={menu === "home" ? "active" : ""}>
            <AnchorLink href="#home" onClick={() => setMenu("home")}>
              {t("nav.home")}
            </AnchorLink>
          </li>

          <li className={menu === "about" ? "active" : ""}>
            <AnchorLink href="#about" onClick={() => setMenu("about")}>
              {t("nav.experience")}
            </AnchorLink>
          </li>

          <li className={menu === "education" ? "active" : ""}>
            <AnchorLink href="#education" onClick={() => setMenu("education")}>
              {t("nav.education")}
            </AnchorLink>
          </li>

          {/* 🔥 Projects Added */}
          <li className={menu === "projects" ? "active" : ""}>
            <AnchorLink href="#projects" onClick={() => setMenu("projects")}>
              {t("nav.projects")}
            </AnchorLink>
          </li>

          <li className={menu === "personal" ? "active" : ""}>
            <AnchorLink href="#personal" onClick={() => setMenu("personal")}>
              {t("nav.about")}
            </AnchorLink>
          </li>

        </ul>

        {/* ===== Language Switch ===== */}
        <div className="nav-actions">
          <div className="lang-switch">
            <button
              className={i18n.language === "mn" ? "active-lang" : ""}
              onClick={() => changeLang("mn")}
            >
              MN
            </button>

            <button
              className={i18n.language === "en" ? "active-lang" : ""}
              onClick={() => changeLang("en")}
            >
              EN
            </button>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;