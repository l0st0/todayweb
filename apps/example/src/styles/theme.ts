import type {} from "@mui/lab/themeAugmentation";
import { skSK } from "@mui/material/locale";
import { createTheme } from "@mui/material/styles";
import { skSK as gridLang } from "@mui/x-data-grid";
import { theme as UiTheme } from "@todayweb/cms";
import { Raleway } from "@next/font/google";

export const raleway = Raleway({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const theme = createTheme(
  {
    ...UiTheme,
    palette: {
      primary: {
        main: "#64A0FA",
        contrastText: "#fff",
      },
    },
    typography: {
      ...UiTheme.typography,
      fontFamily: raleway.style.fontFamily,
    },
  },
  gridLang,
  skSK
);

export default theme;
