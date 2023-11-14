// i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en.json";
import translationZH from "./locales/zh.json";
import translationJA from "./locales/ja.json";

const resources = {
  en: {
    translation: translationEN,
  },
  zh: {
    translation: translationZH,
  },
  ja: {
    translation: translationJA,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en", // fall back language
  interpolation: {
    escapeValue: false, // do not escape react variables
  },
});

export default i18n;
