import React from "react";
import { cmsEnStrings, cmsSkStrings } from "./locales";

export type CmsLocaleStrings = typeof cmsEnStrings;
export type CmsLocaleString = keyof CmsLocaleStrings;
export type CmsTranslateFunc = (string: CmsLocaleString) => string;
export type CmsCustomLocaleStrings = CmsLocaleStrings & {
  [key: string]: string;
};

export interface CmsContextProviderProps {
  locale?: "sk" | "en";
  customLocales?: {
    en?: CmsCustomLocaleStrings;
    sk?: CmsCustomLocaleStrings;
  };
}

export interface IContextProps {
  t: CmsTranslateFunc;
}

export const CmsContext = React.createContext({} as IContextProps);

export const CmsContextProvider = ({
  children,
  locale = "en",
  customLocales,
}: React.PropsWithChildren<CmsContextProviderProps>) => {
  const t = (string: CmsLocaleString) => {
    let enStrings = cmsEnStrings;
    let skStrings = cmsSkStrings;

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
