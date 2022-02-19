import { createContext } from "react";
import ru from "./messages/ru";
import en from "./messages/en";

const LanguageContext = createContext();

const getInitialLanguage = () => {
  const lang = localStorage.getItem("lang");
  if (lang) {
    return lang;
  } else {
    return "en";
  }
};

export const initialState = {
  lang: getInitialLanguage(),
  value: getInitialLanguage() === "ru" ? ru : en,
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "changeLang": {
      localStorage.setItem("lang", action.payload);
      return {
        lang: action.payload,
        value: action.payload === "ru" ? ru : en,
      };
    }
    default:
      return state;
  }
};

export default LanguageContext;