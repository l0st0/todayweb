import { LoadingButton } from "@mui/lab";
import { Form, FormTextInput } from "@todayweb/cms";
import React from "react";
import { useForm } from "react-hook-form";

const FormPage = () => {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: { oldPassword: "", password: "", confirmPassword: "" },
  });

  return (
    <Form>
      <FormTextInput name="password" control={control} label="Staré heslo" />
      <FormTextInput
        name="confirmPassword"
        control={control}
        label="Staré heslo"
      />

      <LoadingButton fullWidth>Submit</LoadingButton>
    </Form>
  );
};

export default FormPage;
