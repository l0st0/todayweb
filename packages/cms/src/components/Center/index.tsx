import { Stack, StackProps } from "@mui/material";

export const Center = ({ height = "100%", children, ...rest }: StackProps) => {
  return (
    <Stack
      height={height}
      direction="column"
      justifyContent="center"
      alignItems="center"
      {...rest}
    >
      {children}
    </Stack>
  );
};
