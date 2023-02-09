import { LoadingButton } from "@mui/lab";
import { Form, FormPasswordInput, FormTextInput } from "@todayweb/cms";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const scheme = z.object({
  email: z.string().email("Zadaj platný e-mail."),
  password: z.string().min(8, "Heslo musí obsahovať minimálne 8 znakov."),
});

type Form = z.infer<typeof scheme>;

const FormPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(scheme),
  });

  return (
    <Form
      onSubmit={handleSubmit((values) => {
        console.log(values);
      })}
    >
      <FormTextInput control={control} name="email" label="Staré heslo" />
      <FormPasswordInput
        control={control}
        name="password"
        label="Staré heslo"
      />

      <LoadingButton fullWidth type="submit">
        Submit
      </LoadingButton>
    </Form>
  );
};

export default FormPage;
