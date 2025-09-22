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
import styles from "./LibraryDetail.module.css";

const LibraryDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation("global");
  const [activeTab, setActiveTab] = useState("books");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");

  // Library data (in real app, this would come from API)
  const library = {
    id: parseInt(id),
    name: "مكتبة المعرفة العامة",
    description:
      "أكبر مكتبة في المنطقة مع آلاف الكتب والمراجع العلمية والأدبية",
    rating: 4.8,
    workingHours: "وقت العمل : 8 ص : 10 م",
    address: "شارع التحرير، وسط البلد",
    logo: "/assets/library.jpg",
    heroImage: "/assets/library.jpg",
    category: "academic",
  };

  // Library photos
  const photos = [
    {
      id: 1,
      image: "/assets/library.jpg",
      title: "قسم الكتب الأكاديمية",
    },
    {
      id: 2,
      image: "/assets/library.jpg",
      title: "قسم الأدب والروايات",
    },
    {
      id: 3,
      image: "/assets/library.jpg",
      title: "قسم كتب الأطفال",
    },
  ];

  // Library offers
  const offers = [
    {
      id: 1,
      title: "عرض الكتب الأكاديمية",
      description: "كتب جامعية بخصم 20%",
      discount: "20%",
      image: "/assets/library.jpg",
      price: 150,
    },
    {
      id: 2,
      title: "عرض الروايات العالمية",
      description: "روايات مترجمة بخصم 25%",
      discount: "25%",
      image: "/assets/library.jpg",
      price: 80,
    },
  ];

  // Library books
  const books = [
    {
      id: 1,
      name: "مبادئ الفيزياء العامة",
      description: "كتاب شامل لمبادئ الفيزياء الأساسية",
      image: "/assets/library.jpg",
      price: 200,
      sizes: ["نسخة ورقية", "نسخة إلكترونية", "نسخة صوتية"],
      storeName: "مكتبة المعرفة العامة",
    },
    {
      id: 2,
      name: "تاريخ الأدب العربي",
      description: "مرجع شامل لتاريخ الأدب العربي عبر العصور",
      image: "/assets/library.jpg",
      price: 180,
      sizes: ["نسخة ورقية", "نسخة إلكترونية", "نسخة صوتية"],
      storeName: "مكتبة المعرفة العامة",
    },
  ];

  // Library branches
  const branches = [
    {
      id: 1,
      name: "فرع المعادي",
      address: "شارع المعادي، المعادي",
      workingHours: "وقت العمل : 8 ص : 10م",
      rating: 4.7,
      image: "/assets/library.jpg",
    },
    {
      id: 2,
      name: "فرع الزمالك",
      address: "شارع الزمالك، الزمالك",
      workingHours: "وقت العمل : 8 ص : 10م",
      rating: 4.9,
      image: "/assets/library.jpg",
    },
  ];

  const tabs = [
    { id: "books", name: t("books") || "الكتب" },
    { id: "photos", name: t("photos") || "الصور" },
    { id: "offers", name: t("offers") || "العروض" },
    { id: "branches", name: t("branches") || "الفروع" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "books":
        return (
          <div className={styles.booksGrid}>
            {books.map((book) => (
              <Link
                key={book.id}
                to={`/library-book/${book.id}`}
                className={styles.bookCard}
              >
                <div className={styles.bookActions}>
                  <button className={styles.actionButton}>
                    <FaHeart />
                  </button>
                  <button className={styles.actionButton}>
                    <FaShare />
                  </button>
                </div>
                <div className={styles.bookImage}>
                  <img src={book.image} alt={book.name} loading="lazy" />
                </div>
                <div className={styles.bookInfo}>
                  <h4 className={styles.bookName}>{book.name}</h4>
                  <p className={styles.storeName}>{book.storeName}</p>
                  <div className={styles.sizeOptions}>
                    {book.sizes.map((size) => (
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
                  <div className={styles.bookPrice}>
                    {book.price} {t("currency") || "جنيه"}
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
                      نسخة ورقية
                    </button>
                    <button className={styles.sizeButton}>
                      نسخة إلكترونية
                    </button>
                    <button className={styles.sizeButton}>نسخة صوتية</button>
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
    <div className={styles.libraryDetail}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroImage}>
          <img src={library.heroImage} alt={library.name} loading="lazy" />
        </div>
        <div className={styles.heroOverlay}>
          <div className={styles.libraryInfo}>
            <div className={styles.libraryLogo}>
              <img
                src={library.logo}
                alt={`${library.name} logo`}
                loading="lazy"
              />
            </div>
            <h1 className={styles.libraryName}>{library.name}</h1>
            <p className={styles.libraryDescription}>{library.description}</p>
            <div className={styles.libraryRating}>
              <FaStar className={styles.starIcon} />
              <span>{library.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Library Details */}
      <div className="container">
        <div className={styles.libraryDetails}>
          <div className={styles.detailItem}>
            <FaClock className={styles.detailIcon} />
            <span>{library.workingHours}</span>
          </div>
          <div className={styles.detailItem}>
            <FaMapMarkerAlt className={styles.detailIcon} />
            <span>{library.address}</span>
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

export default LibraryDetail;
