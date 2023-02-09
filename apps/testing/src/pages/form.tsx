import { LoadingButton } from "@mui/lab";
import { Form, FormTextInput } from "@todayweb/cms";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const scheme = z.object({
  email: z.string().email("Zadaj platný e-mail."),
  password: z.string().min(8, "Heslo musí obsahovať minimálne 8 znakov."),
});

type Form = z.infer<typeof scheme>;

const FormPage = () => {
  const { control } = useForm({
    defaultValues: { email: "", password: "" },
  });

  return (
    <Form>
      <FormTextInput control={control} name="password" label="Staré heslo" />
      <FormTextInput control={control} name="email" label="Staré heslo" />

      <LoadingButton fullWidth>Submit</LoadingButton>
    </Form>
  );
};

export default FormPage;
