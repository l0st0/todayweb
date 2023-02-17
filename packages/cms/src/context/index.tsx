import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import {
  CmsCustomLocales,
  CmsLocale,
  CmsLocaleString,
  CmsTranslateFunc,
  getLocaleString,
} from "./locale";
import { skSK as gridLang } from "@mui/x-data-grid";
import { skSK } from "@mui/material/locale";

export interface CmsContextProviderProps {
  locale?: CmsLocale;
  customLocales?: CmsCustomLocales;
  theme: (mode: PaletteMode) => ThemeOptions;
}

export interface IContextProps {
  t: CmsTranslateFunc;
  topBarHeight: number;
  mode: PaletteMode;
  colorMode: {
    toggleColorMode: () => void;
  };
}

export const CmsContext = React.createContext({} as IContextProps);

export const CmsContextProvider = ({
  children,
  locale = "en",
  customLocales,
  theme,
}: React.PropsWithChildren<CmsContextProviderProps>) => {
  const [mode, setMode] = React.useState<PaletteMode>("light");

  React.useEffect(() => {
    if (!localStorage.getItem("theme")) {
      return localStorage.setItem("theme", mode);
    }

    return setMode(localStorage.getItem("theme") as PaletteMode);
  }, []);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          localStorage.setItem("theme", newMode);
          return newMode;
        });
      },
    }),
    [],
  );

  const themeMode = React.useMemo(
    () => createTheme(theme(mode), gridLang, skSK),
    [mode],
  );

  const t = (str: CmsLocaleString, variables?: string[]) =>
    getLocaleString({ str, variables, customLocales, locale });

  const value = { t, topBarHeight: 128, mode, colorMode };

  return (
    <CmsContext.Provider value={value}>
      <ThemeProvider theme={themeMode}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CmsContext.Provider>
  );
};

export const useCmsState = () => React.useContext(CmsContext);
