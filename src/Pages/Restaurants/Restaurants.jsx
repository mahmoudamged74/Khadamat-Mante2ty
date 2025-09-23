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
import styles from "./Restaurants.module.css";

const Restaurants = () => {
  const { t } = useTranslation("global");
  const [activeFilter, setActiveFilter] = useState("all");

  // Hero banners data
  const heroBanners = [
    {
      id: 1,
      title: "SPECIAL FOOD MENU",
      discount: "50%",
      subtitle: "This weekend only",
      cta: "Order now!",
      image: "assets/banner.png",
    },
    {
      id: 2,
      title: "FRESH DAILY MEALS",
      discount: "30%",
      subtitle: "Limited time offer",
      cta: "Order now!",
      image: "assets/banner.png",
    },
    {
      id: 3,
      title: "PREMIUM QUALITY",
      discount: "25%",
      subtitle: "Best ingredients",
      cta: "Order now!",
      image: "assets/banner.png",
    },
  ];

  // Filter categories
  const filters = [
    { id: "all", name: t("all") || "الكل" },
    { id: "syrian", name: t("syrian_food") || "اكل سوري" },
    { id: "koshary", name: t("koshary") || "كتري" },
    { id: "pizza", name: t("pizza") || "بيتزا" },
    { id: "lasagna", name: t("lasagna") || "الازانيا" },
  ];

  // Restaurants data
  const restaurants = [
    {
      id: 1,
      name: "بيت الجمبري",
      description: "هذا النص هو مثال لنص يمكن أن يستبدل في تكبير",
      availability: "متاح اونلاين إلى 11:59 م",
      discount: "5%",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop&crop=center",
      logo: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=100&h=100&fit=crop&crop=center",
      category: "seafood",
    },
    {
      id: 2,
      name: "Heart Attack",
      description:
        "Heart attack is a fried chicken and a burger joint that invented Egypt's largest cheese fountain.",
      availability: "متاح اونلاين إلى 12:00 ص",
      discount: "15%",
      rating: 6.5,
      image:
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop&crop=center",
      logo: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=100&h=100&fit=crop&crop=center",
      category: "fast_food",
    },
    {
      id: 3,
      name: "مطعم الشام",
      description: "أفضل المأكولات الشامية الأصيلة",
      availability: "متاح اونلاين إلى 10:00 م",
      discount: "10%",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&crop=center",
      logo: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=100&h=100&fit=crop&crop=center",
      category: "syrian",
    },
    {
      id: 4,
      name: "بيتزا هت",
      description: "أشهى البيتزا الإيطالية الأصيلة",
      availability: "متاح اونلاين إلى 11:30 م",
      discount: "20%",
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop&crop=center",
      logo: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100&h=100&fit=crop&crop=center",
      category: "pizza",
    },
    {
      id: 5,
      name: "كتري التحرير",
      description: "أشهر كتري في مصر",
      availability: "متاح اونلاين إلى 9:00 م",
      discount: "8%",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop&crop=center",
      logo: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=100&h=100&fit=crop&crop=center",
      category: "koshary",
    },
    {
      id: 6,
      name: "مطعم الإيطالي",
      description: "أفضل المأكولات الإيطالية",
      availability: "متاح اونلاين إلى 11:00 م",
      discount: "12%",
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop&crop=center",
      logo: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=100&h=100&fit=crop&crop=center",
      category: "lasagna",
    },
  ];

  const filteredRestaurants =
    activeFilter === "all"
      ? restaurants
      : restaurants.filter(
          (restaurant) => restaurant.category === activeFilter
        );

  return (
    <div className={styles.restaurantsPage}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>{t("restaurants") || "المطاعم"}</h1>
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

      {/* Restaurants Grid */}
      <div className="container">
        <div className={styles.restaurantsGrid}>
          {filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.id}
              to={`/restaurants/${restaurant.id}`}
              className={styles.restaurantCard}
            >
              <div className={styles.cardImage}>
                <img src={restaurant.image} alt={restaurant.name} />
                <div className={styles.cardActions}>
                  <button className={styles.actionButton}>
                    <FaHeart />
                  </button>
                  <button className={styles.actionButton}>
                    <FaShare />
                  </button>
                </div>
                <div className={styles.restaurantLogo}>
                  <img src={restaurant.logo} alt={`${restaurant.name} logo`} />
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.restaurantName}>{restaurant.name}</h3>
                <p className={styles.restaurantDescription}>
                  {restaurant.description}
                </p>
                <p className={styles.availability}>{restaurant.availability}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.rating}>
                    <FaStar className={styles.starIcon} />
                    <span>{restaurant.rating}</span>
                  </div>
                  <div className={styles.discount}>
                    {t("discount") || "خصم"} {restaurant.discount}
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

export default Restaurants;
