import { Home } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { HomePage } from "@todayweb/cms";
import { navigationItems } from "../layouts/RootLayout";

export default function Web() {
  return (
    <Stack>
      <HomePage
        items={navigationItems}
        logo={<Home sx={{ width: 200, height: 200 }} />}
      />
    </Stack>
  );
}
