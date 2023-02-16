import { ArrowBack } from "@mui/icons-material";
import { IconButton, Stack, StackProps, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Portal } from "../Portal";

export interface TopBarHeadingProps extends StackProps {
  heading: string;
  showBackButton?: boolean;
  backButtonPath?: string;
}

export const TopBarHeading = ({
  heading,
  showBackButton,
  backButtonPath,
  ...rest
}: TopBarHeadingProps) => {
  const router = useRouter();

  const onBackButtonClick = () => {
    if (!backButtonPath) return router.back();
    return router.push(backButtonPath);
  };

  return heading ? (
    <Portal selector="#topBar-heading">
      <Stack direction="row" spacing={1} alignItems="center" {...rest}>
        {showBackButton && (
          <IconButton onClick={onBackButtonClick} color="inherit">
            <ArrowBack />
          </IconButton>
        )}

        <Typography variant="h6" noWrap component="div">
          {heading}
        </Typography>
      </Stack>
    </Portal>
  ) : null;
};
