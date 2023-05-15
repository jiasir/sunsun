import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("zh")}>中文</button>
      <button onClick={() => changeLanguage("ja")}>日本語</button>
    </div>
  );
}
