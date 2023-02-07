import { Group, Home, AbcSharp } from "@mui/icons-material";
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
    name: "Result",
    icon: <Group />,
    path: "/result",
    hideInHome: false,
  },
  {
    name: "Normal",
    icon: <AbcSharp />,
    path: "/normal",
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
      logo={<Home width={36} />}
      settingMenuItems={settingMenuItems}
    >
      {children}
    </AppLayout>
  );
};

export default RootLayout;
