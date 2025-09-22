import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaArrowUp } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const { t } = useTranslation("global");

  // Sample data - يمكن استبدالها ببيانات حقيقية
  const heroSlides = [
    {
      id: 1,
      title: t("hero_title_1") || "اشترِ أجهزة الاستنشاق عبر الإنترنت الآن!",
      description:
        t("hero_description_1") ||
        "نحن نقدم أفضل الخدمات لجميع احتياجاتك اليومية في مكان واحد",
      image: "/public/assets/cart.webp",
      discount: "50%",
      discountText:
        t("hero_discount") || "احصل على خصم يصل إلى 50% على أول زيارة",
    },
    {
      id: 2,
      title: t("hero_title_2") || "أفضل المطاعم في منطقتك",
      description:
        t("hero_description_2") || "اكتشف مجموعة متنوعة من المطاعم الشهية",
      image: "/public/assets/ceiling.webp",
      discount: "30%",
      discountText: t("hero_discount_2") || "خصم خاص على الطلبات الأولى",
    },
    {
      id: 3,
      title: t("hero_title_3") || "خدمات طبية موثوقة",
      description:
        t("hero_description_3") ||
        "احصل على أفضل الخدمات الطبية من أطباء متخصصين",
      image: "/public/assets/people.webp",
      discount: "25%",
      discountText: t("hero_discount_3") || "استشارة طبية مجانية",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={styles.heroSection}>
      <div className="container-fluid">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={false}
          pagination={{
            clickable: true,
            el: `.${styles.customPagination}`,
            bulletClass: styles.customBullet,
            bulletActiveClass: styles.customBulletActive,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          dir="ltr"
          className={styles.swiper}
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={styles.slide}>
                <div className="row align-items-center min-vh-100">
                  {/* Content Side */}

                  {/* Image Side */}
                  <div className="col-lg-6 col-md-6">
                    <div className={styles.imageSide}>
                      {/* Main Image */}
                      <div className={styles.imageContainer}>
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className={styles.heroImage}
                          onError={(e) => {
                            e.target.src =
                              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjhGOUZBIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNkM3NTdEIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiPkltYWdlIFBsYWNlaG9sZGVyPC90ZXh0Pgo8L3N2Zz4K";
                          }}
                        />
                      </div>

                      {/* Decorative Clouds */}
                      <div className={styles.imageClouds}>
                        <div className={styles.cloud4}></div>
                        <div className={styles.cloud5}></div>
                        <div className={styles.cloud6}></div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className={styles.contentSide}>
                      {/* Welcome Badge */}
                      <div className={styles.welcomeBadge}>
                        {t("welcome_to") || "مرحباً بك في"}
                      </div>

                      {/* Main Title */}
                      <h1 className={styles.mainTitle}>{slide.title}</h1>

                      {/* Description */}
                      <p className={styles.description}>{slide.description}</p>

                      {/* Action Buttons */}
                      <div className={styles.actionButtons}>
                        <Link to="/services" className={styles.primaryButton}>
                          {t("buy_now")}
                        </Link>
                        <Link to="/about" className={styles.secondaryButton}>
                          {t("view_more")}
                        </Link>
                      </div>

                      {/* Decorative Clouds */}
                      <div className={styles.decorativeClouds}>
                        <div className={styles.cloud1}></div>
                        <div className={styles.cloud2}></div>
                        <div className={styles.cloud3}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className={styles.customPagination}></div>

        {/* Scroll to Top Button */}
        <button className={styles.scrollToTop} onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
