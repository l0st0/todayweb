import { Home, Login } from "@mui/icons-material";
import { AppLayout } from "@todayweb/cms";
import { useRouter } from "next/router";
import React from "react";

export const navigationItems = [
  {
    name: "Domov",
    icon: <Home />,
    path: "/",
    hideInHome: true,
  },
  {
    name: "Login",
    icon: <Login />,
    path: "/auth/login",
    hideInHome: false,
  },
];

const settingMenuItems = [
  {
    icon: <Home fontSize="small" />,
    text: "Home",
    onClick: () => console.log("hi"),
  },
];

const RootLayout = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();
  return (
    <AppLayout
      navigationItems={navigationItems}
      asPath={router.asPath}
      logo={<img src="/minilogo.png" width={52} />}
      settingMenuItems={settingMenuItems}
    >
      {children}
    </AppLayout>
  );
};

export default RootLayout;
