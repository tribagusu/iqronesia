import { type TWebNav } from "@/lib/types";

export const webNavData: TWebNav[] = [
  {
    title: "About",
    menu: [
      {
        title: "History",
        href: "history",
      },
      {
        title: "Organisation",
        href: "organisation",
      },
      {
        title: "Contact",
        href: "contact",
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
        title: "Event",
        href: "event",
      },
    ],
  },
  {
    title: "Media",
    menu: [
      {
        title: "Blog",
        href: "blog",
      },
      {
        title: "News",
        href: "news",
      },
    ],
  },
  {
    title: "Get Involved",
    menu: [
      {
        title: "Donation",
        href: "donation",
      },
      {
        title: "Volunteer",
        href: "volunteer",
      },
    ],
  },
];
