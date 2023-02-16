import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "../../components/Form";
import { FormTextInput } from "../../components/FormTextInput";
import { FormPasswordInput } from "../../components/FormPasswordInput";
import { Alert } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const scheme = z.object({
  email: z.string().email("Zadaj platný e-mail."),
  password: z.string().min(8, "Heslo musí obsahovať minimálne 8 znakov."),
});

type Form = z.infer<typeof scheme>;

export interface LoginFormProps {
  onSubmit: (values: Form) => void;
  isLoading: boolean;
  errorMessage?: string;
}

export const LoginForm = ({
  onSubmit,
  errorMessage,
  isLoading,
}: LoginFormProps) => {
  const { control, handleSubmit } = useForm<Form>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(scheme),
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)} px={{ xs: 2, sm: 0 }}>
      <FormTextInput
        control={control}
        name="email"
        required
        label="E-mail"
        autoComplete="email"
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Heslo"
        required
      />

      {!!errorMessage && <Alert severity="error">{errorMessage}</Alert>}

      <LoadingButton type="submit" loading={isLoading}>
        Prihlásiť
      </LoadingButton>
    </Form>
  );
};
