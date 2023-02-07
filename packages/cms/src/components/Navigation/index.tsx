import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { NavigationItem, OnItemClick } from "../../types";

export interface NavigationProps {
  open: boolean;
  items: NavigationItem[];
  checkActiveNav: (path: string) => boolean;
  onItemClick: OnItemClick;
}

export const Navigation = ({
  open,
  items,
  checkActiveNav,
  onItemClick,
}: NavigationProps) => {
  return (
    <List>
      {items.map(({ icon, name, path }) => {
        const active = checkActiveNav(path);

        return (
          <Tooltip key={name} title={open ? "" : name} placement="right" arrow>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                selected={active}
                onClick={() => onItemClick(path)}
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
                <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </Tooltip>
        );
      })}
    </List>
  );
};
