import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa";
import styles from "./OTP.module.css";

const OTP = () => {
  const { t, i18n } = useTranslation("global");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const inputRefs = useRef([]);
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  // Auto focus على أول input عند فتح الصفحة
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  // معالجة تغيير القيم
  const handleChange = (index, value) => {
    // السماح فقط بالأرقام
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError("");

    // الانتقال للـ input التالي عند كتابة رقم
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // إذا تم ملء جميع الحقول، تحقق من الكود
    if (newOtp.every((digit) => digit !== "")) {
      handleVerify(newOtp.join(""));
    }
  };

  // معالجة الـ paste
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "");

    if (pastedData.length === 4) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);
      setError("");

      // Focus على آخر input
      inputRefs.current[3]?.focus();

      // تحقق من الكود
      handleVerify(pastedData);
    }
  };

  // معالجة الـ keydown
  const handleKeyDown = (index, e) => {
    // Backspace للرجوع للـ input السابق
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    // Enter للتحقق من الكود
    if (e.key === "Enter") {
      if (otp.every((digit) => digit !== "")) {
        handleVerify(otp.join(""));
      }
    }
  };

  // التحقق من صحة الكود
  const handleVerify = async (code) => {
    if (code.length !== 4) return;

    setIsLoading(true);
    setError("");

    try {
      // محاكاة استدعاء API للتحقق من الكود
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // محاكاة التحقق (يمكن تغييرها حسب منطق التطبيق)
      if (code === "1234") {
        setSuccess(true);
        console.log("OTP verified successfully:", code);
        // هنا يمكن إعادة التوجيه أو إجراء أي عمل آخر
        alert(t("otp_success") || "تم التحقق من الكود بنجاح!");
      } else {
        setError(t("otp_invalid") || "الكود غير صحيح");
        // مسح جميع الحقول عند الخطأ
        setOtp(["", "", "", ""]);
        inputRefs.current[0]?.focus();
      }
    } catch (error) {
      console.error("خطأ في التحقق من الكود:", error);
      setError(t("otp_error") || "حدث خطأ أثناء التحقق من الكود");
    } finally {
      setIsLoading(false);
    }
  };

  // إعادة إرسال الكود
  const handleResend = async () => {
    setIsLoading(true);
    setError("");
    setOtp(["", "", "", ""]);
    inputRefs.current[0]?.focus();

    try {
      // محاكاة إعادة إرسال الكود
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert(t("otp_resent") || "تم إعادة إرسال الكود");
    } catch (error) {
      console.error("خطأ في إعادة الإرسال:", error);
      setError(t("resend_error") || "حدث خطأ أثناء إعادة الإرسال");
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
      className={`${styles.otpContainer} ${
        direction === "rtl" ? styles.rtl : styles.ltr
      }`}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className={styles.otpWrapper}>
              {/* الرأس */}
              <div className={styles.otpHeader}>
                <button
                  className={styles.backButton}
                  onClick={handleBack}
                  type="button"
                >
                  <FaArrowLeft className={styles.backIcon} />
                </button>
                <h2 className={styles.otpTitle}>
                  {t("verify_otp") || "تحقق من الكود"}
                </h2>
                <p className={styles.otpSubtitle}>
                  {t("otp_subtitle") || "أدخل الكود المرسل إلى رقم هاتفك"}
                </p>
              </div>

              {/* حقول OTP */}
              <div className={styles.otpForm}>
                <div className={styles.otpInputs}>
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={handlePaste}
                      className={`${styles.otpInput} ${
                        error ? styles.inputError : ""
                      } ${success ? styles.inputSuccess : ""}`}
                      disabled={isLoading}
                    />
                  ))}
                </div>

                {/* رسائل الخطأ والنجاح */}
                {error && <div className={styles.errorMessage}>{error}</div>}

                {success && (
                  <div className={styles.successMessage}>
                    <FaCheck className={styles.successIcon} />
                    {t("otp_verified") || "تم التحقق بنجاح!"}
                  </div>
                )}

                {/* زر التحقق */}
                <button
                  type="button"
                  className={`${styles.verifyButton} ${
                    isLoading ? styles.loading : ""
                  }`}
                  onClick={() => handleVerify(otp.join(""))}
                  disabled={isLoading || !otp.every((digit) => digit !== "")}
                >
                  {isLoading ? (
                    <>
                      <div className={styles.spinner}></div>
                      {t("verifying") || "جاري التحقق..."}
                    </>
                  ) : (
                    <>
                      {t("verify") || "تحقق"}
                      <FaArrowRight className={styles.buttonIcon} />
                    </>
                  )}
                </button>

                {/* إعادة الإرسال */}
                <div className={styles.resendSection}>
                  <span className={styles.resendText}>
                    {t("didnt_receive_code") || "لم تستلم الكود؟"}
                  </span>
                  <button
                    type="button"
                    className={styles.resendButton}
                    onClick={handleResend}
                    disabled={isLoading}
                  >
                    {t("resend_code") || "إعادة إرسال"}
                  </button>
                </div>

                {/* العد التنازلي */}
                <div className={styles.countdown}>
                  <span className={styles.countdownText}>
                    {t("resend_in") || "يمكنك إعادة الإرسال خلال"} 30{" "}
                    {t("seconds") || "ثانية"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;
