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
import styles from "./Accessories.module.css";

const Accessories = () => {
  const { t } = useTranslation("global");
  const [activeFilter, setActiveFilter] = useState("all");

  // Hero banners data (accessories specific)
  const heroBanners = [
    {
      id: 1,
      title: "FASHION ACCESSORIES",
      discount: "30%",
      subtitle: "Trendy collection",
      cta: "Shop now!",
      image: "/public/assets/banner.png",
    },
    {
      id: 2,
      title: "ELECTRONIC ACCESSORIES",
      discount: "25%",
      subtitle: "Tech essentials",
      cta: "Explore!",
      image: "/public/assets/banner2.webp",
    },
    {
      id: 3,
      title: "HOME ACCESSORIES",
      discount: "20%",
      subtitle: "Decorate your space",
      cta: "Discover!",
      image: "/public/assets/banner3.webp",
    },
  ];

  // Filter categories (accessories specific)
  const filters = [
    { id: "all", name: t("all") || "الكل" },
    { id: "fashion", name: t("fashion_accessories") || "اكسسوارات الموضة" },
    {
      id: "electronics",
      name: t("electronic_accessories") || "اكسسوارات إلكترونية",
    },
    { id: "home", name: t("home_accessories") || "اكسسوارات منزلية" },
    { id: "jewelry", name: t("jewelry") || "مجوهرات" },
  ];

  // Accessories stores data
  const accessoriesStores = [
    {
      id: 1,
      name: "محل الذهب الأصيل",
      description: "أجود أنواع الذهب والمجوهرات الأصيلة",
      availability: "متاح اونلاين إلى 10:00 م",
      discount: "15%",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop&crop=center",
      logo: "/public/assets/acc.svg",
      category: "jewelry",
    },
    {
      id: 2,
      name: "اكسسوارات الموضة",
      description: "أحدث صيحات الموضة والإكسسوارات",
      availability: "متاح اونلاين إلى 9:00 م",
      discount: "20%",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop&crop=center",
      logo: "/public/assets/acc.svg",
      category: "fashion",
    },
    {
      id: 3,
      name: "تيك شوب",
      description: "اكسسوارات إلكترونية وقطع غيار",
      availability: "متاح اونلاين إلى 11:00 م",
      discount: "12%",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop&crop=center",
      logo: "/public/assets/acc.svg",
      category: "electronics",
    },
    {
      id: 4,
      name: "ديكورات المنزل",
      description: "اكسسوارات منزلية وتزيين",
      availability: "متاح اونلاين إلى 8:00 م",
      discount: "18%",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop&crop=center",
      logo: "/public/assets/acc.svg",
      category: "home",
    },
    {
      id: 5,
      name: "مجوهرات الفضة",
      description: "مجوهرات فضية أنيقة ومتنوعة",
      availability: "متاح اونلاين إلى 9:30 م",
      discount: "22%",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop&crop=center",
      logo: "/public/assets/acc.svg",
      category: "jewelry",
    },
    {
      id: 6,
      name: "اكسسوارات السيارات",
      description: "اكسسوارات وقطع غيار السيارات",
      availability: "متاح اونلاين إلى 7:00 م",
      discount: "10%",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop&crop=center",
      logo: "/public/assets/acc.svg",
      category: "electronics",
    },
  ];

  const filteredStores =
    activeFilter === "all"
      ? accessoriesStores
      : accessoriesStores.filter((store) => store.category === activeFilter);

  return (
    <div className={styles.accessoriesPage}>
      {/* Header */}
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>
          {t("accessories") || "الأكسسوارات"}
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

      {/* Accessories Stores Grid */}
      <div className="container">
        <div className={styles.storesGrid}>
          {filteredStores.map((store) => (
            <Link
              key={store.id}
              to={`/accessories/${store.id}`}
              className={styles.storeCard}
            >
              <div className={styles.cardImage}>
                <img src={store.image} alt={store.name} />
                <div className={styles.cardActions}>
                  <button className={styles.actionButton}>
                    <FaHeart />
                  </button>
                  <button className={styles.actionButton}>
                    <FaShare />
                  </button>
                </div>
                <div className={styles.storeLogo}>
                  <img src={store.logo} alt={`${store.name} logo`} />
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.storeName}>{store.name}</h3>
                <p className={styles.storeDescription}>{store.description}</p>
                <p className={styles.availability}>{store.availability}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.rating}>
                    <FaStar className={styles.starIcon} />
                    <span>{store.rating}</span>
                  </div>
                  <div className={styles.discount}>
                    {t("discount") || "خصم"} {store.discount}
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

export default Accessories;
