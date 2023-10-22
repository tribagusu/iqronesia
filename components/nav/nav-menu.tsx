import React, { FC, useState, useRef, useEffect } from "react";
import { type TWebNav } from "@/lib/types";
import DropdownMenu from "./menu-dropdown";
import { IoIosArrowDown } from "react-icons/io";

type NavMenuProps = {
  nav?: TWebNav;
  depthLevel?: number;
  menu?: any;
};

const NavMenu: FC<NavMenuProps> = ({ nav, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef<HTMLLIElement>(null);

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

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {nav?.menu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
            className="flex items-center gap-1"
          >
            <span>{nav?.title}</span>
            <span>
              <IoIosArrowDown />
            </span>
          </button>
          <DropdownMenu
            menus={nav.menu}
            depthLevel={depthLevel}
            dropdown={dropdown}
            setDropdown={setDropdown}
          />
        </>
      ) : (
        <a href="/#">{nav?.title}</a>
      )}
    </li>
  );
};

export default NavMenu;
