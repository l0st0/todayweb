import React from "react";
import {
  AlertColor,
  IconProps,
  Typography,
  TypographyProps,
} from "@mui/material";
import { Center } from "../Center";

interface ResultProps extends React.ComponentProps<typeof Center> {
  text: string;
  icon: {
    element: JSX.Element;
    size?: number;
  };
  type: AlertColor;
  textProps?: TypographyProps;
}

export const Result = ({
  text,
  icon,
  children,
  type,
  textProps,
  ...rest
}: ResultProps) => {
  const iconSize = icon?.size || 58;

  const iconElement = React.cloneElement<IconProps>(icon.element, {
    color: type,
    sx: { width: iconSize, height: iconSize },
  });

  return (
    <Center spacing={2} {...rest}>
      {iconElement}
      <Typography variant="h5" {...textProps}>
        {text}
      </Typography>
      {children}
    </Center>
  );
};
