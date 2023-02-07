import React from "react";
import { AccountBoxRounded } from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
} from "@mui/material";
import { SettingMenuItem } from "../../types";

interface SettingsMenuProps {
  open: boolean;
  items: SettingMenuItem[];
  email?: string;
}

export const SettingsMenu = ({ items, open, email }: SettingsMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClose = () => setAnchorEl(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  return (
    <Box>
      <Divider />
      <Tooltip
        title={open ? "" : email || "Nastavenia"}
        placement="right"
        arrow
      >
        <Stack
          justifyContent="flex-start"
          direction="row"
          alignItems="center"
          ml={1}
          my={1}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountBoxRounded color="primary" />
          </IconButton>

          {open && <span>{email || "Nastavenia"}</span>}
        </Stack>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        {items.map(({ icon, text, onClick }) => {
          const onMenuClick = () => {
            onClick();
            handleClose();
          };

          return (
            <MenuItem key={text} onClick={onMenuClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              {text}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};
