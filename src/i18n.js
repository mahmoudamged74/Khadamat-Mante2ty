import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import enGlobal from "../public/translations/en/global.json";
import arGlobal from "../public/translations/ar/global.json";

const resources = {
  en: {
    global: enGlobal,
  },
  ar: {
    global: arGlobal,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ar", // اللغة العربية كلغة افتراضية
  fallbackLng: "ar", // اللغة الاحتياطية
  debug: false,

  interpolation: {
    escapeValue: false, // React already does escaping
  },

  // Namespace configuration
  defaultNS: "global",
  ns: ["global"],

  // Language detection
  detection: {
    order: ["localStorage", "navigator", "htmlTag"],
    caches: ["localStorage"],
  },
});

// Set RTL direction based on language
const setRTL = (lng) => {
  const html = document.documentElement;
  if (lng === "ar") {
    html.setAttribute("dir", "rtl");
    html.setAttribute("lang", "ar");
  } else {
    html.setAttribute("dir", "ltr");
    html.setAttribute("lang", "en");
  }
};

// Set initial RTL
setRTL(i18n.language);

// Listen for language changes
i18n.on("languageChanged", (lng) => {
  setRTL(lng);
});

export default i18n;
