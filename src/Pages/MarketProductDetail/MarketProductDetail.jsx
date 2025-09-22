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
import styles from "./MarketProductDetail.module.css";

const MarketProductDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation("global");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("كيلو");

  // Product data (in real app, this would come from API)
  const product = {
    id: parseInt(id),
    name: "طماطم طازجة",
    description:
      "طماطم طازجة من المزرعة، خالية من المبيدات الحشرية، غنية بالفيتامينات والمعادن.",
    price: 15,
    originalPrice: 20,
    discount: "25%",
    image: "/public/assets/banana.webp",
    sizes: ["كيلو", "نصف كيلو", "ربع كيلو"],
    storeName: "سوبر ماركت الأهلي",
    storeLogo: "/public/assets/cart.webp",
    storeRating: 4.5,
    storeAddress: "32 ش فيصل الجيزة",
    storeWorkingHours: "وقت العمل : 8 ص : 12 م",
    category: "خضروات",
    ingredients: ["طماطم طازجة", "فيتامين C", "ليكوبين", "بوتاسيوم"],
    preparationTime: "جاهز للاستخدام",
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
    console.log(`Added ${quantity} ${product.name} (${selectedSize}) to cart`);
  };

  return (
    <div className={styles.productDetail}>
      {/* Header */}
      <div className={styles.header}>
        <Link to="/markets/1" className={styles.backButton}>
          <FaArrowRight />
        </Link>
        <h1 className={styles.pageTitle}>
          {t("product_details") || "تفاصيل المنتج"}
        </h1>
      </div>

      {/* Product Image */}
      <div className={styles.productImageSection}>
        <div className={styles.productImage}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={styles.productActions}>
          <button className={styles.actionButton}>
            <FaHeart />
          </button>
          <button className={styles.actionButton}>
            <FaShare />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className={styles.productInfo}>
        <div className={styles.storeInfo}>
          <div className={styles.storeLogo}>
            <img src={product.storeLogo} alt={product.storeName} />
          </div>
          <div className={styles.storeDetails}>
            <h3 className={styles.storeName}>{product.storeName}</h3>
            <div className={styles.storeRating}>
              <FaStar className={styles.starIcon} />
              <span>{product.storeRating}</span>
            </div>
          </div>
        </div>

        <h2 className={styles.productName}>{product.name}</h2>
        <p className={styles.productDescription}>{product.description}</p>

        {/* Category */}
        <div className={styles.category}>
          <span className={styles.categoryLabel}>
            {t("category") || "الفئة"}:
          </span>
          <span className={styles.categoryValue}>{product.category}</span>
        </div>

        {/* Ingredients */}
        <div className={styles.ingredients}>
          <h4 className={styles.ingredientsTitle}>
            {t("ingredients") || "المكونات"}:
          </h4>
          <div className={styles.ingredientsList}>
            {product.ingredients.map((ingredient, index) => (
              <span key={index} className={styles.ingredient}>
                {ingredient}
              </span>
            ))}
          </div>
        </div>

        {/* Preparation Time */}
        <div className={styles.preparationTime}>
          <FaClock className={styles.clockIcon} />
          <span>
            {t("preparation_time") || "وقت التحضير"}: {product.preparationTime}
          </span>
        </div>

        {/* Size Selection */}
        <div className={styles.sizeSelection}>
          <h4 className={styles.sizeTitle}>{t("size") || "الحجم"}:</h4>
          <div className={styles.sizeOptions}>
            {product.sizes.map((size) => (
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
              {product.price} {t("currency") || "جنيه"}
            </span>
            <span className={styles.originalPrice}>
              {product.originalPrice} {t("currency") || "جنيه"}
            </span>
            <span className={styles.discount}>
              {product.discount} {t("discount") || "خصم"}
            </span>
          </div>
        </div>

        {/* Store Details */}
        <div className={styles.storeDetailsSection}>
          <div className={styles.storeDetail}>
            <FaMapMarkerAlt className={styles.detailIcon} />
            <span>{product.storeAddress}</span>
          </div>
          <div className={styles.storeDetail}>
            <FaClock className={styles.detailIcon} />
            <span>{product.storeWorkingHours}</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          className={styles.addToCartButton}
          onClick={handleAddToCart}
          disabled={!product.isAvailable}
        >
          {t("add_to_cart") || "اضف الى السلة"}
        </button>
      </div>
    </div>
  );
};

export default MarketProductDetail;
