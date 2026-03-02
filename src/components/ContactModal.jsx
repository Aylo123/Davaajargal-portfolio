import "./ContactModal.css";
import Contact from "../pages/Contact"; 

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="contact-overlay" onClick={onClose}>
      <div
        className="contact-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <Contact />   {/* 👈 ЭНЭ Л ДУТУУ БАЙСАН */}

        <span className="close-btn" onClick={onClose}>
          ✕
        </span>
      </div>
    </div>
  );
};

export default ContactModal;