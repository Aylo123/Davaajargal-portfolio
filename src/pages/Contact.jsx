import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import "./Contact.css";


const Contact = () => {
  console.log("CONTACT COMPONENT RENDERED");
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); 
  // null | "success" | "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("FORM SUBMIT TRIGGERED");

    if (!formRef.current) return;

    try {
      setLoading(true);
      setResult(null);

      await emailjs.sendForm(
        "service_ds1ny9f",
        "template_2xdakh8",
        formRef.current,
        "FdnQHhyXfbtbKNdDj"
      );

      setResult("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EMAIL ERROR:", err);
      setResult("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <h2>{t("contact.title")}</h2>

        {result === "success" && (
          <p className="success-text">{t("contact.success")}</p>
        )}

        {result === "error" && (
          <p className="error-text">{t("contact.error")}</p>
        )}

        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="contact-row">
            <input
              type="text"
              name="name"
              placeholder={t("contact.namePlaceholder")}
              required
            />

            <input
              type="email"
              name="email"
              placeholder={t("contact.emailPlaceholder")}
              required
            />
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder={t("contact.messagePlaceholder")}
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? t("contact.sending") : t("contact.sendBtn")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;