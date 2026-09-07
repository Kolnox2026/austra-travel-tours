export type NavLink = {
  label: string;
  href: string;
  badge?: string;
};

export const serviceLinks: NavLink[] = [
  { label: 'Travel & Tours', href: '/travel-tours/' },
  { label: 'Study Abroad', href: '/study-abroad/' },
  { label: 'Visa Support', href: '/visa-support/' },
  { label: 'Conferences & Business', href: '/conferences-business-travel/' },
  { label: 'Work Abroad', href: '/work-abroad/' },
];

export const primaryNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Our Promise', href: '/our-promise/' },
  { label: 'About Us', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export const footerServiceLinks: NavLink[] = [
  { label: 'Travel & Tourism', href: '/travel-tours/' },
  { label: 'Education & Scholarship Support', href: '/study-abroad/' },
  { label: 'Visa & Immigration Support', href: '/visa-support/' },
  { label: 'Conference & Business Travel', href: '/conferences-business-travel/' },
  { label: 'International Employment Mobility', href: '/work-abroad/' },
];

export const footerCompanyLinks: NavLink[] = [
  { label: 'About Us', href: '/about/' },
  { label: 'Our Promise & Trust', href: '/our-promise/' },
  { label: 'Contact', href: '/contact/' },
];
