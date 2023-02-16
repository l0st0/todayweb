import { GitHub } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Center, HomePage } from "@todayweb/cms";
import { navigationItems } from "../layouts/RootLayout";

export default function Web() {
  return (
    <>
      <HomePage
        items={navigationItems}
        logo={<img src="/logo.png" width={512} />}
      />

      <Center mt={2}>
        <Button
          component="a"
          href="https://github.com/l0st0/todayweb"
          variant="text"
          startIcon={<GitHub />}
          target="_blank"
        >
          Check the code
        </Button>
      </Center>
    </>
  );
}
