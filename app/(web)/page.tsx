import React from "react";
import "styles/styles.css";
import Hero from "@/components/hero";
import Hotline from "@/components/hotline";
import Featured from "@/components/featured";
import RecentArticles from "@/components/recent-articles";
import Program from "@/components/program";
import Donate from "@/components/donate";
import ProjectHighlight from "@/components/project-highlight";
import Faq from "@/components/faq/faq";
import Join from "@/components/join";

export default function Home() {
  return (
    <>
      <Hero />
      <Hotline />
      <Featured />
      <RecentArticles />
      <Program />
      <Donate />
      <ProjectHighlight />
      <Faq />
      <Join />
    </>
  );
}
