import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useEffect } from "react";

//JSON 파일 import
import translationKo from "lang/ko.json";
import translationEn from "lang/en.json";

const resource = {
  //국가 코드와 JSON 파일 match
  ko: {
    translation: translationKo,
  },
  en: {
    translation: translationEn,
  },
};

i18n.use(initReactI18next).init({
  resources: resource,
  lng: "en", //default 국가 코드
  debug: true,
  keySeparator: false,
  interpolation: { escapeValue: false },
});

if (typeof window !== "undefined") {
  let language = localStorage.getItem("language");
  if (language !== null) i18n.changeLanguage(language);
}
//국가 코드를 변경하는 함수
export function changeLanguage() {
  i18n.changeLanguage(i18n.language === "ko" ? "en" : "ko");
  //브라우저 DB에 기록
  localStorage.setItem("language", i18n.language);
}

export default i18n;
