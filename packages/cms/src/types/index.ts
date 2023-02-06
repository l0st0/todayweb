export type OnNavigationItemClick = (path: string) => void;
export type TopBarHeading = string;
export type BackButton = {
  show: boolean;
  onClick: () => void;
};
export type DrawerWidth = number;

export interface NavigationItem {
  name: string;
  icon: JSX.Element;
  path: string;
}

export interface SettingMenuItem {
  icon: JSX.Element;
  text: string;
  onClick: () => void;
}
