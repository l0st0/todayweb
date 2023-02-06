import { DrawerWidth } from "@/types";
import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  styled,
} from "@mui/material";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerwidth: DrawerWidth;
}

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open, drawerwidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerwidth,
    width: `calc(100% - ${drawerwidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
