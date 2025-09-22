import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import {
  FaHeart,
  FaShare,
  FaStar,
  FaClock,
  FaMapMarkerAlt,
  FaExclamationCircle,
  FaShoppingCart,
  FaMinus,
  FaPlus,
} from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./RestaurantDetail.module.css";

const RestaurantDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation("global");
  const [activeTab, setActiveTab] = useState("products");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");

  // Restaurant data (in real app, this would come from API)
  const restaurant = {
    id: parseInt(id),
    name: "Heart Attack",
    workingHours: "وقت العمل : 12 ص : 12 م",
    address: "32 ش فيصل الجيزة",
    logo: "/assets/22.svg",
    heroImage: "/assets/1.svg",
    category: "fast_food",
  };

  // Restaurant photos
  const photos = [
    {
      id: 1,
      image: "/assets/bread-table.webp  ",
      title: "وجبة العائلة الكاملة",
    },
    {
      id: 2,
      image: "/assets/bread-table.webp",
      title: "برجر القلب",
    },
    {
      id: 3,
      image: "/assets/bread-table.webp",
      title: "دجاج مقلي",
    },
  ];

  // Restaurant offers
  const offers = [
    {
      id: 1,
      title: "اقوى عرض لاقوى ويك أند",
      description: "9 بروست، 2 كول سلو، 2 رز 39 عيش",
      discount: "15%",
      image: "/assets/bread-table.webp",
      price: 200,
    },
    {
      id: 2,
      title: "عرض البرجر الكبير",
      description: "برجر كبير مع بطاطس وشراب",
      discount: "20%",
      image: "/assets/bread-table.webp",
      price: 150,
    },
  ];

  // Restaurant products
  const products = [
    {
      id: 1,
      name: "وجبة العائلة",
      description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.",
      image: "/assets/bread-table.webp",
      price: 200,
      sizes: ["S", "M", "L"],
      storeName: "اسم المحل",
    },
    {
      id: 2,
      name: "برجر القلب",
      description: "برجر لحم مع جبن وطماطم",
      image: "/assets/bread-table.webp",
      price: 120,
      sizes: ["S", "M", "L"],
      storeName: "اسم المحل",
    },
  ];

  // Restaurant branches
  const branches = [
    {
      id: 1,
      name: "فرع دمياط",
      address: "32 الشهيد فريد نما قسم دمياط",
      workingHours: "وقت العمل : 12 م : 12م",
      rating: 4.5,
      image: "/assets/bread-table.webp",
    },
    {
      id: 2,
      name: "فرع القاهرة",
      address: "شارع التحرير، وسط البلد",
      workingHours: "وقت العمل : 12 م : 12م",
      rating: 4.8,
      image: "/assets/bread-table.webp",
    },
  ];

  const tabs = [
    { id: "products", name: t("products") || "المنتجات" },
    { id: "photos", name: t("photos") || "الصور" },
    { id: "offers", name: t("offers") || "العروض" },
    { id: "branches", name: t("branches") || "الفروع" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "products":
        return (
          <div className={styles.productsGrid}>
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className={styles.productCard}
              >
                <div className={styles.productActions}>
                  <button className={styles.actionButton}>
                    <FaHeart />
                  </button>
                  <button className={styles.actionButton}>
                    <FaShare />
                  </button>
                </div>
                <div className={styles.productImage}>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className={styles.productInfo}>
                  <h4 className={styles.productName}>{product.name}</h4>
                  <p className={styles.storeName}>{product.storeName}</p>
                  <div className={styles.sizeOptions}>
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className={`${styles.sizeButton} ${
                          selectedSize === size ? styles.active : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedSize(size);
                        }}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <div className={styles.productPrice}>
                    {product.price} {t("currency") || "جنيه"}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        );

      case "photos":
        return (
          <div className={styles.photosGrid}>
            {photos.map((photo) => (
              <div key={photo.id} className={styles.photoCard}>
                <img src={photo.image} alt={photo.title} />
                <div className={styles.photoOverlay}>
                  <h4>{photo.title}</h4>
                </div>
              </div>
            ))}
          </div>
        );

      case "offers":
        return (
          <div className={styles.offersGrid}>
            {offers.map((offer) => (
              <div key={offer.id} className={styles.offerCard}>
                <div className={styles.offerActions}>
                  <button className={styles.actionButton}>
                    <FaHeart />
                  </button>
                  <button className={styles.actionButton}>
                    <FaShare />
                  </button>
                </div>
                <div className={styles.offerImage}>
                  <img src={offer.image} alt={offer.title} />
                  <div className={styles.offerDiscount}>{offer.discount}</div>
                </div>
                <div className={styles.offerInfo}>
                  <h4 className={styles.offerName}>{offer.name}</h4>
                  <p className={styles.offerDescription}>{offer.description}</p>
                  <div className={styles.sizeOptions}>
                    <button className={`${styles.sizeButton} ${styles.active}`}>
                      S
                    </button>
                    <button className={styles.sizeButton}>M</button>
                    <button className={styles.sizeButton}>L</button>
                  </div>
                  <div className={styles.offerPrice}>
                    {offer.price} {t("currency") || "جنيه"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "branches":
        return (
          <div className={styles.branchesList}>
            {branches.map((branch) => (
              <div key={branch.id} className={styles.branchCard}>
                <div className={styles.branchInfo}>
                  <div className={styles.branchRating}>
                    <FaStar className={styles.starIcon} />
                    <span>{branch.rating}</span>
                  </div>
                  <h4 className={styles.branchName}>{branch.name}</h4>
                  <p className={styles.branchAddress}>{branch.address}</p>
                  <div className={styles.branchHours}>
                    <FaClock className={styles.clockIcon} />
                    <span>{branch.workingHours}</span>
                  </div>
                </div>
                <div className={styles.branchImage}>
                  <img src={branch.image} alt={branch.name} />
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.restaurantDetail}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroImage}>
          <img src={restaurant.heroImage} alt={restaurant.name} />
        </div>
        <div className={styles.heroOverlay}>
          <div className={styles.restaurantInfo}>
            <div className={styles.restaurantLogo}>
              <img src={restaurant.logo} alt={`${restaurant.name} logo`} />
            </div>
            <h1 className={styles.restaurantName}>{restaurant.name}</h1>
          </div>
        </div>
      </div>

      {/* Restaurant Details */}
      <div className="container">
        <div className={styles.restaurantDetails}>
          <div className={styles.detailItem}>
            <FaClock className={styles.detailIcon} />
            <span>{restaurant.workingHours}</span>
          </div>
          <div className={styles.detailItem}>
            <FaMapMarkerAlt className={styles.detailIcon} />
            <span>{restaurant.address}</span>
          </div>
          <div className={styles.detailItem}>
            <FaExclamationCircle className={styles.detailIcon} />
            <span>{t("complaint") || "شكوة"}</span>
          </div>
          <div className={styles.detailItem}>
            <FaStar className={styles.detailIcon} />
            <span>{t("rating") || "تقيم"}</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className={styles.tabsContainer}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${
                activeTab === tab.id ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className={styles.tabContent}>{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
