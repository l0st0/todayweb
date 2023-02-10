import { Home } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { HomeNavigation } from "@todayweb/cms";
import { navigationItems } from "../layouts/RootLayout";

export default function Web() {
  return (
    <Stack>
      <HomeNavigation
        items={navigationItems}
        logo={<Home sx={{ width: 200, height: 200 }} />}
      />
    </Stack>
  );
}
