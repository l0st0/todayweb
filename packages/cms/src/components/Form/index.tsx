import { Stack, StackProps } from "@mui/material";

export interface FormProps extends StackProps<"form"> {
  smWidth?: number;
}

export const Form = ({
  children,
  onSubmit,
  smWidth = 364,
  ...rest
}: FormProps) => {
  return (
    <Stack
      component="form"
      noValidate
      onSubmit={onSubmit}
      spacing={2}
      width="100%"
      maxWidth={{ xs: "100%", sm: smWidth }}
      {...rest}
    >
      {children}
    </Stack>
  );
};
