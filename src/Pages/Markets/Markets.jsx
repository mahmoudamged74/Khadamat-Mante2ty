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
import styles from "./Markets.module.css";

const Markets = () => {
  const { t } = useTranslation("global");
  const [activeFilter, setActiveFilter] = useState("all");

  // Hero banners data
  const heroBanners = [
    {
      id: 1,
      title: "SPECIAL MARKET OFFERS",
      discount: "50%",
      subtitle: "This weekend only",
      cta: "Shop now!",
      image: "/public/assets/banner.png",
    },
    {
      id: 2,
      title: "FRESH DAILY PRODUCTS",
      discount: "30%",
      subtitle: "Limited time offer",
      cta: "Shop now!",
      image: "/public/assets/banner2.webp",
    },
    {
      id: 3,
      title: "PREMIUM QUALITY",
      discount: "25%",
      subtitle: "Best products",
      cta: "Shop now!",
      image: "/public/assets/banner3.webp",
    },
  ];

  // Filter categories
  const filters = [
    { id: "all", name: t("all") || "الكل" },
    { id: "supermarket", name: t("supermarket") || "سوبر ماركت" },
    { id: "grocery", name: t("grocery") || "بقالة" },
    { id: "vegetables", name: t("vegetables") || "خضروات" },
    { id: "fruits", name: t("fruits") || "فواكه" },
  ];

  // Markets data
  const markets = [
    {
      id: 1,
      name: "سوبر ماركت الأهلي",
      description: "هذا النص هو مثال لنص يمكن أن يستبدل في تكبير",
      availability: "متاح اونلاين إلى 11:59 م",
      discount: "5%",
      rating: 4.5,
      image: "/public/assets/cart.webp",
      logo: "/public/assets/cart.webp",
      category: "supermarket",
    },
    {
      id: 2,
      name: "بقالة النور",
      description: "أفضل المنتجات الطازجة والأسعار المناسبة",
      availability: "متاح اونلاين إلى 12:00 ص",
      discount: "15%",
      rating: 4.8,
      image: "/public/assets/cart.webp",
      logo: "/public/assets/cart.webp",
      category: "grocery",
    },
    {
      id: 3,
      name: "خضروات الطازجة",
      description: "أفضل الخضروات الطازجة من المزرعة",
      availability: "متاح اونلاين إلى 10:00 م",
      discount: "10%",
      rating: 4.7,
      image: "/public/assets/cart.webp",
      logo: "/public/assets/cart.webp",
      category: "vegetables",
    },
    {
      id: 4,
      name: "فواكه الموسم",
      description: "أشهى الفواكه الموسمية الطازجة",
      availability: "متاح اونلاين إلى 11:30 م",
      discount: "20%",
      rating: 4.6,
      image: "/public/assets/cart.webp",
      logo: "/public/assets/cart.webp",
      category: "fruits",
    },
    {
      id: 5,
      name: "سوبر ماركت التوفير",
      description: "أفضل الأسعار والجودة العالية",
      availability: "متاح اونلاين إلى 9:00 م",
      discount: "8%",
      rating: 4.4,
      image: "/public/assets/cart.webp",
      logo: "/public/assets/cart.webp",
      category: "supermarket",
    },
    {
      id: 6,
      name: "بقالة العائلة",
      description: "كل ما تحتاجه العائلة في مكان واحد",
      availability: "متاح اونلاين إلى 11:00 م",
      discount: "12%",
      rating: 4.9,
      image: "/public/assets/cart.webp",
      logo: "/public/assets/cart.webp",
      category: "grocery",
    },
  ];

  const filteredMarkets =
    activeFilter === "all"
      ? markets
      : markets.filter((market) => market.category === activeFilter);

  return (
    <div className={styles.marketsPage}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>{t("markets") || "الأسواق"}</h1>
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

      {/* Markets Grid */}
      <div className="container">
        <div className={styles.marketsGrid}>
          {filteredMarkets.map((market) => (
            <Link
              key={market.id}
              to={`/markets/${market.id}`}
              className={styles.marketCard}
            >
              <div className={styles.cardImage}>
                <img src={market.image} alt={market.name} />
                <div className={styles.cardActions}>
                  <button className={styles.actionButton}>
                    <FaHeart />
                  </button>
                  <button className={styles.actionButton}>
                    <FaShare />
                  </button>
                </div>
                <div className={styles.marketLogo}>
                  <img src={market.logo} alt={`${market.name} logo`} />
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.marketName}>{market.name}</h3>
                <p className={styles.marketDescription}>{market.description}</p>
                <p className={styles.availability}>{market.availability}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.rating}>
                    <FaStar className={styles.starIcon} />
                    <span>{market.rating}</span>
                  </div>
                  <div className={styles.discount}>
                    {t("discount") || "خصم"} {market.discount}
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

export default Markets;
