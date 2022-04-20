export interface SideNavigationRoute {
  path: string;
  name: string;
  isActive: boolean;
  children?: SideNavigationRoute[];
}
