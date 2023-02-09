import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  Input,
  InputAdornment,
  IconButton,
  InputProps,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import React from "react";
import {
  UseControllerProps,
  useController,
  FieldValues,
} from "react-hook-form";

type FormPasswordInputProps<T extends FieldValues> = InputProps &
  UseControllerProps<T> & {
    label?: string;
  };

export const FormPasswordInput = <T extends FieldValues>({
  control,
  name,
  label,
  id,
  ...rest
}: FormPasswordInputProps<T>) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const inputId = id || name;

  return (
    <FormControl variant="standard">
      <InputLabel htmlFor={inputId} error={!!error}>
        {label}
      </InputLabel>
      <Input
        id={inputId}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        error={!!error}
        {...field}
        {...rest}
      />
      <FormHelperText error={!!error}>{error?.message}</FormHelperText>
    </FormControl>
  );
};
