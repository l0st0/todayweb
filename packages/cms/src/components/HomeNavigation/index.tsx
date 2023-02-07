import { Center } from "../Center";
import { Button } from "@mui/material";
import { NavigationItem, OnItemClick } from "../../types";

interface HomeNavigationProps {
  logo: JSX.Element;
  items: NavigationItem[];
  onItemClick: OnItemClick;
}

export const HomeNavigation = ({
  items,
  logo,
  onItemClick,
}: HomeNavigationProps) => {
  return (
    <Center justifyContent="flex-start" spacing={4}>
      {logo}

      <Center direction="row" flexWrap="wrap" height="auto">
        {items
          .filter((item) => !item.hideInHome)
          .map(({ name, path }) => (
            <Button
              key={name}
              onClick={() => onItemClick(path)}
              sx={{ maxWidth: 200, width: "100%", mr: 1, mb: 1 }}
            >
              {name}
            </Button>
          ))}
      </Center>
    </Center>
  );
};
