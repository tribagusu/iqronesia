import React from "react";
import "styles/styles.css";
import Hero from "@/components/hero";
import Hotline from "@/components/hotline";
import Featured from "@/components/featured";
import RecentArticles from "@/components/recent-articles";

export default function Home() {
  return (
    <>
      <Hero />
      <Hotline />
      <Featured />
      <RecentArticles />
    </>
  );
}
