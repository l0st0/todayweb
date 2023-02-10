import Link from "next/link";
import { Center } from "../Center";
import { Button } from "@mui/material";
import { NavigationItem } from "../types";

interface HomeNavigationProps {
  logo: JSX.Element;
  items: NavigationItem[];
}

export const HomeNavigation = ({ items, logo }: HomeNavigationProps) => {
  return (
    <Center justifyContent="flex-start" spacing={4}>
      {logo}

      <Center direction="row" flexWrap="wrap" height="auto">
        {items
          .filter((item) => !item.hideInHome)
          .map(({ name, path }) => (
            <Link key={name} legacyBehavior href={path}>
              <Button
                key={name}
                sx={{ maxWidth: 200, width: "100%", mr: 1, mb: 1 }}
              >
                {name}
              </Button>
            </Link>
          ))}
      </Center>
    </Center>
  );
};
