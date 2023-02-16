import * as React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import createEmotionCache from "../styles/createEmotionCache";
import theme from "../styles/theme";
import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import RootLayout from "../layouts/RootLayout";
import {
  CmsContextProvider,
  localeStrings,
  CmsCustomLocaleStrings,
} from "@todayweb/cms";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const en: CmsCustomLocaleStrings = {
  ...localeStrings.en,
  login: "Login to admin",
};

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Admin</title>
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CmsContextProvider customLocales={{ en }}>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </CmsContextProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
