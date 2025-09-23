import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPhone, FaArrowRight, FaLock } from "react-icons/fa";
import styles from "./ResetPassword.module.css";

const ResetPassword = () => {
  const { t, i18n } = useTranslation("global");
  const [formData, setFormData] = useState({
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  // التحقق من صحة رقم الهاتف
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10,11}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  // التحقق من صحة النموذج
  const validateForm = () => {
    const newErrors = {};

    if (!formData.phone) {
      newErrors.phone = t("phone_required") || "رقم الهاتف مطلوب";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = t("phone_invalid") || "رقم الهاتف غير صحيح";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // معالجة تغيير رقم الهاتف
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // إزالة غير الأرقام

    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));

    // مسح الخطأ عندما يبدأ المستخدم في الكتابة
    if (errors.phone) {
      setErrors((prev) => ({
        ...prev,
        phone: "",
      }));
    }
  };

  // إرسال النموذج
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // محاكاة استدعاء API لإرسال كود إعادة تعيين كلمة المرور
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // هنا يمكنك إجراء استدعاء API الفعلي
      console.log("إرسال كود إعادة تعيين كلمة المرور لرقم:", formData.phone);

      // عرض رسالة نجاح أو إعادة التوجيه لصفحة OTP
      alert(
        t("reset_code_sent") || "تم إرسال كود إعادة تعيين كلمة المرور بنجاح!"
      );

      // إعادة التوجيه لصفحة OTP لإعادة تعيين كلمة المرور
      window.location.href = "/otp-forgot-password";
    } catch (error) {
      console.error("خطأ في إرسال كود إعادة التعيين:", error);
      alert(t("reset_code_error") || "حدث خطأ أثناء إرسال كود إعادة التعيين");
    } finally {
      setIsLoading(false);
    }
  };

  // العودة للصفحة السابقة
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div
      className={`${styles.resetContainer} ${
        direction === "rtl" ? styles.rtl : styles.ltr
      }`}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-lg-10 col-xl-8">
            <div className={styles.resetWrapper}>
              {/* العمود الأيسر - الفورم */}
              <div
                className={`col-md-6 ${styles.formColumn} ${
                  direction === "rtl" ? styles.order2 : styles.order1
                }`}
              >
                <div className={styles.formWrapper}>
                  <div className={styles.resetCard}>
                    {/* الرأس */}
                    <div className={styles.resetHeader}>
                      <button
                        className={styles.backButton}
                        onClick={handleBack}
                        type="button"
                      >
                        <FaArrowRight className={styles.backIcon} />
                      </button>
                      <div className={styles.iconContainer}>
                        <FaLock className={styles.lockIcon} />
                      </div>
                      <h2 className={styles.resetTitle}>
                        {t("reset_password") || "إعادة تعيين كلمة المرور"}
                      </h2>
                      <p className={styles.resetSubtitle}>
                        {t("reset_subtitle") ||
                          "أدخل رقم هاتفك لإرسال كود إعادة تعيين كلمة المرور"}
                      </p>
                    </div>

                    {/* النموذج */}
                    <form onSubmit={handleSubmit} className={styles.resetForm}>
                      {/* حقل رقم الهاتف */}
                      <div className={styles.formGroup}>
                        <label htmlFor="phone" className={styles.formLabel}>
                          <FaPhone className={styles.inputIcon} />
                          {t("phone_number") || "رقم الهاتف"}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          className={`${styles.formInput} ${
                            errors.phone ? styles.inputError : ""
                          }`}
                          placeholder={t("phone_placeholder") || "1234567890"}
                          dir="ltr"
                        />
                        {errors.phone && (
                          <div className={styles.errorMessage}>
                            {errors.phone}
                          </div>
                        )}
                      </div>

                      {/* زر إرسال الكود */}
                      <button
                        type="submit"
                        className={`${styles.resetButton} ${
                          isLoading ? styles.loading : ""
                        }`}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <div className={styles.spinner}></div>
                            {t("sending_code") || "جاري الإرسال..."}
                          </>
                        ) : (
                          <>
                            {t("send_reset_code") || "إرسال كود إعادة التعيين"}
                            <FaArrowRight className={styles.buttonIcon} />
                          </>
                        )}
                      </button>

                      {/* الفاصل */}
                      <div className={styles.divider}>
                        <span className={styles.dividerText}>
                          {t("or") || "أو"}
                        </span>
                      </div>

                      {/* رابط تسجيل الدخول */}
                      <div className={styles.loginLink}>
                        <span className={styles.loginText}>
                          {t("remember_password") || "تذكرت كلمة المرور؟"}
                        </span>
                        <a href="/login" className={styles.loginButton}>
                          {t("back_to_login") || "العودة لتسجيل الدخول"}
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* العمود الأيمن - الشعار */}
              <div
                className={`col-md-6 ${styles.brandColumn} ${
                  direction === "rtl" ? styles.order1 : styles.order2
                }`}
              >
                <div className={styles.brandContent}>
                  <div className={styles.brandLogo}>
                    <div className={styles.logoContainer}>
                      <img
                        src="/assets/Artboard 9.svg"
                        alt="خدمات منتي"
                        className={styles.logoImage}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
