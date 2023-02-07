import { Home } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { HomeNavigation, Result } from "@todayweb/cms";
import { useRouter } from "next/router";
import { navigationItems } from "../layouts/RootLayout";

export default function Web() {
  const router = useRouter();

  const onItemClick = (path: string) => router.push(path);

  return (
    <Stack>
      <HomeNavigation
        items={navigationItems}
        logo={<Home sx={{ width: 200, height: 200 }} />}
        onItemClick={onItemClick}
      />

      <Result
        text="Helloo"
        icon={{
          element: <Home />,
        }}
        type="error"
      />
      <Result
        text="Helloo"
        icon={{
          element: <Home />,
        }}
        type="error"
      />
      <Result
        text="Helloo"
        icon={{
          element: <Home />,
        }}
        type="error"
      />
      <Result
        text="Helloo"
        icon={{
          element: <Home />,
        }}
        type="error"
      />
      <Result
        text="Helloo"
        icon={{
          element: <Home />,
        }}
        type="error"
      />
      <Result
        text="Helloo"
        icon={{
          element: <Home />,
        }}
        type="error"
      />
      <Result
        text="Helloo"
        icon={{
          element: <Home />,
        }}
        type="error"
      />
      <Result
        text="Helloo"
        icon={{
          element: <Home />,
        }}
        type="error"
      />
      <Result
        text="Helloo"
        icon={{
          element: <Home />,
        }}
        type="error"
      />
      <Result
        text="Helloo"
        icon={{
          element: <Home />,
        }}
        type="error"
      />
      <Result
        text="Helloo"
        icon={{
          element: <Home />,
        }}
        type="error"
      />
    </Stack>
  );
}
