import React from 'react';
import { ThemeOptions } from '@mui/material/styles';

type OnNavigationItemClick = (path: string) => void;
type TopBarHeading = string;
type BackButton = {
    show: boolean;
    onClick: () => void;
};
type DrawerWidth = number;
interface NavigationItem {
    name: string;
    icon: JSX.Element;
    path: string;
}
interface SettingMenuItem {
    icon: JSX.Element;
    text: string;
    onClick: () => void;
}

interface AdminLayoutProps {
    logo: JSX.Element;
    asPath: string;
    navigationItems: NavigationItem[];
    onNavigationItemClick: OnNavigationItemClick;
    topBarHeading: TopBarHeading;
    backButton: BackButton;
    settingMenuItems: SettingMenuItem[];
    drawerwidth?: DrawerWidth;
}
declare const AppLayout: ({ children, logo, asPath, navigationItems, drawerwidth, onNavigationItemClick, backButton, topBarHeading, settingMenuItems, }: React.PropsWithChildren<AdminLayoutProps>) => JSX.Element;

declare const theme: ThemeOptions;

export { AdminLayoutProps, AppLayout, BackButton, DrawerWidth, NavigationItem, OnNavigationItemClick, SettingMenuItem, TopBarHeading, theme };
