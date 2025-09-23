import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import {
  FaChevronLeft,
  FaChevronRight,
  FaShoppingCart,
  FaEye,
  FaHeart,
} from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./OffersSection.module.css";

const OffersSection = () => {
  const { t } = useTranslation("global");

  // Offers data
  const offers = [
    {
      id: 1,
      name: "Shelcal 500 Tablet",
      category: t("accessories"),
      originalPrice: 80.0,
      discountedPrice: 66.0,
      discount: "10%",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&crop=center",
      link: "/product/shelcal",
    },
    {
      id: 2,
      name: "Supradyn Daily",
      category: t("accessories"),
      originalPrice: 15.0,
      discountedPrice: 12.0,
      discount: "10%",
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop&crop=center",
      link: "/product/supradyn",
    },
    {
      id: 3,
      name: "Accu-Chek Tablet",
      category: t("pharma_product") || "منتج صيدلي",
      originalPrice: 20.0,
      discountedPrice: 34.0,
      discount: "10%",
      image:
        "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop&crop=center",
      link: "/product/accucheck",
    },
    {
      id: 4,
      name: "Curaskin Lipgel",
      category: t("skin_product") || "منتج للبشرة",
      originalPrice: 12.0,
      discountedPrice: 8.5,
      discount: "10%",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop&crop=center",
      link: "/product/curaskin",
    },
    {
      id: 5,
      name: "Vitamin D3",
      category: t("accessories"),
      originalPrice: 25.0,
      discountedPrice: 20.0,
      discount: "20%",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&crop=center",
      link: "/product/vitamin-d3",
    },
    {
      id: 6,
      name: "Omega 3",
      category: t("accessories"),
      originalPrice: 35.0,
      discountedPrice: 28.0,
      discount: "20%",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop&crop=center",
      link: "/product/omega-3",
    },
  ];

  return (
    <section className={styles.offersSection}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.offerLabel}>
            {t("offers_label") || "العروض"}
          </div>
          <h2 className={styles.title}>
            {t("feature_offers") || "أفضل العروض"}
          </h2>
        </div>

        {/* Offers Swiper */}
        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            dir="ltr"
            navigation={{
              nextEl: `.${styles.swiperButtonNext}`,
              prevEl: `.${styles.swiperButtonPrev}`,
            }}
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
            {offers.map((offer) => (
              <SwiperSlide key={offer.id}>
                <div className={styles.offerCard}>
                  {/* Discount Badge */}
                  <div className={styles.discountBadge}>
                    {offer.discount} {t("off") || "تخفيض"}
                  </div>

                  {/* Product Image */}
                  <div className={styles.cardImage}>
                    <img
                      src={offer.image}
                      alt={offer.name}
                      className={styles.offerImage}
                      onError={(e) => {
                        e.target.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRjhGOUZBIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iNzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2Qzc1N0QiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCI+SW1hZ2UgUGxhY2Vob2xkZXI8L3RleHQ+Cjwvc3ZnPgo=";
                      }}
                    />
                  </div>

                  {/* Action Icons */}
                  <div className={styles.actionIcons}>
                    <button
                      className={styles.actionIcon}
                      title={t("add_to_cart") || "أضف للسلة"}
                    >
                      <FaShoppingCart />
                    </button>
                    <button
                      className={styles.actionIcon}
                      title={t("view") || "عرض"}
                    >
                      <FaEye />
                    </button>
                    <button
                      className={styles.actionIcon}
                      title={t("add_to_wishlist") || "أضف للمفضلة"}
                    >
                      <FaHeart />
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className={styles.cardContent}>
                    <div className={styles.category}>{offer.category}</div>
                    <h3 className={styles.offerName}>{offer.name}</h3>
                    <div className={styles.pricing}>
                      <span className={styles.originalPrice}>
                        ${offer.originalPrice.toFixed(2)}
                      </span>
                      <span className={styles.discountedPrice}>
                        ${offer.discountedPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
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

        {/* Custom Pagination */}
        <div className={styles.customPagination}></div>
      </div>
    </section>
  );
};

export default OffersSection;
