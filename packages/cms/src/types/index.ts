export type DrawerWidth = number;
export type OnItemClick = (path: string) => void;
export type TopBarHeading = string;
export type BackButton = {
  show: boolean;
  onClick: () => void;
};

export interface NavigationItem {
  name: string;
  icon: JSX.Element;
  path: string;
  hideInHome: boolean;
}

export interface SettingMenuItem {
  icon: JSX.Element;
  text: string;
  onClick: () => void;
}