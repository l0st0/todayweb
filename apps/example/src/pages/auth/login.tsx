import { Typography } from "@mui/material";
import { Center, LoginPage, TopBarHeading } from "@todayweb/cms";
import Link from "next/link";
import React from "react";

const Login = () => {
  const [errMessage, setErrorMessage] = React.useState("");

  return (
    <>
      <TopBarHeading heading="Login page" showBackButton />

      <LoginPage
        errorMessage={errMessage}
        onSubmit={(values) => {
          console.log("values", values);
          setErrorMessage((prev) =>
            prev ? "" : "This is error message example."
          );
        }}
        isLoading={false}
      >
        <Typography pt={4} variant="h6">
          Login results
        </Typography>
        <Center height="auto" direction="row" spacing={2}>
          <Link href="/auth/verify">Verify</Link>
          <Link href="/auth/error">Error</Link>
        </Center>
      </LoginPage>
    </>
  );
};

export default Login;
