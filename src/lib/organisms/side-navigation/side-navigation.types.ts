export interface AcSideNavItem {
  label: string;
  href?: string;
  active?: boolean;
}

export interface AcSideNavigationConfig {
  items: AcSideNavItem[];
}
