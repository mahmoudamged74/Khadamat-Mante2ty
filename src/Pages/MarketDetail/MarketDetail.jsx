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
import styles from "./MarketDetail.module.css";

const MarketDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation("global");
  const [activeTab, setActiveTab] = useState("products");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");

  // Market data (in real app, this would come from API)
  const market = {
    id: parseInt(id),
    name: "سوبر ماركت الأهلي",
    description: "أفضل المنتجات الطازجة والأسعار المناسبة في سوبر ماركت الأهلي",
    rating: 4.5,
    workingHours: "وقت العمل : 8 ص : 12 م",
    address: "32 ش فيصل الجيزة",
    logo: "/public/assets/cart.webp",
    heroImage: "/public/assets/cart.webp",
    category: "supermarket",
  };

  // Market photos
  const photos = [
    {
      id: 1,
      image: "/public/assets/banana.webp",
      title: "قسم الخضروات الطازجة",
    },
    {
      id: 2,
      image: "/public/assets/banana.webp",
      title: "قسم الفواكه الموسمية",
    },
    {
      id: 3,
      image: "/public/assets/banana.webp",
      title: "قسم اللحوم والأسماك",
    },
  ];

  // Market offers
  const offers = [
    {
      id: 1,
      title: "عرض الخضروات الطازجة",
      description: "خضروات طازجة بخصم 30%",
      discount: "30%",
      image: "/public/assets/banana.webp",
      price: 50,
    },
    {
      id: 2,
      title: "عرض الفواكه الموسمية",
      description: "فواكه موسمية بخصم 25%",
      discount: "25%",
      image: "/public/assets/banana.webp",
      price: 80,
    },
  ];

  // Market products
  const products = [
    {
      id: 1,
      name: "طماطم طازجة",
      description: "طماطم طازجة من المزرعة",
      image: "/public/assets/banana.webp",
      price: 15,
      sizes: ["كيلو", "نصف كيلو", "ربع كيلو"],
      storeName: "سوبر ماركت الأهلي",
    },
    {
      id: 2,
      name: "موز أصفر",
      description: "موز أصفر طازج",
      image: "/public/assets/banana.webp",
      price: 25,
      sizes: ["كيلو", "نصف كيلو", "ربع كيلو"],
      storeName: "سوبر ماركت الأهلي",
    },
  ];

  // Market branches
  const branches = [
    {
      id: 1,
      name: "فرع دمياط",
      address: "32 الشهيد فريد نما قسم دمياط",
      workingHours: "وقت العمل : 8 ص : 12م",
      rating: 4.5,
      image: "/public/assets/cart.webp",
    },
    {
      id: 2,
      name: "فرع القاهرة",
      address: "شارع التحرير، وسط البلد",
      workingHours: "وقت العمل : 8 ص : 12م",
      rating: 4.8,
      image: "/public/assets/cart.webp",
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
                to={`/market-product/${product.id}`}
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
                  <h4 className={styles.offerName}>{offer.title}</h4>
                  <p className={styles.offerDescription}>{offer.description}</p>
                  <div className={styles.sizeOptions}>
                    <button className={`${styles.sizeButton} ${styles.active}`}>
                      كيلو
                    </button>
                    <button className={styles.sizeButton}>نصف كيلو</button>
                    <button className={styles.sizeButton}>ربع كيلو</button>
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
    <div className={styles.marketDetail}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroImage}>
          <img src={market.heroImage} alt={market.name} />
        </div>
        <div className={styles.heroOverlay}>
          <div className={styles.marketInfo}>
            <div className={styles.marketLogo}>
              <img src={market.logo} alt={`${market.name} logo`} />
            </div>
            <h1 className={styles.marketName}>{market.name}</h1>
            <p className={styles.marketDescription}>{market.description}</p>
            <div className={styles.marketRating}>
              <FaStar className={styles.starIcon} />
              <span>{market.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Market Details */}
      <div className="container">
        <div className={styles.marketDetails}>
          <div className={styles.detailItem}>
            <FaClock className={styles.detailIcon} />
            <span>{market.workingHours}</span>
          </div>
          <div className={styles.detailItem}>
            <FaMapMarkerAlt className={styles.detailIcon} />
            <span>{market.address}</span>
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

export default MarketDetail;
