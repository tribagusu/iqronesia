import { Inter as FontSans } from "next/font/google";

import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import "../styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "islamic learning centre",
    "indonesian islamic community",
    "indonesian mosque/masjid in sydney australia",
  ],
  authors: [
    {
      name: "iqro",
      url: "https://iqro.org.au",
    },
  ],
  creator: "iqro",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   url: siteConfig.url,
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   siteName: siteConfig.name,
  // },
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon.png",
  //   apple: "/favicon.png",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.className} min-h-screen font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
