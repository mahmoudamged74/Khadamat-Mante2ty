import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import {
  FaHeart,
  FaShare,
  FaStar,
  FaClock,
  FaMapMarkerAlt,
  FaExclamationCircle,
  FaShoppingCart,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./CarWashDetail.module.css";

const CarWashDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation("global");
  const [activeTab, setActiveTab] = useState("services");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");

  // Car wash service data (in real app, this would come from API)
  const carWashService = {
    id: parseInt(id),
    name: "مغسلة السيارات الذكية",
    description: "خدمات غسيل وتفصيل السيارات بأحدث التقنيات والمعدات المتطورة",
    rating: 4.8,
    workingHours: "وقت العمل : 8 ص : 10 م",
    address: "شارع التحرير، وسط البلد",
    logo: "/assets/washing.jpg",
    heroImage: "/assets/washing.jpg",
    category: "basic",
  };

  // Service photos
  const photos = [
    {
      id: 1,
      image: "/assets/washing.jpg",
      title: "منطقة الغسيل الخارجي",
    },
    {
      id: 2,
      image: "/assets/washing.jpg",
      title: "منطقة التفصيل الداخلي",
    },
    {
      id: 3,
      image: "/assets/washing.jpg",
      title: "منطقة الصيانة السريعة",
    },
  ];

  // Service offers
  const offers = [
    {
      id: 1,
      title: "عرض الغسيل الشامل",
      description: "غسيل خارجي وداخلي بخصم 20%",
      discount: "20%",
      image: "/assets/washing.jpg",
      price: 150,
    },
    {
      id: 2,
      title: "عرض التفصيل المميز",
      description: "تفصيل كامل للسيارة بخصم 25%",
      discount: "25%",
      image: "/assets/washing.jpg",
      price: 300,
    },
  ];

  // Service packages
  const services = [
    {
      id: 1,
      name: "باقة الغسيل الأساسي",
      description: "غسيل خارجي شامل مع تنظيف الإطارات",
      image: "/assets/washing.jpg",
      price: 80,
      sizes: ["سيارة صغيرة", "سيارة متوسطة", "سيارة كبيرة"],
      storeName: "مغسلة السيارات الذكية",
    },
    {
      id: 2,
      name: "باقة التفصيل المتقدم",
      description: "تفصيل شامل للسيارة مع تلميع وتنظيف داخلي",
      image: "/assets/washing.jpg",
      price: 200,
      sizes: ["سيارة صغيرة", "سيارة متوسطة", "سيارة كبيرة"],
      storeName: "مغسلة السيارات الذكية",
    },
  ];

  // Service branches
  const branches = [
    {
      id: 1,
      name: "فرع المعادي",
      address: "شارع المعادي، المعادي",
      workingHours: "وقت العمل : 8 ص : 10م",
      rating: 4.7,
      image: "/assets/washing.jpg",
    },
    {
      id: 2,
      name: "فرع الزمالك",
      address: "شارع الزمالك، الزمالك",
      workingHours: "وقت العمل : 8 ص : 10م",
      rating: 4.9,
      image: "/assets/washing.jpg",
    },
  ];

  const tabs = [
    { id: "services", name: t("services") || "الخدمات" },
    { id: "photos", name: t("photos") || "الصور" },
    { id: "offers", name: t("offers") || "العروض" },
    { id: "branches", name: t("branches") || "الفروع" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "services":
        return (
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/car-wash-service/${service.id}`}
                className={styles.serviceCard}
              >
                <div className={styles.serviceActions}>
                  <button className={styles.actionButton}>
                    <FaHeart />
                  </button>
                  <button className={styles.actionButton}>
                    <FaShare />
                  </button>
                </div>
                <div className={styles.serviceImage}>
                <img src={service.image} alt={service.name} loading="lazy" />
                </div>
                <div className={styles.serviceInfo}>
                  <h4 className={styles.serviceName}>{service.name}</h4>
                  <p className={styles.storeName}>{service.storeName}</p>
                  <div className={styles.sizeOptions}>
                    {service.sizes.map((size) => (
                      <button
                        key={size}
                        className={`${styles.sizeButton} ${
                          selectedSize === size ? styles.active : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedSize(size);
                        }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <div className={styles.servicePrice}>
                    {service.price} {t("currency") || "جنيه"}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        );

      case "photos":
        return (
          <div className={styles.photosGrid}>
            {photos.map((photo) => (
              <div key={photo.id} className={styles.photoCard}>
                <img src={photo.image} alt={photo.title} loading="lazy" />
                <div className={styles.photoOverlay}>
                  <h4>{photo.title}</h4>
                </div>
              </div>
            ))}
          </div>
        );

      case "offers":
        return (
          <div className={styles.offersGrid}>
            {offers.map((offer) => (
              <div key={offer.id} className={styles.offerCard}>
                <div className={styles.offerActions}>
                  <button className={styles.actionButton}>
                    <FaHeart />
                  </button>
                  <button className={styles.actionButton}>
                    <FaShare />
                  </button>
                </div>
                <div className={styles.offerImage}>
                  <img src={offer.image} alt={offer.title} loading="lazy" />
                  <div className={styles.offerDiscount}>{offer.discount}</div>
                </div>
                <div className={styles.offerInfo}>
                  <h4 className={styles.offerName}>{offer.title}</h4>
                  <p className={styles.offerDescription}>{offer.description}</p>
                  <div className={styles.sizeOptions}>
                    <button className={`${styles.sizeButton} ${styles.active}`}>
                      سيارة صغيرة
                    </button>
                    <button className={styles.sizeButton}>سيارة متوسطة</button>
                    <button className={styles.sizeButton}>سيارة كبيرة</button>
                  </div>
                  <div className={styles.offerPrice}>
                    {offer.price} {t("currency") || "جنيه"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "branches":
        return (
          <div className={styles.branchesList}>
            {branches.map((branch) => (
              <div key={branch.id} className={styles.branchCard}>
                <div className={styles.branchInfo}>
                  <div className={styles.branchRating}>
                    <FaStar className={styles.starIcon} />
                    <span>{branch.rating}</span>
                  </div>
                  <h4 className={styles.branchName}>{branch.name}</h4>
                  <p className={styles.branchAddress}>{branch.address}</p>
                  <div className={styles.branchHours}>
                    <FaClock className={styles.clockIcon} />
                    <span>{branch.workingHours}</span>
                  </div>
                </div>
                <div className={styles.branchImage}>
                  <img src={branch.image} alt={branch.name} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.carWashDetail}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroImage}>
          <img
            src={carWashService.heroImage}
            alt={carWashService.name}
            loading="lazy"
          />
        </div>
        <div className={styles.heroOverlay}>
          <div className={styles.serviceInfo}>
            <div className={styles.serviceLogo}>
              <img
                src={carWashService.logo}
                alt={`${carWashService.name} logo`}
                loading="lazy"
              />
            </div>
            <h1 className={styles.serviceName}>{carWashService.name}</h1>
            <p className={styles.serviceDescription}>
              {carWashService.description}
            </p>
            <div className={styles.serviceRating}>
              <FaStar className={styles.starIcon} />
              <span>{carWashService.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="container">
        <div className={styles.serviceDetails}>
          <div className={styles.detailItem}>
            <FaClock className={styles.detailIcon} />
            <span>{carWashService.workingHours}</span>
          </div>
          <div className={styles.detailItem}>
            <FaMapMarkerAlt className={styles.detailIcon} />
            <span>{carWashService.address}</span>
          </div>
          <div className={styles.detailItem}>
            <FaExclamationCircle className={styles.detailIcon} />
            <span>{t("complaint") || "شكوة"}</span>
          </div>
          <div className={styles.detailItem}>
            <FaStar className={styles.detailIcon} />
            <span>{t("rating") || "تقيم"}</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className={styles.tabsContainer}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${
                activeTab === tab.id ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={styles.tabContent}>{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default CarWashDetail;
