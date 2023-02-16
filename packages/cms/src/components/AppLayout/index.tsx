import React from "react";
import { ChevronLeft, Menu } from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Tooltip,
} from "@mui/material";

import { SettingsMenu } from "../SettingsMenu";
import { StyledDrawerHeader, StyledDrawer, StyledAppBar } from "./styles";
import { NavigationItem, SettingMenuItem } from "../../types";
import Link from "next/link";
import { ThemeSwitcher } from "../ThemeSwitcher";

export interface AdminLayoutProps {
  logo: JSX.Element;
  asPath: string;
  navigationItems: NavigationItem[];
  settingMenuItems: SettingMenuItem[];
  drawerwidth?: number;
}

export const AppLayout = ({
  children,
  logo,
  asPath,
  navigationItems,
  drawerwidth = 240,
  settingMenuItems,
}: React.PropsWithChildren<AdminLayoutProps>) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const checkActiveNav = (path: string) => path === asPath;

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <StyledAppBar position="fixed" open={open} drawerwidth={drawerwidth}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: { xs: 1, sm: 3 },
              ...(open && { display: "none" }),
            }}
          >
            <Menu />
          </IconButton>

          <div id="topBar-heading" />
          <Box sx={{ flexGrow: 1 }} />

          <ThemeSwitcher />
          <SettingsMenu items={settingMenuItems} />
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer
        variant="permanent"
        open={open}
        drawerwidth={drawerwidth}
        sx={{ display: !open ? { xs: "none", sm: "flex" } : "flex" }}
      >
        <StyledDrawerHeader
          sx={{
            ml: 1,
            ...(open && { display: "none" }),
          }}
        >
          <IconButton
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <Menu />
          </IconButton>
        </StyledDrawerHeader>

        <StyledDrawerHeader
          sx={{
            ...(!open && { display: "none" }),
          }}
        >
          {logo}
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </StyledDrawerHeader>
        <Divider />

        <List>
          {navigationItems.map(({ icon, name, path }) => {
            const active = checkActiveNav(path);

            return (
              <Link key={name} legacyBehavior href={path}>
                <Tooltip
                  key={name}
                  title={open ? "" : name}
                  placement="right"
                  arrow
                >
                  <ListItem disablePadding sx={{ display: "block" }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                      selected={active}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={name}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </ListItem>
                </Tooltip>
              </Link>
            );
          })}
        </List>
      </StyledDrawer>

      <Box
        component="main"
        height="100%"
        sx={{
          flexGrow: 1,
          p: 4,
        }}
      >
        <StyledDrawerHeader />
        {children}
      </Box>
    </Box>
  );
};
