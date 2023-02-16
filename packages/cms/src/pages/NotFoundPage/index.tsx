import { useRouter } from "next/router";
import { ErrorOutline } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { Result } from "../../components/Result";
import { useCmsState } from "../../context";

export interface NotFoundPageProps {
  isLoggedIn: boolean;
}

export const NotFoundPage = ({ isLoggedIn }: NotFoundPageProps) => {
  const { t } = useCmsState();
  const router = useRouter();

  return (
    <Result
      type="error"
      text={t("notFoundResultText")}
      icon={{
        element: <ErrorOutline />,
      }}
      fullScreen
    >
      <Stack direction="row" spacing={2} width="auto">
        <Button onClick={() => router.back()}>{t("back")}</Button>
        {isLoggedIn ? (
          <Button onClick={() => router.push("/")}>{t("admin")}</Button>
        ) : (
          <Button onClick={() => router.push("/auth/login")}>
            {t("login")}
          </Button>
        )}
      </Stack>
    </Result>
  );
};
