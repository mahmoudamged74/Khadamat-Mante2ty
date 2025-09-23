import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaEye,
  FaEyeSlash,
  FaPhone,
  FaLock,
  FaUser,
  FaArrowRight,
} from "react-icons/fa";
import styles from "./Register.module.css";

const Register = () => {
  const { t, i18n } = useTranslation("global");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  // التحقق من صحة الاسم
  const validateFullName = (name) => {
    return name.trim().length >= 2;
  };

  // التحقق من صحة رقم الهاتف
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10,11}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

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

    if (!formData.fullName) {
      newErrors.fullName = t("full_name_required") || "الاسم بالكامل مطلوب";
    } else if (!validateFullName(formData.fullName)) {
      newErrors.fullName =
        t("full_name_invalid") || "الاسم بالكامل يجب أن يكون حرفين على الأقل";
    }

    if (!formData.phone) {
      newErrors.phone = t("phone_required") || "رقم الهاتف مطلوب";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = t("phone_invalid") || "رقم الهاتف غير صحيح";
    }

    if (!formData.password) {
      newErrors.password = t("password_required") || "كلمة المرور مطلوبة";
    } else if (!validatePassword(formData.password)) {
      newErrors.password =
        t("password_min_length") || "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        t("confirm_password_required") || "تأكيد كلمة المرور مطلوب";
    } else if (
      !validateConfirmPassword(formData.password, formData.confirmPassword)
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
      // محاكاة استدعاء API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // هنا يمكنك إجراء استدعاء API الفعلي
      console.log("بيانات التسجيل:", formData);

      // عرض رسالة نجاح أو إعادة التوجيه
      alert(t("register_success") || "تم إنشاء الحساب بنجاح!");
    } catch (error) {
      console.error("خطأ في التسجيل:", error);
      alert(t("register_error") || "حدث خطأ أثناء إنشاء الحساب");
    } finally {
      setIsLoading(false);
    }
  };

  // تبديل رؤية كلمة المرور
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // تبديل رؤية تأكيد كلمة المرور
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div
      className={`${styles.registerContainer} ${
        direction === "rtl" ? styles.rtl : styles.ltr
      }`}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-lg-10 col-xl-8">
            <div className={styles.registerWrapper}>
              {/* العمود الأيسر - الفورم */}
              <div
                className={`col-md-6 ${styles.formColumn} ${
                  direction === "rtl" ? styles.order2 : styles.order1
                }`}
              >
                <div className={styles.formWrapper}>
                  <div className={styles.registerCard}>
                    {/* الرأس */}
                    <div className={styles.registerHeader}>
                      <h2 className={styles.registerTitle}>
                        {t("create_account") || "إنشاء حساب جديد"}
                      </h2>
                      <p className={styles.registerSubtitle}>
                        {t("register_subtitle") ||
                          "انضم إلينا واستمتع بخدماتنا المتميزة"}
                      </p>
                    </div>

                    {/* النموذج */}
                    <form
                      onSubmit={handleSubmit}
                      className={styles.registerForm}
                    >
                      {/* حقل الاسم بالكامل */}
                      <div className={styles.formGroup}>
                        <label htmlFor="fullName" className={styles.formLabel}>
                          <FaUser className={styles.inputIcon} />
                          {t("full_name") || "الاسم بالكامل"}
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`${styles.formInput} ${
                            errors.fullName ? styles.inputError : ""
                          }`}
                          placeholder={
                            t("full_name_placeholder") || "أدخل اسمك بالكامل"
                          }
                        />
                        {errors.fullName && (
                          <div className={styles.errorMessage}>
                            {errors.fullName}
                          </div>
                        )}
                      </div>

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

                      {/* حقل كلمة المرور */}
                      <div className={styles.formGroup}>
                        <label htmlFor="password" className={styles.formLabel}>
                          <FaLock className={styles.inputIcon} />
                          {t("password") || "كلمة المرور"}
                        </label>
                        <div className={styles.inputContainer}>
                          <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`${styles.formInput} ${
                              errors.password ? styles.inputError : ""
                            }`}
                            placeholder={
                              t("password_placeholder") || "أدخل كلمة المرور"
                            }
                          />
                          <button
                            type="button"
                            className={styles.passwordToggle}
                            onClick={togglePasswordVisibility}
                            tabIndex="-1"
                          >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                          </button>
                        </div>
                        {errors.password && (
                          <div className={styles.errorMessage}>
                            {errors.password}
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
                          {t("confirm_password") || "تأكيد كلمة المرور"}
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
                              t("confirm_password_placeholder") ||
                              "أعد إدخال كلمة المرور"
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

                      {/* زر التسجيل */}
                      <button
                        type="submit"
                        className={`${styles.registerButton} ${
                          isLoading ? styles.loading : ""
                        }`}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <div className={styles.spinner}></div>
                            {t("creating_account") || "جاري إنشاء الحساب..."}
                          </>
                        ) : (
                          <>
                            {t("register") || "إنشاء حساب"}
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
                          {t("already_have_account") || "لديك حساب بالفعل؟"}
                        </span>
                        <a href="/login" className={styles.loginButton}>
                          {t("login") || "تسجيل الدخول"}
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

export default Register;
