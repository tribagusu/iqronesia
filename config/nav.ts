import { type TWebNav, TDropdownMenu, TMenu } from "@/lib/types";

export const webNavData: TWebNav[] = [
  {
    title: "ABOUT",
    menu: [
      {
        title: "History",
        href: "about/history",
      },
      {
        title: "Organisation",
        href: "about/organisation",
      },
      {
        title: "Contact",
        href: "about/contact",
      },
      {
        title: "Iqro Centre Perth",
        href: "about/iqrocentreperth",
      },
    ],
  },
  {
    title: "PROGRAM",
    menu: [
      {
        title: "Da'wah",
        href: "program/dawah",
      },
      {
        title: "Fundraising",
        href: "program/fundraising",
      },
      {
        title: "Sisterhood",
        href: "program/sisterhood",
      },
      {
        title: "Social and Welfare",
        href: "program/social-and-welfare",
      },
      {
        title: "Sport and Leisure",
        href: "program/sport-and-leisure",
      },
    ],
  },
  {
    title: "NEWS",
    menu: [
      {
        title: "News",
        href: "news/news",
      },
      {
        title: "Media",
        href: "news/media",
      },
    ],
  },
  {
    title: "GET INVOLVED",
    menu: [
      {
        title: "Donation",
        href: "get-involved/donation",
      },
      {
        title: "Volunteer",
        href: "get-involved/volunteer",
      },
    ],
  },
];
