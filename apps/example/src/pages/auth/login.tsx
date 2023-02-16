import { LoginPage } from "@todayweb/cms";
import React from "react";

const Login = () => {
  return (
    <LoginPage
      errorMessage={""}
      onSubmit={(values) => console.log("values", values)}
      isLoading={false}
    />
  );
};

export default Login;
