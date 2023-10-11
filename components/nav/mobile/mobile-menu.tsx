import React, { FC, useState, useRef, useEffect } from "react";
import { type TWebNav } from "@/lib/types";
import MobileDropdown from "./mobile-dropdown";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
Link;

type MobileMenuProps = {
  nav?: TWebNav;
  depthLevel?: number;
  menu?: any;
  showNav: any;
  setShowNav: any;
};

const MobileMenu: FC<MobileMenuProps> = ({ nav, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: any) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    <>
      {nav?.menu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
            className="flex items-center justify-between mx-auto w-full py-3 text-[15px]"
          >
            {nav?.title}{" "}
            <span className="text-[12px] text-gray-600">
              <IoIosArrowDown />
            </span>
          </button>

          <MobileDropdown
            menus={nav.menu}
            depthLevel={depthLevel}
            dropdown={dropdown}
          />
        </>
      ) : (
        <a href="/#">{nav?.title}</a>
      )}
    </>
  );
};

export default MobileMenu;
