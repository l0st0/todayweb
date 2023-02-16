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
export type CmsCustomLocales = {
  en?: CmsCustomLocaleStrings;
  sk?: CmsCustomLocaleStrings;
};
export type CmsLocale = "sk" | "en";

interface GetStringParams {
  str: CmsLocaleString;
  variables?: string[];
  customLocales?: CmsCustomLocales;
  locale: CmsLocale;
}

export const getLocaleString = ({
  str,
  variables = [],
  customLocales,
  locale,
}: GetStringParams) => {
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
