import { Stack, StackProps } from "@mui/material";

export const DataGridToolBar = ({ children, ...rest }: StackProps) => (
  <Stack
    component="div"
    direction="row"
    spacing={2}
    mb={2}
    alignItems="center"
    {...rest}
  >
    {children}
  </Stack>
);
