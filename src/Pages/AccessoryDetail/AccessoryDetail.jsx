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
import styles from "./AccessoryDetail.module.css";

const AccessoryDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation("global");
  const [activeTab, setActiveTab] = useState("products");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");

  // Accessory store data (in real app, this would come from API)
  const accessoryStore = {
    id: parseInt(id),
    name: "محل الذهب الأصيل",
    description: "أجود أنواع الذهب والمجوهرات الأصيلة مع ضمان الجودة والأصالة",
    rating: 4.8,
    workingHours: "وقت العمل : 9 ص : 10 م",
    address: "شارع التحرير، وسط البلد",
    logo: "/assets/acc.svg",
    heroImage: "/assets/chain.webp",
    category: "jewelry",
  };

  // Store photos
  const photos = [
    {
      id: 1,
      image: "/assets/chain.webp",
      title: "مجوهرات ذهبية كلاسيكية",
    },
    {
      id: 2,
      image: "/assets/chain.webp",
      title: "خواتم الخطوبة والزواج",
    },
    {
      id: 3,
      image: "/assets/chain.webp",
      title: "سلاسل وأساور ذهبية",
    },
  ];

  // Store offers
  const offers = [
    {
      id: 1,
      title: "عرض الذهب الأصفر",
      description: "خواتم ذهبية بخصم 20%",
      discount: "20%",
      image: "/assets/chain.webp",
      price: 1500,
    },
    {
      id: 2,
      title: "عرض المجوهرات الفضية",
      description: "مجوهرات فضية بخصم 25%",
      discount: "25%",
      image: "/assets/chain.webp",
      price: 800,
    },
  ];

  // Store products
  const products = [
    {
      id: 1,
      name: "خاتم ذهب عيار 18",
      description: "خاتم ذهب أصفر عيار 18 مع فص من الماس",
      image: "/assets/chain.webp",
      price: 2500,
      sizes: ["16", "17", "18", "19"],
      storeName: "محل الذهب الأصيل",
    },
    {
      id: 2,
      name: "سلسلة ذهبية أنيقة",
      description: "سلسلة ذهبية عيار 21 مع قلادة",
      image: "/assets/chain.webp",
      price: 1800,
      sizes: ["40cm", "45cm", "50cm"],
      storeName: "محل الذهب الأصيل",
    },
  ];

  // Store branches
  const branches = [
    {
      id: 1,
      name: "فرع المعادي",
      address: "شارع المعادي، المعادي",
      workingHours: "وقت العمل : 9 ص : 10م",
      rating: 4.7,
      image: "/assets/chain.webp",
    },
    {
      id: 2,
      name: "فرع الزمالك",
      address: "شارع الزمالك، الزمالك",
      workingHours: "وقت العمل : 9 ص : 10م",
      rating: 4.9,
      image: "/assets/chain.webp",
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
                to={`/accessory-product/${product.id}`}
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
                  <img src={product.image} alt={product.name} loading="lazy" />
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
                <img src={photo.image} alt={photo.title} loading="lazy" />
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
                  <img src={offer.image} alt={offer.title} loading="lazy" />
                  <div className={styles.offerDiscount}>{offer.discount}</div>
                </div>
                <div className={styles.offerInfo}>
                  <h4 className={styles.offerName}>{offer.title}</h4>
                  <p className={styles.offerDescription}>{offer.description}</p>
                  <div className={styles.sizeOptions}>
                    <button className={`${styles.sizeButton} ${styles.active}`}>
                      16
                    </button>
                    <button className={styles.sizeButton}>17</button>
                    <button className={styles.sizeButton}>18</button>
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
                  <img src={branch.image} alt={branch.name} loading="lazy" />
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
    <div className={styles.accessoryDetail}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroImage}>
          <img
            src={accessoryStore.heroImage}
            alt={accessoryStore.name}
            loading="lazy"
          />
        </div>
        <div className={styles.heroOverlay}>
          <div className={styles.storeInfo}>
            <div className={styles.storeLogo}>
              <img
                src={accessoryStore.logo}
                alt={`${accessoryStore.name} logo`}
                loading="lazy"
              />
            </div>
            <h1 className={styles.storeName}>{accessoryStore.name}</h1>
            <p className={styles.storeDescription}>
              {accessoryStore.description}
            </p>
            <div className={styles.storeRating}>
              <FaStar className={styles.starIcon} />
              <span>{accessoryStore.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Store Details */}
      <div className="container">
        <div className={styles.storeDetails}>
          <div className={styles.detailItem}>
            <FaClock className={styles.detailIcon} />
            <span>{accessoryStore.workingHours}</span>
          </div>
          <div className={styles.detailItem}>
            <FaMapMarkerAlt className={styles.detailIcon} />
            <span>{accessoryStore.address}</span>
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

export default AccessoryDetail;
