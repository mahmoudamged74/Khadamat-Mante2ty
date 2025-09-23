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
  FaPills,
  FaPrescriptionBottle,
  FaStethoscope,
  FaSearch,
} from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./PharmacyDetail.module.css";

const PharmacyDetail = () => {
  const { id } = useParams();
  const { t } = useTranslation("global");
  const [activeTab, setActiveTab] = useState("medicines");
  const [searchTerm, setSearchTerm] = useState("");

  // Pharmacy data (in real app, this would come from API)
  const pharmacy = {
    id: parseInt(id),
    name: "صيدلية د.أسامة عبد الغني",
    description:
      "صيدلية متخصصة في الأدوية والمستلزمات الطبية مع استشارات طبية مجانية",
    rating: 4.8,
    workingHours: "وقت العمل : 8 ص : 10 م",
    address: "شارع التحرير، وسط البلد",
    logo: "/assets/2.svg",
    heroImage: "/assets/88.png",
    category: "pharmacy",
  };

  // Pharmacy branches
  const branches = [
    {
      id: 1,
      name: "الفرع الرئيسي",
      address: "شارع التحرير، وسط البلد",
      phone: "01234567890",
      workingHours: "8 ص - 10 م",
      image: "/assets/remix.jpg",
    },
    {
      id: 2,
      name: "فرع المعادي",
      address: "شارع 9، المعادي",
      phone: "01234567891",
      workingHours: "9 ص - 11 م",
      image: "/assets/people.jpg",
    },
    {
      id: 3,
      name: "فرع النزهة",
      address: "شارع النزهة، مدينة نصر",
      phone: "01234567892",
      workingHours: "8 ص - 9 م",
      image: "/assets/remix.jpg",
    },
    {
      id: 4,
      name: "فرع الشيخ زايد",
      address: "شارع الشيخ زايد، 6 أكتوبر",
      phone: "01234567893",
      workingHours: "10 ص - 12 م",
      image: "/assets/remix.jpg",
    },
  ];

  // Pharmacy offers
  const offers = [
    {
      id: 1,
      title: "عرض الأدوية",
      description: "أدوية بخصم 20%",
      discount: "20%",
      image: "/assets/remix.jpg",
      price: 150,
    },
    {
      id: 2,
      title: "عرض المكملات الغذائية",
      description: "فيتامينات بخصم 25%",
      discount: "25%",
      image: "/assets/people.jpg",
      price: 80,
    },
  ];

  // Pharmacy medicines
  const medicines = [
    {
      id: 1,
      name: "باراسيتامول 500 مجم",
      description: "مسكن للآلام وخافض للحرارة",
      image: "/assets/remix.jpg",
      price: 15,
      sizes: ["10 حبة", "20 حبة", "30 حبة"],
      storeName: "صيدلية د.أسامة عبد الغني",
      category: "prescription",
    },
    {
      id: 2,
      name: "فيتامين د3",
      description: "مكمل غذائي للعظام والأسنان",
      image: "/assets/people.jpg",
      price: 45,
      sizes: ["30 حبة", "60 حبة", "90 حبة"],
      storeName: "صيدلية د.أسامة عبد الغني",
      category: "supplements",
    },
    {
      id: 3,
      name: "مضاد حيوي أموكسيسيلين",
      description: "مضاد حيوي واسع الطيف",
      image: "/assets/remix.jpg",
      price: 25,
      sizes: ["12 حبة", "24 حبة", "36 حبة"],
      storeName: "صيدلية د.أسامة عبد الغني",
      category: "prescription",
    },
    {
      id: 4,
      name: "جهاز قياس الضغط",
      description: "جهاز رقمي لقياس ضغط الدم",
      image: "/assets/remix.jpg",
      price: 350,
      sizes: ["صغير", "متوسط", "كبير"],
      storeName: "صيدلية د.أسامة عبد الغني",
      category: "medical",
    },
  ];

  const filteredMedicines = medicines.filter((medicine) => {
    const matchesTab = activeTab === "all" || medicine.category === activeTab;
    const matchesSearch =
      medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const tabs = [
    { id: "all", name: t("all") || "الكل", icon: <FaPills /> },
    {
      id: "prescription",
      name: t("prescription_medicines") || "أدوية بوصفة",
      icon: <FaPrescriptionBottle />,
    },
    {
      id: "supplements",
      name: t("health_supplements") || "مكملات غذائية",
      icon: <FaStethoscope />,
    },
    {
      id: "medical",
      name: t("medical_devices") || "أجهزة طبية",
      icon: <FaPills />,
    },
  ];

  return (
    <div className={styles.pharmacyDetailPage}>
      {/* Header */}
      <div className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <Link to="/pharmacy" className={styles.backButton}>
              ← {t("back") || "رجوع"}
            </Link>
            <h1 className={styles.pageTitle}>{pharmacy.name}</h1>
            <div className={styles.headerActions}>
              <button className={styles.actionButton}>
                <FaHeart />
              </button>
              <button className={styles.actionButton}>
                <FaShare />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <img
          src={pharmacy.heroImage}
          alt={pharmacy.name}
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <div className={styles.pharmacyLogo}>
            <img src={pharmacy.logo} alt={`${pharmacy.name} logo`} />
          </div>
        </div>
      </div>

      {/* Pharmacy Info */}
      <div className="container">
        <div className={styles.pharmacyInfo}>
          <div className={styles.pharmacyDetails}>
            <h2 className={styles.pharmacyName}>{pharmacy.name}</h2>
            <p className={styles.pharmacyDescription}>{pharmacy.description}</p>

            <div className={styles.pharmacyMeta}>
              <div className={styles.metaItem}>
                <FaStar className={styles.metaIcon} />
                <span>{pharmacy.rating}</span>
              </div>
              <div className={styles.metaItem}>
                <FaClock className={styles.metaIcon} />
                <span>{pharmacy.workingHours}</span>
              </div>
              <div className={styles.metaItem}>
                <FaMapMarkerAlt className={styles.metaIcon} />
                <span>{pharmacy.address}</span>
              </div>
            </div>
          </div>

          <div className={styles.pharmacyActions}>
            <button className={styles.primaryButton}>
              <FaShoppingCart />
              {t("order_now") || "اطلب الآن"}
            </button>
            <button className={styles.secondaryButton}>
              <FaExclamationCircle />
              {t("complaint") || "شكوى"}
            </button>
          </div>
        </div>

        {/* Branches Section */}
        <div className={styles.branchesSection}>
          <h3 className={styles.sectionTitle}>
            {t("pharmacy_branches") || "فروع الصيدلية"}
          </h3>
          <div className={styles.branchesGrid}>
            {branches.map((branch) => (
              <div key={branch.id} className={styles.branchCard}>
                <div className={styles.branchImage}>
                  <img src={branch.image} alt={branch.name} />
                </div>
                <div className={styles.branchContent}>
                  <h4 className={styles.branchName}>{branch.name}</h4>
                  <div className={styles.branchInfo}>
                    <div className={styles.branchItem}>
                      <FaMapMarkerAlt className={styles.branchIcon} />
                      <span>{branch.address}</span>
                    </div>
                    <div className={styles.branchItem}>
                      <FaClock className={styles.branchIcon} />
                      <span>{branch.workingHours}</span>
                    </div>
                    <div className={styles.branchItem}>
                      <span className={styles.phoneNumber}>{branch.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Offers Section */}
        <div className={styles.offersSection}>
          <h3 className={styles.sectionTitle}>
            {t("pharmacy_offers") || "عروض الصيدلية"}
          </h3>
          <div className={styles.offersGrid}>
            {offers.map((offer) => (
              <div key={offer.id} className={styles.offerCard}>
                <div className={styles.offerImage}>
                  <img src={offer.image} alt={offer.title} />
                  <div className={styles.offerDiscount}>
                    {t("discount") || "خصم"} {offer.discount}
                  </div>
                </div>
                <div className={styles.offerContent}>
                  <h4 className={styles.offerTitle}>{offer.title}</h4>
                  <p className={styles.offerDescription}>{offer.description}</p>
                  <div className={styles.offerPrice}>
                    {offer.price} {t("currency") || "جنيه"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medicines Section */}
        <div className={styles.medicinesSection}>
          <h3 className={styles.sectionTitle}>
            {t("medicines") || "الأدوية والمستلزمات"}
          </h3>

          {/* Search Bar */}
          <div className={styles.searchSection}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder={t("search_medicines") || "ابحث عن الأدوية..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
              <div className={styles.searchIcon}>
                <FaSearch />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tab} ${
                  activeTab === tab.id ? styles.active : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className={styles.tabIcon}>{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>

          {/* Medicines Grid */}
          <div className={styles.medicinesGrid}>
            {filteredMedicines.map((medicine) => (
              <Link
                key={medicine.id}
                to={`/pharmacy-product/${medicine.id}`}
                className={styles.medicineCard}
              >
                <div className={styles.medicineImage}>
                  <img src={medicine.image} alt={medicine.name} />
                  <div className={styles.medicineActions}>
                    <button className={styles.actionButton}>
                      <FaHeart />
                    </button>
                    <button className={styles.actionButton}>
                      <FaShare />
                    </button>
                  </div>
                </div>
                <div className={styles.medicineContent}>
                  <h4 className={styles.medicineName}>{medicine.name}</h4>
                  <p className={styles.medicineDescription}>
                    {medicine.description}
                  </p>
                  <div className={styles.medicinePrice}>
                    {medicine.price} {t("currency") || "جنيه"}
                  </div>
                  <div className={styles.medicineSizes}>
                    {medicine.sizes.map((size, index) => (
                      <span key={index} className={styles.sizeTag}>
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyDetail;
