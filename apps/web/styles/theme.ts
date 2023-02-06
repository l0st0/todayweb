import type {} from "@mui/lab/themeAugmentation";
import { skSK } from "@mui/material/locale";
import { createTheme } from "@mui/material/styles";
import { skSK as gridLang } from "@mui/x-data-grid";
import { theme as Ttheme } from "@todayweb/cms";

const theme = createTheme({ ...Ttheme }, gridLang, skSK);

export default theme;
