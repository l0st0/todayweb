import { Box, BoxProps, Stack } from "@mui/material";

export interface FormContainerProps extends BoxProps {
  smWidth?: number;
}

export const FormContainer = ({
  children,
  onSubmit,
  smWidth = 364,
  ...rest
}: FormContainerProps) => {
  return (
    <Box
      component="form"
      noValidate
      onSubmit={onSubmit}
      width="100%"
      maxWidth={{ xs: "100%", sm: smWidth }}
      {...rest}
    >
      <Stack spacing={2}>{children}</Stack>
    </Box>
  );
};
