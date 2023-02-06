import React from "react";
import { ChevronLeft } from "@mui/icons-material";
import { Box, Divider, IconButton } from "@mui/material";

import { Navigation } from "../Navigation";
import { TopBar } from "../TopBar";
import { DrawerHeader, Drawer } from "./styles";
import {
  BackButton,
  DrawerWidth,
  NavigationItem,
  OnNavigationItemClick,
  SettingMenuItem,
  TopBarHeading,
} from "@/types";

export interface AdminLayoutProps {
  logo: JSX.Element;
  asPath: string;
  navigationItems: NavigationItem[];
  onNavigationItemClick: OnNavigationItemClick;
  topBarHeading: TopBarHeading;
  backButton: BackButton;
  settingMenuItems: SettingMenuItem[];
  drawerwidth?: DrawerWidth;
}

export const AppLayout = ({
  children,
  logo,
  asPath,
  navigationItems,
  drawerwidth = 240,
  onNavigationItemClick,
  backButton,
  topBarHeading,
  settingMenuItems,
}: React.PropsWithChildren<AdminLayoutProps>) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const checkActiveNav = (path: string) => path === asPath;

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <TopBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        drawerwidth={drawerwidth}
        topBarHeading={topBarHeading}
        backButton={backButton}
        settingMenuItems={settingMenuItems}
      />
      <Drawer variant="permanent" open={open} drawerwidth={drawerwidth}>
        <DrawerHeader>
          {logo}
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Navigation
          items={navigationItems}
          open={open}
          checkActiveNav={checkActiveNav}
          onItemClick={onNavigationItemClick}
        />
      </Drawer>

      <Box
        component="main"
        height={{ xs: "calc(100% - 56px)", sm: "calc(100% - 64px)" }}
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};
