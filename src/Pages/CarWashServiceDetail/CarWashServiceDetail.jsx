import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaHeart,
  FaShare,
  FaMinus,
  FaPlus,
  FaArrowRight,
  FaStar,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";
import styles from "./CarWashServiceDetail.module.css";

const CarWashServiceDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation("global");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("سيارة صغيرة");

  // Service data (in real app, this would come from API)
  const service = {
    id: parseInt(id),
    name: "باقة الغسيل الأساسي",
    description:
      "خدمة غسيل خارجي شامل للسيارة مع تنظيف الإطارات والزجاج، تستخدم مواد تنظيف عالية الجودة ومعدات متطورة.",
    price: 80,
    originalPrice: 100,
    discount: "20%",
    image: "assets/washing.jpg",
    sizes: ["سيارة صغيرة", "سيارة متوسطة", "سيارة كبيرة"],
    storeName: "مغسلة السيارات الذكية",
    storeLogo: "assets/washing.jpg",
    storeRating: 4.8,
    storeAddress: "شارع التحرير، وسط البلد",
    storeWorkingHours: "وقت العمل : 8 ص : 10 م",
    category: "خدمات غسيل السيارات",
    ingredients: ["غسيل خارجي", "تنظيف الإطارات", "تنظيف الزجاج", "تلميع"],
    preparationTime: "30-45 دقيقة",
    isAvailable: true,
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Added ${quantity} ${service.name} (${selectedSize}) to cart`);
  };

  return (
    <div className={styles.serviceDetail}>
      {/* Header */}
      <div className={styles.header}>
        <Link to="/car-wash/1" className={styles.backButton}>
          <FaArrowRight />
        </Link>
        <h1 className={styles.pageTitle}>
          {t("service_details") || "تفاصيل الخدمة"}
        </h1>
      </div>

      {/* Service Image */}
      <div className={styles.serviceImageSection}>
        <div className={styles.serviceImage}>
          <img src={service.image} alt={service.name} loading="lazy" />
        </div>
        <div className={styles.serviceActions}>
          <button className={styles.actionButton}>
            <FaHeart />
          </button>
          <button className={styles.actionButton}>
            <FaShare />
          </button>
        </div>
      </div>

      {/* Service Info */}
      <div className={styles.serviceInfo}>
        <div className={styles.storeInfo}>
          <div className={styles.storeLogo}>
            <img
              src={service.storeLogo}
              alt={service.storeName}
              loading="lazy"
            />
          </div>
          <div className={styles.storeDetails}>
            <h3 className={styles.storeName}>{service.storeName}</h3>
            <div className={styles.storeRating}>
              <FaStar className={styles.starIcon} />
              <span>{service.storeRating}</span>
            </div>
          </div>
        </div>

        <h2 className={styles.serviceName}>{service.name}</h2>
        <p className={styles.serviceDescription}>{service.description}</p>

        {/* Category */}
        <div className={styles.category}>
          <span className={styles.categoryLabel}>
            {t("category") || "الفئة"}:
          </span>
          <span className={styles.categoryValue}>{service.category}</span>
        </div>

        {/* Service Features */}
        <div className={styles.features}>
          <h4 className={styles.featuresTitle}>
            {t("service_features") || "مميزات الخدمة"}:
          </h4>
          <div className={styles.featuresList}>
            {service.ingredients.map((feature, index) => (
              <span key={index} className={styles.feature}>
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div className={styles.duration}>
          <FaClock className={styles.clockIcon} />
          <span>
            {t("duration") || "مدة الخدمة"}: {service.preparationTime}
          </span>
        </div>

        {/* Vehicle Size Selection */}
        <div className={styles.sizeSelection}>
          <h4 className={styles.sizeTitle}>
            {t("vehicle_size") || "حجم السيارة"}:
          </h4>
          <div className={styles.sizeOptions}>
            {service.sizes.map((size) => (
              <button
                key={size}
                className={`${styles.sizeButton} ${
                  selectedSize === size ? styles.active : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selection */}
        <div className={styles.quantitySelection}>
          <h4 className={styles.quantityTitle}>{t("quantity") || "الكمية"}:</h4>
          <div className={styles.quantityControls}>
            <button
              className={styles.quantityButton}
              onClick={() => handleQuantityChange(-1)}
            >
              <FaMinus />
            </button>
            <span className={styles.quantityValue}>{quantity}</span>
            <button
              className={styles.quantityButton}
              onClick={() => handleQuantityChange(1)}
            >
              <FaPlus />
            </button>
          </div>
        </div>

        {/* Price */}
        <div className={styles.priceSection}>
          <div className={styles.priceInfo}>
            <span className={styles.currentPrice}>
              {service.price} {t("currency") || "جنيه"}
            </span>
            <span className={styles.originalPrice}>
              {service.originalPrice} {t("currency") || "جنيه"}
            </span>
            <span className={styles.discount}>
              {service.discount} {t("discount") || "خصم"}
            </span>
          </div>
        </div>

        {/* Store Details */}
        <div className={styles.storeDetailsSection}>
          <div className={styles.storeDetail}>
            <FaMapMarkerAlt className={styles.detailIcon} />
            <span>{service.storeAddress}</span>
          </div>
          <div className={styles.storeDetail}>
            <FaClock className={styles.detailIcon} />
            <span>{service.storeWorkingHours}</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          className={styles.addToCartButton}
          onClick={handleAddToCart}
          disabled={!service.isAvailable}
        >
          {t("add_to_cart") || "اضف الى السلة"}
        </button>
      </div>
    </div>
  );
};

export default CarWashServiceDetail;
