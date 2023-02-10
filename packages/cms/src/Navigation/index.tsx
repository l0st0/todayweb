import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import Link from "next/link";
import { NavigationItem } from "../types";

export interface NavigationProps {
  open: boolean;
  items: NavigationItem[];
  checkActiveNav: (path: string) => boolean;
}

export const Navigation = ({
  open,
  items,
  checkActiveNav,
}: NavigationProps) => {
  return (
    <List>
      {items.map(({ icon, name, path }) => {
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
                  <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          </Link>
        );
      })}
    </List>
  );
};
