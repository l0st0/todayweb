"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.tsx
var cms_exports = {};
__export(cms_exports, {
  AppLayout: () => AppLayout,
  theme: () => theme
});
module.exports = __toCommonJS(cms_exports);

// src/components/AppLayout/index.tsx
var import_react2 = __toESM(require("react"));
var import_icons_material3 = require("@mui/icons-material");
var import_material6 = require("@mui/material");

// src/components/Navigation/index.tsx
var import_material = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
var Navigation = ({
  open,
  items,
  checkActiveNav,
  onItemClick
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.List, { children: items.map(({ icon, name, path }) => {
    const active = checkActiveNav(path);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.Tooltip, { title: open ? "" : name, placement: "right", arrow: true, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.ListItem, { disablePadding: true, sx: { display: "block" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_material.ListItemButton,
      {
        sx: {
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5
        },
        selected: active,
        onClick: () => onItemClick(path),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_material.ListItemIcon,
            {
              sx: {
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center"
              },
              children: icon
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.ListItemText, { primary: name, sx: { opacity: open ? 1 : 0 } })
        ]
      }
    ) }) }, name);
  }) });
};

// src/components/TopBar/index.tsx
var import_icons_material2 = require("@mui/icons-material");
var import_material4 = require("@mui/material");

// src/components/SettingsMenu/index.tsx
var import_react = __toESM(require("react"));
var import_icons_material = require("@mui/icons-material");
var import_material2 = require("@mui/material");
var import_jsx_runtime2 = require("react/jsx-runtime");
var SettingsMenu = ({ items }) => {
  const [anchorEl, setAnchorEl] = import_react.default.useState(null);
  const handleClose = () => setAnchorEl(null);
  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_material2.IconButton,
      {
        size: "large",
        "aria-label": "account of current user",
        "aria-controls": "menu-appbar",
        "aria-haspopup": "true",
        onClick: handleMenu,
        color: "inherit",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons_material.AccountCircle, {})
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_material2.Menu,
      {
        id: "menu-appbar",
        anchorEl,
        open: Boolean(anchorEl),
        onClose: handleClose,
        keepMounted: true,
        children: items.map(({ icon, text, onClick }) => {
          const onMenuClick = () => {
            onClick();
            handleClose();
          };
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_material2.MenuItem, { onClick: onMenuClick, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material2.ListItemIcon, { children: icon }),
            text
          ] }, text);
        })
      }
    )
  ] });
};

// src/components/TopBar/styles.ts
var import_material3 = require("@mui/material");
var AppBar = (0, import_material3.styled)(import_material3.AppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme: theme2, open, drawerwidth }) => __spreadValues({
  zIndex: theme2.zIndex.drawer + 1,
  transition: theme2.transitions.create(["width", "margin"], {
    easing: theme2.transitions.easing.sharp,
    duration: theme2.transitions.duration.leavingScreen
  })
}, open && {
  marginLeft: drawerwidth,
  width: `calc(100% - ${drawerwidth}px)`,
  transition: theme2.transitions.create(["width", "margin"], {
    easing: theme2.transitions.easing.sharp,
    duration: theme2.transitions.duration.enteringScreen
  })
}));

// src/components/TopBar/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var TopBar = ({
  open,
  handleDrawerOpen,
  backButton,
  topBarHeading,
  drawerwidth,
  settingMenuItems
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(AppBar, { position: "fixed", open, drawerwidth, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_material4.Toolbar, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_material4.IconButton,
      {
        color: "inherit",
        "aria-label": "open drawer",
        onClick: handleDrawerOpen,
        edge: "start",
        sx: __spreadValues({
          marginRight: 5
        }, open && { display: "none" }),
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_icons_material2.Menu, {})
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_material4.Stack, { direction: "row", alignItems: "center", spacing: 2, color: "white", children: [
      backButton.show && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_material4.IconButton, { onClick: () => backButton.onClick(), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_icons_material2.ArrowBack, { fontSize: "small", sx: { color: "white" } }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_material4.Typography, { variant: "h6", noWrap: true, component: "div", children: topBarHeading })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_material4.Box, { sx: { flexGrow: 1 } }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SettingsMenu, { items: settingMenuItems })
  ] }) });
};

// src/components/AppLayout/styles.ts
var import_material5 = require("@mui/material");
var openedMixin = (theme2, drawerWidth) => ({
  width: drawerWidth,
  transition: theme2.transitions.create("width", {
    easing: theme2.transitions.easing.sharp,
    duration: theme2.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});
var closedMixin = (theme2) => ({
  transition: theme2.transitions.create("width", {
    easing: theme2.transitions.easing.sharp,
    duration: theme2.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme2.spacing(7)} + 1px)`,
  [theme2.breakpoints.up("sm")]: {
    width: `calc(${theme2.spacing(8)} + 1px)`
  }
});
var DrawerHeader = (0, import_material5.styled)("div")(({ theme: theme2 }) => __spreadValues({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme2.spacing(0, 2)
}, theme2.mixins.toolbar));
var Drawer = (0, import_material5.styled)(import_material5.Drawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme: theme2, open, drawerwidth }) => __spreadValues(__spreadValues({
  width: drawerwidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box"
}, open && __spreadProps(__spreadValues({}, openedMixin(theme2, drawerwidth)), {
  "& .MuiDrawer-paper": openedMixin(theme2, drawerwidth)
})), !open && __spreadProps(__spreadValues({}, closedMixin(theme2)), {
  "& .MuiDrawer-paper": closedMixin(theme2)
})));

// src/components/AppLayout/index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var AppLayout = ({
  children,
  logo,
  asPath,
  navigationItems,
  drawerwidth = 240,
  onNavigationItemClick,
  backButton,
  topBarHeading,
  settingMenuItems
}) => {
  const [open, setOpen] = import_react2.default.useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const checkActiveNav = (path) => path === asPath;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_material6.Box, { sx: { display: "flex", height: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      TopBar,
      {
        open,
        handleDrawerOpen,
        drawerwidth,
        topBarHeading,
        backButton,
        settingMenuItems
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Drawer, { variant: "permanent", open, drawerwidth, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(DrawerHeader, { children: [
        logo,
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_material6.IconButton, { onClick: handleDrawerClose, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_icons_material3.ChevronLeft, {}) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_material6.Divider, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        Navigation,
        {
          items: navigationItems,
          open,
          checkActiveNav,
          onItemClick: onNavigationItemClick
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      import_material6.Box,
      {
        component: "main",
        height: { xs: "calc(100% - 56px)", sm: "calc(100% - 64px)" },
        sx: {
          flexGrow: 1,
          p: 3
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(DrawerHeader, {}),
          children
        ]
      }
    )
  ] });
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
  AppLayout,
  theme
});
