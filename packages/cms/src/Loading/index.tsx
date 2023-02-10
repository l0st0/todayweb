import React from "react";
import { CircularProgress } from "@mui/material";
import { Center } from "../Center";

export interface LoadingProps extends React.ComponentProps<typeof Center> {
  size?: number;
}

export const Loading = ({ size = 24, ...rest }: LoadingProps) => {
  return (
    <Center {...rest}>
      <CircularProgress size={size} />
    </Center>
  );
};
