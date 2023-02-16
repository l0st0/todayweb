import React from "react";
import { localeStrings } from "./locales";

export type CmsLocaleStrings = typeof localeStrings.en;
export type CmsLocaleString = keyof CmsLocaleStrings;
export type CmsTranslateFunc = (
  str: CmsLocaleString,
  variables?: string[]
) => string;
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
  topBarHeight: number;
}

export const CmsContext = React.createContext({} as IContextProps);

export const CmsContextProvider = ({
  children,
  locale = "en",
  customLocales,
}: React.PropsWithChildren<CmsContextProviderProps>) => {
  const topBarHeight = 128;

  const t = (str: CmsLocaleString, variables?: string[]) => {
    let strings = customLocales?.[locale]
      ? customLocales[locale]
      : localeStrings[locale];

    if (!strings) return str;

    let string = strings[str];
    if (!string) return str;
    if (!variables?.length) return string;

    variables.map((item, index) => {
      string = string.replace(`{${index}}`, item);
    });

    return string;
  };

  const value = { t, topBarHeight };

  return <CmsContext.Provider value={value}>{children}</CmsContext.Provider>;
};

export const useCmsState = () => React.useContext(CmsContext);
