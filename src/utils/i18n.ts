import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationCZ from "../locales/cz.json";

const SUPPORTED_LANGUAGES = {
  "cs": {
    translation: translationCZ,
    code: "cs",
  },
  "cs-CZ": {
    translation: translationCZ,
    code: "cs-CZ",
  },
};

i18n
  .use(initReactI18next)
  .init({
    debug: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    resources: SUPPORTED_LANGUAGES,
    react: {
      useSuspense: false,
    },
    fallbackLng: "cs",
  });

export default i18n;