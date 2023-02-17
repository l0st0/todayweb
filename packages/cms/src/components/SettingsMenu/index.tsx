import React from "react";
import { AccountCircle } from "@mui/icons-material";
import { IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { SettingMenuItem } from "../../types";
import { useRouter } from "next/router";

interface SettingsMenuProps {
  items: SettingMenuItem[];
}

export const SettingsMenu = ({ items }: SettingsMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const router = useRouter();

  const handleClose = () => setAnchorEl(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);

  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        keepMounted
      >
        {items.map(({ icon, text, onClick, path }) => {
          const onMenuClick = () => {
            handleClose();

            if (onClick) {
              onClick();
            }

            if (path) {
              router.push(path);
            }
          };

          return (
            <MenuItem key={text} onClick={onMenuClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              {text}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
