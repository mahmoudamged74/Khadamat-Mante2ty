import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import {
  FaSearch,
  FaHeart,
  FaShare,
  FaStar,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./CarWash.module.css";

const CarWash = () => {
  const { t } = useTranslation("global");
  const [activeFilter, setActiveFilter] = useState("all");

  // Hero banners data (car wash specific)
  const heroBanners = [
    {
      id: 1,
      title: "CAR WASH SERVICES",
      discount: "30%",
      subtitle: "Professional cleaning",
      cta: "Book now!",
      image: "/public/assets/banner.png",
    },
    {
      id: 2,
      title: "PREMIUM DETAILING",
      discount: "25%",
      subtitle: "Complete car care",
      cta: "Discover!",
      image: "/public/assets/banner2.webp",
    },
    {
      id: 3,
      title: "EXPRESS SERVICE",
      discount: "20%",
      subtitle: "Quick & efficient",
      cta: "Learn more!",
      image: "/public/assets/banner3.webp",
    },
  ];

  // Filter categories (car wash specific)
  const filters = [
    { id: "all", name: t("all") || "الكل" },
    { id: "basic", name: t("basic_wash") || "غسيل أساسي" },
    { id: "premium", name: t("premium_wash") || "غسيل مميز" },
    { id: "detailing", name: t("detailing") || "تفصيل" },
    { id: "express", name: t("express_service") || "خدمة سريعة" },
  ];

  // Car wash services data
  const carWashServices = [
    {
      id: 1,
      name: "مغسلة السيارات الذكية",
      description: "خدمات غسيل وتفصيل السيارات بأحدث التقنيات",
      availability: "متاح اونلاين إلى 10:00 م",
      discount: "15%",
      rating: 4.8,
      image: "/public/assets/car-garage.jpg",
      logo: "/public/assets/car-garage.jpg",
      category: "basic",
    },
    {
      id: 2,
      name: "مركز تفصيل السيارات الفاخرة",
      description: "تفصيل احترافي للسيارات الفاخرة والكلاسيكية",
      availability: "متاح اونلاين إلى 9:00 م",
      discount: "20%",
      rating: 4.6,
      image: "/public/assets/car-garage.jpg",
      logo: "/public/assets/car-garage.jpg",
      category: "premium",
    },
    {
      id: 3,
      name: "خدمة الغسيل السريع",
      description: "غسيل سريع وفعال للسيارات في أقل وقت",
      availability: "متاح اونلاين إلى 11:00 م",
      discount: "12%",
      rating: 4.4,
      image: "/public/assets/car-garage.jpg",
      logo: "/public/assets/car-garage.jpg",
      category: "express",
    },
    {
      id: 4,
      name: "مغسلة السيارات البيئية",
      description: "خدمات غسيل صديقة للبيئة باستخدام مواد طبيعية",
      availability: "متاح اونلاين إلى 8:00 م",
      discount: "18%",
      rating: 4.7,
      image: "/public/assets/car-garage.jpg",
      logo: "/public/assets/car-garage.jpg",
      category: "detailing",
    },
    {
      id: 5,
      name: "مركز العناية بالسيارات",
      description: "خدمات شاملة للعناية بالسيارات والصيانة",
      availability: "متاح اونلاين إلى 9:30 م",
      discount: "22%",
      rating: 4.9,
      image: "/public/assets/car-garage.jpg",
      logo: "/public/assets/car-garage.jpg",
      category: "premium",
    },
    {
      id: 6,
      name: "مغسلة السيارات المتنقلة",
      description: "خدمة غسيل السيارات في مكانك",
      availability: "متاح اونلاين إلى 7:00 م",
      discount: "10%",
      rating: 4.3,
      image: "/public/assets/car-garage.jpg",
      logo: "/public/assets/car-garage.jpg",
      category: "express",
    },
  ];

  const filteredServices =
    activeFilter === "all"
      ? carWashServices
      : carWashServices.filter((service) => service.category === activeFilter);

  return (
    <div className={styles.carWashPage}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>
          {t("car_wash") || "مغسلة السيارات"}
        </h1>
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
                  alt={banner.title}
                  className={styles.bannerImage}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className={styles.customPagination}></div>
      </div>

      {/* Search and Filter Section */}
      <div className={styles.searchSection}>
        <div className="container">
          {/* Search Bar */}
          <div className={styles.searchBar}>
            <div className={styles.searchInput}>
              <FaSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder={t("search") || "بحث..."}
                className={styles.searchField}
              />
            </div>
          </div>

          {/* Filter Buttons */}
          <div className={styles.filterButtons}>
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`${styles.filterButton} ${
                  activeFilter === filter.id ? styles.active : ""
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Car Wash Services Grid */}
      <div className="container">
        <div className={styles.servicesGrid}>
          {filteredServices.map((service) => (
            <Link
              key={service.id}
              to={`/car-wash/${service.id}`}
              className={styles.serviceCard}
            >
              <div className={styles.cardImage}>
                <img src={service.image} alt={service.name} />
                <div className={styles.cardActions}>
                  <button className={styles.actionButton}>
                    <FaHeart />
                  </button>
                  <button className={styles.actionButton}>
                    <FaShare />
                  </button>
                </div>
                <div className={styles.serviceLogo}>
                  <img src={service.logo} alt={`${service.name} logo`} />
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.serviceName}>{service.name}</h3>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>
                <p className={styles.availability}>{service.availability}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.rating}>
                    <FaStar className={styles.starIcon} />
                    <span>{service.rating}</span>
                  </div>
                  <div className={styles.discount}>
                    {t("discount") || "خصم"} {service.discount}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarWash;
