import { theme as UiTheme } from "@todayweb/cms";
import { Raleway } from "@next/font/google";
import { PaletteMode, ThemeOptions } from "@mui/material";

export const raleway = Raleway({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const theme = (mode: PaletteMode): ThemeOptions => ({
  ...UiTheme,
  palette: {
    mode,
    primary: {
      main: "#64A0FA",
      contrastText: "#fff",
    },
  },
  typography: {
    ...UiTheme.typography,
    fontFamily: raleway.style.fontFamily,
  },
});

export default theme;
