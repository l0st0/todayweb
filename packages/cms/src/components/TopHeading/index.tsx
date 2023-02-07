import { ArrowBack } from "@mui/icons-material";
import { IconButton, Stack, StackProps, Typography } from "@mui/material";
import { useRouter } from "next/router";

export interface TopHeadingProps extends StackProps {
  heading: string;
  showBackButton?: boolean;
  backButtonPath?: string;
}

export const TopHeading = ({
  heading,
  showBackButton,
  backButtonPath,
  ...rest
}: TopHeadingProps) => {
  const router = useRouter();

  const onBackButtonClick = () => {
    if (!backButtonPath) return router.back();
    return router.push(backButtonPath);
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" mb={4} {...rest}>
      {showBackButton && (
        <IconButton onClick={onBackButtonClick}>
          <ArrowBack />
        </IconButton>
      )}

      <Typography variant="h4">{heading}</Typography>
    </Stack>
  );
};
