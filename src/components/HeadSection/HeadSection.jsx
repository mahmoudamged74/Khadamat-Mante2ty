import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./HeadSection.module.css";

const HeadSection = () => {
  const { t } = useTranslation("global");

  return (
    <section className={styles.headSection}>
      <div className="container">
        
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className={styles.textContent}>
              <h2 className={styles.title}>
                {t("head_section_title") || "صيدليات د.أسامة عبد الغني"}
              </h2>
              <p className={styles.description}>
                {t("head_section_description") ||
                  "نقدم أفضل الخدمات الصيدلية والاستشارات الطبية"}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className={styles.imageContent}>
              <div className={styles.logoContainer}>
                <img
                  src="/assets/2.svg"
                  alt={t("head_section_title") || "صيدليات د.أسامة عبد الغني"}
                  className={styles.logoImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadSection;
