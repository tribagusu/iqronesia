export type TWebNav = {
  title: string;
  menu: TMenu[];
};

export type TMenu = {
  title: string;
  href: string;
};

export type TDropdownMenu = {
  nav: string;
  // menu: TMenu[];
};
