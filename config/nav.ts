import { type TWebNav, TDropdownMenu, TMenu } from "@/lib/types";

export const webNavData: TWebNav[] = [
  {
    title: "ABOUT",
    menu: [
      {
        title: "History",
        href: "/history",
      },
      {
        title: "Organisation",
        href: "/organisation",
      },
      {
        title: "Contact",
        href: "/contact",
      },
      {
        title: "Iqro Centre Perth",
        href: "/iqrocentreperth",
      },
    ],
  },
  {
    title: "PROGRAM",
    menu: [
      {
        title: "Da'wah",
        href: "/dawah",
      },
      {
        title: "Fundraising",
        href: "/fundraising",
      },
      {
        title: "Sisterhood",
        href: "/sisterhood",
      },
      {
        title: "Social and Welfare",
        href: "/social-and-welfare",
      },
      {
        title: "Sport and Leisure",
        href: "/sport-and-leisure",
      },
    ],
  },
  {
    title: "NEWS",
    menu: [
      {
        title: "News",
        href: "/news",
      },
      {
        title: "Media",
        href: "/media",
      },
    ],
  },
  {
    title: "GET INVOLVED",
    menu: [
      {
        title: "Donation",
        href: "/donation",
      },
      {
        title: "Volunteer",
        href: "/volunteer",
      },
    ],
  },
];
