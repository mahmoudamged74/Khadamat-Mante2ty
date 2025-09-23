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
  FaPills,
  FaPrescriptionBottle,
  FaStethoscope,
} from "react-icons/fa";
import styles from "./PharmacyProductDetail.module.css";

const PharmacyProductDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation("global");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("10 حبة");
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderText, setOrderText] = useState("");

  // Medicine data (in real app, this would come from API)
  const medicine = {
    id: parseInt(id),
    name: "باراسيتامول 500 مجم",
    description:
      "مسكن للآلام وخافض للحرارة، يستخدم لتخفيف الصداع والحمى والآلام الخفيفة إلى المتوسطة.",
    price: 15,
    originalPrice: 20,
    discount: "25%",
    image: "/assets/remix.jpg",
    sizes: ["10 حبة", "20 حبة", "30 حبة"],
    storeName: "صيدلية د.أسامة عبد الغني",
    storeLogo: "/assets/Artboard 9.svg",
    storeRating: 4.8,
    storeAddress: "شارع التحرير، وسط البلد",
    storeWorkingHours: "وقت العمل : 8 ص : 10 م",
    category: "أدوية بوصفة",
    ingredients: ["باراسيتامول 500 مجم", "نشا الذرة", "ستيرات المغنيسيوم"],
    preparationTime: "متوفر فوراً",
    isAvailable: true,
    prescriptionRequired: true,
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Added ${quantity} ${medicine.name} (${selectedSize}) to cart`);
  };

  const handleOrderSubmit = () => {
    if (orderText.trim()) {
      console.log("Order submitted:", orderText);
      setShowOrderModal(false);
      setOrderText("");
      // Show success message
      alert(t("order_submitted") || "تم إرسال الطلب بنجاح!");
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "أدوية بوصفة":
        return <FaPrescriptionBottle />;
      case "مكملات غذائية":
        return <FaStethoscope />;
      default:
        return <FaPills />;
    }
  };

  return (
    <div className={styles.medicineDetail}>
      {/* Header */}
      <div className={styles.header}>
        <div className="container">
          <Link to="/pharmacy/1" className={styles.backButton}>
            <FaArrowRight />
          </Link>
          <h1 className={styles.pageTitle}>
            {t("medicine_details") || "تفاصيل الدواء"}
          </h1>
        </div>
      </div>

      <div className="container">
        {/* Medicine Image */}
        <div className={styles.medicineImageSection}>
          <div className={styles.medicineImage}>
            <img src={medicine.image} alt={medicine.name} loading="lazy" />
          </div>
          <div className={styles.medicineActions}>
            <button className={styles.actionButton}>
              <FaHeart />
            </button>
            <button className={styles.actionButton}>
              <FaShare />
            </button>
          </div>
        </div>

        {/* Medicine Info */}
        <div className={styles.medicineInfo}>
          <div className={styles.storeInfo}>
            <div className={styles.storeLogo}>
              <img
                src={medicine.storeLogo}
                alt={medicine.storeName}
                loading="lazy"
              />
            </div>
            <div className={styles.storeDetails}>
              <h3 className={styles.storeName}>{medicine.storeName}</h3>
              <div className={styles.storeRating}>
                <FaStar className={styles.starIcon} />
                <span>{medicine.storeRating}</span>
              </div>
            </div>
          </div>

          <h2 className={styles.medicineName}>{medicine.name}</h2>
          <p className={styles.medicineDescription}>{medicine.description}</p>

          <div className={styles.medicineCategory}>
            <span className={styles.categoryIcon}>
              {getCategoryIcon(medicine.category)}
            </span>
            <span>{medicine.category}</span>
          </div>

          <div className={styles.medicinePrice}>
            <span className={styles.currentPrice}>
              {medicine.price} {t("currency") || "جنيه"}
            </span>
            {medicine.originalPrice && (
              <span className={styles.originalPrice}>
                {medicine.originalPrice} {t("currency") || "جنيه"}
              </span>
            )}
            {medicine.discount && (
              <span className={styles.discount}>{medicine.discount}</span>
            )}
          </div>

          <div className={styles.medicineSizes}>
            <h4>{t("available_sizes") || "الأحجام المتاحة"}:</h4>
            <div className={styles.sizeButtons}>
              {medicine.sizes.map((size, index) => (
                <button
                  key={index}
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

          <div className={styles.quantitySelector}>
            <h4>{t("quantity") || "الكمية"}:</h4>
            <div className={styles.quantityControls}>
              <button
                className={styles.quantityButton}
                onClick={() => handleQuantityChange(-1)}
              >
                <FaMinus />
              </button>
              <span className={styles.quantity}>{quantity}</span>
              <button
                className={styles.quantityButton}
                onClick={() => handleQuantityChange(1)}
              >
                <FaPlus />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={styles.medicineActions}>
            <button
              className={styles.addToCartButton}
              onClick={handleAddToCart}
            >
              <FaPills />
              {t("add_to_cart") || "أضف للسلة"}
            </button>
            <button
              className={styles.orderButton}
              onClick={() => setShowOrderModal(true)}
            >
              <FaPrescriptionBottle />
              {t("write_order") || "كتابة الطلب"}
            </button>
          </div>
        </div>

        {/* Medicine Details */}
        <div className={styles.medicineDetails}>
          <h3>{t("medicine_ingredients") || "المكونات"}:</h3>
          <ul className={styles.ingredientsList}>
            {medicine.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h3>{t("preparation_time") || "وقت التحضير"}:</h3>
          <p>{medicine.preparationTime}</p>

          <h3>{t("availability") || "التوفر"}:</h3>
          <p
            className={
              medicine.isAvailable ? styles.available : styles.unavailable
            }
          >
            {medicine.isAvailable
              ? t("available") || "متوفر"
              : t("unavailable") || "غير متوفر"}
          </p>

          {medicine.prescriptionRequired && (
            <div className={styles.prescriptionWarning}>
              <FaPrescriptionBottle />
              <span>{t("prescription_required") || "يتطلب وصفة طبية"}</span>
            </div>
          )}
        </div>

        {/* Store Info */}
        <div className={styles.storeInfoSection}>
          <h3>{t("store_info") || "معلومات المتجر"}:</h3>
          <div className={styles.storeMeta}>
            <div className={styles.metaItem}>
              <FaMapMarkerAlt className={styles.metaIcon} />
              <span>{medicine.storeAddress}</span>
            </div>
            <div className={styles.metaItem}>
              <FaClock className={styles.metaIcon} />
              <span>{medicine.storeWorkingHours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Order Modal */}
      {showOrderModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h3>{t("write_order") || "كتابة الطلب"}</h3>
              <button
                className={styles.closeButton}
                onClick={() => setShowOrderModal(false)}
              >
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              <textarea
                value={orderText}
                onChange={(e) => setOrderText(e.target.value)}
                placeholder={t("order_placeholder") || "اكتب طلبك هنا..."}
                className={styles.orderTextarea}
                rows={5}
              />
            </div>
            <div className={styles.modalFooter}>
              <button
                className={styles.cancelButton}
                onClick={() => setShowOrderModal(false)}
              >
                {t("cancel") || "إلغاء"}
              </button>
              <button
                className={styles.submitButton}
                onClick={handleOrderSubmit}
                disabled={!orderText.trim()}
              >
                {t("submit_order") || "إرسال الطلب"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PharmacyProductDetail;
