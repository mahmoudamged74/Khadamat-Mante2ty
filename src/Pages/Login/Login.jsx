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
import styles from "./Login.module.css";

const Login = () => {
  const { t, i18n } = useTranslation("global");
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
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

    if (!formData.password) {
      newErrors.password = t("password_required") || "كلمة المرور مطلوبة";
    } else if (formData.password.length < 6) {
      newErrors.password =
        t("password_min_length") || "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
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
      console.log("بيانات تسجيل الدخول:", formData);

      // عرض رسالة نجاح أو إعادة التوجيه
      alert(t("login_success") || "تم تسجيل الدخول بنجاح!");
    } catch (error) {
      console.error("خطأ في تسجيل الدخول:", error);
      alert(t("login_error") || "حدث خطأ أثناء تسجيل الدخول");
    } finally {
      setIsLoading(false);
    }
  };

  // تبديل رؤية كلمة المرور
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className={`${styles.loginContainer} ${
        direction === "rtl" ? styles.rtl : styles.ltr
      }`}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-lg-10 col-xl-8">
            <div className={styles.loginWrapper}>
              {/* العمود الأيسر - الفورم */}
              <div
                className={`col-md-6 ${styles.formColumn} ${
                  direction === "rtl" ? styles.order2 : styles.order1
                }`}
              >
                <div className={styles.formWrapper}>
                  <div className={styles.loginCard}>
                    {/* الرأس */}
                    <div className={styles.loginHeader}>
                      <h2 className={styles.loginTitle}>
                        {t("welcome_back") || "مرحباً بعودتك"}
                      </h2>
                      <p className={styles.loginSubtitle}>
                        {t("login_subtitle") || "سجل دخولك للوصول إلى حسابك"}
                      </p>
                    </div>

                    {/* النموذج */}
                    <form onSubmit={handleSubmit} className={styles.loginForm}>
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

                      {/* تذكرني ونسيت كلمة المرور */}
                      <div className={styles.formOptions}>
                        <div className={styles.rememberMe}>
                          <input
                            type="checkbox"
                            id="remember"
                            className={styles.checkbox}
                          />
                          <label
                            htmlFor="remember"
                            className={styles.checkboxLabel}
                          >
                            {t("remember_me") || "تذكرني"}
                          </label>
                        </div>
                        <a href="/reset-password" className={styles.forgotPassword}>
                          {t("forgot_password") || "نسيت كلمة المرور؟"}
                        </a>
                      </div>

                      {/* زر تسجيل الدخول */}
                      <button
                        type="submit"
                        className={`${styles.loginButton} ${
                          isLoading ? styles.loading : ""
                        }`}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <div className={styles.spinner}></div>
                            {t("logging_in") || "جاري تسجيل الدخول..."}
                          </>
                        ) : (
                          <>
                            {t("login") || "تسجيل الدخول"}
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

                      {/* رابط التسجيل */}
                      <div className={styles.registerLink}>
                        <span className={styles.registerText}>
                          {t("dont_have_account") || "ليس لديك حساب؟"}
                        </span>
                        <a href="/register" className={styles.registerButton}>
                          {t("create_account") || "إنشاء حساب جديد"}
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

export default Login;
