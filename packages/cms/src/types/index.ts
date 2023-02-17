export interface NavigationItem {
  name: string;
  icon: JSX.Element;
  path: string;
  hideInHome: boolean;
}

export interface SettingMenuItem {
  icon: JSX.Element;
  text: string;
  path?: string;
  onClick?: () => void;
}
