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
    ],
  },

  {
    title: "PROJECT",
    menu: [
      {
        title: "Events",
        href: "project/events",
      },
      {
        title: "Upgrading Masjid",
        href: "project/upgrading-masjid",
      },
      {
        title: "Iqro Perth",
        href: "project/iqro-perth",
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
      {
        title: "Youth (YES)",
        href: "program/youth-yes",
      },
      {
        title: "TPA Salsabeela",
        href: "program/tpa-salsabeela",
      },
    ],
  },
  {
    title: "MEDIA",
    menu: [
      {
        title: "News",
        href: "media/news",
      },
      {
        title: "Blog",
        href: "media/blog",
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
