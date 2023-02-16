import Link from "next/link";
import { Center } from "../../components/Center";
import { Button } from "@mui/material";
import { NavigationItem } from "../../types";

interface HomePageProps {
  logo: JSX.Element;
  items: NavigationItem[];
}

export const HomePage = ({ items, logo }: HomePageProps) => {
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
