import { Typography } from "@mui/material";
import { Center } from "../../components/Center";
import { LoginForm, LoginFormProps } from "../../forms/LoginForm";

interface LoginPageProps extends LoginFormProps {}

export const LoginPage = ({
  errorMessage,
  isLoading,
  onSubmit,
}: LoginPageProps) => {
  return (
    <Center spacing={2} height="100vh">
      <Typography variant="h4">Prihlásiť sa</Typography>
      <LoginForm
        errorMessage={errorMessage}
        isLoading={isLoading}
        onSubmit={onSubmit}
      />
    </Center>
  );
};
