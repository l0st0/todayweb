import { TextField, StandardTextFieldProps } from "@mui/material";
import {
  UseControllerProps,
  useController,
  FieldValues,
} from "react-hook-form";

export type FormTextInputProps<T extends FieldValues> = StandardTextFieldProps &
  UseControllerProps<T>;

export const FormTextInput = <T extends FieldValues>({
  control,
  name,
  ...rest
}: FormTextInputProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      error={!!error}
      helperText={error?.message}
      {...field}
      {...rest}
    />
  );
};
