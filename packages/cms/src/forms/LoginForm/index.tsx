import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "../../components/Form";
import { FormTextInput } from "../../components/FormTextInput";
import { FormPasswordInput } from "../../components/FormPasswordInput";
import { Alert } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Translate, useCmsState } from "../../context";

export interface LoginFormProps {
  onSubmit: (values: Form) => void;
  isLoading: boolean;
  errorMessage?: string;
}

const scheme = (t?: Translate) =>
  z.object({
    email: z.string().email(t && t("emailError")),
    password: z.string().min(8, t && t("passwordError")),
  });

const rawScheme = scheme();
type Form = z.infer<typeof rawScheme>;

export const LoginForm = ({
  onSubmit,
  errorMessage,
  isLoading,
}: LoginFormProps) => {
  const { t } = useCmsState();

  const { control, handleSubmit } = useForm<Form>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(scheme(t)),
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)} px={{ xs: 2, sm: 0 }}>
      <FormTextInput
        control={control}
        name="email"
        required
        label={t("email")}
        autoComplete="email"
      />

      <FormPasswordInput
        control={control}
        name="password"
        label={t("password")}
        required
      />

      {!!errorMessage && <Alert severity="error">{errorMessage}</Alert>}

      <LoadingButton type="submit" loading={isLoading}>
        {t("login")}
      </LoadingButton>
    </Form>
  );
};
