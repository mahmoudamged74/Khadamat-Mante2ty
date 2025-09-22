import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import styles from "./CategoriesSection.module.css";
const CategoriesSection = () => {
  const { t } = useTranslation("global");

  // Categories data
  const categories = [
    {
      id: 1,
      name: t("restaurants"),
      image: "/assets/ceiling.webp",
      link: "/restaurants",
    },
    {
      id: 2,
      name: t("markets"),
      image: "/assets/cart.webp",
      link: "/markets",
    },
    {
      id: 3,
      name: t("clinics"),
      image: "/assets/people.webp",
      link: "/clinics",
    },
    {
      id: 4,
      name: t("libraries"),
      image: "/assets/library.webp",
      link: "/libraries",
    },
    {
      id: 5,
      name: t("accessories"),
      image: "/assets/chain.webp",
      link: "/accessories",
    },
    {
      id: 6,
      name: t("car_wash"),
      image: "/assets/car-garage.webp",
      link: "/car-wash",
    },
  ];

  return (
    <section className={styles.categoriesSection}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.categoryLabel}>
            {t("categories_label") || "الأقسام"}
          </div>
          <h2 className={styles.title}>
            {t("top_categories") || "أفضل الأقسام"}
          </h2>
        </div>

        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            dir="ltr"
            navigation={{
              nextEl: `.${styles.swiperButtonNext}`,
              prevEl: `.${styles.swiperButtonPrev}`,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            className={styles.swiper}
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <Link to={category.link} className={styles.categoryCard}>
                  <div className={styles.cardImage}>
                    <img
                      src={category.image}
                      loading="lazy"
                      alt={category.name}
                      className={styles.categoryImage}
                      onError={(e) => {
                        e.target.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRjhGOUZBIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iNzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2Qzc1N0QiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCI+SW1hZ2UgUGxhY2Vob2xkZXI8L3RleHQ+Cjwvc3ZnPgo=";
                      }}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.categoryName}>{category.name}</h3>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            className={`${styles.swiperButtonPrev} ${styles.swiperButton}`}
          >
            <FaChevronLeft />
          </button>
          <button
            className={`${styles.swiperButtonNext} ${styles.swiperButton}`}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
