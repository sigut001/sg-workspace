export interface NavItem {
  label: string;
  path: string;
  type: 'ContentPage' | 'ActionPage';
  icon?: string;
  categories?: { label: string; subNavItems: SubNavItem[] }[];
  ankers?: string[];
  meta?: {
    title: string;
    description: string;
  };
}

export interface SubNavItem {
  label: string;
  path: string;
  type: 'ContentPage' | 'ActionPage';
  icon?: string;
  ankers?: string[];
  meta?: {
    title: string;
    description: string;
  };
}
