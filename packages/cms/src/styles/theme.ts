import type {} from "@mui/lab/themeAugmentation";
import { ThemeOptions } from "@mui/material/styles";

export const theme: ThemeOptions = {
  palette: {
    primary: {
      main: "#64A0FA",
    },
  },
  typography: {
    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 500,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
          minHeight: "100vh",
        },
        body: {
          minHeight: "100%",
        },
        "#__next": {
          minHeight: "100%",
        },
      },
    },
    MuiLoadingButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
        variant: "standard",
        fullWidth: true,
      },
    },
    MuiStack: {
      defaultProps: {
        width: "100%",
      },
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
};
