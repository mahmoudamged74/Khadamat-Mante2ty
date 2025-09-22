import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation("global");

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          {/* Company Info & Logo */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className={styles.brandSection}>
              <Link to="/" className={styles.brandLink}>
                <img
                  src="/assets/Artboard 9.svg"
                  alt={t("company_name")}
                  className={styles.logo}
                />
              </Link>
              <p className={styles.description}>
                {t("footer_description") ||
                  "نحن نقدم أفضل الخدمات لجميع احتياجاتك اليومية في مكان واحد"}
              </p>

              {/* Social Media Icons */}
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialLink} aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="#" className={styles.socialLink} aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className={styles.socialLink}
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="#" className={styles.socialLink} aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-4">
            <div className={styles.linksSection}>
              <h6 className={styles.sectionTitle}>
                {t("quick_links") || "روابط سريعة"}
              </h6>
              <ul className={styles.linksList}>
                <li>
                  <Link to="/" className={styles.footerLink}>
                    {t("home")}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={styles.footerLink}>
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={styles.footerLink}>
                    {t("contact")}
                  </Link>
                </li>
                <li>
                  <Link to="/login" className={styles.footerLink}>
                    {t("login_button")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className={styles.linksSection}>
              <h6 className={styles.sectionTitle}>
                {t("sections") || "الأقسام"}
              </h6>
              <ul className={styles.linksList}>
                <li>
                  <Link to="/restaurants" className={styles.footerLink}>
                    {t("restaurants")}
                  </Link>
                </li>
                <li>
                  <Link to="/markets" className={styles.footerLink}>
                    {t("markets")}
                  </Link>
                </li>
                <li>
                  <Link to="/clinics" className={styles.footerLink}>
                    {t("clinics")}
                  </Link>
                </li>
                <li>
                  <Link to="/libraries" className={styles.footerLink}>
                    {t("libraries")}
                  </Link>
                </li>
                <li>
                  <Link to="/pharmacy" className={styles.footerLink}>
                    {t("pharmacy")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className={styles.contactSection}>
              <h6 className={styles.sectionTitle}>
                {t("contact_us") || "تواصل معنا"}
              </h6>
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <FaPhone className={styles.contactIcon} />
                  <span>+966 50 123 4567</span>
                </div>
                <div className={styles.contactItem}>
                  <FaEnvelope className={styles.contactIcon} />
                  <span>info@khadamat.com</span>
                </div>
                <div className={styles.contactItem}>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <span>
                    {t("address") || "الرياض، المملكة العربية السعودية"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className={styles.copyright}>
                © {new Date().getFullYear()} {t("company_name")}.{" "}
                {t("all_rights_reserved") || "جميع الحقوق محفوظة"}
              </p>
            </div>
            <div className="col-md-6">
              <div className={styles.bottomLinks}>
                <Link to="/privacy" className={styles.bottomLink}>
                  {t("privacy_policy") || "سياسة الخصوصية"}
                </Link>
                <Link to="/terms" className={styles.bottomLink}>
                  {t("terms_of_service") || "شروط الخدمة"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
