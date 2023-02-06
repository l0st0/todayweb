import { Group, Home } from "@mui/icons-material";
import { AppLayout } from "@todayweb/cms";
import { useRouter } from "next/router";
import React from "react";

const navigationItems = [
  {
    name: "Domov",
    icon: <Home />,
    path: "/",
    hideInHome: true,
    roles: [],
  },
  {
    name: "Administrácia",
    icon: <Group />,
    path: "/administration",
    hideInHome: false,
    roles: ["admin"],
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

  const onNavigationItemClick = (path: string) => router.push(path);

  return (
    <AppLayout
      navigationItems={navigationItems}
      asPath={router.asPath}
      logo={<Home width={36} />}
      onNavigationItemClick={onNavigationItemClick}
      topBarHeading="Heading"
      settingMenuItems={settingMenuItems}
      backButton={{
        show: true,
        onClick: () => router.back(),
      }}
    >
      {children}
    </AppLayout>
  );
};

export default RootLayout;
