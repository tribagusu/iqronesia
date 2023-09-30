"use client";

import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useScrollListener from "@/hooks/useScroll";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
// import MobileNav from "./mobile-nav";
import logo from "@/public/logo.png";
import { webNavData } from "@/config/nav";
import NavMenu from "./nav-menu";

const WebNav = () => {
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();
  const [showInfo, setShowInfo] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [activeNav, setActiveNav] = useState(null);

  useEffect(() => {
    const _classList = [];
    if (scroll.y > 150) {
      _classList.push("info--hidden");
    }

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <div className={`web-header ${!showNav ? navClassList.join(" ") : null}`}>
      {showInfo && (
        <div className="info">
          <p className="text-center">
            You can make a difference! Support our community by{" "}
            <Link href="#" target="_blank" className="btn-sm-green">
              Donate
            </Link>
          </p>
        </div>
      )}
      <header className="web-nav">
        <div className="container flex justify-between items-center">
          <Link href="/" className="flex" onClick={() => setShowNav(false)}>
            <Image src={logo} alt="iqro" className="w-auto h-[35px]" />
          </Link>
          {webNavData?.length ? (
            <nav className="hidden md:flex relative ">
              {webNavData?.map((nav, index) => {
                const depthLevel = 0;
                return (
                  <NavMenu nav={nav} key={index} depthLevel={depthLevel} />
                );
              })}
            </nav>
          ) : null}

          <div className="bg-transparent w-10 h-10 flex justify-center items-center">
            <button
              className="text-darkPurple text-2xl p-2 md:hidden"
              onClick={() => setShowNav(!showNav)}
            >
              {showNav ? <AiOutlineClose /> : <FiMenu />}
            </button>
          </div>
        </div>
        {/* {showNav && (
          <MobileNav items={items} showNav={showNav} setShowNav={setShowNav} />
        )} */}
      </header>
    </div>
  );
};

export default WebNav;
