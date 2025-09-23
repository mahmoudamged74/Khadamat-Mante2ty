import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { t, i18n } = useTranslation("global");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.navbar}`}>
      <div className="container">
        {/* Brand/Logo */}
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <img
            src="/assets/Artboard 9.svg"
            alt={t("company_name")}
            height="40"
            className="me-2"
          />
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Home */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                {t("home")}
              </Link>
            </li>

            {/* Sections Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {t("sections")}
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link style={{ textAlign: i18n.language === "ar" ? "right" : "left" }} className="dropdown-item" to="/restaurants">
                    {t("restaurants")}
                  </Link>
                </li>
                <li>
                  <Link style={{ textAlign: i18n.language === "ar" ? "right" : "left" }} className="dropdown-item" to="/markets">
                    {t("markets")}
                  </Link>
                </li>
                <li>
                  <Link style={{ textAlign: i18n.language === "ar" ? "right" : "left" }} className="dropdown-item" to="/clinics">
                    {t("clinics")}
                  </Link>
                </li>
                <li>
                  <Link style={{ textAlign: i18n.language === "ar" ? "right" : "left" }} className="dropdown-item" to="/libraries">
                    {t("libraries")}
                  </Link>
                </li>
                <li>
                  <Link style={{ textAlign: i18n.language === "ar" ? "right" : "left" }} className="dropdown-item" to="/accessories">
                    {t("accessories")}
                  </Link>
                </li>
                <li>
                  <Link style={{ textAlign: i18n.language === "ar" ? "right" : "left" }} className="dropdown-item" to="/car-wash">
                    {t("car_wash")}
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link style={{ textAlign: i18n.language === "ar" ? "right" : "left" }} className="dropdown-item" to="/pharmacy">
                    {t("pharmacy")}
                  </Link>
                </li>
              </ul>
            </li>

            {/* About Us */}
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {t("about")}
              </Link>
            </li>

            {/* Contact Us */}
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                {t("contact")}
              </Link>
            </li>
          </ul>

          {/* Right Side Items */}
          <div className="d-flex align-items-center gap-3">
            {/* Language Switcher */}
            <div className="btn-group" role="group">
              <button
                type="button"
                className={`btn ${
                  i18n.language === "ar" ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => changeLanguage("ar")}
                title={t("arabic")}
                style={{
                  backgroundColor:
                    i18n.language === "ar"
                      ? "var(--primary-color)"
                      : "transparent",
                  borderColor: "var(--primary-color)",
                  color:
                    i18n.language === "ar" ? "white" : "var(--primary-color)",
                }}
              >
                ع
              </button>
              <button
                type="button"
                className={`btn ${
                  i18n.language === "en" ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => changeLanguage("en")}
                title={t("english")}
                style={{
                  backgroundColor:
                    i18n.language === "en"
                      ? "var(--primary-color)"
                      : "transparent",
                  borderColor: "var(--primary-color)",
                  color:
                    i18n.language === "en" ? "white" : "var(--primary-color)",
                }}
              >
                EN
              </button>
            </div>

            {/* Login Button */}
            <Link to="/login" className="btn btn-outline-primary">
              {t("login_button")}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
