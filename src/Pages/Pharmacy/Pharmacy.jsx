import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import {
  FaPills,
  FaPrescriptionBottle,
  FaStethoscope,
  FaUpload,
  FaTimes,
  FaPaperPlane,
} from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Pharmacy.module.css";

const Pharmacy = () => {
  const { t } = useTranslation("global");
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderText, setOrderText] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef(null);

  // Hero banners data (pharmacy specific)
  const heroBanners = [
    {
      id: 1,
      image: "/assets/Screenshot 2025-09-23 134018.png",
    },
    {
      id: 2,
      image: "/assets/banner3.jpg",
    },
    {
      id: 3,
      image: "/assets/banner.png",
    },
  ];

  // Handle file upload
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  // Remove uploaded file
  const removeFile = (index) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Handle order submission
  const handleOrderSubmit = () => {
    if (orderText.trim() || uploadedFiles.length > 0) {
      console.log("Order submitted:", {
        text: orderText,
        files: uploadedFiles,
      });
      setShowOrderModal(false);
      setOrderText("");
      setUploadedFiles([]);
      alert(t("order_submitted") || "تم إرسال الطلب بنجاح!");
    }
  };

  // Pharmacy services data (3 cards)
  const pharmacyServices = [
    {
      id: 1,
      title: t("upload_prescription") || "رفع الروشتة",
      description:
        t("upload_prescription_desc") || "ارفع صورة الروشتة واحصل على الأدوية",
      icon: <FaPrescriptionBottle />,
      image: "/assets/remix.jpg",
      type: "upload",
      color: "#184193",
    },
    {
      id: 2,
      title: t("pharmacy_sections") || "الأقسام والأسعار",
      description:
        t("pharmacy_sections_desc") || "تصفح جميع أقسام الأدوية والمستلزمات",
      icon: <FaPills />,
      image: "/assets/remix.jpg",
      type: "sections",
      link: "/pharmacy/1",
      color: "#28a745",
    },
    {
      id: 3,
      title: t("write_order") || "كتابة الطلب",
      description: t("write_order_desc") || "اكتب طلبك وسنقوم بتجهيزه لك",
      icon: <FaStethoscope />,
      image: "/assets/people.jpg",
      type: "order",
      color: "#dc3545",
    },
  ];

  return (
    <div className={styles.pharmacyPage}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>{t("pharmacy") || "الصيدلية"}</h1>
      </div>

      {/* Hero Banner Swiper */}
      <div className={styles.heroSection}>
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          dir="ltr"
          pagination={{
            clickable: true,
            el: `.${styles.customPagination}`,
            bulletClass: styles.customBullet,
            bulletActiveClass: styles.customBulletActive,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          className={styles.heroSwiper}
        >
          {heroBanners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className={styles.heroBanner}>
                <img
                  src={banner.image}
                  alt="Pharmacy Banner"
                  className={styles.bannerImage}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className={styles.customPagination}></div>
      </div>

      {/* Pharmacy Services Cards */}
      <div className="container">
        <div className={styles.servicesSection}>
          <h2 className={styles.sectionTitle}>
            {t("pharmacy_services") || "خدمات الصيدلية"}
          </h2>
          <div className={styles.servicesGrid}>
            {pharmacyServices.map((service) => (
              <div key={service.id} className={styles.serviceCard}>
                {service.type === "upload" ? (
                  <div className={styles.uploadCard}>
                    <div className={styles.cardImage}>
                      <img src={service.image} alt={service.title} />
                      <div className={styles.cardOverlay}>
                        <div
                          className={styles.serviceIcon}
                          style={{ backgroundColor: service.color }}
                        >
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.serviceTitle}>{service.title}</h3>
                      <p className={styles.serviceDescription}>
                        {service.description}
                      </p>
                      <div className={styles.uploadSection}>
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileUpload}
                          multiple
                          accept="image/*"
                          style={{ display: "none" }}
                        />
                        <button
                          className={styles.uploadButton}
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <FaUpload />
                          {t("upload_image") || "رفع صورة"}
                        </button>
                        {uploadedFiles.length > 0 && (
                          <div className={styles.uploadedFiles}>
                            {uploadedFiles.map((file, index) => (
                              <div key={index} className={styles.fileItem}>
                                <span>{file.name}</span>
                                <button
                                  className={styles.removeFile}
                                  onClick={() => removeFile(index)}
                                >
                                  <FaTimes />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : service.type === "sections" ? (
                  <Link to={service.link} className={styles.linkCard}>
                    <div className={styles.cardImage}>
                      <img src={service.image} alt={service.title} />
                      <div className={styles.cardOverlay}>
                        <div
                          className={styles.serviceIcon}
                          style={{ backgroundColor: service.color }}
                        >
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.serviceTitle}>{service.title}</h3>
                      <p className={styles.serviceDescription}>
                        {service.description}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div className={styles.orderCard}>
                    <div className={styles.cardImage}>
                      <img src={service.image} alt={service.title} />
                      <div className={styles.cardOverlay}>
                        <div
                          className={styles.serviceIcon}
                          style={{ backgroundColor: service.color }}
                        >
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.serviceTitle}>{service.title}</h3>
                      <p className={styles.serviceDescription}>
                        {service.description}
                      </p>
                      <div className={styles.orderSection}>
                        <button
                          className={styles.orderButton}
                          onClick={() => setShowOrderModal(true)}
                        >
                          <FaPaperPlane />
                          {t("write_order") || "كتابة الطلب"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Order Modal */}
      {showOrderModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h3>{t("write_order") || "كتابة الطلب"}</h3>
              <button
                className={styles.closeButton}
                onClick={() => setShowOrderModal(false)}
              >
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              <textarea
                value={orderText}
                onChange={(e) => setOrderText(e.target.value)}
                placeholder={t("order_placeholder") || "اكتب طلبك هنا..."}
                className={styles.orderTextarea}
                rows={5}
              />
            </div>
            <div className={styles.modalFooter}>
              <button
                className={styles.cancelButton}
                onClick={() => setShowOrderModal(false)}
              >
                {t("cancel") || "إلغاء"}
              </button>
              <button
                className={styles.submitButton}
                onClick={handleOrderSubmit}
                disabled={!orderText.trim()}
              >
                <FaPaperPlane />
                {t("send_order") || "إرسال الطلب"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pharmacy;
