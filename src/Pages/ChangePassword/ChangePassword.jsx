import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaEye,
  FaEyeSlash,
  FaLock,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";
import styles from "./ChangePassword.module.css";

const ChangePassword = () => {
  const { t, i18n } = useTranslation("global");
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  // التحقق من صحة كلمة المرور
  const validatePassword = (password) => {
    return password.length >= 6;
  };

  // التحقق من تطابق كلمة المرور
  const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  // التحقق من صحة النموذج
  const validateForm = () => {
    const newErrors = {};

    if (!formData.newPassword) {
      newErrors.newPassword =
        t("new_password_required") || "كلمة المرور الجديدة مطلوبة";
    } else if (!validatePassword(formData.newPassword)) {
      newErrors.newPassword =
        t("password_min_length") || "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        t("confirm_password_required") || "تأكيد كلمة المرور مطلوب";
    } else if (
      !validateConfirmPassword(formData.newPassword, formData.confirmPassword)
    ) {
      newErrors.confirmPassword =
        t("passwords_not_match") || "كلمات المرور غير متطابقة";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // معالجة تغيير الإدخال
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // مسح الخطأ عندما يبدأ المستخدم في الكتابة
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
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
      // محاكاة استدعاء API لتغيير كلمة المرور
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // هنا يمكنك إجراء استدعاء API الفعلي
      console.log("تغيير كلمة المرور:", formData);

      setSuccess(true);
      console.log("تم تغيير كلمة المرور بنجاح");

      // عرض رسالة نجاح
      alert(t("password_changed_success") || "تم تغيير كلمة المرور بنجاح!");

      // إعادة التوجيه لصفحة تسجيل الدخول بعد 2 ثانية
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (error) {
      console.error("خطأ في تغيير كلمة المرور:", error);
      alert(t("password_change_error") || "حدث خطأ أثناء تغيير كلمة المرور");
    } finally {
      setIsLoading(false);
    }
  };

  // تبديل رؤية كلمة المرور الجديدة
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  // تبديل رؤية تأكيد كلمة المرور
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // العودة للصفحة السابقة
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div
      className={`${styles.changeContainer} ${
        direction === "rtl" ? styles.rtl : styles.ltr
      }`}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-lg-10 col-xl-8">
            <div className={styles.changeWrapper}>
              {/* العمود الأيسر - الفورم */}
              <div
                className={`col-md-6 ${styles.formColumn} ${
                  direction === "rtl" ? styles.order2 : styles.order1
                }`}
              >
                <div className={styles.formWrapper}>
                  <div className={styles.changeCard}>
                    {/* الرأس */}
                    <div className={styles.changeHeader}>
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
                      <h2 className={styles.changeTitle}>
                        {t("change_password") || "تغيير كلمة المرور"}
                      </h2>
                      <p className={styles.changeSubtitle}>
                        {t("change_subtitle") || "أدخل كلمة المرور الجديدة"}
                      </p>
                    </div>

                    {/* النموذج */}
                    <form onSubmit={handleSubmit} className={styles.changeForm}>
                      {/* حقل كلمة المرور الجديدة */}
                      <div className={styles.formGroup}>
                        <label
                          htmlFor="newPassword"
                          className={styles.formLabel}
                        >
                          <FaLock className={styles.inputIcon} />
                          {t("new_password") || "كلمة المرور الجديدة"}
                        </label>
                        <div className={styles.inputContainer}>
                          <input
                            type={showNewPassword ? "text" : "password"}
                            id="newPassword"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                            className={`${styles.formInput} ${
                              errors.newPassword ? styles.inputError : ""
                            }`}
                            placeholder={
                              t("new_password_placeholder") ||
                              "أدخل كلمة المرور الجديدة"
                            }
                          />
                          <button
                            type="button"
                            className={styles.passwordToggle}
                            onClick={toggleNewPasswordVisibility}
                            tabIndex="-1"
                          >
                            {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                        {errors.newPassword && (
                          <div className={styles.errorMessage}>
                            {errors.newPassword}
                          </div>
                        )}
                      </div>

                      {/* حقل تأكيد كلمة المرور */}
                      <div className={styles.formGroup}>
                        <label
                          htmlFor="confirmPassword"
                          className={styles.formLabel}
                        >
                          <FaLock className={styles.inputIcon} />
                          {t("confirm_new_password") ||
                            "تأكيد كلمة المرور الجديدة"}
                        </label>
                        <div className={styles.inputContainer}>
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={`${styles.formInput} ${
                              errors.confirmPassword ? styles.inputError : ""
                            }`}
                            placeholder={
                              t("confirm_new_password_placeholder") ||
                              "أعد إدخال كلمة المرور الجديدة"
                            }
                          />
                          <button
                            type="button"
                            className={styles.passwordToggle}
                            onClick={toggleConfirmPasswordVisibility}
                            tabIndex="-1"
                          >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                        {errors.confirmPassword && (
                          <div className={styles.errorMessage}>
                            {errors.confirmPassword}
                          </div>
                        )}
                      </div>

                      {/* رسالة النجاح */}
                      {success && (
                        <div className={styles.successMessage}>
                          <FaCheck className={styles.successIcon} />
                          {t("password_changed_success") ||
                            "تم تغيير كلمة المرور بنجاح!"}
                        </div>
                      )}

                      {/* زر تغيير كلمة المرور */}
                      <button
                        type="submit"
                        className={`${styles.changeButton} ${
                          isLoading ? styles.loading : ""
                        }`}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <div className={styles.spinner}></div>
                            {t("changing_password") ||
                              "جاري تغيير كلمة المرور..."}
                          </>
                        ) : (
                          <>
                            {t("change_password") || "تغيير كلمة المرور"}
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
                          {t("back_to_login_text") || "العودة لتسجيل الدخول"}
                        </span>
                        <a href="/login" className={styles.loginButton}>
                          {t("back_to_login") || "تسجيل الدخول"}
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

export default ChangePassword;
