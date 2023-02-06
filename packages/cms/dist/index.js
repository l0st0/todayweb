"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.tsx
var todayweb_ui_cms_exports = {};
__export(todayweb_ui_cms_exports, {
  Button: () => Button,
  theme: () => theme
});
module.exports = __toCommonJS(todayweb_ui_cms_exports);

// src/Button.tsx
var import_material = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Button, { variant: "contained", children });
};

// src/styles/theme.ts
var theme = {
  palette: {
    primary: {
      main: "#64A0FA"
    }
  },
  typography: {
    h1: {
      fontWeight: 500
    },
    h2: {
      fontWeight: 500
    },
    h3: {
      fontWeight: 500
    },
    h4: {
      fontWeight: 500
    },
    h5: {
      fontWeight: 500
    },
    h6: {
      fontWeight: 500
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
          minHeight: "100vh"
        },
        body: {
          height: "100%"
        },
        "#__next": {
          height: "100%"
        }
      }
    },
    MuiLoadingButton: {
      defaultProps: {
        variant: "contained"
      }
    },
    MuiButton: {
      defaultProps: {
        variant: "contained"
      }
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
        variant: "standard",
        fullWidth: true
      }
    },
    MuiStack: {
      defaultProps: {
        width: "100%"
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  theme
});
