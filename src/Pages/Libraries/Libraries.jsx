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
import styles from "./Libraries.module.css";

const Libraries = () => {
  const { t } = useTranslation("global");
  const [activeFilter, setActiveFilter] = useState("all");

  // Hero banners data (libraries specific)
  const heroBanners = [
    {
      id: 1,
      title: "EDUCATIONAL BOOKS",
      discount: "30%",
      subtitle: "Knowledge collection",
      cta: "Explore now!",
      image: "/public/assets/banner.png",
    },
    {
      id: 2,
      title: "ACADEMIC RESOURCES",
      discount: "25%",
      subtitle: "Study materials",
      cta: "Discover!",
      image: "/public/assets/banner2.webp",
    },
    {
      id: 3,
      title: "DIGITAL LIBRARY",
      discount: "20%",
      subtitle: "Online access",
      cta: "Learn more!",
      image: "/public/assets/banner3.webp",
    },
  ];

  // Filter categories (libraries specific)
  const filters = [
    { id: "all", name: t("all") || "الكل" },
    { id: "academic", name: t("academic_books") || "كتب أكاديمية" },
    { id: "fiction", name: t("fiction_books") || "كتب روائية" },
    { id: "children", name: t("children_books") || "كتب الأطفال" },
    { id: "reference", name: t("reference_books") || "كتب مرجعية" },
  ];

  // Libraries data
  const libraries = [
    {
      id: 1,
      name: "مكتبة المعرفة العامة",
      description: "أكبر مكتبة في المنطقة مع آلاف الكتب والمراجع",
      availability: "متاح اونلاين إلى 10:00 م",
      discount: "15%",
      rating: 4.8,
      image: "/public/assets/library.jpg",
      logo: "/public/assets/library.jpg",
      category: "academic",
    },
    {
      id: 2,
      name: "مكتبة الأطفال الذكية",
      description: "مكتبة متخصصة في كتب الأطفال والتعليم المبكر",
      availability: "متاح اونلاين إلى 9:00 م",
      discount: "20%",
      rating: 4.6,
      image: "/public/assets/library.jpg",
      logo: "/public/assets/library.jpg",
      category: "children",
    },
    {
      id: 3,
      name: "مكتبة الأدب والثقافة",
      description: "مجموعة واسعة من الروايات والأدب العالمي",
      availability: "متاح اونلاين إلى 11:00 م",
      discount: "12%",
      rating: 4.4,
      image: "/public/assets/library.jpg",
      logo: "/public/assets/library.jpg",
      category: "fiction",
    },
    {
      id: 4,
      name: "مكتبة البحث العلمي",
      description: "مراجع علمية ومصادر بحثية متخصصة",
      availability: "متاح اونلاين إلى 8:00 م",
      discount: "18%",
      rating: 4.7,
      image: "/public/assets/library.jpg",
      logo: "/public/assets/library.jpg",
      category: "reference",
    },
    {
      id: 5,
      name: "مكتبة الجامعة المركزية",
      description: "مكتبة جامعية شاملة لجميع التخصصات",
      availability: "متاح اونلاين إلى 9:30 م",
      discount: "22%",
      rating: 4.9,
      image: "/public/assets/library.jpg",
      logo: "/public/assets/library.jpg",
      category: "academic",
    },
    {
      id: 6,
      name: "مكتبة التكنولوجيا الحديثة",
      description: "كتب تقنية وبرمجة وتطوير",
      availability: "متاح اونلاين إلى 7:00 م",
      discount: "10%",
      rating: 4.3,
      image: "/public/assets/library.jpg",
      logo: "/public/assets/library.jpg",
      category: "reference",
    },
  ];

  const filteredLibraries =
    activeFilter === "all"
      ? libraries
      : libraries.filter((library) => library.category === activeFilter);

  return (
    <div className={styles.librariesPage}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>{t("libraries") || "المكتبات"}</h1>
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

      {/* Libraries Grid */}
      <div className="container">
        <div className={styles.librariesGrid}>
          {filteredLibraries.map((library) => (
            <Link
              key={library.id}
              to={`/libraries/${library.id}`}
              className={styles.libraryCard}
            >
              <div className={styles.cardImage}>
                <img src={library.image} alt={library.name} />
                <div className={styles.cardActions}>
                  <button className={styles.actionButton}>
                    <FaHeart />
                  </button>
                  <button className={styles.actionButton}>
                    <FaShare />
                  </button>
                </div>
                <div className={styles.libraryLogo}>
                  <img src={library.logo} alt={`${library.name} logo`} />
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.libraryName}>{library.name}</h3>
                <p className={styles.libraryDescription}>
                  {library.description}
                </p>
                <p className={styles.availability}>{library.availability}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.rating}>
                    <FaStar className={styles.starIcon} />
                    <span>{library.rating}</span>
                  </div>
                  <div className={styles.discount}>
                    {t("discount") || "خصم"} {library.discount}
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

export default Libraries;
