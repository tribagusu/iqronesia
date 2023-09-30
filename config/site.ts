export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  // ogImage: string;
  links: {
    instagram: string;
  };
};

export const siteConfig: SiteConfig = {
  name: "iqro foundation",
  description: "iqro foundation",
  url: "https://iqro.org.au",
  // ogImage: "",
  links: {
    instagram: "https://instagram.com/iqro",
  },
};
