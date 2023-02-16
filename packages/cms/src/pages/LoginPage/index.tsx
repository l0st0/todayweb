import { Typography } from "@mui/material";
import { Center } from "../../components/Center";
import { useCmsState } from "../../context";
import { LoginForm, LoginFormProps } from "../../forms/LoginForm";

interface LoginPageProps extends LoginFormProps {}

export const LoginPage = ({
  errorMessage,
  isLoading,
  onSubmit,
  children,
}: React.PropsWithChildren<LoginPageProps>) => {
  const { t } = useCmsState();

  return (
    <Center spacing={2} height="100vh">
      <Typography variant="h4" textAlign="center">
        {t("loginHeading")}
      </Typography>
      <LoginForm
        errorMessage={errorMessage}
        isLoading={isLoading}
        onSubmit={onSubmit}
      />
      {children}
    </Center>
  );
};
