import {
  BackButton,
  DrawerWidth,
  SettingMenuItem,
  TopBarHeading,
} from "@/types";
import { ArrowBack, Menu } from "@mui/icons-material";
import { Box, IconButton, Stack, Toolbar, Typography } from "@mui/material";

import { SettingsMenu } from "../SettingsMenu";
import { AppBar } from "./styles";

interface TopBarProps {
  open: boolean;
  handleDrawerOpen: () => void;
  backButton: BackButton;
  topBarHeading: TopBarHeading;
  drawerwidth: DrawerWidth;
  settingMenuItems: SettingMenuItem[];
}

export const TopBar = ({
  open,
  handleDrawerOpen,
  backButton,
  topBarHeading,
  drawerwidth,
  settingMenuItems,
}: TopBarProps) => {
  return (
    <AppBar position="fixed" open={open} drawerwidth={drawerwidth}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <Menu />
        </IconButton>
        <Stack direction="row" alignItems="center" spacing={2} color="white">
          {backButton.show && (
            <IconButton onClick={() => backButton.onClick()}>
              <ArrowBack fontSize="small" sx={{ color: "white" }} />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div">
            {topBarHeading}
          </Typography>
        </Stack>

        <Box sx={{ flexGrow: 1 }} />
        <SettingsMenu items={settingMenuItems} />
      </Toolbar>
    </AppBar>
  );
};
