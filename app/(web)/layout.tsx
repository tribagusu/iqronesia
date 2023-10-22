import React, { FC } from "react";
import WebFooter from "@/components/footer";
import WebNav from "@/components/nav/web-nav";
import "styles/styles.css";

type WebLayoutProps = {
  children: React.ReactNode;
};

const WebLayout: FC<WebLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <WebNav />
      <main>{children}</main>
      <WebFooter />
    </div>
  );
};

export default WebLayout;
