import React from "react";
import { Button as MuiButton } from "@mui/material";

export const Button = ({ children }: React.PropsWithChildren) => {
  return <MuiButton variant="contained">{children}</MuiButton>;
};
