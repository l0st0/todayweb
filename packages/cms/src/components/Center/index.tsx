import { Stack, StackProps } from "@mui/material";
import { useCmsState } from "../../context";

interface CenterProps extends StackProps {
  fullScreen?: boolean;
}

export const Center = ({ fullScreen, children, ...rest }: CenterProps) => {
  const { topBarHeight } = useCmsState();

  return (
    <Stack
      height={fullScreen ? `calc(100vh - ${topBarHeight}px)` : "100%"}
      direction="column"
      justifyContent="center"
      alignItems="center"
      {...rest}
    >
      {children}
    </Stack>
  );
};
