import React from "react";
import { ChevronLeft, Menu } from "@mui/icons-material";
import { Box, Divider, IconButton, Stack } from "@mui/material";

import { Navigation } from "../Navigation";
import { SettingsMenu } from "../SettingsMenu";
import { StyledDrawerHeader, StyledDrawer } from "./styles";
import { NavigationItem, SettingMenuItem } from "../types";

export interface AdminLayoutProps {
  logo: JSX.Element;
  asPath: string;
  navigationItems: NavigationItem[];
  settingMenuItems: SettingMenuItem[];
  drawerwidth?: number;
  user?: string;
}

export const AppLayout = ({
  children,
  logo,
  asPath,
  navigationItems,
  drawerwidth = 240,
  user,
  settingMenuItems,
}: React.PropsWithChildren<AdminLayoutProps>) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const checkActiveNav = (path: string) => path === asPath;

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <StyledDrawer variant="permanent" open={open} drawerwidth={drawerwidth}>
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
        <Stack justifyContent="space-between" height="100%">
          <Navigation
            items={navigationItems}
            open={open}
            checkActiveNav={checkActiveNav}
          />

          <SettingsMenu items={settingMenuItems} open={open} user={user} />
        </Stack>
      </StyledDrawer>

      <Box
        component="main"
        height="100%"
        sx={{
          flexGrow: 1,
          p: 4,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
