import React from "react";
import { ChevronLeft } from "@mui/icons-material";
import { Box, Divider, IconButton } from "@mui/material";

import { Navigation } from "../Navigation";
import { TopBar } from "../TopBar";
import { StyledDrawerHeader, StyledDrawer } from "./styles";
import {
  BackButton,
  DrawerWidth,
  NavigationItem,
  OnItemClick,
  SettingMenuItem,
  TopBarHeading,
} from "../../types";

export interface AdminLayoutProps {
  logo: JSX.Element;
  asPath: string;
  navigationItems: NavigationItem[];
  onNavigationItemClick: OnItemClick;
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
      <StyledDrawer variant="permanent" open={open} drawerwidth={drawerwidth}>
        <StyledDrawerHeader>
          {logo}
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </StyledDrawerHeader>
        <Divider />
        <Navigation
          items={navigationItems}
          open={open}
          checkActiveNav={checkActiveNav}
          onItemClick={onNavigationItemClick}
        />
      </StyledDrawer>

      <Box
        component="main"
        height="100%"
        sx={{
          flexGrow: 1,
          p: 4,
          mt: 8,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
