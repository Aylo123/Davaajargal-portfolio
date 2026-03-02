import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = ({ onContactClick }) => {
  const { t } = useTranslation();

  return (
    <footer className="footer-full">
      <div className="footer-wrapper">

        {/* Border running light */}
        <svg
          className="border-svg"
          viewBox="0 0 1000 360"
          preserveAspectRatio="none"
        >
          <rect
            x="5"
            y="5"
            width="990"
            height="350"
            rx="28"
            ry="28"
            pathLength="1"
          />
        </svg>

        <div className="purple-rain"></div>

        <div className="footer-content">
          <h2>
            {t("footer.titleLine1")} <br />
            <span className="highlight">
              {t("footer.titleLine2")}
            </span>
            <span className="dot">.</span>
          </h2>

          {/* ✅ POPUP нээдэг */}
        <button
          className="contact-btn" onClick={() => {
          console.log("FOOTER CLICK WORKS");
          onContactClick();}}>
          {t("footer.contactBtn")}
        </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
