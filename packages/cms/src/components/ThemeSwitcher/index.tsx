import { Brightness4, Brightness7 } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useCmsState } from "../../context";

export const ThemeSwitcher = () => {
  const { mode, colorMode } = useCmsState();

  return (
    <IconButton onClick={colorMode.toggleColorMode} color="inherit">
      {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};
