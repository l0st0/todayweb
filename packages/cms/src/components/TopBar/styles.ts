import { DrawerWidth } from "../../types";
import { AppBar, AppBarProps, styled } from "@mui/material";
import { StyledComponent } from "@emotion/styled";

interface StyledAppBarProps extends AppBarProps {
  open?: boolean;
  drawerwidth: DrawerWidth;
}

export const StyledAppBar: StyledComponent<StyledAppBarProps> = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<StyledAppBarProps>(({ theme, open, drawerwidth }) => ({
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
