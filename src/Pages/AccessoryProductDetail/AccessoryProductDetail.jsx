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
import styles from "./AccessoryProductDetail.module.css";

const AccessoryProductDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation("global");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("18");

  // Product data (in real app, this would come from API)
  const product = {
    id: parseInt(id),
    name: "خاتم ذهب عيار 18",
    description:
      "خاتم ذهب أصفر عيار 18 مع فص من الماس الأصلي، مصنوع يدوياً بأعلى معايير الجودة والأصالة.",
    price: 2500,
    originalPrice: 3200,
    discount: "22%",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop&crop=center",
    sizes: ["16", "17", "18", "19"],
    storeName: "محل الذهب الأصيل",
    storeLogo: "/public/assets/acc.svg",
    storeRating: 4.8,
    storeAddress: "شارع التحرير، وسط البلد",
    storeWorkingHours: "وقت العمل : 9 ص : 10 م",
    category: "مجوهرات ذهبية",
    ingredients: ["ذهب عيار 18", "ماس أصلي", "فضة", "نحاس"],
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
        <Link to="/accessories/1" className={styles.backButton}>
          <FaArrowRight />
        </Link>
        <h1 className={styles.pageTitle}>
          {t("product_details") || "تفاصيل المنتج"}
        </h1>
      </div>

      {/* Product Image */}
      <div className={styles.productImageSection}>
        <div className={styles.productImage}>
          <img src={product.image} alt={product.name} loading="lazy" />
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
            <img src={product.storeLogo} alt={product.storeName} loading="lazy" />
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

export default AccessoryProductDetail;
