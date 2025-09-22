import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaShieldAlt,
  FaClock,
  FaTruck,
  FaHeadset,
  FaAward,
  FaHeart,
} from "react-icons/fa";
import styles from "./FeaturesSection.module.css";

const FeaturesSection = () => {
  const { t } = useTranslation("global");

  // Features data
  const features = [
    {
      id: 1,
      icon: FaShieldAlt,
      title: t("secure_payment") || "دفع آمن",
      description:
        t("secure_payment_desc") ||
        "نضمن لك أمان كامل في جميع المعاملات المالية",
    },
    {
      id: 2,
      icon: FaClock,
      title: t("fast_delivery") || "توصيل سريع",
      description:
        t("fast_delivery_desc") ||
        "نوصل طلبك في أسرع وقت ممكن لجميع أنحاء المدينة",
    },
    {
      id: 3,
      icon: FaTruck,
      title: t("free_shipping") || "شحن مجاني",
      description:
        t("free_shipping_desc") || "شحن مجاني للطلبات التي تزيد عن 100 جنيه",
    },
    {
      id: 4,
      icon: FaHeadset,
      title: t("customer_support") || "دعم العملاء",
      description:
        t("customer_support_desc") || "فريق دعم متاح 24/7 لمساعدتك في أي وقت",
    },
    {
      id: 5,
      icon: FaAward,
      title: t("quality_guarantee") || "ضمان الجودة",
      description:
        t("quality_guarantee_desc") ||
        "نضمن لك أفضل جودة في جميع المنتجات والخدمات",
    },
    {
      id: 6,
      icon: FaHeart,
      title: t("customer_satisfaction") || "رضا العملاء",
      description:
        t("customer_satisfaction_desc") || "هدفنا الأول هو رضا عملائنا الكرام",
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.featuresLabel}>
            {t("features_label") || "المميزات"}
          </div>
          <h2 className={styles.title}>{t("our_features") || "مميزاتنا"}</h2>
          <p className={styles.subtitle}>
            {t("features_subtitle") ||
              "نقدم لك أفضل الخدمات والمميزات لتجربة تسوق مثالية"}
          </p>
        </div>

        {/* Features Grid */}
        <div className="row g-4">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className="col-lg-4 col-md-6">
                <div className={`${styles.featureCard} h-100`}>
                  <div className={styles.iconContainer}>
                    <IconComponent className={styles.featureIcon} />
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
