import React from "react";
import { enLocaleStrings, skLocaleStrings } from "./locales";

export type LocaleStrings = typeof enLocaleStrings;
export type LocaleString = keyof LocaleStrings;
export type Translate = (string: LocaleString) => string;

export interface CmsContextProviderProps {
  locale?: "sk" | "en";
  customLocales?: {
    en?: LocaleStrings;
    sk?: LocaleStrings;
  };
}

export interface IContextProps {
  t: Translate;
}

export const CmsContext = React.createContext({} as IContextProps);

export const CmsContextProvider = ({
  children,
  locale = "en",
  customLocales,
}: React.PropsWithChildren<CmsContextProviderProps>) => {
  const t = (string: LocaleString) => {
    let enStrings = enLocaleStrings;
    let skStrings = skLocaleStrings;

    if (customLocales) {
      if (customLocales.en) {
        enStrings = customLocales.en;
      }

      if (customLocales.sk) {
        skStrings = customLocales.sk;
      }
    }

    if (locale === "en") return enStrings[string] || string;
    if (locale === "sk") return skStrings[string] || string;

    return string;
  };

  const value = { t };

  return <CmsContext.Provider value={value}>{children}</CmsContext.Provider>;
};

export const useCmsState = () => React.useContext(CmsContext);
