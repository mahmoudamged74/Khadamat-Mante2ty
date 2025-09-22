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
import styles from "./LibraryBookDetail.module.css";

const LibraryBookDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation("global");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("نسخة ورقية");

  // Book data (in real app, this would come from API)
  const book = {
    id: parseInt(id),
    name: "مبادئ الفيزياء العامة",
    description:
      "كتاب شامل لمبادئ الفيزياء الأساسية، يغطي جميع المواضيع المهمة في الفيزياء العامة مع أمثلة تطبيقية وتمارين محلولة.",
    price: 200,
    originalPrice: 250,
    discount: "20%",
    image: "/public/assets/library.jpg",
    sizes: ["نسخة ورقية", "نسخة إلكترونية", "نسخة صوتية"],
    storeName: "مكتبة المعرفة العامة",
    storeLogo: "/public/assets/library.jpg",
    storeRating: 4.8,
    storeAddress: "شارع التحرير، وسط البلد",
    storeWorkingHours: "وقت العمل : 8 ص : 10 م",
    category: "كتب أكاديمية",
    ingredients: ["فيزياء عامة", "رياضيات", "ميكانيكا", "كهرباء"],
    preparationTime: "متوفر فوراً",
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
    console.log(`Added ${quantity} ${book.name} (${selectedSize}) to cart`);
  };

  return (
    <div className={styles.bookDetail}>
      {/* Header */}
      <div className={styles.header}>
        <Link to="/libraries/1" className={styles.backButton}>
          <FaArrowRight />
        </Link>
        <h1 className={styles.pageTitle}>
          {t("book_details") || "تفاصيل الكتاب"}
        </h1>
      </div>

      {/* Book Image */}
      <div className={styles.bookImageSection}>
        <div className={styles.bookImage}>
          <img src={book.image} alt={book.name} loading="lazy" />
        </div>
        <div className={styles.bookActions}>
          <button className={styles.actionButton}>
            <FaHeart />
          </button>
          <button className={styles.actionButton}>
            <FaShare />
          </button>
        </div>
      </div>

      {/* Book Info */}
      <div className={styles.bookInfo}>
        <div className={styles.storeInfo}>
          <div className={styles.storeLogo}>
            <img src={book.storeLogo} alt={book.storeName} loading="lazy" />
          </div>
          <div className={styles.storeDetails}>
            <h3 className={styles.storeName}>{book.storeName}</h3>
            <div className={styles.storeRating}>
              <FaStar className={styles.starIcon} />
              <span>{book.storeRating}</span>
            </div>
          </div>
        </div>

        <h2 className={styles.bookName}>{book.name}</h2>
        <p className={styles.bookDescription}>{book.description}</p>

        {/* Category */}
        <div className={styles.category}>
          <span className={styles.categoryLabel}>
            {t("category") || "الفئة"}:
          </span>
          <span className={styles.categoryValue}>{book.category}</span>
        </div>

        {/* Topics */}
        <div className={styles.topics}>
          <h4 className={styles.topicsTitle}>{t("topics") || "المواضيع"}:</h4>
          <div className={styles.topicsList}>
            {book.ingredients.map((topic, index) => (
              <span key={index} className={styles.topic}>
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className={styles.availability}>
          <FaClock className={styles.clockIcon} />
          <span>
            {t("availability") || "التوفر"}: {book.preparationTime}
          </span>
        </div>

        {/* Format Selection */}
        <div className={styles.formatSelection}>
          <h4 className={styles.formatTitle}>{t("format") || "الصيغة"}:</h4>
          <div className={styles.formatOptions}>
            {book.sizes.map((format) => (
              <button
                key={format}
                className={`${styles.formatButton} ${
                  selectedSize === format ? styles.active : ""
                }`}
                onClick={() => setSelectedSize(format)}
              >
                {format}
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
              {book.price} {t("currency") || "جنيه"}
            </span>
            <span className={styles.originalPrice}>
              {book.originalPrice} {t("currency") || "جنيه"}
            </span>
            <span className={styles.discount}>
              {book.discount} {t("discount") || "خصم"}
            </span>
          </div>
        </div>

        {/* Store Details */}
        <div className={styles.storeDetailsSection}>
          <div className={styles.storeDetail}>
            <FaMapMarkerAlt className={styles.detailIcon} />
            <span>{book.storeAddress}</span>
          </div>
          <div className={styles.storeDetail}>
            <FaClock className={styles.detailIcon} />
            <span>{book.storeWorkingHours}</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          className={styles.addToCartButton}
          onClick={handleAddToCart}
          disabled={!book.isAvailable}
        >
          {t("add_to_cart") || "اضف الى السلة"}
        </button>
      </div>
    </div>
  );
};

export default LibraryBookDetail;
