import React from "react";
import "styles/styles.css";
import Hero from "@/components/home/hero";
import Hotline from "@/components/home/hotline";
import FeaturedVideo from "@/components/home/featured-video";
import RecentArticles from "@/components/home/recent-articles";
import Program from "@/components/home/program";
import Donate from "@/components/home/donate";
import ProjectHighlight from "@/components/home/project-highlight";
import Faq from "@/components/home/faq/faq";
import Join from "@/components/home/join";

export default function Home() {
  return (
    <>
      <Hero />
      <Hotline />
      <FeaturedVideo />
      <RecentArticles />
      <Program />
      <Donate />
      <ProjectHighlight />
      <Faq />
      <Join />
    </>
  );
}
