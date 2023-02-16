import { CheckCircleOutline } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Result } from "../../components/Result";
import { useCmsState } from "../../context";

export interface VerifyEmailPageProps {
  emailProvider: string;
}

export const VerifyEmailPage = ({ emailProvider }: VerifyEmailPageProps) => {
  const { t } = useCmsState();

  return (
    <Result
      icon={{
        element: <CheckCircleOutline />,
      }}
      text="Prihlasovací link bol odoslaný na tvoj e-mail"
      type="success"
      fullScreen
    >
      <Button component="a" variant="text" href={`https://${emailProvider}`}>
        {t("goToPage", [emailProvider])}
      </Button>
    </Result>
  );
};
