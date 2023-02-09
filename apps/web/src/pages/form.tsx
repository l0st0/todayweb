import { LoadingButton } from "@mui/lab";
import { FormContainer, FormTextInput } from "@todayweb/cms";
import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: { oldPassword: "", password: "", confirmPassword: "" },
  });

  return (
    <FormContainer>
      <FormTextInput name="password" control={control} label="Staré heslo" />
      <FormTextInput
        name="confirmPassword"
        control={control}
        label="Staré heslo"
      />

      <LoadingButton fullWidth>Submit</LoadingButton>
    </FormContainer>
  );
};

export default Form;
