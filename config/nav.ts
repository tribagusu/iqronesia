import { type TWebNav } from "@/lib/types";

export const webNavData: TWebNav[] = [
  {
    title: "About",
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
    title: "Activities",
    menu: [
      {
        title: "Program",
        href: "program",
      },
      {
        title: "Project",
        href: "project",
      },
      {
        title: "Events",
        href: "events",
      },
    ],
  },

  // {
  //   title: "Project",
  //   menu: [
  //     {
  //       title: "Events",
  //       href: "project/events",
  //     },
  //     {
  //       title: "Upgrading Masjid",
  //       href: "project/upgrading-masjid",
  //     },
  //     {
  //       title: "Iqro Perth",
  //       href: "project/iqro-perth",
  //     },
  //   ],
  // },
  // {
  //   title: "Program",
  //   menu: [
  //     {
  //       title: "Da'wah",
  //       href: "program/dawah",
  //     },
  //     {
  //       title: "Fundraising",
  //       href: "program/fundraising",
  //     },
  //     {
  //       title: "Sisterhood",
  //       href: "program/sisterhood",
  //     },
  //     {
  //       title: "Social and Welfare",
  //       href: "program/social-welfare",
  //     },
  //     {
  //       title: "Sport and Leisure",
  //       href: "program/sport-leisure",
  //     },
  //     {
  //       title: "Youth (YES)",
  //       href: "program/youth-yes",
  //     },
  //     {
  //       title: "TPA Salsabeela",
  //       href: "program/tpa-salsabeela",
  //     },
  //   ],
  // },
  {
    title: "Media",
    menu: [
      {
        title: "Blog",
        href: "media/blog",
      },
      {
        title: "News",
        href: "media/news",
      },
    ],
  },
  {
    title: "Get Involved",
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
