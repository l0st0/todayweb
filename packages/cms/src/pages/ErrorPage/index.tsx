import Link from "next/link";
import { ErrorOutline } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Result } from "../../components/Result";
import { useCmsState } from "../../context";

export interface ErrorPageProps {
  backPath?: string;
}

export const ErrorPage = ({ backPath = "/auth/login" }: ErrorPageProps) => {
  const { t } = useCmsState();

  return (
    <Result
      icon={{
        element: <ErrorOutline />,
      }}
      text={t("loginError")}
      type="error"
      fullScreen
    >
      <Link href={backPath} legacyBehavior passHref>
        <Button color="warning">{t("tryAgain")}</Button>
      </Link>
    </Result>
  );
};
